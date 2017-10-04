import React, { Component } from 'react';

import Table from './Table';
import Answer from './Answer';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            hor: [1,2,3,4,5,6,7,8,9],
            ver: [1,2,3,4,5,6,7,8,9],
            curX: 0,
            curY: 0,
        };

        this.show = this.show.bind(this);
    }

    show( x, y ) {
        return () => {
            this.setState( () => ({
                curX: x,
                curY: y,
            }));
        };
    }

    render(){
        return(
            <div>
                <Table func={this.show} hor={this.state.hor} ver={this.state.ver} />
                <Answer x={this.state.curX} y={this.state.curY}/>
            </div>
        );
    }
}

export default App;