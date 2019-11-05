import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Star from './Star'

export default class ListProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    averageRate(rateHistory) {
        let length = rateHistory.length;
        let sum = 0;
        for (let i=0;i<rateHistory.length;i++) {
            sum += parseInt(rateHistory[i]);
        }
        return sum / length;
    }

    render() {
        let accumulativeRate = this.averageRate(this.props.rate);
        return (
          <li class="product_item">
            <div class="product_image">
              <a href="#"><img src="https://bit.ly/1myplK1" alt="" /></a>
                <div class="product_buttons">
                  <button class="product_heart"><i class="fa fa-heart"></i></button>
                  <button class="product_compare"><i class="fa fa-random"></i></button>
                  <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button>
                  <div class="quick_view">
                    <a href="#"><h6>Quick View</h6></a>
                  </div>
                </div>
            </div>
            <div class="product_values">
              <div class="product_title">
                <h5>{this.props.title}</h5>
              </div>
              <div class="product_price">
                <a href="#"><span class="price_new">IDR {this.props.price}</span></a>
              </div>
              <div class="product_price">
                <Star rate={`${accumulativeRate}`} />
              </div>
              <div class="product_desc">
                <p class="truncate">{this.props.description}</p>
              </div>
              <div class="product_price">
                <Link to={`/detail_ad/${this.props.origin_id}`}><button class="btn btn-primary">DETAIL ITEM</button></Link>
              </div>
            </div>
          </li>
        );
    }
}
