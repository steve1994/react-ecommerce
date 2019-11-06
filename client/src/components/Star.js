import React from 'react';

export default class Star extends React.Component {

    constructor(props) {
        super(props)
        this.state = {rate:props.rate};
    }

    drawStar(rate) {
        let nodeStar = [];
        let length = Math.ceil(rate);
        for (let i=1;i<=5;i++) {
            if (i <= length) {
                nodeStar.push((<span key={i} className="glyphicon glyphicon-star"></span>));
            } else {
                nodeStar.push((<span key={i} className="glyphicon glyphicon-star-empty"></span>));
            }
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
