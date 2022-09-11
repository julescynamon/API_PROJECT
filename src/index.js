import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/index.scss";
import IpContextProvider from "./context/IpContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<IpContextProvider>
		<App />
	</IpContextProvider>
	</React.StrictMode>
);


