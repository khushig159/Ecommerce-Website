import React from 'react'

export default function FeatureCard({image,text,des}) {
  return (
    <div className='FeatureCard'>
        <img src={image} alt={text} />
        <div className="des">
            <h4>{text}</h4>
            <p>{des}</p>
        </div>
    </div>
  )
}
