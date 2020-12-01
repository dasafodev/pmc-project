import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../providers/firestore/firestore.service';
import { AuthFirebaseService } from '../providers/auth/auth-firebase.service';

import { Survey } from '../models/survey';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public surveys:Survey[] = [];

  public adminId:String;


    constructor(private store:FirestoreService, private auth:AuthFirebaseService,private router: Router) { }

  ngOnInit(): void {
    this.store.getSurveys().subscribe(surveysSnap=> {
      this.surveys = [];
      surveysSnap.forEach(survey=> {
        let temp = survey.payload.doc.data() as any;
        if(temp.adminId ===this.adminId){
          this.surveys.push({
            adminId:temp.adminId,
            userName: temp.userName,
            userEmail:temp.userEmail,
            group:temp.group,
            questions:temp.questions,
            age:temp.age,

          })
        }

      })
    })

    this.auth.currentUser.subscribe(user=> {
      this.adminId = user.uid;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.surveys= this.surveys.filter(value => value.userName.includes(filterValue.trim().toLowerCase()))
  }

  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/login');

  }


}
