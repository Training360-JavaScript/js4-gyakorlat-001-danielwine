
const converterPromise = (array = []) => {
    return new Promise((resolve, reject) => {
        const newArray = []
        for (const value of Object.values(array)) {
            if (typeof value === 'string') {
                newArray.push(value.toUpperCase())
            } else {
                reject('Error: Not all elements are string type!')
            }
        }
        resolve(newArray)
    })
}

export default converterPromise;
