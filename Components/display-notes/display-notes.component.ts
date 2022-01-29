import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  token:any;
  note:any;
  constructor(private notesServices:NotesServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.notesServices.getAllNotes(this.token).subscribe((response:any)=>{console.log(response)
    this.note=response});
  }
}
