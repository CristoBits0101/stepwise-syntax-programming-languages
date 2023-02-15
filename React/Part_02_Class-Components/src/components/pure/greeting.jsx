// react component so when the project is in the render process know it's a react project
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    // class components have their own constructor and we can pass data to them
    // properties that a component can receive to paint something
    constructor(props){
        
        // to make use of the atributtes that pass to the father
        super(props)

        // private state that when modified updates the view
        this.state = {
            age: 29
        }
    }

    // render always return a html
    // combine HTML with JS inside of the HTML
    // render only can return a element HTML
    // for this component to be visible you have to paint it on the main component App.js
    // add the component in App.js with <greeting></greeting>
    render() {
        return (
            <div>
                {/*we pass the props of the application from App.js*/}
                <h1>Hello {this.props.name}!</h1>
                {/*we pass the state of the application from the father*/}
                {/*you need user a function for change the private state*/}
                <h2>Tu edad es de: {this.state.age}</h2>
                <div>
                    {/*we call to birthday of the document*/}
                    <button onClick={this.birthday}>Update Age</button>
                </div>
            </div>
        );
    }

    // function necesary for change state of the age
    birthday = () => {
        // we need the old state for change the new state
        this.setState((prevState) => ({age: prevState.age + 1,}));
    }

}

// you need to declare the type of prop you're using
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;