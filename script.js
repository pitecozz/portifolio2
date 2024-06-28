fetch('https://api.github.com/users/pitecozz/repos')
  .then(response => response.json())
  .then(data => {
    const githubApi = document.getElementById('projetos')
    const projetos = document.createElement('div')
    projetos.className = 'lista-projetos'

    data.forEach(repo => {
      const card = document.createElement('div')
      card.className = 'card-proje'

      const cardNome = document.createElement('h2')
      cardNome.textContent = repo.name
      card.appendChild(cardNome)

      const cardDescricao = document.createElement('p')
      cardDescricao.textContent = repo.description
      card.appendChild(cardDescricao)

      const linkRepo = document.createElement('a')
      linkRepo.className = 'link-repo'
      linkRepo.href = repo.html_url
      linkRepo.textContent = 'Ver repositório'
      card.appendChild(linkRepo)

      projetos.appendChild(card)
    })

    githubApi.appendChild(projetos)
  })
  .catch(error => console.error('Erro ao carregar repositórios do GitHub:', error))
  