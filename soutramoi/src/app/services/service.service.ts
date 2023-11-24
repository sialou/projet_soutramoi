import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private services:Service[]=[]

  constructor(private http: HttpClient) { }

  /*getServices(): Promise<Service[]>
  {

    return new Promise((resolve, reject)=>{

        if (this.services.length){

          resolve(this.services)
        }else{

          reject([])
        }
        })

    }*/

    getServices(){

      this.http.get
    }

 getNumber(): Observable<Number>{

      return of(45)
  }

  editUser(user_id:number,user: Service){

  }

  addUser(user: Service){

  }
}
