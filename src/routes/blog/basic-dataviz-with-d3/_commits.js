// import LinkHeader from 'http-link-header';
// import fetch from 'node-fetch';
// let events = [];

// const ghToken = 'c806cd2891d75e6a4a7204e0c54f8e54d16ba1a8';

// const baseUrl = 'https://api.github.com';

// const eventsUrl = `${baseUrl}/users/nemo-omen/events?per_page=100&username=fa79888b427358f739166bf1ccfa40939fbfb79f`;

// const reposUrl = `${baseUrl}/users/nemo-omen/repos`;

// export async function getRepoData() {
//   const repoResponse = await fetch(reposUrl);

//   if (!repoResponse.ok) {
//     console.error(
//       'There was a problem fetching the repositories: ',
//       repoResponse.status
//     );
//   }
//   const repoData = await repoResponse.json();
//   return repoData;
// }
