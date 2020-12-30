import React from 'react';
import './App.css';
function Tweet({name, message,likes}){
    return(
        <div className="tweet">
            <h2>
                {name}
            </h2>
    <p>{message}</p>
            <h5>
                Likes: {likes}
            </h5>
        </div>

    )
}

export default Tweet;