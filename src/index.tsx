import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from '../src/Redux/store'
import { Provider } from 'react-redux'
import AppWithRedux from "./AppWithRedux";


//сделать контейнерную компоненту для редьюсера

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>
)



