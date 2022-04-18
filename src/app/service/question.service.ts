import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  getdata()
  {
    let url="http://localhost:4200/read";
    return this.http.get(url);
  }
  getQuestionJson()
  {
    return this.http.get<any>("assets/questions.json");
  }
  createstudent(data1: any,data2:any)
  {
    let url="http://localhost:4200/create";
    console.log({name:data1,score:data2})
    return this.http.post(url,{name:data1,score:data2});

  }
  
}
