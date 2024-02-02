/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import {addMinutes} from 'date-fns';
import {TIMEZONE_OFFSET} from '../constants/timeZone'


// const TIMEZONE_OFFSET ={
//     PST: -8 * 60,
//     EST: -5 * 60,
//     EDT: -4 *60,
//     BST: 1 * 60,
//     MST: -6 * 60,
// };



const UseClock =(timeZone,offset)=>{
    const [localDate,setLocalDate] = useState(null)
    const [localOffset,setLocalOffset] = useState(0)
    const [localTimezone,setLocalTimezone] = useState('');
    const [utc,setUTC] = useState(null);



    useEffect(()=>{
        let d = new Date();
        let lo = d.getTimezoneOffset();
        d = addMinutes(d,lo);
        setUTC(d);
        setLocalOffset(lo)
    }, []);


    useEffect(()=>{ 
        if(utc !== null ){
            if(timeZone){
   
                offset = TIMEZONE_OFFSET[timeZone] ?? offset;
             
                const newUtc = addMinutes(utc, offset)
            
                setLocalDate(newUtc)
            }else{
                const newUtc = addMinutes(utc, -localOffset)
                const dateStrArr = newUtc.toUTCString().split(' ');

                setLocalDate(newUtc);
                setLocalTimezone(dateStrArr.pop())
            }
        }
        
    }, [utc,timeZone,offset])


    return{
        date: localDate,
        dateUTC: utc,
        offset : offset || -localOffset,
        timeZone: timeZone || localTimezone,
    }
}

export default UseClock;