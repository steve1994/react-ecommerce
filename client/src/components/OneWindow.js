import React from 'react';
import ListProduct from './ListProduct';

export default class OneWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="product_grid">
              <ListProduct />
            </div>
          </div>
        );
    }
}
