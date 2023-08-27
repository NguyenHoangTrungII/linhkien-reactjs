import * as httpRequest from '~/utils/httpRequest';

export const search = async (q) => {
    try {
        const res = await httpRequest.get(`product/search`, {
            params: {
                productName: q,
            },
        });

        console.log(res.data);
        return res.data;
        // setsearchResult(res.data);
        // setLoading(false);
    } catch (error) {
        // setLoading(false);
        console.log(error);
    }

    // eslint-disable-next-line
};
