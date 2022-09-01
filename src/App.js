import NavBar from "./components/NavBar";
import './app/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <div>
      <NavBar />
      <ItemListContainer greetings={'BIENVENIDOS'} />
    </div>
  )
}
export default App;