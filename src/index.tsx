import store, {State, textArreaText} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state:State) => {
    const textArreaValueforDialogs = state.messagesPage.textArreaDialog
    root.render (
            <App
                state={state}
                textArreaText={textArreaText}
                dispatch = {store.dispatch.bind(store)}
                textArreaValueforDialogs={textArreaValueforDialogs}
                // pushFunc={store.pushFunc.bind(store)}
                // changeTextArreaValue={store.changeTextArreaValue.bind(store)}
                // getState = {store.getState}
            />

    );
    reportWebVitals();
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)