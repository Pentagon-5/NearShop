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
  public el = new mapboxgl.Marker();
   private Latiude= 10.196506147691451;
   private Longitude = 36.792635314317465;

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
        this.addProduct.value.image, this.Longitude,  this.Latiude).subscribe((res :any)=>{
          console.log(res);
        //  console.log(this.Longitude,this.Latiude);
          
          this.addProduct.reset();
            this.Longitude = 0 ;
            this.Latiude = 0    ;
            
          
        })
      
    }
    
    mapbox = {
      accessToken: 'pk.eyJ1IjoibWlsaWZyYWoiLCJhIjoiY2ttdGs1aTIxMHNkNTJwczEwYjhvMnRpNSJ9.iK6jtPrKF5BlQbsIOf2aRg',
    }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken
    = this.mapbox.accessToken;
  let  map:mapboxgl.Map
      map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 9,
    center: [this.Latiude ,this.Longitude ],
  }); 
  
  // Add map controls
  map.on('click', hello => {
    this.Longitude = hello.lngLat.lng;
    this.Latiude = hello.lngLat.lat;
  //  console.log(this.Longitude,this.Latiude);
    
    this.el.setLngLat([hello.lngLat.lng, hello.lngLat.lat])
      .addTo(map);
  });

  }

}
