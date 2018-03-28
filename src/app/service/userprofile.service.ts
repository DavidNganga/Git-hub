import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class UserProfileService {
private username:string;

  constructor(private http:Http) {
console.log("jj");
this.username="DavidNganga";
}           ;
getProfileInfo(){
  return this.http.get("https://api.github.com/users/"+this.username+"?access_token="+environment.access_token)
  .map(res=>res.json());
};

getProfileRepos(){
  return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token="+environment.access_token)
  .map(res=>res.json());
}
updateProfile(username:string){
  this.username = username;
}

};
