'use strict';

const sorting = (arr, properties) => {
    const cmp = (a, b) => {
        let res = 0;
        properties.some((item, i, properties) => {
            let first = a[item], second = b[item];
            if (typeof first !== typeof second) {
                if (first === undefined || second === undefined) {
                    res = second === undefined;
                    return true;
                }
                first = first.toString();
                second = second.toString();
            }
            if (first !== second) {
                res = first > second;
                return true;
            }
        });
        return res;
    };
    return arr.sort(cmp);
};

