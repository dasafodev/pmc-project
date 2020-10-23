import { Component, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    typeformEmbed.makePopup('https://form.typeform.com/to/F1FjNA3D', {mode: 'popup', autoOpen: true})
 }

}
