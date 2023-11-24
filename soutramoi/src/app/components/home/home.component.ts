import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[]=[]
  data: Number | undefined
  myvardata: Subscription|undefined

  constructor(private serviceService: ServiceService ){

  }
    ngOnInit(): void{

    this.myvardata=  this.serviceService.getNumber()
      .subscribe({
        next:(value: Number)=>{
          this.data=value
        },
        error:(error:any)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log("Complete")
        },

      })


     // this.services= this.serviceService.getUsers()
    /* this.serviceService.getServices()
     .then((myservices: Service[])=>{
        this.services=myservices

     })
     .catch(()=>{
      this.services=[]

     })
     */
    }

    ngOnDestroy(): void{


      this.myvardata?.unsubscribe
    }

}
