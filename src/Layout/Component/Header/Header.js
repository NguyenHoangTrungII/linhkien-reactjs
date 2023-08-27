import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { BellOutlined } from '@ant-design/icons/lib/icons';
import { HeartOutlined } from '@ant-design/icons/lib/icons';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

// import Image from '~/component/image';
import images from '~/assets/images';
import config from '~/config';
import styles from './Header.module.scss';
import Search from './Search';
import Image from '~/component/image';
import Menu from '~/component/Popper/Menu';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import CardHorizontal from '~/component/CardHorizontal';

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
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
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
            to: '/logout',
            separate: true,
        },
    ];

    const myCart = [
        {
            name: 'RAM Corsair Vengeance RGB Pro 16GB (2 x 8GB)',
            _id: '64a051007880d7c1ef9f0c8b',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/yuil8c8kknqv4lkjqexi.jpg',
            categoryName: 'RAM',
        },
        {
            name: 'RAM Kingston HyperX Fury 32GB (2 x 16GB)',
            _id: '64a0515c7880d7c1ef9f0d53',
            thumbnailUrl: null,
            categoryName: 'RAM',
        },
        {
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            _id: '64a051a57880d7c1ef9f0e20',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228286/product-cloud/xmyljxoyvob5buxpxhs8.jpg',
            categoryName: 'RAM',
        },
        {
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            _id: '64a051f47880d7c1ef9f0ee7',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/f5tphkwncshmecepj3ql.png',
            categoryName: 'RAM',
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

    return (
        <header className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    {/* logo */}
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>

                    {/* Some page */}

                    {/* Search */}
                    <div className="search">
                        <Search />
                    </div>

                    {/* Action */}
                    <div className={cx('action')}>
                        {/* Wishlist */}
                        <div className={cx('wishlist')}>
                            <HeartOutlined className={cx('wishlist-icon')} value={'99+'} />
                        </div>
                        {/* Cart */}
                        <Tippy
                            interactive
                            placement="top-end"
                            trigger="mouseenter"
                            delay={[0, 0]}
                            render={(attrs) => (
                                <div className={cx('cart-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('cart-title')}>My cart</h4>

                                        {myCart.slice(0, 5).map((result) => (
                                            <CardHorizontal key={result._id} data={result} />
                                        ))}

                                        <h4 className={cx('cart-bottom')}>
                                            <Link>51 another products</Link>
                                        </h4>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('cart')}>
                                <ShoppingCartOutlined className={cx('cart-icon')} value={'99+'} />
                                {/* <div className={cx('cart-qty')}>12</div> */}
                            </div>
                        </Tippy>

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

                                        {myCart.slice(0, 5).map((result) => (
                                            <CardHorizontal key={result._id} data={result} />
                                        ))}

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
                        {/* User */}
                        {/* <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4004db3287a0f283a9a69bfcdbd9b3d1~c5_100x100.jpeg?x-expires=1682298000&x-signature=%2Br1h2i4RNRtVPFhz2tPI6GGNZC4%3D"
                        className={cx('user-avatar')}
                        alt="Nguyen Van A"
                        fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                    /> */}

                        <Menu items={userMenu} onChange={handlerMenuChange}>
                            {currentUser ? (
                                <Image
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4004db3287a0f283a9a69bfcdbd9b3d1~c5_100x100.jpeg?x-expires=1682298000&x-signature=%2Br1h2i4RNRtVPFhz2tPI6GGNZC4%3D"
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
