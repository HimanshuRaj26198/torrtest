const express = require('express');
const cors = require('cors');
const TorrentSearchApi = require('torrent-search-api');

const app = express();
app.use(express.json());
app.use(cors("dev"));

// TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enablePublicProviders();

app.get("/", async (req, res)=>{
    const torrents = await TorrentSearchApi.search('3 idiots', 'Movies', 100);
    console.log(torrents);
    res.send(torrents);
})




app.listen(3000, (err)=>{
    if(!err){
        console.log("App listening on port 3000");
    }else{
        console.log("Error in listening app");
    }
})