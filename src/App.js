import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/counter';
import Quotes from './components/quotes';

function App() {
  

  // Our component is going to display a welcome message. 
  // Then we are going update the message by capturing the click event of a button

  console.log(useState())

  // initialize state - sets up the state variable and function to update it
  // const [message, setMessage] = useState('Welcome to the app');

  const [messageShowing, setMessageShowing] = useState(true);

  function toggleMessage() {
    setMessageShowing(!messageShowing);
  }

  return (
    <div className="App">
      <header>
        <h1>Working with state</h1>
        
        { 
        messageShowing ? 
          <button className="btn btn--on" onClick={toggleMessage}>
            <div></div>
          </button>
        : 
          <button className="btn btn--off" onClick={toggleMessage}>
            <div></div>
          </button>
        } 
      </header>
     
      {
        messageShowing ? 
        <div>Welcome to the app</div> 
        : 
        ''
      }

      <Counter />

      <footer>
        <Quotes />
      </footer>

      
    </div>
  );
}

export default App;
