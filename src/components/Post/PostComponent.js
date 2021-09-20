import React, { Component } from 'react';
import "./PostComponent.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    showComment = (key) => {
        this.setState({
            [key]: this.state[key] !== undefined ? !this.state[key] : true
        });
    }

    listComments = (comments, key) => {
        if (this.state[key]) {
            var listC = comments.map((comment, index) => {
                return (
                    <li className="list-group-item" key={index}>
                        <img className="img-user" src="images/femme.jpg" alt="" />
                        <div className="comment-content">
                            <div className="username">username</div>
                            <div>{comment.content}</div>
                        </div>
                    </li>
                );
            })
            return (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <img className="img-user" src="images/femme.jpg" alt="" />
                        <div className="comment-content">
                            <div className="username">username</div>
                            <div>
                                <textarea className="textarea"></textarea>
                            </div>
                            <button className="btn btn-success left">Add comment</button>
                        </div>
                    </li>
                    {listC}
                </ul>
            );
        }
        return null;
    }



    render() {
        var { post, comments, likes } = this.props;
        var likeTXT = likes.length > 0 ? `${likes.length} likes` : "0 like";
        var commentTXT = comments.length > 0 ? `${comments.length} comments` : "0 comment";
        return (
            <div className="card post-item">
                <img src="images/image_post_demo.PNG" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                </div>
                <div class="txtLikeComment">
                    <div>{likeTXT}</div>
                    <div>{commentTXT}</div>
                </div>
                <div class="like-comment">
                    <div className="card-like">Like</div>
                    <div className="card-comment" onClick={() => this.showComment(post.id)}>Comment</div>
                </div>
                {this.listComments(comments, post.id)}
            </div>
        );
    }
}

export default Post;