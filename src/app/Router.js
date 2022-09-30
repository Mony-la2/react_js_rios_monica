import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import ItemListContainer from '../components/ItemListContainer';


const RouteApp = () => (

    <Routes >
        <Route exact index element={<ItemListContainer />} />
        <Route exact path="/Category/:CategoryId" element={<ItemListContainer />} />
        <Route exact path="/Item/:Id" element={<ItemDetailContainer />} />
        <Route exact path="*" element={<div>404</div>} />
        <Route exact path="/Cart" element={<Cart />} />
    </Routes>

);

export default RouteApp;