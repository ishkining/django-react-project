import React, { Component } from "react";
import { AnimalsContext } from '../index'

class Footer extends Component{

    // state = {
    //     name: 'Gazique',
    //     age: 23,
    // }

    // componentDidMount = () => {
    //     this.setState({name: 'MyName'});
    // }

    // changed = evt => {
    //     this.setState({name: evt.target.value});
    //     console.log(this.state.name);
    // }

    render() {
        const animalsType = AnimalsContext;
        return (
            <div>
                { this.animals.map(animal => {
                    return (
                        <div key={animal.id}>
                            <h1>{animal}</h1>
                        </div>
                    );
                }) }
            </div>
        )
    }
}

export default Footer