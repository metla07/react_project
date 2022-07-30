import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux";
import {store} from "./redux/reducers/configureStore";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);