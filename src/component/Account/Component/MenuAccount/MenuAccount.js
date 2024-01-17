import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import classNames from 'classnames/bind';
import styles from './MenuAccount.module.scss';
import { ThemeConsumer } from 'styled-components';
import UploadAvatar from './UploadAvatar';
import { Input, Radio } from '@mui/material';

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

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
    };

    const ariaLabel = { 'aria-label': 'description' };

    const renderContent = () => {
        switch (selectedItem) {
            case 'Profile':
                return (
                    // <ThemeProvider theme={theme} >
                    <Typography variant="h5">
                        <div>
                            <Input placeholder="Name" inputProps={ariaLabel} className={cx('account-input')} />
                            <Input placeholder="Adress" inputProps={ariaLabel} className={cx('account-input')} />
                            <Input placeholder="Phone" inputProps={ariaLabel} className={cx('account-input')} />
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
                        </div>
                    </Typography>
                    // <ThemeProvider/>
                );
            case 'My account':
                return <Typography variant="h5">My Account Details</Typography>;
            case 'Logout':
                return <Typography variant="h5">Logged out</Typography>;
            default:
                return <Typography variant="h5">Profile Information</Typography>;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={cx('root')}>
                <div className={cx('drawer')} variant="permanent" anchor="left">
                    <List className={cx('menu-list')} theme={theme}>
                        <UploadAvatar />
                        {['Profile', 'My account', 'Change Password', 'Order', 'Logout'].map((text, index) => (
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
