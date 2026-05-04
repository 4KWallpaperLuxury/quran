export type LangCode = 'en' | 'ar' | 'id' | 'ms' | 'tr' | 'ur' | 'bn' | 'fa' | 'fr' | 'hi'

export interface LangInfo {
  code: LangCode
  flag: string
  name: string
  nativeName: string
  rtl: boolean
}

export interface SectionData {
  id: string
  number: string
  title: string
  icon: string
  description: string
  items?: { icon: string; title: string; desc: string }[]
  links?: { label: string; href: string }[]
  note?: string
  noteType?: 'contact' | 'note'
}

export interface Translations {
  hero: {
    badge: string
    title: string
    subtitle: string
    date: string
    intro: string
    introHighlight: string
    scrollText: string
  }
  sections: SectionData[]
  footer: {
    company: string
    description: string
    copyright: string
  }
}

export const languages: LangInfo[] = [
  { code: 'en', flag: '🇬🇧', name: 'English', nativeName: 'English', rtl: false },
  { code: 'ar', flag: '🇸🇦', name: 'Arabic', nativeName: 'العربية', rtl: true },
  { code: 'id', flag: '🇮🇩', name: 'Indonesian', nativeName: 'Bahasa Indonesia', rtl: false },
  { code: 'ms', flag: '🇲🇾', name: 'Malay', nativeName: 'Bahasa Melayu', rtl: false },
  { code: 'tr', flag: '🇹🇷', name: 'Turkish', nativeName: 'Türkçe', rtl: false },
  { code: 'ur', flag: '🇵🇰', name: 'Urdu', nativeName: 'اردو', rtl: true },
  { code: 'bn', flag: '🇧🇩', name: 'Bengali', nativeName: 'বাংলা', rtl: false },
  { code: 'fa', flag: '🇮🇷', name: 'Persian', nativeName: 'فارسی', rtl: true },
  { code: 'fr', flag: '🇫🇷', name: 'French', nativeName: 'Français', rtl: false },
  { code: 'hi', flag: '🇮🇳', name: 'Hindi', nativeName: 'हिन्दी', rtl: false },
]

/* ─────────────────── ENGLISH ─────────────────── */

