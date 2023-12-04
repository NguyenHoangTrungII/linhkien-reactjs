import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { getProductsByRange } from '~/helpers/getProductByRange';

function Home() {
    const notify = () => toast('Add To Cart Success');
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.store.products);
    const categories = useSelector((state) => state.category.categories);
    const isLoading = useSelector((state) => state.store.isLoading);

    useEffect(() => {
        const fetching = async () => {
            try {
                await Promise.all([dispatch(getAllProduct()), dispatch(getAllCategories())]);
            } catch (err) {
                console.log(err);
            }
        };

        fetching();
    }, [dispatch]);

    return (
        <div>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <HeroBanner data={categories} />

            <FlashSale toast={notify} FlashSaleProduct={getProductsByRange(productList, 0, 4)} />

            <BrowseCategory />

            <BestSelling toast={notify} BestSellProduct={getProductsByRange(productList, 4, 8)} />

            <Advertsing />

            <OurProduct toast={notify} OurProduct={productList} />

            <Featured />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default Home;
