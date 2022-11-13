// import config from '~/config';

// //Layout
// import { HeaderOnly } from '~/layouts';
import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import LayoutSidebar from '~/layouts/LayoutSidebar';
import LayoutAdmin from '~/layouts/LayoutAdmin';
import LayoutNoneHeader from '~/layouts/LayoutNoneHeader';

//Pages
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';
import UserInfor from '~/pages/UserInfor';
import Order from '~/pages/Order';
import { HomeAdmin } from '~/pages/Admin/Home';
import { ProductAdmin } from '~/pages/Admin/Product';
import AddProduct from '~/pages/Admin/AddProduct';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
// import { UserAdmin } from '~/pages/Admin/User';
// import { CategoryAdmin } from '~/pages/Admin/Category';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: LayoutNoneHeader },
    { path: '/register', component: Register, layout: LayoutNoneHeader },
    { path: '/product_detail/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/account', component: UserInfor, layout: LayoutSidebar },
    { path: '/order', component: Order, layout: LayoutSidebar },
    { path: '/admin', component: HomeAdmin, layout: LayoutAdmin },
    { path: '/admin/product', component: ProductAdmin, layout: LayoutAdmin },
    { path: '/admin/add_product', component: AddProduct, layout: LayoutAdmin },
    // { path: '/admin/user', component: isAdmin ? UserAdmin : Home, layout: LayoutAdmin },
    // { path: '/admin/category', component: isAdmin ? CategoryAdmin : Home, layout: LayoutAdmin },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
