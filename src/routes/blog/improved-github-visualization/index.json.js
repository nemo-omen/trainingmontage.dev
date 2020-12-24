import { allCommits } from './_commits';

export function get(req, res) {
  allCommits.then((data) => {
    const contents = JSON.stringify(data);

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(contents);
  });
}
