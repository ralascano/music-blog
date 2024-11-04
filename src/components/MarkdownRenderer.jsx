import ReactMarkdown from "react-markdown"
import React, { useEffect, useState } from 'react'



export const MarkdownRenderer = ({route, lang}) => {
    const [markdown, setMarkdown] = useState('');
    console.log(route)
    useEffect(() => {
      fetch(route)
        .then((response) => response.text())
        .then((text) => {
            setMarkdown(text)
        })
        .catch((error) => console.error('Error loading Markdown file:', error));
    }, [lang, route]);
  
    return <ReactMarkdown>{markdown}</ReactMarkdown>;
  }