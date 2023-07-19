import Post from "../element/Post";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => Post({ post: post }))}
        </div>
    );
}

export default PostList;