import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { MatToolbarModule }           from '@angular/material/toolbar';
import { MatCardModule }              from '@angular/material/card';
import { MatMenuModule }              from '@angular/material/menu';
import { MatIconModule }              from '@angular/material/icon';

import { LayoutModule }               from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent }               from './app.component';
import { PageNotFoundComponent }      from "./not-found.component";
import { ExamplesComponent }          from './examples/examples.component';
import { DeviceApiComponent }         from './device-api/device-api.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/examples',
    pathMatch: 'full'
  },
  { path: 'examples', component: ExamplesComponent },
  { path: 'device-api', component: DeviceApiComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    DeviceApiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
