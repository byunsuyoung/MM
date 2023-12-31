import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension'
import { QueryClient, QueryClientProvider } from "react-query";
import React from 'react';
import Header from './pages/header';  //Component
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

axios.defaults.withCredentials = true;

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer, composeWithDevTools());
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
       <ThemeProvider theme={theme}>
          <BrowserRouter>
          <Header/>
            <main>
              <div className='App'>
                  <App />
              </div>
            </main>
           </BrowserRouter>
          </ThemeProvider>
        </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
