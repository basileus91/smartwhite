import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'products',
        component: ProductPageComponent
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
        children: [
          {
            path: 'create',
            component: BlogCreateComponent
          },
          {
            path: 'details/:id',
            component: BlogDetailComponent
          }
        ]
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
    ])
  ]
})
export class AppRoutingModule { }
