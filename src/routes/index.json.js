import { allPosts, allTweetsPromise } from './_allposts.js';

export function get(req, res) {
    allTweetsPromise.then(data => {
        const tweets = data.slice(0, 5);
        const posts = allPosts;

        const returnObject = {
            tweets: tweets,
            posts: posts,
        }
        
        const contents = JSON.stringify(returnObject);
        
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    
        res.end(contents);

    }).catch((error) => console.error(error));
}