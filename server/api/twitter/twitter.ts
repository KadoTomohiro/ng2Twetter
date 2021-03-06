'use strict';

const twitter = require('twitter');
const config = require('config');

var client = new twitter(config.get('twitter_keys'));

var cache;
exports = module.exports = function (app) {
    app.get('/api/twitter/', (req, res) => {

        if (cache) {
            res.jsonp(cache);
            return;
        }

        client.get('statuses/home_timeline', function (error, tweets) {
            if (error) throw error;
            console.log(tweets);  // The favorites.
            //console.log(response);  // Raw response object.
            cache = tweets;
            res.jsonp(cache);
        });
    });
};
