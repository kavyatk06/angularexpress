import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BackendaccessService } from '../backendaccess.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
  title = 'Contact Manager';
  contactList: any = [];
  expresponse: string = '';
  selectedContact: any = {}; // Initialize as empty object
 
  constructor(private http: HttpClient, private baccess: BackendaccessService) { }
 
  ngOnInit(): void {
    this.getAllContacts();
  }
 
  getAllContacts() {
    this.contactList = this.baccess.getAllContacts();
  }
 
  addContact(cdata: any) {
    this.expresponse = this.baccess.addContact(cdata);
    this.getAllContacts(); // Refresh the contact list after adding a new contact
  }
 
  deleteContact(contactId: string) {
    this.http
      .delete(`http://localhost:4000/deleteContact/${contactId}`)
      .subscribe(
        (response) => {
          console.log(`Contact with ID ${contactId} deleted successfully.`, response);
          this.expresponse = `Contact with ID ${contactId} deleted successfully.`;
        },
        (error) => {
          console.error('Error deleting contact:', error);
          this.expresponse = 'Error deleting contact: ' + error.message;
        }
      );
    this.getAllContacts(); // Refresh the contact list after deleting a contact
  }
 
  prepareUpdate(contact: any) {
    this.selectedContact = {...contact};
}
 
 
updateContact() {
  const contactId = this.selectedContact.contactid;
  this.baccess.updateContact(contactId, this.selectedContact).subscribe(
    (response: any) => {
      console.log(`Contact with ID ${contactId} updated successfully.`, response);
      this.expresponse = `Contact with ID ${contactId} updated successfully.`;
      this.getAllContacts(); // Refresh the contact list after updating
      this.selectedContact = null; // Reset after the update
    },
    (error: any) => {
      console.error('Error updating contact:', error);
      this.expresponse = 'Error updating contact: ' + error.message;
    }
  );
}
 

}
 
 
 
 