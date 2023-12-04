import ProductListComp from '~/component/ProductListComp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductFilter } from '~/redux/actions/productAction';
import { getAllBrands } from '~/redux/actions/brandAction';
import BreadcrumbsComponent from '~/component/Breadcrumbs/Breadcrumbs ';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { constructURLSearchParams } from '~/helpers/constructURLSearchParams';

function ProductList() {
    const dispatch = useDispatch();
    const productsFilter = useSelector((state) => state.store.productFilter);
    const brands = useSelector((state) => state.brand.brands);
    const isLoading = useSelector((state) => state.brand.isLoading);

    useEffect(() => {
        const params = constructURLSearchParams();

        const fetching = async () => {
            try {
                await Promise.all([
                    new Promise((resolve, reject) => {
                        dispatch(getProductFilter(params));
                        resolve();
                    }),
                    new Promise((resolve, reject) => {
                        dispatch(getAllBrands());
                        resolve();
                    }),
                ]);
                // await dispatch(getProductFilter(params));

                // await dispatch(getAllBrands());
            } catch (err) {
                console.log(err);
            }
        };

        fetching();
    }, [dispatch]);

    return (
        <div style={{ paddingTop: 100 }}>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <BreadcrumbsComponent />

            <ProductListComp products={productsFilter} brand={brands} />
        </div>
    );
}

export default ProductList;
