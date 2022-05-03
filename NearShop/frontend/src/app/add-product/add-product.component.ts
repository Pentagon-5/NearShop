import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 

  constructor(private http :HttpClient ,private router:Router ,
    private service :ProductServiceService) { 

   
    }

    addProduct =new FormGroup({
      title :new FormControl(),
      Description:new FormControl(),
      Price:new FormControl(),
      Quantity :new FormControl(),
      image :new FormControl(),
    })

    onSubmit(){
      console.log(this.addProduct);
       this.service.AddProduct(this.addProduct.value.title,this.addProduct.value.Description,this.addProduct.value.Price,this.addProduct.value.Quantity,
        this.addProduct.value.image).subscribe((res :any)=>{
          console.log(res);
          
        })
      
    }
    ngOnInit():void{
      
    }
  

}
