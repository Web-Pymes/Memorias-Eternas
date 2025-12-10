# Wedding Planner Website

Una página web elegante y lujosa para servicios de Wedding Planner, diseñada para ser desplegada gratuitamente en GitHub Pages.

## Características

- **Diseño Premium**: Paleta de colores Azul Marino Profundo y Dorado (#2C3E50 / #D4AF37).
- **Tipografía**: Playfair Display (Títulos) y Lato (Cuerpo).
- **Responsive**: Adaptable a móviles, tablets y escritorio.
- **Formulario de Contacto**: Preparado para integración con API (EmailJS/Cloudflare).
- **Secciones**: Hero, Paquetes (Esencia, Platino, Diamante), Estética, Contacto.

## Estructura del Proyecto

```
/
├── index.html        # Página principal
├── css/
│   └── styles.css    # Estilos CSS (Variables, Flexbox/Grid, Animaciones)
├── js/
│   └── main.js       # Lógica del formulario y navegación suave
├── img/
│   └── hero.png      # Imagen principal (Generada por AI)
└── README.md         # Instrucciones
```

## Instrucciones de Despliegue (GitHub Pages)

1. **Subir código a GitHub**:
   - Crea un nuevo repositorio en GitHub.
   - Sube todos los archivos de esta carpeta al repositorio.

2. **Activar GitHub Pages**:
   - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
   - Busca la sección **Pages** (Páginas) en el menú lateral.
   - En **Source** (Fuente), selecciona la rama `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.

3. **Ver tu sitio**:
   - GitHub te dará un enlace (ej. `https://tuusuario.github.io/tu-repo/`).
   - Espera unos minutos y tu sitio estará en vivo.

## Configuración del Formulario

El formulario en `js/main.js` tiene una simulación de envío. Para hacerlo funcional, recomendamos usar **EmailJS** (gratuito para bajo volumen) o **Cloudflare Workers**.

1. Abre `js/main.js`.
2. Busca la línea:
   ```javascript
   const API_KEY = 'TU_CLOUDFLARE_EMAILJS_KEY';
   ```
3. Reemplaza el valor con tu clave real o public key de EmailJS.
4. Implementa la lógica de envío dentro de la función `initFormHandler`.

---
*Desarrollado con asistencia de AI para Wedding Planner Demo.*
