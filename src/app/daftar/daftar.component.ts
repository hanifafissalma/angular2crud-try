import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.css'],
  providers:[PostsService]
})
export class DaftarComponent implements OnInit {
	nama:string;
	email:string;
	password:string;
	nomor_hp:string;
	nomor_telepon:string;
	posts:Post[];

  constructor(private postsService: PostsService, private location: Location) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.postsService.getPosts()
      .subscribe(
        res => this.posts = res,
        error => console.log(error),
        () => console.log('Bersrhasil Mengambil Data')
      )
  }

  hapus(id){
    this.postsService.deletePosts(id)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => this.loadData()
      )
  }
}
