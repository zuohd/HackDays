var async=require('async')

console.time('test')
async.series([
    function(callback){
        setTimeout(() => {
            callback(null,'one')
        }, 2000);
    },
    function(callback){
        setTimeout(() => {
            callback(null,'two')
        }, 5000);
    }
],function(err,results){
    console.log(results)
    console.timeEnd('test')
})