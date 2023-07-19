const Post = ({ post , index}) => {
    const { title, body } = post;
    return (
        <div className="post-container" key={index}>
            <h2 className="post-title">{title}</h2>
            <div className="post-body">{body}</div>
        </div>
    );
}

export default Post;