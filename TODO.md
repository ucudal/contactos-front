- Multiple plataforma
- Es un framework o marco de trabajo estandarizado.
- Viene con "casi" todo lo necesario.
- Basado en módulos, componentes y otros.
- Mantenido por Google.
- Modulos, Directivas, Servicios, Componentes, Rutasa

Componente: Clase Typescript que encapsulta html, js y css.

Servicio: Singletons para centralizar información y/o comportamiento. Sirve para el estado. Se utilizan con inyección de dependencias.

Directivas: De componentes (crean componentes html), estructurales (modifican el dom o html) y de atributos (cambian la apariencia o comportamiento de componentes o directivas).

Rutas. Mostrar componentes basados en la url del navegador web.

Modulos. Permites agrupar todos los otros, inclusive otros módulos.

Verificar la versión de angular-cli

Opciones para iniciar un proyecto de Angular
npm init @angular nombreapp
ng new nombreapp
¿vite?

Como servir la aplicación: ng serve

https://angular.io/guide/file-structure
Archivos:
.editorconfig: Configuraciones para vscode
.gitignore: El de git.
angular.json: Configuracion de angular.
package-lock.json: No se toca manualmente
package.json: archivo de node.
README: No olvidar corregirlo. Documentación rápida de su aplicación.
tsconfig.\* : Archivos de configuración de typescript. Spec refiere a testing.
Directorios
.angular : Caché de angular para detectar cambios, etc. No tocar.
.vscode
.node_modules
dist: carpeta generada al hacer ng build
src : Esta es la que importa.
src/favicon.ico
src/index.html
src/main.ts main para iniciar la aplicación
src/styles.css: Estilos globales
src/app : Carpeta del modulo principal
app.component.css: Css exclusivo para app component
app.component.html: Html del coomponent app
app.components.spec.ts: Archivo de pruebas

Revisar app component
Como acceder a las propiedades de la clase desde el html. {{ }}. Usar title para la demo.
Mostrar devtools de angular.
Crear un atributo contador
Crear un botón para sumarle uno al counter.
Mostrar (evento) disponible. Usar click. ¿Usar this?
Hacer otro botón que reste. Que lo hagan ellos.
Usar un mismo método para ambos botones.
Crear un nuevo botón reset. Que lo hagan ellos.

Crear manualmente una carpeta/componente counter:

- Crear la carpeta
- Crear el ts.
- Crear/exportar la clase.
- Anotar con @Component (al menos con selector y template) ¿mostrar posibilidad de usar template directamente.?
- Agregar CounterComponent en declarations de app.module.ts

- Mover el código del app.component.html a la propiedad template.
- Mover las funciones y atributos necesarios de app.components.cs a counter.cs
- Una vez que funcione, mover el html a un archivo aparte.

Ver estructura de directorios recomendada en base a ejemplo Contactos

- Crear carpeta contactos, dentro list y contacto.
- Crear componentes contacto-form y contacto-list usando angular cli ng generate component contacto/contacto y contacto/list
- Agregar contacto y list al html de app y ver que funciona.
- Hardcodear una lista de contactos
- Si no hay contactos en la lista, se debe mostrar un mensaje no hay contactos \*ngIf
- Si hay contactos en la lista, se debe mostrar un mensaje "Hay que implementar esto". *ngIf y *ngIf-else con ng-template
- Mostrar la lista de contactos en el contacto-list \*ng-for="let value of lista"
- Agregar bootstrap en index.html
- Darle un poquito de css a los nuevos componentes para que se vea un cacho mejor.
- Crear un getter get contactDescription
- Cambiar el getter anterior por un metodo normal.
- Mostrar la diferencia entre ambos.
- Que el getter anterior devuelva el string capitalizado.
- Mostrar uso de los pipe
- Si el contacto es menor de edad, el color de fondo debe ser rojo, si es mayor de edad debe ser verde.
  ---Opción [class]=""
  --- Opción con
  [ngclass]="{
  'clase':condicion,
  'otraclase':otracondicion
  }"
- Borrar componente contacto
- Crear componentes contacto-form y contacto-view
- que contacto-list incluya contacto-view. Mostrar uso de Input

MODULOS:

- Crear contador module
- Agregar contador module al app module. @NgModule()
- Poner las declarations y exports en el contador module.
- Hacer el imports en el app module.
- Crear un contacto module.
- Agregar contacto module en el app module.
  ---- ACA NOS QUEDAMOS
- Que la lista de contactos ocupe la mitad de la pantalla y el form la otra mitad.
- Agregar un pageComponent en el modulo contacto. contacto module solo exporta page component. Page component muestra las dos columnas con la lista y el form.
- Que todo quede andando. contacto-list recibe la lista desde page

- expandir el ngfor, https://angular.io/api/common/NgFor#description
  let i=index; o index as i;
  first,last, even, odd
- Hacer que los contactos intercalen estilo.

Contacto FORM

- Crear el formulario.
- Inicializar el formulario con un contacto vacío.
- Debajo del form mostrar una representación json del contacto vacío. pipe json.
- ver que funciona el one way data binding, pero no funciona si modifico el formulario.
- Importar FormsModule en contacto module
- Configurar 2way databinding ([ngModel])
- Crear un método emitContact e invocarlo en el evento click del boton. Dicho evento logea el contacto creado
- Cambiar el evento click del botón por ngSubmit
- Limpiar el contacto al hacer submit.

- Crear un EventEmmiter (onNewContacto especificando el tipo) para emitir el nuevo contacto.
- Anotar el emitter @Output()
- en emitContact hacemos emiter.emit.
- ver con console .log

- Agregar un método en page component para que reciba el contaco:
- agregar la logica necesaria en page component para escuchar dicho evento y llamar al método creado anteriormente.
- comprobar con console .log
- $event para referenciar el contacto.
- Agregar el contacto recibido a la lista de contactos.

Cambiar los datos a un servicio.

- Crear contacto.service.ts
- Mover la lista de contactos a contactoService
- Anotar con :
  @Injectable(
  {providedIn: 'root'} //singleton disponible en toda la aplicación.
  )
- cambiar toda la lógica cambiable al servicio.
- inyectar el servicio como privado.
- hacer que todo funcione con el servicio.

- agregar un botón X para cada contacto en la lista.
- al hacer click en el botón X de un contacto, la lista emite el índice del elemento
- Page component captura el evento emitido por la lista y elimina el contacto de la lista.

- Hacer que todo ande de nuevo.
- Agregar un id para borrar por id.
- Agregar un id al contacto.
- Editar el código para borrar el contacto por su id.

PETICION HTTP:

- usar fetch para imprimir en consola la lista de contactos
- Inyectar HttpClient en en servicio.
- usar httpClient.get para traerse la lista de contactos.

- Videoclip 10min- Como completar Tour of heroes.
- Cheet sheet.
