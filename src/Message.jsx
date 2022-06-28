import React from "react";
import './Message-name.css'
import {Card, CardContent, Typography} from "@mui/material";
const Message = ({ author, text}) => {
    return (
        <div className={'container-name'}>
          <Card sx={{ minWidth: 300}}>
              <CardContent>
                  <Typography variant="h5" component="div" color="blue">{author}</Typography>
                  <Typography variant="body2" fontSize={16} color="black">{text}</Typography>
              </CardContent>
          </Card>
        </div>
    );
};
export default Message;