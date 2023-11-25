// nodeejs has a built in module, called "events";
// where you can create , fire, and listen for your own Events

// ex 1 register for the events to be fired only one time using once.
// ex 2 create an event emmitter instance and register a couple of callbacks
// ex 3 registering for events with callbacks parameters

const EventEmitter = require("events"); //class
const { emit } = require("process");
const event = new EventEmitter(); //objects

event.on("sayMyName", ()=>{             //ye portion humesha upar rakhna 
    console.log("your name is sumit"); //jisse listen ho pae    
});
event.on("sayMyName", ()=>{              
    console.log("your name is ");     
});

event.on("sayMyName", ()=>{              
    console.log("your");     
});

event.emit("sayMyName");// verna ye bhi upar ho skta tha 

//niche define kroge to output nahi milne wala  

event.on("checkpage", (sc,msg)=>{              
    console.log(`status code is ${sc} and the page is ${msg}`);     
});
event.emit("checkpage",200,"ok");