import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { DataServicesService } from 'src/app/Services/NotesServices/DataServices/data-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons-component',
  templateUrl: './icons-component.component.html',
  styleUrls: ['./icons-component.component.scss']
})
export class IconsComponentComponent implements OnInit {
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Input() CardObject: any;
  token:any;
  showIcons:boolean=true;
  colorFirstRow = [
    {
      colorName: 'White', bgColorValue: '#fff'
    },
    {
      colorName: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      colorName: 'Lime', bgColorValue: '#B3E283'
    },
    {
      colorName: 'Pink', bgColorValue: '#FFEBCC'
    },
    {
      colorName: 'Yellow', bgColorValue: '#FFFEA9'
    },
  ];
  colorSecondRow = [
    {
      colorName: 'Red', bgColorValue: '#F28B82'
    },
    {
      colorName: 'Orange', bgColorValue: '#FBBC05'
    },
    {
      colorName: 'Dark Blue', bgColorValue: '#AECBFA'
    },
    {
      colorName: 'Pink', bgColorValue: '#FDCFE8'
    },
    {
      colorName: 'Gray', bgColorValue: '#E8EAED'
    }
  ];
  constructor(private notesService:NotesServicesService,private dataServices:DataServicesService,private route:Router) { }

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
  changeColor(colorData:any){
    let data={
      notesId: [this.CardObject.notesId],
      color:colorData
    }
    this.notesService.colorNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      this.changeColorOfNote.emit(colorData)
      window.location.reload()
    })
  }

  delete(){
    let data={
      notesId: [this.CardObject.notesId]
    }
    this.notesService.deleteNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      this.dataServices.sendData(response)
    })
  }
}