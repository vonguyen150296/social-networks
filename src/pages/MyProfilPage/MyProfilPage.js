import React, { Component } from 'react';
import Post from '../../components/Post/PostComponent';
import "./MyProfilPage.css"

// redux
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/ActionPosts";




class MyProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var date = new Date();
        var createdAt = Math.round(date.getTime()/1000);
        var postInfos = {
            "createdAt": createdAt,
            "content": this.state.content,
            "id_user": parseInt(this.props.login[0].id),
            "UpdateAt": createdAt,
            "title": this.state.title,
            "url_img": "images/image_post_demo.PNG"
        }
        this.props.createPost(postInfos);
    }

    render() {
        var { posts, comments, likes, login } = this.props;

        var listPosts = posts.sort((a,b) => b.createdAt - a.createdAt).filter(post => post.id_user === parseInt(login[0].id, 10)).map((post, index) => {
            return (
                <Post key={index}
                    post={post}
                    comments={comments.filter(comment => comment.id_post === parseInt(post.id, 10))}
                    likes={likes.filter(like => like.id_post === parseInt(post.id, 10))} />
            );
        });
        return (
            <div className="listPost">
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <h5>New Post</h5>
                    <div class="form-group post-form-item">
                        <label >Title</label>
                        <input type="text" class="form-control"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Enter title" required />
                    </div>
                    <div class="form-group post-form-item">
                        <label >Content</label>
                        <textarea class="form-control"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                            placeholder="Enter ontent" required ></textarea>
                    </div>
                    <div className="form-group post-form-item">
                        <button type="submit" class="btn btn-primary form-control ">Create</button>
                    </div>
                </form>
                {listPosts}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
        likes: state.likes,
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => { dispatch(createPost(post)) }
})

export default connect(mapStatetoProps, mapDispatchToProps)(MyProfil);