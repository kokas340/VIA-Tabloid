import React, { useState, useEffect } from 'react';

function Story() {
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    const apiUrl = '';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setStoryData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Stories</h1>
      {storyData ? (
        <ul>
          {storyData.map((story) => (
            <li key={story.id}>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <p>Date: {story.date}</p>
              <p>Owner: {story.owner}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Story;