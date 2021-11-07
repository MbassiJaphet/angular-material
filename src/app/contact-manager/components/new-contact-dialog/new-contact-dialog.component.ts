import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Note } from '../../models/note';
import { User } from '../../models/user';

@Component({
  selector: 'new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  user!: User;
  newContactForm!: FormGroup;
  avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];
  name = new FormControl('', [Validators.required]);
  avatar = new FormControl('');
  bio = new FormControl('');

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : null;
  }

  ngOnInit(): void {
    this.user = new User();
    this.newContactForm = new FormGroup({
      avatar: this.avatar,
      name: this.name,
      bio: this.bio,
      }
    );
  }

  save() {
    this.dialogRef.close(this.newContactForm.value);
  }
}
