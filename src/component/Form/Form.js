
import React, {Component} from 'react';


export default class Form extends Component {
    constructor(props){
        super();
        this.state = {
            input1: '',
            input2: '',
            input3: ''
        }
        //binding
        this.updateInputs = this.updateInputs.bind(this)
        this.clearInputValues = this.clearInputValues.bind(this)
    }
    //methods
    updateInputs( value, inputNum){
        let newInput = value;
        this.setState({
            inputNum:newInput
        })

    }

    clearInputValues(){
        this.setState({
            input1: '',
            input2: '',
            input3: ''
        })
    }
    postReq(){
        
    }
    
    render(){
        return(
            <div>FORM
      <input type='text' placeholder={this.state.input1} onChange={(e) => this.updateInputs( e.target.value, 'input1' )} ></input>
      <input type='text' placeholder={this.state.input2} onChange={(e) => this.updateInputs( e.target.value, 'input2' )} ></input>
      <input type='text' placeholder={this.state.input3} onChange={(e) => this.updateInputs( e.target.value, 'input3' )} ></input>
      <button onClick={this.clearInputValues} >Cancel</button>
      <button>Add to Inventory</button>
            </div>

        )
    }//render
}//end