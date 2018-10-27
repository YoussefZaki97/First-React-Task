import React, { Component } from 'react';

class Button extends Component
{
  constructor(props) {
    super(props);
    this.state = {value: null};  //the color value that will be added to the style

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  render()
  {
    return<div>
     <form>
        <label>
          Your Required Color:
          <input type="text" value={this.temp.val} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        <p style={{color:this.state.value}}>Watch This</p>

      </form>
    </div>
  }

}



class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {log:false};  //the color value that will be added to the style

    this.stateToggle = this.stateToggle.bind(this);
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
     {this.state.log?<Button/>:<h1>Toggle Please</h1>}
      <button onClick={this.stateToggle}>Toggle</button>
    </div>
  }
}




export default App;
