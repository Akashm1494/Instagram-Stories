import { useState, useEffect } from 'react';
import Loader from './Loader';
import '../styles/story.css';

function StoryViewer({ stories, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isLoading, setIsLoading] = useState(true);

    // Auto-advance to next story after 5 seconds
    useEffect(() => {
        if (isLoading) return; // Don't start timer while loading

        const timer = setTimeout(() => {
            if (currentIndex < stories.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setIsLoading(true);
            } else {
                onClose(); // Close viewer on last story
            }
        }, 5000);

        return () => clearTimeout(timer); // Cleanup
    }, [currentIndex, isLoading, stories.length, onClose]);

    // Handle manual navigation
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsLoading(true);
        }
    };

    const handleNext = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsLoading(true);
        }
    };

    // Handle image load
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="story-viewer">
            <div className="story-viewer-content">
                {/* Close button */}
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>

                {/* Progress bars */}
                <div className="progress-container">
                    {stories.map((_, index) => (
                        <div
                            key={index}
                            className={`progress-bar ${index < currentIndex
                                    ? 'completed'
                                    : index === currentIndex
                                        ? 'active'
                                        : ''
                                }`}
                        >
                            <div className="progress-fill"></div>
                        </div>
                    ))}
                </div>

                {/* Story image */}
                <div className="story-image-container">
                    {isLoading && <Loader />}
                    <img
                        src={stories[currentIndex].image}
                        alt={`Story ${stories[currentIndex].id}`}
                        onLoad={handleImageLoad}
                        className="story-image"
                    />
                </div>

                {/* Navigation zones */}
                <div className="nav-zones">
                    <div className="nav-zone nav-zone-left" onClick={handlePrevious}></div>
                    <div className="nav-zone nav-zone-right" onClick={handleNext}></div>
                </div>
            </div>
        </div>
    );
}

export default StoryViewer;
