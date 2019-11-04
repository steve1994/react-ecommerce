import React from 'react';
import {connect} from 'react-redux'
import {postProduct} from '../actions';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title:'',rate:'1',description:'',price:'',brand:'',detailProduct:''};
        this.handleTitle = this.handleTitle.bind(this);
        this.handleRate = this.handleRate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleBrand = this.handleBrand.bind(this);
        this.handleDetailProduct = this.handleDetailProduct.bind(this);
        this.cancelButtonAction = this.cancelButtonAction.bind(this);
        this.addButtonAction = this.addButtonAction.bind(this);
    }

    handleTitle(e) {
        this.setState({title:e.target.value});
    }

    handleRate(e) {
        this.setState({rate:e.target.value})
    }

    handleDescription(e) {
        this.setState({description:e.target.value});
    }

    handlePrice(e) {
        this.setState({price:e.target.value});
    }

    handleBrand(e) {
        this.setState({brand:e.target.value});
    }

    handleDetailProduct(e) {
        this.setState({detailProduct:e.target.value});
    }

    cancelButtonAction(e) {
        this.setState({title:'',rate:'1',description:'',price:'',brand:'',detailProduct:''})
        this.props.history.push('/');
    }

    addButtonAction(e) {
        e.preventDefault();
        this.props.postProduct(this.state.title
                              ,this.state.rate
                              ,this.state.description
                              ,this.state.price
                              ,this.state.brand
                              ,this.state.detailProduct);
        this.setState({title:'',rate:'1',description:'',price:'',brand:'',detailProduct:''})
        this.props.history.push('/');
    }

    render() {
        return (
          <div class="container">
              <form>
                  <div class="form-group row">
                      <label for="title" class="col-sm-2 col-form-label"><strong>Title</strong></label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" id="title" placeholder="title" value={this.state.title} onChange={this.handleTitle} required />
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="rate" class="col-sm-2 col-form-label"><strong>Rate</strong></label>
                      <div class="col-sm-10">
                          <select id="rate" class="form-control" value={this.state.rate} onChange={this.handleRate}>
                              <option selected value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                          </select>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="description" class="col-sm-2 col-form-label"><strong>Description</strong></label>
                      <div class="col-sm-10">
                          <textarea id="description" class="form-control" rows="3" placeholder="description" value={this.state.description} onChange={this.handleDescription} required />
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="price" class="col-sm-2 col-form-label"><strong>Price</strong></label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" id="price" placeholder="price" value={this.state.price} onChange={this.handlePrice} required />
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="brand" class="col-sm-2 col-form-label"><strong>Brand</strong></label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" id="brand" placeholder="brand" value={this.state.brand} onChange={this.handleBrand} required />
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="detail_product" class="col-sm-2 col-form-label"><strong>Detail Product</strong></label>
                      <div class="col-sm-10">
                          <textarea id="detail_product" class="form-control" rows="10" placeholder="Use Markdown Here" value={this.state.detailProduct} onChange={this.handleDetailProduct} required></textarea>
                      </div>
                  </div>
                  <div class="form-group row">
                      <div class="col-sm-10">
                          <button type="submit" class="btn btn-success" onClick={this.addButtonAction}>Add</button>&nbsp;
                          <a class="btn btn-warning" onClick={this.cancelButtonAction}>Cancel</a>
                      </div>
                  </div>
              </form>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    postProduct: (title,rate,description,price,brand,detailProduct) => dispatch(postProduct(title,rate,description,price,brand,detailProduct))
});

export default connect(
    null,
    mapDispatchToProps
) (AddProduct)
