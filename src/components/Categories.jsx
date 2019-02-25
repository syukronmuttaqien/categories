import React, { Component } from 'react';
import Category from './Category.jsx';
import {Consumer} from '../context'
class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <Consumer>
                {value =>{
                    const {categorydatas} = value
                    return(
                        <div>
                            <center>
                                <Category
                                    data = {value.categorydatas}  
                                />
                            </center>
                        </div>
                    )}}
                    
            </Consumer>
            
        );
    }
}

 
export default Categories;