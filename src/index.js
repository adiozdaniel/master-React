import React from 'react';
// import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// import { createRoot } from 'react-dom/client'
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


// ReactDOM(<App />, document.getElementById('root'));
// createRoot(document.getElementById('root')).render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

