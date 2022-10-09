import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text()) 
      //Use the output of the previous function res.text as the input
      //for the next function and to setState for this class App
      //apiResponse is just an attribute of the class
      //You don't have to pre-declare attributes in ReactJS 
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}
export default App;
