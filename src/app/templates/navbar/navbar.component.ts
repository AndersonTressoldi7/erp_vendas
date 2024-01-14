import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1
      })),
      state('out', style({
        height: '0',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})

export class NavbarComponent implements OnInit {
  public menuAberto: boolean = false;
  public telaPequena: boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.atualizarTamanhoDaTela();
  }

  abrirMenu() {
    this.menuAberto = !this.menuAberto;
    this.atualizarMenuAberto();
  }


  atualizarMenuAberto() {

      if (!this.telaPequena || this.menuAberto) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        this.renderer.addClass(document.body, 'slide-out');
    } else {
        this.renderer.setStyle(document.body, 'overflow', 'auto');
        this.renderer.removeClass(document.body, 'slide-out');
    }
    
}

  atualizarTamanhoDaTela() {
    this.telaPequena = window.innerWidth <= 700;
    this.atualizarMenuAberto();
  }

  ngOnInit() {
     this.menuAberto = false;
     this.atualizarTamanhoDaTela();
  }
}
