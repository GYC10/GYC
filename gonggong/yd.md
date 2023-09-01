### SpringBoot + React 연동

##### App. js

```
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App () {
  const [message, setMessage] = useState("");

  useEffect(() => {
      fetch('/demo/hello')
          .then(response => response.text())
          .then(message => {
              setMessage(message);
          });
  },[])

  const _mas = JSON.parse(message);
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">{message}</h1>
          </header>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
  )
}

export default App;

```

##### package.json

```
"proxy" : "http://localhost:8082",
```