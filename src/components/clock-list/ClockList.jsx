

import ClockListItem from './ClockListItem';


const ClockList = ({clocks,updateClock,deleteClock,localClock}) => {


  return (
    <div>
      <h1>Clock List</h1>
      <hr/>
      {clocks.length === 0 ? (<p>There is no Clock. Create a new Clock!</p>) : (<ul>
          {clocks.map((clock)=>(
           <ClockListItem key={clock.id} clock={clock} updateClock={updateClock} deleteClock={deleteClock} localClock={localClock}/> 
          ))}
        </ul>)}
    </div>
  )
}

export default ClockList;