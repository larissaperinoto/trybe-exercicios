# DOM (Document Object Model)

Trata-se de uma interface que representa como os arquivos HTML são lidos pelo browser, ondeo DOM cria um objeto que faz uma representação do documento. Quando acessamos essa estrutura com JavaScript podemos alterar o estilo e o conteúdo da página.

Através do objeto *document* temos acesso à nossa página HTML, e então podemos usar funções que atuam como seletores de elementos presentes na página.

## Seletores de elementos
- getElementById: função que nos permite selecionar os elementos através do iD definido no HTML. Quase sempre vamos usar está função associada a outras propriedades.
- innerHTML: propriedade usada para trazer o conteúdo da tag identificada. Porém ainda irá trazer outras tags filhas.
- innertext: com esta propriedade conseguimos trazer apenas o conteúdo textual que há na tag.
>
>   Ex: *document*.getElementById("meuId");
>   
>   Resultado: "<p id = "meuId"><strong>Paragráfo</strong></p>"
>
>   Ex: *document*.getElementById("meuId").innerHTML;
>   
>   Resultado: <strong>Paragráfo</strong>
>   
>   Ex: *document*.getElementById("meuId").innerText;
>   
>   Resultado Paragráfo
>
- getElementsByClassname: outra função que nos permite selecionar elementos do HTML e modifica-los, porém lembrando que uma classe pode ser utilizadas em mais de um elemento. Quando usamos esta função temos de usar indices pois irá nos retornar um array.

- getElementByTagName: função para acessar os elementos da nossa página que sempre nos retorna uma lista de elementos.

- querySelector: função que retorna apenas um elemento e retorna o primeiro que ela encontrar. Esta função permite trabalhar com elementos CSS.
    Os tipos de seleção com querySelector   
    document.querySelector("#meuId) //Por Id
    document.querySelector(".minhaClasse") //Por classes
    document.querySeletcor("h1") //Por tags

    Também permite selecionar em cascata, como no CSS.
    Ex: document.querySelector(".minhaClasse p");

- querySelectorAll: diferente do anterior, retorna uma lista com TODOS elementos que tenham o seletor CSS indicado.

