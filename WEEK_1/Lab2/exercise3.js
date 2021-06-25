//*Using Node Stream API, create a script to unzip a file (after you zip it). (Use zlib.createGunzip() stream)


const fs = require('fs')
const path = require('path')
const zlip = require('zlib')


fs.createWriteStream("myfile.txt")  ///this line of code creates file
//zip files
const gzip = zlip.createGzip()
const readable = fs.createReadStream(path.join(__dirname, './', "myfile.txt"))
const compressed = fs.createWriteStream(path.join(__dirname, "destination.txt.gz"))
readable.pipe(gzip).pipe(compressed)

//to unzipp the file, you should comment out the codes above..
const unzip = zlip.createGunzip()
const zipped = fs.createReadStream(path.join(__dirname, "./", 'destination.txt.gz'))
const unzipped = fs.createWriteStream(path.join(__dirname, 'unzipped.txt'))

zipped.pipe(unzip).pipe(unzipped)
