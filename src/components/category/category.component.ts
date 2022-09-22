import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id!:number;
  categories:any;
  
  constructor(private categoryService:CategoryService,private shared:SharedService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  setId(id:number){
    this.id = id;
    this.shared.setId(this.id)
  }

  getAllCategories(){
    this.categoryService.getServCategory().subscribe({
      next: response => this.categories = response,
      error: error => console.log(error),
      complete: () => console.log('complete')
    });
  }

  // getProvidersByCategoryId(){
  //   this.categoryService.getCategoryById().subscribe({
  //     next: response => this.categories = response,
  //     error: error => console.log(error),
  //     complete: () => console.log('complete')
  //   });
  // }
}
