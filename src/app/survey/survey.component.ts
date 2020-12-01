import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";


import * as Survey from "survey-angular";



import "survey-angular/modern.css";

Survey.StylesManager.applyTheme("bootstrap");

@Component({
  // tslint:disable-next-line:component-selector
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer">
    <div id="surveyElement"></div>
  </div>`,
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;

  ngOnInit() {
    var json = {
      "title": "Quiz de perfilamiento",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question8",
              "title": "Dirección de correo electrónico"
            },
            {
              "type": "text",
              "name": "question10",
              "title": "Nombre"
            },
            {
              "type": "text",
              "name": "question11",
              "title": "Edad"
            },
            {
              "type": "radiogroup",
              "name": "question12",
              "title": "Sexo",
              "choices": [
                {
                  "value": "item1",
                  "text": "Femenino"
                },
                {
                  "value": "item2",
                  "text": "Masculino"
                },
                {
                  "value": "item3",
                  "text": "Otro"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "question13",
              "title": "Número de compañeros",
              "choices": [
                {
                  "value": "item1",
                  "text": "0"
                },
                {
                  "value": "item2",
                  "text": "1"
                },
                {
                  "value": "item3",
                  "text": "2"
                },
                {
                  "value": "item4",
                  "text": "3"
                }
              ]
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "title": "¿Qué tanto te gusta hablar?"
            },
            {
              "type": "rating",
              "name": "question3",
              "title": "¿Qué tan fácil le es estresarse?"
            },
            {
              "type": "rating",
              "name": "question2",
              "title": "¿Qué tanto le importan los demás?"
            },
            {
              "type": "rating",
              "name": "question6",
              "title": "¿Deja sus cosas en cualquier lugar?"
            },
            {
              "type": "rating",
              "name": "question5",
              "title": "¿Qué tan fácil le es sentirse cómodo?"
            }
          ],
          "title": "Personal y cualidades"
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "rating",
              "name": "question4",
              "title": "¿Usa groserías o malas palabras al hablar?"
            },
            {
              "type": "rating",
              "name": "question15",
              "title": "¿Qué tan empático es?"
            },
            {
              "type": "rating",
              "name": "question14",
              "title": "¿Qué tanto le gusta socializar?"
            },
            {
              "type": "rating",
              "name": "question9",
              "title": "¿Qué tanto le gusta iniciar conversaciones?"
            },
            {
              "type": "rating",
              "name": "question7",
              "title": "¿Qué tanto le gusta el orden y la limpieza?"
            }
          ],
          "title": "Personalidad y cualidades"
        },
        {
          "name": "page4",
          "elements": [
            {
              "type": "rating",
              "name": "question16",
              "title": "¿Qué tanto le gusta divertirse?"
            },
            {
              "type": "rating",
              "name": "question20",
              "title": "¿Qué tanto le gusta estudiar con otros?"
            },
            {
              "type": "rating",
              "name": "question18",
              "title": "¿Qué tanto le gustan los videojuegos?"
            },
            {
              "type": "rating",
              "name": "question19",
              "title": "¿Qué tanto le gustan los deportes?"
            },
            {
              "type": "rating",
              "name": "question17",
              "title": "¿Qué tanto le gustan los libros?"
            }
          ],
          "title": "Gustos y preferencias"
        },
        {
          "name": "page5",
          "elements": [
            {
              "type": "rating",
              "name": "question22",
              "title": "¿Qué tanto le gusta el anime/manga?"
            },
            {
              "type": "rating",
              "name": "question25",
              "title": "¿Qué tanto le gusta ver partidos de fútbol?"
            },
            {
              "type": "rating",
              "name": "question24",
              "title": "¿Qué tanto le gusta el maquillaje?"
            },
            {
              "type": "rating",
              "name": "question23",
              "title": "¿Qué tanto le gusta la música?"
            },
            {
              "type": "rating",
              "name": "question21",
              "title": "¿Qué tan tarde le gusta acostarse?"
            }
          ],
          "title": "Gustos y preferencias"
        },
        {
          "name": "page6",
          "elements": [
            {
              "type": "text",
              "name": "question26",
              "title": "Descríbase a si mismo"
            },
            {
              "type": "checkbox",
              "name": "question27",
              "title": "¿Cuál es su objetivo?",
              "choices": [
                {
                  "value": "item1",
                  "text": "Conocer gente similar"
                },
                {
                  "value": "item2",
                  "text": "Estar cómodo"
                },
                {
                  "value": "item3",
                  "text": "Estudiar tranquilo"
                },
                {
                  "value": "item4",
                  "text": "Conocer gente diferente"
                },
                {
                  "value": "item5",
                  "text": "Divertirme"
                }
              ]
            }
          ],
          "title": "Final"
        },
        {
          "name": "page7",
          "elements": [
            {
              "type": "text",
              "name": "question28",
              "title": "¿Qué información adicional consideraría relevante preguntar?"
            },
            {
              "type": "text",
              "name": "question29",
              "title": "¿Qué preguntas quitaría ?"
            },
            {
              "type": "radiogroup",
              "name": "question30",
              "title": "¿Cree que esto le ayudará a conseguir buenos compañeros?",
              "choices": [
                {
                  "value": "item1",
                  "text": "Sí"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Otro"
                }
              ]
            }
          ],
          "title": "Opiniones y sugerencias"
        }
      ]
    };



    var model = new Survey.ReactSurveyModel(json);
    Survey.SurveyNG.render('surveyElement', { model: model });
  }

}
