import React from "react";

function LogFilter({setFilter, filter}) {


    function handleFilter(e){
        let filt = e.target.value
        setFilter(filt)
    }

    //'filter' variable contains the either the username shia or ashjames.d




    return (
        
        <div class="search">
            <select id="logFilter" class="filter" placeholder="Pick a user..." onChange={handleFilter}>
                <option value="">Pick a user...</option>
                <option value="shia">shia</option>
                <option value="ashjames.d">ashjames.d</option>
            </select>
        </div>
        
      )
  }

  export default LogFilter;

