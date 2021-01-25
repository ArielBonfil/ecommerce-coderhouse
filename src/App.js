import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
        ---------------------------separador ya que aun no hay
        routes------------------------------------------
      </div>
      <div>
        <div>Item Detail:</div>
        <ItemDetailContainer />
      </div>
      <div>
        ----------------------------------separador ya que aun no hay
        routes-----------------------------------
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
