import { Component, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showQuiz(){
    typeformEmbed.makePopup('https://form.typeform.com/to/F1FjNA3D', {mode: 'popup', autoOpen: true})

  }

}
