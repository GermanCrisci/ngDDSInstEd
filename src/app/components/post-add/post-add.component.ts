import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  post: Post = {
    title: '',
    status: 'draft',
    content: ''
  };
  submitted = false;
  constructor(private postService: PostService) { }
  ngOnInit(): void {
  }
  savePost(): void {
	const data = {
		title: this.post.title,
		status: this.post.status,
		content: this.post.content
	};
    this.postService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) =>
        {
        	console.error(e);
		} 
      });
  }
  newPost(): void {
    this.submitted = false;
    this.post = {
	    title: '',
    	status: 'draft',
    	content: ''
    };
  }
}