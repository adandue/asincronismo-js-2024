import fetch from "node-fetch";
const API = 'https://fakestoreapi.com'

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetch(`${urlApi}/products/category/${product.category}`)

        console.log(products)
        console.log(product.title)
        console.log(category)
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)