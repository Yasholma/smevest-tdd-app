import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { setCurrentUser } from "./redux/actions/user-actions";

// Components
import Header from "./components/header/header.component";
import Home from "./containers/home/home";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
import Footer from "./components/footer/footer.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(null);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Home} />
                <Route
                    path='/signin'
                    render={() =>
                        this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignIn />
                        )
                    }
                />
                <Route
                    path='/signup'
                    render={() =>
                        this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignUp />
                        )
                    }
                />
                <Footer />
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
