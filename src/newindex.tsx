import store, {State, textArreaText} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

import { store } from './state/store'
import { Provider } from 'react-redux'
import AppWithRedux from "./AppWithRedux";

//остановился на что что нуно разобраться что за ошибка в store={store}
//правильно ли я протипизировал стор в store.tsx?
//нужно ли в новый АПП передавать пропсы, если нет, то как компненты ( профайл, диалогс) будут получать данные?-напрямую из стора?
//досмотрел видео про редакс Димыча


ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>, document.getElementById('root')
)



//
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement);
//
// export const rerenderEntireTree = (state:State) => {
//     const textArreaValueforDialogs = state.messagesPage.textArreaDialog
//     root.render (
//             <App
//                 state={state}
//                 textArreaText={textArreaText}
//                 dispatch = {store.dispatch.bind(store)}
//                 textArreaValueforDialogs={textArreaValueforDialogs}
//                 // pushFunc={store.pushFunc.bind(store)}
//                 // changeTextArreaValue={store.changeTextArreaValue.bind(store)}
//                 // getState = {store.getState}
//             />
//
//     );
//     reportWebVitals();
// }
//
// rerenderEntireTree(store.getState())
//
// store.subscribe(rerenderEntireTree)