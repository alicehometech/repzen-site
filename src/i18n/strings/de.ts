import type { Dict } from '~/i18n/types';

export const de: Dict = {
  meta: {
    title: 'RepZen — Zählt deine Wiederholungen. Bleibt am Handgelenk.',
    description:
      'RepZen zählt deine Liegestütze, Sit-ups, Kniebeugen und sieben weitere Körpergewichtsübungen automatisch — nur mit den Bewegungssensoren der Apple Watch. Keine Konten. Keine Analyse. Keine Daten, die dein Gerät verlassen.',
  },
  nav: {
    exercises: 'Übungen',
    how: 'So funktioniert es',
    privacy: 'Datenschutz',
    faq: 'FAQ',
    cta: 'TestFlight beitreten',
    home: 'RepZen Startseite',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: 'Zählt deine Wiederholungen.',
    titleB: 'Bleibt am Handgelenk.',
    body: 'RepZen zählt deine Liegestütze, Sit-ups, Kniebeugen und sieben weitere Körpergewichtsübungen automatisch — nur mit den Bewegungssensoren der Apple Watch. Keine Tasten während eines Satzes. Keine Konten. Keine Daten, die dein Gerät verlassen. Niemals.',
    primary: 'TestFlight-Beta beitreten',
    secondary: 'Auf GitHub ansehen',
    note: 'Kostenlos. Keine Werbung. Keine In-App-Käufe. Apple Watch und iPhone erforderlich.',
    watch: { exercise: 'Liegestütze', meta: 'Satz 2 von 3 · 23° Neigung', chip: 'Zählt auf dem Gerät' },
  },
  exercises: {
    eyebrow: 'Zehn Übungen',
    title: 'Was es zählt',
    lede: 'Jede Übung hat einen eigenen Detektor, der auf die spezifische Bewegung deines Handgelenks abgestimmt ist.',
    names: {
      push_up: 'Liegestütze',
      sit_up: 'Sit-ups',
      squat: 'Kniebeugen',
      lunge: 'Ausfallschritte',
      jumping_jack: 'Hampelmänner',
      bicep_curl: 'Bizepscurls',
      shoulder_press: 'Schulterdrücken',
      superman: 'Superman',
      tricep_dip: 'Trizeps-Dips',
      pull_up: 'Klimmzüge',
    },
    manualLabel: 'Manuell',
    note: 'Klimmzüge bewegen das Handgelenk nicht genug für eine zuverlässige Zählung — daher als reine Handzählung markiert. Lieber sagen wir es offen, als eine falsche Zahl zu zeigen.',
  },
  how: {
    eyebrow: 'So funktioniert es',
    title: 'Sensoren statt Vermutungen.',
    lede: 'Keine Kamera. Kein Cloud-ML. Nur dieselben Bewegungssensoren, die Apple in jeder Watch verbaut — gelesen mit einem eigenen Detektor pro Übung.',
    steps: [
      {
        title: 'Handgelenk lesen',
        body: 'Die Apple Watch streamt Beschleunigungsmesser-, Gyroskop- und Lagedaten — drei Signale, die zusammen beschreiben, wie sich dein Handgelenk im Raum bewegt.',
      },
      {
        title: 'Signatur abgleichen',
        body: 'Jede Übung hat eine eigene Bewegung. Ein Sit-up neigt die Watch um 60°. Ein Liegestütz dreht das Handgelenk um 20°. Eine Kniebeuge erzeugt unten und oben einen klaren Beschleunigungsimpuls.',
      },
      {
        title: 'Wiederholung zählen',
        body: 'Pro Übung beobachtet ein eigener Detektor seine Signatur in Echtzeit. Schwelle überschritten — plus eins. Zurück — wieder bereit. Kein Cloud-Umweg.',
      },
    ],
    chips: {
      slider: '<strong>Empfindlichkeitsregler</strong> 1–10 pro Übung',
      diagnostics: '<strong>Live-Diagnose</strong> auf der Watch',
      transparency: '<strong>Keine Black Box</strong> — du siehst, was erkannt wird',
    },
  },
  privacy: {
    eyebrow: 'Datenschutz von Anfang an',
    titleA: 'Deine Bewegung.',
    titleB: 'Dein Handgelenk.',
    titleC: 'Deine Sache.',
    lede: 'Die meisten Fitness-Apps schicken deine Daten in die Cloud — zur Synchronisation, zur Analyse, zur Monetarisierung, "für das Backup". RepZen tut das nicht.',
    points: [
      { title: 'Keine Server', body: 'Selbst wenn wir wollten — deine Daten haben keinen Ort, an den sie gehen könnten. RepZen hat kein Backend.' },
      { title: 'Keine Konten', body: 'Keine Anmeldung, keine E-Mail, kein Login. Installieren, Bewegungszugriff erlauben, zählen.' },
      { title: 'Keine Analyse', body: 'Keine Tracking-SDKs, keine Werbe-IDs, keine Telemetrie. Nicht einmal Plausible. Nichts.' },
      { title: 'Keine Daten verlassen das Gerät', body: 'Bewegung, Herzfrequenz und Workouts bleiben auf deinem iPhone und der Watch. Punkt.' },
      { title: 'Apple Health, optional', body: 'Wenn du willst, sync deine Workouts zu Apple Health. Sonst verlässt nichts die App.' },
      { title: 'Kostenlos, ohne Werbung, ohne In-App-Käufe', body: 'Von einer einzelnen Person gebaut. Kein Abo, kein Upsell, keine Premium-Stufe.' },
    ],
    cta: 'Vollständige Datenschutzerklärung lesen',
  },
  shots: {
    eyebrow: 'Screenshots',
    title: 'Echte Screens, in Kürze.',
    lede: 'Wir polieren das UI, bevor wir Marketing-Screenshots festlegen. Tritt der Beta bei und sieh es in Aktion.',
    coming: 'Bald verfügbar',
    items: [
      { label: 'Start', blurb: 'Heutiger Plan und Aktivität' },
      { label: 'Live-Zählung', blurb: 'Wiederholungen ticken am Handgelenk' },
      { label: 'Plan-Editor', blurb: 'Workout einmal aufbauen' },
      { label: 'Diagnose', blurb: 'Sieh, was erkannt wird' },
    ],
  },
  built: {
    eyebrow: 'Von einer Person gebaut',
    title: 'Kein Team. Keine Investoren. Keine Werbung zu verkaufen.',
    body: 'RepZen wird von einer einzelnen Person entwickelt, die nicht noch eine Fitness-App mit Abo-Schranke wollte. Der gesamte iOS- und Watch-Quellcode liegt auf GitHub. Bug-Reports gehen direkt an die Person, die den Code geschrieben hat.',
    gh: 'Quellcode auf GitHub',
    email: 'Entwickler kontaktieren',
  },
  faq: {
    eyebrow: 'Ehrliche Antworten',
    title: 'Häufige Fragen',
    lede: 'Wir sagen lieber, was nicht klappt, als zu übertreiben, was klappt.',
    items: [
      {
        q: 'Ist RepZen der genaueste Wiederholungszähler?',
        a: 'Nein, und wir behaupten es nicht. Apps mit großem Budget, Cloud-ML und Millionen Nutzern werden Wiederholungen erfassen, die wir verpassen. RepZen setzt auf Transparenz, Datenschutz und einen Empfindlichkeitsregler, den du selbst steuerst — nicht darauf, in jeder Übung der Beste zu sein.',
      },
      {
        q: 'Warum werden Klimmzüge schlecht gezählt?',
        a: 'Bei einem strikten Klimmzug bewegt sich das Handgelenk kaum — Beschleunigungsmesser und Gyroskop liefern nicht genug Signal für eine zuverlässige Auslösung. Wir markieren Klimmzüge (und bestimmte Dips) lieber als reine Handzählung, statt zu raten. Eine künftige Version könnte das Barometer für eine höhenbasierte Erkennung nutzen.',
      },
      {
        q: 'Was, wenn die Zählung falsch ist?',
        a: 'Jede Übung hat einen Empfindlichkeitsregler von 1 bis 10. Hochdrehen, wenn Wiederholungen verloren gehen; runter, wenn falsch gezählt wird. Die Live-Diagnose auf der Watch zeigt Handgelenkneigung und -drehung in Echtzeit, sodass du siehst, was der Algorithmus erkennt und es feinjustieren kannst.',
      },
      {
        q: 'Verlassen Daten mein Gerät?',
        a: 'Nicht, solange du die Apple-Health-Synchronisation nicht aktivierst. RepZen hat keine Server, keine Konten, keine Analyse und keine Werbe-IDs. Workouts und Bewegungsdaten bleiben auf iPhone und Watch. Wenn du Health-Zugriff erteilst, fließen diese Workouts in Apple Health auf deinem Gerät, geregelt von Apples Datenschutz-Framework.',
      },
      {
        q: 'Was kostet die App?',
        a: 'Kostenlos. Keine Werbung. Keine In-App-Käufe. Kein Abo. Gebaut von einer einzelnen Person, die nicht noch eine Fitness-App hinter einer Bezahlschranke wollte.',
      },
      {
        q: 'Wann kommt sie in den App Store?',
        a: 'Aktuell in der TestFlight-Beta (v0.1.x). Der App-Store-Start folgt, sobald die Wiederholungszähler auf mehr Körper, mehr Übungsvarianten und mehr Bewegungsqualität abgestimmt sind. Tritt der Beta bei und hilf uns dorthin.',
      },
    ],
    outroLead: 'Frage, die wir nicht beantwortet haben? ',
    outroEmail: 'Schreib dem Entwickler',
    outroOr: ' oder ',
    outroJoin: 'tritt der Beta bei',
    outroTrail: '.',
  },
  footer: {
    privacy: 'Datenschutz',
    contact: 'Kontakt',
    github: 'GitHub',
    copyright:
      '© {year} RepZen. Von einer Person gebaut. Apple Watch, iPhone und Apple Health sind Marken von Apple Inc.',
  },
  notFound: {
    eyebrow: '404',
    title: 'Seite nicht gefunden.',
    body: 'Die gesuchte Seite wurde verschoben oder hat nie existiert. Versuch es auf der Startseite.',
    cta: 'Zurück zu RepZen',
  },
  langSwitcher: { label: 'Sprache' },
  privacyPage: {
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 2. Mai 2026',
    notice: 'Diese Übersetzung dient nur zur Information. Bei Auslegungsfragen ist die englische Fassung maßgeblich.',
    intro:
      'RepZen ist eine Trainings-App für Apple Watch und iPhone, die Wiederholungen mithilfe der Bewegungssensoren des Geräts zählt. Wir verfolgen einen datenminimalen Ansatz: <strong>Alle Daten bleiben auf deinem Gerät</strong>, sofern du sie nicht ausdrücklich mit Apple Health synchronisierst.',
    sections: {
      collect: {
        title: 'Was wir erfassen und warum',
        columns: { data: 'Daten', source: 'Quelle', why: 'Warum', where: 'Wo sie liegen' },
        rows: [
          { data: 'Bewegungsdaten (Beschleunigungsmesser, Gyroskop, Lage)', source: 'Apple Watch IMU', why: 'Wiederholungen zählen', where: 'Nur auf dem Gerät — werden nicht gesendet' },
          { data: 'Herzfrequenz', source: 'Apple HealthKit', why: 'HF während des Workouts anzeigen', where: 'Nur auf dem Gerät' },
          { data: 'Schrittzahl', source: 'Apple HealthKit', why: 'Heutige Aktivität anzeigen', where: 'Nur auf dem Gerät' },
          { data: 'Workout-Verlauf', source: 'Lokaler App-Speicher + Apple Health', why: 'Verlaufsansicht, Wochenziele', where: 'Auf dem Gerät + Apple Health (du steuerst)' },
          { data: 'Profil (Alter, Gewicht, Größe, Geschlecht)', source: 'Du gibst es ein, oder es wird aus Apple Health übernommen', why: 'App personalisieren', where: 'Nur auf dem Gerät' },
          { data: 'Plan-Einstellungen, Empfindlichkeitsvorlieben', source: 'Du legst es in der App fest', why: 'App-Konfiguration', where: 'Nur auf dem Gerät, über App-Group-Container' },
        ],
      },
      donot: {
        title: 'Was wir NICHT tun',
        items: [
          'Wir übertragen deine Bewegungs-, Gesundheits- oder Workout-Daten <strong>nicht</strong> an irgendeinen Server.',
          'Wir nutzen <strong>keine</strong> Drittanbieter-Analyse, Werbung oder Tracking-SDKs.',
          'Wir teilen deine Daten <strong>mit niemandem</strong>.',
          'Wir legen <strong>keine</strong> Benutzerkonten an. Es gibt keinen Login.',
          'Wir greifen <strong>nicht</strong> auf Kontakte, Fotos, Standort oder Mikrofon zu.',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          'Wenn du der App die Berechtigung erteilst, liest und schreibt RepZen in Apple HealthKit auf deinem Gerät. Apple-HealthKit-Daten werden im Ruhezustand verschlüsselt und synchronisieren sich nur über deinen iCloud-Account zwischen deinen Apple-Geräten, geregelt durch Apples Datenschutz-Framework. RepZen sieht diese Daten nie außerhalb deines Geräts.',
        revoke:
          'Du kannst RepZens HealthKit-Zugriff jederzeit hier entziehen: <strong>Apple Health App → Teilen → Apps → RepZen</strong>',
      },
      music: {
        title: 'Apple Music',
        body:
          'Wenn du während des Workouts Musik abspielen möchtest, fragt RepZen die Berechtigung an, Titel aus deiner Apple-Music-Bibliothek abzuspielen. Die App überträgt oder speichert deine Musikauswahl nicht.',
      },
      sync: {
        title: 'Watch ↔ iPhone Sync',
        body:
          'Die Apple-Watch-App und die iPhone-App synchronisieren Einstellungen und abgeschlossene Workouts untereinander mit Apples <code>WCSession</code>-Framework. Diese Daten gehen über Apples verschlüsselten lokalen Kanal direkt zwischen deinen gekoppelten Geräten per Bluetooth/Wi-Fi und laufen nicht über einen RepZen-Server.',
      },
      children: {
        title: 'Kinder',
        body:
          'RepZen erhebt wissentlich keine Daten von Kindern unter 13 Jahren. Die App hat weder Benutzerkonten noch einen Server, sodass keine Profildaten das Gerät verlassen.',
      },
      changes: {
        title: 'Änderungen dieser Erklärung',
        body:
          'Wir aktualisieren diese Seite, wenn sich unsere Datenpraktiken ändern. Das "Zuletzt aktualisiert"-Datum oben spiegelt die jüngste Überarbeitung wider.',
      },
      contact: {
        title: 'Kontakt',
        body:
          'Bei Datenschutzfragen wende dich an den Entwickler: <a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};
