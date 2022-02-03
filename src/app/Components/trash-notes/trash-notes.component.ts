import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DataServicesService } from 'src/app/Services/NotesServices/DataServices/data-services.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashList:any;
  token:any;
  notesList:any;
  constructor(private notesServices:NotesServicesService,private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.dataServices.receivedData.subscribe(()=>{
      this.getAllTrashedNotes()
    })
  }
  getAllTrashedNotes(){
    this.notesServices.getAllNotes(this.token).subscribe((response:any)=>{
      this.trashList=response.notes.filter((result:any)=>{
        this.notesList= result.trash === true
        return this.notesList
      })
      console.log("Trashed Notes:",this.trashList)
      this.trashList.reverse()
    })
  }
}
