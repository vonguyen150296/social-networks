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
import { fetchComments } from "../../redux/actions/ActionCompoments";
import { fetchLikes } from "../../redux/actions/ActionLikes";

// import apiCaller
import callApi from "../../utils/apiCaller";

class MainPage extends Component {
    componentDidMount() {
        callApi("/posts", "get", null).then(res => {
            this.props.fetchPosts(res.data);
        });

        callApi("/comments", "get", null).then(res => {
            this.props.fetchComments(res.data);
        });

        callApi("/likes", "get", null).then(res => {
            this.props.fetchLikes(res.data);
        })
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
                        <Route exact path='/myprofil' component={MyProfilPage} />
                        <Route exact path='/signup' component={SignInUpPage} />
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
        likes: state.likes
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (posts) => { dispatch(fetchPosts(posts)) },
    fetchComments: (comments) => { dispatch(fetchComments(comments)) },
    fetchLikes: (likes) => { dispatch(fetchLikes(likes)) }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
