import React, { Component } from 'react';


class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {value: null,log:false};  //the color value that will be added to the style

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stateToggle = this.stateToggle.bind(this);
  }

  temp={ val :null};          //dummy
  handleChange(event) {       //store the user input onchange
    this.temp.val = event.target.value;
  }

  handleSubmit(event) {       //use the input after submitting
    this.setState({value: this.temp.val});
    this.temp.val = null;     //return to null for new values to be added
    event.preventDefault();
  }

  stateToggle=()=>{
    this.setState ((state,props)=>
  ({
    log : !state.log
  })
)}

  render()
  {
    return<div>
     {this.state.log?<form>
        <label>
          Your Required Color:
          <input type="text" value={this.temp.val} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        <p style={{color:this.state.value}}>Watch This</p>

      </form>:<h1>Toggle Please</h1>}
      <button onClick={this.stateToggle}>Toggle</button>
    </div>
  }
}


export default App;
