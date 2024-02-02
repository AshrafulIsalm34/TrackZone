import {format} from 'date-fns'
import styled from "../../clock-list/style.module.css"
const ClockDisplay=({date,title,timeZone,offset})=>{
    const offsetHr = offset/60;
    return(
        <div className={styled.card}>
            <h1>Title:{title}</h1>
            <h3>{format(date, "dd/MM/yyy hh:mm:ss aaaaa'm' ")}</h3>
            <p>
            {timeZone}  
            {offsetHr>0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
            </p>
        </div>
    )
        
    
}

export default ClockDisplay;