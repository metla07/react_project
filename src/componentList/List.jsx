import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import './List.css'

const List = ({name, id}) => {
    return (
           <div className={'chatItem'}>
               <ChatIcon/>
               <h3>{name}</h3>
               <span>{id}</span>
           </div>
    );
}
export default List;