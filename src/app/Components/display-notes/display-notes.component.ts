import { Component, Input, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notesArrayList:any;
  title:any;
  message:any;
  constructor(public dialog:MatDialog) { 
  }

  ngOnInit() {
  }

  openDialog(noteObjet:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      data: noteObjet,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.message = result;
    });
  }
  colorMessageReceived(e:any){ 
    console.log(e);
  }
}
