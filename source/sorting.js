'use strict';

const sorting = (arr, properties) => {
    const cmp = (a, b) => {
        for (let i = 0; i < properties.length; i++) {
            let first = a[properties[i]], second = b[properties[i]];
            if (typeof first !== typeof second) {
                if (first === undefined) {
                    return -1;
                } else if (second === undefined) {
                    return 1;
                }
                first = first.toString();
                second = second.toString();
            }
            if (first !== second) {
                return first > second
            }
        }
        return 0;
    };
    return arr.sort(cmp);
};

