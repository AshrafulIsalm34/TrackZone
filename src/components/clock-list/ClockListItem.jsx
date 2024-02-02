/* eslint-disable react-hooks/exhaustive-deps */

import {formatDistance} from 'date-fns'
import UseClock from "../../hooks/UseClock"
import ClockActions from "../shared/Clock-Actions/Index"
import ClockDisplay from "../shared/Clock-Display/Index"
import useTimer from '../../hooks/useTimer';
import style from './style.module.css'
import CreateEvent from '../events/CreateEvent';
import { useState } from 'react';



const ClocksListItem = ({clock,updateClock,deleteClock,localClock}) => {
    const {date} = UseClock(clock.timeZone,clock.offset)
    const [isEvent,setEvent] = useState(false)

    const timer = useTimer(date)

   

    if(!date || !timer) return null;

  return (
    <div className={style.card}>
        <ClockDisplay title={clock.title}  date={timer} timeZone={clock.timeZone} offset={clock.offset}/>
        
         <button onClick={()=>setEvent(!isEvent)}>Create Event</button>
         {isEvent && <CreateEvent/>} 

          <h2>{formatDistance(localClock,timer)}</h2>
        <ClockActions clock={clock} title={false} updateClock={updateClock} deleteClock={deleteClock}/>
    </div>
  )
}

export default ClocksListItem;