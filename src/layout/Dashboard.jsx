import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Blog from '../components/Blog'
import Trend from '../components/Trend'

const Dashboard = ({data, lang}) => {
  const [selectedPost, setSelectedPost] = useState(0)
  useEffect(() => {
    console.log(selectedPost);
  }, [selectedPost])
  return (
    <div style={{width: "99%", height: "85vh", display: "flex", justifyContent: "center", margin: "25px", gap: "15px"}}>
        <Post data={data} selectedPost={selectedPost} setSelectedPost={setSelectedPost} lang={lang}/>
        <Blog data={data} selectedPost={selectedPost} setSelectedPost={setSelectedPost} lang={lang}/>
        {/*<Trend/>*/}
    </div>
  )
}

export default Dashboard
