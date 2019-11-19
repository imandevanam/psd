import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Index from './component/admin/Index';
import LoginForm from './component/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/loginform" exact component={LoginForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
