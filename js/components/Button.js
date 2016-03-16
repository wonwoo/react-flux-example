/**
 * Created by wonwoo on 2016. 3. 15..
 */
import React, { Component } from 'react';
import ButtonStore from '../stores/ButtonStore'
import ButtonCreator from '../actions/ButtonCreator'
import TextBox from '../components/TextBox'

export default class Button extends Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            index : 0
        }
    }

    componentDidMount() {
        ButtonStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ButtonStore.removeChangeListener(this._onChange);
    }
    addClick(index){
        ButtonCreator.addClick(index);
    }
    _onChange() {
        this.setState({index: ButtonStore.getIndex()})
    }
    render(){
        return(
            <div>
                <button onClick={this.addClick.bind(this,1)}>BUTTON</button>
                <input value={this.state.index}></input>
                <TextBox />
            </div>
        )
    }
}