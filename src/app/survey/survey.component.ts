import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

import { Survey } from "src/app/models/survey"
import * as Survey1 from "survey-angular";



import "survey-angular/modern.css";

import { FirestoreService } from '../providers/firestore/firestore.service';

Survey1.StylesManager.applyTheme("bootstrap");

@Component({
  // tslint:disable-next-line:component-selector
  selector: "survey",
  template: `
  <div class="container">
  <div class="survey-container contentcontainer codecontainer">
  <div id="surveyElement"></div>
  </div>
  </div>

  `,
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  result: any;

  constructor(private store: FirestoreService) { }

  ngOnInit() {
    var json = {
      "title": "Quiz de perfilamiento",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "codigo",
              "title": "Código del administrador"
            },
            {
              "type": "text",
              "name": "correo",
              "title": "Dirección de correo electrónico"
            },
            {
              "type": "text",
              "name": "nombre",
              "title": "Nombre"
            },
            {
              "type": "text",
              "name": "edad",
              "title": "Edad"
            },
            {
              "type": "radiogroup",
              "name": "question1",
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
              "name": "question2",
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
              "name": "question3",
              "title": "¿Qué tanto te gusta hablar?"
            },
            {
              "type": "rating",
              "name": "question4",
              "title": "¿Qué tan fácil le es estresarse?"
            },
            {
              "type": "rating",
              "name": "question5",
              "title": "¿Qué tanto le importan los demás?"
            },
            {
              "type": "rating",
              "name": "question6",
              "title": "¿Deja sus cosas en cualquier lugar?"
            },
            {
              "type": "rating",
              "name": "question7",
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
              "name": "question8",
              "title": "¿Usa groserías o malas palabras al hablar?"
            },
            {
              "type": "rating",
              "name": "question9",
              "title": "¿Qué tan empático es?"
            },
            {
              "type": "rating",
              "name": "question10",
              "title": "¿Qué tanto le gusta socializar?"
            },
            {
              "type": "rating",
              "name": "question11",
              "title": "¿Qué tanto le gusta iniciar conversaciones?"
            },
            {
              "type": "rating",
              "name": "question12",
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
              "name": "question13",
              "title": "¿Qué tanto le gusta divertirse?"
            },
            {
              "type": "rating",
              "name": "question14",
              "title": "¿Qué tanto le gusta estudiar con otros?"
            },
            {
              "type": "rating",
              "name": "question15",
              "title": "¿Qué tanto le gustan los videojuegos?"
            },
            {
              "type": "rating",
              "name": "question16",
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
              "name": "question18",
              "title": "¿Qué tanto le gusta el anime/manga?"
            },
            {
              "type": "rating",
              "name": "question19",
              "title": "¿Qué tanto le gusta ver partidos de fútbol?"
            },
            {
              "type": "rating",
              "name": "question20",
              "title": "¿Qué tanto le gusta el maquillaje?"
            },
            {
              "type": "rating",
              "name": "question21",
              "title": "¿Qué tanto le gusta la música?"
            },
            {
              "type": "rating",
              "name": "question22",
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
              "name": "question23",
              "title": "Descríbase a si mismo"
            },
            {
              "type": "checkbox",
              "name": "question24",
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
              "name": "question25",
              "title": "¿Qué información adicional consideraría relevante preguntar?"
            },
            {
              "type": "text",
              "name": "question26",
              "title": "¿Qué preguntas quitaría ?"
            },
            {
              "type": "radiogroup",
              "name": "question27",
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
    var model = new Survey1.ReactSurveyModel(json);
    model.onComplete.add(this.saveSurvey);
    Survey1.SurveyNG.render('surveyElement', { model: model });
    this.saveSurvey(Survey1);

  }

  sendDataToServer(survey, completed) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));

    console.log(JSON.stringify(survey.data));
  }



  saveSurvey = (survey) => {

    let obj = JSON.parse(JSON.stringify(survey.data));

    const values = Object.values(obj);
    console.log(values);
    var list = Array<number>()
    let i = 0;
    for (const value of values) {
      let isnum = /^\d+$/.test(String(value));

      if (isnum) {
        list.push(parseInt(String(value)));
      }

      console.log(i);
      i = i + 1;

    };
    list.splice(0, 1);
    console.log(list);

    this.store.createSurvey({
      adminId: obj.codigo,
      userName: obj.nombre,
      userEmail: obj.correo,
      group: -1,
      age: parseInt(obj.edad),
      questions: list,
    });

    console.log("pruebaaaaa");

  };

}
