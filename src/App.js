import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>

      <div>
        <ItemListContainer greeting='Bonfil'/>
      </div>
    </div>
  );
}

export default App;
console.log("hi")