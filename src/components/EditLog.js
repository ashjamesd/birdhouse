import React,{useState, useEffect} from "react";

function EditLog() {

    function handlePatchClick(userLogs){
        e.preventDefault();
        fetch(`/userlog/${id}`),{
            method: "PATCH",
            headers:{
                "Content Type":"application/json"
            },
            body: JSON.stringify({
                notes: notes
            })
        }



    return (
        
        <div className="bottomLogOut">
            <button>Log Out</button>
        </div>
        
      )
    }
}






export default EditLog;