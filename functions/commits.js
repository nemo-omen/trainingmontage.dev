const LinkHeader = require('http-link-header');
const fetch = require('node-fetch');

let events = [];

const ghToken = process.env.GITHUB_API_TOKEN;

console.log('ghToken', ghToken);

const baseUrl = 'https://api.github.com';

const reposUrl = `${baseUrl}/users/nemo-omen/repos`;

// let's start by getting every repo for a given user
const commitsPromise = getRepoData()
  .then((repos) => {
    const allRepos = repos.map(async (repo) => {
      const commits = await getRepoCommits(
        repo.commits_url.replace('{/sha}', '')
      );

      let groups = await commits.reduce((groups, commit) => {
        let date = new Date(commit.date).toLocaleDateString();

        if (!groups[date]) {
          groups[date] = [];
        }

        groups[date].push(commit);

        return groups;
      }, {});

      return {
        commits: groups,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
      };
    });

    return allRepos;
  })
  .catch((error) => console.error(error));

async function getRepoData() {
  const repoResponse = await fetch(reposUrl, {
    headers: {
      authorization: `token ${ghToken}`,
    },
  });

  if (!repoResponse.ok) {
    console.error(
      `There was a problem fetching the repositories at ${reposUrl}: `,
      repoResponse.status,
      repoResponse.statusText
    );
  }

  const repoData = await repoResponse.json();

  return repoData;
}

async function getRepoCommits(commitUrl) {
  const commitsResponse = await fetch(commitUrl, {
    headers: {
      authorization: `token ${ghToken}`,
    },
  });

  if (!commitsResponse.ok) {
    console.error(
      `There was a problem fetching commits for the repo at ${commitUrl}: `,
      commitsResponse.status
    );
  }

  const commitsData = commitsResponse.json().then(async (data) => {
    const commitsMap = await data.map((commit) => {
      return {
        date: commit.commit.committer.date,
        message: commit.commit.message,
        commit_url: commit.html_url,
      };
    });
    return commitsMap;
  });
  return commitsData;
}

const allCommits = commitsPromise.then((data) => {
  return data;
});

exports.handler = async (event, context) => {
  console.log(context);
  return allCommits
    .then(async (asyncData) => {
      const returnData = await Promise.all(asyncData).then((data) => {
        return data;
      });
    })
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }))
    .catch((error) => ({
      statusCode: 422,
      body: String(error),
    }));
};
