import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _shopService: ShopService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this._shopService.logout();
    this._router.navigate(["home"]);
  }

}
