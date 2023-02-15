// step one is import the hooks useState
import React, {useState} from 'react';
import PropTypes from 'prop-types';

// they don't have props or state and that's why they use hooks
// but this is an example using props
// arrow functions are stored in a constant
// for work with state in functions component we use hooks
// example with function useState that allown create a private state for this component
const Greeting = (props) => {

    //  const [variable, method for update] = useState(initial_value);
    const [age, setage] = useState(29);

    // function for update state
    const birthday = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>Tu nombre es: {props.name} from functional component</h1>
            <h2>Tu edad es: {age}</h2>
            {/*call to the function update birthday*/}
            <button onClick={birthday}>Update Age</button>
        </div>
    );
};

Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;