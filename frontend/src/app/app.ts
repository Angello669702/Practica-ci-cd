import { Component, OnInit, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  mensaje = signal<string>('');
  suma = signal<number>(0);
  version = signal<string>('');

  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<{ mensaje: string; suma: number; version: string }>('http://192.168.1.44:8000/api/saludo').subscribe(data => {
      this.mensaje.set(data.mensaje);
      this.suma.set(data.suma);
      this.version.set(data.version);
    });
  }
}
