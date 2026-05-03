import type { Dict } from '~/i18n/types';

export const ja: Dict = {
  meta: {
    title: 'RepZen — レップを数える。手首の上で。',
    description:
      'RepZen は Apple Watch のモーションセンサーだけで、腕立て、腹筋、スクワットなど10種類の自重トレーニングのレップを自動カウント。アカウント不要。解析なし。データはデバイスから出ません。',
  },
  nav: {
    exercises: 'エクササイズ',
    how: '仕組み',
    privacy: 'プライバシー',
    faq: 'よくある質問',
    cta: 'TestFlight に参加',
    home: 'RepZen ホーム',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: 'レップを数える。',
    titleB: '手首の上で。',
    body: 'RepZen は腕立て、腹筋、スクワットを含む10種類の自重トレーニングを、Apple Watch のモーションセンサーだけで自動カウントします。セット中のボタン操作なし。アカウントなし。データがデバイスから出ることもなし。',
    primary: 'TestFlight ベータに参加',
    secondary: 'GitHub で見る',
    note: '無料。広告なし。アプリ内課金なし。Apple Watch と iPhone が必要です。',
    watch: { exercise: '腕立て', meta: '2/3 セット · 傾き 23°', chip: 'デバイス上でカウント中' },
  },
  exercises: {
    eyebrow: '10種類のエクササイズ',
    title: '数えられるもの',
    lede: '各エクササイズには、手首の動きに合わせて調整された専用の検出器があります。',
    names: {
      push_up: '腕立て伏せ',
      sit_up: '腹筋',
      squat: 'スクワット',
      lunge: 'ランジ',
      jumping_jack: 'ジャンピングジャック',
      bicep_curl: 'バイセップカール',
      shoulder_press: 'ショルダープレス',
      superman: 'スーパーマン',
      tricep_dip: 'トライセップディップス',
      pull_up: '懸垂',
    },
    manualLabel: '手動',
    note: '懸垂では手首がほとんど動かず、確実なカウントができません。誤った数を出すよりも、手動カウント専用と明示しています。',
  },
  how: {
    eyebrow: '仕組み',
    title: '推測ではなく、センサーで。',
    lede: 'カメラなし。クラウド ML なし。Apple がすべての Watch に搭載しているモーションセンサーを、エクササイズごとに別の検出器で読み取るだけです。',
    steps: [
      {
        title: '手首を読む',
        body: 'Apple Watch は加速度計、ジャイロスコープ、姿勢のデータをストリーミングします。3つの信号が組み合わさり、手首が空間でどう動くかを描き出します。',
      },
      {
        title: 'シグネチャを照合',
        body: 'すべてのエクササイズには固有の動きがあります。腹筋では Watch が60°傾きます。腕立てでは手首が20°回転します。スクワットでは底と頂上で明確な加速パルスが出ます。',
      },
      {
        title: 'レップを記録',
        body: '各エクササイズの検出器が自分のシグネチャをリアルタイムで監視。閾値を超えれば+1、戻れば次の準備。クラウド往復はありません。',
      },
    ],
    chips: {
      slider: '<strong>感度スライダー</strong>各エクササイズ 1〜10',
      diagnostics: '<strong>リアルタイム診断</strong>を Watch に表示',
      transparency: '<strong>ブラックボックスではない</strong> — 何を検出しているか見えます',
    },
  },
  privacy: {
    eyebrow: '設計からプライバシー',
    titleA: 'あなたの動き。',
    titleB: 'あなたの手首。',
    titleC: 'あなただけのもの。',
    lede: '多くのフィットネスアプリは、同期、解析、収益化、「バックアップ」のためにあなたのデータをクラウドに送ります。RepZen はそうしません。',
    points: [
      { title: 'サーバーなし', body: '送りたくても、データの行き先がそもそも存在しません。RepZen にバックエンドはありません。' },
      { title: 'アカウントなし', body: '登録なし、メールアドレスなし、ログインなし。インストールしてモーション権限を許可すれば、すぐにカウント開始。' },
      { title: '解析なし', body: 'トラッキング SDK なし、広告 ID なし、テレメトリなし。Plausible すら入れていません。何もありません。' },
      { title: 'データはデバイスから出ない', body: 'モーション、心拍、ワークアウトはすべて iPhone と Watch にとどまります。それだけです。' },
      { title: 'Apple Health は任意', body: 'お望みなら Apple Health にワークアウトを同期できます。それ以外は何もアプリから出ません。' },
      { title: '無料、広告なし、課金なし', body: '一人の開発者が作っています。サブスクリプションも、追加販売も、プレミアムプランもありません。' },
    ],
    cta: 'プライバシーポリシー全文を読む',
  },
  shots: {
    eyebrow: 'スクリーンショット',
    title: '実画面、まもなく公開。',
    lede: '宣伝用スクリーンショットを確定する前に、UI を磨いています。実際の動きはベータでお試しください。',
    coming: '近日公開',
    items: [
      { label: 'ホーム', blurb: '今日の予定とアクティビティ' },
      { label: 'リアルタイム計数', blurb: '手首でレップが進む' },
      { label: 'プラン編集', blurb: 'ワークアウトを一度組むだけ' },
      { label: '診断', blurb: '何を検出しているかが見える' },
    ],
  },
  built: {
    eyebrow: '開発者は一人',
    title: 'チームなし。投資家なし。売る広告枠もなし。',
    body: 'RepZen は、サブスクリプションの壁があるフィットネスアプリをもう一つ増やしたくなかった一人の開発者によって作られています。iOS と Watch のソースコード全体は GitHub にあります。バグ報告は、コードを書いた本人に直接届きます。',
    gh: 'GitHub でソースを見る',
    email: '開発者にメール',
  },
  faq: {
    eyebrow: '正直な答え',
    title: 'よくある質問',
    lede: 'できることを誇張するより、できないことをきちんと伝えます。',
    items: [
      {
        q: 'RepZen は最も正確なレップカウンターですか?',
        a: 'いいえ、そう主張するつもりもありません。クラウド ML と数百万ユーザーを抱える大規模アプリは、私たちが取りこぼすカウントを拾えるでしょう。RepZen が賭けているのは、透明性、プライバシー、そしてあなたが自分で調整できる感度スライダーです。すべてのエクササイズで最高の精度を目指しているわけではありません。',
      },
      {
        q: 'なぜ懸垂はうまくカウントできないのですか?',
        a: '厳密な懸垂では手首がほとんど動かず、加速度計やジャイロスコープに十分な信号が出ません。推測するより、懸垂(と一部のディップス)を手動カウント専用と明示することを選びました。将来のバージョンでは、気圧計を使った高さベースの検出を取り入れるかもしれません。',
      },
      {
        q: 'カウントが間違っていたら?',
        a: 'すべてのエクササイズに 1 から 10 の感度スライダーがあります。レップが取れていなければ上げ、誤検出があれば下げてください。Watch 上のリアルタイム診断で手首の傾きや回転が見えるので、アルゴリズムが何を検出しているかを確認しながら細かく合わせられます。',
      },
      {
        q: 'データはデバイスから出ますか?',
        a: 'Apple Health の同期をオンにしない限り、出ません。RepZen にはサーバー、アカウント、解析、広告 ID のいずれもありません。ワークアウトとモーションデータは iPhone と Watch にとどまります。Health 権限を許可すると、ワークアウトはデバイス上の Apple Health に流れ、Apple のプライバシーフレームワークの管理下に置かれます。',
      },
      {
        q: '料金はいくらですか?',
        a: '無料です。広告なし。アプリ内課金なし。サブスクリプションなし。課金壁のあるフィットネスアプリをもう一つ作りたくなかった、一人の開発者によるものです。',
      },
      {
        q: 'App Store にはいつ並びますか?',
        a: '現在は TestFlight ベータ(v0.1.x)です。レップカウンターがより多くの体型、エクササイズのバリエーション、フォームの質に対応できるよう調整できたら、App Store にリリースします。ベータに参加して一緒に進めましょう。',
      },
    ],
    outroLead: 'ここに答えがない質問は、',
    outroEmail: '開発者にメール',
    outroOr: ' か ',
    outroJoin: 'ベータに参加',
    outroTrail: 'してください。',
  },
  footer: {
    privacy: 'プライバシー',
    contact: 'お問い合わせ',
    github: 'GitHub',
    copyright:
      '© {year} RepZen。一人の開発者が作りました。Apple Watch、iPhone、Apple Health は Apple Inc. の商標です。',
  },
  notFound: {
    eyebrow: '404',
    title: 'ページが見つかりません。',
    body: 'お探しのページは移動されたか、もともと存在しません。ホームをご覧ください。',
    cta: 'RepZen に戻る',
  },
  langSwitcher: { label: '言語' },
  privacyPage: {
    eyebrow: '法的情報',
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新:2026年5月2日',
    notice: 'この翻訳は参考用です。解釈に齟齬がある場合は英語版が優先されます。',
    intro:
      'RepZen は Apple Watch と iPhone 用のワークアウト記録アプリで、デバイスのモーションセンサーで動作の回数をカウントします。私たちはデータ最小主義を取っています:Apple Health に明示的に同期しない限り、<strong>すべてのデータはあなたのデバイスにとどまります</strong>。',
    sections: {
      collect: {
        title: '収集するものとその理由',
        columns: { data: 'データ', source: 'ソース', why: '理由', where: '保存場所' },
        rows: [
          { data: 'モーションデータ(加速度計、ジャイロスコープ、姿勢)', source: 'Apple Watch IMU', why: 'エクササイズの回数カウント', where: 'デバイス上のみ — デバイスから送信されません' },
          { data: '心拍数', source: 'Apple HealthKit', why: 'ワークアウト中の心拍数表示', where: 'デバイス上のみ' },
          { data: '歩数', source: 'Apple HealthKit', why: '今日のアクティビティ表示', where: 'デバイス上のみ' },
          { data: 'ワークアウト履歴', source: 'ローカルアプリストレージ + Apple Health', why: '履歴ビュー、週間目標', where: 'デバイス上 + Apple Health(あなたが管理)' },
          { data: 'プロフィール(年齢、体重、身長、性別)', source: 'あなたが入力、または Apple Health から自動入力', why: 'アプリのパーソナライズ', where: 'デバイス上のみ' },
          { data: 'プラン設定、感度の好み', source: 'アプリで設定', why: 'アプリの構成', where: 'デバイス上のみ、App Group コンテナ経由' },
        ],
      },
      donot: {
        title: 'やらないこと',
        items: [
          'モーション、健康、ワークアウトのデータをいかなるサーバーにも<strong>送信しません</strong>。',
          'サードパーティの解析、広告、トラッキング SDK を<strong>使用しません</strong>。',
          'あなたのデータを誰とも<strong>共有しません</strong>。',
          'ユーザーアカウントを<strong>作成しません</strong>。ログインはありません。',
          '連絡先、写真、位置情報、マイクに<strong>アクセスしません</strong>。',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          '権限を許可した場合、RepZen はデバイス上の Apple HealthKit に対して読み書きを行います。Apple HealthKit のデータは保存時に暗号化され、iCloud アカウントを介してあなたの Apple デバイス間でのみ同期され、Apple のプライバシーフレームワークによって管理されます。RepZen がデバイスの外でこのデータを見ることはありません。',
        revoke:
          'RepZen の HealthKit へのアクセスは、いつでも次の場所で取り消せます:<strong>Apple ヘルスケア App → 共有 → App → RepZen</strong>',
      },
      music: {
        title: 'Apple Music',
        body:
          'ワークアウト中に音楽を再生する場合、RepZen は Apple Music ライブラリの再生権限を要求します。アプリはあなたの音楽の選択を送信したり保存したりしません。',
      },
      sync: {
        title: 'Watch ↔ iPhone 同期',
        body:
          'Apple Watch アプリと iPhone アプリは、Apple の <code>WCSession</code> フレームワークを使って設定や完了したワークアウトを互いに同期します。このデータは Apple の暗号化ローカルチャネルを使い、ペアリング済みデバイス間を Bluetooth / Wi-Fi で直接行き来します — RepZen のサーバーを経由することはありません。',
      },
      children: {
        title: '子ども',
        body:
          'RepZen は 13 歳未満の子どものデータを意図的に収集しません。アプリにユーザーアカウントもサーバーもないため、プロフィールデータがデバイスから出ることはありません。',
      },
      changes: {
        title: 'このポリシーの変更',
        body:
          'データの取り扱いが変わった場合は、このページを更新します。最上部の「最終更新」の日付が、最新の改訂を示します。',
      },
      contact: {
        title: 'お問い合わせ',
        body:
          'プライバシーに関するご質問は、開発者までご連絡ください:<a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};
