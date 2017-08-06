/* jshint esversion:6 */

const express = require('express');
const app = express();
const path = require('path');
const nodeID3 = require('node-id3');
const fs = require("fs");

    app.use(express.static(__dirname + '/'));

    app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
    });

    console.log(__dirname+'/dist/');

    const srcpath = '/Users/krenshaw/workplace/droBoPlayer/src/assets/audio/';
    const tracks = fs.readdirSync(srcpath).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    const tags = tracks.map((item)=>{return nodeID3.read(srcpath+item);});
    const genres = tags.map((item)=>{ return item.genre; });

    uniqueArray = genres.filter(function(item, pos) {
      return genres.indexOf(item) == pos;
    });
    console.log(tags);


    // app.post('/getTracks', function(req, res){
    //   const tracks = fs.readdirSync('./audio/Country/');
    //   const genres =  getDirectories("./audio/");
    //   const data = {tracks:tracks, genres:genres};

    //   res.send(data);

    // });
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
