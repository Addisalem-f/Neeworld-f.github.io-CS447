//*Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)*/

const fs = require('fs')
const http = require('http')
const Server=http.createServer()

Server.on('request', (req, res) => {
    const src = fs.createReadStream('./big_img.jpg')
    src.pipe(res)


})
Server.listen(3001, () => { console.log("server is started at port 3001") })