import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Firstproj extends Component{
    
    render(){
        return(
            <div>
             <h1>Hellooooooo worlddd!!!!</h1>
             <h2>hiii {this.props.name}</h2>
             <h3> Welcome to my first react project</h3>
            </div>
        );
    }

}
Firstproj.propTypes =
{
    name:PropTypes.string,
    name:PropTypes.string.isRequired
};
Firstproj.defaultProps =
{
    name: "Everyone"
};
export default Firstproj;