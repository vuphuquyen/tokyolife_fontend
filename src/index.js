import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Cart from './components/Cart';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import FormProvider from './Contexts/formProvider';
import ContainerProvider from './Contexts/containerProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FormProvider>
        <ContainerProvider>
          <App />
          {/* <Cart /> */}
        </ContainerProvider>
      </FormProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
