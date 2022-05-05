import { Component, Input, OnInit } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import axios from "axios";
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  data:any
  amount:any= 0
     search:any=""
  
  constructor() { }

  ngOnInit(): void {
    axios.get("http://localhost:3000/api/products/getProducts")
    .then((res) => {
      console.log(res.data);
      this.data = res.data;
    }).catch((err)=>{
      console.log(err);
      
    });
    
  }
  increment() {
    this.amount++;
  }
  decrement() {
    this.amount--;
  }
  filtredProduct(){
    return this.data.filter((element:any)=>{
      return element.title.match(this.search)
    })
  }
  created() {
    axios.get("http://localhost:3000/api/products/getProducts").then((res) => {
      console.log(res.data);
      this.data = res.data;
    });
  }

}
