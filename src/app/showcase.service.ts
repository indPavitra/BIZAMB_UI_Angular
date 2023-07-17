import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from './entity/Category';

@Injectable()
export class ShowcaseService {
 // categoris:Category;
  constructor(private httpClient: HttpClient) { }
  addCategories(category:Category):Observable<any>{
    return this.httpClient.post("/showcase/addCategory",category);

  }





  getCategories():Observable<any>{
   /* let categories:Category[];
    categories=[];
    let category:Category=null;
    category=new Category();
    category.code=1;
    category.title="Desktop Application";
    categories.push(category);
    category=new Category();
    category.code=2;
    category.title="Mobile Application";
    categories.push(category);
    category=new Category();
    category.code=3;
    category.title="Web Application";
    categories.push(category);
    category=new Category();
    category.code=4;
    category.title="some Application";
    categories.push(category);
    return of(categories);
    */
   return this.httpClient.get("/showcase/getCategories");
  }
}
