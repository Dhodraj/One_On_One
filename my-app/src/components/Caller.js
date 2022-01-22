import React from 'react'
import Notification from './Notification';
import Options from './Options';
import VideoPlayer from './VideoPlayer';


function Caller() {
    return (
        <div>
            <VideoPlayer/>
            <Options>
                <Notification/>
            </Options>
        </div>
    )
}

export default Caller
