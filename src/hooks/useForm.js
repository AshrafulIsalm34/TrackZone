import { useState } from "react"
import { deepClone, isObjEmpty } from "../utils/objectUtils";

/**
 * @typedef {Object} param
 * @property {Object} init
 * @property {(Object|boolean)} validate
 * 
 * create form using this useForm hooks
 * @param {param} param0 
 * @returns 
 */


const useForm=({init,validate})=>{
    const [state,setState] = useState (mapValueToState(init)) 

    // handle change
    
  const handleChange =(e)=>{
  
      const {name:key, value,type,checked} = e.target;

      const oldState = deepClone(state);


      if(type==='checkbox'){
        oldState[key].value = checked
      }else{
        oldState[key].value = value
      }
    

      const {errors} = getErrors()
    
    
      if(oldState[key].touched && errors[key]){
        oldState[key].error = errors[key];
      }else{
        oldState[key].error = ''
      }
      setState(oldState)
    }



  //  handle focused

  const handleFocused =(e)=>{
      const {name} = e.target;
    
      const oldState = deepClone(state);
      oldState[name].focused = true


      if(!oldState[name].touched){
          oldState[name].touched =true
      }
      setState(oldState)
  }



 //   handle Blur
  
  const handleBlur=(e)=>{
    const key = e.target.name

    const {errors} = getErrors()
  
    const oldState = deepClone(state)
  
  
    if(oldState[key].touched && errors[key]){
      oldState[key].error = errors[key] ;
    }else{
      oldState[key].error = ''
    }

    oldState[key].focused = false

    setState(oldState)
  }


  const handleSubmit =(e,cb)=>{
      e.preventDefault()

      const {hasError,errors,values} = getErrors()

      cb({
        hasError,
        errors,
        values,
        touched: mapStateToKeys(state,'touched'),
        focused: mapStateToKeys(state,'focused'),
      })

  };

  // clear function

  const clear=()=>{
    const newState = mapValueToState(init,true);
    setState(newState);
  }

  const getErrors =()=>{
    let hasError = null, errors = null
    const values = mapStateToKeys(state,'value')


    if(typeof validate === 'boolean'){
        hasError = validate
        errors = mapStateToKeys(state,'error');
    }else if(typeof validate === 'function'){
        const errorsFormCB = validate(values)

        hasError = !isObjEmpty(errorsFormCB)
        errors = errorsFormCB
    }else{
      throw new Error('validate property must be boolean or function')
    } 

    return{
      values,
      errors,
      hasError,
    }

  };


  return{
    formState: state,
    handleChange,
    handleFocused,
    handleBlur,
    handleSubmit,
    clear
}

}

export default useForm;


// helper function


const mapValueToState=(values, shouldClear=false)=>{
    return Object.keys(values).reduce((acc,key)=>{
        acc[key] ={
            value: shouldClear? '' : values[key],
            error: '',
            focused: false,
            touched: false,
        }
        return acc;
    },{})
}



const mapStateToKeys = (state,key)=>{
    return Object.keys(state).reduce((acc,cur)=>{
  
      acc[cur] = state[cur][key]
  
      return acc;
    },{})
  }



