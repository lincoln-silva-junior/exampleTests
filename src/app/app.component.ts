import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'exampleTests';
  mostrarMenu = false;
  inscricao: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.inscricao = this.authService.mostraMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
