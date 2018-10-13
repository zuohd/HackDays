const EventEmitter=require('events')
class Player extends EventEmitter{}
var player=new Player()
player.on('play',(track)=>{
    console.log(`playing ${track}`)
})
player.once('play',(track)=>{
    console.log(`playing-- ${track}`)
})
player.emit('play','Happy birthday to you')
player.emit('play','Only you!')