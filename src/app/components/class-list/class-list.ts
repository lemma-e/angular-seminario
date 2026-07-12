import { Component } from '@angular/core';
import { WowClass } from '../../interfaces/wow-class';

@Component({
  selector: 'app-class-list',
  standalone: false,
  templateUrl: './class-list.html',
  styleUrl: './class-list.scss',
})
export class ClassList {
  //despues conectar una mockapi
  //fake datos!!
  wowClasses: WowClass[] = 
  [{
        id: 1,
        name: 'Warrior',
        roles: ['Tank', 'DPS'],
        armorType: 'Plate',
        image: 'img/classes/warrior.png',
        description: 'Clase clásica de combate cuerpo a cuerpo y armadura de placas. Destaca por usar Ira (generada al golpear o recibir daño) en lugar de maná, destacando por su enorme versatilidad'
      },
      {
        id: 2,
        name: 'Mage',
        roles: ['DPS'],
        armorType: 'Cloth',
        image: 'img/classes/mage.png',
        description: 'clase arquetípica de daño a distancia con magia elemental. Viste armadura de tela, utiliza Maná como recurso principal y destaca por su enorme utilidad, control de masas y alta movilidad a través de teletransportes.'
      },
      {
        id: 3,
        name: 'Priest',
        roles: ['Healer', 'DPS'],
        armorType: 'Cloth',
        image: 'img/classes/priest.png',
        description: 'clase mística por excelencia, profundamente ligada a la dualidad entre la Luz Sagrada y las Sombras. Viste armadura de tela y es conocido por ser uno de los sanadores más versátiles y completos del juego, además de poseer una potente rama de daño.'
    }];


}
