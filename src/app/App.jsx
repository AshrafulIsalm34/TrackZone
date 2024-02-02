/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react";
import LocalClock from "../components/local-clock/LocalClock";
import ClockList from "../components/clock-list/ClockList";
import {v4 as uuid} from 'uuid';
// import { getTime,getDate, format } from "date-fns"
// import CreateEvent from "../components/events/CreateEvent";

import useEvent from "../hooks/useEvent";



const Local_Clock_Init ={
  title: 'MY Clock',
  timeZone:'',
  offset: 0,
  date:null,
}

// const eventsProperty={
//   text:'',
//   startTime:format(getDate() | getTime()),
//   endTime:format(getDate | getTime()),
// }




// id generator
// function* generate(){
//   let id = 1;
//   while(true){
//       yield id++;
//   }
//  }

//  const generator = generate();

const App = () => {
 
const [localClock,setLocalClock] = useState({...Local_Clock_Init});
const [clocks,setClocks] = useState([]);
// const [events,setEvents] = useState({})

const {addEvent, getEvents,events} = useEvent()


// console.log(events);

useEffect(()=>{

  if(events.length ===0){
    addEvent({text:'test', clockId:uuid() })
    
  }

//   setEvents(
//     getEvents(true)
// )
 


  console.log('All Events ',getEvents());
  console.log('All Events Array',getEvents(true));

  
},[events])


const updateLocalClock =(data)=>{
  setLocalClock({
    ...localClock,
    ...data, 
  })
}

const createClock =(clock)=>{
  clock.id = uuid();
  setClocks([...clocks, clock])
}


const updateClock = (updatedClock) =>{
  const updatedClocks = clocks.map((clock)=>{
    if(clock.id === updatedClock.id) return updatedClock;
    return clock;
  })

  setClocks(updatedClocks);
}


const deleteClock = (id) =>{
  const deleteClocks = clocks.filter((clock) => clock.id !== id)
  setClocks(deleteClocks);
}



// const createEvents = (event)=>{
//  if(events.length ===0){
//     addEvent({text:'',clockId:uuid()})

//  }
// }



  return (
    <div>
      <h1>My Custom Hooks Form</h1>
      <LocalClock clock={localClock} updateClock ={updateLocalClock} createClock={createClock}/>
      <ClockList clocks={clocks} updateClock={updateClock} deleteClock={deleteClock} localClock={localClock.date}/>
    </div>
  )
}

export default App