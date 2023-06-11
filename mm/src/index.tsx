import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { QueryClient, QueryClientProvider } from "react-query";
import React from 'react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const store = createStore(rootReducer, composeWithDevTools());
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <main>
              <div className='App-wrapper'>
                <div className='App'>
                  <App />
                </div>
              </div>
            </main>
          </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
