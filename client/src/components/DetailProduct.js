import React from 'react';
import {connect} from 'react-redux'
import {viewProduct,voteProduct} from '../actions';
const ReactMarkdown = require('react-markdown');

class DetailProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {vote:"1"};
        this.handleVote = this.handleVote.bind(this);
        this.submitVote = this.submitVote.bind(this);
    }

    componentDidMount() {
        this.props.viewProduct(this.props.match.params.idProduct);
    }

    handleVote(e) {
        this.setState({vote:e.target.value});
    }

    submitVote(e) {
        e.preventDefault();
        this.props.voteProduct(this.props.match.params.idProduct,this.state.vote);
        this.setState({vote:"1"});
    }

    render() {
        return (
          <div class="container">
            	<div class="row">
                   <div class="col-xs-4 item-photo">
                        <img style={{maxWidth:'100%'}} src="https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg" />
                    </div>
                    <div class="col-xs-5" style={{border:'0px solid gray'}}>
                        <h3>{this.props.detailProduct.title}</h3>
                        <h5 style={{color:"#337ab7"}}>{this.props.detailProduct.brand}</h5>

                        <h6 class="title-price"><small>PRECIO OFERTA</small></h6>
                        <h3 style={{marginTop:'0px'}}>IDR {this.props.detailProduct.price}</h3>

                        <div class="section">
                            <h6 class="title-attr" style={{marginTop:'15px'}} ><small>COLOR</small></h6>
                            <div>
                                <div class="attr" style={{width:'25px',background:'#5a5a5a'}}></div>
                                <div class="attr" style={{width:'25px',background:'white'}}></div>
                            </div>
                        </div>
                        <div class="section" style={{paddingBottom:'5px'}}>
                            <h6 class="title-attr"><small>CAPACIDAD</small></h6>
                            <div>
                                <div class="attr2">16 GB</div>
                                <div class="attr2">32 GB</div>
                            </div>
                        </div>
                        <div class="section" style={{paddingBottom:'20px'}}>
                            <h6 class="title-attr"><small>VOTE</small></h6>
                            <div>
                                <div class="btn-minus"><span class="glyphicon glyphicon-minus"></span></div>
                                <input value={this.state.vote} onChange={this.handleVote} />
                                <div class="btn-plus"><span class="glyphicon glyphicon-plus"></span></div>
                            </div>
                        </div>

                        <div class="section" style={{paddingBottom:'20px'}}>
                            <button class="btn btn-success" onClick={this.submitVote}>Vote</button>
                            <h6><a href="#"><span class="glyphicon glyphicon-heart-empty" style={{cursor:'pointer'}}></span> Agregar a lista de deseos</a></h6>
                        </div>
                    </div>

                    <div class="col-xs-9">
                        <ul class="menu-items">
                            <li class="active">Detail Product</li>
                            <li>Testimonial</li>
                        </ul>
                        <div style={{width:'100%',borderTop:'1px solid silver'}}>
                            <ReactMarkdown source={this.props.detailProduct.detailProduct} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    detailProduct : state.detailProduct
})

const mapDispatchToProps = (dispatch) => ({
    viewProduct: (idProduct) => dispatch(viewProduct(idProduct)),
    voteProduct: (idProduct,vote) => dispatch(voteProduct(idProduct,vote))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (DetailProduct)
