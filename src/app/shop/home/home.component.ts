import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productChunks: any = [];

  constructor(
    private _shopService: ShopService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this._shopService.getAllProducts().subscribe(
      (res) => {
        if (res.success) {
          this.productChunks = res.data
        } else {
          console.log(res.err);
        }
      },
      (err) => console.error(err)
    );
  }

}
