// Código antigo
function getUser(id) {
  return fetch("https://api.site.com/user/" + id)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Código gerado/refatorado com Copilot
async function getUser(id) {
  try {
    const response = await fetch(`https://api.site.com/user/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
}
