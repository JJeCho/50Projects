const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if(err.response.status == 404){
      createErrorCard('No profile with this username')
    }
  }
}

function createUserCard(user) {
  const cardHtml = ` <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.login}</h2>
        <p>${user.bio==null?'No bio':user.bio}</p>

        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
        </div> 
</div>`;
  main.innerHTML = cardHtml;
}

function createErrorCard(msg){
  const cardHtml = ` <div class="card">
    <h1>${msg}</h1>
</div>`;
  main.innerHTML = cardHtml;
}

async function getRepos(user) {
  try {
      const {data} = await axios.get(APIURL + user + "/repos?sort=created");
      addReposToCard(data);
  }
  catch(err){
    createErrorCard('Problem fetching repos');
  }
}

function addReposToCard(repos){
  const reposEl = document.getElementById('repos');

  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');

    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
