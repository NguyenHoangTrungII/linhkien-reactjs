// Trong file hooks/usePayment.js
import { useSelector } from 'react-redux';

const usePayment = () => {
    const paymentURL = useSelector((state) => state.order.paymentURL);

    return paymentURL;
};

export default usePayment;
