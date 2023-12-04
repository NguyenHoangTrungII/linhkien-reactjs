export const getProductsByRange = (productList, startIndex, endIndex) => {
    return productList.slice(startIndex, endIndex);
};
