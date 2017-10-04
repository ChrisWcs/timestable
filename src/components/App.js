import React, { Component } from 'react';

import Table from './Table';


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
            </div>
        );
    }
}

export default App;