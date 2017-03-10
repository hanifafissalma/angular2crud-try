import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../posts.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[PostsService]
})
export class EditComponent implements OnInit {

	data={};

	constructor(
	  	public fb : FormBuilder,
	  	private postsService : PostsService,
	  	private activatedRoute : ActivatedRoute,
	  	private location: Location
	) { }

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

	ngOnInit(){
	  	this.activatedRoute.params
	  		.switchMap((params:Params)=>this.postsService.getId(+params['id']))
	  		.subscribe(
	  			res=> this.data = res);
	}

}
