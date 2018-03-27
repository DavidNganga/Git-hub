import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../service/userprofile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];

  constructor(private userprofileService: UserProfileService) {
this.userprofileService.getProfileInfo().subscribe(profile => {
console.log(profile);
this.profile = profile;
});
}
  ngOnInit() {}
}
