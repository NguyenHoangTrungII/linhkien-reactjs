import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreadcrumbsComponent from '~/component/Breadcrumbs/Breadcrumbs ';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import ProductDetailSlider from '~/component/ProductDetail/ProductDetailSlider';
import RecommenderProduct from '~/component/ProductDetail/RecommenderProduct';
import { getProductByID } from '~/redux/actions/productAction';

function ProductDetail() {
    const { IdProduct } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.store.productsbyID);
    const isLoading = useSelector((state) => state.store.isLoading);

    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        if (!isFetching) {
            return;
        }

        const fetching = async () => {
            try {
                await dispatch(getProductByID(IdProduct));
                setIsFetching(false);
            } catch (err) {
                console.log(err);
            }
        };
        setIsFetching(true);
        fetching();
    }, [IdProduct]);

    return (
        <div style={{ paddingTop: 80 }}>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <BreadcrumbsComponent />

            {productDetail.length > 0 && <ProductDetailSlider productdetail={productDetail} />}

            <div className={{ paddingTop: 50 }}>{/* <RecommenderProduct RecomProduct={RecomProduct} /> */}</div>
        </div>
    );
}

export default ProductDetail;
