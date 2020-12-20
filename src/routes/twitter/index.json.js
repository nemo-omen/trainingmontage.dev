import { allTweetsPromise } from './_tweets.js';


export function get(req, res) {
    allTweetsPromise.then(data => {
        const contents = JSON.stringify(data);
        
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    
        res.end(contents);

    }).catch((error) => console.error(error));
}