import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  qtdNoCarrinho: number = 0;

  listaProdutos: Object[];

  constructor() {

    this.listaProdutos = [
      {
        nome: 'Air max 90 Infrared',
        descricao: 'The "Infrared" colorway is without any doubt one of the most iconic in the Nike Air Max history.',
        preco: '589,00',
        marca: '../../../assets/images/marcas/nike.svg',
        imagem: '../../../assets/images/tenis/airmax.png',
        noCarrinho: false,
        actionCart: function() {
          if (this.noCarrinho) {
            this.noCarrinho = false;
            return true
          } else {
            this.noCarrinho = true;
            return false
          }
        }
      },
      {
        nome: 'R698 Mid - SAkura',
        descricao: 'Ronnie Fieg partners with Puma to redesign the R698. Inspired by Japanese sakura blossoms',
        preco: '489,00',
        marca: '../../../assets/images/marcas/puma.svg',
        imagem: '../../../assets/images/tenis/sakura.png',
        noCarrinho: false,
        actionCart: function() {
          if (this.noCarrinho) {
            this.noCarrinho = false;
            return true
          } else {
            this.noCarrinho = true;
            return false
          }
        }
      },
      {
        nome: 'yeezy Boosts 350',
        descricao: 'The low-top YEEZY BOOST 350 int tan features an upper composed of tornal Primeknit.',
        preco: '389,00',
        marca: '../../../assets/images/marcas/adidas.svg',
        imagem: '../../../assets/images/tenis/yeezy.png',
        noCarrinho: false,
        actionCart: function() {
          if (this.noCarrinho) {
            this.noCarrinho = false;
            return true
          } else {
            this.noCarrinho = true;
            return false
          }
        }
      }
    ]
  }

  getQtd(qtd) {
    this.qtdNoCarrinho = qtd;
  }

  ngOnInit(): void {
  }
  
}
