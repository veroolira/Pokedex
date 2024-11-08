
# Pokédex JavaScript

Un Pokédex simple y funcional creado con JavaScript puro. Permite buscar Pokémon por nombre y ver detalles como tipo, habilidades y más.

## Capturas de pantalla

* **Pantalla de inicio:**
![Pantalla de inicio](/Imágenes/PantallaInicio.jpg)

* **Buscador:**
![Resultados de búsqueda](/Imágenes/Buscador.jpg)

* **Tarjeta Descriptiva:**
![Detalles de tarjeta](/Imágenes/TarjetaDescriptiva.jpg)

## Descripción general

Esta aplicación web te permite explorar el mundo de los Pokémon. Busca a tu criatura favorita por nombre y descubre sus características únicas.

## Funcionalidades

* **Búsqueda:** Encuentra Pokémon por nombre de forma rápida y sencilla.
* **Detalles:** Visualiza información detallada de cada Pokémon, incluyendo:
    * Nombre
    * ID
    * Tipo
    * Habilidades
    * Imagen
* **Modal interactivo:** Observa información adicional como peso y altura (si está disponible en el JSON).

## Ejecución del proyecto
* Guarda el código JavaScript en un archivo llamado script.js.
* Crea un archivo HTML básico con las estructuras necesarias para mostrar la Pokédex y el modal (opcional).
* Incluye el archivo script.js en tu HTML utilizando la etiqueta <script>.
* Opcionalmente, incluye la librería jQuery en tu HTML para habilitar el modal.

## Tecnologías utilizadas

* **HTML:** Estructura de la página web.
* **CSS:** Estilos y diseño de la interfaz.
* **JavaScript:** Lógica de la aplicación, manejo de datos y eventos.
* **API:** Para obtener datos del archivo JSON.
* **jQuery:** Opcional, para implementar el modal.

## Instalación y uso

1. **Clona el repositorio:**
1. Clona el repositorio: `git clone https://rickyroses.github.io/Pokedex/`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm start`

## Funcionamiento
Al cargar la página, la aplicación obtiene los datos de los Pokémon desde un archivo JSON externo (requiere CORS Proxy).
La aplicación itera sobre los datos y crea una tarjeta para cada Pokémon.
La tarjeta muestra información básica del Pokémon (nombre, ID, tipo, habilidades e imagen).
Al hacer clic en una tarjeta, se abre un modal (opcional, requiere jQuery) que muestra información adicional del Pokémon (peso, altura, debilidades).
Un formulario de búsqueda permite filtrar los Pokémon por nombre.

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, antes de enviar un pull request asegúrate de contribuir en algo como:
Si deseas contribuir a este proyecto, puedes:

* Mejorar la interfaz de usuario agregando estilos CSS.
* Implementar la funcionalidad del modal sin depender de jQuery.
* Agregar soporte para mostrar información adicional de los Pokémon (peso, altura, debilidades) si está disponible en el JSON.

## Licencia
Pendiente

## Demostración
[(http://127.0.0.1:5500/index.html)]

## Autores

* **Ricardo León** (Desarrollador): Desarrollo de la interfaz frontend y la integración con el backend.
* **Itzel Quezada** (Diseñadora): Diseño de la interfaz de usuario y la experiencia del usuario.
* **Pilar Mondragón** (Desarrollador): Desarrollo de la interfaz frontend y la integración con el backend.
* **Verónica Lira** (Desarrollador): Desarrollo de la interfaz frontend y la integración con el backend.



¡Disfruta creando tu propio Pokédex!
