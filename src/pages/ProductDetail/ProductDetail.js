import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetailSlider from '~/component/ProductDetail/ProductDetailSlider';
import RecommenderProduct from '~/component/ProductDetail/RecommenderProduct';
import { getProductByID } from '~/redux/actions/productAction';

function ProductDetail() {
    const { IdProduct } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.store.productsbyID);

    // useEffect(() => {
    const fetching = async () => {
        try {
            await dispatch(getProductByID(IdProduct));
        } catch (err) {
            console.log(err);
        }
    };

    fetching();
    // }, []);

    console.log('cc', productDetail[0]);

    return (
        <div style={{ paddingTop: 200 }}>
            <ProductDetailSlider productdetail={productDetail[0]} />

            <div className={{ paddingTop: 50 }}>{/* <RecommenderProduct RecomProduct={RecomProduct} /> */}</div>
        </div>
    );
}

export default ProductDetail;
