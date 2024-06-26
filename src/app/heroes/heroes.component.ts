import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import { NgFor, NgIf } from '@angular/common';
import { HeroesDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HeroesDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
  
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}