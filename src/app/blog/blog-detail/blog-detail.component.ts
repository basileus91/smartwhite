import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderLocalizationService } from 'src/app/shared/hader-localization.service';
import { Blog } from '../blog.component';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.blog = window.history.state.data;
    this.headerLocalizationService.blackHeader.next(false);
  }

  goToBlog(blog: Blog): void {
    console.log('here');
    this.router.navigate(['blog/details'], {state: {data: blog} });
  }

}
