function pesquisar() {
    // Loga uma mensagem no console para verificar se a função está sendo executada
    console.log('Hello, World');

  
    // Acessa o array de dados que contém os resultados da pesquisa
    // **Observação:** Certifique-se que o array 'dados' esteja definido e preenchido com os dados da pesquisa antes de chamar essa função.
    console.log(dados);
    let resultados = "";
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    console.log(section);
  
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    if (campoPesquisa == "") {
      
      section.innerHTML = ('<h1 style="color: #FFC745;">nada encontrado. <strong>nada digitado</strong></h1>')
      return
    }
    console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = ""
    let descricao = ""
    let tags = ""

    //algo deu errado mas eu n sei oque é, e tambem n quero saber
    
    
    // Itera sobre cada item do array de dados
    for (let dado of dados) {
        // Corrigido para 'toLowerCase()'
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()

        if ((titulo.includes(campoPesquisa)) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados +=`
          <div class="item-resultado">
   <h2>
     <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
       <p class="descricao-meta">
    ${dado.descrição}
      </p>
    <a href=${dado.link} target="_blank">Saiba mais</a>
  </div>
    `;

        }

       
      
      

      
      // Concatena a string 'resultados' com o HTML formatado para cada item
      
    }
  
    if (!resultados) {
      resultados = '<h1 style="color: #FFC745;">nada encontrado</h1>'
    }
    // Atribui a string com os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;
    console.log('clicke')
  }