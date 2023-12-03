import config from '~/config';
import AccountDetail from '~/pages/AccountDetail/AccountDetail';
import CheckOut from '~/pages/CheckOut/CheckOut';
import Contact from '~/pages/Contact/Contact';
import Cart from '~/pages/Cart';

// import { HeaderOnly } from '~/layouts/';

import Home from '~/pages/Home';
import LogIn from '~/pages/LogIn/LogIn';
import ProductDetail from '~/pages/ProductDetail';
import SignUp from '~/pages/SignUp/SignUp';
import WishList from '~/pages/WishList/WishList';
import ProductList from '~/pages/ProductList';

const publicRouters = [
    { path: config.routes.productdetail, component: ProductDetail },
    { path: config.routes.home, component: Home },
    { path: config.routes.wishlist, component: WishList },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.login, component: LogIn, layout: 'login' },
    { path: config.routes.signup, component: SignUp, layout: 'login' },
    { path: config.routes.accountdetail, component: AccountDetail },
    { path: config.routes.productlist, component: ProductList },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
