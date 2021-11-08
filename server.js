const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const url =
  'http://api.data.go.kr/openapi/tn_pubr_public_chil_wlfare_mlsv_api?serviceKey=a%2BwyOAWePweD36fVyk%2FCS39j7s7jyGas0zlIB1MrmuIgaj1JT1zFxhqDM01byX%2BGU%2F4euoDX%2BuALdzj1CNXByg%3D%3D&pageNo=1&numOfRows=100&type=json';
app.use(cors());
let obj;
app.get('/api/cafes', (req, res, next) => {
  request(url, function (error, response, body) {
    if (error) console.log(error);
    obj = JSON.parse(body);
    console.log(obj);
  });
  res.send(obj);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
