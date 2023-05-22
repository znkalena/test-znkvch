import React from 'react';
import  ReactDomClient from 'react-dom/client';
import './index.css';
import './style/header.css'
import './style/filter.css'
import './style/section.css'
import './style/vacation.css'
import App from './app'
import './style/pagination.css'


const app = ReactDomClient.createRoot(document.getElementById('app'))
app.render(<App/>)
