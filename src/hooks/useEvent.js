
import { useState } from "react";
import {v4 as uuid} from 'uuid';


const useEvent = ()=>{

    const [state,setState] = useState({})

    const getEventsByClockId = (clockId) =>{
       return Object.keys(state).filter(item => item.startsWith(clockId));
    }


    const getEvents = (isArray = false) =>{
        if(!isArray) return state;

        return Object.values(state);
    }


    const addEvent = (event) =>{
        event.id = uuid();

        setState((prev) =>({
            ...prev,
            [`${event.clockId} | ${event.id}`] : event,
        }))
        return event;
    }


    const deleteEvent =(id)=>{
        const events = {...state}
        delete events[id]

        setState(events)
    }


    const deleteEventsByClock = (clockId) =>{
        const events = Object.keys(state).filter(item => !item.startsWith(clockId));

        setState(events);
    }

    const updateEvent = (updateEvent,id) => {
        const events = {...state}
        events[id] = {
            ...events[id],
            ...updateEvent,
        }
        setState(events)
    }

    return{
        events: state,
        getEventsByClockId,
        getEvents,
        addEvent,
        deleteEvent,
        deleteEventsByClock,
        updateEvent,
    }

}

export default useEvent;