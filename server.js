/* jshint esversion:6 */

const express = require('express');
const app = express();
const path = require('path');
const nodeID3 = require('node-id3');
const fs = require("fs");

    // app.use(express.static(__dirname + '/'));

    // app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/src/index.html');
    // });


    const srcpath = './src/assets/audio/';
    const tracks = fs.readdirSync(srcpath).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    let tags = tracks.map((item)=>{
      let info =  nodeID3.read(srcpath+item);
      console.log(item);
      info.srcpath = item;
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

    tags = 'export const AllSongs = '+JSON.stringify(tags);

    function writeSongData(filePath, songData){
      fs.writeFileSync(filePath,songData);
      console.log('wrote to: '+filePath);
    }
    writeSongData('./src/assets/dummy.ts',tags);

    // console.log(JSON.stringify(genres));

    // app.post('/getTracks', function(req, res){

    //   const data = {tracks:JSON.stringify(tags), genres:JSON.stringify(genres)};

    //   res.send(data);

    // });
app.listen(8080, function () {
  console.log('app listening on port 8080!');
});
