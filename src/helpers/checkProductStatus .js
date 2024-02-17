export const checkDateWithin30Days = (date) => {
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - date.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays <= 30;
};

export const checkPriceDecreaseOver10Percent = (currentPrice, oldPrice) => {
    const priceDifference = oldPrice - currentPrice;
    const percentageDecrease = (priceDifference / oldPrice) * 100;

    return {
        isDecreasedOver30Percent: percentageDecrease > 10,
        percentageDecrease: percentageDecrease,
    };
};
