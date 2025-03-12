import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import AllEvents from "./pages/AllEvents";

function App() {
  return (
    <>
      <Header />
      <main className="bg-light">
        <AllEvents />
      </main>
    </>
  );
}

export default App;
