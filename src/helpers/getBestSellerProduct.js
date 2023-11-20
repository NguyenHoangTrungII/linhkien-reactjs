export const getRandomProducts = (productList, count) => {
    const shuffled = productList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
