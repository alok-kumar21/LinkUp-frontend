import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [eventType, setEventType] = useState("All");
  const [title, setTitle] = useState();

  const { data, loading, error } = useFetch(
    title
      ? `https://meet-up-backend-pi.vercel.app/events/title/${title}`
      : `https://meet-up-backend-pi.vercel.app/events`
  );

  // handle search event
  const handleSearch = (event) => {
    setTitle(event.target.value);
  };

  // handle the event type
  const handleSelect = (item) => {
    setEventType(item);
  };

  // event Type Operation
  const eventDataType =
    eventType === "All"
      ? data
      : data?.filter((event) => eventType === event.eventType);

  return (
    <main>
      <section className="">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4 text-start text-center">
              <h2 className="">Linkup Events</h2>
            </div>
            <div className="col-md-4 text-center my-2">
              <div class="dropdown">
                <a
                  class="btn btn-light dropdown-toggle text-secondary"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Event Type
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <button
                      class="dropdown-item"
                      href="#"
                      value="All"
                      onClick={() => handleSelect("All")}
                    >
                      Both
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      href="#"
                      value="All"
                      onClick={() => handleSelect("offline")}
                    >
                      offline
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      href="#"
                      value="online"
                      onClick={() => handleSelect("online")}
                    >
                      online
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex input-group w-auto ">
                <div className="bg-light mt-2 input-group  border rounded bg-white">
                  <i class="bi bi-search btn  "></i>

                  <input
                    onChange={handleSearch}
                    type="search"
                    className="form-control rounded border-white"
                    placeholder="Search by title"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </div>
            </div>
          </div>

          {loading && (
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <p
                      href="#"
                      tabindex="-1"
                      className=" disabled placeholder col-6"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div class="alert alert-danger text-center" role="alert">
              Failed to get the Data from API.
            </div>
          )}

          <div className="mx-3 row mt-4">
            {eventDataType?.map((event) => (
              <div key={event._id} className="col-md-4 mt-5">
                <div
                  className="card position-relative shadow-sm border-06-"
                  style={{ height: "20rem" }}
                >
                  <img
                    src={event.eventImageUrl}
                    className="img-fluid rounded"
                    alt="iamge Here"
                    style={{ height: "50%", objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 start-0 p-2 bg-light rounded m-2">
                    {event.eventType} Event
                  </span>
                  <Link
                    to={`/events/${event._id}`}
                    className="card-body text-decoration-none"
                  >
                    <p>
                      <small>{event.createdAt}</small>
                    </p>
                    <h4 className="card-title">{event.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllEvents;
