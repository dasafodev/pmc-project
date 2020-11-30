import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FirestoreService } from '../providers/firestore/firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public surveys = [];

  constructor(private store:FirestoreService) { }

  ngOnInit(): void {
    this.store.getSurveys().subscribe(surveysSnap=> {
      this.surveys = [];
      surveysSnap.forEach(survey=> {
        console.log(survey.payload.doc.data());
        this.surveys.push(survey.payload.doc.data())
      })
    })
  }



}
