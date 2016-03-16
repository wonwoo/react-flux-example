import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './js/components/Button';

class AppMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Button />
            </div>
        );
    }
}
ReactDOM.render(<AppMain/>, document.getElementById('app'));
