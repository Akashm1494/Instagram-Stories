import '../styles/story.css';

function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-header">
                <div className="post-user-info">
                    <div className="post-avatar">
                        <img src={post.userAvatar} alt={post.username} />
                    </div>
                    <span className="post-username">{post.username}</span>
                </div>
                <button className="post-options">⋮</button>
            </div>

            <div className="post-image">
                <img src={post.image} alt="Post" />
            </div>

            <div className="post-actions">
                <div className="post-actions-left">
                    <button className="action-btn">♡</button>
                    <button className="action-btn">💬</button>
                    <button className="action-btn">📤</button>
                </div>
                <button className="action-btn">🔖</button>
            </div>

            <div className="post-info">
                <p className="post-likes">{post.likes} likes</p>
                <p className="post-caption">
                    <strong>{post.username}</strong> {post.caption}
                </p>
            </div>
        </div>
    );
}

function PostsFeed({ posts }) {
    return (
        <div className="posts-feed">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsFeed;
