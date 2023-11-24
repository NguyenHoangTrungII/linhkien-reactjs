import ClipLoader from 'react-spinners/ClipLoader';
import { SyncLoader } from 'react-spinners';

import classNames from 'classnames/bind';
import styles from './OverlayLoading.module.scss';

const cx = classNames.bind(styles);

function OverlayLoading(isLoading) {
    return (
        <div class={cx('overlay')}>
            <div class={cx('spinner')}>
                <ClipLoader
                    color={'#ffff'}
                    loading={!isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <SyncLoader color="#DB4444" loading={isLoading} />
            </div>
        </div>
    );
}

export default OverlayLoading;
