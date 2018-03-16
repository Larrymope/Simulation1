import React, {Component} from 'react';


export default (props) => {
    return (
        <div>PRODUCT
            <div>NAME:{props.element.name}</div>
            <div>PRICE:{props.element.price}</div>
              <div>IMAGE:{props.element.image}</div>
        </div>
    )
        
    
}