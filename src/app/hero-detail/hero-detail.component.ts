import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
  
export class HeroesDetailComponent {
  heroes = HEROES;
  @Input() hero?: Hero;

  onSelect(hero: Hero): void {
    this.hero = hero;
  }
}