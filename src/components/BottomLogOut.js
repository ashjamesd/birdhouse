import React from "react";

function BottomLogOut({handleLogout, onLogout}) {
    return (
        
        <div className="bottomLogOut">
            <button onClick={handleLogout} >Log Out</button>
        </div>
        
      )
  }

  export default BottomLogOut;