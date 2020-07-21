import {Component} from '@angular/core';
import {PostService} from '../../service/post.service';
import {NgForm} from '@angular/forms';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent {

  selectedQuantity: Post = {};
  selectPost: Post = {};

  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
    });
  }



  selectedPost(): void {
    this.postService.getPostById(this.selectedQuantity.id).subscribe( value => this.selectPost = value);
  }
}
