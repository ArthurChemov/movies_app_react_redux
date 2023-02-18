/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
    <Provider>
        <App/>
    </Provider>,
);
