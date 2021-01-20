import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemCount stock="15" initial="1" />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
