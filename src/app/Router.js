import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemList from '../components/ItemList';
import ItemListContainer from '../components/ItemListContainer';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;