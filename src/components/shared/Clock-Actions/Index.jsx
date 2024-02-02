import { useState } from "react";
import ClockForm from "../clock-forms/ClockForm";




const ClockActions =({local=false,clock,updateClock,createClock,deleteClock})=>{
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate,setIsCreate] = useState(false);




    const handleClock =(values)=>{
        createClock(values)
    }
  
    return(
        <div>
            <button onClick={()=>setIsEdit(!isEdit)}>Edit</button>
            {local ? <button onClick={()=>setIsCreate(!isCreate)}>Create</button> : <button onClick={()=>deleteClock(clock.id)}>delete</button>}


            {isEdit && (
                <ClockForm values={clock} handleClock={updateClock} title={true} edit={true}/> 
            )}

            {isCreate && (
                <div>
                    <ClockForm  handleClock={handleClock} title={true}/> 
                </div>
            )}

        </div>
    )
}



export default ClockActions;


/* <div>

<input type="text" name="title" value={clock.title} onChange={handleChange}/>
<select name="timeZone" value={clock.timeZone} onChange={handleChange}>
    <option value="GMT">GMT</option>
    <option value="PST">PST</option>
    <option value="UTC">UTC</option>
    <option value="EST">EST</option>
    <option value="EDT">EDT</option>
    <option value="BST">BST</option>
    <option value="MST">MST</option>
</select>

{(clock.timeZone === 'GMT' || clock.timeZone === 'UTC') && (<select name="offset" value={clock.offset / 60} onChange={handleChange}>
        {defaultOffsets.map((offset)=>(
            <option key={offset} value={offset}>{offset}</option>
        ))}
</select>)}

</div>  */