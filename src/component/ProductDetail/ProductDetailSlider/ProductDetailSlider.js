import React, { useState, useRef, useEffect } from 'react';
import styles from './ProductDetailSlider.module.scss';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

const ProductDetailSlider = () => {
    const images = [
        require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg'),
        // require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg'),
        require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_F4-3000C16D-32GTZR.jpg'),
        require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg'),
        require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg'),
        require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg'),

        // ... Các ảnh khác
    ];

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
        setNav1(slider1Ref.current);
        setNav2(slider2Ref.current);
    }, []);

    const settings1 = {
        asNavFor: nav2,
        ref: slider1Ref,
    };

    const settings2 = {
        asNavFor: nav1,
        ref: slider2Ref,
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    return (
        <div className="containe">
            <div className="row mt-4 d-flex flex-row">
                <div className="col-5 d-flex">
                    <Slider {...settings1} className={cx('thumbail-imgs')}>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_F4-3000C16D-32GTZR-2.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_F4-3000C16D-32GTZR-3.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_Gskill_Trident_Z_1_1.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div>
                        {/* <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_Gskill_Trident_Z_2_1.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_ram-desktop-g.skill-32gb-ddr4-bus-2400mhz-f4-2400c15d-32gfxr-109328.jpg')}
                                alt="a"
                                className={cx('thumbail-img')}
                            />
                        </div> */}
                    </Slider>
                </div>
                <div className="col-2  d-flex flex-column ">
                    <Slider {...settings2} className={cx('gallery-imgs')} vertical={true}>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Thumbnail/Product_Thumbnail_570x470_Gskill_Trident_Z_9.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_F4-3000C16D-32GTZR-2.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_F4-3000C16D-32GTZR-3.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_Gskill_Trident_Z_1_1.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div>
                        {/* <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_Gskill_Trident_Z_2_1.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div>
                        <div>
                            <img
                                src={require('~/public/uploads/products/RAM/Gallery/Product_Gallery_570x470_ram-desktop-g.skill-32gb-ddr4-bus-2400mhz-f4-2400c15d-32gfxr-109328.jpg')}
                                alt="a"
                                className={cx('gallery-img')}
                            />
                        </div> */}
                    </Slider>
                </div>
                <div className="col-5">
                    <div className={cx('content-inner')}>
                        <div>
                            <h3>Havic HV G-92 Gamepad</h3>
                            <div>{/* rating */}</div>
                        </div>
                        <div> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSlider;
