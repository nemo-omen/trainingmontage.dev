import LinkHeader from 'http-link-header';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

let events = [];

const ghToken = process.env.GITHUB_ACCESS_TOKEN;

const baseUrl = 'https://api.github.com';

const eventsUrl = `${baseUrl}/users/nemo-omen/events?per_page=100&username=fa79888b427358f739166bf1ccfa40939fbfb79f`;

const reposUrl = `${baseUrl}/users/nemo-omen/repos`;

// let's start by getting every repo for a given user
const commitsPromise = getRepoData()
  .then((repos) => {
    //now get each repos commits
    let allRepos = [];
    repos.forEach(async (repo) => {
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

      const repoObject = await {
        commits: groups,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
      };

      allRepos.push(repoObject);
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
      'There was a problem fetching the repositories: ',
      repoResponse.status
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

export const allCommits = commitsPromise.then((data) => {
  return data;
});
