import React from 'react';
import ListProductItem from './ListProductItem';
import {connect} from 'react-redux'
import {loadProduct,loadNextPage} from '../actions'
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class ListProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {pageNum:2};
    }

    componentDidMount() {
        let limit = 7;
        this.props.loadProduct(limit,1);
    }

    loadMore() {
        let limit = 7;
        this.props.loadNextPage(limit,this.state.pageNum);
        this.setState({pageNum: this.state.pageNum+1});
    }

    render() {
        const loader = <div>Loading ...</div>;
        let listItem = this.props.products.map((item,index) => {
            return (<ListProductItem key={index} imagePath={item.imageProduct} origin_id={item._id} rate={item.rate} title={item.title} price={item.price} description={item.description} />);
        });
        return (
            <div id="productlist">
                <InfiniteScroll
                    dataLength={this.props.products.length}
                    next={this.loadMore.bind(this)}
                    hasMore={true}
                    loader={loader}
                    scrollableTarget="productlist"
                    height={600}>
                    <ul className="product_list list">
                        {listItem}
                    </ul>
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    loadProduct: (limit,numPage) => (dispatch(loadProduct(limit,numPage))),
    loadNextPage: (limit,numPage) => (dispatch(loadNextPage(limit,numPage)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ListProduct)
