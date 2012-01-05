/*
 * Tumblr Client
 */

var qs = require('querystring')
, http = require('http')
, host = 'api.tumblr.com/v2'
, agent = http.getAgent(host, 80);

module.exports = {
  _doGet : function(path, params, access_token, token_secret, cb){
    path = 'http://'+host+path;
    if (Object.keys(params).length){
      path+='?'+qs.stringify(params);
    }
    this.oauth_client.get(path, access_token, token_secret, function(e, data){
      return cb((e?JSON.parse(e):null), (data?JSON.parse(data):null)); 
    });
  },

  getDashboard : function(params, access_token, token_secret, cb){
    this._doGet('/user/dashboard', params, access_token, token_secret, cb);
  }
};
