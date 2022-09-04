// Import your Hop SDK instance
import { hop, ChannelType } from "@onehop/js";
 
// Create a channel with the ID "group_chat_1"
const channel = await hop.channels.create(
	// Channel Type; either: "unprotected", "public", or "private"
	ChannelType.UNPROTECTED,
	// Channel ID; leave this field as null if you want an auto-generated ID
	null
);

console.log(channel);
