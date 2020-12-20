import Twitter from 'twitter-lite';

const client = new Twitter({
    version: "1.1",
    consumer_key: 's7tx7aUfDMim0kk4ekTmZKlHL',
    consumer_secret: 'cnb24m6k02eyFDhapmr2ZKL0bxGtkzyQuLNrRoKFc61NMj21aZ',
    access_token_key: '16888607-XjNbnxmYfyeVHX00tXxllT4BUlOJjeWxbHu2Yuvsx',
    access_token_secret: 'TZhHRHsGBKgsaDoOdaJm6DWYVzBSGW4Sq3EFEYFn5CpDk',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAKQFKwEAAAAAeQSkkCsIrU0G2Xe1Npogo3zqzFs%3DspYrFRmwbC4gML6jNNcmDVnYVZnvKEK14Jp96894gXeKMUKQ8v',
});


export const allTweetsPromise = client.get('statuses/user_timeline', {screen_name: 'trainingm0ntage'}).then(results => results).catch(error => console.error('user timeline error: ', error));