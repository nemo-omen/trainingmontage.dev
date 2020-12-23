import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Twitter from 'twitter-lite';

const client = new Twitter({
  version: '1.1',
  consumer_key: 's7tx7aUfDMim0kk4ekTmZKlHL',
  consumer_secret: 'cnb24m6k02eyFDhapmr2ZKL0bxGtkzyQuLNrRoKFc61NMj21aZ',
  access_token_key: '16888607-XjNbnxmYfyeVHX00tXxllT4BUlOJjeWxbHu2Yuvsx',
  access_token_secret: 'TZhHRHsGBKgsaDoOdaJm6DWYVzBSGW4Sq3EFEYFn5CpDk',
  bearer_token:
    'AAAAAAAAAAAAAAAAAAAAAKQFKwEAAAAAeQSkkCsIrU0G2Xe1Npogo3zqzFs%3DspYrFRmwbC4gML6jNNcmDVnYVZnvKEK14Jp96894gXeKMUKQ8v',
});

const postList = getAllFiles('src/routes/blog');

const blogPosts = postList.map((postPath) => {
  const postObject = matter(fs.readFileSync(postPath, 'utf-8'));
  let routePath = path.dirname(postPath).replace('src/routes', '');
  if (routePath === '/blog') {
    routePath = postPath
      .replace('src/routes', '')
      .replace(path.extname(postPath), '');
  }
  return { ...postObject.data, type: 'blog', path: routePath };
});

function getAllFiles(directory, fileArray) {
  let files = fs.readdirSync(directory);

  fileArray = fileArray || [];

  files.forEach((file) => {
    if (fs.statSync(`${directory}/${file}`).isDirectory()) {
      fileArray = getAllFiles(`${directory}/${file}`, fileArray);
    } else {
      const filePath = path.join(`${directory}/${file}`);
      if (
        path.extname(filePath) === '.md' ||
        path.extname(filePath) === '.svx'
      ) {
        fileArray.push(filePath);
      }
    }
  });
  return fileArray;
}

export const allPosts = [...blogPosts]
  .sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) return 1;
    if (new Date(a.date) > new Date(b.date)) return -1;
    return 0;
  })
  .slice(0, 5);

export const allTweetsPromise = client
  .get('statuses/user_timeline', { screen_name: 'trainingm0ntage' })
  .then((results) => results)
  .catch((error) => console.error('user timeline error: ', error));
