import { useState } from 'react';
import StoriesList from './components/StoriesList';
import StoryViewer from './components/StoryViewer';
import PostsFeed from './components/PostsFeed';
import storiesData from './data/stories.json';
import postsData from './data/posts.json';
import './App.css';

function App() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const handleStoryClick = (index) => {
    setSelectedStoryIndex(index);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="app">
      <StoriesList stories={storiesData} onStoryClick={handleStoryClick} />

      <PostsFeed posts={postsData} />

      {isViewerOpen && (
        <StoryViewer
          stories={storiesData}
          initialIndex={selectedStoryIndex}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}

export default App;

