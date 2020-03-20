import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { ChuckApi } from 'src/app/models/chuck-api';

@Component({
  selector: 'app-page-jokes',
  templateUrl: './page-jokes.component.html',
  styleUrls: ['./page-jokes.component.css']
})
export class PageJokesComponent implements OnInit {
  joke;
  constructor(private cs: ChuckService) { }

  //wake up
  ngOnInit(): void {
    this.cs.getJoke().subscribe((response: ChuckApi) => {
      this.joke = response.value;
    })
  }

}
