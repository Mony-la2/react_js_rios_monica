import NavBar from "./components/NavBar";
import './app/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./app/Router";
import Provider from "./app/Provider";
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}
export default App;