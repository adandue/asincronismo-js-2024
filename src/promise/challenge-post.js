import fetch from "node-fetch";
const API = 'https://fakestoreapi.com'

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method:"POST",
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    return response
}

const data = {
    title: 'New product Course',
    price: 13.5,
    description: 'New Product Course description',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

postData(`${API}/products`, data)
    .then(res=>res.json())
    .then(json=>console.log(json))
