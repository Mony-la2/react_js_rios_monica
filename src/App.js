import NavBar from "./components/NavBar";
import './app/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import Router from "./app/Router";

const App = () => {

  return (
    <div>
      <NavBar />
      <Router />
      {/* <ItemListContainer greetings={'BIENVENIDOS'} /> */}
    </div>
  )
}
export default App;