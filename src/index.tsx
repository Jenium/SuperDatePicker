import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SuperDatePicker } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SuperDatePicker />
  </React.StrictMode>,
)
