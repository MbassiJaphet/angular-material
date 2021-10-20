import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'contact-manager-app',
  template: `
    <side-nav></side-nav>
  `,
  styles: [
  ]
})
export class ContactManagerAppComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) { 
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('/assets/avatars.svg'));
    
  }

  ngOnInit(): void {
  }

}
