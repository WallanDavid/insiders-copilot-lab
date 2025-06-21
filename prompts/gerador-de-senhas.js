// Gere uma senha aleatória segura com 12 caracteres
// A senha deve incluir letras maiúsculas, minúsculas, números e símbolos

function gerarSenha(tamanho = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return senha;
}

console.log("🔐 Senha gerada:", gerarSenha());
