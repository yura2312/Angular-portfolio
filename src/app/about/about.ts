import { Component } from '@angular/core';
import { NameComposition } from '../name-composition/name-composition';

@Component({
  selector: 'app-about',
  imports: [NameComposition],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
