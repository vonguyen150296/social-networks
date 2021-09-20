import React, { Component } from 'react';
import Post from '../../components/Post/PostComponent';
import "./HomePage.css";

class Home extends Component {

    render() {
        var { posts, comments, likes } = this.props;
        var listPosts = posts.map((post, index) => {
            return (
                <Post key={index}
                    post={post}
                    comments={comments.filter(comment => comment.id_post === parseInt(post.id,10))}
                    likes={likes.filter(like => like.id_post === parseInt(post.id,10))} />
            );
        });
        return (
            <div className="listPost">
                {listPosts}
            </div>
        );
    }
}

export default Home;