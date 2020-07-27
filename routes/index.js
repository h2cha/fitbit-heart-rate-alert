var express = require('express');
var router = express.Router();
var player = require('play-sound')(opts = {})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  player.play('public/audios/Siren_Noise-KevanGC-1337458893.mp3', {}, function(err){
    if (err) {
      console.log(err)
    }
  })
})
module.exports = router;
