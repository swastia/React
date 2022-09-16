import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      Button_Text: "Hello React!!"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    <p>{ this.state.Button_Text }</p>
          <button onClick={() => this.setState({Button_Text:'Hello Swasti'})}>Change Text</button>
        </header>
      </div>
    );
  }
}


export default App;
