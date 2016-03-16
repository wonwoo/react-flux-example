/**
 * Created by wonwoo on 2016. 3. 16..
 */
import React, { Component } from 'react';
import ButtonStore from '../stores/ButtonStore'
import ButtonCreator from '../actions/ButtonCreator'



export default class TextBox extends Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            text : ""
        }
    }

    componentDidMount() {
        ButtonStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ButtonStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({text: "버튼을 클릭 했습니다."})
    }
    render(){
        return(
            <div>
                <input value={this.state.text}></input>
            </div>
        )
    }
}