/* Sotavento Living — Main Script */

(function () {
  'use strict';

  /* ----- Header scroll effect ----- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu toggle ----- */
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const expanded = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', expanded);
      document.body.style.overflow = expanded ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----- Reveal on scroll ----- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* El catálogo se descarga directo (link al PDF) + CTA de WhatsApp:
     ya no hay form de catálogo que interceptar. */

  /* ----- Form de contacto -> WhatsApp (sin backend) -----
     Arma el mensaje con lo que completó el visitante y abre el chat de ventas. */
  const fc = document.getElementById('formContactoWA');
  if (fc) {
    const val = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };
    fc.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = val('nombre');
      if (!nombre) {
        const el = document.getElementById('nombre');
        if (el) el.focus();
        return;
      }
      const sel = document.getElementById('linea');
      const linea = sel ? sel.options[sel.selectedIndex].text : '';

      let t = '¡Hola! Soy ' + nombre + '.';
      if (linea) t += '\nConsulto sobre: ' + linea + '.';
      if (val('email')) t += '\nEmail: ' + val('email');
      if (val('telefono')) t += '\nTel: ' + val('telefono');
      if (val('mensaje')) t += '\n\n' + val('mensaje');

      window.open('https://wa.me/5491149715679?text=' + encodeURIComponent(t),
                  '_blank', 'noopener');
    });
  }
})();
