const http = require('http');
const fs = require('fs')

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.createReadStream('app.html').pipe(res)
    } else if (req.url === '/message' && req.method === 'POST') {
        const mydata = []
        req.on('data', function (chunk) {
            mydata.push(chunk)
        })
        req.on('end', () => {
            const currentData = Buffer.concat(mydata).toString();
            let textArr = currentData.split('=');
            let SpArr = textArr[1].split('+')
            let resultText = SpArr.join(' ')
            fs.writeFile('./message.txt', resultText, function (err) {
                if (err) throw err;
                //res.write("saved successfully")
            })
        })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    } else {

        fs.createReadStream('app.html').pipe(res)
        res.end();
    }
}).listen(3001)
