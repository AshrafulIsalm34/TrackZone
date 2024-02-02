import { useState } from "react"



const EventForm = ({handleEvent}) => {
  const [state,setState] = useState({})

  const handleChange = (e)=>{
    const {value,name} = e.target;

    setState((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleEvent(state);
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="text">Event Name</label>
            <input type="text" name="text" id="text" value={state.text} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="startTime">Start Time</label>
            <input type="datetime-local" id="startTime" name="startTime" value={state.startTime} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="endTime">End Time</label>
            <input type="datetime-local" id="endTime" value={state.endTime} onChange={handleChange}/>
        </div>
        <button type="submit">Add Event</button>
    </form>
  )
}

export default EventForm;