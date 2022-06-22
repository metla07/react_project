import React from "react";
import './Message-name.css'
const Message = ({name}) => {
    return (
        <div className={'container-name'}>
          <h1>{name}</h1>
        </div>
    );

};
export default Message;