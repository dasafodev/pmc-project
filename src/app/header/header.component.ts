import { Component, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showQuiz(){
    typeformEmbed.makePopup('https://form.typeform.com/to/F1FjNA3D', {mode: 'popup', autoOpen: true})

  }
}
