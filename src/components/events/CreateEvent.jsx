
import EventForm from "../shared/event-form/EventForm";



const CreateEvent = (events,createEvents) => {



  return (
    <div>
      <EventForm events={events} handleEvent={createEvents}/>
    </div>
  )
}

export default CreateEvent