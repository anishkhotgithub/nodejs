const http=require('http')
const server =http.createServer((req,resp)=>
{
    if(req.url==='/')
    {
        resp.write('Here comes the first')
        resp.end()
    }
    if(req.url==='/about')
    {
        resp.write('Here is the second about page')
        resp.end()
    }
    if(req.url==='/error')
    {
    resp.write(`<h1>Opps its wrong page Error</h1><a href="/">back to home page plzz</a>`)
    resp.end()  
    }
}
)
server.listen(8080)