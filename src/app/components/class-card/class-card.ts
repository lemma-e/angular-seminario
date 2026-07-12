import { Component, Input } from '@angular/core';
import { WowClass } from '../../interfaces/wow-class';

@Component({
  selector: 'app-class-card',
  standalone: false,
  templateUrl: './class-card.html',
  styleUrl: './class-card.scss',
})
export class ClassCard {
  @Input() wowClass!: WowClass; // el ! le asigna el valor despues de crear el componente ¿¿¿¿ ts no anda sino
}
