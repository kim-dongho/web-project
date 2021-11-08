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
        Shop.find({시도명: req.params.shops_area}, function(err, shop){
            if(err) return res.status(500).json({error: err});
            if(!shop) return res.status(404).json({error: 'book not found'});
            res.json(shop);
        })
    });
    
    app.get('/api/shopslatlon/:shops_lat/:shops_lon', function(req, res){
        Shop.find({$and:[{위도: {$lt: Number(req.params.shops_lat) +0.04504505, $gt: Number(req.params.shops_lat) -0.04504505}, 
                   경도: {$lt: Number(req.params.shops_lon) +0.04504505, $gt: Number(req.params.shops_lon) -0.04504505}}]
                  }, function(err, shop){
            if(err) return res.status(500).json({error: err});
            if(!shop) return res.status(404).json({error: 'book not found'});
            res.json(shop);
        })
    });


    // GET
}