import { Badge, Card } from 'antd'
import React from 'react'

const Trend = () => {
  return (
    <div style={{ height: "100%", flexBasis: "20%", display: "flex", flexDirection: "column"}}>
        {/*<div style={{flexBasis: "40%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa8nD2z6U6xiK9T0QDMjEJGlSwGgZ0nJQBA&s" alt="" />
        </div>*/}
        <div style={{flexBasis: "60%", display: "flex", flexDirection: "column", gap: "5px"}}>
            <Badge.Ribbon text="Hippies">
                <div style={{width: "100%", height: "100px", background: "#1c2931b8", borderRadius: "15px"}}>
                    and raises the spyglass.
                </div>
            </Badge.Ribbon>
        
        </div>
        
    </div>
  )
}

export default Trend
