const https=require('https')
const querystring=require('querystring')
var postdata=querystring.stringify({
    'name':'soderberg',
    'password':'1234567',
    'age':34,
    '_csrf_token':'def34c433534534535353543fsdfsdbee'

})

var options={
    hostname:'www.abc.com',
    port:80,
    method:'POST',
    path:'/ajax/create/heee',
    headers:{
        'Accept':'*/*'
    }
    
}

var responseData=''
var request=https.request(options,(res)=>{
console.log('status'+res.statusCode)
console.log('headers'+JSON.stringify(res.headers))
res.setEncoding('utf8')
res.on('data',(chunk)=>{
    console.log(chunk)
})
res.on('end',()=>{
    console.log('post data completed!')
})
})

request.on('error',(error)=>{
    console.log(error)
})
request.write(postdata)
request.end()