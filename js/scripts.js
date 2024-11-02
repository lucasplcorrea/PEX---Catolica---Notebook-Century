document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleTheme");
  
    // Função para alternar entre os temas
    function toggleTheme() {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
        console.log("Tema alterado pelo usuário: Escuro");
      } else {
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
        console.log("Tema alterado pelo usuário: Claro");
      }
    }
  
    // Verifique o tema preferido do usuário ou o tema do sistema
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  
    // Aplica o tema inicial
    const initialTheme = userTheme || systemTheme;
    document.body.classList.add(initialTheme + "-theme");
  
    // Logs do tema inicial
    if (userTheme) {
      console.log("Tema preferido do usuário carregado:", userTheme === "dark" ? "Escuro" : "Claro");
    } else {
      console.log("Tema do sistema detectado e aplicado:", systemTheme === "dark" ? "Escuro" : "Claro");
    }
  
    // Evento de clique para o botão de alternância
    toggleButton.addEventListener("click", () => {
      console.log("Botão de alternância de tema clicado");
      toggleTheme();
    });
  });
  