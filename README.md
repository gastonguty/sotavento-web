# Sotavento Living — Sitio web

## Para quien edita la web (agencia y equipo)

**Todo lo que se guarda en este repositorio se publica solo en sotaventoliving.com.ar, en uno o dos minutos.**
No hace falta pedirle nada a nadie.

### Cambiar un texto o una página (sin instalar nada)

1. Entrá a este repositorio en github.com con tu usuario.
2. Abrí la página que querés cambiar: `index.html` es el inicio; `colecciones/` tiene una página por línea;
   `contacto.html`, `showroom.html`, `nosotros.html`, etc. son las demás.
3. Tocá el **lápiz** (arriba a la derecha), hacé el cambio y apretá **Commit changes**.
4. Esperá un par de minutos y recargá la web.

Si trabajan con Claude, pueden pasarle el archivo, pedirle el cambio y pegar el resultado.

### Subir fotos

Entrá a la carpeta `images/` (o la subcarpeta que corresponda) → **Add file → Upload files**.
Conviene subirlas livianas: **formato webp, menos de 300 KB**. En la página se usan con su ruta, por ejemplo
`images/espacios/quincho.webp`.

### Para que nada se rompa

- No borren la línea que carga `analytics.js` (un `<script ... analytics.js defer></script>`) de ninguna página: mide
  las visitas y los contactos para las campañas (Google y Meta).
- No toquen `vercel.json` ni la carpeta `.github/`: es lo que publica la web y lo que muestra las páginas de
  los locales (`/pergamino1`, `/neuquen1`, etc., que viven en otro repositorio).
- El WhatsApp de Sotavento es `5491149715679` (así, con el 9 después del 54).
- Si algo sale mal, se puede volver atrás: cada cambio queda guardado en la historia del repositorio.

---

## Notas técnicas

Sitio estático con HTML + CSS + JS puro. Sin frameworks, sin build step, sin dependencias. Listo para subir a cualquier hosting.

## Estructura del proyecto

```
sotavento-web/
├── index.html              ← Home
├── css/
│   └── styles.css          ← Todos los estilos
├── js/
│   └── main.js             ← Interacciones (scroll, mobile menu, reveal)
├── images/                 ← Fotos del sitio (vos las agregás)
└── (próximas páginas)
    ├── colecciones.html
    ├── colecciones/mediterraneo.html
    ├── colecciones/indico.html
    ├── colecciones/atlantico.html
    ├── colecciones/pacifico.html
    ├── colecciones/baltico.html
    ├── colecciones/egeo.html
    ├── materiales.html
    ├── proyectos.html
    ├── showroom.html
    ├── nosotros.html
    ├── catalogo.html
    └── contacto.html
```

## Imágenes que necesita el Home (agregá en `/images/`)

| Archivo | Descripción | Tamaño sugerido |
|---|---|---|
| `hero-argentina.jpg` | Foto fiesta Argentina, multi-generacional, full bleed hero | 2400×1600px |
| `col-mediterraneo.jpg` | Hero card de la línea Mediterráneo | 1200×1500px |
| `col-indico.jpg` | Hero card de la línea Índico | 1200×1500px |
| `col-atlantico.jpg` | Hero card de la línea Atlántico | 1200×1500px |
| `col-pacifico.jpg` | Hero card de la línea Pacífico | 1200×1500px |
| `lifestyle-mujer-cafe.jpg` | Mujer con sweater beige tomando café (sesión Abril) | 1200×1500px |
| `proyecto-1.jpg`, `proyecto-2.jpg`, `proyecto-3.jpg` | 3 proyectos destacados | 1200×900px |
| `materiales-detalle.jpg` | Detalle del aluminio termolaqueado + lona acrílica | 1200×1200px |
| `showroom.jpg` | Foto exterior o interior del showroom Nordelta | 1600×1200px |

**Mientras no agregues fotos**: el sitio se ve con los colores beige/marrón de la paleta del manual. Funciona como wireframe visual hasta que cargues las imágenes reales.

## Cómo previsualizar localmente

Abrí `index.html` en cualquier navegador. No hace falta servidor — funciona directo desde el archivo.

Si querés simular un servidor real (recomendado para que carguen bien las fonts y el JS), podés usar:

```bash
# Python
python -m http.server 8000
# Luego: http://localhost:8000
```

O cualquier extensión "Live Server" de VS Code.

## Cómo deployar

### Opción 1 — Hostinger (lo que ya tenés)
1. Hostinger File Manager → eliminar archivos de la web actual
2. Subir todos los archivos de `sotavento-web/` (incluyendo carpetas `css/`, `js/`, `images/`) a `public_html/`
3. Listo. Visible en `sotaventoliving.com.ar`

### Opción 2 — Vercel (gratis, más rápido)
1. Crear cuenta en vercel.com (gratis)
2. Drag & drop la carpeta `sotavento-web/` en su importador
3. Te da una URL `*.vercel.app`. Después conectás tu dominio.

### Opción 3 — Netlify (gratis, similar a Vercel)
1. Crear cuenta en netlify.com
2. "Drop site" — arrastrás la carpeta y la subís
3. URL `*.netlify.app`. Conectás dominio después.

## Pendientes técnicos

- [ ] Form de catálogo conectado a backend (Resend, Mailchimp, Formspree o similar)
- [ ] Form de contacto en página `/contacto.html`
- [ ] Google Analytics 4 + Meta Pixel
- [ ] OG tags + favicon
- [ ] Sitemap.xml + robots.txt
- [ ] Imágenes en formato WebP para mejor performance

## Brand stack usado

- **Fonts**: Playfair Display + DM Sans + Cormorant SC (Google Fonts)
- **Paleta**: 7 colores del manual de marca (`--color-bg`, `--color-fg`, etc.)
- **Iconos**: SVG inline (livianos, escalables)
- **Animaciones**: CSS transitions + IntersectionObserver para fade-ins

## Próximas páginas que voy a construir

1. `materiales.html` — con los 9 colores estructura + 4 telas + copy técnico
2. `showroom.html` — info detallada + mapa
3. `nosotros.html` — historia "a pulmón"
4. `catalogo.html` — descarga PDF
5. `contacto.html` — form
6. `colecciones.html` + 6 sub-páginas (cuando llegue catálogo definitivo de la agencia con medidas y productos)

---

*Generado el 6 de mayo 2026 · Sotavento Living*
