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
          <li className="product_item">
            <div className="product_image">
              <a href="#"><img src="https://bit.ly/1myplK1" alt="" /></a>
                <div className="product_buttons">
                  <button className="product_heart"><i className="fa fa-heart"></i></button>
                  <button className="product_compare"><i className="fa fa-random"></i></button>
                  <button className="add_to_cart"><i className="fa fa-shopping-cart"></i></button>
                  <div className="quick_view">
                    <a href="#"><h6>Quick View</h6></a>
                  </div>
                </div>
            </div>
            <div className="product_values">
              <div className="product_title">
                <h5>{this.props.title}</h5>
              </div>
              <div className="product_price">
                <a href="#"><span className="price_new">IDR {this.props.price}</span></a>
              </div>
              <div className="product_price">
                <Star rate={`${accumulativeRate}`} />
              </div>
              <div className="product_desc">
                <p className="truncate">{this.props.description}</p>
              </div>
              <div className="product_price">
                <Link to={`/detail_ad/${this.props.origin_id}`}><button className="btn btn-primary">DETAIL ITEM</button></Link>
              </div>
            </div>
          </li>
        );
    }
}
