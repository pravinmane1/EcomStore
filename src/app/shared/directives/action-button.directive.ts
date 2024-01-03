import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appEsActionButton]',
})
export class ActionButtonDirective implements OnChanges {
  @Input('appEsActionButton') buttonType: 'positive' | 'negative' | '' = '';

  constructor(private elementRef: ElementRef) {}

  public ngOnChanges(): void {
    this.applyStyles();
  }

  private applyStyles(): void {
    const domElement = this.elementRef.nativeElement;
    let styles: { [key: string]: string } = {
      cursor: 'pointer',
      margin: '10px',
      padding: '10px',
      'white-space': 'nowrap',
      height: 'fit-content',
      'border-radius': '10px',
      border: '0px',
    };
    switch (this.buttonType) {
      case '':
      case 'positive':
        (styles['background-color'] = '#ff9f00'), (styles.color = '#ffffff');
        break;
      case 'negative':
        (styles['background-color'] = '#cacacaab'), (styles.color = '#000000');
        break;
    }

    Object.keys(styles).forEach((element) => {
      domElement.style.setProperty(`${element}`, styles[element]);
    });
  }
}
