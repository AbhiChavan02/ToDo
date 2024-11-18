import React, { useRef } from 'react'
import Note from './Note'

function Background() {
  const ref = useRef();
  const data = [{
    icon:true,
    title:"Today's Work",
    text:"-Wake up at 7",
    bottom:true,
    notecolor:"lightgreen",
    day:"Wednesday",
    stars:4
  },
  {
    icon:true,
    title:"Tommarow's Work",
    text:"-Wake up at 6",
    bottom:true,
    notecolor:"lightblue",
    day:"Thusday",
    stars:3
  },{
    icon:true,
    title:"Yesterday's Work",
    text:"-Wake up at 6",
    bottom:true,
    notecolor:"lightpink",
    day:"Tuesday",
    stars:2
  }];
  
  return (
    <div ref={ref} className="bg">
        <h1 className="bgtext">ToDo</h1>
        <div className="notebox">
        {data.map((item, index)=>(
          <Note data={item} reference={ref}/>
        ))}
        </div>
        
    </div>
  )
}

export default Background
// icon, title, text, bottom,notecolor, day, stars;