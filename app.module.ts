import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { IconsComponentComponent } from './Components/icons-component/icons-component.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponentComponent } from './Components/snack-bar-component/snack-bar-component.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import{ MatMenuModule } from '@angular/material/menu';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    IconsComponentComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    SnackBarComponentComponent,
    UpdateNoteComponent,
    TrashNotesComponent,
    ArchiveNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatToolbarModule,
    MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,MatSnackBarModule,MatDialogModule,MatMenuModule,MatCheckboxModule,
    FlexLayoutModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
