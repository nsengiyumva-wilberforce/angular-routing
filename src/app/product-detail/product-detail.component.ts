import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item: any
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params=>{
      if(this. item = this.router.getCurrentNavigation().extras.state){
        this. item = this.router.getCurrentNavigation().extras.state.item
      } else{
      this.item = {
        "id":5,
        "title":"Find your ideal TV",
        "price":700000,
        "desc":"It is the best product of wilberforce mukdkdkdkdk",
        "image":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
    }
      }
    })
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

}
