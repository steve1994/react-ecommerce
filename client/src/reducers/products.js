const products = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PRODUCT_SUCCESS':
            return [...action.products];
        case 'POST_PRODUCT_SUCCESS':
            return [...action.products];
        case 'LOAD_PRODUCT_FAILURE':
        case 'POST_PRODUCT_FAILURE':
        default:
            return state;
    }
}

export default products;
