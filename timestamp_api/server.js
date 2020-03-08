'use strict';

var express = require('express');
var app = express();

var cors = require('cors');

app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });
    
app.route('/api/timestamp/:date?')
  .get(function (req, res){
    
    var date = null;
    if (req.params.date !== undefined) {.
      var unixTimestamp = parseInt(req.params.date*1);
      if (isNaN(unixTimestamp)) {
        date = new Date(req.params.date);
      } else {
        date = new Date(unixTimestamp);
      }
      
    } else {
      date = new Date(Date.now());
    }
    
    var response = date == "Invalid Date" ? 
      { error: "Invalid Date" } :
      { "unix": date.getTime(),
        "utc": date.toUTCString()
      };
    
    res.json(response);
  });

app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
