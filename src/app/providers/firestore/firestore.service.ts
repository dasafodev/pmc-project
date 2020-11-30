import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  public createSurvey(data: {nombre: string, url: string}) {
    return this.firestore.collection('surveys').add(data);
  }
  public getSurvey(documentId: string) {
    return this.firestore.collection('surveys').doc(documentId).snapshotChanges();
  }
  public getSurveys() {
    return this.firestore.collection('surveys').snapshotChanges();
  }
  public updateSurvey(documentId: string, data: any) {
    return this.firestore.collection('surveys').doc(documentId).set(data);
  }
}
