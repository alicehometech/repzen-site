import type { Dict } from '~/i18n/types';

export const zh: Dict = {
  meta: {
    title: 'RepZen — 自动数次数。就在你腕上。',
    description:
      'RepZen 用 Apple Watch 的运动传感器，自动数你的俯卧撑、仰卧起坐、深蹲等十种自重训练。无需账号，无任何分析,数据从不离开你的设备。',
  },
  nav: {
    exercises: '动作',
    how: '工作原理',
    privacy: '隐私',
    faq: '常见问题',
    cta: '加入 TestFlight',
    home: 'RepZen 首页',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: '自动数次数。',
    titleB: '就在你腕上。',
    body: 'RepZen 自动数你的俯卧撑、仰卧起坐、深蹲,以及另外七种自重训练 —— 仅靠 Apple Watch 的运动传感器。训练中无需按键。无需账号。数据从不离开你的设备。从不。',
    primary: '加入 TestFlight 测试',
    secondary: '在 GitHub 查看',
    note: '免费。无广告。无应用内购买。需要 Apple Watch 与 iPhone。',
    watch: { exercise: '俯卧撑', meta: '第 2 / 3 组 · 倾角 23°', chip: '在设备上计数' },
  },
  exercises: {
    eyebrow: '十种动作',
    title: '它能数什么',
    lede: '每种动作都有专属的检测器,根据手腕的具体运动进行调校。',
    names: {
      push_up: '俯卧撑',
      sit_up: '仰卧起坐',
      squat: '深蹲',
      lunge: '弓步',
      jumping_jack: '开合跳',
      bicep_curl: '二头弯举',
      shoulder_press: '肩上推举',
      superman: '超人',
      tricep_dip: '三头臂屈伸',
      pull_up: '引体向上',
    },
    manualLabel: '手动',
    note: '引体向上时手腕几乎不动,无法可靠计数,因此标记为仅手动 —— 我们宁愿明说,也不显示错误的数字。',
  },
  how: {
    eyebrow: '工作原理',
    title: '靠传感器,不靠猜。',
    lede: '不用摄像头。不用云端 ML。只用 Apple 在每只 Watch 中都装好的运动传感器,每个动作配一个独立检测器。',
    steps: [
      {
        title: '读取手腕',
        body: 'Apple Watch 实时传输加速度计、陀螺仪和姿态数据 —— 这三种信号共同描述你的手腕在空间中如何移动。',
      },
      {
        title: '匹配特征',
        body: '每个动作都有独特的运动轨迹。仰卧起坐让 Watch 倾斜 60°。俯卧撑让手腕旋转 20°。深蹲在底部和顶部各产生一次清晰的加速脉冲。',
      },
      {
        title: '计入一次',
        body: '每个动作的检测器实时观察自己的特征。越过阈值,计数加一。返回原位,准备下一次。无需云端往返。',
      },
    ],
    chips: {
      slider: '<strong>灵敏度滑块</strong>每个动作 1–10',
      diagnostics: '<strong>实时诊断</strong>显示在 Watch 上',
      transparency: '<strong>不是黑箱</strong> —— 看得见正在检测什么',
    },
  },
  privacy: {
    eyebrow: '隐私即设计',
    titleA: '你的动作。',
    titleB: '你的手腕。',
    titleC: '与他人无关。',
    lede: '大多数健身应用都把你的数据推送到云端 —— 为同步、为分析、为变现、"为备份"。RepZen 不会。',
    points: [
      { title: '没有服务器', body: '即便我们想要,你的数据也无处可去。RepZen 没有任何后端。' },
      { title: '没有账号', body: '不用注册、不用邮箱、不用登录。装好,授权运动权限,开始计数。' },
      { title: '没有分析', body: '没有跟踪 SDK、没有广告标识符、没有遥测。Plausible 也没用。什么都没有。' },
      { title: '数据不离开设备', body: '运动数据、心率、训练记录全部留在你的 iPhone 与 Watch 上。仅此而已。' },
      { title: '可选 Apple Health', body: '想同步到 Apple Health,可以。否则什么都不会离开应用。' },
      { title: '免费,无广告,无内购', body: '由一位开发者打造。无订阅,无升级,无高级会员。' },
    ],
    cta: '阅读完整隐私政策',
  },
  shots: {
    eyebrow: '截图',
    title: '真实截图,即将上线。',
    lede: '我们正在打磨界面,然后才会定稿宣传截图。加入 Beta,亲眼看真实运行效果。',
    coming: '即将上线',
    items: [
      { label: '主页', blurb: '今日计划与活动' },
      { label: '实时计数', blurb: '次数在腕上跳动' },
      { label: '计划编辑', blurb: '一次构建你的训练' },
      { label: '诊断', blurb: '看见正在检测什么' },
    ],
  },
  built: {
    eyebrow: '由一人打造',
    title: '没有团队。没有投资人。没有广告位可卖。',
    body: 'RepZen 由一位开发者独立打造,因为他不想再多一款带订阅墙的健身应用。整个 iOS + Watch 源代码都在 GitHub。Bug 报告会直接送到写代码的那个人手上。',
    gh: '在 GitHub 查看源码',
    email: '给开发者发邮件',
  },
  faq: {
    eyebrow: '诚实的回答',
    title: '常见问题',
    lede: '我们宁愿告诉你哪里不行,也不会夸大哪里行。',
    items: [
      {
        q: 'RepZen 是最准确的次数计数器吗?',
        a: '不是,我们也不打算这么宣称。预算充足、用户上百万、有云端 ML 的应用,能数到我们漏掉的次数。RepZen 押注的是透明、隐私,以及由你自己控制的灵敏度滑块 —— 而不是在每个动作上都做到最准。',
      },
      {
        q: '为什么引体向上数得不好?',
        a: '严格的引体向上中手腕几乎不动 —— 加速度计与陀螺仪都没有足够的信号可靠触发。我们把引体向上(以及某些臂屈伸)标记为仅手动,而不是瞎猜。未来版本可能会用气压计做基于高度的检测。',
      },
      {
        q: '如果数错了怎么办?',
        a: '每个动作都有 1 到 10 的灵敏度滑块。漏数就调高,误数就调低。Watch 上的实时诊断会显示手腕的倾斜与旋转,你能看见算法在检测什么,然后精细调整。',
      },
      {
        q: '会有数据离开我的设备吗?',
        a: '除非你打开 Apple Health 同步,否则不会。RepZen 没有服务器、没有账号、没有分析,也没有广告标识符。训练与运动数据留在你的 iPhone 与 Watch 上。如果你授权 Health,这些训练会进入设备上的 Apple Health,由 Apple 的隐私框架管理。',
      },
      {
        q: '收费多少?',
        a: '免费。无广告。无应用内购买。无订阅。它由一位不想再做付费墙健身应用的开发者打造。',
      },
      {
        q: '什么时候上 App Store?',
        a: '现在在 TestFlight Beta 中(v0.1.x)。等次数检测在更多体型、更多动作变体、更多动作质量上都调好后,会上架 App Store。加入 Beta,帮我们走到那一步。',
      },
    ],
    outroLead: '有我们没回答到的问题?',
    outroEmail: '给开发者发邮件',
    outroOr: ',或者',
    outroJoin: '加入 Beta',
    outroTrail: '。',
  },
  footer: {
    privacy: '隐私',
    contact: '联系',
    github: 'GitHub',
    copyright:
      '© {year} RepZen。由一位开发者打造。Apple Watch、iPhone 与 Apple Health 是 Apple Inc. 的商标。',
  },
  notFound: {
    eyebrow: '404',
    title: '页面未找到。',
    body: '你要找的页面已移动或从未存在。试试首页。',
    cta: '返回 RepZen',
  },
  langSwitcher: { label: '语言' },
  privacyPage: {
    eyebrow: '法律',
    title: '隐私政策',
    lastUpdated: '最近更新:2026 年 5 月 2 日',
    notice: '本翻译仅供参考。如有歧义,以英文版本为准。',
    intro:
      'RepZen 是一款用于 Apple Watch 与 iPhone 的训练记录应用,使用设备的运动传感器统计动作次数。我们采取数据最小化的方式:<strong>所有数据都留在你的设备上</strong>,除非你主动同步到 Apple Health。',
    sections: {
      collect: {
        title: '我们收集什么、为什么',
        columns: { data: '数据', source: '来源', why: '为何', where: '存储位置' },
        rows: [
          { data: '运动数据(加速度计、陀螺仪、姿态)', source: 'Apple Watch IMU', why: '统计动作次数', where: '仅在设备上 —— 从不离开你的设备' },
          { data: '心率', source: 'Apple HealthKit', why: '训练中显示心率', where: '仅在设备上' },
          { data: '步数', source: 'Apple HealthKit', why: '显示今日活动', where: '仅在设备上' },
          { data: '训练历史', source: '本地应用存储 + Apple Health', why: '历史视图、每周目标', where: '设备上 + Apple Health(由你控制)' },
          { data: '资料(年龄、体重、身高、性别)', source: '由你输入,或从 Apple Health 自动填入', why: '个性化应用', where: '仅在设备上' },
          { data: '计划设置、灵敏度偏好', source: '你在应用中设置', why: '应用配置', where: '仅在设备上,通过 App Group 容器' },
        ],
      },
      donot: {
        title: '我们不做的事',
        items: [
          '我们<strong>不</strong>把你的运动、健康或训练数据传输到任何服务器。',
          '我们<strong>不</strong>使用第三方分析、广告或跟踪 SDK。',
          '我们<strong>不</strong>与任何人分享你的数据。',
          '我们<strong>不</strong>创建用户账号。没有登录。',
          '我们<strong>不</strong>访问你的通讯录、照片、位置或麦克风。',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          '若你授权,RepZen 会读写设备上的 Apple HealthKit。Apple HealthKit 数据在静态加密,仅通过你的 iCloud 账号在你的 Apple 设备之间同步,由 Apple 的隐私框架管理。RepZen 在你的设备之外永远看不到这些数据。',
        revoke:
          '你可以随时在以下位置撤销 RepZen 对 HealthKit 的访问:<strong>Apple "健康"应用 → 共享 → App → RepZen</strong>',
      },
      music: {
        title: 'Apple Music',
        body:
          '若你在训练中播放音乐,RepZen 会请求播放你的 Apple Music 音乐库的权限。应用不会传输或存储你选择的音乐。',
      },
      sync: {
        title: 'Watch ↔ iPhone 同步',
        body:
          'Apple Watch 应用与 iPhone 应用之间通过 Apple 的 <code>WCSession</code> 框架同步设置与已完成训练。数据通过 Apple 的加密本地通道在你已配对的设备之间直接经由蓝牙/Wi-Fi 传输 —— 不经过任何 RepZen 服务器。',
      },
      children: {
        title: '儿童',
        body:
          'RepZen 不会有意收集 13 岁以下儿童的数据。应用没有用户账号,也没有服务器,因此任何资料都不会离开设备。',
      },
      changes: {
        title: '本政策的变更',
        body:
          '若我们的数据处理方式发生变化,我们会更新本页。顶部的"最近更新"日期反映最近一次修订。',
      },
      contact: {
        title: '联系',
        body:
          '如有隐私相关问题,请联系开发者:<a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};
