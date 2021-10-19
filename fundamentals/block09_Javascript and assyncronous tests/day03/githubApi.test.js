// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
describe('testes iniciais', () => {
    it('testa se há nomes especificos na lista', async () => {
        const url = 'https://api.github.com/orgs/tryber/repos';
        const call = await getRepos(url);

        expect(call).toContain('sd-01-week4-5-project-todo-list');
        expect(call).toContain('sd-01-week4-5-project-meme-generator')
        
    })
})