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
  projectUUID: string = '29fa8892-241b-49a9-be59-b4af497257d0'
  newPost: Post = {} as Post //não é possivel inicializar uma interface com new
  //logo foi inicializada com objeto vazio do tipo Post 
  constructor(private postService: PostService) { }

  ngOnInit() {
   this.loadData()
  }

  savePost(myForm) {
    this.postService.save(this.newPost, this.projectUUID).subscribe(
      () => { //() = metodo sem parametro. 
        myForm.reset()
        this.newPost = {} as Post
        this.loadData()
      }
    )
  }

  loadData() {
    this.newPost.project_uuid = this.projectUUID

    //this.posts = this.postService.getPostByProjectId(this.projectUUID)
    this.postService.getPostByProjectId(this.projectUUID).subscribe(
      data => this.posts = data
    )
  }

  deletePost(postId: number) {
    this.postService.delete(this.projectUUID, postId).subscribe(
      () => this.loadData()
    )
  }

}
