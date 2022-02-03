import { Component, OnInit, Input } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DataServicesService } from 'src/app/Services/NotesServices/DataServices/data-services.service';

@Component({
  selector: 'app-icons-component',
  templateUrl: './icons-component.component.html',
  styleUrls: ['./icons-component.component.scss']
})
export class IconsComponentComponent implements OnInit {
  @Input() CardObject: any;
  token:any;
  constructor(private notesService:NotesServicesService,private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
  }

  trash(){
    let data={
      notesId: [this.CardObject.notesId],
      trash:true
    }
    this.notesService.trashNotes(data,this.token).subscribe((response:any)=>{
      this.dataServices.sendData(response)
    })
  }
  archive(){
    let data={
      notesId: [this.CardObject.notesId],
      archive:true
    }
    this.notesService.archiveNotes(data,this.token).subscribe((response:any)=>{
      this.dataServices.sendData(response)
    })
  }
}