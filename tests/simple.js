var consumer_key = 'mrw08LmNseqVVIa6i8nO5UEl78fxXOGcaSe978iZyrswS2a8Wj';
var consumer_secret = 'mefqdRTB2eNlTE5EnS3U8Raa5oMKFvo3Llhj2yyTAPGqu2Go90';
var access_token = 'me0FwdicQ6c9V1ZHBhxt0CG2Hk8xOrZeMxRQAGFsHLa4klXeNB';
var token_secret = 'JqrjGgaouL6Gx9ro6QuhS2rjgEMNze6vD8RDPSHFti0C9WTsKT';
var tumblr = require('../index.js')(consumer_key, consumer_secret);

tumblr.getDashboard({}, access_token, token_secret, function(e, d){
  console.log('error', e);
  console.log('data', d);
});
