import React, { useEffect, useState } from 'react';
import { Avatar, Button, Input } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useDispatch } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './MenuAccount.module.scss';
import { AddAPhotoOutlined } from '@mui/icons-material';
import { uploadAvatar } from '~/redux/actions/authAction';

const cx = classNames.bind(styles);

const UploadAvatar = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(selectedFile);
    };

    useEffect(() => {
        const uploadImage = async () => {
            try {
                if (selectedFile) {
                    await dispatch(uploadAvatar(selectedFile));
                }
            } catch (err) {
                console.error(err);
            }
        };

        uploadImage();
    }, [selectedFile, dispatch]);

    return (
        <div className={cx('upload-wrapper')}>
            <input
                accept="image/*"
                id="avatar-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="avatar-upload">
                <div className={cx('upload-avatar')}>
                    <Avatar
                        alt="Avatar"
                        src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
                        className={cx('upload-avatar')}
                    />
                </div>
            </label>
            <Input id="avatar-upload-button" type="file" style={{ display: 'none' }} />
            <label htmlFor="avatar-upload-button" className={cx('upload-button')}>
                {/* <Button
                    variant="contained"
                    component="span"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        transform: 'translate(50%, 50%)',
                    }}
                > */}
                <div className={cx('avatar-overlay')}>
                    <CameraAltIcon className={styles['camera-icon']} />
                </div>
                {/* </Button> */}
            </label>
            {/* <Button variant="contained" onClick={handleUpload}>
                Upload
            </Button> */}
        </div>
    );
};

export default UploadAvatar;
