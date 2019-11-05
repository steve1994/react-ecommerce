import React from 'react';

export default class Star extends React.Component {

    constructor(props) {
        super(props)
        this.state = {rate:props.rate};
    }

    drawStar(rate) {
        let nodeStar = [];
        let length = Math.ceil(rate);
        for (let i=0;i<length;i++) {
            nodeStar.push((<span class="glyphicon glyphicon-star"></span>));
        }
        for (let i=0;i<5-length;i++) {
            nodeStar.push((<span class="glyphicon glyphicon-star-empty"></span>));
        }
        return (
            <div>
              {nodeStar}
            </div>
        )
    }

    render() {
        return this.drawStar(this.state.rate);
    }
}
