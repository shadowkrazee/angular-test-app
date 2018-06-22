import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrypticComponent } from './components/cryptic/cryptic.component';
import { ShockboxComponent } from './shockbox/shockbox.component';

@NgModule({
  declarations: [AppComponent, CrypticComponent, ShockboxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}