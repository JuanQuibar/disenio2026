const desktopMarkup = String.raw`<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap");
html:has(.desktop-prototype-root) { overflow-x: hidden; overflow-y: auto; }
body:has(.desktop-prototype-root) { max-width: none !important; margin: 0; padding: 0; overflow: visible; overscroll-behavior: auto; background: #f1f5f9 !important; }
body:has(.desktop-prototype-root) > header { display: none !important; }
body:has(.desktop-prototype-root) > .desktop-prototype-root { width: 100%; max-width: none; margin: 0 !important; padding: 0 !important; }
.desktop-prototype-root main > :first-child { margin-top: 0 !important; }
.desktop-prototype-root main > :last-child { margin-bottom: 0 !important; }
</style>
<header class="fixed top-0 left-0 w-full z-50 shadow-md">
  <!-- Barra Superior de Servicios / Datos (Fondo oscuro) -->
  <div class="bg-[#0a0f18] text-white/90 border-b border-white/10 text-[12px] font-body">
    <div class="max-w-[1360px] mx-auto px-4 lg:px-6 h-9 flex items-center justify-between gap-4">
      <!-- Cotizaciones y Datos Financieros / Clima -->
      <div class="flex items-center gap-4 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        <div class="flex items-center gap-1.5 font-medium">
          <span class="material-symbols-outlined text-[15px] text-amber-400">sunny</span>
          <span class="">Mendoza 24°C</span>
        </div>
        <span class="text-white/20 hidden sm:inline">|</span>
        <div class="flex items-center gap-1.5">
          <span class="text-white/60">Dólar Blue:</span>
          <span class="font-bold font-mono">$1.215</span>
          <span class="text-emerald-400 font-bold text-[11px] flex items-center">▲ 0.4%</span>
        </div>
        <span class="text-white/20 hidden md:inline">|</span>
        <div class="flex items-center gap-1.5">
          <span class="text-white/60">Dólar Oficial:</span>
          <span class="font-bold font-mono">$1.042</span>
        </div>
        <span class="text-white/20 hidden md:inline">|</span>
        <div class="flex items-center gap-1.5">
          <span class="text-white/60">Merval:</span>
          <span class="text-emerald-400 font-bold font-mono">+1.8%</span>
        </div>
        <span class="text-white/20 hidden lg:inline">|</span>
        <div class="flex items-center gap-1.5">
          <span class="text-white/60">Riesgo País:</span>
          <span class="font-bold font-mono">680 pts</span>
        </div>
      </div>

      <!-- Fecha y Pastilla EN VIVO -->
      <div class="flex items-center gap-4 shrink-0 whitespace-nowrap">
        <div class="hidden xl:flex items-center gap-1.5 text-white/60 text-[12px]">
          <span class="material-symbols-outlined text-[14px]">calendar_today</span>
          <span class="">Mendoza, Argentina — Lunes, 24 de Febrero de 2026</span>
        </div>
        <a href="#" class="bg-red-600 hover:bg-red-700 transition-colors text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span class="">Canal 7 & Radio Nihuil EN VIVO</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Barra de Navegación Principal (Fondo oscuro continuo) -->
  <div class="bg-[#0b1320] border-b border-white/10 text-white">
    <div class="max-w-[1360px] mx-auto px-4 lg:px-6 h-14 flex items-center justify-between gap-4">
      <!-- Lado Izquierdo: Menú Hamburguesa + Logo UNO -->
      <div class="flex items-center gap-4 shrink-0">
        <button aria-label="Menú principal" class="w-9 h-9 rounded-md flex flex-col justify-center items-center gap-1 text-white hover:bg-white/10 transition-colors p-1.5 cursor-pointer">
          <span class="w-5 h-0.5 bg-white rounded-full"></span>
          <span class="w-5 h-0.5 bg-white rounded-full"></span>
          <span class="w-5 h-0.5 bg-white rounded-full"></span>
        </button>
        <a href="#" class="flex items-center gap-2 group" data-path="portada">
          <div class="h-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 52" class="h-7 w-auto" style="display: block;">
              <g fill="#38bdf8">
                <path d="M121.49,1.16c-14.41,0-24.04,10.36-24.04,24.84s9.63,24.84,24.04,24.84,24.04-10.36,24.04-24.84S135.91,1.16,121.49,1.16ZM121.49,39.02c-3.72,0-9.43-2.46-9.43-13.02s5.71-13.02,9.43-13.02,9.43,2.46,9.43,13.02-5.71,13.02-9.43,13.02Z"></path>
                <path d="M80.71,27.66h-.13l-14.94-25.37v-.02h-9.38c-2.45,0-4.43,1.98-4.43,4.43v34.08h13.82v-15.33l14.68,24.25h9.78c2.45,0,4.43-1.99,4.43-4.43V2.29h-13.81v25.37Z"></path>
                <path d="M37.35,2.29c-2.43,0-4.41,1.97-4.41,4.41v21.29c0,4.83,0,10.84-6.87,10.84s-7.07-6.01-7.07-10.84V6.7c0-2.44-1.98-4.41-4.41-4.41h0s-10.13,0-10.13,0v28.94c0,13.08,7.14,19.36,21.54,19.36s21.47-6.28,21.47-19.36V2.29h-10.13Z"></path>
              </g>
              <path fill="#0284c7" d="M65.64,2.29l7.6,35.73-7.61-12.57V2.29Z"></path>
              <path fill="#38bdf8" d="M51.82,43.75v1.53c0,2.45,1.98,4.43,4.43,4.43h9.38v-5.97h-13.81Z"></path>
            </svg>
          </div>
          <span class="hidden sm:inline-block bg-[#0284c7]/30 text-sky-300 border border-sky-400/30 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider">MENDOZA</span>
        </a>
      </div>

      <!-- Categorías de Navegación -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 overflow-x-auto whitespace-nowrap text-[13px] font-bold tracking-wider uppercase">
        <a href="#" class="px-2 py-1 text-white border-b-2 border-sky-400 transition-colors" data-path="portada">PORTADA</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="mendoza">MENDOZA</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="politica">POLÍTICA</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="economia">ECONOMÍA</a>
        <a href="#" class="px-2 py-1 text-white hover:text-white transition-colors" data-path="ovacion">OVACIÓN</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="policiales">POLICIALES</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="sociedad">SOCIEDAD</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors" data-path="opinion">OPINIÓN</a>
        <a href="#" class="px-2 py-1 text-white/80 hover:text-white transition-colors flex items-center gap-1.5" data-path="mam">
          <span class="">MAM</span>
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
        </a>
      </nav>

      <!-- Lado Derecho: Búsqueda, Acceder y Botón Suscribite -->
      <div class="flex items-center gap-3 shrink-0">
        <button aria-label="Buscar noticias" class="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-[20px]">search</span>
        </button>
        <a href="#" class="hidden sm:inline-block text-white/80 hover:text-white text-[13px] font-bold px-2 py-1 transition-colors">Acceder</a>
        <a href="#" class="bg-white text-gray-950 hover:bg-gray-100 font-bold text-[12px] tracking-wider uppercase px-3.5 py-1.5 rounded-md shadow transition-colors whitespace-nowrap">SUSCRIBITE</a>
      </div>
    </div>
  </div>
</header><main class="w-full bg-surface-desktop pt-24" id="main-content"><div class="w-full max-w-[1360px] mx-auto px-margin py-space-xl"><div class="flex flex-col w-full gap-space-xl">
<!-- 1. BARRA DE ALERTA / COBERTURA EXTRAORDINARIA (MuyDestacada / Live) -->
<section aria-label="Cobertura Extraordinaria" class="w-full bg-surface-card rounded-lg shadow-md overflow-hidden">
<div class="px-space-lg py-space-sm flex items-center justify-between bg-text-primary">
<div class="flex items-center gap-space-sm">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red-pulse opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-accent-red-live"></span>
</span>
<span class="font-cabezal text-cabezal text-on-tertiary bg-accent-red-live px-space-xs py-0.5 rounded font-bold uppercase tracking-wider">EN VIVO</span>
<span class="font-cabezal text-cabezal text-surface-container-high tracking-wider uppercase">COBERTURA EXTRAORDINARIA • URGENCIA REGIONAL</span>
</div>
<div class="flex items-center gap-space-xs text-surface-container-high font-data-mono text-data-mono">
<span class="material-symbols-outlined text-[16px] text-accent-red-live">podcasts</span>
<span class="">Mendoza • Transmisión Simultánea HD</span>
</div>
</div>
<div class="p-space-lg grid grid-cols-12 gap-space-lg bg-surface-card"><!-- Horizontal 16:9 Video Player -->
<div class="col-span-12 lg:col-span-8 flex flex-col gap-space-md">
<div class="relative aspect-video w-full rounded-lg overflow-hidden bg-surface-dark group shadow-sm">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Cinematic telecast broadcast frame of an empty modern television news studio set with curved video wall and glossy anchor desk." style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDX5HvE9m2mZlYyp7Ks8Ows5et6LlQcqv4bok5iQhMBAOB0vcM409JOFSAap5Eez1KIdXoSq8GptlkFaxqZySSYAybn1ufW4SOxR00OAHaK5okaelJWeeVBvugJASYoJIdssiG2by1HL0XnliHzkFjunpTNm--v8mQPch8q34RAwQQ9nQATdxggN3GpoIqTL4bVbeT8IOOCuAUgeov8se2qZtFihegWBGsutfoc0wtxJbPmJx1kyeCr&quot;);"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/85 via-surface-dark/30 to-transparent"></div>
<button aria-label="Reproducir video en vivo" class="absolute inset-0 m-auto w-16 h-16 rounded-full bg-surface-card/90 text-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
<span class="material-symbols-outlined text-[36px] ml-1">play_arrow</span>
</button>
<div class="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-on-primary">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-[20px] cursor-pointer">volume_up</span>
<div class="w-32 h-1 bg-surface-card/40 rounded-full overflow-hidden">
<div class="w-3/4 h-full bg-primary-container"></div>
</div>
</div>
<div class="flex items-center gap-space-md font-data-mono text-data-mono">
<span class="bg-surface-dark/60 backdrop-blur-sm px-space-xs py-0.5 rounded">1080p 60fps</span>
<span class="material-symbols-outlined text-[20px] cursor-pointer">fullscreen</span>
</div>
</div>
</div>
<div>
<h1 class="font-headline-xl text-headline-xl text-text-primary hover:text-primary transition-colors cursor-pointer leading-tight">
Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
</h1>
<p class="font-bajada text-bajada text-text-body mt-space-xs">
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
</p>
<div class="flex items-center gap-space-md mt-space-sm font-byline text-byline text-text-muted">
<span class="flex items-center gap-1 text-[11px] font-bold text-primary uppercase"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> REDACCIÓN DIARIO UNO</span>
<span class="">•</span>
<span class="font-data-mono text-data-mono">EDICIÓN ESPECIAL</span>
</div>
</div>
</div>
<!-- Right Column: 2 Related Urgent Stories con volantas azul institucional y sin horas -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-space-md justify-between bg-surface-subtle p-space-md rounded-lg">
<span class="font-cabezal text-cabezal text-primary uppercase tracking-wider flex items-center gap-space-xs font-bold">
<span class="material-symbols-outlined text-[16px]">bolt</span>
FOCO DE COBERTURA
</span>
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-card p-space-md rounded-lg shadow-sm">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">Vialidad Provincial</span>
<h2 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
</h2>
<p class="font-body text-body text-text-muted">
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
</p>
<span class="font-data-mono text-data-mono text-text-muted mt-space-xs">Corredor Bioceánico • Cobertura en desarrollo</span>
</article>
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-card p-space-md rounded-lg shadow-sm">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">Mendoza & Región</span>
<h2 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
</h2>
<p class="font-body text-body text-text-muted">
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.
</p>
<span class="font-data-mono text-data-mono text-text-muted mt-space-xs">Conferencia Oficial • Paso Internacional</span>
</article>
</div></div>
<!-- Transition banner to standard day routine -->

</section>
<!-- 2. APERTUM (Apertura ordinaria diaria) -->
<section aria-label="Apertura del Día" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span><h2 class="font-cabezal text-cabezal text-white font-bold uppercase tracking-wider text-[12px]">APERTUM • APERTURA DEL DÍA</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">EDICIÓN CENTRAL</span></div>
<div class="grid grid-cols-12 gap-space-xl items-center">
<!-- Foto Izquierda 4:3 -->
<div class="col-span-12 lg:col-span-7">
<div class="relative aspect-[4/3] w-full rounded-md overflow-hidden group shadow-sm bg-surface-track">
<img alt="Casa de Gobierno de Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High angle view of Casa de Gobierno de Mendoza and Civic Park on a bright sunny day with the snow-capped Andes mountains in the distant background, crisp editorial daylight photography style with subtle blue color grade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGj0kYKovdAvcCqrt7yVx5n_MbVUMsxyrbNDkza9gCcy0NcfzByFpXnMQvHxw4VOfewR7URDPyXgzSFY4JC-pVwwVZAe_Y3s0q5QK0Zla4QZDIq8XZ4PQOXTe5_QCFTBPbhCIqwZfyFBq4t3OM4zsuumlq4t3hd8eYPi7PoZAOXGj8ZjaqRCB-rjGPilcfD8Veb6DLjrX5tKJpbPUPo39jMTwtV9Cou-XiDGh2IPiRcBraH1Z_cLj7">

</div>
</div>
<!-- Texto Derecha -->
<div class="col-span-12 lg:col-span-5 flex flex-col gap-space-sm"><span class="font-byline text-byline uppercase text-primary font-bold tracking-wider">
DECISIÓN ESTRATÉGICA REGIONAL
</span>
<h2 class="font-headline-xl text-headline-xl text-text-primary hover:text-primary transition-colors cursor-pointer leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
<p class="font-bajada text-bajada text-text-body">
Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div class="bg-surface-container-low p-space-md rounded-lg mt-space-xs flex flex-col gap-space-xs">
<span class="font-cabezal text-cabezal text-brand-deep uppercase">Claves de la resolución ministerial:</span>
<ul class="font-body text-body text-text-body flex flex-col gap-1 list-disc list-inside">
<li class="">Licitación pública de 14 compuertas automatizadas telemétricas en mayo.</li>
<li class="">Incentivos fiscales a fincas con tecnificación de riego por goteo certificado.</li>
<li class="">Monitoreo de glaciares satelital conjunto con IANIGLA-CONICET.</li>
</ul>
</div>
<div class="flex items-center justify-between pt-space-xs font-label-meta text-label-meta text-text-muted">
<span class="flex items-center gap-1 text-[11px] font-bold text-text-primary uppercase"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> RODOLFO CAVAGNARO</span>
<span class="font-data-mono text-data-mono text-primary font-bold">INFORME ESPECIAL</span>
</div></div>
</div>
</section>
<!-- 3. PRINCIPALES (Noticias Destacadas - Grilla Desktop 6 notas) -->
<section aria-label="Principales Noticias" class="w-full flex flex-col gap-space-md">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase tracking-wider font-bold text-[12px]">LEGIONARIUS • NOTICIAS DESTACADAS</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">AL MINUTO</span></div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"><article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Vendimia y Cosecha Malbec" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDru6_2m11I2k_IDWEBqGPupoNvs51RmSyco-a-XoV_7Lyho6mM34Fm0idZdyzxEtwgN-ACH7431JZQGGlEbtPByVP5tKBx3IYV3cKUAjhn3uf4m4r52_8xQOM1NfO90WvcHt9w-7s2oaAN14HkJt1xJXj5thDN7vbe39nTqaj9bynweETAaBTe-xYlzvQI1N4lrcUiVmrIKHzApG4YZp8EdkmfR1-eARS4x8M-IY-vqULrant5G3_r"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> MARÍA JOSÉ LUCERO</span><span class="font-data-mono text-data-mono text-primary font-bold">PRODUCCIÓN</span></div></div></article>
<article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Metrotranvía Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Gt4J01hdCVt4QiJl2ncE006qUOpptd1KUfMXSaNu6wSiplYg_buODJ-_lfM75_6BJO8C8j6a_I9EChe2LQ4dcXuVQa_M15WrnYjXgIcWjb-l1JRzK2-EQnke8w_KGrZlLgtGcsn3jcnpVuvVh19HY5siN4KMGbYvnxLTtXshuG2lKqPhvD3FU5ZJtz1BhLqTal4LM0i6QvcwqlmeRCKKuH8vGHeqPuUUhQZla2_d0iaYN2OTlQFx"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> IGNACIO DE LA ROSA</span><span class="font-data-mono text-data-mono text-primary font-bold">INFRAESTRUCTURA</span></div></div></article>
<article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Investigación médica UNCuyo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-St004_5wvgkUCZqgKnZTlKSQfpaEvKK3KCSnTtPLZrKd5ZX35zdjjyQZTSkHkM9bj4TDSTuBUVBG4BgvmN8LFbQ191EfWRHlpNKJfum8jK3kzfsLEMV-I7rmMM1P0gRSF2IaHNXybDs7fVKPyFwa2ZdwlxJEOwyFBypq8pol-P0YR7sxbbMu_nZBjmWFw6DNlUqR3l5hjcOfZgeKN4avyec1Pg9unMoUB-M3nq95k2zZEEnfiiG1"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> VALERIA CASAIS</span><span class="font-data-mono text-data-mono text-primary font-bold">CIENCIA</span></div></div></article>
<article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Foro de Inversiones Cuyo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI-Oo1LyB229drMNuQFzlaLZRasCuNwtGsi00lQ5EEPkV2hps2lHX48KXckvxUh3bZdKmlAJ7UnbCS5ahQW1RE5h5UJy9gJQuaPvDmZJgTI0RDMxeGlFAf6WchJzPDdquBctYGwhiKid7gq55MKCigDLP6QOxuFDBKx3My3rXUjGM3sWWyZJ25DSFfu2hLZnAnetoqqn9sEC1f4u7Wv6sc9cBE8m7rL4RGcDK-r-nG6odK9XOrzDIR"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> FACUNDO GARCÍA</span><span class="font-data-mono text-data-mono text-primary font-bold">ECONOMÍA</span></div></div></article>
<article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Teatro Independencia Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAux9PsIRtesbmgjF6msmskzlt_-RX70ZT_YE039pX06yCTI2LT3K-xCbY3ksobvvNPbTGUaBxlTxTIYDV3dJKL9nDi6UA0izDETW-RX24oHkVzVPVp1E0OI_FOOfZXNuC5WQSXQld67M8JQf2tjPSSbjG6L_xB-fwBkmj-SW5L8tKgvuie-O1JivG1iy6ehD8DF0cwJpJE2thT0aOyb97kCjGIr7oO-FfmOCC65R9cfgbR1JnTabym"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> CECILIA CORONA</span><span class="font-data-mono text-data-mono text-primary font-bold">CULTURA</span></div></div></article>
<article class="bg-surface-card rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"><div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-track"><img alt="Turismo Aventura Potrerillos" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjsRVoj3RejAg102GiNJejTdsY1TN_C-qeMN0K-rmA6-xjav6aBfdB4TGpvGYYEnVHnzbtXdnc75XiV-HAluvzL4F0pYSHIvuhIeYxUUCP5ZAO6Ro7ASepVwNEKu6q52qGlGCFu_9ddqZGN8Pz21IkvGNM2vUAQhJU1KCcIdAvaZKvDMDJXwMywLZNhPRneTZhwLZD8CEHLk2zNKbCsXR1pdDlK3cvC5LB-EppGyOc0RLY181YXyP"></div><div class="p-space-md flex flex-col justify-between flex-1 gap-space-xs"><div><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Nam libero tempore cum soluta nobis est eligendi optio cumque nihil</h3><p class="font-body text-body text-text-muted mt-space-xs line-clamp-2">Impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor.</p></div><div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between items-center"><span class="flex items-center gap-1 font-bold text-text-body"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> GONZALO ARROYO</span><span class="font-data-mono text-data-mono text-primary font-bold">TURISMO</span></div></div></article></div>
</section>
<!-- 4. CARRUSEL MAM (Videos Verticales 9:16) -->
<section aria-label="MAM Contenidos en Video" class="w-full bg-surface-dark text-on-tertiary p-space-lg rounded-xl shadow-lg"><div class="flex items-center justify-between pb-space-md"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-[24px] text-accent-red-live animate-pulse">videocam</span><span class="text-white font-black text-[22px] tracking-wider font-cabezal">MAM</span><div class="h-4 w-[1px] bg-outline-variant/40 mx-1"></div><h2 class="font-card-title text-card-title text-white uppercase tracking-wider font-bold">CONTENIDOS EN VIDEO • HISTORIAS EN PRIMERA PERSONA</h2></div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs1rIJJD7dHTmjCi88U-xC1SuQ52mRGR14uj1LZy7N1lmTno-5vtrwoUqoBnA_kWDvJL5uZMf22Lp_l2Jk2NKg2r6bP_9qDyiwmiKsWi6ko5EQBcAer8iqSIxjvCoToX7CFEoQssQjv7EDjeBzLyYWhhurmddlHEha6aIE6uJ1UXe-SmNKA4WNis_CaRqIlZZrSopa41f4GAU_WZvM5okKir0ZQa5SIcvADJOX--JP5k1kIjy7_Y4W')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:45</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Lorem ipsum dolor sit amet consectetur adipiscing elit</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3md92Y3XkdN27d0hQYyEDCUgxd3HgDm-yTFWV83I_FteLaNGxHba8PdyqmMuAbhm75pel3pXYIHfBpBkHEkHwOko_G1CtT-9Av3ZL1LIDDSkrlig6ZwPKYPYl5PihvdYkX15WQjlkhZK0xM_8uoqJ3Vs8nvm70crq6q0uJ1ez3E5Sf9Ol1UhjgYyQQG297EU7zpM5lNT5DnIF0ff7tMHRiQD2FzblSnBakDaYoJ_jCqW-RDl1E_M_')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">02:10</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Sed do eiusmod tempor incididunt ut labore et dolore</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeZsAZPh4_F1yGt5aV_Cm-Yk1-O4-dfxqPUH1Ob3zBzMu9rEGdSz1Hf1XZiIy8e9H1MLvz8PnjPK91Ywr6aIR3KCpbz-nfvNZGByJdg4l4OCbOQN9RH7aSU_Yx0D4IOWq2J9uPCnb2bfDtvzavT97Osvm9KKMcND5jcmOmxG6nfo-3It3HQKuTOhIEKAJOVNqxTeSDteekHupCCLqvhWhW7pWKGT-1QxU4YzWpZJb4Yy8NTbSaRZ2_')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">00:58</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Ut enim ad minim veniam quis nostrud exercitation</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQvMEIH1OK9_co4oK8oA2BE7p59ULvJddzBaPZrc8Xh5YfipFBVeGjwostvhcPUmRMLNZw_eTMwR4oQPD_E-qc6uH19iFk0YMpDjw7XMxMrYUZv0ySU1ps25wGNvmhkbqKpAhCTLK0T92vPjvuxfFi6fL1O0CjvS9yIZ0zUK0KH-Z5mP93TQcoOIjgVxij2wAOHDgMFRxH2WTwgD4fx1bT_vjuhAQ0Q0v1xPpRY4r7XIuEYw2Rhhie')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:30</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Duis aute irure dolor in reprehenderit in voluptate</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwKOFaA9PyeP66VWb1kOCERvJYrd9Q2tlTiyQeDEtEtgM5Qo197Njg1M97AJ81Tf9MMp7Wn3Puk4PaZrAistMHcdZnzC87h21y321bTYgwOcvsF-VBP82Hx8uxgNCq3EiHuCvY3eghFxlIlK1LqEOXcFVO4diudQ62GDIcNXGHduNZzzQAEduRS_tljWAwo-wkFZ4OzflGJh06kdywsBaif4ZlH5c-Qf_3CH3ylG3MunrQFhbg8ZEK')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">02:04</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Excepteur sint occaecat cupidatat non proident</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcZM-3j-JejHXvV0HTv8zYDrH3M14_A-ooeiYNp9I9HtKLXZXpW_Z_Dpph3So8-W4VZyMnvmezSZa4alyo4iaTxWxH-C_1hVAwly_Ql3kzZMtlUEGBEIyy3_XIL1aDf-77Zj6tsO9jbyDiIiIfmUVSGXhFZblXtrmSGYYBpv6l0MN6O_kwz38yPKNlZG0M4SqVVdtyJlqDE_26D28pjPZMjuwfiSBTdGpV-sEEvamjLm9cEMHdzZc9')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:33</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Sunt in culpa qui officia deserunt mollit anim id</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOQ3jYrXzecQ9BjakYTc2r2HeNl2NDscHcmBSS9fIY7KRKOq1IqR1ib_NpxdBXGp8t9fx3EECZCevAb9uGSaqYp4ODZRRfmY4fx-2mXE86X60-ooyOWe9zEGVxevHOW2UlD_nHkObYpLA_7McP76qTI4iKCdpHIcAuP6SMOUr-CiE-xtwLj8uVXcjaQo-FxvoAatpBOUh5DYrgV5yAvzgOZ9Ir0JZ0kTcoDPvO7Xy5yfubI8T3dEJM')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:46</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Laboris nisi ut aliquip ex ea commodo consequat</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIHDxaq_X3QDpgEcGesbxqQ975VB9A71IIJ65Nmd6G7xbD4cNYrPyjaKdPmPpYL03azJmJ2TflkrzzlF2MYL4VwfmIuTsEFs4iOIvThb54lkJ9okg16aMyt1HWVlLSZx_joWQ9ONOlTM2gz2rbCU1SuUd5RGalN4mEcNDZpIoA21uvTWwCiJNTQzvuXNXe7ikVDXty7WP0-JIHkmUW2Pgr-t3dbih2BdqgxdXHxKg_EA0eEifF6G8I')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">00:54</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Voluptate velit esse cillum dolore eu fugiat nulla</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl5P7wFAaFY_6nP1eNkt-bp9ITX4zKlUudtQIpaDKB1NMZj1WWAykP7LMBaBTqMc7ZSalXte5zNVQlwsrnaRrYYWrUHAvst9bD7ScTQLdUP1SSHcHG2leQtaYqd3SxhEXzYBapL5lFiRG88umQRAAsFlWy114udsHkyVG6D4c70WvnsSwOhCaXXLnq9wyzDjIuGZPYDHpNmyka84vObEBCINXnJ2Tx8Ae1XqI3GTM6g3s-T4cKc7eS')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:18</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Pariatur excepteur sint occaecat cupidatat non</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOsO0d2ttC1htOg1fgWqUKaE_iaMC0fvPJDbHS26ctLlWpPC6rIkvarSSUabLoM8OrEkT7qNj7mFW_3N9Jv0HdTSD8b6yRvmQizQMhn0QjpNA3X-8YayhMuaxoZEHmWD-pdOWwzoim8InUVzS9jrFqmL38DsnHDWuSa7CDzJhfGU6ZgDqHxCCEulzCP2q-0ClRi2E3EAdioo62ANRpMHUtIi3m9k5geYTw_nwPIhfFv5lPbdGDNYSG')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">02:25</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Proident sunt in culpa qui officia deserunt mollit</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmf0pxT92Rqe3JCda27a1l3nTk1ToG-mRuYaoFB7hIn3ZqqZ6FL_II2w8BP42bjGVtRUrWcNm8y5pRPKnLwxGY_4TmX2sMyFhDL_nRFYt0pt_O7sxz8Qzqzh4k2f45oSS1F3T32ZPArGpQxExqjdrUh6sNdMISQ1jdbZmvbq9akHb_DzKl0ia_ZGh3eRfZZFVsO8CXqt9idPna4pcqI7RhuVLVijwIbNyieyAI-LI6Jhk2msmjPCTg')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">00:49</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Totam rem aperiam eaque ipsa quae ab illo inventore</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSdjYSxbDEJtJqC-FGONX-343vat5hTCWDJ-zIxoWMi9X4CP-Xv9WvznVuS0ScL72fTcPIzQrcuNC_Uy7fnaZavUKNZYeCYUvMhjlNvnu5XDpHfxK3G2tVQlxtNYNGELqCZGfVGKpvK3CEbmiSowfQeaPwo4RKx8FiZZYfHokY4fFsclasOi32eFLinyawzBC61nL6IeVmXicjV2MD57QGzkO_s0dY3cxbKA63J74W2CMZSvRtPkVt')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:12</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Veritatis et quasi architecto beatae vitae dicta sunt</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5JTU0gjWtalw3NuHp-DXLOzlsB5NYzauwKdhYvXwTTrrz4ZOH_sY4AXHhn88dzbK1tl5fKe3Yc1fXfHvi0PwDAOUgllsTRne4uc7SmgnpPvcKacCVbfmaOkDxWJBk9DVR_XgRuAdAsPkGJyzFuzuH-VbX_nZnN-FBMa93Uw2jLJYJCRmVbJOUb3OkUb7c1Ou2XzZjRjxkcMWF4gPloTTacg1_9A00iZL3_5ArBiGNgz6e61korM3s')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">02:40</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhRBKkK10FCQ3WHa2JoiFAOTanzVeRusQaL10JyY5XiMel1BTKieCkY9sEsSIXWH7u5faX4mVnDOlNlIMZY2uFXTdl9C6W4vDoXkcj9-r_fb89XtpFrJYNmc63PWVderTQVP_8cH7SarF85p8vfpn7quAcB8ZeQWgqPlk5vVO6z4vXlAExcoPKsewdS8ZLyS-dROeNsJ_wWpPe-dAXKqOohUGxu5Zy2hMbvUATqg5EH0zVAQVgpNYz')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:05</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Aut odit aut fugit sed quia consequuntur magni dolores</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-inverse-surface shadow-md"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoMTgd1RVLb4VjC1l3PkAaAPrbJmlZyhnjfAe6RgMHs2FK2S5FcDcx-bLJmaouy8ECPNj6RlmJ1GvJ8p0oDllhNERCXnqbpp-Mimz_60dx-7WVmgRryZtC4LWaZFBYryoAkBI4MXpW27_8vgcqXK0HD8I6KDTIazN1VMEN4r54XZsUVWpaxGf1L0lLhR4Jn4_0EEn_E8ypgzzsaMSV3x7WX_czQ3x31pXUgig3OY9yhTzikziAa7VC')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-surface-dark/40"></div><span class="absolute top-2 left-2 bg-surface-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-on-tertiary font-data-mono text-data-mono">01:50</span><div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50 shadow-md group-hover:scale-110 transition-transform"><span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span></div><div class="absolute bottom-3 left-3 right-3"><p class="font-card-title text-card-title text-on-tertiary leading-tight line-clamp-2">Eos qui ratione voluptatem sequi nesciunt neque porro</p></div></div></div></section>
<!-- 5. POLÍTICA (Arquetipo A: Principal 60% + Listado 40%) -->
<section aria-label="Sección Política" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">POLÍTICA & GOBIERNO</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">LEGISLATURA Y PODER EJECUTIVO</span></div>
<div class="grid grid-cols-12 gap-space-xl"><!-- Columna Principal (60% -> col-span-7) -->
<article class="col-span-12 lg:col-span-7 flex flex-col gap-space-md group cursor-pointer">
<div class="relative aspect-[3/2] w-full rounded-md overflow-hidden bg-surface-track">
<img alt="Legislatura de Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Mendoza provincial legislature session in the neoclassical chamber with senators deliberating and press cameras filming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBunHUk1wJAsdLE4AyhPMnruucpPR0hK57o6GAkhQRVoODal9wWVUWil1_m8slZTWznfgUhnRUHeJM6yCUF65kVvUdJWff44psuQDoUBV-ls74rtI0UmGAmas37NuKfUPBNnc29oUWw8ifYadUD8Mrnv8LzPK54SYqamawbWEVsVNBouIxVq33FpDsD6eQFuAIri5Oj41ktLCbHSATRR4Ntnri4G3mS5IL9ohpx3UXxsDQPveD-P5Q8">
</div>
<div class="flex flex-col gap-space-xs">
<h3 class="font-headline-lg text-headline-lg text-text-primary group-hover:text-primary transition-colors leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna</h3>
<p class="font-bajada text-bajada text-text-body">
Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
</p>
<div class="pt-space-xs flex items-center justify-between font-byline text-byline text-text-muted"><span class="flex items-center gap-1 font-bold text-primary uppercase text-[11px]"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> PABLO PÉREZ</span><span class="font-data-mono text-data-mono text-primary font-bold">POLÍTICA CENTRAL</span></div>
</div>
</article>
<!-- Columna Lateral (40% -> col-span-5): 4 notas con miniaturas -->
<div class="col-span-12 lg:col-span-5 flex flex-col justify-between gap-space-md">
<article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors">
<img alt="Conferencia de Gobernación" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" data-alt="Mendoza Governor giving a press briefing alongside mayors at the provincial government palace press room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9zrQODWF0VcGl1Pi2PvAH4KHQPtYs7PgcfEOypfcWEiFtctx7bsiCKRl8pH5v_pKRopAAxxFx1XqTdBUjrorbRBchZgsbakoI_DuQpGLz93KWQZbmpqBPiIKFJH1LTpDCpJGKKKLBiy_kELP4mfK16nOD05p-1NNGVOwrqPv0brZalaxS37Rbv-0cWLvgtSvykrnkFaO8ujjQyf-Mu-gRwTpe-kz_opzgaw4l-QT1Bv17bNTvn-F">
<div class="flex flex-col gap-1 min-w-0">
<span class="font-byline text-byline text-primary uppercase">COPARTICIPACIÓN</span>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Lorem ipsum dolor sit amet consectetur adipiscing elit
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Capital y Guaymallén</span>
</div>
</article>
<article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors">
<img alt="Congreso Nacional Cuyo" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" data-alt="Argentine congressional national seal in Buenos Aires during a budget commission committee meeting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdbOAmIJ3znS-FBdoCOdr9YWdQYZgsYYMFzTAdBlGKJkObtbcLkxkKltsMva7myILaqONOPrzoBIe-M6XEvoHuA48gXZTQcuKABmHN4d39KJj8LXpf68WylIpIoV6sa9ElsqIp8RpF3FVq4n6WaAQSXThdNNzvVTV-PlowJcVwmCCgotDQGBxkQ06wJmmgjSMAoqKHfthfnFCbdjleaZuZ2GUbYyn9ma5I-LHKNfNWJSxUBNqI2tFF">
<div class="flex flex-col gap-1 min-w-0">
<span class="font-byline text-byline text-primary uppercase">CONGRESO NACIONAL</span>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Sed do eiusmod tempor incididunt ut labore et dolore
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Encomienda arancelaria</span>
</div>
</article>
<article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors">
<img alt="Suprema Corte Mendoza" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" data-alt="Judicial court of appeals palace in Mendoza city with lawyers in suits walking up the marble stairs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtCPkYgSV-wOjeNjnzy9gNKW6d0gEB-AgsaYMjvGdH86FBd2AGUeBYNEqBsufmDPwzqCyuS68RYp2ge7BOp0MNpsvgv5dkoOa_oeBej_r2wGHNxy4yucvYOoemRRNm0VvU1Pqg0yqpA4u45XfdRhwhdbQIhHuIHcaUAsPhp9rjgb2ItZkAw1BJWrtd-XANWGkISPK0fz-XlG98WnFuHpaM3XUJV31735K-2sQImCpmKdtPuyYDPeV-">
<div class="flex flex-col gap-1 min-w-0">
<span class="font-byline text-byline text-primary uppercase">PODER JUDICIAL</span>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Duis aute irure dolor in reprehenderit in voluptate velit
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Modernización del Estado</span>
</div>
</article>
<article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors">
<img alt="Concejo Deliberante Godoy Cruz" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" data-alt="Municipal council hall in Godoy Cruz Mendoza with civic neighborhood representatives presenting eco-urbanism initiatives." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHJf14VhUDP5FRgpqTXQ8Lvtp7vUu1dltVuWmKsuyB0Sjb-TMyHmbmMJHOUyCGLxTN0DY3QGR-y_1WFD5ZsKdvkdTbBR4WLMQqTECRgqPGBJ9XnCVJCNOTF7zSEpLQjVYukZVgZmCg-0n40vgXUV8cAyhae4mUrE7GtwisAUZIivJmzE-NfLbq_W_RcFuwrKhvRH_Ig57-GGTeNx25efRl94S9nUAkX07xN1-bEGQfgLMTXdL8uJf9">
<div class="flex flex-col gap-1 min-w-0">
<span class="font-byline text-byline text-primary uppercase">MUNICIPIOS</span>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Excepteur sint occaecat cupidatat non proident sunt in culpa
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Agenda Sustentable</span>
</div>
</article>
</div></div>
</section>
<!-- 6. YOUTUBE SHORTS (Carrusel / Grilla 9:16) -->
<section aria-label="YouTube Shorts Diario UNO" class="w-full flex flex-col gap-space-md">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm border-t-2 border-accent-sports"><div class="flex items-center gap-space-sm"><span class="bg-tertiary text-on-tertiary px-2 py-0.5 rounded font-bold font-data-mono text-[11px] flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">smart_display</span> SHORTS</span><h2 class="font-cabezal text-cabezal text-white uppercase tracking-wider font-bold text-[12px]">CANAL OFICIAL DE YOUTUBE @DIARIOUNO</h2></div><div class="flex items-center gap-space-md"><span class="font-data-mono text-data-mono text-tertiary-fixed-dim font-bold hover:underline cursor-pointer text-[12px]">Suscribirse al canal →</span><div class="flex items-center gap-1"><button aria-label="Anterior" class="w-7 h-7 rounded-full bg-inverse-surface hover:bg-surface-variant flex items-center justify-center text-white transition-colors cursor-pointer"><span class="material-symbols-outlined text-[18px]">chevron_left</span></button><button aria-label="Siguiente" class="w-7 h-7 rounded-full bg-inverse-surface hover:bg-surface-variant flex items-center justify-center text-white transition-colors cursor-pointer"><span class="material-symbols-outlined text-[18px]">chevron_right</span></button></div></div></div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
<!-- Short 1 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical portrait frame of extreme downhill mountain biking on the dry red dirt slopes of Chacras de Coria Mendoza with dust kick-up." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcZM-3j-JejHXvV0HTv8zYDrH3M14_A-ooeiYNp9I9HtKLXZXpW_Z_Dpph3So8-W4VZyMnvmezSZa4alyo4iaTxWxH-C_1hVAwly_Ql3kzZMtlUEGBEIyy3_XIL1aDf-77Zj6tsO9jbyDiIiIfmUVSGXhFZblXtrmSGYYBpv6l0MN6O_kwz38yPKNlZG0M4SqVVdtyJlqDE_26D28pjPZMjuwfiSBTdGpV-sEEvamjLm9cEMHdzZc9')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            ¡Descenso al límite en Chacras! Pura adrenalina en los senderos mendocinos
          </p>
</div>
</div>
<!-- Short 2 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical shot of an open-air barbecue asado in Mendoza with large beef ribs sizzling over glowing vineyard wood embers." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOQ3jYrXzecQ9BjakYTc2r2HeNl2NDscHcmBSS9fIY7KRKOq1IqR1ib_NpxdBXGp8t9fx3EECZCevAb9uGSaqYp4ODZRRfmY4fx-2mXE86X60-ooyOWe9zEGVxevHOW2UlD_nHkObYpLA_7McP76qTI4iKCdpHIcAuP6SMOUr-CiE-xtwLj8uVXcjaQo-FxvoAatpBOUh5DYrgV5yAvzgOZ9Ir0JZ0kTcoDPvO7Xy5yfubI8T3dEJM')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            El secreto del mejor costillar a la llama con leña de sarmientos
          </p>
</div>
</div>
<!-- Short 3 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical portrait of queen candidates for National Grape Harvest festival wearing traditional royal cloaks and crowns in Mendoza." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIHDxaq_X3QDpgEcGesbxqQ975VB9A71IIJ65Nmd6G7xbD4cNYrPyjaKdPmPpYL03azJmJ2TflkrzzlF2MYL4VwfmIuTsEFs4iOIvThb54lkJ9okg16aMyt1HWVlLSZx_joWQ9ONOlTM2gz2rbCU1SuUd5RGalN4mEcNDZpIoA21uvTWwCiJNTQzvuXNXe7ikVDXty7WP0-JIHkmUW2Pgr-t3dbih2BdqgxdXHxKg_EA0eEifF6G8I')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            Las reinas departamentales desfilan en la Vía Blanca 2026
          </p>
</div>
</div>
<!-- Short 4 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical view of a packed soccer terrace with fans waving blue and red flags and smoke flares at Malvinas Argentinas stadium in Mendoza." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl5P7wFAaFY_6nP1eNkt-bp9ITX4zKlUudtQIpaDKB1NMZj1WWAykP7LMBaBTqMc7ZSalXte5zNVQlwsrnaRrYYWrUHAvst9bD7ScTQLdUP1SSHcHG2leQtaYqd3SxhEXzYBapL5lFiRG88umQRAAsFlWy114udsHkyVG6D4c70WvnsSwOhCaXXLnq9wyzDjIuGZPYDHpNmyka84vObEBCINXnJ2Tx8Ae1XqI3GTM6g3s-T4cKc7eS')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            La fiesta de la hinchada de la Lepra en el Gargantini: euforia total
          </p>
</div>
</div>
<!-- Short 5 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical view looking down into the deep turquoise waters and concrete spillway of the Carrizal dam reservoir in Mendoza under bright sky." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOsO0d2ttC1htOg1fgWqUKaE_iaMC0fvPJDbHS26ctLlWpPC6rIkvarSSUabLoM8OrEkT7qNj7mFW_3N9Jv0HdTSD8b6yRvmQizQMhn0QjpNA3X-8YayhMuaxoZEHmWD-pdOWwzoim8InUVzS9jrFqmL38DsnHDWuSa7CDzJhfGU6ZgDqHxCCEulzCP2q-0ClRi2E3EAdioo62ANRpMHUtIi3m9k5geYTw_nwPIhfFv5lPbdGDNYSG')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            ¿Cómo está el nivel del Embalse El Carrizal hoy? Mirá el sobrevuelo
          </p>
</div>
</div>
<!-- Short 6 -->
<div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm">
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Vertical shot inside an olive oil mill in Maipu Mendoza with cold-press golden extra virgin olive oil pouring smoothly into glass bottles." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmf0pxT92Rqe3JCda27a1l3nTk1ToG-mRuYaoFB7hIn3ZqqZ6FL_II2w8BP42bjGVtRUrWcNm8y5pRPKnLwxGY_4TmX2sMyFhDL_nRFYt0pt_O7sxz8Qzqzh4k2f45oSS1F3T32ZPArGpQxExqjdrUh6sNdMISQ1jdbZmvbq9akHb_DzKl0ia_ZGh3eRfZZFVsO8CXqt9idPna4pcqI7RhuVLVijwIbNyieyAI-LI6Jhk2msmjPCTg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
<div class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center border-surface-card/50">
<span class="material-symbols-outlined text-on-tertiary text-[28px]">play_arrow</span>
</div>
<div class="absolute bottom-2.5 left-2.5 right-2.5">
<p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">
            El oro líquido mendocino: proceso artesanal de prensado en Maipú
          </p>
</div>
</div>
</div>
</section>
<!-- 7. SERVICIOS (Redistribuido Desktop: 4 bloques interactivos) -->
<section aria-label="Servicios y Estado del Tiempo" class="w-full bg-surface-card rounded-lg shadow-md p-space-md"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-[18px] text-primary-fixed-dim">dashboard_customize</span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">SERVICIOS CIUDADANOS & ESTADO DEL TIEMPO</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">DATOS EN TIEMPO REAL</span></div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
<!-- 1. Clima Mendoza -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">CLIMA MENDOZA</span>
<span class="material-symbols-outlined text-status-alert text-[28px]">sunny</span>
</div>
<div class="my-space-xs flex items-baseline gap-space-sm">
<span class="font-display text-headline-xl font-bold text-text-primary">24°C</span>
<span class="font-label-meta text-label-meta text-text-muted">Sensación: 25°C</span>
</div>
<div class="flex flex-col gap-1 font-data-mono text-data-mono text-text-body">
<div class="flex justify-between">
<span class="">Máx: 31°C</span>
<span class="">Mín: 17°C</span>
</div>
<div class="flex justify-between text-text-muted">
<span class="">Humedad: 48%</span>
<span class="">Viento Zonda: No previsto</span>
</div>
</div>
<div class="mt-space-xs pt-space-xs text-primary font-label-meta text-label-meta cursor-pointer hover:underline">
          Pronóstico extendido 7 días →
        </div>
</div>
<!-- 2. Finanzas & Divisas -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">FINANZAS & DIVISAS</span>
<span class="material-symbols-outlined text-status-positive text-[24px]">trending_up</span>
</div>
<div class="my-space-xs flex flex-col gap-space-xs font-data-mono text-data-mono">
<div class="flex justify-between items-center bg-surface-card p-space-xs rounded">
<span class="font-bold text-text-primary">DÓLAR BLUE</span>
<div class="flex items-center gap-1">
<span class="">$1.220 / $1.240</span>
<span class="text-status-positive flex items-center font-bold">▲ 0.8%</span>
</div>
</div>
<div class="flex justify-between items-center bg-surface-card p-space-xs rounded">
<span class="text-text-muted">Dólar Oficial</span>
<span class="text-text-primary font-bold">$1.042,50</span>
</div>
<div class="flex justify-between items-center text-text-muted">
<span class="">Merval: <b class="text-status-positive">+1.8%</b></span>
<span class="">Riesgo País: <b class="text-text-primary">740 pb</b></span>
</div>
</div>
<div class="pt-space-xs text-primary font-label-meta text-label-meta cursor-pointer hover:underline">
          Calculadora de cotizaciones →
        </div>
</div>
<!-- 3. Tránsito & Pasos Fronterizos -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">PASOS FRONTERIZOS</span>
<span class="material-symbols-outlined text-primary text-[24px]">alt_route</span>
</div>
<div class="my-space-xs flex flex-col gap-space-xs font-body text-body">
<div class="bg-surface-card p-space-xs rounded flex items-center justify-between">
<span class="font-bold text-text-primary">Cristo Redentor</span>
<span class="bg-status-positive text-on-tertiary px-space-xs py-0.5 rounded font-label-meta text-[11px] font-bold">HABILITADO</span>
</div>
<div class="bg-surface-card p-space-xs rounded flex items-center justify-between">
<span class="text-text-muted">Paso Pehuenche</span>
<span class="bg-status-alert text-text-primary px-space-xs py-0.5 rounded font-label-meta text-[11px] font-bold">PRECAUCIÓN</span>
</div>
<p class="font-data-mono text-data-mono text-text-muted">Demoras en Los Libertadores: 45 min</p>
</div>
<div class="pt-space-xs text-primary font-label-meta text-label-meta cursor-pointer hover:underline">
          Cámaras en vivo túnel binacional →
        </div>
</div>
<!-- 4. Claves del Día -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-cabezal text-cabezal text-primary uppercase font-bold">CLAVES DEL DÍA</span>
<span class="material-symbols-outlined text-primary text-[24px]">checklist</span>
</div>
<ul class="my-space-xs flex flex-col gap-1.5 font-body text-body text-text-body">
<li class="flex items-start gap-1.5 text-[13px] leading-tight">
<span class="text-primary font-bold">•</span>
<span class="">Cortes programados por obras de Aysam en calle Arístides.</span>
</li>
<li class="flex items-start gap-1.5 text-[13px] leading-tight">
<span class="text-primary font-bold">•</span>
<span class="">Vencimiento del impuesto automotor provincial con 25% desc.</span>
</li>
<li class="flex items-start gap-1.5 text-[13px] leading-tight">
<span class="text-primary font-bold">•</span>
<span class="">Farmacias de turno nocturno Gran Mendoza y Este provincial.</span>
</li>
</ul>
<div class="pt-space-xs text-primary font-label-meta text-label-meta cursor-pointer hover:underline">
          Guía de trámites ciudadanos →
        </div>
</div>
</div>
</section>
<!-- 8. OPINIÓN (Arquetipo C: Grid Columnistas 4 Columnas) -->
<section aria-label="Opinión y Columnistas" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">FIRMAS & OPINIÓN EDITORIAL</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">LAS MIRADAS MÁS LEÍDAS DE LA REGIÓN</span></div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"><!-- Columnista 1 -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container transition-colors">
<img alt="Andrés Gabrielli" class="w-20 h-20 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" data-alt="Portrait photo of a distinguished senior Argentine male political analyst wearing glasses and formal dark jacket." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChq1ySVITYCACBvF0uwU1PX08ZkYNSe6YANbmtOtyxuIsmSZ5APvanIBQgEuO_hPnRY4sBXn_klKyzs7emZDt-1csLU0Q6P9gHG487kzImgYzmgDTMkO-vGv2viRZ_BledEa1cLkW_H_t2il8rli02c0iE0foY9tQPNtIBWtIDZuPaZrgkeGCldt0eVRfy86XLTB-pF4A3E-Z7yBEwEXgEePQ7IWtR241gOomD8P0DCXx3HN24z6th">
<span class="font-card-title text-card-title text-primary uppercase font-bold mt-space-sm tracking-wider">ANDRÉS GABRIELLI</span>
<span class="font-label-meta text-label-meta text-text-muted">Panorama Político</span>
<h3 class="font-headline-opinion text-headline-opinion italic text-text-primary mt-space-xs leading-snug group-hover:text-primary transition-colors">
“Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt”
</h3>

</div>
<!-- Columnista 2 -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container transition-colors">
<img alt="Paola Piquer" class="w-20 h-20 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" data-alt="Portrait photo of an Argentine female journalist with professional demeanor and warm confident expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoRzzTMGbAJ-62aO0yye5RkhV6feN4FrsN_9D8KVIquWPShIG4hfzrKJUfrYPpS8hZVXeSXo24KwMJu_JHs6XFWv7iE8ejY5wmEH1oUgDsw9aCk6Clclna5DjkjIWJ0oJa44XpjO9lYjn3xZQWVwzlHPt1p_S5w6qB3VOpz8J-OXhoOzHDG79Ycd7yz7KSrvyX4gg8iFVfEa1CkpZ2vnvNfWmhEt2PkHIINvFJYWqEyiTCkH_iLp5H">
<span class="font-card-title text-card-title text-primary uppercase font-bold mt-space-sm tracking-wider">PAOLA PIQUER</span>
<span class="font-label-meta text-label-meta text-text-muted">Sociedad & Derechos</span>
<h3 class="font-headline-opinion text-headline-opinion italic text-text-primary mt-space-xs leading-snug group-hover:text-primary transition-colors">
“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea”
</h3>

</div>
<!-- Columnista 3 -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container transition-colors">
<img alt="Rodolfo Cavagnaro" class="w-20 h-20 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" data-alt="Portrait photo of an economic columnist male with sharp observant eyes in studio light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2-4eTs3kNJLcGsho0BFerz4Qr564L5Y4-GfyGEgy4BcPo7lKjoUc9QpV3syoSpsMVaEDa3BWjq8jMGiV4ILRk8Oy_hP9Gu2pVwJDyrI_C6KLDSU0Ddvrn7Eqe6AaWoLLNEdG7p6-DOzDawwitTAOPfCP8Miwg6YTCMJrKZyLL55j-5m-446UbET1Lnid5o2Ogx5c9NL6rV5O2sZ9LaZNVpRAOAITrB9cHSNqVUth725Z4TRcU-kFV">
<span class="font-card-title text-card-title text-primary uppercase font-bold mt-space-sm tracking-wider">RODOLFO CAVAGNARO</span>
<span class="font-label-meta text-label-meta text-text-muted">Economía & Negocios</span>
<h3 class="font-headline-opinion text-headline-opinion italic text-text-primary mt-space-xs leading-snug group-hover:text-primary transition-colors">
“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat”
</h3>

</div>
<!-- Columnista 4 -->
<div class="bg-surface-subtle p-space-md rounded-lg flex flex-col items-center text-center group cursor-pointer hover:bg-surface-container transition-colors">
<img alt="Silvia Lauría" class="w-20 h-20 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" data-alt="Portrait photo of a cultural arts critic woman smiling against a neutral minimalist backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRNtMgD6kjgwRDg_uZlrIztEMuJlHqV--oHxEilwluIz8T7XnM1keiz0JbAjZMcEWOqWOsz98JWhMladdoV0gXmkvZereQZzQAoIMQ4ywDENghVMj63naEUO5pIBJ9r0b4-1tuLrj0pYvP7F5MgAA2XszUuMFg6UbBLVEinnxawgrzzqxwY3FTBUJHK4xqTb0rUanZaEoXgv51vT7aXN2Ey0l1uIVJj1hAjgNhfrcDsW-HUgJ3zftJ">
<span class="font-card-title text-card-title text-primary uppercase font-bold mt-space-sm tracking-wider">SILVIA LAURÍA</span>
<span class="font-label-meta text-label-meta text-text-muted">Cultura Cuyo</span>
<h3 class="font-headline-opinion text-headline-opinion italic text-text-primary mt-space-xs leading-snug group-hover:text-primary transition-colors">
“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit”
</h3>

</div></div>
</section>
<!-- 9. BRANDED CONTENT (Conversión a Grilla de 6 Columnas con Miniaturas 9:16 + Arte '#a comer!') -->
<section aria-label="Branded Content &amp; Experiencias" class="w-full flex flex-col gap-space-md"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm border-t-2 border-primary"><div class="flex items-center gap-space-md"><div class="h-8 flex items-center bg-surface-card px-2 py-0.5 rounded"><img alt="#a comer!" class="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzt2QLtZdzGhk2eW2IptltyCTMllQvFHIkilzEmxIHOEpC03CItfnh2okub7pB3r9-CqEtJC_TCwqqyI0npGffF5pia-sg5q9SR9xeQZO6nUiz1D266QePX8Zoz--FvT9RBsgM4VMeN1jUfNZOxTzY_7cLrTRhB24nnxrFL3BpP_Sj-yjUlVyGkJuYk0nnkCflRmZadNui1Bj156ZwRA1jK3eNhGKNXUtEGP1rdRd1H2J7Q3AZi0rvtteQUM5DuGk0pg"></div><span class="font-cabezal text-cabezal text-surface-container-high hidden sm:inline text-[12px] uppercase tracking-wider">BRANDED CONTENT • EXPERIENCIAS DE CUYO</span></div><div class="flex items-center gap-1"><button aria-label="Anterior" class="w-7 h-7 rounded-full bg-inverse-surface hover:bg-surface-variant flex items-center justify-center text-white transition-colors cursor-pointer"><span class="material-symbols-outlined text-[18px]">chevron_left</span></button><button aria-label="Siguiente" class="w-7 h-7 rounded-full bg-inverse-surface hover:bg-surface-variant flex items-center justify-center text-white transition-colors cursor-pointer"><span class="material-symbols-outlined text-[18px]">chevron_right</span></button></div></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md"><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSdjYSxbDEJtJqC-FGONX-343vat5hTCWDJ-zIxoWMi9X4CP-Xv9WvznVuS0ScL72fTcPIzQrcuNC_Uy7fnaZavUKNZYeCYUvMhjlNvnu5XDpHfxK3G2tVQlxtNYNGELqCZGfVGKpvK3CEbmiSowfQeaPwo4RKx8FiZZYfHokY4fFsclasOi32eFLinyawzBC61nL6IeVmXicjV2MD57QGzkO_s0dY3cxbKA63J74W2CMZSvRtPkVt')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Bodega Catena Zapata: nueva experiencia sensorial 2026</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5JTU0gjWtalw3NuHp-DXLOzlsB5NYzauwKdhYvXwTTrrz4ZOH_sY4AXHhn88dzbK1tl5fKe3Yc1fXfHvi0PwDAOUgllsTRne4uc7SmgnpPvcKacCVbfmaOkDxWJBk9DVR_XgRuAdAsPkGJyzFuzuH-VbX_nZnN-FBMa93Uw2jLJYJCRmVbJOUb3OkUb7c1Ou2XzZjRjxkcMWF4gPloTTacg1_9A00iZL3_5ArBiGNgz6e61korM3s')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Glamping entre viñedos: la nueva frontera del relax andino</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhRBKkK10FCQ3WHa2JoiFAOTanzVeRusQaL10JyY5XiMel1BTKieCkY9sEsSIXWH7u5faX4mVnDOlNlIMZY2uFXTdl9C6W4vDoXkcj9-r_fb89XtpFrJYNmc63PWVderTQVP_8cH7SarF85p8vfpn7quAcB8ZeQWgqPlk5vVO6z4vXlAExcoPKsewdS8ZLyS-dROeNsJ_wWpPe-dAXKqOohUGxu5Zy2hMbvUATqg5EH0zVAQVgpNYz')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Guía Michelin Mendoza: detrás de los nuevos fuegos premiados</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoMTgd1RVLb4VjC1l3PkAaAPrbJmlZyhnjfAe6RgMHs2FK2S5FcDcx-bLJmaouy8ECPNj6RlmJ1GvJ8p0oDllhNERCXnqbpp-Mimz_60dx-7WVmgRryZtC4LWaZFBYryoAkBI4MXpW27_8vgcqXK0HD8I6KDTIazN1VMEN4r54XZsUVWpaxGf1L0lLhR4Jn4_0EEn_E8ypgzzsaMSV3x7WX_czQ3x31pXUgig3OY9yhTzikziAa7VC')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Drones e IA: cómo optimizan el agua en el oasis mendocino</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKVOr7tB_r-Bl2IC6B4bQHwpMpu0N3uW4E5mLot4069qoFOCPi1U-j2dtT-ExlIY-nKKc_AntU3ms9URzNcPiqy5q_-hxgZVxWVDWkVcixwp5KYxQlTa23CaR4CaQa3aXnP6HgQ5z9S4FlONF8vYBQPtoO1apNvZf6xQYcp8c7H6QRb8VcKdLp-z-uOheaSwO8Su6j3Ve-XNOrqA9yWYAt3S-6CS2WYsoMf9_VPslz_k10FKKKmyNJ')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Vivir al pie de la montaña: barrios privados que marcan tendencia</p></div></div><div class="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer bg-surface-dark shadow-sm"><div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF3g6wM636bdop6Wne91MAZYS-c75JNaIWt6WE7YOZnWwQLh_11FUX2se1TyslCsFZg6km-dMk4xY7raaUP4wwBrrYt7E9wbLjamT1MB4rfK43Uv6ZZvrBaUnWkBFZDQCj3VyBAQkx4wCRe-x1V5cCdZ-L0Vf4C1xyGmfID5bARwcl8IjQEzhedyoKQoGJRp6ghlUf9JUBKfKg2GySnxH8aQyoaDLUUt1z6p1e5AxQKX8-C7EBhkAM')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent"></div><div class="absolute inset-0 m-auto w-10 h-10 rounded-full bg-surface-card/30 backdrop-blur-sm flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-[24px]">play_arrow</span></div><div class="absolute bottom-2.5 left-2.5 right-2.5"><p class="font-body text-body text-on-tertiary font-medium leading-tight line-clamp-2">Test Drive en altura: probamos la nueva pick up en caminos de ripio</p></div></div></div></section><section aria-label="Legionarius y Espacio Comercial" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg"><div class="grid grid-cols-12 gap-space-xl items-start"><div class="col-span-12 lg:col-span-8 flex flex-col"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase tracking-wider font-bold text-[12px]">LEGIONARIUS • NOTICIAS DE EDICIÓN CONTINUA</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">SÍNTESIS REGIONAL</span></div><div class="flex flex-col"><article class="py-3 border-b border-border-subtle group cursor-pointer hover:bg-surface-subtle transition-colors px-1"><div class="flex items-center gap-2 mb-1"><span class="font-byline text-[11px] text-primary uppercase font-bold">PRODUCCIÓN & AGRO</span><span class="text-outline-variant text-[11px]">•</span><span class="font-data-mono text-[11px] text-text-muted">Hace 18 min</span></div><h3 class="font-headline-sm text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</h3></article><article class="py-3 border-b border-border-subtle group cursor-pointer hover:bg-surface-subtle transition-colors px-1"><div class="flex items-center gap-2 mb-1"><span class="font-byline text-[11px] text-primary uppercase font-bold">OBRAS PÚBLICAS</span><span class="text-outline-variant text-[11px]">•</span><span class="font-data-mono text-[11px] text-text-muted">Hace 35 min</span></div><h3 class="font-headline-sm text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h3></article><article class="py-3 border-b border-border-subtle group cursor-pointer hover:bg-surface-subtle transition-colors px-1"><div class="flex items-center gap-2 mb-1"><span class="font-byline text-[11px] text-primary uppercase font-bold">TRANSPORTE</span><span class="text-outline-variant text-[11px]">•</span><span class="font-data-mono text-[11px] text-text-muted">Hace 52 min</span></div><h3 class="font-headline-sm text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id</h3></article><article class="py-3 border-b border-border-subtle group cursor-pointer hover:bg-surface-subtle transition-colors px-1"><div class="flex items-center gap-2 mb-1"><span class="font-byline text-[11px] text-primary uppercase font-bold">TURISMO & SERVICIOS</span><span class="text-outline-variant text-[11px]">•</span><span class="font-data-mono text-[11px] text-text-muted">Hace 1 hora</span></div><h3 class="font-headline-sm text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur</h3></article><article class="py-3 group cursor-pointer hover:bg-surface-subtle transition-colors px-1"><div class="flex items-center gap-2 mb-1"><span class="font-byline text-[11px] text-primary uppercase font-bold">MEDIO AMBIENTE</span><span class="text-outline-variant text-[11px]">•</span><span class="font-data-mono text-[11px] text-text-muted">Hace 1 hora y media</span></div><h3 class="font-headline-sm text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</h3></article></div></div><div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center"><div class="w-[300px] h-[250px] rounded-lg bg-gradient-to-br from-brand-deep via-primary to-primary-container p-4 flex flex-col justify-between text-white shadow-md relative overflow-hidden group cursor-pointer"><div class="flex justify-between items-center z-10"><span class="bg-white/20 text-[10px] font-data-mono uppercase tracking-widest px-2 py-0.5 rounded font-bold">PUBLICIDAD</span><span class="text-[10px] font-data-mono text-white/60">300 x 250</span></div><div class="flex flex-col gap-1 z-10"><span class="text-[11px] font-bold tracking-wider text-sky-300 uppercase">EXPERIENCIA EXCLUSIVA</span><h4 class="font-headline-sm text-[18px] font-bold leading-tight text-white">Rutas del Vino & Alta Montaña</h4><p class="text-[11px] text-white/80 line-clamp-2 mt-1">Viví el otoño mendocino en los paisajes más emblemáticos de los Andes con paquetes únicos.</p></div><div class="flex justify-between items-center z-10 pt-2 border-t border-white/10"><span class="text-[11px] font-data-mono text-white/80">Mendoza Turismo</span><span class="bg-white text-gray-950 font-bold text-[11px] px-3 py-1 rounded shadow group-hover:bg-primary-fixed-dim transition-colors">Conocer más →</span></div><div class="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div></div><span class="font-data-mono text-[10px] text-text-muted mt-2 uppercase tracking-wider">IAB Medium Rectangle • 300x250</span></div></div></section>
<!-- 10. ENCUESTA & SENATUS ROMANO (Columna Doble) -->
<section aria-label="Participación y Senatus" class="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
<!-- Columna Izquierda: Encuesta Ciudadana (col-span-5) -->
<div class="col-span-12 lg:col-span-5 bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between">
<div>
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-sm border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-primary-fixed-dim text-[18px]">poll</span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">LA ENCUESTA DE HOY</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[10px]">SONDEO EXCLUSIVO</span></div>
<h3 class="font-headline-sm text-headline-sm text-text-primary mt-space-xs">
          ¿Considera adecuado el nuevo esquema de cobro de estacionamiento medido digital en el microcentro de Mendoza?
        </h3>
<!-- Interactive Poll Options -->
<div class="flex flex-col gap-space-sm mt-space-md">
<label class="flex flex-col gap-1 p-space-xs rounded bg-surface-subtle hover:bg-surface-container cursor-pointer transition-colors">
<div class="flex justify-between font-card-title text-card-title text-text-primary">
<span class="flex items-center gap-2">
<input checked="" class="accent-primary" name="poll_mendoza" type="radio">
                Sí, agiliza la rotación y el pago por app
              </span>
<span class="font-data-mono font-bold">58%</span>
</div>
<div class="w-full h-2 bg-surface-track rounded-full overflow-hidden">
<div class="w-[58%] h-full bg-primary rounded-full transition-all duration-500"></div>
</div>
</label>
<label class="flex flex-col gap-1 p-space-xs rounded bg-surface-subtle hover:bg-surface-container cursor-pointer transition-colors">
<div class="flex justify-between font-card-title text-card-title text-text-primary">
<span class="flex items-center gap-2">
<input class="accent-primary" name="poll_mendoza" type="radio">
                No, la tarifa por hora aumentó demasiado
              </span>
<span class="font-data-mono font-bold">34%</span>
</div>
<div class="w-full h-2 bg-surface-track rounded-full overflow-hidden">
<div class="w-[34%] h-full bg-primary-container rounded-full transition-all duration-500"></div>
</div>
</label>
<label class="flex flex-col gap-1 p-space-xs rounded bg-surface-subtle hover:bg-surface-container cursor-pointer transition-colors">
<div class="flex justify-between font-card-title text-card-title text-text-primary">
<span class="flex items-center gap-2">
<input class="accent-primary" name="poll_mendoza" type="radio">
                Indiferente / No utilizo vehículo en la zona
              </span>
<span class="font-data-mono font-bold">8%</span>
</div>
<div class="w-full h-2 bg-surface-track rounded-full overflow-hidden">
<div class="w-[8%] h-full bg-outline-variant rounded-full transition-all duration-500"></div>
</div>
</label>
</div>
</div>
<div class="flex items-center justify-between pt-space-md font-data-mono text-data-mono text-text-muted">
<span class="">Total de votos: 4.892 ciudadanos</span>
<button class="bg-primary text-on-primary px-space-md py-1 rounded font-card-title text-card-title hover:bg-brand-deep transition-colors">
          Votar
        </button>
</div>
</div>
<!-- Columna Derecha: Senatus Romano (col-span-7) -->
<div class="col-span-12 lg:col-span-7 bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-sm border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-primary-fixed-dim text-[20px]">account_balance</span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">SENATUS • ANÁLISIS LEGISLATIVO</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">OBSERVATORIO CUYO</span></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<!-- Senatus Card 1 -->
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-subtle p-space-sm rounded-lg">
<div class="relative aspect-[3/2] w-full rounded overflow-hidden bg-surface-track">
<img alt="Columnas Legislatura Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Neoclassical marble columns and portico of Mendoza legislative assembly with golden afternoon light reflecting on steps." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClJDS8VR9P4frm5tjv17MDg86wlryIlmJO6YtK7BY5jI5k8E8eyfGaEzmVsCfV10K-8JGEPNbEzx22AhTlouP8zzQbznAJuEArrA6GEBCw4IuxG-RExYJzo29s9IquhncDLSHjDVTToGyELrSK-WD9TgB4cJMOLyj6LrwtSyt1cw3rts-Wc9ulLLt7ECAwN3mei9eLw6ZZ0h7fYVP29pCVOm4Ec2CMVNA88lskJhEyldDtFkCZiYHP">

</div>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</h4>
<p class="font-body text-body text-text-muted line-clamp-2">
            El reparto de presidencias clave en Asuntos Constitucionales y Hacienda anticipa debates técnicos de alta intensidad política.
          </p>
<div class="flex items-center gap-1 mt-space-xs text-[11px] font-bold text-brand-deep uppercase"><svg class="w-3 h-3 text-brand-deep" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg><span class="">REDACCIÓN PARLAMENTARIA</span></div>
</article>
<!-- Senatus Card 2 -->
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-subtle p-space-sm rounded-lg">
<div class="relative aspect-[3/2] w-full rounded overflow-hidden bg-surface-track">
<img alt="Constitución de Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close up of historical legal books and leather bound provincial constitution of Mendoza on dark polished wood desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKsweWFrw6hcbWHHwPRltcaJ0n_o2MiKlx0Mth_h5xXa3hOLMPn5tuumoFhZX3aG-pR6THBhckRJfe4rWqDj2GoSWwizT50unwjM0-rvkNbc_4or2dTCdh1nWjyrWJHp-qLzO4r8x-LGqKON3nlF7nS2KK8E5S3HYVEduCJVusCA8WSpqf9103pu2sPF15Z9jF6UzJ617dr0cBpqeBnTJbYMwqpBAUtReiLWpD9cWqxrPqyZBstKy">

</div>
<h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h4>
<p class="font-body text-body text-text-muted line-clamp-2">
            Revisión de los fallos de la Corte provincial sobre potestades tributarias y cartas orgánicas locales.
          </p>
<div class="flex items-center gap-1 mt-space-xs text-[11px] font-bold text-brand-deep uppercase"><svg class="w-3 h-3 text-brand-deep" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg><span class="">DR. IGNACIO VIDELA</span></div>
</article>
</div>
</div>
</section>
<!-- 11. BANNER PUBLICITARIO (IAB Estándar) -->
<aside aria-label="Espacio Publicitario" class="w-full bg-gradient-to-r from-primary-container via-brand-deep to-primary rounded-lg shadow-md p-space-md text-on-primary flex flex-col items-center justify-center text-center relative overflow-hidden">
<span class="font-data-mono text-[10px] tracking-widest uppercase opacity-75 mb-1">ESPACIO PUBLICITARIO • IAB LEADERBOARD PREMIUM</span>
<div class="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-space-md py-space-sm gap-space-md">
<div class="text-left">
<h4 class="font-headline-md text-headline-md font-bold text-on-primary">VENDIMIA CONNECT 2026</h4>
<p class="font-body text-body text-surface-container-high">Adquirí tus entradas oficiales y experiencias VIP para el Acto Central en el Teatro Griego Frank Romero Day.</p>
</div>
<a class="bg-surface-card text-brand-deep font-card-title text-card-title px-space-lg py-space-sm rounded-lg font-bold hover:bg-surface-container-low transition-colors shadow-sm whitespace-nowrap" href="#">
        Reservar Experiencia →
      </a>
</div>
</aside>
<!-- 12. SOCIEDAD & GENTE (Grilla Retrato 3:4) -->
<section aria-label="Sociedad y Gente" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">GENTE & CULTURA CUYANA</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">PERSONAJES & RETRATOS</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg"><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Fiesta de la Cosecha" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQI2j5g30AfBV_kDdZFUXHq9WQGBFdf26iSLo8qgkEsxg21-acLiR6416aefCJ7HKY9w8BaUpFXAUF6GjwkCrdYuM9TDqXGKLUMHO3-FUI2ZR97ynGkRm8DX4TmZsOx9eSw-RvlCyeHtFlsDH7zL2BIh_acSA5sZzgh2SeRW7MwJO0vPQaKTWwRC3fUIMYtU3cfHs5xxm-vSR_wSSM293nEPhQeXwlizSCb_wKhYWXF2nnnk1E5BIr"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</h3></div></div></article><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Artesana textil de Malargüe" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61g5LWb4T2FUF2FT7syvy3yTOD25akw2tuPQqq-SArXmMp9EFjGpmz4Z7PSm6uPauOUi0axLjdiwN-4dTDcHjOVjFPrEGMiJ2KiEQwPPwAJukUKWEp_IHVO0fQVLmkjsaFh7aoF5ygUwx2vTNd7oausveBdXqICYoJMtU74jRB15TazdiYEXSMJuOKFGHaFZxvYopjKlNzU0UnelJQaqHWqnPCY7rGbkHY7Q7y9mJaUKmla7-qSpl"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</h3></div></div></article><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Jóvenes innovadores mendocinos" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtfY4G7MRKIJc0D5fX_BJz3m-OamiwohXDVY-CIUYvUvPzut7E-ukkaGbepsOiRyXBVBVRW8EWGrIfOxjqr7Y_MFklslHa0CDe0-rbP5cOs21v4rP_2-jHf_W9sCOxxXfZ_nu5SnQMZ6zkinNDWT2Y2stXVX7dxCjAK0nfRHWBzUojkPOZ19Jf_g3qrGHPtz4aQwMnkjRp1rgs8_sJPtZEvWPxYMnDyRyW_zsNzWEEyU8Fw5kx70GH"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</h3></div></div></article><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Gala de Vendimia" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAux9PsIRtesbmgjF6msmskzlt_-RX70ZT_YE039pX06yCTI2LT3K-xCbY3ksobvvNPbTGUaBxlTxTIYDV3dJKL9nDi6UA0izDETW-RX24oHkVzVPVp1E0OI_FOOfZXNuC5WQSXQld67M8JQf2tjPSSbjG6L_xB-fwBkmj-SW5L8tKgvuie-O1JivG1iy6ehD8DF0cwJpJE2thT0aOyb97kCjGIr7oO-FfmOCC65R9cfgbR1JnTabym"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</h3></div></div></article><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Reinas de la Vendimia" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHDxaq_X3QDpgEcGesbxqQ975VB9A71IIJ65Nmd6G7xbD4cNYrPyjaKdPmPpYL03azJmJ2TflkrzzlF2MYL4VwfmIuTsEFs4iOIvThb54lkJ9okg16aMyt1HWVlLSZx_joWQ9ONOlTM2gz2rbCU1SuUd5RGalN4mEcNDZpIoA21uvTWwCiJNTQzvuXNXe7ikVDXty7WP0-JIHkmUW2Pgr-t3dbih2BdqgxdXHxKg_EA0eEifF6G8I"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi</h3></div></div></article><article class="flex flex-col group cursor-pointer"><div class="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-surface-track shadow-sm"><img alt="Artesanos en la plaza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeZsAZPh4_F1yGt5aV_Cm-Yk1-O4-dfxqPUH1Ob3zBzMu9rEGdSz1Hf1XZiIy8e9H1MLvz8PnjPK91Ywr6aIR3KCpbz-nfvNZGByJdg4l4OCbOQN9RH7aSU_Yx0D4IOWq2J9uPCnb2bfDtvzavT97Osvm9KKMcND5jcmOmxG6nfo-3It3HQKuTOhIEKAJOVNqxTeSDteekHupCCLqvhWhW7pWKGT-1QxU4YzWpZJb4Yy8NTbSaRZ2_"><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div><div class="absolute bottom-3 left-3 right-3 text-on-tertiary"><h3 class="font-headline-sm text-headline-sm font-bold leading-tight">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3></div></div></article></div></section>
<!-- 13. TRANSMISIONES EN VIVO (Canal 7 Mendoza & Radio Nihuil) -->
<section aria-label="Transmisiones en Vivo Canal 7 y Radio Nihuil" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-space-lg"><div class="bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between"><div class="flex items-center justify-between pb-space-sm"><div class="flex items-center gap-space-sm"><span class="w-3 h-3 rounded-full bg-accent-red-live animate-ping"></span><span class="font-cabezal text-cabezal text-tertiary uppercase font-bold tracking-wider">CANAL 7 MENDOZA • SEÑAL EN VIVO</span></div><span class="bg-tertiary text-on-tertiary px-space-xs py-0.5 rounded font-cabezal text-cabezal font-bold">TELEVISIÓN ABIERTA</span></div><div class="relative aspect-video w-full rounded-md overflow-hidden bg-surface-dark group shadow-sm"><div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnR_bwDC_TZsZkPlBBOTdDXEvD9iEKPqX8O0ZyJ9D8xl-qF9X7VKCoMXUdgJjC-B0UyauQMZdeU2q7N3wT_nxJvOxanSGHkIuExjOtSuhmVxxt4bxS2gPePpEhmMyK7_zh940IILldczjlUv87adtxgWMPn6HJKSIhuDiAH-xmWaa7QwNtcG6Wtg3b_tfGtNJ_ppOs-SSATPB0w4mKMkuvnumeug3-IXhWFHQprnc1VzuQbh_YaUKL')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent"></div><div class="absolute top-2 left-2 bg-surface-dark/70 text-on-tertiary px-space-xs py-0.5 rounded font-data-mono text-data-mono">CANAL 7 HD • EN DIRECTO</div><button aria-label="Ver transmisión en vivo Canal 7" class="absolute inset-0 m-auto w-14 h-14 rounded-full bg-accent-red-live text-on-tertiary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"><span class="material-symbols-outlined text-[32px] ml-1">play_arrow</span></button></div></div><div class="bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between"><div class="flex items-center justify-between pb-space-sm"><div class="flex items-center gap-space-sm"><span class="w-3 h-3 rounded-full bg-accent-red-live animate-ping"></span><span class="font-cabezal text-cabezal text-tertiary uppercase font-bold tracking-wider">RADIO NIHUIL • TRANSMISIÓN EN VIVO</span></div><span class="bg-primary text-on-primary px-space-xs py-0.5 rounded font-cabezal text-cabezal font-bold">CABINA EN DIRECTO</span></div><div class="relative aspect-video w-full rounded-md overflow-hidden bg-surface-dark group shadow-sm"><div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuChq1ySVITYCACBvF0uwU1PX08ZkYNSe6YANbmtOtyxuIsmSZ5APvanIBQgEuO_hPnRY4sBXn_klKyzs7emZDt-1csLU0Q6P9gHG487kzImgYzmgDTMkO-vGv2viRZ_BledEa1cLkW_H_t2il8rli02c0iE0foY9tQPNtIBWtIDZuPaZrgkeGCldt0eVRfy86XLTB-pF4A3E-Z7yBEwEXgEePQ7IWtR241gOomD8P0DCXx3HN24z6th')"></div><div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent"></div><div class="absolute top-2 left-2 bg-surface-dark/70 text-on-tertiary px-space-xs py-0.5 rounded font-data-mono text-data-mono">RADIO NIHUIL AM 680 / FM 98.9 • ESTUDIO CENTRAL</div><button aria-label="Ver transmisión en vivo Radio Nihuil" class="absolute inset-0 m-auto w-14 h-14 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"><span class="material-symbols-outlined text-[32px] ml-1">play_arrow</span></button></div></div></section><section aria-label="Sección Sociedad" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">SOCIEDAD & COMUNIDAD</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">EDUCACIÓN, SALUD Y CIUDAD</span></div><div class="grid grid-cols-12 gap-space-xl"><article class="col-span-12 lg:col-span-7 flex flex-col gap-space-md group cursor-pointer"><div class="relative aspect-[3/2] w-full rounded-md overflow-hidden bg-surface-track"><img alt="Educación y Universidad en Cuyo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-St004_5wvgkUCZqgKnZTlKSQfpaEvKK3KCSnTtPLZrKd5ZX35zdjjyQZTSkHkM9bj4TDSTuBUVBG4BgvmN8LFbQ191EfWRHlpNKJfum8jK3kzfsLEMV-I7rmMM1P0gRSF2IaHNXybDs7fVKPyFwa2ZdwlxJEOwyFBypq8pol-P0YR7sxbbMu_nZBjmWFw6DNlUqR3l5hjcOfZgeKN4avyec1Pg9unMoUB-M3nq95k2zZEEnfiiG1"></div><div class="flex flex-col gap-space-xs"><h3 class="font-headline-lg text-headline-lg text-text-primary group-hover:text-primary transition-colors leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna</h3><p class="font-bajada text-bajada text-text-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p><div class="pt-space-xs flex items-center justify-between font-byline text-byline text-text-muted"><span class="flex items-center gap-1 font-bold text-primary uppercase text-[11px]"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> LUCÍA BENÍTEZ</span><span class="font-data-mono text-data-mono text-primary font-bold">EDUCACIÓN</span></div></div></article>
<div class="col-span-12 lg:col-span-5 flex flex-col justify-between gap-space-md"><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Salud pública" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-St004_5wvgkUCZqgKnZTlKSQfpaEvKK3KCSnTtPLZrKd5ZX35zdjjyQZTSkHkM9bj4TDSTuBUVBG4BgvmN8LFbQ191EfWRHlpNKJfum8jK3kzfsLEMV-I7rmMM1P0gRSF2IaHNXybDs7fVKPyFwa2ZdwlxJEOwyFBypq8pol-P0YR7sxbbMu_nZBjmWFw6DNlUqR3l5hjcOfZgeKN4avyec1Pg9unMoUB-M3nq95k2zZEEnfiiG1"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">SALUD PÚBLICA</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Lorem ipsum dolor sit amet consectetur adipiscing elit</h4><span class="font-data-mono text-data-mono text-text-muted">Salud Provincial</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Medio ambiente" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjsRVoj3RejAg102GiNJejTdsY1TN_C-qeMN0K-rmA6-xjav6aBfdB4TGpvGYYEnVHnzbtXdnc75XiV-HAluvzL4F0pYSHIvuhIeYxUUCP5ZAO6Ro7ASepVwNEKu6q52qGlGCFu_9ddqZGN8Pz21IkvGNM2vUAQhJU1KCcIdAvaZKvDMDJXwMywLZNhPRneTZhwLZD8CEHLk2zNKbCsXR1pdDlK3cvC5LB-EppGyOc0RLY181YXyP"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">BIODIVERSIDAD</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Sed do eiusmod tempor incididunt ut labore et dolore</h4><span class="font-data-mono text-data-mono text-text-muted">Biodiversidad Cuyo</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Comunidad educativa" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtfY4G7MRKIJc0D5fX_BJz3m-OamiwohXDVY-CIUYvUvPzut7E-ukkaGbepsOiRyXBVBVRW8EWGrIfOxjqr7Y_MFklslHa0CDe0-rbP5cOs21v4rP_2-jHf_W9sCOxxXfZ_nu5SnQMZ6zkinNDWT2Y2stXVX7dxCjAK0nfRHWBzUojkPOZ19Jf_g3qrGHPtz4aQwMnkjRp1rgs8_sJPtZEvWPxYMnDyRyW_zsNzWEEyU8Fw5kx70GH"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">EDUCACIÓN</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Duis aute irure dolor in reprehenderit in voluptate velit</h4><span class="font-data-mono text-data-mono text-text-muted">Educación y Transporte</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Patrimonio histórico" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAux9PsIRtesbmgjF6msmskzlt_-RX70ZT_YE039pX06yCTI2LT3K-xCbY3ksobvvNPbTGUaBxlTxTIYDV3dJKL9nDi6UA0izDETW-RX24oHkVzVPVp1E0OI_FOOfZXNuC5WQSXQld67M8JQf2tjPSSbjG6L_xB-fwBkmj-SW5L8tKgvuie-O1JivG1iy6ehD8DF0cwJpJE2thT0aOyb97kCjGIr7oO-FfmOCC65R9cfgbR1JnTabym"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">PATRIMONIO</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Excepteur sint occaecat cupidatat non proident sunt in culpa</h4><span class="font-data-mono text-data-mono text-text-muted">Patrimonio Cultural</span></div></article></div></div></section>
<!-- 14. OVACIÓN (Deportes Mendocinos y Nacionales - Con acento rojo izquierdo y Geist Sans) -->
<section aria-label="Sección Ovación Deportes" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg">
<!-- Header Ovación con acento rojo 4px -->
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-accent-sports"><div class="flex items-center gap-space-sm"><div class="h-8 px-2.5 py-1 bg-surface-dark rounded inline-flex items-center justify-center"><svg class="h-5 w-auto" viewBox="0 0 193 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8 35.8C8.4 35.8 0 27.8 0 17.9C0 8 8.4 0 18.8 0c10.4 0 18.8 8 18.8 17.9 0 9.9-8.4 17.9-18.8 17.9zm0-7.3c6.2 0 11.2-4.7 11.2-10.6 0-5.9-5-10.6-11.2-10.6-6.2 0-11.2 4.7-11.2 10.6 0 5.9 5 10.6 11.2 10.6zM40.2 1.1h7.8l9.1 24.6 9.1-24.6h7.8L61.6 35H52.8L40.2 1.1zM97.1 27.6H81.3l-3.3 7.4h-8.1L84.8 1.1h8.7l15 33.9h-8.1l-3.3-7.4zm-2.8-6.3L89.2 8.7l-5.1 12.6h10.2zM128.5 12.4c-2.4-2.7-5.9-4.2-10.1-4.2-7.5 0-13.3 5.4-13.3 13.1 0 7.7 5.8 13.1 13.3 13.1 4.2 0 7.7-1.5 10.1-4.2v7.1c-2.8 1.7-6.8 2.6-10.9 2.6-11.7 0-20.5-8.2-20.5-18.6 0-10.4 8.8-18.6 20.5-18.6 4.1 0 8.1 0.9 10.9 2.6v7.1zM133.5 1.1h7.6V35h-7.6V1.1zM161.4 35.8c-10.4 0-18.8-8-18.8-17.9 0-9.9 8.4-17.9 18.8-17.9 10.4 0 18.8 8 18.8 17.9 0 9.9-8.4 17.9-18.8 17.9zm0-7.3c6.2 0 11.2-4.7 11.2-10.6 0-5.9-5-10.6-11.2-10.6-6.2 0-11.2 4.7-11.2 10.6 0 5.9 5 10.6 11.2 10.6zM172.9 1.1h7.4l12.4 22.8V1.1h7.3V35h-7.4L180.2 12.2V35h-7.3V1.1z" fill="#ffffff"></path><path d="M161.4 6.8l5.2-6.8h6.5l-7.4 6.8h-4.3z" fill="#D1222A"></path></svg></div><span class="font-cabezal text-cabezal text-surface-container-high uppercase tracking-wider text-[11px] ml-2 hidden sm:inline">EL DEPORTE DE MENDOZA Y EL PAÍS</span></div><div class="flex items-center gap-space-sm font-label-meta text-label-meta"><span class="font-bold text-accent-red-pulse cursor-pointer hover:underline text-[12px]">GODOY CRUZ</span><span class="text-outline-variant">•</span><span class="font-bold text-primary-fixed-dim cursor-pointer hover:underline text-[12px]">INDEPENDIENTE RIVADAVIA</span><span class="text-outline-variant">•</span><span class="font-bold text-surface-container-high cursor-pointer hover:underline text-[12px]">GIMNASIA</span></div></div>
<div class="grid grid-cols-12 gap-space-xl">
<!-- Columna Principal Deportes: Foto 4:3 + Titular Geist Sans sin Serif (col-span-8) -->
<div class="col-span-12 lg:col-span-8 flex flex-col gap-space-md"><article class="flex flex-col md:flex-row gap-space-md group cursor-pointer bg-surface-subtle p-space-md rounded-lg">
<div class="relative aspect-[4/3] md:w-1/2 rounded overflow-hidden bg-surface-track flex-shrink-0">
<img alt="Godoy Cruz vs Rival" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Godoy Cruz Antonio Tomba forward kicking ball on goal at Malvinas Argentinas stadium during intense League match against River Plate in Mendoza." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPD0GZh163acyYuXXgll1Hy2u2mraSDe4oQcXeiRFPColSwSDBuaeqOwlDCCAsY-FjyKi0lTivfTe2fhUkMFO6YmbAbwe7ew-_BYaAZP6CTx_UeXK3hQFQmxFb9ZFIMffi76rbtvfLuOJ9jQsndpigtj0xmnW2_6ij6HqCIbhhSJA2BDnyt9MAhUFrkEYF2aqrp1CoJJr3blNcMmHJrM-wr7-kXFftyw7aNiIeZ6t7dTD1omCi3ViK">
</div>
<div class="flex flex-col justify-between gap-space-xs md:w-1/2">
<div>
<span class="font-byline text-byline text-accent-sports uppercase font-bold">FÚTBOL DE PRIMERA</span>
<h3 class="font-headline-sport text-headline-sport text-text-primary group-hover:text-accent-sports transition-colors mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</h3>
<p class="font-body text-body text-text-muted mt-space-xs">
Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
</p>
</div>
<div class="pt-space-xs font-byline text-byline text-text-muted flex justify-between"><span class="flex items-center gap-1 font-bold text-accent-sports uppercase text-[11px]"><svg class="w-3 h-3 text-accent-sports" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> GUSTAVO SALINAS</span><span class="font-data-mono text-data-mono text-accent-sports font-bold">COBERTURA ESPECIAL</span></div>
</div>
</article>
<!-- Fila de 3 noticias complementarias deportivas con fotos 3:2 -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-subtle p-space-sm rounded-lg">
<div class="relative aspect-[3/2] w-full rounded overflow-hidden bg-surface-track">
<img alt="Independiente Rivadavia" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Independiente Rivadavia players huddling up before match at Bautista Gargantini stadium under evening blue sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEqcntELeCWACoNbEoFhtTYG7bmHWjtR5cdAPGnSYt6TPVYayZ6SI6aZ4n73-H1O_8ZdpbFcmw-UnkOMlQnJ6rQamQEWRLC15prN491RUQrzpfBP-T8j6w7bRHFUzZOsDVVbJIRbv8wGDmQ8WJb0MQ-rShjhbEcOVriEKwImaNfRTJCDRYYVaFPgDtMCClMWsHOezd0PN40JsDeKKcgYt-8IFcczHD55e7ufLuJtA7c5cTfVcoDZqx">
</div>
<h4 class="font-card-title text-card-title text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Lorem ipsum dolor sit amet consectetur
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Concentración</span>
</article>
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-subtle p-space-sm rounded-lg">
<div class="relative aspect-[3/2] w-full rounded overflow-hidden bg-surface-track">
<img alt="Rugby Cuyano Top 8" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Rugby union match scrum in Mendoza between Los Tordos and Marista under clear sunny skies." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9siIfK5Lbvd7KyWMZzCXfkncq8G7JKPK-rTKa1COiKZx8hmbNGKKtrvslGXDHdk0DJodV8hHdonRRmtTo2nTDM6kVDMiow0Fd83s3rvb0p3TMPWnjFKiu9jVCxonOLWxXUI_r_OIIkWybmeVk78fZ9brQ6Umur-47o9wjRuwtzrTSlBnTrHajJYbKs8b4LYM-AHEiWleoPBoz5QAnwFSP9x4HIWaEZRGry32ii8EYJDHLJXB67Kie">
</div>
<h4 class="font-card-title text-card-title text-text-primary group-hover:text-primary transition-colors line-clamp-2">
Sed do eiusmod tempor incididunt ut labore
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Resumen fecha</span>
</article>
<article class="flex flex-col gap-space-xs group cursor-pointer bg-surface-subtle p-space-sm rounded-lg">
<div class="relative aspect-[3/2] w-full rounded overflow-hidden bg-surface-track">
<img alt="Vuelta de Mendoza" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Cyclists peloton racing along the vineyard roads of Tunuyan in the Vuelta Ciclista de Mendoza." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH5TLuCgbcZr4OxlwqaQ5UZuZoWiZz5CnS3wxE-8eSNF9IddQUDCdzEqPApNHyZlwngNrYGvZly59_fXVhrfTt_zJQce0f6dTcw_wUFGkYjGJF5JrjwBOD63SjlFsnpVKXIvv8gWk3Vtqpz2xul2aU5vV3fw4pD0rLo9WiCGIX_LNW3VH89bJYCz6Fs2V-BgbpGN_fF-2zo6hpBDpxcjN4a5qDKN8_q70qSODYBMLzwXY_Vu1xH9TP">
</div>
<h4 class="font-card-title text-card-title text-text-primary group-hover:text-accent-sports transition-colors line-clamp-2">
Duis aute irure dolor in reprehenderit
</h4>
<span class="font-data-mono text-data-mono text-text-muted">Clasificación</span>
</article>
</div></div>
<!-- Columna Lateral Deportes: Tabla de Posiciones & Fixture (col-span-4) -->
<div class="col-span-12 lg:col-span-4 bg-surface-subtle p-space-md rounded-lg flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-space-xs">
<span class="font-cabezal text-cabezal text-text-primary font-bold uppercase">POSICIONES LIGA PROFESIONAL</span>
<span class="font-data-mono text-data-mono text-accent-sports font-bold">FECHA 7</span>
</div>
<table class="w-full text-left font-data-mono text-data-mono my-space-xs">
<thead>
<tr class="text-text-muted text-[11px] pb-1">
<th class="py-1">POS</th>
<th class="py-1">EQUIPO</th>
<th class="py-1 text-center">PJ</th>
<th class="py-1 text-center">DIF</th>
<th class="py-1 text-right">PTS</th>
</tr>
</thead>
<tbody class="text-text-primary">
<tr class="bg-surface-card rounded">
<td class="py-1 font-bold text-accent-sports">1</td>
<td class="py-1 font-bold">Godoy Cruz (Mza)</td>
<td class="py-1 text-center">7</td>
<td class="py-1 text-center text-status-positive">+9</td>
<td class="py-1 text-right font-bold">17</td>
</tr>
<tr>
<td class="py-1">2</td>
<td class="py-1">River Plate</td>
<td class="py-1 text-center">7</td>
<td class="py-1 text-center text-status-positive">+7</td>
<td class="py-1 text-right font-bold">16</td>
</tr>
<tr>
<td class="py-1">3</td>
<td class="py-1">Racing Club</td>
<td class="py-1 text-center">7</td>
<td class="py-1 text-center text-status-positive">+5</td>
<td class="py-1 text-right font-bold">14</td>
</tr>
<tr class="bg-surface-card rounded">
<td class="py-1 font-bold text-primary">7</td>
<td class="py-1 font-bold">Indep. Rivadavia</td>
<td class="py-1 text-center">7</td>
<td class="py-1 text-center">+2</td>
<td class="py-1 text-right font-bold">11</td>
</tr>
<tr>
<td class="py-1">8</td>
<td class="py-1">Boca Juniors</td>
<td class="py-1 text-center">7</td>
<td class="py-1 text-center">+1</td>
<td class="py-1 text-right font-bold">10</td>
</tr>
</tbody>
</table>
<div class="mt-space-md pt-space-xs">
<span class="font-cabezal text-cabezal text-text-primary font-bold uppercase">PRÓXIMO FIXTURE MENDOCINO</span>
<div class="flex flex-col gap-space-xs mt-space-xs">
<div class="bg-surface-card p-space-xs rounded flex justify-between items-center text-[12px] font-body">
<span class="font-bold">Godoy Cruz vs Vélez</span>
<span class="font-data-mono text-text-muted">Dom 17:00 hs</span>
</div>
<div class="bg-surface-card p-space-xs rounded flex justify-between items-center text-[12px] font-body">
<span class="font-bold">Ind. Rivadavia vs San Lorenzo</span>
<span class="font-data-mono text-text-muted">Lun 21:15 hs</span>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<!-- 15. CRIMEN & POLICIALES -->
<section aria-label="Sección Policiales" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg"><div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-accent-sports"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-accent-sports rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">CRIMEN & POLICIALES</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">INVESTIGACIÓN Y JUSTICIA</span></div><div class="grid grid-cols-12 gap-space-xl"><article class="col-span-12 lg:col-span-7 flex flex-col gap-space-md group cursor-pointer"><div class="relative aspect-[3/2] w-full rounded-md overflow-hidden bg-surface-track shadow-sm"><img alt="Investigación policial en Guaymallén" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI0OIVunotEji4AIt2BhRvbzs13iqz_ltIeboHICr3u4iMooQ-xEpv8yhI0JQk-0_yzuUBhZOwpcH1ItA3_4ha1-KF5vUQdo18L1OuxyOa_h0ZS0Ygqt7WiNgh4TZ4dgmVape9X5SdcZZwCi2o5R84_5lDqUQLp-dCVTtOE8-eSECm2Os3YkXgl9oNTApvLKIHvr4K1qKRlRT_gtj44ZndHDHM5hPGyh0t59muq_s4fojrlRZk_i0A"></div><div class="flex flex-col gap-space-xs"><h3 class="font-headline-lg text-headline-lg text-text-primary group-hover:text-primary transition-colors leading-tight">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna</h3><p class="font-bajada text-bajada text-text-body">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p><div class="pt-space-xs flex items-center justify-between font-byline text-byline text-text-muted"><span class="flex items-center gap-1 font-bold text-text-primary uppercase text-[11px]"><svg class="w-3 h-3 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> REDACCIÓN POLICIALES</span><span class="font-data-mono text-data-mono text-primary font-bold">Juzgado Federal N° 1</span></div></div></article>
<div class="col-span-12 lg:col-span-5 flex flex-col justify-between gap-space-md"><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Tribunal penal de Mendoza" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_ZIHVgEQqwHd05NVtq5sWo0h6dLmKcZJtpeSd3g3R2V-4SMb2ah0va-22cv4wSdFbxWoN2LvC-K_2QpNkyhAvGHhS7_Jw9Mj3ckrDASMXElqH0RtVr7AzPhlX0HQ0kt9Yk-03mbraredGpUnGG15l7K3RWK_Z5PqjyfZmKNzlmVDRYCFLqMZlijWYfHQ98urdwZUAvkYls9Jc67uM00xbf3JYWQzumkgk4NZPhqqf0j3c4b-KgCE"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">POLO JUDICIAL</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Lorem ipsum dolor sit amet consectetur adipiscing elit</h4><span class="font-data-mono text-data-mono text-text-muted">Polo Judicial Penal</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Control de seguridad vial Ruta 40" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtAgp9u22mrc5BikwVjBNq1vqy_U5WQLT6eE1hZk26q8JMCNpiTHLNCztatO6nvf3Mq7XiTL0buG5lRVLIpYAdeY6s46lABfLmcT6AZtjIk_gBjFtYTbZ-IeqHMRnENLtjgA0F30-LquhHEy1qoSMoxPr173FKWCFcUXykTLOAGiJ9tWfgvDbeh9SMkNeNbcyPw_IpRf-PlxjHYGlJbU2QTnoi5d0pa_b2E_CMo2Xl0v1_QSOk0Sq7"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">OPERATIVO REGIONAL</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Sed do eiusmod tempor incididunt ut labore et dolore</h4><span class="font-data-mono text-data-mono text-text-muted">Operativo Cuyo</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Peritajes científicos" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI0OIVunotEji4AIt2BhRvbzs13iqz_ltIeboHICr3u4iMooQ-xEpv8yhI0JQk-0_yzuUBhZOwpcH1ItA3_4ha1-KF5vUQdo18L1OuxyOa_h0ZS0Ygqt7WiNgh4TZ4dgmVape9X5SdcZZwCi2o5R84_5lDqUQLp-dCVTtOE8-eSECm2Os3YkXgl9oNTApvLKIHvr4K1qKRlRT_gtj44ZndHDHM5hPGyh0t59muq_s4fojrlRZk_i0A"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">PERITAJES FORENSES</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Duis aute irure dolor in reprehenderit in voluptate velit</h4><span class="font-data-mono text-data-mono text-text-muted">Forense</span></div></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><img alt="Poder judicial" class="w-28 h-28 aspect-square rounded-md object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_ZIHVgEQqwHd05NVtq5sWo0h6dLmKcZJtpeSd3g3R2V-4SMb2ah0va-22cv4wSdFbxWoN2LvC-K_2QpNkyhAvGHhS7_Jw9Mj3ckrDASMXElqH0RtVr7AzPhlX0HQ0kt9Yk-03mbraredGpUnGG15l7K3RWK_Z5PqjyfZmKNzlmVDRYCFLqMZlijWYfHQ98urdwZUAvkYls9Jc67uM00xbf3JYWQzumkgk4NZPhqqf0j3c4b-KgCE"><div class="flex flex-col gap-1 min-w-0"><span class="font-byline text-byline text-primary uppercase">PODER JUDICIAL</span><h4 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors line-clamp-2">Excepteur sint occaecat cupidatat non proident sunt in culpa</h4><span class="font-data-mono text-data-mono text-text-muted">Sentencia firme</span></div></article></div></div></section>
<!-- 16. WIDGETS INTERACTIVOS (Sudoku & Chat Vox Dei) -->
<section aria-label="Entretenimiento y Asistente IA" class="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
<!-- Sudoku Interactivo 9x9 (col-span-5) -->
<div class="col-span-12 lg:col-span-5 bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-sm border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-primary-fixed-dim text-[18px]">grid_on</span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">PASATIEMPO • SUDOKU UNO</h2></div><span class="font-data-mono text-data-mono bg-inverse-surface text-surface-container-high px-space-xs py-0.5 rounded text-[11px]">NIVEL MEDIO</span></div>
<!-- 9x9 Grid Representation -->
<div class="w-full max-w-[280px] mx-auto my-space-xs aspect-square grid grid-cols-9 gap-[1px] bg-border-heavy p-1 rounded">
<!-- R1 -->
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">5</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">3</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">7</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<!-- R2 -->
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">6</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">1</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">9</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">5</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<!-- R3 -->
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">9</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">8</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">6</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<!-- R4 -->
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">8</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">6</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">3</span>
<!-- R5 -->
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">4</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">8</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">3</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">1</span>
<!-- R6 -->
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">7</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">2</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">6</span>
<!-- R7 -->
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">6</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">2</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">8</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<!-- R8 -->
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">4</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">1</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">9</span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">5</span>
<!-- R9 -->
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">8</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-subtle flex items-center justify-center font-data-mono text-data-mono"></span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">7</span>
<span class="bg-surface-card flex items-center justify-center font-data-mono text-data-mono font-bold">9</span>
</div>
<div class="flex items-center justify-between pt-space-xs font-card-title text-card-title">
<button class="text-primary hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">refresh</span> Nuevo juego
        </button>
<button class="bg-primary text-on-primary px-space-md py-1 rounded hover:bg-brand-deep transition-colors">
          Comprobar
        </button>
</div>
</div>
<!-- Chat Vox Dei: Asistente Virtual Periodístico (col-span-7) -->
<div class="col-span-12 lg:col-span-7 bg-surface-card rounded-lg shadow-md p-space-lg flex flex-col justify-between"><div class="flex flex-col h-full justify-between gap-space-sm"><div class="flex items-center justify-between pb-space-xs border-b border-border-subtle"><div class="flex items-center gap-space-sm"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-container flex items-center justify-center text-white shadow-sm"><span class="material-symbols-outlined text-[18px]">smart_toy</span></div><div><div class="flex items-center gap-2"><h3 class="font-card-title text-card-title text-text-primary font-bold">Vox Dei</h3><span class="bg-status-positive/10 text-status-positive font-data-mono text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-status-positive animate-pulse"></span>ONLINE</span></div><p class="font-label-meta text-[11px] text-text-muted">Asistente inteligente con el archivo verificado de Diario UNO</p></div></div><button class="text-text-muted hover:text-text-primary text-[11px] font-data-mono flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">restart_alt</span> Limpiar</button></div><div class="flex flex-col gap-space-sm py-space-xs flex-1"><div class="flex items-start gap-2.5"><div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">VD</div><div class="bg-surface-subtle border border-border-subtle rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-text-body font-body text-body shadow-sm"><p class="">¡Hola! Soy <b>Vox Dei</b>. Puedo responder tus consultas sobre el estado de los pasos a Chile, rutas provinciales, la agenda política o las últimas noticias de Cuyo. ¿Qué te gustaría saber hoy?</p></div></div><div class="flex flex-wrap gap-1.5 ml-9"><button class="bg-surface-card border border-border-subtle hover:border-primary text-text-body hover:text-primary font-card-title text-[11px] px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><span class="">🏔️</span> ¿A qué hora corta el Paso Cristo Redentor?</button><button class="bg-surface-card border border-border-subtle hover:border-primary text-text-body hover:text-primary font-card-title text-[11px] px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><span class="">💧</span> Resumen del Plan Hídrico 2026-2035</button><button class="bg-surface-card border border-border-subtle hover:border-primary text-text-body hover:text-primary font-card-title text-[11px] px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><span class="">⚽</span> ¿Cuándo juega Godoy Cruz y la Lepra?</button></div></div><div><div class="relative flex items-center bg-surface-subtle border border-border-subtle rounded-xl px-space-md py-1.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary"><input class="w-full bg-transparent border-none outline-none font-body text-body text-text-primary placeholder:text-text-muted pr-10" placeholder="Preguntale a Vox Dei..." type="text"><button aria-label="Enviar consulta" class="absolute right-2 w-8 h-8 rounded-lg bg-primary hover:bg-brand-deep text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"><span class="material-symbols-outlined text-[18px]">arrow_upward</span></button></div><p class="text-[10px] text-text-muted text-center mt-1 font-label-meta">Vox Dei sintetiza información del equipo de redacción de Diario UNO. Verifique noticias de último momento.</p></div></div></div>
</section>
<!-- 17. ULTIMATEM (Más Noticias — Feed de Retención y Descompresión Editorial) -->
<section aria-label="Ultimatem Más Noticias" class="w-full bg-surface-card rounded-lg shadow-md p-space-lg mb-space-xl">
<div class="flex items-center justify-between bg-text-primary px-space-md py-space-xs rounded-md shadow-sm mb-space-md border-t-2 border-primary"><div class="flex items-center gap-space-sm"><span class="w-2.5 h-2.5 bg-primary-container rounded-sm"></span><h2 class="font-cabezal text-cabezal text-white uppercase font-bold tracking-wider text-[12px]">ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS</h2></div><span class="font-data-mono text-data-mono text-surface-container-high text-[11px]">ACTUALIZACIÓN CONTINUA</span></div>
<!-- Feed de 2 Columnas -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-space-xl"><div class="flex flex-col gap-space-md"><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">SAN RAFAEL</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</h3><span class="font-data-mono text-data-mono text-primary font-bold mt-1">CRÓNICA REGIONAL</span></div><img alt="Cañón del Atuel" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJ43gMZ2h3TW57nZYlCzugfnbgb93vdL9XZ1ZX_rskL1_8pw0ByV9IQIVS5K-PORMDltJrXRAOOC1PbIVulYDbRJXPepAPn2W1IIn-PltSn9IzOEJm_wHSB9mTKubK9Bru52lybY3WAd_Fq4aFmolHqqr7-TKtyLdk5P1TzSEPi3aGe_AwjSQFe3h1nIW6GWQjk4fhWx_BG4fC8kWLZ0YRSgHAYaljUFyL76VThZfNLCG2oV4Z5kt"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">VALLE DE UCO</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Tecnología Agro</span></div><img alt="Valle de Uco viñedos" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjsRVoj3RejAg102GiNJejTdsY1TN_C-qeMN0K-rmA6-xjav6aBfdB4TGpvGYYEnVHnzbtXdnc75XiV-HAluvzL4F0pYSHIvuhIeYxUUCP5ZAO6Ro7ASepVwNEKu6q52qGlGCFu_9ddqZGN8Pz21IkvGNM2vUAQhJU1KCcIdAvaZKvDMDJXwMywLZNhPRneTZhwLZD8CEHLk2zNKbCsXR1pdDlK3cvC5LB-EppGyOc0RLY181YXyP"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">SOCIEDAD</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Salud Provincial</span></div><img alt="Salud hospitalaria" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-St004_5wvgkUCZqgKnZTlKSQfpaEvKK3KCSnTtPLZrKd5ZX35zdjjyQZTSkHkM9bj4TDSTuBUVBG4BgvmN8LFbQ191EfWRHlpNKJfum8jK3kzfsLEMV-I7rmMM1P0gRSF2IaHNXybDs7fVKPyFwa2ZdwlxJEOwyFBypq8pol-P0YR7sxbbMu_nZBjmWFw6DNlUqR3l5hjcOfZgeKN4avyec1Pg9unMoUB-M3nq95k2zZEEnfiiG1"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">GODOY CRUZ</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Desarrollo Urbano</span></div><img alt="Obras urbanas" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHJf14VhUDP5FRgpqTXQ8Lvtp7vUu1dltVuWmKsuyB0Sjb-TMyHmbmMJHOUyCGLxTN0DY3QGR-y_1WFD5ZsKdvkdTbBR4WLMQqTECRgqPGBJ9XnCVJCNOTF7zSEpLQjVYukZVgZmCg-0n40vgXUV8cAyhae4mUrE7GtwisAUZIivJmzE-NfLbq_W_RcFuwrKhvRH_Ig57-GGTeNx25efRl94S9nUAkX07xN1-bEGQfgLMTXdL8uJf9"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">CULTURA</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Patrimonio Cuyano</span></div><img alt="Museo y artes" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAux9PsIRtesbmgjF6msmskzlt_-RX70ZT_YE039pX06yCTI2LT3K-xCbY3ksobvvNPbTGUaBxlTxTIYDV3dJKL9nDi6UA0izDETW-RX24oHkVzVPVp1E0OI_FOOfZXNuC5WQSXQld67M8JQf2tjPSSbjG6L_xB-fwBkmj-SW5L8tKgvuie-O1JivG1iy6ehD8DF0cwJpJE2thT0aOyb97kCjGIr7oO-FfmOCC65R9cfgbR1JnTabym"></article></div><div class="flex flex-col gap-space-md"><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">LAVALLE</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3><span class="font-data-mono text-data-mono text-primary font-bold mt-1">CRÓNICA REGIONAL</span></div><img alt="Capilla de Asunción" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-JbtzGXwH6F8sKbMJbRB_x6vWB3IuUIbY3IjVzqBLw3kPg5Bvg9rORkdP4Jv9bwguoPTv9UZ-eMlyTNzk9KYija2pmhGRs4A8HAMPPoLyIp3QFXwCh118l2ItNwS3rYvCNKtbWh1GqMqgCzCVIJlw1Vu9NCdnbiJa2XKX2ZTdbHFr1wnf3NDccbq3nzwbUD8CdstAixozeKaIDdwefxUPcrnU8P1fvNM43Muh5f-MjZ_1yy1_CWly"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">ENERGÍA & MINERÍA</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Energías Limpias</span></div><img alt="Energía en Cuyo" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Gt4J01hdCVt4QiJl2ncE006qUOpptd1KUfMXSaNu6wSiplYg_buODJ-_lfM75_6BJO8C8j6a_I9EChe2LQ4dcXuVQa_M15WrnYjXgIcWjb-l1JRzK2-EQnke8w_KGrZlLgtGcsn3jcnpVuvVh19HY5siN4KMGbYvnxLTtXshuG2lKqPhvD3FU5ZJtz1BhLqTal4LM0i6QvcwqlmeRCKKuH8vGHeqPuUUhQZla2_d0iaYN2OTlQFx"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">INTERNACIONALES</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Nam libero tempore cum soluta nobis est eligendi optio cumque nihil</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Frontera Binacional</span></div><img alt="Paso a Chile" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI-Oo1LyB229drMNuQFzlaLZRasCuNwtGsi00lQ5EEPkV2hps2lHX48KXckvxUh3bZdKmlAJ7UnbCS5ahQW1RE5h5UJy9gJQuaPvDmZJgTI0RDMxeGlFAf6WchJzPDdquBctYGwhiKid7gq55MKCigDLP6QOxuFDBKx3My3rXUjGM3sWWyZJ25DSFfu2hLZnAnetoqqn9sEC1f4u7Wv6sc9cBE8m7rL4RGcDK-r-nG6odK9XOrzDIR"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">EDUCACIÓN</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Educación Superior</span></div><img alt="Universidad UNCuyo" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtfY4G7MRKIJc0D5fX_BJz3m-OamiwohXDVY-CIUYvUvPzut7E-ukkaGbepsOiRyXBVBVRW8EWGrIfOxjqr7Y_MFklslHa0CDe0-rbP5cOs21v4rP_2-jHf_W9sCOxxXfZ_nu5SnQMZ6zkinNDWT2Y2stXVX7dxCjAK0nfRHWBzUojkPOZ19Jf_g3qrGHPtz4aQwMnkjRp1rgs8_sJPtZEvWPxYMnDyRyW_zsNzWEEyU8Fw5kx70GH"></article><article class="flex items-center gap-space-md group cursor-pointer bg-surface-subtle p-space-sm rounded-lg hover:bg-surface-container transition-colors"><div class="flex flex-col gap-1 flex-1"><span class="font-byline text-byline text-primary uppercase">ECONOMÍA</span><h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">Omnis voluptas assumenda est omnis dolor repellendus temporibus autem</h3><span class="font-data-mono text-data-mono text-text-muted mt-1">Industria Mendoza</span></div><img alt="Industria y finanzas" class="w-32 h-24 aspect-[4/3] rounded object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDru6_2m11I2k_IDWEBqGPupoNvs51RmSyco-a-XoV_7Lyho6mM34Fm0idZdyzxEtwgN-ACH7431JZQGGlEbtPByVP5tKBx3IYV3cKUAjhn3uf4m4r52_8xQOM1NfO90WvcHt9w-7s2oaAN14HkJt1xJXj5thDN7vbe39nTqaj9bynweETAaBTe-xYlzvQI1N4lrcUiVmrIKHzApG4YZp8EdkmfR1-eARS4x8M-IY-vqULrant5G3_r"></article></div></div>
<!-- Botón Cargar Más Noticias -->
<div class="w-full flex justify-center pt-space-lg">
<button class="bg-surface-subtle hover:bg-surface-container text-primary font-card-title text-card-title px-space-2xl py-space-sm rounded-lg flex items-center gap-space-xs transition-colors shadow-sm cursor-pointer">
<span class="material-symbols-outlined text-[18px]">expand_more</span>
<span class="">Cargar más noticias de la edición de hoy</span>
</button>
</div>
</section>
</div></div></main><footer class="w-full bg-inverse-surface text-inverse-on-surface"><div class="w-full max-w-[1360px] mx-auto px-margin pt-space-2xl pb-space-xl"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl"><div class="lg:col-span-2 flex flex-col gap-space-md"><div class="flex items-center gap-space-sm"><div class="h-9 flex items-center text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 52" class="h-8 w-auto" style="display: block;"><g fill="#ffffff"><path d="M121.49,1.16c-14.41,0-24.04,10.36-24.04,24.84s9.63,24.84,24.04,24.84,24.04-10.36,24.04-24.84S135.91,1.16,121.49,1.16ZM121.49,39.02c-3.72,0-9.43-2.46-9.43-13.02s5.71-13.02,9.43-13.02,9.43,2.46,9.43,13.02-5.71,13.02-9.43,13.02Z"></path><path d="M80.71,27.66h-.13l-14.94-25.37v-.02h-9.38c-2.45,0-4.43,1.98-4.43,4.43v34.08h13.82v-15.33l14.68,24.25h9.78c2.45,0,4.43-1.99,4.43-4.43V2.29h-13.81v25.37Z"></path><path d="M37.35,2.29c-2.43,0-4.41,1.97-4.41,4.41v21.29c0,4.83,0,10.84-6.87,10.84s-7.07-6.01-7.07-10.84V6.7c0-2.44-1.98-4.41-4.41-4.41h0s-10.13,0-10.13,0v28.94c0,13.08,7.14,19.36,21.54,19.36s21.47-6.28,21.47-19.36V2.29h-10.13Z"></path><path opacity="0.8" d="M65.64,2.29l7.6,35.73-7.61-12.57V2.29Z"></path><path d="M51.82,43.75v1.53c0,2.45,1.98,4.43,4.43,4.43h9.38v-5.97h-13.81Z"></path></g></svg></div><span class="bg-primary-container text-on-primary-container px-space-xs py-0.5 rounded font-cabezal text-cabezal ml-2">MENDOZA</span></div><p class="font-body text-body text-outline-variant max-w-sm">Periodismo riguroso y de vanguardia multimedia para la provincia de Mendoza y la región de Cuyo. Transmisión continua de Canal 7 y Radio Nihuil.</p><div class="flex items-center gap-space-md text-inverse-on-surface pt-space-sm"><span class="material-symbols-outlined text-[20px] text-outline-variant">podcasts</span><span class="material-symbols-outlined text-[20px] text-outline-variant">live_tv</span><span class="material-symbols-outlined text-[20px] text-outline-variant">rss_feed</span><span class="material-symbols-outlined text-[20px] text-outline-variant">notifications_active</span></div></div><div class="flex flex-col gap-space-sm"><span class="font-cabezal text-cabezal uppercase tracking-wider text-surface-container-high">Secciones</span><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="apertum" href="#">Apertum</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="politica" href="#">Política</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="ovacion" href="#">Ovación</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="economia" href="#">Economía</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="sociedad" href="#">Sociedad</a></div><div class="flex flex-col gap-space-sm"><span class="font-cabezal text-cabezal uppercase tracking-wider text-surface-container-high">Multimedia</span><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="en-vivo" href="#">Radio Nihuil Streaming</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="en-vivo" href="#">Canal 7 Mendoza</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="apertum" href="#">MAM Vertical Reels</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" data-path="opinion" href="#">Columnistas & Firmas</a></div><div class="flex flex-col gap-space-sm"><span class="font-cabezal text-cabezal uppercase tracking-wider text-surface-container-high">Institucional</span><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" href="#">Redacción y Contacto</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" href="#">Publicidad y Tarifario</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" href="#">Términos y Condiciones</a><a class="font-body text-body text-outline-variant hover:text-inverse-on-surface transition-colors" href="#">Políticas de Privacidad</a></div></div><div class="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md"><p class="font-label-meta text-label-meta text-outline-variant">© 2026 Diario UNO. Todos los derechos reservados.</p><p class="font-data-mono text-data-mono text-outline-variant">Edición N° 12.842 • Mendoza, República Argentina</p></div></div></footer>







`;

export default function DesktopPage() {
  return (
    <div
      className="desktop-prototype-root"
      dangerouslySetInnerHTML={{ __html: desktopMarkup }}
    />
  );
}
