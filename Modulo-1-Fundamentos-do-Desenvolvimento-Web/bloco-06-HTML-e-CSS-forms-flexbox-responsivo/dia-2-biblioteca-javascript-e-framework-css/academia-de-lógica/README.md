
#Exercício realizado na Academia de Lógica

## Lógica de programação com Forms e LocalStorage

  Boas vindas ao repositório de lógica de programação, desenvolvemos essa aplicação no intuito de auxiliar na fixação do conteúdo do bloco 6

![enter image description here](https://i.ibb.co/WxjmvMn/Captura-de-tela-de-2021-12-05-14-23-33.png)

## Como vai funcionar

Essa mentoria será divida em duas etapas:

 Dia 6.2 - Criar um formulário e utilizar o local storage para salvar e recuperar os dados obtidos através dos inputs.
 Dia 6.4 - Dar um upgrade na aplicação utilizando flexbox.

## O que já vem pronto
* Todo CSS  já está pronto, vamos dar um upgrade nele na próxima mentoria;
* Todos os elementos necessários já estão sendo capturados dentro do script.js se atente a classe que cada elemento deve conter.
* Já existem funções prontas como:
	* Obter qual o quarto escolhido;
	* Obter o número de pessoas;
	* Formatar a data.

## Requisitos

### 1. Faça uma barra superior para o titulo e o logo

 * Utilize `header` para fazer a barra e deve conter a classe `header-trybe`
 * Adicione um titulo
 * Adicione uma imagem
 Para adicionar a imagem você pode utilizar esta url:
> https://ik.imagekit.io/joaonasc/Trybe/trybe_logo_EZrV9-GSv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1651056693893

### 2. Inicie um formulário que deve conter:

 * Uma `section` com a classe `hotel-form` para a reserva do hotel
   * Adicione um `input` do tipo `data` para o Checkin com a classe `inputCheckin`
   * Adicione um `input` do tipo `data` para o Chekout com a classe `inputCheckout`
* Uma `section` com a classe `hotel-form` selecionarmos os tipos de quartos com
	* Adicione um `input` do tipo `radio` para o quarto Comum com a classe `bedroom`
	* Adicione um `input` do tipo `radio` para o quarto Club com a classe `bedroom`
	* Adicione um `input` do tipo `radio` para o quarto Luxo com a classe `bedroom`
	* Todos devem conter o mesmo `name`
* Uma `section` com a classe `hotel-form` para a quantidade de pessoas
	* Adicione um `select` com quatro `options` de 1 ao 4 com a classe `nPessoas`
* Uma `section` com a classe `hotel-form` para escrevermos alguma observação
	* Adicione uma `textArea` com `placeholder` para indicar que é o campo de observações com a classe `obs`
* Adicione um `botão` com o id `submit-btn`

### 3. Lista de reservas
* Faça uma `section` com a classe `list-section` para a lista de reservas
	* Adicione um titulo 
	* Adicione uma lista ordenada
	* Adicione um botão com o id `clear-btn`

### 4. Adicionando os valores dos inputs na lista
* Desenvolva uma função para criar uma `li` de forma dinâmica 
* Sua `li` deve conter os valores dos `inputs` e ficar da seguinte forma:
`Reserva para o dia xx/xx/xxxx até o dia xx/xx/xxxx`
`Quarto x - Para x Pessoas - Obs: xxxx`
`Obs: xxxxxx`
* Esta `li` deve ser filha da `ol` 
* Adicione um evento de click ao botão que deve receber essa função

### 5.Limpando a lista
* Desenvolva uma função que deve limpar a lista
* Adicione um evento de click ao botão limpar lista que deve receber essa função

### 6. Salvando a lista com LocalStorage

*  Desenvolva uma função que deve salvar a lista quando alteramos algo nela
*  Desenvolva uma função que deve restaurar a lista quando recarregarmos a pagina
* A função que restaura a lista deve ser chamada dentro do `window.onload`.