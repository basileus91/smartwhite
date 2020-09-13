import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCreateComponent } from './blog/blog-create/blog-create.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { SizeSelectionComponent } from './pre-order/size-selection/size-selection.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    OurStoryComponent,
    DeliveryComponent,
    BlogComponent,
    BlogCreateComponent,
    BlogDetailComponent,
    PreOrderComponent,
    SizeSelectionComponent,
    SignInComponent,
    MyProfileComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
