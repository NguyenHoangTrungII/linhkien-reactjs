import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProduct } from '~/redux/actions/productAction';
import HeroBanner from '~/component/HeroBanner';
import FlashSale from '~/component/Home/FlashSale';
import BrowseCategory from '~/component/Home/BrowseCategory';
import BestSelling from '~/component/Home/BestSelling';
import Advertsing from '~/component/Home/Advertsing';
import OurProduct from '~/component/Home/OurProduct';
import Featured from '~/component/Home/Featured';

function Home() {
    const handleAddToCart = {};

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.store.products);

    useEffect(() => {
        const fetching = async () => {
            try {
                await dispatch(getAllProduct());
            } catch (err) {
                console.log(err);
            }
        };

        fetching();
    }, []);

    const getbestsellproduct = productList.slice(0, 4);
    const getflashsaleproduct = productList.slice(4, 8);

    return (
        <div>
            <HeroBanner />

            <FlashSale FlashSaleProduct={getflashsaleproduct} />

            <BrowseCategory />

            <BestSelling BestSellProduct={getbestsellproduct} />

            <Advertsing />

            <OurProduct OurProduct={productList} />

            <Featured />
        </div>
    );
}

export default Home;
