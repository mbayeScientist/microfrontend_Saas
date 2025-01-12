import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
const mount = (el) => {
    ReactDOM.render(
    <App />,
    el
);
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing-dev-root');
    if (el) {
        mount(el);
    }
}

export { mount };
