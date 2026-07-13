import { Component } from '@angular/core';
import { Dungeon } from '../../interfaces/dungeon';

@Component({
  selector: 'app-dungeon-list',
  standalone: false,
  templateUrl: './dungeon-list.html',
  styleUrl: './dungeon-list.scss',
})
export class DungeonList {
   dungeons: Dungeon[] = [
    {
      id: 1,
      name: 'The Stonevault',
      difficulty: 'Mythic+',
      location: 'The Ringing Deeps',
      image: 'img/dungeons/stonevault.png',
      description: 'Una fortaleza subterránea repleta de constructos y enemigos mecánicos',
      recommendedClasses: ['Paladin', 'Mage', 'Shaman']
    },
    {
      id: 2,
      name: 'Ara-Kara, City of Echoes',
      difficulty: 'Mythic+',
      location: 'Azj-Kahet',
      image: 'img/dungeons/ara-kara.png',
      description: 'Una ciudad nerubiana dominada por criaturas venenosas y numerosos grupos de enemigos',
      recommendedClasses: ['Druid', 'Hunter', 'Priest']
    },
    {
      id: 3,
      name: 'The Dawnbreaker',
      difficulty: 'Mythic+',
      location: 'Hallowfall',
      image: 'img/dungeons/dawnbreaker.png',
      description: 'Una mazmorra aérea en la que el grupo debe desplazarse entre diferentes zonas de combate',
      recommendedClasses: ['Warrior', 'Evoker', 'Warlock']
    }];
  }