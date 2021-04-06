import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import {MatNativeDateModule} from '@angular/material/core';
// my:
import { MatSelectTestsComponent } from './mat-select-tests/mat-select-tests.component';
import { ReactiveFormTestsComponent } from './reactive-form-tests/reactive-form-tests.component';
import { MatDatepickerTestsComponent } from './mat-datepicker-tests/mat-datepicker-tests.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomPipeTestsComponent } from './custom-pipe-tests/custom-pipe-tests.component';
import { EnumTranslatePipe } from './custom-pipe-tests/EnumTranslate.pipe';
import { MatTableTestsComponent } from './mat-table-tests/mat-table-tests.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
// don't know s hera-li? static local data?
import { CdkColumnDef } from '@angular/cdk/table';
import { MatPopupTestsComponent } from './mat-popup-tests/mat-popup-tests.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MatSelectTestsComponent,
    ReactiveFormTestsComponent,
    MatDatepickerTestsComponent,
    CustomPipeTestsComponent,
    EnumTranslatePipe,
    MatTableTestsComponent,
    MatPopupTestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule

    // MatNativeDateModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
