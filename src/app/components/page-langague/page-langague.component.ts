import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageApi, detectedLanguage } from 'src/app/models/language-api';

@Component({
  selector: 'app-page-langague',
  templateUrl: './page-langague.component.html',
  styleUrls: ['./page-langague.component.css']
})
export class PageLangagueComponent implements OnInit {
  sentenceFromInput;
  possiblesLanguages: detectedLanguage[];

  constructor(private ls: LanguageService) { }
  ngOnInit(): void {
  }
  clickDetect() {
    console.log(this.sentenceFromInput);
    this.ls.getPossiblesLanguages(this.sentenceFromInput).subscribe((reponse: LanguageApi) => {
      this.possiblesLanguages = reponse.results;
    })
  }
}
