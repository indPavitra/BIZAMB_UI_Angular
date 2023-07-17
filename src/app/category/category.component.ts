import { Component, OnInit } from '@angular/core';
import { Category } from '../entity/Category';
import { ShowcaseService } from '../showcase.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[ShowcaseService]
})
export class CategoryComponent implements OnInit {
  categories:Category[];
  title="Categories";
  processing:boolean=false;
  mode:boolean;
  CategoryTitle:String;
  nameError:String;
  addProcessError:String;

  constructor(private showcaseService:ShowcaseService){
    this.categories=[];
    


  }
  
  ngOnInit() {
    this.processing=true;
        this.showcaseService.getCategories().subscribe(data=>{
      this.categories=data;
      this.processing=false;
    },error=>{
      this.processing=false;
      alert(JSON.stringify(error));
    });
  }

}