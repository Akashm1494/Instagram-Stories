import '../styles/story.css';

function StoriesList({ stories, onStoryClick }) {
    return (
        <div className="stories-container">
            <div className="stories-list">
                {stories.map((story, index) => (
                    <div
                        key={story.id}
                        className="story-item"
                        onClick={() => onStoryClick(index)}
                    >
                        <div className="story-thumbnail">
                            <img src={story.image} alt={`Story ${story.id}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoriesList;
