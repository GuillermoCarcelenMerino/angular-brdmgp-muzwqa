import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
