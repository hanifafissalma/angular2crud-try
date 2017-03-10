import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
	constructor(private http: Http) { 
  		console.log("inisialisasi...");
  	}
  		getPosts(){
  			return this.http.get('http://192.168.16.100/service-untuk-hani/?api=all').map(res => res.json());
  		}

  		deletePosts(id){
  			return this.http.delete('http://192.168.16.100/service-untuk-hani/?api=delete&id='+id).map(res => res.json());
  		}

  		savePost(value){
  			var json=JSON.stringify(value);
  			return this.http.post('http://192.168.16.100/service-untuk-hani/?api=save',json,{}).map(res => res.json());
  		}

  		getId(id){
  			return this.http.get('http://192.168.16.100/service-untuk-hani/?api=id&id='+id).map(res => res.json());
  		}
}
