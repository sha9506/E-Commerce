import React from "react";
import './Background.css';

const Background=({variant, children})=>
{
    return (<div className={`background-common background-${variant}`}>
        {children}
    </div>)
}

export default Background;