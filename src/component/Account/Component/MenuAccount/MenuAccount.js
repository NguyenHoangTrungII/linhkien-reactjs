import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './MenuAccount.module.scss';
import { ThemeConsumer } from 'styled-components';
import UploadAvatar from './UploadAvatar';
import { Input, Radio } from '@mui/material';
import FormCustomer from '~/component/FormCustomer/FormCustomer';
import Button from '~/component/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from '~/component/OrderCard/OrderCard';
import PaginationCustomer from '~/component/PaginationCustomer/PaginationCustomer';
import OrderTap from '~/component/OrderTap/OrderTap';

const cx = classNames.bind(styles);

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));

const MenuAccount = () => {
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'inherit',
                textTransform: 'none',
                fontSize: 16,
            },
        },
    });

    // const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState('Profile');
    const [enableEdit, setenableEdit] = useState(true);
    const [value, setValue] = React.useState('1');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const user = useSelector((state) => state.auth.user);

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleEditClick = () => {
        setenableEdit(false);
    };

    const handleSubmitForm = (formData) => {
        // Xử lý dữ liệu formData ở đây (ví dụ: gửi lên server)
        console.log('Form submitted with data:', formData);
    };

    const ariaLabel = { 'aria-label': 'description' };

    const data = [
        {
            id: 6,
            status: '1',
            address: 'UIT, 123, 123, 123',
            total: 3000000,
            phone: '0123456879',
            userId: null,
            orderDetails: [
                {
                    id: 0,
                    quantity: 1,
                    price: 1800000,
                    product: {
                        id: 1,
                        name: 'HDD Western Digital Blue 4TB',
                        oldPrice: 2000000,
                        price: 1800000,
                        quantity: 10,
                        description:
                            'Ổ cứng HDD Western Digital Blue 4TB là một giải pháp lưu trữ tốt cho nhu cầu của bạn. Với tốc độ cao, dung lượng lớn và độ bền cao, nó sẽ giúp bạn lưu trữ và truy xuất dữ liệu một cách nhanh chóng và tin cậy. Sản phẩm được thiết kế đặc biệt để đáp ứng các yêu cầu của người dùng với chất lượng đáng tin cậy và hiệu suất cao.',
                        statusProduct: 1,
                        categoryId: 5,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 6,
                },
                {
                    id: 0,
                    quantity: 1,
                    price: 1200000,
                    product: {
                        id: 2,
                        name: 'SSD Samsung 500GB',
                        oldPrice: 1500000,
                        price: 1200000,
                        quantity: 10,
                        description:
                            'Ổ cứng SSD Samsung 500GB sẽ mang lại trải nghiệm tốc độ cao và hiệu suất ổn định cho hệ thống của bạn. Với dung lượng lớn, bạn có thể lưu trữ nhiều dữ liệu quan trọng và truy xuất chúng một cách nhanh chóng. Sản phẩm này được đánh giá cao về độ bền và đáng tin cậy, giúp bạn an tâm sử dụng trong thời gian dài mà không phải lo lắng về sự mất mát dữ liệu.',
                        statusProduct: 1,
                        categoryId: 4,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 6,
                },
            ],
            createdDate: '2024-02-15T15:15:22.8534861',
            updatedDate: null,
        },
        {
            id: 5,
            status: '1',
            address: 'UIT, 123, 123, 123',
            total: 3000000,
            phone: '1234567890',
            userId: null,
            orderDetails: [
                {
                    id: 0,
                    quantity: 1,
                    price: 1800000,
                    product: {
                        id: 1,
                        name: 'HDD Western Digital Blue 4TB',
                        oldPrice: 2000000,
                        price: 1800000,
                        quantity: 10,
                        description:
                            'Ổ cứng HDD Western Digital Blue 4TB là một giải pháp lưu trữ tốt cho nhu cầu của bạn. Với tốc độ cao, dung lượng lớn và độ bền cao, nó sẽ giúp bạn lưu trữ và truy xuất dữ liệu một cách nhanh chóng và tin cậy. Sản phẩm được thiết kế đặc biệt để đáp ứng các yêu cầu của người dùng với chất lượng đáng tin cậy và hiệu suất cao.',
                        statusProduct: 1,
                        categoryId: 5,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 5,
                },
                {
                    id: 0,
                    quantity: 1,
                    price: 1200000,
                    product: {
                        id: 2,
                        name: 'SSD Samsung 500GB',
                        oldPrice: 1500000,
                        price: 1200000,
                        quantity: 10,
                        description:
                            'Ổ cứng SSD Samsung 500GB sẽ mang lại trải nghiệm tốc độ cao và hiệu suất ổn định cho hệ thống của bạn. Với dung lượng lớn, bạn có thể lưu trữ nhiều dữ liệu quan trọng và truy xuất chúng một cách nhanh chóng. Sản phẩm này được đánh giá cao về độ bền và đáng tin cậy, giúp bạn an tâm sử dụng trong thời gian dài mà không phải lo lắng về sự mất mát dữ liệu.',
                        statusProduct: 1,
                        categoryId: 4,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 5,
                },
            ],
            createdDate: '2024-02-15T14:47:08.5368908',
            updatedDate: null,
        },
        {
            id: 4,
            status: '2',
            address: 'UIT, Phường Đông, 11, Hồ Chí Minh',
            total: 19200000,
            phone: '123456789',
            userId: null,
            orderDetails: [
                {
                    id: 0,
                    quantity: 3,
                    price: 1800000,
                    product: {
                        id: 1,
                        name: 'HDD Western Digital Blue 4TB',
                        oldPrice: 2000000,
                        price: 1800000,
                        quantity: 10,
                        description:
                            'Ổ cứng HDD Western Digital Blue 4TB là một giải pháp lưu trữ tốt cho nhu cầu của bạn. Với tốc độ cao, dung lượng lớn và độ bền cao, nó sẽ giúp bạn lưu trữ và truy xuất dữ liệu một cách nhanh chóng và tin cậy. Sản phẩm được thiết kế đặc biệt để đáp ứng các yêu cầu của người dùng với chất lượng đáng tin cậy và hiệu suất cao.',
                        statusProduct: 1,
                        categoryId: 5,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 4,
                },
                {
                    id: 0,
                    quantity: 4,
                    price: 1200000,
                    product: {
                        id: 2,
                        name: 'SSD Samsung 500GB',
                        oldPrice: 1500000,
                        price: 1200000,
                        quantity: 10,
                        description:
                            'Ổ cứng SSD Samsung 500GB sẽ mang lại trải nghiệm tốc độ cao và hiệu suất ổn định cho hệ thống của bạn. Với dung lượng lớn, bạn có thể lưu trữ nhiều dữ liệu quan trọng và truy xuất chúng một cách nhanh chóng. Sản phẩm này được đánh giá cao về độ bền và đáng tin cậy, giúp bạn an tâm sử dụng trong thời gian dài mà không phải lo lắng về sự mất mát dữ liệu.',
                        statusProduct: 1,
                        categoryId: 4,
                        brandId: 1,
                        images: [
                            {
                                id: 1,
                                images: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                                isThumbail: true,
                            },
                        ],
                    },
                    orderId: 4,
                },
                {
                    id: 0,
                    quantity: 2,
                    price: 4500000,
                    product: {
                        id: 3,
                        name: 'CPU Intel Core i7-10700K',
                        oldPrice: 5000000,
                        price: 4500000,
                        quantity: 10,
                        description:
                            'CPU Intel Core i7-10700K là một bộ xử lý mạnh mẽ dành cho máy tính cá nhân. Với kiến trúc hiện đại và tốc độ xung nhịp cao, nó cung cấp hiệu suất vượt trội cho các ứng dụng đa nhiệm và các tác vụ yêu cầu sức mạnh xử lý. Bộ vi xử lý này còn được trang bị công nghệ tản nhiệt tiên tiến, đảm bảo nhiệt độ hoạt động ổn định và giữ cho hệ thống luôn mát mẻ trong quá trình hoạt động.',
                        statusProduct: 1,
                        categoryId: 1,
                        brandId: 2,
                        images: [],
                    },
                    orderId: 4,
                },
            ],
            createdDate: '2024-02-15T13:43:41.0602144',
            updatedDate: null,
        },
    ];
    const renderContent = () => {
        switch (selectedItem) {
            case 'Profile':
                return (
                    // <ThemeProvider theme={theme} >
                    <Typography variant="h5">
                        <div>
                            <FormCustomer label={'Profile '} className={cx('form-customer')}>
                                <Input
                                    placeholder="Name"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Adress"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Phone"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <div>
                                    {/* <input
                                    type="radio"
                                    className={cx('COD-option')}
                                    name="radio-buttons"
                                    // onClick={handlePlaceOrderButton}
                                />

                                <div>
                                    <label>Cash on delivery</label>
                                </div> */}
                                </div>

                                {/* <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
                            <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
                            </FormCustomer>
                        </div>
                        <div className={cx('group-btn')}>
                            <Button outline className={cx('btn')} onClick={handleEditClick}>
                                Edit
                            </Button>
                            <Button primary className={cx('btn')}>
                                Save
                            </Button>
                        </div>
                    </Typography>
                    // <ThemeProvider/>
                );
            case 'Change Password':
                return (
                    <Typography variant="h5">
                        <div>
                            <FormCustomer label={'Change Password '} className={cx('form-customer')}>
                                <Input
                                    placeholder="Name"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Adress"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Phone"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <div>
                                    {/* <input
                            type="radio"
                            className={cx('COD-option')}
                            name="radio-buttons"
                            // onClick={handlePlaceOrderButton}
                        />

                        <div>
                            <label>Cash on delivery</label>
                        </div> */}
                                </div>

                                {/* <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
                    <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
                            </FormCustomer>
                        </div>
                        <div className={cx('group-btn')}>
                            <Button outline className={cx('btn')} onClick={handleEditClick}>
                                Edit
                            </Button>
                            <Button primary className={cx('btn')}>
                                Save
                            </Button>
                        </div>
                    </Typography>
                );
            case 'Order':
                return (
                    <Typography variant="h5">
                        <Tabs className={cx('tab-Order')}>
                            <TabList className={cx('tabList-Order')}>
                                <Tab>Waiting</Tab>
                                <Tab>Checked</Tab>
                            </TabList>

                            <TabPanel>
                                {/* <div>
                                    {data.map((item, index) => {
                                        return <OrderCard data={item}>aaaa</OrderCard>;
                                    })}
                                </div>
                                <div className={cx('footer-tab')}>
                                    <PaginationCustomer />
                                </div> */}

                                <OrderTap data={data} />
                            </TabPanel>
                            <TabPanel>{/* <OrderTap data={data} /> */}</TabPanel>
                        </Tabs>
                    </Typography>
                );
            case 'Logout':
                return <Typography variant="h5">Logged out</Typography>;
            default:
                return (
                    // <ThemeProvider theme={theme} >
                    <Typography variant="h5">
                        <div>
                            <FormCustomer label={'Profile '} className={cx('form-customer')}>
                                <Input
                                    placeholder="Name"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Adress"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                                <Input
                                    placeholder="Phone"
                                    inputProps={ariaLabel}
                                    className={cx('account-input')}
                                    disabled={enableEdit}
                                />
                            </FormCustomer>
                        </div>
                        <div className={cx('group-btn')}>
                            <Button outline className={cx('btn')} onClick={handleEditClick}>
                                Edit
                            </Button>
                            {/* <Button primary className={cx('btn')} onClick={() => handleSubmitForm(formData)}>
                                Save
                            </Button> */}
                        </div>
                    </Typography>
                    // <ThemeProvider/>
                );
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={cx('root')}>
                <div className={cx('drawer')} variant="permanent" anchor="left">
                    <List className={cx('menu-list')} theme={theme}>
                        <UploadAvatar img={user.avatar} />
                        {['Profile', 'Change Password', 'Order', 'Logout'].map((text, index) => (
                            <ListItem button key={text} onClick={() => handleMenuItemClick(text)}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
                <main className={cx('content')}>{renderContent()}</main>
            </div>
        </ThemeProvider>
    );
};

export default MenuAccount;
