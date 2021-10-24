import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user?: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.user = undefined;

      this.userService.users.subscribe(users => {
        if (users.length == 0) return;

        setTimeout(() => {
          this.user = users.find(user => user.id == id)
        }, 500)
      });
    })
  }
  
}
