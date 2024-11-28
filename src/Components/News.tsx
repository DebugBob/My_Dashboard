import React from 'react'

interface NewsProps {
  newsTitles?: string[]
}

const _newsTitles = [
  "Breaking News: New Study Reveals Shocking Truth",
  "Local Man Wins Lottery, Quits Job",
  // "New Restaurant Opens Downtown, Receives Rave Reviews",
  // "Scientists Discover Cure for Common Cold",
  // "New Technology Allows for Faster-than-Light Travel",
  // "World Leaders Meet to Discuss Climate Change",
  // "New Movie Release Breaks Box Office Records",
  // "Local Woman Sets New Guinness World Record",
  // "New Book Release Becomes Instant Bestseller",
  // "Breaking News: Major Earthquake Hits West Coast",
];

const News: React.FC<NewsProps> = ({ newsTitles }) => {
  return (
    // <div className="card">
    //   <div className="card-body">
    //     {newsTitle}
    //   </div>
    // </div>
    <div>
      <h1>News</h1>
      {(newsTitles ?? _newsTitles).map((title, index) => (
        <div
          key={index}
          style={{
            margin: "5px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{
            fontSize: "20px"

          }}>{title}</h2>
        </div>
      ))}
    </div>
  );
}

export default News