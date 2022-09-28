import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import ItemListContainer from '../components/ItemListContainer';


const Router = () => (

    <Routes>
        <Route >
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<div>404</div>} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    </Routes>
);

export default Router;