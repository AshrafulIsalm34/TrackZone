

/**
 * 1. for local clock title won't be change 
 * 2. to create a new clock we have to crate title, timeZone, offset
 * 3. for edit we have title, timeZone, offset
 * 
*/


// const values ={
//     title:'',
//     timeZone:'',
//     offset:'',
// }

import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timeZone";
import { TIMEZONE_OFFSET } from "../../../constants/timeZone";


const ClockForm =({values={title:'',timeZone:'UTC',offset:''},
    handleClock,title=true, edit=false})=>{

    const [formValues,setFormValues] = useState({...values})


    const handleChange =(e)=>{
        let {name,value} = e.target;
        if(name==='offset'){
            value = Number(value * 60)
        }
        setFormValues((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        handleClock(formValues);
    }


    useEffect(()=>{
        if(TIMEZONE_OFFSET[formValues.timeZone]){
            setFormValues((prev)=>({
                ...prev,
                offset:TIMEZONE_OFFSET[formValues.timeZone]
            }))
        }
    },[formValues.timeZone])

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" name="title" id="title" value={formValues.title} onChange={handleChange} disabled
                ={!title}/>
            </div>

            <div>
                <label htmlFor="timeZone">Enter Timezone</label>
                <select name="timeZone" id="timeZone" value={formValues.timeZone} onChange={handleChange}>
                    <option value="GMT">GMT</option>
                    <option value="PST">PST</option>
                    <option value="UTC">UTC</option>
                    <option value="EST">EST</option>
                    <option value="EDT">EDT</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>

            <div>
                <label htmlFor="offset">Enter Offset</label>
                    {(formValues.timeZone === 'GMT' || formValues.timeZone === 'UTC') && (<select name="offset" id="offset" value={formValues.offset / 60} onChange={handleChange}>
                    {getOffset().map((offset)=>(
                        <option key={offset} value={offset}>{offset}</option>
                    ))}
                </select>)}
            </div>

            <button type="submit">{edit ? 'Update' : 'Create'}</button>
        </form>
    )

    
}

export default ClockForm;


