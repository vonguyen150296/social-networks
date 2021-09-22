import React, { Component } from "react";
import "./MainPage.css";

// import component
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";

// import page
import Home from "../HomePage/HomePage";
import About from "../AboutPage/AboutPage";
import Myprofil from "../MyProfilPage/MyProfilPage";
import SignInUp from "../SignInUpPage/SignInUpPage";

// import router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// import redux
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/ActionPosts";
import { fetchComments } from "../../redux/actions/ActionComments";
import { fetchLikes } from "../../redux/actions/ActionLikes";
import { fetchUsers } from "../../redux/actions/ActionUsers";


class MainPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchComments();
        this.props.fetchLikes();
        this.props.fetchUsers();
    }


    render() {
        const HomePage = () => {
            return <Home posts={this.props.posts}
                comments={this.props.comments}
                likes={this.props.likes} />
        }

        const AboutPage = () => {
            return <About />
        }

        const MyProfilPage = () => {
            return <Myprofil posts={this.props.posts}
                comments={this.props.comments}
                likes={this.props.likes} />
        }

        const SignInUpPage = () => {
            return <SignInUp />
        }
        return (
            <React.Fragment>
                <Header />

                {/* contenu */}
                <div className="content">
                    <Switch >
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path="/myprofil">
                            {this.props.login.length === 0 ? <Redirect to="/signup" /> : <Route exact path='/myprofil' component={MyProfilPage} />}
                        </Route>
                        <Route exact path="/signup">
                            {this.props.login.length === 0 ? <Route exact path='/signup' component={SignInUpPage} /> : <Redirect to="/myprofil" />}
                        </Route>
                        <Redirect to="/home" />
                    </Switch>
                </div>


                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
        likes: state.likes,
        login: state.login
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => { dispatch(fetchPosts()) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchLikes: () => { dispatch(fetchLikes()) },
    fetchUsers: () => { dispatch(fetchUsers())}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
