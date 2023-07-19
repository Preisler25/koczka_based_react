import Post from "../element/Post";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => Post({ post: post, index: index }))}
        </div>
    );
}

export default PostList;