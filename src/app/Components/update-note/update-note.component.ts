import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  @Input() CardObject: any;
  title:any;
  message:any;
  token:any;
  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,private notesService:NotesServicesService,
    @Inject(MAT_DIALOG_DATA) public notes: any,public notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    console.log(this.notes)
    this.title=this.notes.title
    this.message=this.notes.message
    this.token=localStorage.getItem('token')
  }
  onSubmitted() {
    let data = {
      notesId: this.notes.notesId,
      title: this.title,
      message: this.message,
  
    }
    this.notesService.updateNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      if(response.success == true)
        {
          this.notificationServices.showNotification('Notes Updates',' ','','Success');
          window.location.reload();
        }
    })
    this.dialogRef.close();
  }
}
