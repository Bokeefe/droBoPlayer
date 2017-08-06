/* jshint esversion:6 */

const express = require('express');
const app = express();
const path = require('path');
const nodeID3 = require('node-id3');
const fs = require("fs");

// app.use(express.static(__dirname + '/'));

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

const srcpath = '/Users/krenshaw/workplace/droBoPlayer/src/assets/audio/';
  // fs.readdir(srcpath, (err, genres) => {
  //   genres = genres.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  // });

  const genres = fs.readdirSync(srcpath).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));


  //const tags = genres.map((item)=>{console.log(srcpath+item+'/');});
   
    
  //console.log(nodeID3.read('/Users/krenshaw/workplace/droBoPlayer/src/assets/audio/Country/'));



// function getDirectories (srcpath) {
//   return fs.readdirSync(srcpath)
//     .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());

// }

// app.post('/getTracks', function(req, res){
//   const tracks = fs.readdirSync('./audio/Country/');
//   const genres =  getDirectories("./audio/");
//   const data = {tracks:tracks, genres:genres};

//   res.send(data);

// });
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
