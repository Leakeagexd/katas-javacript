const findOdd = (A) => {
    const odd = new Map();
    for (let element of A) {
        if (odd.has(element)) {
            odd.set(element, 1 + odd.get(element))
        } else {
            odd.set(element, 1)
        }
    }
    for (let [key, value] of odd) {
        if (value % 2 !== 0) {
            return key
        }
    }
}
