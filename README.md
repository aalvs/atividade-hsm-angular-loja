<div align='center'>
<img src=".github/logo.png" width='250'>
</div>

## 🚀 Atividade

Crie uma aplicação de loja simples com as seguintes funcionalidades:

- um componente-pai Loja que contém uma propriedade array de objetos. O tamanho fica a seu critério e cada objeto tem essa configuração:

{
nome: “nome do produto”,
preco: “R$ 0,00”,
imagem: “escolha uma imagem da internet e copie sua url aqui”,
noCarrinho: true ou false
}

- o componente-pai irá, por meio da diretiva *ngFor, passar cada um dos produtos para um componente-filho Produto;
- cada componente-filho Produto irá exibir o objeto recebido pelo componente-pai por meio da interpolação;
- cada produto exibido no componente-filho deve conter o botão colocar no carrinho verde, que irá emitir um evento para o componente-pai ao mesmo tempo que altera o valor do atributo noCarrinho para true;
- se o atributo noCarrinho de um produto está true, o botão deve alterar sua cor para vermelha e seu texto para retirar do carrinho, desta vez alterando o atributo para false;
- o componente-pai deve exibir a quantidade de itens que estão no carrinho em um texto semelhante à “itens no carrinho: 2”;
- o nome do produto deve ser exibido com todas as letras em maiúsculo, utilizando um pipe.

---

# 📚 O que eu aprendi com o projeto!

- Criar projetos, modulos e componentes com Angular CLI;
- Passagem de dados entre componentes usando @Input e @Output;
- Aplicar eventos em elementos;
- Trabalhar com template string.

# 💻 Tecnologias

<a href='https://angular.io/'>Angular.js</a>
<br/>
<a href='https://www.typescriptlang.org/'>TypeScript</a>
<br/>
<a href='https://www.w3schools.com/html/'>HTML5</a>
<br/>
<a href='https://www.w3schools.com/css/'>CSS3</a>
<br/>
<a href='https://code.visualstudio.com/'>Visual Studio Code</a>
<br/>

# 📝 Sobre o projeto

- Curso Angular JS

Este é um projeto acadêmico. Seu principal objetivo é facilitar a avaliação dos professores.

---

O aprendizado é contínuo e o próximo nível nunca será o último 🚀 by [aalvs](https://app.rocketseat.com.br/me/aalvs).