import React from 'react';
import ReactDOM from 'react-dom';
import { FancyForm } from './components/Form';

function App() {
  return <FancyForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);