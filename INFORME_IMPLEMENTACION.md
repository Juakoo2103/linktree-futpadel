# Informe de implementación

## Hecho

- Se rediseñó la landing como experiencia mobile-first tipo Linktree premium para Futpadel Club.
- Se dejó una paleta deportiva con base oscura, acentos verdes, azul petróleo y amarillo deportivo.
- Se reemplazó el patrón repetitivo de logos por una imagen de cancha con overlay degradado.
- Se ajustó el header para mostrar solo el logo centrado y el subtítulo "Canchas, reservas y comunidad deportiva".
- Se agrandó la galería y se dejó como elemento protagonista con overlay, textos y dots más discretos.
- Se convirtió WhatsApp en CTA principal, ubicado antes de las acciones secundarias.
- Se transformaron las acciones en cards grandes con íconos, título y descripción.
- Se agregó feedback al copiar datos bancarios con el toast "Datos copiados correctamente".
- Se mantuvo el modo claro/oscuro con detección automática del modo del dispositivo y botón con ícono sol/luna.
- Se reemplazaron símbolos decorativos por íconos de `@mui/icons-material`.
- Se agregó un footer pequeño con ubicación y contexto del club.
- Se corrigió el SEO base en `index.html`, `manifest.json`, `robots.txt` y `sitemap.xml`.
- Se agregaron metadatos Open Graph, Twitter Card, canonical, theme color y datos estructurados JSON-LD.
- Se agregaron assets públicos para SEO/PWA: `public/logo.png` y `public/og-image.jpg`.

## Recomendaciones por hacer

- Confirmar el dominio final para validar canonical, sitemap, Open Graph y robots.
- Reemplazar `public/og-image.jpg` por una imagen optimizada 1200x630 creada especialmente para compartir en redes.
- Confirmar dirección, horarios y coordenadas reales para mejorar el schema local.
- Optimizar peso de imágenes del carrusel con versiones WebP/AVIF para mejorar carga mobile.
- Ejecutar Lighthouse en producción y ajustar performance, accesibilidad y SEO según resultados.
- Agregar medición de eventos: clic en WhatsApp, agendar, copiar datos e Instagram.
- Considerar una sección breve con horarios o dirección exacta si el club quiere más contexto local.
