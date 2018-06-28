import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForName extends Component{
 
    render(){
       
        return(
            
            <form>
                <label>Enter your name
                <input type ="text"  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}
InputForName.propTypes= {
    onChange: PropTypes.func.isRequired,
    value : PropTypes.object.isRequired
}
export default InputForName;