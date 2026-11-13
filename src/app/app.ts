import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[attr.data-theme]': 'palette().id' },
})
export class App {
  private readonly palettes = [
    { id: 'eva01', name: 'EVA-01' },
    { id: 'eva02', name: 'EVA-02' },
    { id: 'eva00', name: 'EVA-00' },
  ];
  private readonly paletteIndex = signal(0);
  protected readonly palette = computed(() => this.palettes[this.paletteIndex()]);
  protected readonly nextPalette = computed(() => this.palettes[(this.paletteIndex() + 1) % this.palettes.length].name);

  protected cyclePalette(): void {
    this.paletteIndex.update(index => (index + 1) % this.palettes.length);
  }
}
