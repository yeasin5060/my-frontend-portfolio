import React from 'react'

function Heading({ level, text, className}) {
    const Tag = `h${level}`;

    return <Tag className={className}>{text}</Tag>;
  
}

export default Heading