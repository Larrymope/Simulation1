
import React, {Component} from 'react';
import Product from '../Product/Product';


export default class Dashboard extends Component {
    constructor(props){
        super();//prop = theInventoryList this.props.theInventoryList          //return <li key={i}>{e}</li>

    }

    render(){
        let mappedInventory = this.props.theInventoryList.map((element, index) => {
            return <Product element={element} key={index} />
        })
        return(
            <div>Dashboard

            {mappedInventory}
            </div>
        )
    }
}