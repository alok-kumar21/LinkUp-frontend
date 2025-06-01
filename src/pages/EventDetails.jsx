import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const EventDetails = () => {
  const { data, loading, error } = useFetch(
    "https://meet-up-backend-pi.vercel.app/events"
  );
  const eventId = useParams();
  const eventDetail = data?.find((event) => eventId.eventId === event._id);

  return (
    <>
      <Header />
      {loading && (
        <div class="alert alert-success text-center" role="alert">
          Loading...
        </div>
      )}
      {error && (
        <div class="alert alert-danger text-center" role="alert">
          Failed to get Details.
        </div>
      )}
      {eventDetail && (
        <main className=" mb-5 bg-light">
          <section className="container">
            <div className=" d-flex justify-content-between">
              <div>
                <h2>{eventDetail.title}</h2>
                <span>Hosted By:</span>
                <br />
                <span>
                  <strong>{eventDetail.host}</strong>
                </span>
                <br />
                <br />
                <img
                  src={eventDetail.eventImageUrl}
                  alt="image"
                  className="img-fluid"
                  style={{ width: "35rem", height: "20rem" }}
                />
                <br />
                <br />
                <h4>
                  <strong>Details:</strong>
                </h4>
                <p className="text-wrap" style={{ width: "37rem" }}>
                  {eventDetail.details}
                </p>
                <h4>
                  <strong>Addition Information:</strong>
                </h4>
                <span>
                  <strong>Dress Code:</strong> {eventDetail.dressCode}
                </span>
                <br />
                <span>
                  <strong>Age Restriction:</strong>{" "}
                  {eventDetail.ageRestrictions}
                </span>
                <h4>
                  <br />
                  <strong>Event Tags:</strong>
                </h4>
                <br />
                <span className="p-2  text-light bg-danger rounded m-2">
                  {eventDetail.tags[0]}
                </span>
                <span className="p-2  text-light bg-danger rounded m-2">
                  {eventDetail.tags[1]}
                </span>
              </div>

              <div className="w-25">
                <div className=" bg-white rounded mt-2 p-3 shadow-sm">
                  <p className="text-secondary">
                    <i className="bi bi-watch"></i>
                    <span> </span>
                    {eventDetail.createdAt}
                  </p>
                  <p className="text-secondary">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span> </span>
                    {eventDetail.address}
                  </p>
                  <p className="text-secondary">
                    <i class="bi bi-currency-rupee"></i>
                    <span> </span>
                    {eventDetail.ticketPrice}
                  </p>
                </div>
                <br />
                <h3>Speakers: ({eventDetail.speakers.length})</h3>
                <div className="d-flex mt-4 ">
                  <div className="shadow-sm bg-white p-3 me-3 rounded ">
                    <img
                      src={eventDetail.speakersImageUrl[0]}
                      className=" img-fluid rounded-circle"
                      alt="iamge speakers"
                      style={{ width: "100px" }}
                    />

                    <p className="mt-1 text-center">
                      {eventDetail.speakers[0]}
                    </p>
                  </div>

                  <div className="shadow-sm bg-white p-3 me-5 rounded">
                    <img
                      src={eventDetail.speakersImageUrl[1]}
                      className=" img-fluid rounded-circle"
                      alt="iamge speakers"
                      style={{ width: "100px" }}
                    />

                    <p className="mt-1 text-center ">
                      {eventDetail.speakers[1]}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <button className=" btn btn-danger me-5 mt-4 px-5">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default EventDetails;
