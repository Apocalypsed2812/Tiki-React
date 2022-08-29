// import config from '~/config';

// //Layout
// import { HeaderOnly } from '~/layouts';

//Pages
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product_detail', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
