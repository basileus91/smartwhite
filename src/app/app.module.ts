import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './shared/auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AuthGuardService } from './shared/auth-guard.guard';
import { HeaderLocalizationService } from './shared/hader-localization.service';
import { LoginComponent } from './header/modals/login/login.component';
import { SizingChartComponent } from './shared/modals/sizing-chart/sizing-chart.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    OurStoryComponent,
    DeliveryComponent,
    BlogComponent,
    BlogDetailComponent,
    PreOrderComponent,
    MyProfileComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    TermsComponent,
    PolicyComponent,
    CheckoutComponent,
    LoginComponent,
    SizingChartComponent
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
    CommonModule,
    NgbModule,
    HttpClientModule,
    NgbCollapseModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [AuthenticationService, AuthGuardService, HeaderLocalizationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
