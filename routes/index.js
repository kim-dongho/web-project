// routes/index.js

module.exports = function(app, Shop)
{
    // GET
    app.get('/api/shops', function(req,res){
        Shop.find(function(err, shops){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(shops);
        })
    });


    // GET
    app.get('/api/shops/:shops_area', function(req, res){
        Shop.find({시도명: {$regex:req.params.shops_area}}, { 가맹저명: 1, 시도명: 1, 소재지도로명주소: 1, 위도: 1, 경도: 1, 전화번호: 1, 평일운영시작시각: 1, 평일운영종료시각: 1, 토요일운영시작시각: 1, 토요일운영종료시각: 1}, function(err, shop){
            if(err) return res.status(500).json({error: err});
            if(!shop) return res.status(404).json({error: 'book not found'});
            res.json(shop);
        })
    });
    
    app.get('/api/shopslatlon/:shops_lat/:shops_lon', function(req, res){
        Shop.find({$and:[{위도: {$lt: Number(req.params.shops_lat) +0.04504505, $gt: Number(req.params.shops_lat) -0.04504505}, 
                   경도: {$lt: Number(req.params.shops_lon) +0.04504505, $gt: Number(req.params.shops_lon) -0.04504505}}]
                  }, { 가맹저명: 1, 시도명: 1, 소재지도로명주소: 1, 위도: 1, 경도: 1, 전화번호: 1, 평일운영시작시각: 1, 평일운영종료시각: 1, 토요일운영시작시각: 1, 토요일운영종료시각: 1}, function(err, shop){
            if(err) return res.status(500).json({error: err});
            if(!shop) return res.status(404).json({error: 'book not found'});
            res.json(shop);
        })
    });


    // GET
}