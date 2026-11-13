import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the landing page with working contact links', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.getAttribute('aria-label')).toBe('Gabriel Daiki Maruyama Romao');
    expect(compiled.querySelector('a[href="mailto:gabriel@romao.dev"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="https://github.com/yura2312?tab=repositories"]')).toBeTruthy();
  });

  it('should cycle all palettes and return to the first using the same button', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    const button = root.querySelector('button.palette-button') as HTMLButtonElement;
    expect(root.querySelectorAll('button.palette-button').length).toBe(1);
    for (const theme of ['eva02', 'eva00', 'eva01']) {
      button.click();
      await fixture.whenStable();
      expect(root.getAttribute('data-theme')).toBe(theme);
    }
  });
});