const en: Translations = {
  hero: {
    badge: 'Your Privacy Matters',
    title: 'Privacy Policy',
    subtitle: 'Quran Daily',
    date: 'Last updated: May 04, 2026',
    intro: 'Thank you for choosing to be part of our community at',
    introHighlight: 'Quran Daily',
    scrollText: 'Scroll',
  },
  sections: [
    {
      id: 'information',
      number: '01',
      title: 'Information We Collect',
      icon: 'eye',
      description: 'Quran Daily is designed to be a companion for reading and listening to the Holy Quran. To provide and improve our service, we collect the following types of information automatically:',
      items: [
        { icon: 'monitor', title: 'Device Information', desc: 'We may collect information such as your mobile device ID, model, manufacturer, operating system, and version information.' },
        { icon: 'bar-chart', title: 'Usage Data', desc: 'We track interactions within the App (e.g., pages visited, features used) using Google Analytics for Firebase to understand how users interact with our App and to improve user experience.' },
        { icon: 'bug', title: 'Crash Reports', desc: 'We use Firebase Crashlytics to collect crash reports and performance data. This helps us identify bugs and improve the stability of the App.' },
      ],
    },
    {
      id: 'third-party',
      number: '02',
      title: 'Third-Party Services & Advertising',
      icon: 'database',
      description: 'We use third-party services that may collect information used to identify you. The App uses Google AdMob to display advertisements (unless you have upgraded to the Premium, ad-free version).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob may use advertising IDs (such as the Android Advertising ID) and cookies to serve personalized ads based on your interests and past usage. You can opt out of personalized advertising by visiting your Android device settings (Settings > Google > Ads > Opt out of Ads Personalization).' },
      ],
      links: [
        { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
        { label: 'Google AdMob Policies', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Google Firebase Privacy Policy', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'Link to privacy policy of third-party service providers used by the App.',
      noteType: 'note',
    },
    {
      id: 'offline',
      number: '03',
      title: 'Offline Features and Local Storage',
      icon: 'wifi-off',
      description: 'The App allows you to download Quranic translations and recitations for offline use. All such data, including your bookmarks and reading progress, is saved locally on your device. We do not transmit or store your personal reading habits, bookmarks, or progress on our servers.',
      items: [
        { icon: 'lock', title: 'Your Data Stays Local', desc: 'All downloaded translations, recitations, bookmarks, and reading progress are stored exclusively on your device. No personal reading data is ever transmitted to our servers.' },
      ],
    },
    {
      id: 'purchases',
      number: '04',
      title: 'In-App Purchases',
      icon: 'credit-card',
      description: 'We offer a "Premium" in-app purchase that removes advertisements. Payments are processed securely through the Google Play Billing system. We do not collect, process, or store your payment card details. Google Play\'s privacy policy governs the payment process.',
    },
    {
      id: 'children',
      number: '05',
      title: "Children's Privacy",
      icon: 'baby',
      description: 'These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.',
    },
    {
      id: 'changes',
      number: '06',
      title: 'Changes to This Privacy Policy',
      icon: 'refresh-cw',
      description: 'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.',
    },
    {
      id: 'contact',
      number: '07',
      title: 'Contact Us',
      icon: 'mail',
      description: 'If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.',
      note: 'bookingforjob.dev@gmail.com',
      noteType: 'contact',
    },
  ],
  footer: {
    company: 'GUNGSA STUDIO',
    description: 'We take your privacy seriously. This policy reflects our commitment to transparency and trust.',
    copyright: 'Quran Daily by GUNGSA STUDIO. All rights reserved.',
  },
}

/* ─────────────────── ARABIC ─────────────────── */

const ar: Translations = {
  hero: {
    badge: 'خصوصيتك تهمنا',
    title: 'سياسة الخصوصية',
    subtitle: 'القرآن اليوم',
    date: 'آخر تحديث: 4 مايو 2026',
    intro: 'شكراً لاختيارك أن تكون جزءاً من مجتمعنا في',
    introHighlight: 'القرآن اليوم',
    scrollText: 'مرر لأسفل',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'المعلومات التي نجمعها', icon: 'eye',
      description: 'تم تصميم القرآن اليوم ليكون رفيقاً لقراءة واستماع القرآن الكريم. لتقديم وتحسين خدماتنا، نقوم بجمع الأنواع التالية من المعلومات تلقائياً:',
      items: [
        { icon: 'monitor', title: 'معلومات الجهاز', desc: 'قد نجمع معلومات مثل معرف جهازك المحمول، والموديل، والشركة المصنعة، ونظام التشغيل، ومعلومات الإصدار.' },
        { icon: 'bar-chart', title: 'بيانات الاستخدام', desc: 'نتتبع التفاعلات داخل التطبيق (مثل الصفحات التي تمت زيارتها، والميزات المستخدمة) باستخدام تحليلات جوجل لفيربيس لفهم كيف يتفاعل المستخدمون مع تطبيقنا وتحسين تجربة المستخدم.' },
        { icon: 'bug', title: 'تقارير الأعطال', desc: 'نستخدم فيربيس كراشليتيكس لجمع تقارير الأعطال وبيانات الأداء. يساعدنا هذا في تحديد الأخطاء وتحسين استقرار التطبيق.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'خدمات الطرف الثالث والإعلانات', icon: 'database',
      description: 'نستخدم خدمات طرف ثالث قد تجمع معلومات تُستخدم لتحديد هويتك. يستخدم التطبيق جوجل أد موب لعرض الإعلانات (ما لم تقم بالترقية إلى الإصدار المميز الخالي من الإعلانات).',
      items: [
        { icon: 'megaphone', title: 'جوجل أد موب', desc: 'قد يستخدم أد موب معرفات الإعلان (مثل معرف إعلان أندرويد) وملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على اهتماماتك وسجل استخدامك. يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال إعدادات جهاز الأندرويد (الإعدادات > جوجل > الإعلانات > إلغاء تخصيص الإعلانات).' },
      ],
      links: [
        { label: 'سياسة خصوصية جوجل', href: 'https://policies.google.com/privacy' },
        { label: 'سياسات جوجل أد موب', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'سياسة خصوصية فيربيس', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'رابط لسياسة الخصوصية لمزودي خدمات الطرف الثالث المستخدمة في التطبيق.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'الميزات دون اتصال والتخزين المحلي', icon: 'wifi-off',
      description: 'يتيح لك التطبيق تنزيل ترجمات وقراءات القرآن الكريم للاستخدام دون اتصال. جميع هذه البيانات، بما في ذلك الإشارات المرجعية وتقدم القراءة، يتم حفظها محلياً على جهازك. لا ننقل أو نخزن عادات القراءة الشخصية أو الإشارات المرجعية أو تقدمك على خوادمنا.',
      items: [
        { icon: 'lock', title: 'بياناتك تبقى محلية', desc: 'جميع الترجمات والقراءات والإشارات المرجعية وتقدم القراءة التي تم تنزيلها يتم تخزينها حصرياً على جهازك. لا يتم إرسال أي بيانات قراءة شخصية إلى خوادمنا أبداً.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'المشتريات داخل التطبيق', icon: 'credit-card',
      description: 'نقدم مشتريات داخل التطبيق "مميز" تزيل الإعلانات. تتم معالجة المدفوعات بأمان عبر نظام فوترة جوجل بلاي. لا نجمع أو نعالج أو نخزن تفاصيل بطاقة الدفع الخاصة بك. تنظم سياسة خصوصية جوجل بلاي عملية الدفع.',
    },
    {
      id: 'children', number: '05', title: 'خصوصية الأطفال', icon: 'baby',
      description: 'هذه الخدمات لا تخاطب أي شخص يقل عمره عن 13 عاماً. لا نجمع عن قصد معلومات تعريف شخصية من الأطفال دون 13 عاماً. في حالة اكتشافنا أن طفلاً دون 13 عاماً قد زودنا بمعلومات شخصية، نقوم بحذفها فوراً من خوادمنا.',
    },
    {
      id: 'changes', number: '06', title: 'تغييرات على سياسة الخصوصية', icon: 'refresh-cw',
      description: 'قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. لذا ننصحك بمراجعة هذه الصفحة بشكل دوري لأي تغييرات. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.',
    },
    {
      id: 'contact', number: '07', title: 'اتصل بنا', icon: 'mail',
      description: 'إذا كان لديك أي أسئلة أو اقتراحات حول سياسة الخصوصية، لا تتردد في الاتصال بنا.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'جونغسا ستوديو',
    description: 'نحن نأخذ خصوصيتك على محمل الجد. تعكس هذه السياسة التزامنا بالشفافية والثقة.',
    copyright: 'القرآن اليوم بواسطة جونغسا ستوديو. جميع الحقوق محفوظة.',
  },
}

/* ─────────────────── INDONESIAN ─────────────────── */

const id: Translations = {
  hero: {
    badge: 'Privasi Anda Penting',
    title: 'Kebijakan Privasi',
    subtitle: 'Quran Daily',
    date: 'Terakhir diperbarui: 4 Mei 2026',
    intro: 'Terima kasih telah memilih untuk menjadi bagian dari komunitas kami di',
    introHighlight: 'Quran Daily',
    scrollText: 'Gulir',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'Informasi yang Kami Kumpulkan', icon: 'eye',
      description: 'Quran Daily dirancang sebagai pendamping untuk membaca dan mendengarkan Al-Quran. Untuk menyediakan dan meningkatkan layanan kami, kami mengumpulkan jenis informasi berikut secara otomatis:',
      items: [
        { icon: 'monitor', title: 'Informasi Perangkat', desc: 'Kami dapat mengumpulkan informasi seperti ID perangkat seluler, model, pabrikan, sistem operasi, dan informasi versi.' },
        { icon: 'bar-chart', title: 'Data Penggunaan', desc: 'Kami melacak interaksi dalam Aplikasi (misalnya, halaman yang dikunjungi, fitur yang digunakan) menggunakan Google Analytics untuk Firebase untuk memahami bagaimana pengguna berinteraksi dengan Aplikasi kami dan meningkatkan pengalaman pengguna.' },
        { icon: 'bug', title: 'Laporan Crash', desc: 'Kami menggunakan Firebase Crashlytics untuk mengumpulkan laporan crash dan data kinerja. Ini membantu kami mengidentifikasi bug dan meningkatkan stabilitas Aplikasi.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'Layanan Pihak Ketiga & Periklanan', icon: 'database',
      description: 'Kami menggunakan layanan pihak ketiga yang dapat mengumpulkan informasi yang digunakan untuk mengidentifikasi Anda. Aplikasi ini menggunakan Google AdMob untuk menampilkan iklan (kecuali Anda telah meningkatkan ke versi Premium tanpa iklan).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob dapat menggunakan ID iklan (seperti ID Iklan Android) dan cookie untuk menyajikan iklan yang dipersonalisasi berdasarkan minat dan penggunaan Anda sebelumnya. Anda dapat memilih untuk tidak berpartisipasi dalam periklanan yang dipersonalisasi dengan mengunjungi pengaturan perangkat Android Anda (Pengaturan > Google > Iklan > Nonaktifkan Personalisasi Iklan).' },
      ],
      links: [
        { label: 'Kebijakan Privasi Google', href: 'https://policies.google.com/privacy' },
        { label: 'Kebijakan Google AdMob', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Kebijakan Privasi Firebase', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'Tautan ke kebijakan privasi penyedia layanan pihak ketiga yang digunakan oleh Aplikasi.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'Fitur Offline dan Penyimpanan Lokal', icon: 'wifi-off',
      description: 'Aplikasi memungkinkan Anda mengunduh terjemahan dan bacaan Al-Quran untuk penggunaan offline. Semua data tersebut, termasuk bookmark dan progres membaca, disimpan secara lokal di perangkat Anda. Kami tidak mengirimkan atau menyimpan kebiasaan membaca, bookmark, atau progres Anda di server kami.',
      items: [
        { icon: 'lock', title: 'Data Anda Tetap Lokal', desc: 'Semua terjemahan, bacaan, bookmark, dan progres membaca yang diunduh disimpan secara eksklusif di perangkat Anda. Tidak ada data membaca pribadi yang pernah dikirimkan ke server kami.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'Pembelian Dalam Aplikasi', icon: 'credit-card',
      description: 'Kami menawarkan pembelian dalam aplikasi "Premium" yang menghapus iklan. Pembayaran diproses dengan aman melalui sistem Penagihan Google Play. Kami tidak mengumpulkan, memproses, atau menyimpan detail kartu pembayaran Anda. Kebijakan privasi Google Play mengatur proses pembayaran.',
    },
    {
      id: 'children', number: '05', title: 'Privasi Anak', icon: 'baby',
      description: 'Layanan ini tidak ditujukan untuk siapa pun di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi yang dapat diidentifikasi secara pribadi dari anak-anak di bawah usia 13 tahun. Jika kami menemukan bahwa anak di bawah 13 tahun telah memberikan informasi pribadi kepada kami, kami segera menghapusnya dari server kami.',
    },
    {
      id: 'changes', number: '06', title: 'Perubahan Kebijakan Privasi', icon: 'refresh-cw',
      description: 'Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Oleh karena itu, Anda disarankan untuk meninjau halaman ini secara berkala untuk setiap perubahan. Kami akan memberi tahu Anda tentang setiap perubahan dengan memposting Kebijakan Privasi baru di halaman ini.',
    },
    {
      id: 'contact', number: '07', title: 'Hubungi Kami', icon: 'mail',
      description: 'Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'GUNGSA STUDIO',
    description: 'Kami menganggap privasi Anda sangat serius. Kebijakan ini mencerminkan komitmen kami terhadap transparansi dan kepercayaan.',
    copyright: 'Quran Daily oleh GUNGSA STUDIO. Hak cipta dilindungi.',
  },
}

/* ─────────────────── MALAY ─────────────────── */

const ms: Translations = {
  hero: {
    badge: 'Privasi Anda Penting',
    title: 'Dasar Privasi',
    subtitle: 'Quran Daily',
    date: 'Kemas kini terakhir: 4 Mei 2026',
    intro: 'Terima kasih kerana memilih untuk menjadi sebahagian daripada komuniti kami di',
    introHighlight: 'Quran Daily',
    scrollText: 'Tatal',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'Maklumat Yang Kami Kumpulkan', icon: 'eye',
      description: 'Quran Daily direka untuk menjadi rakan pembacaan dan pendengaran Al-Quran. Untuk menyediakan dan memperbaiki perkhidmatan kami, kami mengumpulkan jenis maklumat berikut secara automatik:',
      items: [
        { icon: 'monitor', title: 'Maklumat Peranti', desc: 'Kami mungkin mengumpulkan maklumat seperti ID peranti mudah alih anda, model, pengilang, sistem pengendalian, dan maklumat versi.' },
        { icon: 'bar-chart', title: 'Data Penggunaan', desc: 'Kami menjejaki interaksi dalam Aplikasi (cth., halaman yang dilawati, ciri yang digunakan) menggunakan Google Analytics untuk Firebase untuk memahami cara pengguna berinteraksi dengan Aplikasi kami dan meningkatkan pengalaman pengguna.' },
        { icon: 'bug', title: 'Laporan Ranap', desc: 'Kami menggunakan Firebase Crashlytics untuk mengumpulkan laporan ranap dan data prestasi. Ini membantu kami mengenal pasti pepijat dan meningkatkan kestabilan Aplikasi.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'Perkhidmatan Pihak Ketiga & Pengiklanan', icon: 'database',
      description: 'Kami menggunakan perkhidmatan pihak ketiga yang mungkin mengumpulkan maklumat yang digunakan untuk mengenal pasti anda. Aplikasi ini menggunakan Google AdMob untuk memaparkan iklan (melainkan anda telah meningkatkan ke versi Premium tanpa iklan).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob mungkin menggunakan ID pengiklanan (seperti ID Pengiklanan Android) dan kuki untuk menyajikan iklan yang diperibadikan berdasarkan minat dan penggunaan anda. Anda boleh memilih untuk tidak menyertai pengiklanan yang diperibadikan dengan melawat tetapan peranti Android anda (Tetapan > Google > Iklan > Pilih keluar dari Personalisasi Iklan).' },
      ],
      links: [
        { label: 'Dasar Privasi Google', href: 'https://policies.google.com/privacy' },
        { label: 'Dasar Google AdMob', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Dasar Privasi Firebase', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'Pautan ke dasar privasi penyedia perkhidmatan pihak ketiga yang digunakan oleh Aplikasi.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'Ciri Luar Talian dan Penyimpanan Tempatan', icon: 'wifi-off',
      description: 'Aplikasi membenarkan anda memuat turun terjemahan dan bacaan Al-Quran untuk kegunaan luar talian. Semua data tersebut, termasuk penanda buku dan kemajuan pembacaan, disimpan secara tempatan pada peranti anda. Kami tidak menghantar atau menyimpan tabiat pembacaan, penanda buku, atau kemajuan peribadi anda pada pelayan kami.',
      items: [
        { icon: 'lock', title: 'Data Anda Kekal Tempatan', desc: 'Semua terjemahan, bacaan, penanda buku, dan kemajuan pembacaan yang dimuat turun disimpan secara eksklusif pada peranti anda. Tiada data pembacaan peribadi yang pernah dihantar ke pelayan kami.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'Pembelian Dalam Aplikasi', icon: 'credit-card',
      description: 'Kami menawarkan pembelian dalam aplikasi "Premium" yang menghapuskan iklan. Pembayaran diproses dengan selamat melalui sistem Bil Google Play. Kami tidak mengumpulkan, memproses, atau menyimpan butiran kad pembayaran anda. Dasar privasi Google Play mentadbir proses pembayaran.',
    },
    {
      id: 'children', number: '05', title: 'Privasi Kanak-kanak', icon: 'baby',
      description: 'Perkhidmatan ini tidak ditujukan kepada sesiapa di bawah umur 13 tahun. Kami tidak mengumpulkan maklumat yang boleh dikenal pasti secara peribadi daripada kanak-kanak di bawah umur 13 tahun. Sekiranya kami menemui bahawa kanak-kanak di bawah umur 13 tahun telah memberikan kami maklumat peribadi, kami serta-merta memadamnya daripada pelayan kami.',
    },
    {
      id: 'changes', number: '06', title: 'Perubahan pada Dasar Privasi Ini', icon: 'refresh-cw',
      description: 'Kami mungkin mengemas kini Dasar Privasi kami dari semasa ke semasa. Oleh itu, anda dinasihatkan untuk menyemak halaman ini secara berkala untuk sebarang perubahan. Kami akan memaklumkan kepada anda tentang sebarang perubahan dengan menyiarkan Dasar Privasi baru di halaman ini.',
    },
    {
      id: 'contact', number: '07', title: 'Hubungi Kami', icon: 'mail',
      description: 'Sekiranya anda mempunyai sebarang soalan atau cadangan mengenai Dasar Privasi kami, jangan teragak-agak untuk menghubungi kami.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'GUNGSA STUDIO',
    description: 'Kami mengambil privasi anda dengan serius. Dasar ini mencerminkan komitmen kami terhadap ketelusan dan kepercayaan.',
    copyright: 'Quran Daily oleh GUNGSA STUDIO. Hak cipta terpelihara.',
  },
}

/* ─────────────────── TURKISH ─────────────────── */

const tr: Translations = {
  hero: {
    badge: 'Gizliliğiniz Önemlidir',
    title: 'Gizlilik Politikası',
    subtitle: 'Quran Daily',
    date: 'Son güncelleme: 4 Mayıs 2026',
    intro: 'Topluluğumuzun bir parçası olmayı seçtiğiniz için teşekkür ederiz',
    introHighlight: 'Quran Daily',
    scrollText: 'Kaydır',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'Topladığımız Bilgiler', icon: 'eye',
      description: 'Quran Daily, Kuran-ı Kerim\'i okumak ve dinlemek için bir yardımcı olarak tasarlanmıştır. Hizmetlerimizi sunmak ve iyileştirmek için aşağıdaki bilgi türlerini otomatik olarak toplarız:',
      items: [
        { icon: 'monitor', title: 'Cihaz Bilgileri', desc: 'Mobil cihaz kimliğiniz, model, üretici, işletim sistemi ve sürüm bilgileri gibi bilgileri toplayabiliriz.' },
        { icon: 'bar-chart', title: 'Kullanım Verileri', desc: 'Uygulama ile etkileşimleri (ör. ziyaret edilen sayfalar, kullanılan özellikler) Google Analytics for Firebase kullanarak takip ederiz. Bu, kullanıcıların Uygulamamızla nasıl etkileşime girdiğini anlamamıza ve kullanıcı deneyimini iyileştirmemize yardımcı olur.' },
        { icon: 'bug', title: 'Çökme Raporları', desc: 'Çökme raporlarını ve performans verilerini toplamak için Firebase Crashlytics kullanırız. Bu, hataları belirlememize ve Uygulamanın kararlılığını artırmamıza yardımcı olur.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'Üçüncü Taraf Hizmetleri ve Reklamcılık', icon: 'database',
      description: 'Sizi tanımlamak için kullanılabilecek bilgileri toplayan üçüncü taraf hizmetler kullanıyoruz. Uygulama reklamları göstermek için Google AdMob kullanır (reklamsız Premium sürüme yükselmediğiniz sürece).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob, ilgi alanlarınıza ve geçmiş kullanımınıza dayalı kişiselleştirilmiş reklamlar sunmak için reklam kimliklerini (örneğin Android Reklam Kimliği) ve çerezleri kullanabilir. Kişiselleştirilmiş reklamları devre dışı bırakmak için Android cihaz ayarlarınızı ziyaret edebilirsiniz (Ayarlar > Google > Reklamlar > Reklam Kişiselleştirmesini Devre Dışı Bırak).' },
      ],
      links: [
        { label: 'Google Gizlilik Politikası', href: 'https://policies.google.com/privacy' },
        { label: 'Google AdMob Politikaları', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Google Firebase Gizlilik Politikası', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'Uygulama tarafından kullanılan üçüncü taraf hizmet sağlayıcıların gizlilik politikası bağlantısı.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'Çevrimdışı Özellikler ve Yerel Depolama', icon: 'wifi-off',
      description: 'Uygulama, çevrimdışı kullanım için Kuran çevirilerini ve tilavetlerini indirmenize olanak tanır. Yer işaretleriniz ve okuma ilerlemeniz dahil tüm bu veriler cihazınızda yerel olarak kaydedilir. Kişisel okuma alışkanlıklarınızı, yer işaretlerinizi veya ilerlemenizi sunucularımızda iletmeyiz veya depolamayız.',
      items: [
        { icon: 'lock', title: 'Verileriniz Yerel Kalır', desc: 'İndirilen tüm çeviriler, tilavetler, yer işaretleri ve okuma ilerlemesi yalnızca cihazınızda depolanır. Kişisel okuma verisi hiçbir zaman sunucularımıza iletilmez.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'Uygulama İçi Satın Almalar', icon: 'credit-card',
      description: 'Reklamları kaldıran bir "Premium" uygulama içi satın alma sunuyoruz. Ödemeler Google Play Faturalandırma sistemi üzerinden güvenli bir şekilde işlenir. Ödeme kartı bilgilerinizi toplamaz, işlemez veya depolamayız. Ödeme sürecini Google Play\'in gizlilik politikası yönetir.',
    },
    {
      id: 'children', number: '05', title: 'Çocukların Gizliliği', icon: 'baby',
      description: 'Bu Hizmetler 13 yaşından küçük hiç kimseyi hedef almamaktadır. 13 yaşından küçük çocuklardan bilerek kişisel olarak tanımlanabilir bilgi toplamayız. 13 yaşından küçük bir çocuğun bize kişisel bilgi sağladığını keşfedersek, bunu derhal sunucularımızdan sileriz.',
    },
    {
      id: 'changes', number: '06', title: 'Gizlilik Politikasındaki Değişiklikler', icon: 'refresh-cw',
      description: 'Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Bu nedenle, herhangi bir değişiklik için bu sayfayı düzenli olarak gözden geçirmeniz önerilir. Herhangi bir değişikliği bu sayfada yeni Gizlilik Politikası yayımlayarak size bildiririz.',
    },
    {
      id: 'contact', number: '07', title: 'Bize Ulaşın', icon: 'mail',
      description: 'Gizlilik Politikamız hakkında herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'GUNGSA STUDIO',
    description: 'Gizliliğinizi ciddiye alıyoruz. Bu politika, şeffaflık ve güvene olan bağlılığımızı yansıtmaktadır.',
    copyright: 'Quran Daily - GUNGSA STUDIO. Tüm hakları saklıdır.',
  },
}

/* ─────────────────── URDU ─────────────────── */

const ur: Translations = {
  hero: {
    badge: 'آپ کی رازداری اہم ہے',
    title: 'رازداری کی پالیسی',
    subtitle: 'قرآن ڈیلی',
    date: 'آخری اپڈیٹ: 4 مئی 2026',
    intro: 'ہمارے برادری میں شامل ہونے کا انتخاب کرنے کے لیے آپ کا شکریہ',
    introHighlight: 'قرآن ڈیلی',
    scrollText: 'نیچے اسکرول کریں',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'ہم جو معلومات جمع کرتے ہیں', icon: 'eye',
      description: 'قرآن ڈیلی مقدس قرآن کو پڑھنے اور سنتے کے لیے ایک ساتھی کے طور پر ڈیزائن کیا گیا ہے۔ اپنی خدمات فراہم کرنے اور بہتر بنانے کے لیے، ہم خود بخود درج ذیل اقسام کی معلومات جمع کرتے ہیں:',
      items: [
        { icon: 'monitor', title: 'آلہ کی معلومات', desc: 'ہم آپ کے موبائل آلے کی شناخت، ماڈل، مینوفیکچرر، آپریٹنگ سسٹم، اور ورژن کی معلومات جمع کر سکتے ہیں۔' },
        { icon: 'bar-chart', title: 'استعمال کا ڈیٹا', desc: 'ہم گوگل انالیٹکس فار فائر بیس کا استعمال کرتے ہوئے ایپ کے اندر تعاملات (مثلاً، دیکھی گئی صفحات، استعمال کی گئی خصوصیات) کو ٹریک کرتے ہیں۔ اس سے ہمیں صارفین کے ایپ کے ساتھ کیسے تعامل کرتے ہیں سمجھنے اور صارف کے تجربے کو بہتر بنانے میں مدد ملتی ہے۔' },
        { icon: 'bug', title: 'کریش رپورٹس', desc: 'ہم کراش رپورٹس اور پرفارمنس ڈیٹا جمع کرنے کے لیے فائر بیس کریشلٹکس استعمال کرتے ہیں۔ اس سے ہمیں بگز کی شناخت اور ایپ کی استحکام کو بہتر بنانے میں مدد ملتی ہے۔' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'فریق ثالث کی خدمات اور اشتہارات', icon: 'database',
      description: 'ہم فریق ثالث کی خدمات استعمال کرتے ہیں جو آپ کی شناخت کے لیے استعمال ہونے والی معلومات جمع کر سکتی ہیں۔ ایپ اشتہارات دکھانے کے لیے گوگل ایڈ موب استعمال کرتی ہے (جب تک آپ پریمیم بغیر اشتہار ورژن میں اپ گریڈ نہیں کرتے)۔',
      items: [
        { icon: 'megaphone', title: 'گوگل ایڈ موب', desc: 'ایڈ موب آپ کی دلچسپیوں اور پچھلے استعمال کی بنیاد پر ذاتی اشتہارات پیش کرنے کے لیے اشتہاری شناختیں (جیسے اینڈرائیڈ اشتہاری شناخت) اور کوکیز کا استعمال کر سکتی ہے۔ آپ اپنے اینڈرائیڈ آلے کی سیٹنگز پر جا کر ذاتی اشتہارات سے باہر نکلیں (سیٹنگز > گوگل > اشتہارات > اشتہارات کی ذاتی بنائی سے باہر نکلیں)۔' },
      ],
      links: [
        { label: 'گوگل رازداری کی پالیسی', href: 'https://policies.google.com/privacy' },
        { label: 'گوگل ایڈ موب کی پالیسیاں', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'گوگل فائر بیس رازداری کی پالیسی', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'ایپ کے ذریعے استعمال شدہ فریق ثالث خدمات فراہم کنندگان کی رازداری کی پالیسی کا رابطہ۔',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'آف لائن فیچرز اور مقامی ذخیرہ', icon: 'wifi-off',
      description: 'ایپ آپ کو آف لائن استعمال کے لیے قرآنی ترجمے اور تلاوت ڈاؤن لوڈ کرنے کی اجازت دیتی ہے۔ تمام ایسی ڈیٹا، بشمول آپ کے بک مارکس اور پڑھنے کی پیش رفت، آپ کے آلے پر مقامی طور پر محفوظ ہوتی ہے۔ ہم آپ کی ذاتی پڑھنے کی عادتوں، بک مارکس، یا پیش رفت کو اپنے سرورز پر منتقل یا محفوظ نہیں کرتے۔',
      items: [
        { icon: 'lock', title: 'آپ کا ڈیٹا مقامی رہتا ہے', desc: 'تمام ڈاؤن لوڈ شدہ ترجمے، تلاوت، بک مارکس، اور پڑھنے کی پیش رفت صرف آپ کے آلے پر محفوظ ہوتی ہے۔ کوئی ذاتی پڑھنے کا ڈیٹا ہمارے سرورز کو بھیجا نہیں جاتا۔' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'ایپ کے اندر خریداری', icon: 'credit-card',
      description: 'ہم ایک "پریمیم" اندرونی خریداری پیش کرتے ہیں جو اشتہارات کو ہٹا دیتی ہے۔ ادائیگیاں گوگل پلے بلنگ سسٹم کے ذریعے محفوظ طریقے سے پروسیس کی جاتی ہیں۔ ہم آپ کے ادائیگی کارڈ کی تفصیلات جمع، پروسیس، یا محفوظ نہیں کرتے۔ گوگل پلے کی رازداری کی پالیسی ادائیگی کے عمل کو کنٹرول کرتی ہے۔',
    },
    {
      id: 'children', number: '05', title: 'بچوں کی رازداری', icon: 'baby',
      description: 'یہ خدمات 13 سال سے کم عمر کسی کو بھی خاطر میں نہیں رکھتی ہیں۔ ہم جان بوجھ کر 13 سال سے کم عمر بچوں سے ذاتی طور پر قابل شناخت معلومات جمع نہیں کرتے۔ اگر ہم پاتے ہیں کہ 13 سال سے کم عمر بچے نے ہمیں ذاتی معلومات فراہم کی ہیں، تو ہم فوری طور پر اسے اپنے سرورز سے حذف کر دیتے ہیں۔',
    },
    {
      id: 'changes', number: '06', title: 'رازداری کی پالیسی میں تبدیلیاں', icon: 'refresh-cw',
      description: 'ہم وقتاً فوقتاً اپنی رازداری کی پالیسی اپ ڈیٹ کر سکتے ہیں۔ لہٰذا، آپ کو مشورہ دیا جاتا ہے کہ کسی بھی تبدیلی کے لیے اس صفحے کو وقتاً فوقتاً نظر ثانی کریں۔ ہم اس صفحے پر نئی رازداری کی پالیسی پوسٹ کر کے آپ کو کسی بھی تبدیلی سے آگاہ کریں گے۔',
    },
    {
      id: 'contact', number: '07', title: 'ہم سے رابطہ کریں', icon: 'mail',
      description: 'اگر آپ کے ہمارے رازداری کی پالیسی کے بارے میں کوئی سوالات یا تجاویز ہیں، تو بلا جھجھک ہم سے رابطہ کریں۔',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'گونگسا اسٹوڈیو',
    description: 'ہم آپ کی رازداری کو سنجیدگی سے لیٹے ہیں۔ یہ پالیسی شفافیت اور اعتماد کے لیے ہمارے عزم کو ظاہر کرتی ہے۔',
    copyright: 'قرآن ڈیلی توسط گونگسا اسٹوڈیو۔ جملہ حقوق محفوظ ہیں۔',
  },
}

/* ─────────────────── BENGALI ─────────────────── */

const bn: Translations = {
  hero: {
    badge: 'আপনার গোপনীয়তা গুরুত্বপূর্ণ',
    title: 'গোপনীয়তা নীতি',
    subtitle: 'কুরআন ডেইলি',
    date: 'সর্বশেষ আপডেট: ৪ মে ২০২৬',
    intro: 'আমাদের কমিউনিটিতে যুক্ত হওয়ার সিদ্ধান্তের জন্য আপনাকে ধন্যবাদ',
    introHighlight: 'কুরআন ডেইলি',
    scrollText: 'স্ক্রল করুন',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'আমরা যে তথ্য সংগ্রহ করি', icon: 'eye',
      description: 'কুরআন ডেইলি পবিত্র কুরআন পড়ার এবং শোনার জন্য একটি সঙ্গী হিসেবে ডিজাইন করা হয়েছে। আমাদের পরিষেবা প্রদান এবং উন্নত করার জন্য, আমরা স্বয়ংক্রিয়ভাবে নিম্নলিখিত ধরনের তথ্য সংগ্রহ করি:',
      items: [
        { icon: 'monitor', title: 'ডিভাইসের তথ্য', desc: 'আমরা আপনার মোবাইল ডিভাইস আইডি, মডেল, প্রস্তুতকারক, অপারেটিং সিস্টেম এবং সংস্করণ তথ্যের মতো তথ্য সংগ্রহ করতে পারি।' },
        { icon: 'bar-chart', title: 'ব্যবহারের ডেটা', desc: 'আমরা গুগল অ্যানালিটিক্স ফর ফায়ারবেস ব্যবহার করে অ্যাপের মধ্যে ইন্টারঅ্যাকশন ট্র্যাক করি (যেমন, পরিদর্শন করা পৃষ্ঠা, ব্যবহৃত বৈশিষ্ট্য)। এটি আমাদের বুঝতে সাহায্য করে যে ব্যবহারকারীরা কীভাবে আমাদের অ্যাপের সাথে ইন্টারঅ্যাক্ট করে এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে।' },
        { icon: 'bug', title: 'ক্র্যাশ রিপোর্ট', desc: 'আমরা ক্র্যাশ রিপোর্ট এবং পারফরম্যান্স ডেটা সংগ্রহ করতে ফায়ারবেস ক্র্যাশলিটিক্স ব্যবহার করি। এটি আমাদের বাগ সনাক্ত করতে এবং অ্যাপের স্থিতিশীলতা উন্নত করতে সাহায্য করে।' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'তৃতীয় পক্ষের পরিষেবা ও বিজ্ঞাপন', icon: 'database',
      description: 'আমরা তৃতীয় পক্ষের পরিষেবা ব্যবহার করি যা আপনাকে সনাক্ত করতে ব্যবহৃত তথ্য সংগ্রহ করতে পারে। অ্যাপটি বিজ্ঞাপন প্রদর্শনের জন্য গুগল অ্যাডমোব ব্যবহার করে (যদি না আপনি বিজ্ঞাপনমুক্ত প্রিমিয়াম সংস্করণে আপগ্রেড করেছেন)।',
      items: [
        { icon: 'megaphone', title: 'গুগল অ্যাডমোব', desc: 'অ্যাডমোব আপনার আগ্রহ এবং অতীত ব্যবহারের উপর ভিত্তি করে ব্যক্তিগতকৃত বিজ্ঞাপন পরিবেশন করতে বিজ্ঞাপন আইডি (যেমন অ্যান্ড্রয়েড বিজ্ঞাপন আইডি) এবং কুকিজ ব্যবহার করতে পারে। আপনি আপনার অ্যান্ড্রয়েড ডিভাইস সেটিংসে গিয়ে ব্যক্তিগতকৃত বিজ্ঞাপন থেকে বেছে নিতে পারেন (সেটিংস > গুগল > বিজ্ঞাপন > বিজ্ঞাপন ব্যক্তিগতকরণ থেকে বের হন)।' },
      ],
      links: [
        { label: 'গুগল গোপনীয়তা নীতি', href: 'https://policies.google.com/privacy' },
        { label: 'গুগল অ্যাডমোব নীতি', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'গুগল ফায়ারবেস গোপনীয়তা নীতি', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'অ্যাপে ব্যবহৃত তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের গোপনীয়তা নীতির লিংক।',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'অফলাইন বৈশিষ্ট্য এবং স্থানীয় স্টোরেজ', icon: 'wifi-off',
      description: 'অ্যাপটি আপনাকে অফলাইন ব্যবহারের জন্য কুরআনের অনুবাদ এবং তেলাওয়াত ডাউনলোড করতে দেয়। এই সমস্ত ডেটা, আপনার বুকমার্ক এবং পড়ার অগ্রগতি সহ, আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষণ করা হয়। আমরা আপনার ব্যক্তিগত পড়ার অভ্যাস, বুকমার্ক বা অগ্রগতি আমাদের সার্ভারে প্রেরণ বা সংরক্ষণ করি না।',
      items: [
        { icon: 'lock', title: 'আপনার ডেটা স্থানীয় থাকে', desc: 'ডাউনলোড করা সমস্ত অনুবাদ, তেলাওয়াত, বুকমার্ক এবং পড়ার অগ্রগতি শুধুমাত্র আপনার ডিভাইসে সংরক্ষণ করা হয়। কোনো ব্যক্তিগত পড়ার ডেটা কখনই আমাদের সার্ভারে প্রেরণ করা হয় না।' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'অ্যাপের মধ্যে ক্রয়', icon: 'credit-card',
      description: 'আমরা একটি "প্রিমিয়াম" ইন-অ্যাপ ক্রয় অফার করি যা বিজ্ঞাপন সরিয়ে দেয়। পেমেন্ট গুগল প্লে বিলিং সিস্টেমের মাধ্যমে নিরাপদে প্রক্রিয়া করা হয়। আমরা আপনার পেমেন্ট কার্ডের বিবরণ সংগ্রহ, প্রক্রিয়া বা সংরক্ষণ করি না। গুগল প্লের গোপনীয়তা নীতি পেমেন্ট প্রক্রিয়া পরিচালনা করে।',
    },
    {
      id: 'children', number: '05', title: 'শিশুদের গোপনীয়তা', icon: 'baby',
      description: 'এই পরিষেবাগুলি ১৩ বছরের কম বয়সী কাউকে সম্বোধন করে না। আমরা ১৩ বছরের কম বয়সী শিশুদের কাছ থেকে ইচ্ছাকৃতভাবে ব্যক্তিগতভাবে সনাক্তযোগ্য তথ্য সংগ্রহ করি না। আমরা যদি আবিষ্কার করি যে ১৩ বছরের কম বয়সী একটি শিশু আমাদের ব্যক্তিগত তথ্য প্রদান করেছে, আমরা তাৎক্ষণিকভাবে এটি আমাদের সার্ভার থেকে মুছে ফেলি।',
    },
    {
      id: 'changes', number: '06', title: 'এই গোপনীয়তা নীতিতে পরিবর্তন', icon: 'refresh-cw',
      description: 'আমরা সময়ে সময়ে আমাদের গোপনীয়তা নীতি আপডেট করতে পারি। তাই, যেকোনো পরিবর্তনের জন্য আমরা আপনাকে পর্যায়ক্রমিকভাবে এই পৃষ্ঠাটি পর্যালোচনা করার পরামর্শ দিই। আমরা এই পৃষ্ঠায় নতুন গোপনীয়তা নীতি পোস্ট করে যেকোনো পরিবর্তনের বিষয়ে আপনাকে অবহিত করব।',
    },
    {
      id: 'contact', number: '07', title: 'যোগাযোগ করুন', icon: 'mail',
      description: 'আপনার যদি আমাদের গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন বা পরামর্শ থাকে, তবে দ্বিধা না করে আমাদের সাথে যোগাযোগ করুন।',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'গুংসা স্টুডিও',
    description: 'আমরা আপনার গোপনীয়তাকে গুরুত্বের সাথে নিই। এই নীতি স্বচ্ছতা এবং বিশ্বাসের প্রতি আমাদের প্রতিশ্রুতি প্রতিফলিত করে।',
    copyright: 'কুরআন ডেইলি দ্বারা গুংসা স্টুডিও। সর্বস্বত্ব সংরক্ষিত।',
  },
}

/* ─────────────────── PERSIAN ─────────────────── */

const fa: Translations = {
  hero: {
    badge: 'حریم خصوصی شما مهم است',
    title: 'سیاست حفظ حریم خصوصی',
    subtitle: 'قرآن روزانه',
    date: 'آخرین به‌روزرسانی: ۴ مه ۲۰۲۶',
    intro: 'از شما ممنونیم که انتخاب کردید بخشی از جامعه ما در',
    introHighlight: 'قرآن روزانه',
    scrollText: 'پیمایش',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'اطلاعاتی که جمع‌آوری می‌کنیم', icon: 'eye',
      description: 'قرآن روزانه برای خواندن و شنیدن قرآن کریم به عنوان همراهی طراحی شده است. برای ارائه و بهبود خدماتمان، اطلاعات زیر را به صورت خودکار جمع‌آوری می‌کنیم:',
      items: [
        { icon: 'monitor', title: 'اطلاعات دستگاه', desc: 'ممکن است اطلاعاتی مانند شناسه دستگاه همراه، مدل، سازنده، سیستم عامل و اطلاعات نسخه را جمع‌آوری کنیم.' },
        { icon: 'bar-chart', title: 'داده‌های استفاده', desc: 'ما تعاملات در اپلیکیشن (مانند صفحات بازدید شده، ویژگی‌های استفاده شده) را با استفاده از Google Analytics for Firebase ردیابی می‌کنیم تا درک کنیم کاربران چگونه با اپلیکیشن ما تعامل دارند و تجربه کاربری را بهبود بخشیم.' },
        { icon: 'bug', title: 'گزارش‌های خرابی', desc: 'ما از Firebase Crashlytics برای جمع‌آوری گزارش‌های خرابی و داده‌های عملکرد استفاده می‌کنیم. این به ما کمک می‌کند تا باگ‌ها را شناسایی و پایداری اپلیکیشن را بهبود بخشیم.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'خدمات شخص ثالث و تبلیغات', icon: 'database',
      description: 'ما از خدمات شخص ثالثی استفاده می‌کنیم که ممکن است اطلاعاتی را جمع‌آوری کنند که برای شناسایی شما استفاده می‌شود. اپلیکیشن از Google AdMob برای نمایش تبلیغات استفاده می‌کند (مگر اینکه به نسخه حرفه‌ای بدون تبلیغ ارتقا داده باشید).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob ممکن است از شناسه‌های تبلیغاتی (مانند شناسه تبلیغاتی اندروید) و کوکی‌ها برای ارائه تبلیغات شخصی‌سازی شده بر اساس علایق و استفاده قبلی شما استفاده کند. می‌توانید از تبلیغات شخصی‌سازی شده با مراجعه به تنظیمات دستگاه اندروید خود انصراف دهید (تنظیمات > Google > تبلیغات > انصراف از شخصی‌سازی تبلیغات).' },
      ],
      links: [
        { label: 'سیاست حریم خصوصی Google', href: 'https://policies.google.com/privacy' },
        { label: 'سیاست‌های Google AdMob', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'سیاست حریم خصوصی Firebase', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'لینک به سیاست حریم خصوصی ارائه‌دهندگان خدمات شخص ثالث استفاده شده در اپلیکیشن.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'ویژگی‌های آفلاین و ذخیره‌سازی محلی', icon: 'wifi-off',
      description: 'اپلیکیشن به شما امکان می‌دهد ترجمه‌ها و تلاوت‌های قرآنی را برای استفاده آفلاین دانلود کنید. تمام این داده‌ها، از جمله نشانک‌ها و پیشرفت مطالعه، به صورت محلی در دستگاه شما ذخیره می‌شود. ما عادات مطالعه شخصی، نشانک‌ها یا پیشرفت شما را روی سرورهای خود انتقال یا ذخیره نمی‌کنیم.',
      items: [
        { icon: 'lock', title: 'داده‌های شما محلی می‌ماند', desc: 'تمام ترجمه‌ها، تلاوت‌ها، نشانک‌ها و پیشرفت مطالعه دانلود شده منحصراً در دستگاه شما ذخیره می‌شود. هیچ داده مطالعه شخصی هرگز به سرورهای ما ارسال نمی‌شود.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'خریدهای درون برنامه‌ای', icon: 'credit-card',
      description: 'ما یک خرید درون برنامه‌ای "حرفه‌ای" ارائه می‌دهیم که تبلیغات را حذف می‌کند. پرداخت‌ها از طریق سیستم صورتحساب Google Play به صورت امن پردازش می‌شوند. ما جزئیات کارت پرداخت شما را جمع‌آوری، پردازش یا ذخیره نمی‌کنیم. سیاست حریم خصوصی Google Play فرآیند پرداخت را اداره می‌کند.',
    },
    {
      id: 'children', number: '05', title: 'حریم خصوصی کودکان', icon: 'baby',
      description: 'این خدمات برای افراد زیر ۱۳ سال طراحی نشده است. ما به طور عمدی اطلاعات قابل شناسایی شخصی از کودکان زیر ۱۳ سال جمع‌آوری نمی‌کنیم. در صورتی که متوجه شویم کودکی زیر ۱۳ سال اطلاعات شخصی به ما ارائه داده است، فوراً آن را از سرورهای خود حذف می‌کنیم.',
    },
    {
      id: 'changes', number: '06', title: 'تغییرات در این سیاست حریم خصوصی', icon: 'refresh-cw',
      description: 'ما ممکن است سیاست حریم خصوصی خود را از زمان به زمان به‌روز کنیم. بنابراین توصیه می‌کنیم برای هرگونه تغییر، این صفحه را به طور دوره‌ای بررسی کنید. ما هرگونه تغییر را با درج سیاست حریم خصوصی جدید در این صفحه به شما اطلاع خواهیم داد.',
    },
    {
      id: 'contact', number: '07', title: 'تماس با ما', icon: 'mail',
      description: 'اگر در مورد سیاست حریم خصوصی ما سوال یا پیشنهادی دارید، بدون تردید با ما تماس بگیرید.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'گونگسا استودیو',
    description: 'ما حریم خصوصی شما را جدی می‌گیریم. این سیاست نشان‌دهنده تعهد ما به شفافیت و اعتماد است.',
    copyright: 'قرآن روزانه توسط گونگسا استودیو. تمامی حقوق محفوظ است.',
  },
}

/* ─────────────────── FRENCH ─────────────────── */

const fr: Translations = {
  hero: {
    badge: 'Votre vie privée compte',
    title: 'Politique de confidentialité',
    subtitle: 'Quran Daily',
    date: 'Dernière mise à jour : 4 mai 2026',
    intro: 'Merci d\'avoir choisi de faire partie de notre communauté chez',
    introHighlight: 'Quran Daily',
    scrollText: 'Défiler',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'Informations que nous collectons', icon: 'eye',
      description: 'Quran Daily est conçu pour être un compagnon de lecture et d\'écoute du Saint Coran. Pour fournir et améliorer nos services, nous collectons automatiquement les types d\'informations suivants :',
      items: [
        { icon: 'monitor', title: 'Informations sur l\'appareil', desc: 'Nous pouvons collecter des informations telles que l\'identifiant de votre appareil mobile, le modèle, le fabricant, le système d\'exploitation et les informations de version.' },
        { icon: 'bar-chart', title: 'Données d\'utilisation', desc: 'Nous suivons les interactions dans l\'application (ex. pages visitées, fonctionnalités utilisées) à l\'aide de Google Analytics pour Firebase afin de comprendre comment les utilisateurs interagissent avec notre application et d\'améliorer l\'expérience utilisateur.' },
        { icon: 'bug', title: 'Rapports de plantage', desc: 'Nous utilisons Firebase Crashlytics pour collecter les rapports de plantage et les données de performance. Cela nous aide à identifier les bugs et à améliorer la stabilité de l\'application.' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'Services tiers et publicité', icon: 'database',
      description: 'Nous utilisons des services tiers qui peuvent collecter des informations utilisées pour vous identifier. L\'application utilise Google AdMob pour afficher des publicités (sauf si vous avez effectué une mise à niveau vers la version Premium sans publicité).',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob peut utiliser des identifiants publicitaires (comme l\'identifiant publicitaire Android) et des cookies pour diffuser des publicités personnalisées basées sur vos centres d\'intérêt et votre utilisation passée. Vous pouvez refuser la publicité personnalisée en visitant les paramètres de votre appareil Android (Paramètres > Google > Publicités > Désactiver la personnalisation des publicités).' },
      ],
      links: [
        { label: 'Politique de confidentialité Google', href: 'https://policies.google.com/privacy' },
        { label: 'Politiques Google AdMob', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Politique de confidentialité Firebase', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'Lien vers la politique de confidentialité des fournisseurs de services tiers utilisés par l\'application.',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'Fonctionnalités hors ligne et stockage local', icon: 'wifi-off',
      description: 'L\'application vous permet de télécharger des traductions et des récitations coraniques pour une utilisation hors ligne. Toutes ces données, y compris vos signets et votre progression de lecture, sont enregistrées localement sur votre appareil. Nous ne transmettons ni ne stockons vos habitudes de lecture personnelles, signets ou progression sur nos serveurs.',
      items: [
        { icon: 'lock', title: 'Vos données restent locales', desc: 'Toutes les traductions, récitations, signets et progression de lecture téléchargés sont stockés exclusivement sur votre appareil. Aucune donnée de lecture personnelle n\'est jamais transmise à nos serveurs.' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'Achats intégrés', icon: 'credit-card',
      description: 'Nous proposons un achat intégré "Premium" qui supprime les publicités. Les paiements sont traités en toute sécurité via le système de facturation Google Play. Nous ne collectons, ne traitons ni ne stockons les détails de votre carte de paiement. La politique de confidentialité de Google Play régit le processus de paiement.',
    },
    {
      id: 'children', number: '05', title: 'Confidentialité des enfants', icon: 'baby',
      description: 'Ces services ne s\'adressent à personne de moins de 13 ans. Nous ne collectons pas sciemment d\'informations personnellement identifiables auprès d\'enfants de moins de 13 ans. Si nous découvrons qu\'un enfant de moins de 13 ans nous a fourni des informations personnelles, nous les supprimons immédiatement de nos serveurs.',
    },
    {
      id: 'changes', number: '06', title: 'Modifications de cette politique', icon: 'refresh-cw',
      description: 'Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Vous êtes donc invité à consulter périodiquement cette page pour tout changement. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.',
    },
    {
      id: 'contact', number: '07', title: 'Contactez-nous', icon: 'mail',
      description: 'Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n\'hésitez pas à nous contacter.',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'GUNGSA STUDIO',
    description: 'Nous prenons votre vie privée au sérieux. Cette politique reflète notre engagement envers la transparence et la confiance.',
    copyright: 'Quran Daily par GUNGSA STUDIO. Tous droits réservés.',
  },
}

/* ─────────────────── HINDI ─────────────────── */

const hi: Translations = {
  hero: {
    badge: 'आपकी गोपनीयता महत्वपूर्ण है',
    title: 'गोपनीयता नीति',
    subtitle: 'कुरान डेली',
    date: 'अंतिम अपडेट: 4 मई 2026',
    intro: 'हमारे समुदाय का हिस्सा बनने के लिए चुनने के लिए आपका धन्यवाद',
    introHighlight: 'कुरान डेली',
    scrollText: 'स्क्रॉल करें',
  },
  sections: [
    {
      id: 'information', number: '01', title: 'हम जो जानकारी एकत्र करते हैं', icon: 'eye',
      description: 'कुरान डेली पवित्र कुरान को पढ़ने और सुनने के लिए एक साथी के रूप में डिज़ाइन किया गया है। अपनी सेवा प्रदान करने और सुधारने के लिए, हम स्वचालित रूप से निम्नलिखित प्रकार की जानकारी एकत्र करते हैं:',
      items: [
        { icon: 'monitor', title: 'डिवाइस जानकारी', desc: 'हम आपके मोबाइल डिवाइस आईडी, मॉडल, निर्माता, ऑपरेटिंग सिस्टम और संस्करण जानकारी जैसी जानकारी एकत्र कर सकते हैं।' },
        { icon: 'bar-chart', title: 'उपयोग डेटा', desc: 'हम Google Analytics for Firebase का उपयोग करके ऐप में इंटरैक्शन (जैसे, देखे गए पेज, उपयोग की गई सुविधाएं) को ट्रैक करते हैं। यह हमें समझने में मदद करता है कि उपयोगकर्ता हमारे ऐप के साथ कैसे इंटरैक्ट करते हैं और उपयोगकर्ता अनुभव को बेहतर बनाता है।' },
        { icon: 'bug', title: 'क्रैश रिपोर्ट', desc: 'हम क्रैश रिपोर्ट और प्रदर्शन डेटा एकत्र करने के लिए Firebase Crashlytics का उपयोग करते हैं। यह हमें बग की पहचान करने और ऐप की स्थिरता में सुधार करने में मदद करता है।' },
      ],
    },
    {
      id: 'third-party', number: '02', title: 'तृतीय-पक्ष सेवाएं और विज्ञापन', icon: 'database',
      description: 'हम तृतीय-पक्ष सेवाओं का उपयोग करते हैं जो आपकी पहचान के लिए उपयोग की जाने वाली जानकारी एकत्र कर सकती हैं। ऐप विज्ञापन प्रदर्शित करने के लिए Google AdMob का उपयोग करता है (जब तक कि आप विज्ञापन-मुक्त प्रीमियम संस्करण में अपग्रेड नहीं कर चुके हैं)।',
      items: [
        { icon: 'megaphone', title: 'Google AdMob', desc: 'AdMob आपकी रुचियों और पिछले उपयोग के आधार पर व्यक्तिगत विज्ञापन परोसने के लिए विज्ञापन आईडी (जैसे Android विज्ञापन आईडी) और कुकीज़ का उपयोग कर सकता है। आप अपने Android डिवाइस सेटिंग्स पर जाकर व्यक्तिगत विज्ञापन से बाहर निकल सकते हैं (सेटिंग्स > Google > विज्ञापन > विज्ञापन व्यक्तिगतीकरण से बाहर निकलें)।' },
      ],
      links: [
        { label: 'Google गोपनीयता नीति', href: 'https://policies.google.com/privacy' },
        { label: 'Google AdMob नीतियां', href: 'https://support.google.com/admob/answer/6128543' },
        { label: 'Google Firebase गोपनीयता नीति', href: 'https://firebase.google.com/support/privacy/' },
      ],
      note: 'ऐप द्वारा उपयोग किए गए तृतीय-पक्ष सेवा प्रदाताओं की गोपनीयता नीति का लिंक।',
      noteType: 'note',
    },
    {
      id: 'offline', number: '03', title: 'ऑफलाइन सुविधाएं और स्थानीय स्टोरेज', icon: 'wifi-off',
      description: 'ऐप आपको ऑफलाइन उपयोग के लिए कुरान के अनुवाद और तिलावत डाउनलोड करने की अनुमति देता है। इस तरह का सारा डेटा, जिसमें आपके बुकमार्क और पढ़ने की प्रगति शामिल है, आपके डिवाइस पर स्थानीय रूप से सहेजा जाता है। हम आपकी व्यक्तिगत पढ़ने की आदतों, बुकमार्क या प्रगति को अपने सर्वर पर प्रेषित या संग्रहीत नहीं करते हैं।',
      items: [
        { icon: 'lock', title: 'आपका डेटा स्थानीय रहता है', desc: 'सभी डाउनलोड किए गए अनुवाद, तिलावत, बुकमार्क और पढ़ने की प्रगति विशेष रूप से आपके डिवाइस पर संग्रहीत होती है। कोई भी व्यक्तिगत पढ़ने का डेटा हमारे सर्वर पर भेजा नहीं जाता है।' },
      ],
    },
    {
      id: 'purchases', number: '04', title: 'इन-ऐप खरीदारी', icon: 'credit-card',
      description: 'हम एक "प्रीमियम" इन-ऐप खरीदारी प्रदान करते हैं जो विज्ञापनों को हटा देती है। भुगतान Google Play बिलिंग सिस्टम के माध्यम से सुरक्षित रूप से संसाधित किया जाता है। हम आपके भुगतान कार्ड का विवरण एकत्र, संसाधित या संग्रहीत नहीं करते हैं। Google Play की गोपनीयता नीति भुगतान प्रक्रिया को नियंत्रित करती है।',
    },
    {
      id: 'children', number: '05', title: 'बच्चों की गोपनीयता', icon: 'baby',
      description: 'ये सेवाएं 13 वर्ष से कम उम्र के किसी को भी संबोधित नहीं करती हैं। हम 13 वर्ष से कम उम्र के बच्चों से जानबूझकर व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र नहीं करते हैं। यदि हम पाते हैं कि 13 वर्ष से कम उम्र का बच्चा हमें व्यक्तिगत जानकारी प्रदान कर रहा है, तो हम तुरंत इसे हमारे सर्वर से हटा देते हैं।',
    },
    {
      id: 'changes', number: '06', title: 'इस गोपनीयता नीति में परिवर्तन', icon: 'refresh-cw',
      description: 'हम समय-समय पर अपनी गोपनीयता नीति अपडेट कर सकते हैं। इसलिए, आपको किसी भी बदलाव के लिए इस पृष्ठ की समय-समय पर समीक्षा करने की सलाह दी जाती है। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव की सूचना देंगे।',
    },
    {
      id: 'contact', number: '07', title: 'हमसे संपर्क करें', icon: 'mail',
      description: 'यदि आपके हमारी गोपनीयता नीति के बारे में कोई प्रश्न या सुझाव है, तो हमसे संपर्क करने में संकोच न करें।',
      note: 'bookingforjob.dev@gmail.com', noteType: 'contact',
    },
  ],
  footer: {
    company: 'गुंगसा स्टूडियो',
    description: 'हम आपकी गोपनीयता को गंभीरता से लेते हैं। यह नीति पारदर्शिता और विश्वास के प्रति हमारी प्रतिबद्धता को दर्शाती है।',
    copyright: 'कुरान डेली द्वारा गुंगसा स्टूडियो। सर्वाधिकार सुरक्षित।',
  },
}

/* ─────────────────── EXPORT ─────────────────── */

export const translations: Record<LangCode, Translations> = { en, ar, id, ms, tr, ur, bn, fa, fr, hi }
