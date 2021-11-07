import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Note } from '../../models/note';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  newContactForm!: FormGroup;
  avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];
  name = new FormControl('', [Validators.required]);
  birthdate = new FormControl('');
  avatar = new FormControl('');
  bio = new FormControl('');

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    ) { }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : null;
  }

  ngOnInit(): void {
    this.newContactForm = new FormGroup({
      avatar: this.avatar,
      name: this.name,
      birthdate: this.birthdate,
      bio: this.bio,
      }
    );
  }

  save() {
    this.userService.addUser(<User> this.newContactForm.value).subscribe(user => {
      this.dialogRef.close(user);
    })
  }
}
