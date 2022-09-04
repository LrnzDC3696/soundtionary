import { hop } from "@onehop/client";
import * as dotenv from 'dotenv';
dotenv.config()

// initialize the hop client sdk
const client = hop.init( {projectId: process.env.PROJ_ID} )

// listen to connection state updates
client.on('CONNECTION_STATE_UPDATE', (state) => {
    if (state === "connected") {
        // once connected, subscribe to a channel
        client.subscribeToChannel("test");
    }
});

// Show chat function


// listen to channel MESSAGE events
function check(){
    client.on("MESSAGE", ({channel, event, data}) =>{
        return data;
    });
}

// client.on("MESSAGE", ({channel, event, data}) => message(data));


// listen to channel state update events
client.on("STATE_UPDATE", ({channel, state}) => console.log(state));