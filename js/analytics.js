/* Sotavento Living — Medición (GA4 + Meta Pixel)
   ---------------------------------------------------------------------------
   COMPLETÁ LOS DOS IDs DE ABAJO Y SE ACTIVA SOLO. Vacío = no carga nada.

   GA4_ID        → Google Analytics · Administrar · Flujos de datos · Web
                   "ID de medición", con formato  G-XXXXXXXXXX
   META_PIXEL_ID → Meta Events Manager · Orígenes de datos · tu píxel
                   El ID es el número largo que figura bajo el nombre.

   Una vez cargados, todas las páginas del sitio quedan midiendo (este archivo
   se incluye en el <head> de las 14 páginas).
   --------------------------------------------------------------------------- */
(function () {
  'use strict';

  var GA4_ID = 'G-X0LJ3583Z3';            // Propiedad "sotaventoliving.com.ar", flujo "Sitio Web"
  var META_PIXEL_ID = '631696506253371';  // "Pixel de Sotavento" — el mismo dataset que usa
                                          // jarvis/capi.py para mandar las ventas de WhatsApp,
                                          // así Meta deduplica web + CAPI.

  /* ---------- Google Analytics 4 ---------- */
  if (GA4_ID) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
  }

  /* ---------- Meta Pixel ---------- */
  if (META_PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  /* ---------- Eventos de conversión del sitio ----------
     Se disparan solos donde corresponde, si hay medición activa.           */
  document.addEventListener('DOMContentLoaded', function () {
    var track = function (nombre, params) {
      if (window.gtag) window.gtag('event', nombre, params || {});
      if (window.fbq) window.fbq('trackCustom', nombre, params || {});
    };

    // Descarga del catálogo (PDF)
    document.querySelectorAll('a[href$=".pdf"]').forEach(function (a) {
      a.addEventListener('click', function () { track('descarga_catalogo'); });
    });

    // Cualquier clic que abra WhatsApp (es el canal de venta real)
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
      a.addEventListener('click', function () {
        track('contacto_whatsapp', { origen: location.pathname });
      });
    });
  });
})();
