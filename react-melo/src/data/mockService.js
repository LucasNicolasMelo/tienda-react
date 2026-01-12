import products from "./products"

function getData() {
    const promiseData = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
    return promiseData
}

export default getData;