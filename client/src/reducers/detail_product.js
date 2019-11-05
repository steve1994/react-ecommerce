const detailProduct = (state = {}, action) => {
    switch(action.type) {
        case 'VIEW_PRODUCT_SUCCESS':
            return action.product;
        case 'VOTE_PRODUCT_SUCCESS':
            return action.product;
        case 'VIEW_PRODUCT_FAILURE':
        case 'VOTE_PRODUCT_FAILURE':
        default:
            return state;
    }
}

export default detailProduct;
