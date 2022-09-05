// import config from '~/config';

// //Layout
// import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';
import UserInfor from '~/pages/UserInfor';
import Order from '~/pages/Order';
import LayoutSidebar from '~/layouts/LayoutSidebar';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product_detail/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/account', component: UserInfor, layout: LayoutSidebar },
    { path: '/order', component: Order, layout: LayoutSidebar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
