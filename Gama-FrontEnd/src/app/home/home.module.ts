import { DialogConfirmComponent } from './component/dialog/dialog-confirm/dialog-confirm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogProjectComponent } from './component/dialog/dialog-project/dialog-project.component';
import { GamaFileComponent } from './gama-file/gama-file.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

const modules = [
    DragDropModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
];

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        HomepageComponent,
        GamaFileComponent,
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularEditorModule,
        ...modules
    ],
    entryComponents: [DialogProjectComponent, DialogConfirmComponent],
    exports: [...modules],
})
export class HomeModule { }
