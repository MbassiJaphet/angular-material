import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  users!: Observable<User[]>;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
    zone: NgZone,
    private userService: UserService
    ) {
    this.mediaMatcher.addEventListener("change", mql => zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => console.log(data));
  }

  get isSmallScreen() {
    return this.mediaMatcher.matches;
  }

  log() {
    console.log('Togging SideNav')
  }


}
