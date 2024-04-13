import { ElementRef } from '@angular/core';
import { BorderShadowDirective } from './border-shadow.directive';

describe('BorderShadowDirective', () => {
  it('should create an instance', () => {
    const elementRefMock: ElementRef = {} as ElementRef; // Mock ElementRef
    const directive = new BorderShadowDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
