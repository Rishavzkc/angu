import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search(){
    alert("Search is not avaliable.")
      }
  
      edit(){
     alert("Edit is not avaliable")     
      }

      delete(){
        alert("Delete is not avaliable")
      }
  constructor() {
    
   }

  ngOnInit(): void {

    
  }
  
}

