import React from 'react';
import ListProductItem from './ListProductItem';
import {connect} from 'react-redux'
import {loadProduct} from '../actions'

class ListProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadProduct(3,1);
    }

    render() {
        let listItem = this.props.products.map((item) => {
            return (<ListProductItem origin_id={item._id} rate={item.rate} title={item.title} price={item.price} description={item.description} />);
        });
        return (
            <ul class="product_list list">
                {listItem}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    loadProduct: (limit,numPage) => (dispatch(loadProduct(limit,numPage)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ListProduct)
