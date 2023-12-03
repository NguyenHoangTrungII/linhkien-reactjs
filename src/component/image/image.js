import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customfallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const HandlerError = () => {
        setFallBack(customfallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src || fallback}
            {...props}
            onError={HandlerError}
            alt={alt}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
