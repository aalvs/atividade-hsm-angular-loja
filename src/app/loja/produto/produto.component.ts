import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: any;

  @Input() quantidade: number = 0;

  @Output() addCart = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.quantidade++;
    this.addCart.emit(this.quantidade);
  }
  decrementa() {
    this.quantidade--;
    this.addCart.emit(this.quantidade);
  }
}
