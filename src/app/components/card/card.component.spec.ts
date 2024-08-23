import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Component } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character name and quote', () => {
    
    const testInformation = {
      character: 'Test Character',
      quote: 'Test Quote',
    };

    component.information = testInformation;
    fixture.detectChanges(); 
    
    const compiled = fixture.nativeElement as HTMLElement;
    const characterElement = compiled.querySelector('h2');
    const quoteElement = compiled.querySelector('p');

    expect(characterElement?.textContent).toContain('Test Character');
    expect(quoteElement?.textContent).toContain('Test Quote');
  });

  it('should display image when information has image URL', () => {
    const testInformation = {
      image: 'test-image-url.jpg',
    };

    component.information = testInformation;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img');

    expect(imgElement).toBeTruthy();
    expect(imgElement?.getAttribute('src')).toBe('test-image-url.jpg');
  });

  it('should not display image element when information has no image URL', () => {
    const testInformation = {
      character: 'Test Character',
      quote: 'Test Quote',
    };

    component.information = testInformation;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img');

    expect(imgElement).toBeNull(); 
  });
});
