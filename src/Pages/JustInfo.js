import React from "react";


function JustInfo()
{
    console.log('Render Just Info');
    
    return(
        <div>
            Just Info
        </div>
    )
}

export default React.memo(JustInfo);