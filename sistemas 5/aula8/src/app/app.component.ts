import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts: Post[] = []
  projectUUID: string = ''

  constructor (private postService: PostService) {}

  ngOnInit() {
    this.postService.getPostByProjectUUID(this.projectUUID).subscribe(
      data => this.posts = data
    )
  }

}
