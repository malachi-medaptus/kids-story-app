import React from 'react';
import { useEffect } from 'react';

const StoryPage = () => {
    useEffect(() => {
        // Add animation effects here
    }, []);

    const handleTextToSpeech = () => {
        const utterance = new SpeechSynthesisUtterance('Your generated story text goes here');
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <h1>Generated Story</h1>
            <p>Your generated story text goes here</p>
            <button onClick={handleTextToSpeech}>Play Story</button>
        </div>
    );
};

export default StoryPage;