import products from "./products"

function getData() {
    const promiseData = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
    return promiseData
}

export function GetItemData(productId) {
    const promiseData = new Promise( (resolve, reject) => {
        const itemRequested = products.find( (item) => item.id === Number(productId))
        setTimeout(() =>resolve(itemRequested),1000)
    })
    return promiseData
}

export default getData;