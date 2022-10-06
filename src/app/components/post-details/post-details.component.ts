import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentPost: Post = {
    title: '',
    status: 'draft',
    content: ''
  };
  
  message = '';
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPost(this.route.snapshot.params["id"]);
    }
  }
  getPost(id: string): void {
    this.postService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPost = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
//  updatePublished(status: boolean): void {
//    const data = {
//      title: this.currentPost.title,
//      description: this.currentPost.status,
//      published: status
//    };
//    this.message = '';
//    this.postService.update(this.currentPost.id, data)
//      .subscribe({
//        next: (res) => {
//          console.log(res);
//          this.currentPost.published = status;
//          this.message = res.message ? res.message : 'The status was updated successfully!';
//        },
//        error: (e) => console.error(e)
//      });
//  }
  updatePost(): void {
    this.message = '';
    this.postService.update(this.currentPost.id, this.currentPost)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Post actualizado!';
        },
        error: (e) => console.error(e)
      });
  }
  deletePost(): void {
    this.postService.delete(this.currentPost.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/posts']);
        },
        error: (e) => console.error(e)
      });
  }
}