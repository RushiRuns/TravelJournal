import Navbar from "./components/Navbar";
import List from "./components/List";
import Data from "./data";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <section>
        {Data.map((data) => (
          <List key={data.id} {...data} />
        ))}
      </section>
    </div>
  );
}

export default App;
