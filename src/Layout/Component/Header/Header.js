import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
    BellOutlined,
    CaretDownOutlined,
    CloseOutlined,
    ContactsOutlined,
    DownOutlined,
    GlobalOutlined,
    GoldOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    MoneyCollectOutlined,
    PayCircleOutlined,
    ShopOutlined,
    ShoppingOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons/lib/icons';
import { HeartOutlined } from '@ant-design/icons/lib/icons';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useSelector, useDispatch } from 'react-redux';

// import Image from '~/component/image';
import config from '~/config';
import styles from './Header.module.scss';
import Search from './Search';
import Image from '~/component/image';
import Menu from '~/component/Popper/Menu';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import Cart from './Cart/Cart';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languge',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Enlish',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [isActive, setIsActive] = useState(false);

    const user = useSelector((state) => state.auth.user);

    const currentUser = !!localStorage.getItem('user');

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: 'Account/@trung',
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    const userMenuLogOut = [
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignIn} />,
            title: 'Log In',
            to: '/Login',
            separate: true,
        },
    ];

    const handlerMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //do sth
                break;
            default:
        }
    };

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    const HandleCloseClick = () => {
        setIsActive(!isActive);
    };

    console.log(user);

    return (
        <header className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    {/* logo */}
                    <Link to={config.routes.home} className={cx('logo')}>
                        {/* <img src={images.logo} alt="tiktok" /> */}
                        <span>
                            ONLY<span>ME</span>
                        </span>
                    </Link>

                    {/* Some page */}

                    {/* Search */}
                    <div className={cx('search')}>
                        <Search className={cx('search-input')} />
                    </div>

                    {/* Action */}
                    <div className={cx('action')}>
                        {/* Wishlist */}
                        <div className={cx('wishlist')}>
                            <HeartOutlined className={cx('wishlist-icon')} value={''} />
                        </div>
                        {/* Cart */}
                        <Cart />

                        {/* Notify */}
                        <Tippy
                            interactive
                            placement="top-end"
                            trigger="mouseenter"
                            delay={[0, 0]}
                            render={(attrs) => (
                                <div className={cx('notify-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('notify-title')}>notification</h4>

                                        {/* {myCart.slice(0, 5).map((result) => (
                                            <CardHorizontal key={result._id} data={result} />
                                        ))} */}

                                        <h4 className={cx('notify-bottom')}>
                                            <Link>More</Link>
                                        </h4>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('bell')}>
                                <BellOutlined className={cx('bell-icon')} value={'99+'} />
                            </div>
                        </Tippy>

                        <Menu items={currentUser ? userMenu : userMenuLogOut} onChange={handlerMenuChange}>
                            {currentUser ? (
                                <Image
                                    src={
                                        user.avatar == null
                                            ? require('~/public/uploads/users/user-img.jpg')
                                            : user.avatar
                                    }
                                    className={cx('user-avatar')}
                                    alt={user.name}
                                    fallback=""
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>

                    <div className={cx('mobile')}>
                        <div>
                            <MenuOutlined onClick={handleButtonClick} className={cx('menu-icon')} />
                        </div>
                        <div className={cx('menu-mobile', isActive ? 'active' : '')}>
                            <div className={cx('menu-close')}>
                                <CloseOutlined onClick={HandleCloseClick} />
                            </div>
                            {/* info user */}
                            <div className={cx('user-info')}>
                                {/* background */}
                                <div className={cx('user-background')}></div>

                                {/* img user */}
                                <div className={cx('user-img')}>
                                    <img src={require('~/public/uploads/users/user-img.jpg')} />
                                </div>

                                <div className={cx('user-name')}>
                                    <span>Nguyễn Hoàng Trung</span>
                                </div>
                            </div>
                            {/* user-action */}
                            <div className={cx('user-menu')}>
                                <div className={cx('user-menu-item')}>
                                    <GlobalOutlined />
                                    <div className={cx('item-content')}>
                                        <span>VIE</span>
                                        <DownOutlined className={cx('icon-dropdown')} />
                                    </div>
                                </div>

                                <div className={cx('user-menu-item')}>
                                    <PayCircleOutlined />
                                    <div className={cx('item-content')}>
                                        <span>USA</span>
                                        <DownOutlined className={cx('icon-dropdown')} />
                                    </div>
                                </div>

                                <div className={cx('user-menu-item')}>
                                    <UserOutlined />
                                    <div className={cx('item-content')}>
                                        <span>MY ACCOUNT</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>

                                <div className={cx('user-menu-item')}>
                                    <BellOutlined />
                                    <div className={cx('item-content')}>
                                        <span>NOTIFICATION</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>
                                <div className={cx('user-menu-item')}>
                                    <HeartOutlined />
                                    <div className={cx('item-content')}>
                                        <span>WISH LIST</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>
                                <div className={cx('user-menu-item')}>
                                    <ShoppingOutlined />
                                    <div className={cx('item-content')}>
                                        <span>YOUR CART</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>

                                <div className={cx('user-menu-item')}>
                                    <HomeOutlined />
                                    <div className={cx('item-content')}>
                                        <span>HOME</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>
                                <div className={cx('user-menu-item')}>
                                    <TeamOutlined />
                                    <div className={cx('item-content')}>
                                        <span>ABOUT US</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>
                                <div className={cx('user-menu-item')}>
                                    <ContactsOutlined />
                                    <div className={cx('item-content')}>
                                        <span>CONTACT</span>
                                        {/* <DownOutlined className={cx('icon-dropdown')} /> */}
                                    </div>
                                </div>

                                {/* <Menu items={userMenuLogOut} onChange={handlerMenuChange}></Menu> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
