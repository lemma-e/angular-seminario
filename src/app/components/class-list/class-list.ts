import { Component, inject, OnInit, signal } from '@angular/core';

import { WowClass } from '../../interfaces/wow-class';
import { WowClassData } from '../../services/wow-class-data';

@Component({
  selector: 'app-class-list',
  standalone: false,
  templateUrl: './class-list.html',
  styleUrl: './class-list.scss',
})
export class ClassList implements OnInit {
  //guarda las clases obtenidas y notifica los cambios
    wowClasses = signal<WowClass[]>([]);

    //servicio
    private wowClassData = inject(WowClassData);

    //suscribe al GET y actualiza signal con la respuesta
  ngOnInit(): void {
      this.wowClassData.getClasses().subscribe(classes => this.wowClasses.set(classes));
    }
}