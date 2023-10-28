import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BackendaccessService } from './backend-access.service';
import { AuthService } from './auth.service';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="templateforms";
  
  userList : any =[];
  data : any;
  expresponse:string='';
  constructor(private http:HttpClient,private baccess:BackendaccessService){

  }

}