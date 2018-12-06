import React from 'react'

export default function EventCard(props) {
    console.log(props)
    const eachEvent = props.events.map((event, i) => {
        return <h1 classname="white-text">{i}</h1>
    })
        return (
            <div classname="event-card-container">
              {eachEvent}
            </div>
          )
    
  
}
