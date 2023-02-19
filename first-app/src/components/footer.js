import React, { Component } from "react";

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
        const animals = ["ada", "aba", "aca"]
        return (
                <div>
                    {animals.map(animal => {
                        return (
                            <h1 key={animal}>{animal}</h1>
                        );
                    })}
                    
                </div>
        )
    }
}

export default Footer