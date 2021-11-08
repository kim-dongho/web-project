const request = require('request');
const options = {
  method: 'GET',
  url: 'http://api.data.go.kr/openapi/tn_pubr_public_chil_wlfare_mlsv_api?serviceKey=7Y9ZvnGZkOx6IKJL4lomFYtfPWybxeUOs%2Bh%2BLPakm2xGDAr%2FEWGRcM0DLJm5OCYMkM39HUxlqIIYLtisM7DCNw%3D%3D&pageNo=0&numOfRows=500&type=json',
  headers: {
    Cookie: 'SCOUTER=x1fr0ngi5qrf0; clientid=000053973787',
  },
};

request(options, function (error, response, body) {
  const Dataset = require('./models/Dataset');
  if (error) {
    throw new Error(error);
  }
  let info = JSON.parse(body);
  for (let i in info['response']['body']['items']) {
    console.log('가게이름 : ' + info['response']['body']['items'][i]['mrhstNm']);
    console.log('가게주소 : ' + info['response']['body']['items'][i]['rdnmadr']);
    console.log('시,도명 : ' + info['response']['body']['items'][i]['ctprvnNm']);
    console.log('시,군,구명 : ' + info['response']['body']['items'][i]['signguNm']);
    console.log('가게위도 : ' + info['response']['body']['items'][i]['latitude']);
    console.log('가게경도 : ' + info['response']['body']['items'][i]['longitude']);
    console.log(' ');
  }
});
