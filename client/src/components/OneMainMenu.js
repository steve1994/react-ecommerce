import React from 'react';
import OneWindow from './OneWindow';
import AddProduct from './AddProduct';
import DetailProduct from './DetailProduct';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class OneMainMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Router>
            <div>
              <div className="navigation">
                <Link to={'/add_ads'}>Add Ads</Link>
              </div>
              <Switch>
                <Route exact path="/" component={OneWindow} />
                <Route path="/add_ads" component={AddProduct} />
                <Route path="/detail_ad/:idProduct" component={DetailProduct} />
              </Switch>
            </div>
          </Router>
        );
    }
}
