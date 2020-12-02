import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../providers/firestore/firestore.service';
import { AuthFirebaseService } from '../providers/auth/auth-firebase.service';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public surveys: Survey[] = [];

  public adminId: String;

  public dato: any[] = [];

  constructor(private store: FirestoreService, private auth: AuthFirebaseService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    fetch('https://pmcmachinelearning.herokuapp.com/grupos', {
      method: "GET",

      headers: {
        'Content-Type': 'application/json',

      }
    }).then(response => response.json())
      .then(data => {

        data.forEach(cluster => {
          this.dato.push.apply(this.dato, cluster.people.map(element => {
            return {
              email: element,
              group: cluster.cluster
            }
          }));
        });

        console.log(this.dato);
      });




    this.store.getSurveys().subscribe(surveysSnap => {
      this.surveys = [];
      surveysSnap.forEach(survey => {
        let temp = survey.payload.doc.data() as any;
        if (temp.adminId === this.adminId) {
          this.surveys.push({
            adminId: temp.adminId,
            userName: temp.userName,
            userEmail: temp.userEmail,
            group: temp.group,
            questions: temp.questions,
            age: temp.age,

          })
        }

      })
    })

    this.auth.currentUser.subscribe(user => {
      this.adminId = user.uid;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.surveys = this.surveys.filter(value => value.userName.includes(filterValue.trim().toLowerCase()))
  }

  async logout() {
    await this.auth.logout();
    this.router.navigateByUrl('/login');

  }


}
