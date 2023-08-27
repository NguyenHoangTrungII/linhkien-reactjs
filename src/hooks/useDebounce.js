import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [deBounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    });

    return deBounceValue;
}

export default useDebounce;
