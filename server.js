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


    const srcpath = '/Users/krenshaw/workplace/droBoPlayer/src/assets/audio/';
    const tracks = fs.readdirSync(srcpath).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    const tags = tracks.map((item)=>{
      let info =  nodeID3.read(srcpath+item);
      info.srcpath = srcpath+item;
      delete info.trackNumber;
      delete info.encodedBy;
      delete info.comment;
      delete info.performerInfo;
      delete info.textWriter;
      delete info.image;
  
      return info;
    });
    let genres = tags.map((item)=>{ return item.genre; });

    genres = genres.filter(function(item, pos) {
      return genres.indexOf(item) == pos;
    });

    // console.log(JSON.stringify(tags));
     console.log(JSON.stringify(genres));

    app.post('/getTracks', function(req, res){

      const data = {tracks:JSON.stringify(tags), genres:JSON.stringify(genres)};

      res.send(data);

    });
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
