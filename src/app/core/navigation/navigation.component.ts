import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-es-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private router: Router) {}

  public onCartClick() {
    this.router.navigate(['cart']);
  }
  public onHomeClick() {
    this.router.navigate(['']);
  }
}
