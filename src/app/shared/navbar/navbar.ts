import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly paletteName = input('EVA-01');
  readonly nextPaletteName = input('EVA-02');
  readonly paletteChange = output<void>();
}
