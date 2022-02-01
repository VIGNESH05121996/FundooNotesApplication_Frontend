import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  card: boolean = false;
  createNoteForm:FormGroup;
  submitted=false;
  token:any;
  constructor(private formBuilder: FormBuilder,private notesService:NotesServicesService,private route:Router,
    public notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: [null, Validators.required],
      takeNote:[null,Validators.required]
    });
    this.token=localStorage.getItem('token');
  }
  cardSwap() {
    console.log(this.card);
    return this.card === true ? (this.card = false) : (this.card = true);
  }
  onSubmitted()
  {
    this.submitted=true;
    if(this.createNoteForm.value)
    {
      console.log(this.createNoteForm.value);
      let requestedData={
        title:this.createNoteForm.value.title,
        message:this.createNoteForm.value.takeNote
      }
      this.notesService.createNotes(requestedData,this.token).subscribe((response:any)=>{console.log(response)
        this.cardSwap();
        if(response.success == true)
        {
          this.notificationServices.showNotification('Note Added',' ',' ','Success');
        }
      })
    } 
    else
    console.log("invalid");
  }
}
