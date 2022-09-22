import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { ProviderService } from 'src/services/provider.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  id!:number;
  searchItem:string = '';
  providers:any;
 

  constructor(private providerService:ProviderService,private shared : SharedService,private categoryServ:CategoryService) { }

  ngOnInit() {
    this.getCategoryId();
    this.getProvidersById();
  }
  getCategoryId(){
    this.id = this.shared.getId();
  }

  onSearchTextEntered(searchValue:string){
    this.searchItem = searchValue;
  }
  getProvidersById(){
    this.categoryServ.getCategoryById(this.id).subscribe({
      next: response => this.providers = response,
      error: error => console.log(error),
      complete: () => console.log('complete')
    });
  }

  getAllProviders(){
    this.providerService.getProviders().subscribe({
      next: response => this.providers = response,
      error: error => console.log(error),
      complete: () => console.log('complete')
    });
  }
}
