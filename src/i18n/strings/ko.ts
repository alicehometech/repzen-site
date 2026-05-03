import type { Dict } from '~/i18n/types';

export const ko: Dict = {
  meta: {
    title: 'RepZen — 횟수를 셉니다. 손목 위에서.',
    description:
      'RepZen은 Apple Watch의 모션 센서만으로 푸시업, 싯업, 스쿼트 등 10가지 맨몸 운동의 횟수를 자동으로 셉니다. 계정 없음. 분석 없음. 데이터가 기기를 벗어나지 않습니다.',
  },
  nav: {
    exercises: '운동',
    how: '작동 원리',
    privacy: '개인정보',
    faq: '자주 묻는 질문',
    cta: 'TestFlight 참여',
    home: 'RepZen 홈',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: '횟수를 셉니다.',
    titleB: '손목 위에서.',
    body: 'RepZen은 푸시업, 싯업, 스쿼트를 포함한 10가지 맨몸 운동을 Apple Watch의 모션 센서만으로 자동으로 셉니다. 세트 중 버튼을 누를 일이 없습니다. 계정도 없습니다. 데이터는 절대 기기를 벗어나지 않습니다.',
    primary: 'TestFlight 베타 참여',
    secondary: 'GitHub에서 보기',
    note: '무료. 광고 없음. 인앱 결제 없음. Apple Watch와 iPhone이 필요합니다.',
    watch: { exercise: '푸시업', meta: '세트 2 / 3 · 기울기 23°', chip: '기기에서 카운팅 중' },
  },
  exercises: {
    eyebrow: '10가지 운동',
    title: '셀 수 있는 것',
    lede: '각 운동마다 손목의 특정 동작에 맞춰 조정된 전용 검출기가 있습니다.',
    names: {
      push_up: '푸시업',
      sit_up: '싯업',
      squat: '스쿼트',
      lunge: '런지',
      jumping_jack: '점핑잭',
      bicep_curl: '바이셉 컬',
      shoulder_press: '숄더 프레스',
      superman: '슈퍼맨',
      tricep_dip: '트라이셉 딥스',
      pull_up: '풀업',
    },
    manualLabel: '수동',
    note: '풀업은 손목이 거의 움직이지 않아 안정적인 카운팅이 어렵습니다. 잘못된 숫자를 보여주느니 수동 전용으로 표시합니다.',
  },
  how: {
    eyebrow: '작동 원리',
    title: '추측이 아닌, 센서로.',
    lede: '카메라 없음. 클라우드 ML 없음. 모든 Watch에 들어 있는 동일한 모션 센서를, 운동마다 다른 검출기로 읽을 뿐입니다.',
    steps: [
      {
        title: '손목을 읽기',
        body: 'Apple Watch는 가속도계, 자이로스코프, 자세 데이터를 실시간으로 전달합니다. 세 신호가 함께 손목이 공간에서 어떻게 움직이는지를 그려냅니다.',
      },
      {
        title: '시그니처 매칭',
        body: '모든 운동은 고유한 동작을 갖습니다. 싯업은 Watch를 60° 기울입니다. 푸시업은 손목을 20° 회전시킵니다. 스쿼트는 바닥과 정점에서 깨끗한 가속 펄스를 만듭니다.',
      },
      {
        title: '횟수 카운트',
        body: '운동마다 다른 검출기가 자기 시그니처를 실시간으로 지켜봅니다. 임계값을 넘으면 +1, 다시 돌아오면 다음을 준비합니다. 클라우드 왕복은 없습니다.',
      },
    ],
    chips: {
      slider: '<strong>민감도 슬라이더</strong>운동마다 1–10',
      diagnostics: '<strong>실시간 진단</strong>을 Watch에 표시',
      transparency: '<strong>블랙박스가 아닙니다</strong> — 무엇을 감지하는지 보입니다',
    },
  },
  privacy: {
    eyebrow: '설계 단계의 개인정보 보호',
    titleA: '당신의 움직임.',
    titleB: '당신의 손목.',
    titleC: '오직 당신의 일.',
    lede: '대부분의 피트니스 앱은 동기화, 분석, 수익화, "백업"을 위해 데이터를 클라우드로 보냅니다. RepZen은 그러지 않습니다.',
    points: [
      { title: '서버 없음', body: '원해도 데이터를 보낼 곳이 없습니다. RepZen에는 백엔드가 존재하지 않습니다.' },
      { title: '계정 없음', body: '가입 없음, 이메일 없음, 로그인 없음. 설치하고 모션 권한만 허용하면 카운팅 시작.' },
      { title: '분석 없음', body: '추적 SDK 없음, 광고 ID 없음, 텔레메트리 없음. Plausible조차 없습니다.' },
      { title: '데이터가 기기를 벗어나지 않음', body: '모션, 심박수, 운동 기록은 모두 iPhone과 Watch에 머뭅니다. 그게 전부입니다.' },
      { title: '선택적 Apple Health', body: '원하시면 Apple Health로 운동을 동기화할 수 있습니다. 그 외에는 무엇도 앱을 떠나지 않습니다.' },
      { title: '무료, 광고 없음, 결제 없음', body: '한 명의 개발자가 만들었습니다. 구독도, 업셀도, 프리미엄 플랜도 없습니다.' },
    ],
    cta: '전체 개인정보 처리방침 읽기',
  },
  shots: {
    eyebrow: '스크린샷',
    title: '실제 화면, 곧 공개.',
    lede: '마케팅 스크린샷을 확정하기 전에 UI를 다듬는 중입니다. 실제 동작은 베타에 참여해 보세요.',
    coming: '곧 공개',
    items: [
      { label: '홈', blurb: '오늘의 계획과 활동' },
      { label: '실시간 카운트', blurb: '횟수가 손목 위에서 올라갑니다' },
      { label: '플랜 편집기', blurb: '한 번만 운동을 구성' },
      { label: '진단', blurb: '무엇을 감지하는지 확인' },
    ],
  },
  built: {
    eyebrow: '한 명의 개발자가 제작',
    title: '팀 없음. 투자자 없음. 팔 광고도 없음.',
    body: 'RepZen은 또 하나의 구독 결제벽 피트니스 앱을 만들기 싫어한 한 명의 개발자가 만들었습니다. iOS와 Watch의 전체 소스는 GitHub에 있습니다. 버그 리포트는 코드를 쓴 그 사람에게 곧장 전달됩니다.',
    gh: 'GitHub에서 소스 보기',
    email: '개발자에게 이메일',
  },
  faq: {
    eyebrow: '정직한 답변',
    title: '자주 묻는 질문',
    lede: '잘 되는 것을 과장하기보다는, 안 되는 것을 솔직히 말합니다.',
    items: [
      {
        q: 'RepZen이 가장 정확한 횟수 카운터인가요?',
        a: '아니요, 그렇게 주장하지도 않습니다. 큰 예산과 클라우드 ML, 수백만 사용자를 가진 앱들은 우리가 놓치는 카운트를 잡아낼 것입니다. RepZen이 거는 것은 투명성, 개인정보 보호, 그리고 당신이 직접 조절하는 민감도 슬라이더입니다 — 모든 운동에서 절대 정확도 1위를 노리는 것이 아닙니다.',
      },
      {
        q: '왜 풀업은 잘 카운트되지 않나요?',
        a: '엄격한 풀업에서는 손목이 거의 움직이지 않아, 가속도계나 자이로스코프에 안정적인 트리거를 위한 신호가 충분하지 않습니다. 추측하기보다는 풀업(그리고 일부 딥스)을 수동 전용으로 표시했습니다. 향후 버전에서는 기압계 기반의 높이 감지를 도입할 수 있습니다.',
      },
      {
        q: '카운트가 틀리면 어떻게 하나요?',
        a: '모든 운동에는 1에서 10까지의 민감도 슬라이더가 있습니다. 횟수가 빠지면 올리고, 잘못 카운트되면 내리세요. Watch의 실시간 진단이 손목의 기울기와 회전을 보여주므로, 알고리즘이 무엇을 감지하는지 확인하면서 미세하게 맞출 수 있습니다.',
      },
      {
        q: '데이터가 기기를 떠나나요?',
        a: 'Apple Health 동기화를 켜지 않는 한 그렇지 않습니다. RepZen에는 서버, 계정, 분석, 광고 식별자가 없습니다. 운동과 모션 데이터는 iPhone과 Watch에 머뭅니다. Health 권한을 허용하면, 그 운동들은 기기의 Apple Health로 이동하며 Apple의 개인정보 보호 프레임워크의 관리를 받습니다.',
      },
      {
        q: '비용은 얼마인가요?',
        a: '무료입니다. 광고 없음. 인앱 결제 없음. 구독 없음. 또 하나의 결제벽 피트니스 앱을 원치 않은 한 명의 개발자가 만들었습니다.',
      },
      {
        q: 'App Store에는 언제 출시되나요?',
        a: '지금은 TestFlight 베타(v0.1.x)에 있습니다. 횟수 검출기가 더 다양한 체형, 운동 변형, 자세 품질에 맞춰지면 App Store로 출시할 예정입니다. 베타에 참여해 함께 다듬어 주세요.',
      },
    ],
    outroLead: '여기서 답을 찾지 못한 질문이 있다면 ',
    outroEmail: '개발자에게 이메일',
    outroOr: ' 보내거나 ',
    outroJoin: '베타에 참여',
    outroTrail: '하세요.',
  },
  footer: {
    privacy: '개인정보',
    contact: '연락처',
    github: 'GitHub',
    copyright:
      '© {year} RepZen. 한 명의 개발자가 만들었습니다. Apple Watch, iPhone, Apple Health는 Apple Inc.의 상표입니다.',
  },
  notFound: {
    eyebrow: '404',
    title: '페이지를 찾을 수 없습니다.',
    body: '찾으시는 페이지가 이동되었거나 존재하지 않습니다. 홈으로 가보세요.',
    cta: 'RepZen으로 돌아가기',
  },
  langSwitcher: { label: '언어' },
  privacyPage: {
    eyebrow: '법적 고지',
    title: '개인정보 처리방침',
    lastUpdated: '최종 업데이트: 2026년 5월 2일',
    notice: '이 번역은 참고용입니다. 해석상 차이가 있을 경우 영문판이 우선합니다.',
    intro:
      'RepZen은 Apple Watch와 iPhone용 운동 기록 앱으로, 기기의 모션 센서를 사용해 운동 횟수를 셉니다. 우리는 데이터 최소화 원칙을 따릅니다: 사용자가 명시적으로 Apple Health에 동기화하지 않는 한, <strong>모든 데이터는 기기에 머뭅니다</strong>.',
    sections: {
      collect: {
        title: '수집 항목과 그 이유',
        columns: { data: '데이터', source: '출처', why: '이유', where: '저장 위치' },
        rows: [
          { data: '모션 데이터 (가속도계, 자이로스코프, 자세)', source: 'Apple Watch IMU', why: '운동 횟수 카운팅', where: '기기에만 — 기기에서 전송되지 않음' },
          { data: '심박수', source: 'Apple HealthKit', why: '운동 중 심박수 표시', where: '기기에만' },
          { data: '걸음 수', source: 'Apple HealthKit', why: '오늘의 활동 표시', where: '기기에만' },
          { data: '운동 기록', source: '로컬 앱 저장소 + Apple Health', why: '기록 보기, 주간 목표', where: '기기 + Apple Health (사용자 통제)' },
          { data: '프로필 (나이, 체중, 키, 성별)', source: '직접 입력 또는 Apple Health에서 자동 입력', why: '앱 개인화', where: '기기에만' },
          { data: '플랜 설정, 민감도 환경설정', source: '앱에서 설정', why: '앱 구성', where: '기기에만, App Group 컨테이너 사용' },
        ],
      },
      donot: {
        title: '하지 않는 것',
        items: [
          '모션, 건강, 운동 데이터를 어떤 서버에도 <strong>전송하지 않습니다</strong>.',
          '서드파티 분석, 광고, 추적 SDK를 <strong>사용하지 않습니다</strong>.',
          '데이터를 누구와도 <strong>공유하지 않습니다</strong>.',
          '사용자 계정을 <strong>만들지 않습니다</strong>. 로그인이 없습니다.',
          '연락처, 사진, 위치, 마이크에 <strong>접근하지 않습니다</strong>.',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          '권한을 허용하면 RepZen은 기기의 Apple HealthKit를 읽고 씁니다. Apple HealthKit 데이터는 저장 시 암호화되며, iCloud 계정을 통해서만 사용자의 Apple 기기 간에 동기화되고, Apple의 개인정보 보호 프레임워크의 관리를 받습니다. RepZen은 사용자의 기기 외부에서 이 데이터를 보지 않습니다.',
        revoke:
          'RepZen의 HealthKit 접근은 언제든 다음 위치에서 취소할 수 있습니다: <strong>Apple 건강 앱 → 공유 → 앱 → RepZen</strong>',
      },
      music: {
        title: 'Apple Music',
        body:
          '운동 중 음악을 재생하기로 한 경우, RepZen은 Apple Music 라이브러리의 트랙을 재생할 권한을 요청합니다. 앱은 사용자의 음악 선택을 전송하거나 저장하지 않습니다.',
      },
      sync: {
        title: 'Watch ↔ iPhone 동기화',
        body:
          'Apple Watch 앱과 iPhone 앱은 Apple의 <code>WCSession</code> 프레임워크를 사용해 설정과 완료된 운동을 서로 동기화합니다. 이 데이터는 Apple의 암호화된 로컬 채널을 통해 페어링된 기기 간에 Bluetooth/Wi-Fi로 직접 이동하며, RepZen 서버를 거치지 않습니다.',
      },
      children: {
        title: '아동',
        body:
          'RepZen은 13세 미만 아동의 데이터를 의도적으로 수집하지 않습니다. 앱에는 사용자 계정이나 서버가 없으므로 프로필 데이터가 기기를 벗어나지 않습니다.',
      },
      changes: {
        title: '본 방침의 변경',
        body:
          '데이터 처리 방식이 변경되면 이 페이지를 업데이트합니다. 상단의 "최종 업데이트" 날짜가 가장 최근 개정을 반영합니다.',
      },
      contact: {
        title: '연락처',
        body:
          '개인정보 관련 문의는 개발자에게 연락하세요: <a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};
