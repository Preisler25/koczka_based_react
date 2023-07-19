const Post = ({ post }) => {
    const { title, body } = post;
    return (
        <div className="post-container">
            <h2>{title}</h2>
            <div className="post-body">{body}</div>
        </div>
    );
}

export default Post;