import React from 'react'

const Project = (props) => {
  //console.log(props.project)
  const { title, image, description, link } = props.project
  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
      <a href={link}>{link}</a>
      <p>{description}</p>
    </div>
  )
}

export default Project
