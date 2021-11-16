
const sorterPromise = (array = []) => {
    return new Promise((resolve, reject) => {
        let newArray = []
        const hungarianCollator = new Intl.Collator('hu')
        for (const value of Object.values(array)) {
            if (typeof value !== 'string') {
                reject('Error: Not all elements are string type!')
            }
        }
        newArray = array.sort(hungarianCollator.compare)
        resolve(newArray)
    })
}

export default sorterPromise;
