import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state ={
      inventoryList: []
    }
    this.loadInventoryList = this.loadInventoryList.bind(this)
  }
  loadInventoryList(){
    axios.get('http://localhost:3006/api/inventory')
    .then(res => {
      this.setState({
        inventoryList: res.data
      })
    })
  }
  componentDidMount() {
    this.loadInventoryList()
  }

  render() {
    
    return (
      <div className="App">
       <Dashboard theInventoryList={this.state.inventoryList} ></Dashboard>
       
      <Header/>
      <Form loadinventory={this.loadInventoryList()} />

      


      </div>
    );
  }
}

export default App;
