function filter(array, callback) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

const names = ['Gabriel', "Lucas", 'João', 'Otavio', 'Daniel', 'Bruno']

function filterCallBack(name) {
    return name.endsWith('l')
}

const filteredNames = filter(names, filterCallBack)

console.log(filteredNames)