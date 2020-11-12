import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      item: ' ',
      items: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}
  handleChange(event){
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name] : value})
  }
  submitItem(){
    let items = this.state.items;
    let item = this.state.item;
    items.push(item);
    this.setState({items : items})
  }
  deleteItem(value){
    console.log(value)
    let items = this.state.items.slice();
    items.splice(items.indexOf(value), 1);
       this.setState({items});

    // this.setState({items : newList})// This will update the state and trigger a rerender of the components


  }
  render() {
    var AppStyle = {
      backgroundColor: "#5CDB95"
    }
    var ParagraphStyle = {
      color: "#EDF5E1"
    }
    var headerStyle = {
      color: "#05386B"
    }

  return (
    <div style = {AppStyle} className="App">
    <h1 style = {headerStyle}>My TODO List</h1>
    <h3 style = {headerStyle}>Total Items: {this.state.items.length}</h3>
    <input type="text" name="item" onChange = {this.handleChange}></input>
    <button onClick = {this.submitItem}>Submit Item</button>

    {this.state.items.map((item) =>  {

      return (
        <p>{item}<button onClick = {this.deleteItem.bind(this, item)}>X</button> </p>
      )
    })}
    <footer><a target="_blank" href="https://github.com/JohnGriffin01">View Source Code</a></footer>

    </div>
  )
}
}

export default App;
