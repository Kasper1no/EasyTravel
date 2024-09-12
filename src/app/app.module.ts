import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TourComponent } from './tour/tour.component';
import { TourCardComponent } from './tour-card/tour-card.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ModalOrderComponent } from './modal-order/modal-order.component';
import { AuthorComponent } from './author/author.component';

const appRoutes: Routes = [
  {path: '', component: TourComponent},
  {path: 'tour', component: TourComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchBarComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog/:id', component: BlogComponent},
  {path: 'tour-info/:id', component: TourInfoComponent},
  {path: 'author', component: AuthorComponent},
  {path: '**', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    TourComponent,
    TourCardComponent,
    TourInfoComponent,
    SearchBarComponent,
    BlogComponent,
    BlogsComponent,
    BlogCardComponent,
    ModalOrderComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
