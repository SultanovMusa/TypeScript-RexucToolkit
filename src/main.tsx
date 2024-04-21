import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import Reduxprovider from "./redux/provider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Reduxprovider>
				<App />
			</Reduxprovider>
		</BrowserRouter>
	</React.StrictMode>
);
