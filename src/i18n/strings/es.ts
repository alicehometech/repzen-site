import type { Dict } from '~/i18n/types';

export const es: Dict = {
  meta: {
    title: 'RepZen — Cuenta tus repeticiones. Vive en tu muñeca.',
    description:
      'RepZen cuenta automáticamente tus flexiones, abdominales, sentadillas y otros siete ejercicios con peso corporal usando los sensores de movimiento del Apple Watch. Sin cuentas. Sin analítica. Sin datos saliendo de tu dispositivo.',
  },
  nav: {
    exercises: 'Ejercicios',
    how: 'Cómo funciona',
    privacy: 'Privacidad',
    faq: 'Preguntas',
    cta: 'Unirse a TestFlight',
    home: 'Inicio de RepZen',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: 'Cuenta tus repeticiones.',
    titleB: 'Vive en tu muñeca.',
    body: 'RepZen cuenta automáticamente tus flexiones, abdominales, sentadillas y otros siete ejercicios con peso corporal — usando solo los sensores de movimiento del Apple Watch. Sin botones durante una serie. Sin cuentas. Sin que tus datos salgan del dispositivo. Nunca.',
    primary: 'Unirse a la beta de TestFlight',
    secondary: 'Ver en GitHub',
    note: 'Gratis. Sin anuncios. Sin compras dentro de la app. Requiere Apple Watch y iPhone.',
    watch: { exercise: 'Flexiones', meta: 'Serie 2 de 3 · 23° de inclinación', chip: 'Contando en el dispositivo' },
  },
  exercises: {
    eyebrow: 'Diez ejercicios',
    title: 'Lo que cuenta',
    lede: 'Cada ejercicio tiene su propio detector ajustado al movimiento específico de tu muñeca.',
    names: {
      push_up: 'Flexiones',
      sit_up: 'Abdominales',
      squat: 'Sentadillas',
      lunge: 'Zancadas',
      jumping_jack: 'Saltos de tijera',
      bicep_curl: 'Curl de bíceps',
      shoulder_press: 'Press de hombro',
      superman: 'Superman',
      tricep_dip: 'Fondos de tríceps',
      pull_up: 'Dominadas',
    },
    manualLabel: 'Manual',
    note: 'Las dominadas no mueven la muñeca lo suficiente como para contarse de forma fiable, así que las marcamos como solo manuales: preferimos decirlo a mostrar un número equivocado.',
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Sensores, no conjeturas.',
    lede: 'Sin cámara. Sin ML en la nube. Solo los mismos sensores de movimiento que Apple incluye en cada Watch, leídos con un detector distinto para cada ejercicio.',
    steps: [
      {
        title: 'Lee la muñeca',
        body: 'El Apple Watch transmite acelerómetro, giroscopio y datos de actitud — tres señales que juntas describen cómo se mueve tu muñeca en el espacio.',
      },
      {
        title: 'Identifica la firma',
        body: 'Cada ejercicio tiene un movimiento propio. Una abdominal inclina el reloj 60°. Una flexión rota la muñeca 20°. Una sentadilla genera un pulso de aceleración limpio abajo y arriba.',
      },
      {
        title: 'Cuenta la repetición',
        body: 'Un detector distinto para cada ejercicio observa su firma en tiempo real. Supera el umbral, suma uno. Vuelve, se prepara para la siguiente. Sin viaje a la nube.',
      },
    ],
    chips: {
      slider: '<strong>Control de sensibilidad</strong> 1–10 por ejercicio',
      diagnostics: '<strong>Diagnóstico en vivo</strong> en el Watch',
      transparency: '<strong>Sin caja negra</strong> — ves qué está detectando',
    },
  },
  privacy: {
    eyebrow: 'Privacidad por diseño',
    titleA: 'Tu movimiento.',
    titleB: 'Tu muñeca.',
    titleC: 'Tu asunto.',
    lede: 'La mayoría de las apps de fitness envían tus datos a la nube — para sincronizar, para analítica, para monetizar, "para hacer copia". RepZen no.',
    points: [
      { title: 'Sin servidores', body: 'No hay adónde enviar tus datos, aunque quisiéramos. RepZen no tiene backend.' },
      { title: 'Sin cuentas', body: 'Sin registro, sin correo, sin inicio de sesión. Instala, concede el permiso de movimiento, empieza a contar.' },
      { title: 'Sin analítica', body: 'Sin SDKs de seguimiento, sin identificadores publicitarios, sin telemetría. Ni siquiera Plausible. Nada.' },
      { title: 'Sin datos saliendo del dispositivo', body: 'Movimiento, frecuencia cardíaca y entrenamientos se quedan en tu iPhone y Watch. Punto.' },
      { title: 'Apple Health, opcional', body: 'Sincroniza entrenamientos a Apple Health si quieres. De lo contrario, nada sale de la app.' },
      { title: 'Gratis, sin anuncios, sin compras', body: 'Hecha por una sola persona. Sin suscripción, sin venta adicional, sin nivel premium.' },
    ],
    cta: 'Leer la política de privacidad completa',
  },
  shots: {
    eyebrow: 'Capturas',
    title: 'Pantallas reales, próximamente.',
    lede: 'Estamos puliendo la interfaz antes de fijar las capturas de marketing. Únete a la beta para verla en acción.',
    coming: 'Próximamente',
    items: [
      { label: 'Inicio', blurb: 'Plan y actividad de hoy' },
      { label: 'Conteo en vivo', blurb: 'Las repeticiones suben en tu muñeca' },
      { label: 'Editor de plan', blurb: 'Construye un entrenamiento una vez' },
      { label: 'Diagnóstico', blurb: 'Mira qué está detectando' },
    ],
  },
  built: {
    eyebrow: 'Hecha por una sola persona',
    title: 'Sin equipo. Sin inversores. Sin anuncios que vender.',
    body: 'RepZen está hecha por una sola persona que no quería otra app de fitness con muro de pago por suscripción. Todo el código de iOS y Watch está en GitHub. Los reportes de fallos van directos a quien escribió el código.',
    gh: 'Código en GitHub',
    email: 'Escribir al desarrollador',
  },
  faq: {
    eyebrow: 'Respuestas honestas',
    title: 'Preguntas frecuentes',
    lede: 'Preferimos contarte qué no funciona antes que vender de más lo que sí.',
    items: [
      {
        q: '¿Es RepZen el contador de repeticiones más preciso?',
        a: 'No, y no lo decimos. Apps con gran presupuesto, ML en la nube y millones de usuarios captarán cuentas que la nuestra puede perder. RepZen apuesta por la transparencia, la privacidad y un control de sensibilidad que tú gestionas — no por ser la más precisa en cada ejercicio.',
      },
      {
        q: '¿Por qué cuenta mal las dominadas?',
        a: 'En una dominada estricta la muñeca apenas se mueve — no hay suficiente señal en el acelerómetro o el giroscopio para activarse de forma fiable. Marcamos las dominadas (y ciertos fondos) como solo manuales en lugar de adivinar. Una versión futura podría usar el barómetro para detectar por altura.',
      },
      {
        q: '¿Y si el conteo es incorrecto?',
        a: 'Cada ejercicio tiene un control de sensibilidad de 1 a 10. Súbelo si pierde repeticiones, bájalo si las cuenta de más. El diagnóstico en vivo en el Watch muestra la inclinación y la rotación de la muñeca en tiempo real, así ves qué está detectando el algoritmo y lo afinas.',
      },
      {
        q: '¿Sale algún dato de mi dispositivo?',
        a: 'No, salvo que actives la sincronización con Apple Health. RepZen no tiene servidores, ni cuentas, ni analítica, ni identificadores publicitarios. Los entrenamientos y los datos de movimiento se quedan en tu iPhone y Watch. Si concedes permiso a Health, esos entrenamientos pasan a Apple Health en tu dispositivo, gobernados por el marco de privacidad de Apple.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Gratis. Sin anuncios. Sin compras dentro de la app. Sin suscripción. La hace una sola persona que no quería otra app de fitness con muro de pago.',
      },
      {
        q: '¿Cuándo estará en la App Store?',
        a: 'Ahora está en beta de TestFlight (v0.1.x). Llegará a la App Store cuando los detectores de repeticiones estén ajustados a más cuerpos, más variantes de ejercicio y más calidades de forma. Únete a la beta para ayudarnos a llegar ahí.',
      },
    ],
    outroLead: '¿Tienes una pregunta que no respondimos? ',
    outroEmail: 'Escribe al desarrollador',
    outroOr: ' o ',
    outroJoin: 'únete a la beta',
    outroTrail: '.',
  },
  footer: {
    privacy: 'Privacidad',
    contact: 'Contacto',
    github: 'GitHub',
    copyright:
      '© {year} RepZen. Hecha por una sola persona. Apple Watch, iPhone y Apple Health son marcas comerciales de Apple Inc.',
  },
  notFound: {
    eyebrow: '404',
    title: 'Página no encontrada.',
    body: 'La página que buscas se movió o nunca existió. Prueba con la página de inicio.',
    cta: 'Volver a RepZen',
  },
  langSwitcher: { label: 'Idioma' },
  privacyPage: {
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    lastUpdated: 'Última actualización: 2 de mayo de 2026',
    notice: 'Esta traducción se ofrece a título informativo. En caso de discrepancia, prevalece la versión en inglés.',
    intro:
      'RepZen es una aplicación de seguimiento de entrenamientos para Apple Watch e iPhone que cuenta repeticiones usando los sensores de movimiento del dispositivo. Adoptamos un enfoque de datos mínimos: <strong>todos los datos permanecen en tu dispositivo</strong> a menos que los sincronices explícitamente con Apple Health.',
    sections: {
      collect: {
        title: 'Qué recopilamos y por qué',
        columns: { data: 'Dato', source: 'Fuente', why: 'Por qué', where: 'Dónde reside' },
        rows: [
          { data: 'Datos de movimiento (acelerómetro, giroscopio, actitud)', source: 'IMU del Apple Watch', why: 'Contar repeticiones', where: 'Solo en el dispositivo — nunca se transmite fuera' },
          { data: 'Frecuencia cardíaca', source: 'Apple HealthKit', why: 'Mostrar tu FC durante los entrenamientos', where: 'Solo en el dispositivo' },
          { data: 'Pasos', source: 'Apple HealthKit', why: 'Mostrar la actividad de hoy', where: 'Solo en el dispositivo' },
          { data: 'Historial de entrenamientos', source: 'Almacenamiento local + Apple Health', why: 'Vista de historial, objetivos semanales', where: 'En el dispositivo + Apple Health (a tu control)' },
          { data: 'Perfil (edad, peso, altura, sexo)', source: 'Lo introduces tú o se rellena desde Apple Health', why: 'Personalizar la app', where: 'Solo en el dispositivo' },
          { data: 'Ajustes de plan, preferencias de sensibilidad', source: 'Tú lo configuras en la app', why: 'Configuración de la app', where: 'Solo en el dispositivo, vía contenedor App Group' },
        ],
      },
      donot: {
        title: 'Qué NO hacemos',
        items: [
          '<strong>No</strong> transmitimos tus datos de movimiento, salud o entrenamiento a ningún servidor.',
          '<strong>No</strong> usamos analítica, anuncios o SDKs de seguimiento de terceros.',
          '<strong>No</strong> compartimos tus datos con nadie.',
          '<strong>No</strong> creamos cuentas de usuario. No hay inicio de sesión.',
          '<strong>No</strong> accedemos a tus contactos, fotos, ubicación ni micrófono.',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          'Si concedes permiso a la app, RepZen lee y escribe en Apple HealthKit en tu dispositivo. Los datos de Apple HealthKit están cifrados en reposo y se sincronizan únicamente entre tus dispositivos Apple a través de tu cuenta de iCloud, gobernados por el marco de privacidad de Apple. RepZen nunca ve estos datos fuera de tu dispositivo.',
        revoke:
          'Puedes revocar el acceso de RepZen a HealthKit en cualquier momento en: <strong>app Salud → Compartir → Apps → RepZen</strong>',
      },
      music: {
        title: 'Apple Music',
        body:
          'Si decides reproducir música durante los entrenamientos, RepZen solicita permiso para reproducir pistas de tu biblioteca de Apple Music. La app no transmite ni almacena tus selecciones musicales.',
      },
      sync: {
        title: 'Sincronización Watch ↔ iPhone',
        body:
          'Las apps del Apple Watch y del iPhone sincronizan ajustes y entrenamientos completados entre sí mediante el framework <code>WCSession</code> de Apple. Esos datos viajan directamente entre tus dispositivos emparejados por Bluetooth/Wi-Fi mediante el canal local cifrado de Apple, y no pasan por ningún servidor de RepZen.',
      },
      children: {
        title: 'Niños',
        body:
          'RepZen no recopila a sabiendas datos de menores de 13 años. La app no tiene cuentas de usuario ni servidor, así que no hay datos de perfil que salgan del dispositivo.',
      },
      changes: {
        title: 'Cambios en esta política',
        body:
          'Actualizaremos esta página si nuestras prácticas de datos cambian. La fecha de "Última actualización" en la parte superior refleja la revisión más reciente.',
      },
      contact: {
        title: 'Contacto',
        body:
          'Para consultas de privacidad, contacta al desarrollador en: <a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};
