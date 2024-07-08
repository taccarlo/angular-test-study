import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


/* TestBed is the main angular utility package */
/* The describe container contains different blocks (it, beforeEach, xit..) */
/* the previous block of app.component.spec.ts is app.module.ts */


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // componentInstance creates an instance of the class 
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-study' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-study');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    /* After creating the component, an instance of the created component is called */
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-study');
  });
});
