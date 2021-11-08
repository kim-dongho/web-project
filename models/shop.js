var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    가맹점명: String,
    가맹점유형코드: Number,
    시도명: String,
    시군구명: String,
    시군구코드: Number,
    소재지도로명주소: String,
    소재지지번주소: String,
    위도: Number,
    경도: Number,
    전화번호: String,
    평일운영시작시각: String,
    평일운영종료시각: String,
    토요일운영시작시각: String,
    토요일운영종료시각: String,
    공휴일운영시작시각: String,
    공휴일운영종료시각: String,
    배달시작시각: String,
    배달종료시각: String,
    관리기관명: String,
    관리기관전화번호: String,
    데이터기준일자: String,
    제공기관코드: Number,
    제공기관명: String
});

module.exports = mongoose.model('shop', shopSchema);