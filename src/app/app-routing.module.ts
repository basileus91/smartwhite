import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { DeliveryTimeComponent } from './delivery-time/delivery-time.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: 'delivery-time',
    component: DeliveryTimeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'return-policy',
    component: PolicyComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/details',
    component: BlogDetailComponent
  },
  {
    path: 'pre-order',
    component: PreOrderComponent,
    children: [
      {
        path: 'size-selection',
        component: SizeSelectionComponent
      }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'my-profile/:name',
    component: MyProfileComponent
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'error.title'
    }
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'error.title',
      error403: true
    }
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'error.title',
      error404: true
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
