import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const Post = ({data, setSelectedPost, selectedPost, lang}) => {
  return (
    <div style={{background: "#3333338c", height: "100%", flexBasis: "20%", overflowY: "scroll"}}>
        {
            data.map((a, i) => (
                <div style={selectedPost === i ? {background: "#828282bd", cursor: "pointer"}: {cursor: "pointer"}} key={a.id} onClick={() => {
                    setSelectedPost(i)
                }}>
                    <YoutubeEmbed embedId={a.idPost} />
                    <div style={{margin: "2%"}}>
                        <div>
                            {a.title}
                        </div>
                        <a>
                           { a.text["prologue"].substring(0, 100) }...show more
                        </a>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Post
