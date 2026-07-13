export interface Dungeon {
    id: number;
    name: string;
    difficulty: string;//normal, heroic, mythic
    location: string;
    image: string;
    description: string;
    recommendedClasses: string[]; //lista de clases apropiadas para la dungeon
}
