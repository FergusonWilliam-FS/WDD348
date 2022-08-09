import React from "react";

const DateInput = props => (
    <form class="pt-5 d-flex justify-content-center flex-nowrap" onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD) or Submit for today's picture 
      <input class="mx-3" />
      <input type="submit" />
    </form>
  );
  
export default DateInput;