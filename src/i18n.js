// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { MonitorSmartphone } from 'lucide-react'

const resources = {
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        features: '機能詳細',
        contact: 'お問い合わせ',
        terms: '利用規約',
      },
      hero: {
        line1: '絶対にバレない',
        line2: '時間が経つと自動で消える極秘ファイル管理',
        download: 'App Storeで手に入れる',
      },
      security: {
        title: '完全なオフライン設計',
        desc1:
          'LimitBoxに保存されたファイルは、すべてあなたのデバイス内でのみ強力に暗号化されて保存されます。',
        desc2:
          '外部サーバーへのアップロードや通信は一切行わないため、開発者ですらあなたのデータを見ることは物理的に不可能です。',
      },
      terms: {
        backToTop: 'トップページに戻る',
        title: '利用規約',
        intro:
          '本利用規約（以下「本規約」といいます。）は、LimitBox（以下「本アプリ」といいます。）の提供条件および、ユーザーの皆様と開発者との間の権利義務関係を定めるものです。本アプリをご利用になる際は、本規約に同意いただく必要があります。',
        art1: {
          title: '第1条（適用）',
          desc: '本規約は、ユーザーと開発者との間の、本アプリの利用に関わる一切の関係に適用されるものとします。',
        },
        art2: {
          title: '第2条（本アプリの特性とデータの取り扱い）',
          list: [
            '本アプリは、ユーザーのデバイス（iPhone, iPad, Mac等）のローカル環境内でのみデータを暗号化して保存します。',
            '開発者は、本アプリ内に保存されたデータを外部のサーバー等に自動的にバックアップ、送信、または収集することは一切ありません。',
            'ユーザーが本アプリをデバイスから削除（アンインストール）した場合、本アプリ内に保存されていたデータも同時にすべて削除され、復元することはできません。',
          ],
        },
        art3: {
          title: '第3条（パスコードおよび生体認証の管理）',
          list: [
            '本アプリのロック解除に使用するパスコードは、ユーザー自身の責任において厳重に管理するものとします。',
            '本アプリの高度な暗号化の仕様上、ユーザーがパスコードを忘失した場合、開発者はいかなる方法を用いてもデータの復号、救出、およびパスコードの再発行を行うことはできません。',
          ],
        },
        art4: {
          title: '第4条（自爆タイマー機能に関する同意）',
          list: [
            '本アプリには、ユーザーが設定した一定期間アプリへのアクセスがなかった場合に、保存データを自動的かつ完全に消去する機能（以下「自爆タイマー」といいます。）が搭載されています。',
            'ユーザーは、自爆タイマーを有効にする場合、指定期間経過後にデータが復元不可能な形で消去されることを完全に理解し、自己の責任において本機能を利用するものとします。',
          ],
        },
        art5: {
          title: '第5条（免責事項）',
          list: [
            '開発者は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。',
            '開発者は、本アプリに起因してユーザーに生じたあらゆる損害（データの消失、自爆タイマーの作動によるデータの完全消去、デバイスの紛失・故障に伴うデータ喪失を含みますがこれらに限られません）について一切の責任を負いません。',
          ],
        },
        art6: {
          title: '第6条（禁止事項）',
          desc: 'ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。',
          list: [
            '法令または公序良俗に違反する行為',
            '犯罪行為に関連する行為',
            '本アプリの機能を破壊したり、妨害したりする行為',
            'その他、開発者が不適切と判断する行為',
          ],
        },
        art7: {
          title: '第7条（利用規約の変更）',
          desc: '開発者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、本アプリ内または関連するウェブサイトに掲示された時点から効力を生じるものとします。',
        },
        art8: {
          title: '第8条（準拠法・裁判管轄）',
          list: [
            '本規約の解釈にあたっては、日本法を準拠法とします。',
            '本アプリに関して紛争が生じた場合には、横浜地方裁判所を第一審の専属的合意管轄とします。',
          ],
        },
        supplement: '附則',
        date: '2026年4月26日 制定',
      },
      cta: {
        title: 'あなたの秘密を、今すぐロック。',
        subtitle: 'STATUS: READY FOR DEPLOYMENT. (完全無料)',
      },
      features: {
        title1: '秘密を守る、3つの鉄壁',
        title2: 'LimitBoxはただのファイル保存アプリではありません。',
        timer: '完全自爆タイマー',
        timerDesc:
          '設定した期間アプリを開かなかった場合、保存されている全てのデータを跡形もなく自動消去。万が一デバイスを紛失しても安心です。',
        MonitorSmartphone: '全デバイス対応の美しさ',
        MonitorSmartphoneDesc:
          'iPhoneはもちろん、iPadの大画面やMacにもネイティブ対応。デバイスに合わせて最適化された専用の動画プレイヤーで快適に閲覧できます。',
        shieldAlert: '偽装と強制ロック',
        shieldAlertDesc:
          'Face IDによる強固なロックに加え、パスコードを一定回数間違えると偽装画面へ遷移。あなたの本当の秘密には誰もたどり着けません。',

        secure: '完全ローカル暗号化',
        secureDesc: '外部サーバーへは一切送信しません。',
        multi: 'マルチデバイス対応',
        multiDesc: 'iPhone, iPad, Macでシームレスに利用可能。',
      },
      contact: {
        back: '戻る',
        title: 'Contact',
        desc1: '製品に関するご質問や、不具合の報告、',
        desc2: '機能追加のリクエストなどお気軽にお寄せください。',
        emailLabel: 'メールでお問い合わせ',
        sendEmail: 'メールを送る',
        supportTitle: 'サポートについて',
        supportDesc:
          '通常、3営業日以内に返信を差し上げるよう努めております。不具合報告の際は、ご使用のデバイス（iPhone/iPad/Mac）とOSのバージョンを併記いただけますとスムーズです。',
        xLabel: 'X (Twitter) でお問い合わせ',
        sendX: 'DMを送る',
      },
      featureDetails: {
        back: 'トップページに戻る',
        title: 'Operation: LimitBox',
        subtitle: '> Functional Verification / Version 1.1.0',
        videoNote:
          '※ 実際の開発環境（Designed for iPad on Mac）でのシームレスな操作デモ',
        timer: {
          title: '自爆タイマー',
          desc: '設定した期間（10分〜1ヶ月）アプリにアクセスがなかった場合、内部のすべての極秘データとフォルダ設定を跡形もなく完全消去します。もしあなたに何かがあってスマホを見られても、秘密が漏れることは絶対にありません。',
          code1: '時間経過で暗号化キーを完全に破棄',
        },
        decoy: {
          title: '偽装とFace IDロック',
          desc: 'アプリの起動にはFace IDによる生体認証が必須です。さらに、認証に3回失敗するとパスコード入力画面に切り替わりますが、正しいパスコードを知らない人間には中のデータを見ることはできません。',
        },
        multi: {
          title: 'Mac / iPad 完全最適化 UI',
          desc: 'v1.1.0より、iPhone版のカスタムUIをMacおよびiPadでもシームレスに利用可能になりました。大画面でも操作性を損なわず、スワイプでサクサクと動画や画像を閲覧できます。',
        },
        youtube: {
          title: '詳細オペレーションマニュアル',
          desc: '初期設定から自爆タイマーの完全な動作検証まで、LimitBoxの全貌を解説した極秘ブリーフィング映像。',
        },
      },
      common: {
        langName: 'English', // 切り替えボタンに表示する名前
      },
      footer: {
        terms: '利用規約',
        privacy: 'プライバシーポリシー',
        contact: 'お問い合わせ',
      },
      p2pTeaser: {
        title: 'サーバーに痕跡を残さない。次世代の「完全P2P転送システム」',
        lead: 'LimitBoxは、従来のクラウドストレージのようにサーバーへデータを預けません。送信者と受信者のデバイスを直接つなぎ、強固に暗号化されたトンネルを構築。あなただけの安全なデータ転送ルートを実現しました。',
        feature1Title: 'ゼロ知識アーキテクチャ',
        feature1Desc:
          'データは一切クラウドサーバーに保存されず、運営すら中身を見られません。',
        feature2Title: '容量無制限・超高速',
        feature2Desc:
          'ギガバイト級のファイルも、デバイスの限界速度でダイレクトに送信します。',
        feature3Title: 'VPN・ファイアウォール突破',
        feature3Desc:
          '独自の中継システムにより、どんな過酷な通信環境でも確実につながります。',
        cta: '通信の仕組みを詳しく見る',
      },
      tech: {
        heroTitle:
          'LimitBoxの裏側：絶対に覗かれない「完全P2P・暗号化転送」の仕組み',
        heroDesc:
          'なぜLimitBoxは、大容量のシークレットファイルを安全に送れるのか？最新のWebRTC技術と軍事レベルの暗号化を組み合わせた「独自の通信インフラ」が、あなたのプライバシーを完璧に守り抜く仕組みをご紹介します。',
        diagramPlaceholder: 'ここにアーキテクチャ図（SVG/PNG）を配置',
        sec1Title: 'クラウドに預けない「完全P2P通信」',
        sec1Desc:
          '一般的なファイル転送サービスは、一度クラウドサーバーにファイルをアップロードし、そこからダウンロードする仕組みです。しかしこの方法では、サーバー上にデータが残るリスクが伴います。LimitBoxは、送信者と受信者のデバイス同士に直接「データのトンネル」を掘る完全P2P（Peer-to-Peer）通信を採用。データはサーバーに一切保存されず、あなたの手元から相手の手元へダイレクトに届きます。',
        sec2Title: '運営も解読不可能な「エンドツーエンド暗号化（E2EE）」',
        sec2Desc:
          '通信を始める際、2つのデバイス間だけで使い捨ての「暗号鍵」を瞬時に交換します。ファイルはあなたのデバイスを出発する前に、この鍵を使って強固に暗号化（AES-GCM方式など）されます。万が一通信経路を傍受されても、暗号を解く鍵はあなたと相手しか持っていないため、私たちLimitBoxの運営・開発者であっても中身を覗き見ることは数学的に不可能です。',
        sec3Title: 'どんな壁も越える「独自TURNサーバー」',
        sec3Desc:
          'ガチガチの企業内ファイアウォールや、出先でのVPN接続時など、デバイス同士が直接通信できない厳しいネットワーク環境もあります。その対策として、LimitBoxは専用の「中継サーバー（TURNサーバー）」を独自に構築しました。直接通信が弾かれた場合でも、即座にこの中継サーバーを経由するルートに自動で切り替わり、暗号化された状態を保ったまま確実にファイルを送り届けます。',
        sec4Title: '大容量ファイルも落ちない「ストリーミング最適化」',
        sec4Desc:
          '1GBを超えるような巨大な動画ファイルでも、LimitBoxは安定して転送できます。ファイルを細かなブロック（チャンク）に分割し、ストリーミング形式で少しずつデバイスのメモリに読み込みながら送信する独自のメモリ最適化技術を搭載。システムの限界（OOMクラッシュ）を防ぎ、安全かつ超高速なファイル転送を実現しています。',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        contact: 'Contact',
        terms: 'Terms',
      },
      hero: {
        line1: 'Absolute Privacy.',
        line2: 'A secret vault that self-destructs over time.',
        download: 'Download on the App Store',
      },
      security: {
        title: '100% Offline by Design',
        desc1:
          'All files stored in LimitBox are heavily encrypted and saved exclusively on your local device.',
        desc2:
          'With zero uploads or communication to external servers, it is physically impossible for anyone—even the developers—to access your secrets.',
      },
      terms: {
        backToTop: 'Back to Top',
        title: 'Terms of Service',
        intro:
          'These Terms of Service (hereinafter referred to as the "Terms") establish the terms and conditions for providing LimitBox (hereinafter referred to as the "App") and the rights and obligations between the users and the developer. By using the App, you must agree to these Terms.',
        art1: {
          title: 'Article 1 (Application)',
          desc: 'These Terms shall apply to all relationships between the user and the developer pertaining to the use of the App.',
        },
        art2: {
          title: 'Article 2 (Characteristics of the App and Data Handling)',
          list: [
            "The App encrypts and stores data exclusively within the local environment of the user's device (iPhone, iPad, Mac, etc.).",
            'The developer will never automatically back up, transmit, or collect the data stored within the App to any external servers.',
            'If the user deletes (uninstalls) the App from their device, all data stored within the App will be deleted simultaneously and cannot be recovered.',
          ],
        },
        art3: {
          title: 'Article 3 (Management of Passcode and Biometrics)',
          list: [
            'The user is strictly responsible for managing the passcode used to unlock the App.',
            'Due to the highly advanced encryption specifications of the App, if the user forgets their passcode, the developer cannot, under any circumstances, decrypt, rescue data, or reissue the passcode.',
          ],
        },
        art4: {
          title:
            'Article 4 (Consent Regarding the Self-Destruct Timer Feature)',
          list: [
            'The App is equipped with a feature (hereinafter referred to as the "Self-Destruct Timer") that automatically and completely erases stored data if the App is not accessed for a certain period set by the user.',
            'When enabling the Self-Destruct Timer, the user must fully understand that the data will be permanently erased beyond recovery after the specified period, and shall use this feature at their own risk.',
          ],
        },
        art5: {
          title: 'Article 5 (Disclaimer of Warranties)',
          list: [
            'The developer provides no explicit or implicit guarantees that the App is free of factual or legal defects (including flaws, errors, bugs, or infringements related to safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, or security).',
            'The developer shall not be liable for any damages incurred by the user arising from the App (including, but not limited to, data loss, complete data erasure due to the activation of the Self-Destruct Timer, or data loss associated with device loss or failure).',
          ],
        },
        art6: {
          title: 'Article 6 (Prohibited Acts)',
          desc: 'Users must not engage in any of the following acts when using the App:',
          list: [
            'Acts that violate laws or public order and morals',
            'Acts related to criminal activities',
            'Acts that destroy or interfere with the functionality of the App',
            'Any other acts that the developer deems inappropriate',
          ],
        },
        art7: {
          title: 'Article 7 (Changes to Terms of Service)',
          desc: 'The developer may change these Terms at any time without notifying users if deemed necessary. The modified Terms of Service will become effective upon being posted within the App or on the related website.',
        },
        art8: {
          title: 'Article 8 (Governing Law and Jurisdiction)',
          list: [
            'The interpretation of these Terms shall be governed by the laws of Japan.',
            'In the event of a dispute regarding the App, the Yokohama District Court shall be the exclusive court of first instance.',
          ],
        },
        supplement: 'Supplementary Provision',
        date: 'Enacted on April 26, 2026',
      },
      cta: {
        title: 'Lock your secrets down today.',
        subtitle: 'STATUS: READY FOR DEPLOYMENT. (100% Free)',
      },
      features: {
        title1: '3 Layers of Protection',
        title2: 'LimitBox is no ordinary file vault.',
        timer: 'Absolute Self-Destruct Protocol',
        timerDesc:
          'All stored files will vanish without a trace if the app is not accessed within the specified timeframe. Your secrets remain safe, even if your device is compromised.',
        MonitorSmartphone: 'Flawless Design. Universal Access.',
        MonitorSmartphoneDesc:
          'Native performance across iPhone, iPad, and Mac. Review your confidential media seamlessly via a custom, device-optimized video player.',
        shieldAlert: 'Decoy Protocol & Lockdown',
        shieldAlertDesc:
          'Fortified by biometric locks. Entering the wrong passcode multiple times activates a decoy interface, ensuring your true vault remains undiscovered.',

        secure: 'Local Encryption',
        secureDesc: 'Your data never leaves your device.',
        multi: 'Multi-Device Support',
        multiDesc: 'Seamlessly available on iPhone, iPad, and Mac.',
      },
      contact: {
        back: 'Back',
        title: 'Contact Us',
        desc1: 'Please feel free to reach out with questions, bug reports,',
        desc2: 'or feature requests regarding LimitBox.',
        emailLabel: 'Inquire via Email',
        sendEmail: 'Send Email',
        supportTitle: 'About Support',
        supportDesc:
          'We typically aim to reply within 3 business days. For bug reports, please include your device model (iPhone/iPad/Mac) and OS version for a smoother resolution.',
        xLabel: 'Inquire via X (Twitter)',
        sendX: 'Send DM',
      },
      featureDetails: {
        back: 'Back to Home',
        title: 'Operation: LimitBox',
        subtitle: '> Functional Verification / Version 1.1.0',
        videoNote:
          '* Seamless operation demo captured in the actual development environment (Designed for iPad on Mac).',
        timer: {
          title: 'Ultimate Self-Destruct Timer',
          desc: 'If the app remains unopened for a designated period (10 minutes to 1 month), all stored data and folder configurations are automatically wiped without a trace. Your secrets vanish into the void, ensuring total peace of mind even if your device is compromised.',
          code1: 'Permanently destroy the encryption key over time',
        },
        decoy: {
          title: 'Decoy Screen & Forced Lockdown',
          desc: 'On top of robust Face ID protection, multiple incorrect passcode entries will automatically trigger a fake decoy screen. No one will ever reach your true secrets.',
        },
        multi: {
          title: 'Seamless Beauty Across All Devices',
          desc: 'Native performance across iPhone, iPad, and Mac. Review your confidential media seamlessly via a custom, device-optimized video player.',
        },
        youtube: {
          title: 'Classified Briefing: Operation Manual',
          desc: 'A top-secret briefing video covering everything from initial setup to a full live test of the deadman switch. Witness LimitBox in action.',
        },
      },
      common: {
        langName: '日本語',
      },
      footer: {
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        contact: 'Contact',
      },
      p2pTeaser: {
        title: 'Leave No Trace. Next-Gen True P2P Transfer System.',
        lead: 'Unlike traditional cloud storage, LimitBox never stores your data on a server. It builds a heavily encrypted, direct tunnel between the sender and receiver, creating an impenetrable route exclusively for your files.',
        feature1Title: 'Zero-Knowledge Architecture',
        feature1Desc:
          'Your data is never stored on cloud servers. Even our team cannot access your files.',
        feature2Title: 'Unlimited & Lightning Fast',
        feature2Desc:
          'Send gigabyte-level files directly at the maximum speed your device can handle.',
        feature3Title: 'VPN & Firewall Traversal',
        feature3Desc:
          'Our custom relay system ensures seamless connection even in the strictest network environments.',
        cta: 'Explore the Technology Behind LimitBox',
      },
      tech: {
        heroTitle:
          'Behind LimitBox: The Mechanics of True P2P Encrypted Transfer',
        heroDesc:
          'How does LimitBox transfer massive secret files so securely? Discover how our custom communication infrastructure, combining the latest WebRTC technology with military-grade encryption, fiercely protects your privacy.',
        diagramPlaceholder: 'Insert Architecture Diagram (SVG/PNG) here',
        sec1Title: 'True P2P Communication: Zero Cloud Storage',
        sec1Desc:
          "Standard file transfer services require you to upload files to a cloud server before downloading. This inherently leaves your data at risk on a third-party server. LimitBox utilizes True P2P (Peer-to-Peer) communication, building a direct data tunnel between the sender's and receiver's devices. Your data is never stored on any server; it travels directly from your hands to theirs.",
        sec2Title: 'End-to-End Encryption (E2EE): Unbreakable Even by Us',
        sec2Desc:
          'Before any transfer begins, the two devices instantly exchange a one-time cryptographic key. Your files are heavily encrypted (e.g., AES-GCM) before they even leave your device. Because only you and the recipient hold the keys to decrypt the data, it is mathematically impossible for anyone—even the LimitBox developers—to view your files, even if the connection were intercepted.',
        sec3Title: 'Custom TURN Server: Traversing Any Firewall',
        sec3Desc:
          'Strict corporate firewalls and VPNs often block direct device-to-device connections. To solve this, LimitBox operates its own dedicated relay servers (TURN servers). If a direct connection is blocked, the app seamlessly and automatically routes the encrypted data through our custom relay, guaranteeing delivery in even the harshest network environments.',
        sec4Title: 'Streaming Optimization for Massive Files',
        sec4Desc:
          "LimitBox stably transfers enormous video files exceeding 1GB without breaking a sweat. We implemented proprietary memory optimization technology that splits files into tiny chunks, streaming them into the device's memory bit by bit during transmission. This completely prevents system crashes (Out-Of-Memory errors), ensuring safe and lightning-fast transfers.",
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
