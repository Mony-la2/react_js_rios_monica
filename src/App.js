import NavBar from "./components/NavBar";
import './app/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterApp from "./app/Router";
import Provider from "./app/Provider";
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  return (

    <Provider>
      <Router>
        <NavBar />
        <RouterApp />
      </Router>
    </Provider>

  )
}
export default App;