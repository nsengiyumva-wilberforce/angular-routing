import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public products =[
  {
      "id":1,
      "title":"Get fit at home",
      "price":600000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
  },

  {
      "id":2,
      "title":"Computers & Accessories",
      "price":650000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
  },

  {
      "id":3,
      "title":"Electronics",
      "price":430000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
  },

  {
      "id":4,
      "title":"Beauty picks",
      "price":450000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
  },

  {
      "id":5,
      "title":"Find your ideal TV",
      "price":700000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
  },

  {
      "id":6,
      "title":"AmazonBasics",
      "price":780000,
      "desc":"It is the best product of wilberforce mukdkdkdkdk",
      "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
  }
  

]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectProduct(product){
    let navigationExtras: NavigationExtras={
      queryParams:{
        'id': product.id
      }, 
      state:{
         item:product
       }
    }
    this.router.navigate(['product-detail'], navigationExtras)
  }
}
