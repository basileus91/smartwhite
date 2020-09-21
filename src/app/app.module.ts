import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { BlackHeaderComponent } from './black-header/black-header.component';
import { FaqComponent } from './faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { DeliveryTimeComponent } from './delivery-time/delivery-time.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';

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
    FooterComponent,
    BlackHeaderComponent,
    FaqComponent,
    TermsComponent,
    PolicyComponent,
    DeliveryTimeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgxImageZoomModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
