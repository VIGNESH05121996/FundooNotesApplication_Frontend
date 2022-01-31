import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesList:any;
  token:any;
  constructor(private notesServices:NotesServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllNotes();
  }
  getAllNotes()
  {
    this.notesServices.getAllNotes(this.token).subscribe((response:any)=>{
      console.log(response)
      this.notesList=response.notes
      this.notesList.reverse()
    })
  }
}
