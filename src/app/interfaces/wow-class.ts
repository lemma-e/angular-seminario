export interface WowClass {
    id: number; //identificador unico de la clase (track del for)
    name: string; //warrior, monk, paladin
    roles: string[];//Tank, healer o DPS (pueden cumplir +1 rol)
    armorType: string//Plate, mail, leather o cloth
    image: string;//ruta de la imagen
    description: string;//descripcion de la clase
}
