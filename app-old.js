const http = require('http')

http.createServer((req,res)=>{
    

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(201, {'Content-Type': 'application/csv'})

   

    res.write('hola mundo')
    res.end()

})
.listen(8080)