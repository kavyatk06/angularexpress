import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class BackendaccessService {
  userList:any=[];
  contactList: any[] = [];
  expresponse:string='';
 
  constructor(private http:HttpClient){
 
  }
 
  getAllUsers(){
    this.http.get("http://localhost:4000/getall").subscribe
    ((response)=>{
      this.userList=response;
      console.log(this.userList);
    });
    return this.userList;
  };
 
  addUser(udata :any) : any{
    // console.log(udata);
    console.log(udata.value);
    // this.userList.push(udata.value);
    this.http.post('http://localhost:4000/insert',udata.value).subscribe((response)=>{
      this.expresponse=response.toString();
    });
    return this.expresponse;
    }
 
 
 // For Contacts
 getAllContacts() {
  this.http.get("http://localhost:4000/getall").subscribe((response: any) => {
    this.contactList = response;
    console.log(this.contactList);
  });
  return this.contactList;
};
 
addContact(cdata: any): any {
  console.log(cdata.value);
  this.http.post('http://localhost:4000/addContact', cdata.value).subscribe((response) => {
    this.expresponse = response.toString();
    // this.getAllContacts();
  });
  return this.expresponse;
}
 
deleteContact(contactId: string): any {
  this.http.delete(`http://localhost:4000/deleteContact/${contactId}`).subscribe((response) => {
    this.expresponse = response.toString();
    // this.getAllContacts();
  });
  return this.expresponse;
}
 
updateContact(contactId: string, updatedData: any): any {
  this.http.put(`http://localhost:4000/updateContact/${contactId}`, updatedData).subscribe(
    (response) => {
      console.log(`Contact with ID ${contactId} updated successfully.`, response);
      this.expresponse = `Contact with ID ${contactId} updated successfully.`;
    },
    (error) => {
      console.error('Error updating contact:', error);
      this.expresponse = 'Error updating contact: ' + error.message;
    }
  );
  return this.expresponse;
}
 
}
 
 
 