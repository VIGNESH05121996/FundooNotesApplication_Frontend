import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DataServicesService } from 'src/app/Services/NotesServices/DataServices/data-services.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesList:any;
  token:any;
  constructor(private notesServices:NotesServicesService,private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.dataServices.receivedData.subscribe(()=>{
      this.getAllNotes()
    })
  }
  getAllNotes()
  {
    this.notesServices.getAllNotes(this.token).subscribe((response:any)=>{
      this.notesList=response.notes.filter((result:any)=>{
        return result.trash === false && result.archive === false  
      })
      console.log("Retrived All Notes:",this.notesList)
      this.notesList.reverse()
    })
  }
}
