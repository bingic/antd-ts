import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { InputValueProvider } from "./components/InputValueContext";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* context */}
      <InputValueProvider>
        {/* redux store */}
        <Provider store={store}>
          <App />
        </Provider>
      </InputValueProvider>
    </BrowserRouter>
  </React.StrictMode>
);



