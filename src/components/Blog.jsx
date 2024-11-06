import { Tag } from 'antd'
import React, { useEffect } from 'react'
import { MarkdownRenderer } from './MarkdownRenderer'
import CarouselImage from './CarouselImage'

  


const Blog = ({data, selectedPost, lang}) => {
    useEffect(() => {
        console.log(data)
    }, [data])
  return (
    <div style={{background: "#3333338c", height: "90%", flexBasis: "40%", overflowY: "hidden", padding: "35px", gap: "25px", display: "flex", flexDirection: "column"}}>
        <CarouselImage/>
        <div style={{overflowY: "scroll"}}>
            <MarkdownRenderer route={data[selectedPost].text.file + (lang === "en" ? "en.md" : "es.md")} lang={lang}/>
        </div>
        
    </div>
  )
}

export default Blog
