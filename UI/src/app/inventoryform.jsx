import React from 'react';
import ReactDOM from 'react-dom';


class InventoryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      // alert('Your favorite flavor is: ' + this.state.value);
     
    }
  
    render() {
      return (
        <form align="center" onSubmit={this.handleSubmit}>
          <label>INVENTORY 
            <div id="form1">
            <select value={this.state.value} onChange={this.handleChange}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            </div>
       
          </label>
          <input type="submit" value="Submit" align="center" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <InventoryForm />,
    document.getElementById('root')
  );