const  http=require('http')
const server=http.createServer((req,resp)=>
{
    if(req.url==='/')
    {
        resp.write('Hello bitch m here')
        resp.end()
    }
    if(req.url==='/about')
    {
        resp.write('Hello fuckers')
        resp.end()
    }
});
server.listen(5000);
console.log('Your server is running properly');