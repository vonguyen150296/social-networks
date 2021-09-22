import React, { Component } from 'react';
import "./PostComponent.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
// import redux
import { connect } from "react-redux";
import { postLike, removeLike } from "../../redux/actions/ActionLikes";
import { postComment, removeComment } from "../../redux/actions/ActionComments";
import { showComment, hideComment } from "../../redux/actions/ActionStatus";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.handleStatusLike(),
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleStatusLike = () => {
        var { login, post, likes } = this.props;
        if (login.length !== 0) {
            var idUser = parseInt(login[0].id, 10);
            var idPost = parseInt(post.id, 10);
            var like = likes.filter(like => like.id_user === idUser && like.id_post === idPost)
            if (like.length === 0) return false
            else return true
        }
        return false;
    }

    handleLike = (id_post) => {
        if (this.props.login.length !== 0) {
            if (!this.state.like) {
                var date = new Date();
                var createdAt = Math.round(date.getTime() / 1000);
                var likeInfo = {
                    createdAt: createdAt,
                    id_user: parseInt(this.props.login[0].id, 10),
                    id_post: parseInt(id_post, 10)
                }
                this.props.postLike(likeInfo);

            } else {
                var id_user = parseInt(this.props.login[0].id);
                var idPost = parseInt(id_post, 10);
                var like = this.props.likes.filter(like => like.id_user === id_user && like.id_post === idPost)
                this.props.removeLike(like[0].id);
            }
        } else {
            alert("Please login!")
        }
    }

    deleteComment = (idUserC, idComment) => {
        if (this.props.login.length !== 0) {
            var loginInfos = this.props.login[0];
            var idUserP = this.props.post.id_user;

            if (parseInt(loginInfos.id, 10) === idUserP || parseInt(loginInfos.id, 10) === idUserC) {
                // console.log(idComment)
                this.props.removeComment(idComment);
            } else {
                alert("You are not authorized to do this!")
            }
        } else {
            alert("You are not authorized to do this!")
        }
    }

    addComment = () => {
        var date = new Date();
        var createdAt = Math.round(date.getTime() / 1000);
        var commentInfo = {
            createdAt: createdAt,
            id_user: parseInt(this.props.login[0].id, 10),
            id_post: parseInt(this.props.post.id, 10),
            updateAt: 1632074545,
            content: this.state.comment
        }
        this.props.postComment(commentInfo);
    }

    show_comment = (key) => {
        var status_tmp = this.props.status.comment[key];
        if (!status_tmp) {
            this.props.showComment(key)
        } else {
            this.props.hideComment(key)
        }
    }

    showUsername = (id_user, id_Comment) => {
        var username = this.props.users.find(user => parseInt(user.id, 10) === id_user);
        return (
            <div className="username">
                <span>{username.fname} {username.lname}</span>
                <span className="delete"
                    onClick={() => this.deleteComment(id_user, id_Comment)}>
                    <BsFillTrashFill />
                </span>
            </div>
        );
    }
    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
        // this.setState({ [name]: value });
    }

    showAvatar = (idUser) => {
        var userInfos = this.props.users.find(user => parseInt(user.id, 10) === parseInt(idUser, 10));
        if(!userInfos) return (<img className="img-user" src="images/homme.jpg" alt="" />);
        if (userInfos.gender) {
            return (
                <img className="img-user" src="images/homme.jpg" alt="" />
            );
        } else {
            return (
                <img className="img-user" src="images/femme.jpg" alt="" />
            );
        }
    }

    listComments = (comments, key) => {
        if (this.props.status.comment[key]) {
            comments.sort((a, b) => b.createdAt - a.createdAt);
            var listC = comments.map((comment, index) => {
                return (
                    <li className="list-group-item" key={index}>
                        {this.showAvatar(comment.id_user)}
                        <div className="comment-content">
                            {this.showUsername(comment.id_user, comment.id)}
                            <div>{comment.content}</div>
                        </div>
                    </li>
                );
            });
            if (this.props.login.length === 0) {
                return (<ul className="list-group list-group-flush">
                    {listC}
                </ul>);
            }
            return (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {this.showAvatar(this.props.login[0].id)}
                        <div className="comment-content">
                            <div className="username">username</div>
                            <div>
                                <textarea className="textarea"
                                    name="comment"
                                    value={this.state.comment}
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <button className="btn btn-success left"
                                onClick={() => this.addComment()}>Add comment</button>
                        </div>
                    </li>
                    {listC}
                </ul>
            );
        }
        return null;
    }

    getUserPost = (idUser) => {
        var username = this.props.users.find(user => parseInt(user.id, 10) === idUser);
        if(username){
            return (
                <span>{username.fname} {username.lname}</span>
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
                <div className="userTitle">
                    {this.showAvatar(post.id_user)}
                    {this.getUserPost(post.id_user)}
                </div>
                <img src={post.url_img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                </div>
                <div class="txtLikeComment">
                    <div>{likeTXT}</div>
                    <div>{commentTXT}</div>
                </div>
                <div class="like-comment">
                    <div className={this.state.like ? "card-like card-like-active" : "card-like"}
                        onClick={() => this.handleLike(post.id)}>
                        <span><BiLike /></span>
                        <span>Like</span>
                    </div>
                    <div className="card-comment" onClick={() => this.show_comment(post.id)}>
                        <span><FaCommentAlt /></span>
                        <span>Comment</span>
                    </div>
                </div>
                {this.listComments(comments, post.id)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        users: state.users,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => ({
    postLike: (like) => { dispatch(postLike(like)) },
    removeLike: (idLike) => { dispatch(removeLike(idLike)) },
    postComment: (comment) => { dispatch(postComment(comment)) },
    removeComment: (id) => { dispatch(removeComment(id)) },
    hideComment: (key) => { dispatch(hideComment(key)) },
    showComment: (key) => { dispatch(showComment(key)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Post);