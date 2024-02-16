const XMLHttpRequest = require('xmlhttprequest')
const API = 'https://fakestoreapi.com'

const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.respondeText))
            }
        } else {
            const error = new Error('Error ' + urlApi)
            return callback(error, null)
        }
    }
    xhttp.send();
}