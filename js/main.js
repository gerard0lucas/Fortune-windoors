(function () {
  const page = document.body.dataset.page || "home";

  const navItems = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "about", href: "about.html", label: "About" },
    { id: "products", href: "products.html", label: "Products" },
    { id: "services", href: "services.html", label: "Services" },
    { id: "gallery", href: "gallery.html", label: "Gallery" },
    { id: "blog", href: "blog.html", label: "Blog" },
    { id: "contact", href: "contact.html", label: "Contact" }
  ];

  function navLinks(extraClass) {
    return navItems
      .map(function (item) {
        const active = item.id === page ? " active" : "";
        return (
          '<a href="' +
          item.href +
          '" class="nav-link ' +
          extraClass +
          active +
          '">' +
          item.label +
          "</a>"
        );
      })
      .join("");
  }

  function renderChrome() {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    if (header) {
      header.classList.add("z-40");
      const tickerItems =
        '<span class="text-gold font-semibold tracking-[0.22em] uppercase">Since 2012</span>' +
        '<span class="ticker-dot"></span>' +
        '<span>uPVC &amp; System Aluminium Windows and Doors</span>' +
        '<span class="ticker-dot"></span>' +
        '<a href="tel:+919611370116"><i class="fa-solid fa-phone text-gold"></i>+91 96113 70116</a>' +
        '<span class="ticker-dot"></span>' +
        '<a href="tel:08029902698"><i class="fa-solid fa-phone text-gold"></i>080 2990 2698</a>' +
        '<span class="ticker-dot"></span>' +
        '<a href="mailto:info@fortunewindoors.com"><i class="fa-solid fa-envelope text-gold"></i>info@fortunewindoors.com</a>' +
        '<span class="ticker-dot"></span>' +
        '<span><i class="fa-solid fa-location-dot text-gold"></i>Vidyaranyapura, Bengaluru</span>' +
        '<span class="ticker-dot"></span>' +
        '<span>Free site measurement</span>' +
        '<span class="ticker-dot"></span>';

      header.innerHTML =
        '<div class="top-ticker">' +
        '<div class="ticker-track">' +
        '<div class="ticker-group">' + tickerItems + "</div>" +
        '<div class="ticker-group">' + tickerItems + "</div>" +
        "</div></div>" +
        '<div class="site-header bg-white/95 backdrop-blur border-b border-navy/5">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] sm:h-[84px] flex items-center justify-between gap-3">' +
        '<a href="index.html" class="flex items-center min-w-0 shrink">' +
        '<img src="assets/fortune-logo.avif" alt="Fortune Windoors" class="brand-logo h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[210px] md:max-w-[250px] object-contain">' +
        "</a>" +
        '<nav class="nav-desktop hidden xl:flex items-center gap-5 2xl:gap-7">' +
        navLinks("") +
        "</nav>" +
        '<div class="flex items-center gap-2 sm:gap-3 shrink-0">' +
        '<button type="button" class="js-open-quote hidden sm:inline-flex btn-gold rounded-full px-4 md:px-5 py-2.5 text-sm">Get a Quote</button>' +
        '<button type="button" id="menu-toggle" class="xl:hidden w-11 h-11 rounded-full border border-navy/15 text-navy" aria-label="Open menu">' +
        '<i class="fa-solid fa-bars"></i></button>' +
        "</div></div></div>" +
        '<div id="mobile-menu" class="mobile-menu fixed inset-0 z-50 bg-navy text-white xl:hidden overflow-y-auto">' +
        '<div class="flex items-center justify-between px-4 sm:px-5 h-[72px] sm:h-[84px] bg-white">' +
        '<img src="assets/fortune-logo.avif" alt="Fortune Windoors" class="h-10 sm:h-12 w-auto max-w-[168px] object-contain">' +
        '<button type="button" id="menu-close" class="w-11 h-11 text-navy" aria-label="Close menu"><i class="fa-solid fa-xmark text-2xl"></i></button>' +
        "</div>" +
        '<nav class="px-6 sm:px-8 pt-6 flex flex-col gap-4 sm:gap-6 text-xl sm:text-2xl font-display font-semibold">' +
        navLinks("text-white") +
        '<button type="button" class="js-open-quote btn-gold rounded-full px-6 py-3 text-base w-full sm:w-fit mt-4">Get a Quote</button>' +
        "</nav></div>";

      const mobileMenu = header.querySelector("#mobile-menu");
      if (mobileMenu) {
        document.body.appendChild(mobileMenu);
      }
    }

    if (!document.getElementById("quote-modal")) {
      const modalWrap = document.createElement("div");
      modalWrap.innerHTML =
        '<div id="quote-modal" class="quote-modal fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4">' +
        '<div class="quote-sheet bg-white rounded-3xl w-full max-w-lg p-5 sm:p-7 relative">' +
        '<button type="button" class="js-close-quote absolute top-4 right-4 text-navy" aria-label="Close quote form"><i class="fa-solid fa-xmark text-xl"></i></button>' +
        '<p class="eyebrow">Get a quote</p>' +
        '<h3 class="section-title text-2xl mt-2">Tell us what you need</h3>' +
        '<form class="js-quote-form mt-6 space-y-4">' +
        '<input class="form-field w-full border border-navy/15 rounded-xl px-4 py-3" type="text" name="name" placeholder="Your name" required>' +
        '<input class="form-field w-full border border-navy/15 rounded-xl px-4 py-3" type="tel" name="phone" placeholder="Phone number" required>' +
        '<select class="form-field w-full border border-navy/15 rounded-xl px-4 py-3 bg-white" name="product" required>' +
        '<option value="">Select a product</option>' +
        '<option>uPVC Windows</option><option>uPVC Doors</option>' +
        '<option>System Aluminium Windows</option><option>System Aluminium Doors</option>' +
        '</select>' +
        '<textarea class="form-field w-full border border-navy/15 rounded-xl px-4 py-3" name="message" rows="3" placeholder="Site location and brief requirement"></textarea>' +
        '<button type="submit" class="btn-gold w-full rounded-full py-3">Send enquiry</button>' +
        '<p class="js-form-success hidden text-center text-sm text-emerald-700">Thank you. We will get back to you shortly.</p>' +
        "</form></div></div>";
      document.body.appendChild(modalWrap.firstElementChild);
    }

    if (!document.querySelector(".whatsapp-float")) {
      const wa = document.createElement("a");
      wa.href = "https://wa.me/919611370116";
      wa.className = "float-btn float-btn-left";
      wa.target = "_blank";
      wa.rel = "noopener";
      wa.setAttribute("aria-label", "Chat on WhatsApp");
      wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
      document.body.appendChild(wa);
    }

    if (footer) {
      footer.innerHTML =
        '<footer class="site-footer">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">' +
        '<div>' +
        '<img src="assets/3.png" alt="Fortune Windoors" class="footer-logo">' +
        '<p class="leading-relaxed">Manufacturer of uPVC and System Aluminium windows and doors in Bengaluru since 2012.</p>' +
        "</div>" +
        '<div><h3 class="font-display font-semibold mb-4">Quick Links</h3>' +
        '<ul class="footer-list">' +
        '<li><a href="about.html">About Us</a></li>' +
        '<li><a href="services.html">Services</a></li>' +
        '<li><a href="products.html">Products</a></li>' +
        '<li><a href="gallery.html">Gallery</a></li>' +
        '<li><a href="blog.html">Blog</a></li>' +
        '<li><a href="contact.html">Contact</a></li>' +
        "</ul></div>" +
        '<div><h3 class="font-display font-semibold mb-4">Products</h3>' +
        '<ul class="footer-list">' +
        '<li><a href="products.html#upvc">uPVC Windows</a></li>' +
        '<li><a href="products.html#upvc-doors">uPVC Doors</a></li>' +
        '<li><a href="products.html#aluminium">System Aluminium Windows</a></li>' +
        '<li><a href="products.html#aluminium-doors">System Aluminium Doors</a></li>' +
        "</ul></div>" +
        '<div><h3 class="font-display font-semibold mb-4">Visit Us</h3>' +
        '<ul class="space-y-3">' +
        '<li class="flex gap-3"><i class="fa-solid fa-location-dot text-gold mt-1"></i><span>Shop No. 03, Vidyaranyapura Main Road, HMT Layout, Bengaluru, Karnataka 560097</span></li>' +
        '<li class="flex gap-3"><i class="fa-solid fa-phone text-gold mt-1"></i><a href="tel:+919611370116">+91 96113 70116</a></li>' +
        '<li class="flex gap-3"><i class="fa-solid fa-tty text-gold mt-1"></i><a href="tel:08029902698">080 2990 2698</a></li>' +
        '<li class="flex gap-3"><i class="fa-solid fa-envelope text-gold mt-1"></i><a href="mailto:info@fortunewindoors.com">info@fortunewindoors.com</a></li>' +
        "</ul></div></div>" +
        '<div class="footer-copy">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">' +
        '<p>&copy; <span class="js-year"></span> Fortune Windoors. All rights reserved.</p>' +
        '<p class="tracking-[0.2em] uppercase text-gold">uPVC | System Aluminium</p>' +
        "</div></div></footer>";
    }
  }

  function bindUi() {
    const menu = document.getElementById("mobile-menu");
    const openMenu = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("menu-close");
    const modal = document.getElementById("quote-modal");

    const headerRoot = document.getElementById("site-header");
    const floatBtns = document.querySelectorAll(".float-btn");
    const firstScreen = document.querySelector(".hero-slideshow, .page-hero");
    let lastY = window.scrollY;

    function syncHeaderSpace() {
      if (!headerRoot) return;
      const ticker = headerRoot.querySelector(".top-ticker");
      const bar = headerRoot.querySelector(".site-header");
      const height = (ticker ? ticker.offsetHeight : 0) + (bar ? bar.offsetHeight : headerRoot.offsetHeight);
      document.documentElement.style.setProperty("--header-h", height + "px");
    }
    syncHeaderSpace();
    window.addEventListener("resize", syncHeaderSpace);

    window.addEventListener("scroll", function () {
      const y = window.scrollY;
      const menuOpen = menu && menu.classList.contains("open");
      const modalOpen = modal && modal.classList.contains("open");
      if (headerRoot) {
        headerRoot.classList.toggle("is-scrolled", y > 8);
        if (y < 48 || menuOpen || modalOpen) {
          headerRoot.classList.remove("header-hidden");
        } else if (y > lastY + 6) {
          headerRoot.classList.add("header-hidden");
        } else if (y < lastY - 6) {
          headerRoot.classList.remove("header-hidden");
        }
      }
      if (floatBtns.length) {
        let show = y > 80;
        if (firstScreen) {
          const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 118;
          show = firstScreen.getBoundingClientRect().bottom <= headerH + 12;
        }
        floatBtns.forEach(function (btn) { btn.classList.toggle("is-visible", show); });
      }
      lastY = y;
    }, { passive: true });

    function setMenu(open) {
      if (!menu) return;
      menu.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }

    if (openMenu) openMenu.addEventListener("click", function () { setMenu(true); });
    if (closeMenu) closeMenu.addEventListener("click", function () { setMenu(false); });
    if (menu) {
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setMenu(false); });
      });
    }

    if (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) modal.classList.remove("open");
      });
    }
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (modal) modal.classList.remove("open");
        setMenu(false);
      }
    });

    document.querySelectorAll(".js-open-quote").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setMenu(false);
        if (modal) modal.classList.add("open");
      });
    });

    document.querySelectorAll(".js-close-quote").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (modal) modal.classList.remove("open");
      });
    });

    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    document.querySelectorAll(".js-quote-form, .js-contact-form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const note = form.querySelector(".js-form-success");
        form.reset();
        if (note) {
          note.classList.remove("hidden");
          setTimeout(function () {
            note.classList.add("hidden");
            if (modal) modal.classList.remove("open");
          }, 2200);
        }
      });
    });

    const filterButtons = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-category]");
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.filter;
        filterButtons.forEach(function (el) { el.classList.remove("active"); });
        button.classList.add("active");
        items.forEach(function (item) {
          const cats = (item.dataset.category || "").split(/\s+/);
          const show = filter === "all" || cats.indexOf(filter) !== -1;
          item.classList.toggle("hide", !show);
        });
      });
    });
  }

  function ensureLoader() {
    if (document.getElementById("page-loader")) return;
    const loader = document.createElement("div");
    loader.id = "page-loader";
    loader.className = "page-loader";
    loader.innerHTML =
      '<div class="loader-brand">' +
      '<img src="assets/ff square.avif" alt="Fortune Windoors" class="loader-logo">' +
      '<div class="loader-progress"><span></span></div>' +
      "</div>";
    document.body.prepend(loader);
  }

  function hideLoader() {
    const loader = document.getElementById("page-loader");
    document.documentElement.classList.remove("is-loading");
    function ready() {
      document.dispatchEvent(new Event("fortune:ready"));
    }
    if (!loader) {
      ready();
      return;
    }
    loader.classList.add("is-done");
    setTimeout(function () {
      loader.remove();
      ready();
    }, 600);
  }

  function initLoader() {
    ensureLoader();
    const started = Date.now();
    function finish() {
      const wait = Math.max(0, 1200 - (Date.now() - started));
      setTimeout(hideLoader, wait);
    }
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
  }

  function initHero() {
    const root = document.querySelector(".hero-slider, .hero-slideshow");
    if (!root) return;
    const slides = Array.prototype.slice.call(root.querySelectorAll(".hero-slide"));
    const dotsWrap = root.querySelector(".hero-dots");
    const progress = root.querySelector(".hero-progress");
    const counter = root.querySelector(".hero-count");
    let index = 0;
    let timer = null;
    const duration = 6500;

    if (!slides.length) return;

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach(function (_, i) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
    }

    const dots = Array.prototype.slice.call(root.querySelectorAll(".hero-dot"));

    function setProgress(on) {
      if (!progress) return;
      progress.classList.remove("is-running");
      if (on) {
        void progress.offsetWidth;
        progress.classList.add("is-running");
      }
    }

    function goTo(next) {
      slides[index].classList.remove("is-active");
      if (dots[index]) dots[index].classList.remove("is-active");
      index = (next + slides.length) % slides.length;
      slides[index].classList.add("is-active");
      if (dots[index]) dots[index].classList.add("is-active");
      if (counter) counter.textContent = String(index + 1).padStart(2, "0");
      setProgress(true);
      restart();
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(index + 1); }, duration);
    }

    const prev = root.querySelector(".hero-prev");
    const next = root.querySelector(".hero-next");
    if (prev) prev.addEventListener("click", function () { goTo(index - 1); });
    if (next) next.addEventListener("click", function () { goTo(index + 1); });

    root.addEventListener("mouseenter", function () {
      clearInterval(timer);
      setProgress(false);
    });
    root.addEventListener("mouseleave", function () {
      setProgress(true);
      restart();
    });

    let startX = 0;
    root.addEventListener("touchstart", function (event) {
      startX = event.changedTouches[0].clientX;
    }, { passive: true });
    root.addEventListener("touchend", function (event) {
      const dx = event.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
    });

    if (counter) counter.textContent = "01";
    setProgress(true);
    restart();
  }

  function initReveals() {
    const nodes = document.querySelectorAll(".js-reveal");
    if (!nodes.length) return;
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        const count = entry.target.querySelector("[data-count]");
        if (count && !count.dataset.done) {
          count.dataset.done = "1";
          animateCount(count);
        }
        io.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (node) { io.observe(node); });
  }

  function animateCount(el) {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / 1300);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initScrollStats() {
    const section = document.querySelector("[data-stats]");
    if (!section) return;
    const counters = Array.prototype.slice.call(section.querySelectorAll("[data-count]"));
    if (!counters.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rafs = [];

    function write(el, value) {
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const rounded = Math.round(value);
      el.textContent = prefix + (rounded >= 1000 ? rounded.toLocaleString("en-IN") : rounded) + suffix;
    }

    function stop() {
      rafs.forEach(function (id) { cancelAnimationFrame(id); });
      rafs.length = 0;
    }

    function run() {
      stop();
      counters.forEach(function (el, i) {
        const target = Number(el.dataset.count || 0);
        if (reduce) {
          write(el, target);
          return;
        }
        write(el, 0);
        const delay = i * 140;
        const duration = 1400;
        const startAt = performance.now() + delay;
        function frame(now) {
          if (now < startAt) {
            rafs.push(requestAnimationFrame(frame));
            return;
          }
          const t = Math.min(1, (now - startAt) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          write(el, target * eased);
          if (t < 1) rafs.push(requestAnimationFrame(frame));
        }
        rafs.push(requestAnimationFrame(frame));
      });
    }

    function reset() {
      stop();
      counters.forEach(function (el) { write(el, 0); });
    }

    function startWatching() {
      if (!("IntersectionObserver" in window)) {
        run();
        return;
      }
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) run();
          else reset();
        });
      }, { threshold: 0.35 });
      io.observe(section);
    }

    if (document.getElementById("page-loader") || document.documentElement.classList.contains("is-loading")) {
      document.addEventListener("fortune:ready", startWatching, { once: true });
    } else {
      startWatching();
    }
  }

  function initBlogCarousel() {
    const root = document.querySelector(".blog-carousel");
    if (!root) return;
    const scroller = root.querySelector(".blog-scroller");
    const prev = root.querySelector(".blog-prev");
    const next = root.querySelector(".blog-next");
    if (!scroller) return;

    function step() {
      const card = scroller.querySelector(".blog-slide");
      return card ? card.getBoundingClientRect().width + 16 : scroller.clientWidth * 0.8;
    }

    function syncArrows() {
      const max = scroller.scrollWidth - scroller.clientWidth - 2;
      if (prev) prev.disabled = scroller.scrollLeft <= 2;
      if (next) next.disabled = scroller.scrollLeft >= max;
    }

    if (prev) {
      prev.addEventListener("click", function () {
        scroller.scrollBy({ left: -step(), behavior: "smooth" });
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        scroller.scrollBy({ left: step(), behavior: "smooth" });
      });
    }
    scroller.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scroller.scrollBy({ left: -step(), behavior: "smooth" });
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scroller.scrollBy({ left: step(), behavior: "smooth" });
      }
    });
    scroller.addEventListener("scroll", syncArrows, { passive: true });
    window.addEventListener("resize", syncArrows);
    syncArrows();
  }

  function initAutoScrolls() {
    document.querySelectorAll("[data-auto-scroll]").forEach(function (scroller) {
      const track = scroller.querySelector(".auto-track");
      if (!track || track.dataset.cloned === "1") return;
      track.innerHTML += track.innerHTML;
      track.dataset.cloned = "1";
      if (scroller.dataset.speed) {
        track.style.animationDuration = scroller.dataset.speed;
      }
      scroller.addEventListener("mouseenter", function () { scroller.classList.add("is-paused"); });
      scroller.addEventListener("mouseleave", function () { scroller.classList.remove("is-paused"); });
      scroller.addEventListener("touchstart", function () { scroller.classList.add("is-paused"); }, { passive: true });
      scroller.addEventListener("touchend", function () { scroller.classList.remove("is-paused"); });
    });
  }

  function initExtras() {
    if (!document.querySelector(".back-to-top")) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "float-btn float-btn-right back-to-top";
      btn.setAttribute("aria-label", "Back to top");
      btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
      btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      document.body.appendChild(btn);
    }

    const galleryImages = document.querySelectorAll(".gallery-card img, img.gallery-card");
    if (galleryImages.length) {
      let box = document.querySelector(".lightbox");
      if (!box) {
        box = document.createElement("div");
        box.className = "lightbox";
        box.innerHTML = '<img alt=""><button type="button" class="lightbox-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>';
        document.body.appendChild(box);
        box.addEventListener("click", function (event) {
          if (event.target === box || event.target.closest("button")) box.classList.remove("open");
        });
      }
      galleryImages.forEach(function (img) {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
          box.querySelector("img").src = img.src;
          box.querySelector("img").alt = img.alt;
          box.classList.add("open");
        });
      });
    }
  }

  document.documentElement.classList.add("is-loading");
  initLoader();
  renderChrome();
  initAutoScrolls();
  initBlogCarousel();
  initExtras();
  bindUi();
  initHero();
  initReveals();
  initScrollStats();
})();
