import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {

  @Input() notes!: Note[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes)
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  columns = ['position', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


}
