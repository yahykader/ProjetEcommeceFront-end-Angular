import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents = [MatMenuModule];
@NgModule({

  imports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule,
            MatGridListModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule],
  exports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule,
            MatGridListModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule]
})
export class MaterialModule { }
