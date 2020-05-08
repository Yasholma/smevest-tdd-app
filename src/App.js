import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/store";

// Components
import Header from "./components/header/header.component";
import Home from "./containers/home/home";
import Login from "./components/login/login.component";
import Register from "./components/register/register.component";

function App() {
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </BrowserRouter>
        </ReduxProvider>
    );
}
export default App;
