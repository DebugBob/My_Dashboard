import React from 'react'

interface NewsProps {
  newsTitle?: string
}

const News: React.FC<NewsProps> = ({ newsTitle }) => {
  return (
    <div className="card">
      <div className="card-body">
        {newsTitle}
      </div>
    </div>
  )
}

export default News