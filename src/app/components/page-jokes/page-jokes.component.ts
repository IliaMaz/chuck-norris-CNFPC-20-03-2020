import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { ChuckApi } from 'src/app/models/chuck-api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-page-jokes',
  templateUrl: './page-jokes.component.html',
  styleUrls: ['./page-jokes.component.css']
})
export class PageJokesComponent implements OnInit {
  joke;
  categoriesArray: string[] = [];
  clickedCategory;
  constructor(private cs: ChuckService) { }

  //wake up
  ngOnInit(): void {
    this.cs.getJoke().subscribe((response: ChuckApi) => {
      this.joke = response.value;
    })

    this.cs.getCategories().subscribe((response: string[]) => {
      this.categoriesArray = response;
    })
  }
  handleClick() {
    this.cs.getJoke().subscribe((response: ChuckApi) => {
      this.joke = response.value;
    })
  }
  clickOnCategory(category) {
    this.clickedCategory = category;
    this.cs.getJokeFromCategory(this.clickedCategory).subscribe((response: ChuckApi) => {
      this.joke = response.value;
    })
  }
}
