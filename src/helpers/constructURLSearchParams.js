export function constructURLSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of urlParams) {
        if (params[key]) {
            if (Array.isArray(params[key])) {
                params[key].push(value);
            } else {
                params[key] = [params[key], value];
            }
        } else {
            params[key] = value;
        }
    }

    const searchParams = new URLSearchParams();
    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            const value = params[key];
            if (Array.isArray(value)) {
                value.forEach((element) => {
                    searchParams.append(key, element);
                });
            } else {
                searchParams.append(key, value);
            }
        }
    }

    return searchParams;
}
