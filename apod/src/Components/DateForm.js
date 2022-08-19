import React from "react";

const DateForm = props => {
    let today = new Date();
    let dateRef = React.createRef();

    let makeDateString = (d)=>{
      let dString = d.getFullYear() + "-"
      dString +=  ('0' + (d.getMonth() + 1)).slice(-2) + "-"
      dString += ('0' + d.getDate()).slice(-2);
      return dString;
    }
    

    let dateChange = ()=>{
      props.dateChange(dateRef.current.value);
      console.log(dateRef.current.value);

    }

    let onNext = ()=>{
      dateRef.current.stepUp();
      dateChange();
    }
    
    let onPrev = ()=>{
      dateRef.current.stepDown()
      dateChange();
    }



    return(

      <form class="pt-5 d-flex justify-content-center flex-nowrap" onSubmit={(e)=>e.preventDefault()}>
      Enter a date (YYYY-MM-DD) or Submit for today's picture 
      <input ref={dateRef} onChange={dateChange} class="mx-3" type="date" defaultValue={makeDateString(today)} min="1995-06-20" max={makeDateString(today)} />
      <button onClick={onPrev}>&lt;</button>
      <button onClick={ onNext }>&gt;</button>
      {/* <input type="submit" /> */}
    </form>
      )
};
  
export default DateForm;