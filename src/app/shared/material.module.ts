import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    CdkTableModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    CdkTableModule,
  ]
})
export class MaterialModule { }
