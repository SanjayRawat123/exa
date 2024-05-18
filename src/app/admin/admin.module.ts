import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreDirectivesModule } from 'src/@Core-scss/directives/directives';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedNavbarComponent } from '../shared-modules/shared-navbar/shared-navbar.component';

@NgModule({
  declarations: [AdminComponent, SideBarComponent, SharedNavbarComponent],
  imports: [CommonModule, NgbModule, AdminRoutingModule, CoreDirectivesModule],
})
export class AdminModule {}