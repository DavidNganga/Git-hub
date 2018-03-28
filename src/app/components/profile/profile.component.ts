import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../service/userprofile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];
repos:any[];
username:string;
  constructor(private userprofileService: UserProfileService) {

}
getProfile(){
  this.userprofileService.updateProfile(this.username);
  this.userprofileService.getProfileInfo().subscribe(profile => {
  console.log(profile);
  this.profile = profile;
  });
  this.userprofileService.getProfileRepos().subscribe(repos =>{
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit() {}
}
