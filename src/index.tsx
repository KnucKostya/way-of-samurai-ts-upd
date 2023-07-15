import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import AppWithRedux from "./AppWithRedux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// доделал меседж старницу

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <AppWithRedux/>
        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </Provider>
)
