import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // ActivatedRoute is specific to each routed component loaded by Angular Router.
  // Contains info about the route, its parameters, and additional data associated with the route.
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to route params and get the product based on the productId
    // route parameters correspond to the path variables defined in the route.
    // The productId is provided by the URL.
    // Use productId to display the details for each product.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
