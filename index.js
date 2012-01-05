var OAuth = require('oauth').OAuth;

module.exports = function(consumer_key, consumer_secret){
  var oauth_client = new OAuth('http://www.tumblr.com/oauth/request_token'
                               , 'http://www.tumblr.com/oauth/access_token'
                               , consumer_key
                               , consumer_secret
                               , '1.0A'
                               , null
                               , 'HMAC-SHA1');

  return Object.create(require('./lib/tumblr-client.js'), {
    oauth_client : {
      value : oauth_client,
      enumerable : true
    }
  });
};
