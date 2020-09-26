import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

export interface Blog {
  title: string,
  type: string,
  date: string,
  imageURL: string,
  relatedArticles?: Blog[]
}
export const DATA: Blog[] =  [
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_1.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_2.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'News',
        date: 'October 14, 2019',
        imageURL: '../../assets/images/blog/blog_3.png'
      }
     ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_2.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'News',
        date: 'October 14, 2019',
        imageURL: '../../assets/images/blog/blog_3.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_4.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'News',
    date: 'October 14, 2019',
    imageURL: '../../assets/images/blog/blog_3.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_4.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_5.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_4.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_5.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_6.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_5.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_6.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_7.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_6.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_7.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_8.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_7.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_8.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_9.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_8.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_9.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'September 1, 2019',
        imageURL: '../../assets/images/blog/blog_10.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_9.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'September 1, 2019',
        imageURL: '../../assets/images/blog/blog_10.png'
      },
      {
        title: 'Non voluptate amet aute dolore non ullamco reprehenderit?',
        type: 'Breaking',
        date: 'August 23, 2019',
        imageURL: '../../assets/images/blog/blog_11.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'September 1, 2019',
    imageURL: '../../assets/images/blog/blog_10.png',
    relatedArticles: [
      {
        title: 'Non voluptate amet aute dolore non ullamco reprehenderit?',
        type: 'Breaking',
        date: 'August 23, 2019',
        imageURL: '../../assets/images/blog/blog_11.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_12.png'
      }
    ]
  },
  {
    title: 'Non voluptate amet aute dolore non ullamco reprehenderit?',
    type: 'Breaking',
    date: 'August 23, 2019',
    imageURL: '../../assets/images/blog/blog_11.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_12.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_8.png'
      }
    ]
  },
  {
    title: 'How to take care of your Smartwhite shirt?',
    type: 'Pro-Tip',
    date: 'December 29, 2019',
    imageURL: '../../assets/images/blog/blog_12.png',
    relatedArticles: [
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_6.png'
      },
      {
        title: 'How to take care of your Smartwhite shirt?',
        type: 'Pro-Tip',
        date: 'December 29, 2019',
        imageURL: '../../assets/images/blog/blog_7.png'
      }
    ]
  }
]

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogData: Blog[] = DATA;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.headerLocalizationService.blackHeader.next(false);
  }

  goToDetails(blog: Blog): void {
    this.router.navigate(['details'], {relativeTo: this.activatedRoute, state: {data: blog} });
  }

}
