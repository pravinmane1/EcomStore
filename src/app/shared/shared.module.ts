import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ActionButtonDirective } from './directives/action-button.directive';

@NgModule({
  declarations: [LoaderComponent, ActionButtonDirective],
  imports: [CommonModule],
  exports: [LoaderComponent,ActionButtonDirective],
})
export class SharedModule {}
