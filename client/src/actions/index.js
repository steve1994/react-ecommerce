import axios from 'axios';

const API_URL = 'http://localhost:3002/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

// LOAD PRODUCTS

export const loadProductSuccess = (products) => ({
    type: 'LOAD_PRODUCT_SUCCESS',
    products
})

export const loadProductFailure = () => ({
    type: 'LOAD_PRODUCT_FAILURE'
})

export const loadProduct = (limit,numPage) => {
    return dispatch => {
        return request.get(`products/${limit}/${numPage}`)
        .then(function(response) {
            dispatch(loadProductSuccess(response.data));
        })
        .catch(function(error) {
            console.error(error);
            dispatch(loadProductFailure());
        })
    }
}

// SAVE PRODUCTS

export const postProductSuccess = (products) => ({
    type: 'POST_PRODUCT_SUCCESS', products
})

export const postProductFailed = () => ({
    type: 'POST_PRODUCT_FAILURE'
})

export const postProduct = (title,rate,description,price,brand,detailProduct) => {
    return dispatch => {
        return request.post('products',{title,rate,description,price,brand,detailProduct})
        .then(function(response) {
            return request.get('products/3/1')
            .then(function(response) {
                dispatch(postProductSuccess(response.data));
            })
        })
        .catch(function(error) {
            console.error(error);
            dispatch(postProductFailed());
        })
    }
}
