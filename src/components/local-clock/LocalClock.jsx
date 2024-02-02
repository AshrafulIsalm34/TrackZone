/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ClockDisplay from '../shared/Clock-Display/Index'
import UseClock from '../../hooks/UseClock'
import ClockActions from '../shared/Clock-Actions/Index'
import styled from '.././clock-list/style.module.css'
import useTimer from '../../hooks/useTimer'


const LocalClock = ({clock, updateClock,createClock}) => {
const {date,timeZone,offset} = UseClock(clock.timeZone,clock.offset)

const timer = useTimer(date)


  useEffect(()=>{
    updateClock({
      date,
      timeZone,
      offset,
    });
  },[date])

  return (
    <div className={styled.card}>
      {timer &&  <ClockDisplay title={clock.title} date={timer} timeZone={timeZone} offset={offset}/>}
      <ClockActions local={true} clock={clock} updateClock={updateClock} createClock={createClock}/>
    </div>
  )
}

export default LocalClock;