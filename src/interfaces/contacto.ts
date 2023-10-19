export class Contacto {
  constructor(
    public nombre: string,
    public sobrenombre: string,
    public edad: number) {

  }

  get esMayor() {
    return this.edad >= 18;
  }

  static getContactDescription(contacto: Contacto) {
    return `El ${contacto.sobrenombre} ${contacto.nombre}`;
  }

}
