const Instagram = require('./services/instagram');
require('dotenv').config();

let ig = new Instagram();


// Cookie shoud be json string encoded
var headers = {
    'User-Agent': process.env.USER_AGENT,
    'x-csrftoken': process.env.IG_CSRF,
    'x-ig-app-id': process.env.IG_APPID,
    'x-ig-www-claim': process.env.IG_CLAIM,
    'Cookie': process.env.IG_COOKIE,
    'x-instagram-ajax': process.env.IG_AJAX,
    'x-requested-with': 'XMLHttpRequest',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'accept': '*/*',
    'x-asbd-id': '198387',
    'sec-fetch-site': 'same-origin',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'viewport-width': '811'
}

ig.setHeaders(headers);

(async () => {
    var res = await ig.getProfile("instagram");
    console.log(res);
})();
