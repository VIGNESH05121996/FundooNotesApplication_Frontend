import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DataServicesService } from 'src/app/Services/NotesServices/DataServices/data-services.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveList:any;
  token:any;
  notesList:any;
  constructor(private notesServices:NotesServicesService,private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.dataServices.receivedData.subscribe(()=>{
      this.getAllArchivedNotes();
    })
  }
  getAllArchivedNotes(){
    this.notesServices.getAllNotes(this.token).subscribe((response:any)=>{
      this.archiveList=response.notes.filter((result:any)=>{
        this.notesList=result.archive === true
        return this.notesList
      })
      console.log("Archived Notes",this.archiveList)
      this.archiveList.reverse()
    })
  }
}
