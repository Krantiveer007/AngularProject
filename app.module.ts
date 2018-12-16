import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}