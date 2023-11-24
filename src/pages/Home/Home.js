import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProduct } from '~/redux/actions/productAction';
import HeroBanner from '~/component/HeroBanner';
import FlashSale from '~/component/Home/FlashSale';
import BrowseCategory from '~/component/Home/BrowseCategory';
import BestSelling from '~/component/Home/BestSelling';
import Advertsing from '~/component/Home/Advertsing';
import OurProduct from '~/component/Home/OurProduct';
import Featured from '~/component/Home/Featured';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { getAllCategories } from '~/redux/actions/categoryAction';

// const override = css`display: 'block',
// margin: '0 auto',
// borderColor: 'red',`;

function Home() {
    let [color, setColor] = useState('#ffffff');
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.store.products);
    const categories = useSelector((state) => state.category.categories);
    const isLoading = useSelector((state) => state.store.isLoading);

    useEffect(() => {
        const fetching = async () => {
            try {
                await dispatch(getAllProduct());

                await dispatch(getAllCategories());
            } catch (err) {
                console.log(err);
            }
        };

        fetching();

        console.log('category', categories);
    }, []);

    const getbestsellproduct = productList.slice(0, 4);
    const getflashsaleproduct = productList.slice(4, 8);

    return (
        <div>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <HeroBanner data={categories} />

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
