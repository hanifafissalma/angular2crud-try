import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css'],
  providers:[PostsService]
})
export class TambahComponent {

  constructor(public fb : FormBuilder, private postsService : PostsService, private location: Location) {
  }

  formSave = this.fb.group({
    id : '',
    nama :['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    telepon:['',Validators.required],
    hp:['',Validators.required]
  });
   
  save(form){
    this.postsService.savePost(form.value)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => window.location.replace('./daftar')
    );
  }
}
