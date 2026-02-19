        const SURAHS = [{ number: 1, name: "الفاتحة", ayahs: 7 }, { number: 2, name: "البقرة", ayahs: 286 }, { number: 3, name: "آل عمران", ayahs: 200 }, { number: 4, name: "النساء", ayahs: 176 }, { number: 5, name: "المائدة", ayahs: 120 }, { number: 6, name: "الأنعام", ayahs: 165 }, { number: 7, name: "الأعراف", ayahs: 206 }, { number: 8, name: "الأنفال", ayahs: 75 }, { number: 9, name: "التوبة", ayahs: 129 }, { number: 10, name: "يونس", ayahs: 109 }, { number: 11, name: "هود", ayahs: 123 }, { number: 12, name: "يوسف", ayahs: 111 }, { number: 13, name: "الرعد", ayahs: 43 }, { number: 14, name: "إبراهيم", ayahs: 52 }, { number: 15, name: "الحجر", ayahs: 99 }, { number: 16, name: "النحل", ayahs: 128 }, { number: 17, name: "الإسراء", ayahs: 111 }, { number: 18, name: "الكهف", ayahs: 110 }, { number: 19, name: "مريم", ayahs: 98 }, { number: 20, name: "طه", ayahs: 135 }, { number: 21, name: "الأنبياء", ayahs: 112 }, { number: 22, name: "الحج", ayahs: 78 }, { number: 23, name: "المؤمنون", ayahs: 118 }, { number: 24, name: "النور", ayahs: 64 }, { number: 25, name: "الفرقان", ayahs: 77 }, { number: 26, name: "الشعراء", ayahs: 227 }, { number: 27, name: "النمل", ayahs: 93 }, { number: 28, name: "القصص", ayahs: 88 }, { number: 29, name: "العنكبوت", ayahs: 69 }, { number: 30, name: "الروم", ayahs: 60 }, { number: 31, name: "لقمان", ayahs: 34 }, { number: 32, name: "السجدة", ayahs: 30 }, { number: 33, name: "الأحزاب", ayahs: 73 }, { number: 34, name: "سبأ", ayahs: 54 }, { number: 35, name: "فاطر", ayahs: 45 }, { number: 36, name: "يس", ayahs: 83 }, { number: 37, name: "الصافات", ayahs: 182 }, { number: 38, name: "ص", ayahs: 88 }, { number: 39, name: "الزمر", ayahs: 75 }, { number: 40, name: "غافر", ayahs: 85 }, { number: 41, name: "فصلت", ayahs: 54 }, { number: 42, name: "الشورى", ayahs: 53 }, { number: 43, name: "الزخرف", ayahs: 89 }, { number: 44, name: "الدخان", ayahs: 59 }, { number: 45, name: "الجاثية", ayahs: 37 }, { number: 46, name: "الأحقاف", ayahs: 35 }, { number: 47, name: "محمد", ayahs: 38 }, { number: 48, name: "الفتح", ayahs: 29 }, { number: 49, name: "الحجرات", ayahs: 18 }, { number: 50, name: "ق", ayahs: 45 }, { number: 51, name: "الذاريات", ayahs: 60 }, { number: 52, name: "الطور", ayahs: 49 }, { number: 53, name: "النجم", ayahs: 62 }, { number: 54, name: "القمر", ayahs: 55 }, { number: 55, name: "الرحمن", ayahs: 78 }, { number: 56, name: "الواقعة", ayahs: 96 }, { number: 57, name: "الحديد", ayahs: 29 }, { number: 58, name: "المجادلة", ayahs: 22 }, { number: 59, name: "الحشر", ayahs: 24 }, { number: 60, name: "الممتحنة", ayahs: 13 }, { number: 61, name: "الصف", ayahs: 14 }, { number: 62, name: "الجمعة", ayahs: 11 }, { number: 63, name: "المنافقون", ayahs: 11 }, { number: 64, name: "التغابن", ayahs: 18 }, { number: 65, name: "الطلاق", ayahs: 12 }, { number: 66, name: "التحريم", ayahs: 12 }, { number: 67, name: "الملك", ayahs: 30 }, { number: 68, name: "القلم", ayahs: 52 }, { number: 69, name: "الحاقة", ayahs: 52 }, { number: 70, name: "المعارج", ayahs: 44 }, { number: 71, name: "نوح", ayahs: 28 }, { number: 72, name: "الجن", ayahs: 28 }, { number: 73, name: "المزمل", ayahs: 20 }, { number: 74, name: "المدثر", ayahs: 56 }, { number: 75, name: "القيامة", ayahs: 40 }, { number: 76, name: "الإنسان", ayahs: 31 }, { number: 77, name: "المرسلات", ayahs: 50 }, { number: 78, name: "النبأ", ayahs: 40 }, { number: 79, name: "النازعات", ayahs: 46 }, { number: 80, name: "عبس", ayahs: 42 }, { number: 81, name: "التكوير", ayahs: 29 }, { number: 82, name: "الانفطار", ayahs: 19 }, { number: 83, name: "المطففين", ayahs: 36 }, { number: 84, name: "الانشقاق", ayahs: 25 }, { number: 85, name: "البروج", ayahs: 22 }, { number: 86, name: "الطارق", ayahs: 17 }, { number: 87, name: "الأعلى", ayahs: 19 }, { number: 88, name: "الغاشية", ayahs: 26 }, { number: 89, name: "الفجر", ayahs: 30 }, { number: 90, name: "البلد", ayahs: 20 }, { number: 91, name: "الشمس", ayahs: 15 }, { number: 92, name: "الليل", ayahs: 21 }, { number: 93, name: "الضحى", ayahs: 11 }, { number: 94, name: "الشرح", ayahs: 8 }, { number: 95, name: "التين", ayahs: 8 }, { number: 96, name: "العلق", ayahs: 19 }, { number: 97, name: "القدر", ayahs: 5 }, { number: 98, name: "البينة", ayahs: 8 }, { number: 99, name: "الزلزلة", ayahs: 8 }, { number: 100, name: "العاديات", ayahs: 11 }, { number: 101, name: "القارعة", ayahs: 11 }, { number: 102, name: "التكاثر", ayahs: 8 }, { number: 103, name: "العصر", ayahs: 3 }, { number: 104, name: "الهمزة", ayahs: 9 }, { number: 105, name: "الفيل", ayahs: 5 }, { number: 106, name: "قريش", ayahs: 4 }, { number: 107, name: "الماعون", ayahs: 7 }, { number: 108, name: "الكوثر", ayahs: 3 }, { number: 109, name: "الكافرون", ayahs: 6 }, { number: 110, name: "النصر", ayahs: 3 }, { number: 111, name: "المسد", ayahs: 5 }, { number: 112, name: "الإخلاص", ayahs: 4 }, { number: 113, name: "الفلق", ayahs: 5 }, { number: 114, name: "الناس", ayahs: 6 }];
        const TOTAL_QURAN_WORDS = 77430;
        const state = { lang: 'ar', theme: 'dark', surah: 1, words: [], wordIndex: 0, isPlaying: false, wpm: 200, fontSize: 'small', enhancedMode: true, loopEnabled: false, loopStart: 1, loopEnd: 7, wordsRead: 0, elapsedSeconds: 0, isFullscreen: false, currentAyah: 1, gazeEnabled: false, faceDetected: false, overlayActive: false, focusStart: 0, rampFactor: 1.0, variableSpeed: true, lastSeen: 0 };

        // ── Supabase Config ──
        const SUPABASE_URL = 'https://olgvhsksnmwevcxrrylu.supabase.co';
        const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sZ3Zoc2tzbm13ZXZjeHJyeWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5ODg4OTYsImV4cCI6MjA4NjU2NDg5Nn0.o11M5WnI_Bk4F0zztyZeGjH-8Br1W7K5fFfSjngAdyU';
        let _sb = null;
        function getSB() { if (!_sb) _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON); return _sb; }
        function getDeviceId() { let id = localStorage.getItem('kalima_device_id'); if (!id) { id = crypto.randomUUID(); localStorage.setItem('kalima_device_id', id); } return id; }
        const i18n = {
            ar: {
                introTitle: 'كلمات',
                introSubtitle: 'اقرأ القرآن كلمة بكلمة بسرعتك',
                start: 'ابدأ',
                selectSurah: 'اختر سورة...',
                page: 'الصفحة',
                ayah: 'الآية',
                word: 'الكلمة',
                surahTime: 'الوقت المتبقي للسورة',
                quranTime: 'لختم القرآن كاملاً',
                play: 'تشغيل', pause: 'إيقاف', nextSurah: 'السورة التالية',
                startAyah: 'بداية الآية', endAyah: 'نهاية الآية',
                skip10: '١٠ كلمات', speed: 'سرعة القراءة', customSpeed: 'سرعة القراءة المخصصة',
                variableSpeed: 'سرعة متغيرة',
                variableSpeedTip: 'نمط القراءة الإيقاعي: تباطؤ تلقائي عند المد وعلامات الوقف',
                loop: 'تكرار الآيات', loopRange: 'نطاق التكرار:', from: 'من الآية', to: 'إلى الآية', focus: 'وضع التركيز', focusDesc: 'تمييز نقطة التركيز البصري', fontSize: 'حجم الخط', wordsRead: 'كلمات قرأتها', timeSpent: 'وقت القراءة', visitors: 'زوار الصفحة', theme: 'تغيير المظهر', fullscreen: 'تركيز', share: 'مشاركة', bookmark: 'حفظ الموضع', lang: 'تغيير اللغة', exit: 'خروج', slower: 'أبطأ', slow: 'بطيء', medium: 'متوسط', normal: 'عادي', fast: 'سريع', faster: 'أسرع', loading: 'جاري التحميل...', bookmarkSaved: 'تم حفظ الموضع!', copied: 'تم نسخ الرابط!', pages: 'المصحف', moreControls: 'المزيد من التحكم', surah: 'السورة', hizb: 'الحزب', juzu: 'الجزء'
            },
            en: {
                introTitle: 'Quran Reader',
                introSubtitle: 'Read word by word at your pace',
                start: 'Start',
                selectSurah: 'Select Surah...',
                page: 'Page',
                ayah: 'Ayah',
                word: 'Word',
                surahTime: 'Time left for Surah',
                quranTime: 'To finish Quran',
                play: 'Play', pause: 'Pause', nextSurah: 'Next Surah',
                startAyah: 'Ayah Start', endAyah: 'Ayah End',
                skip10: '10 words', speed: 'Reading Speed', customSpeed: 'Custom Reading Speed',
                variableSpeed: 'Variable Speed',
                variableSpeedTip: 'Rhythmic mode: Auto-slowing for Madda & Pause markers',
                loop: 'Repeat Verses', loopRange: 'Repeat Range:', from: 'From Ayah', to: 'To Ayah', focus: 'Focus Mode', focusDesc: 'Highlight ORP point', fontSize: 'Font Size', wordsRead: 'Words Read', timeSpent: 'Time Spent', visitors: 'Visitors', theme: 'Toggle Theme', fullscreen: 'Focus', share: 'Share', bookmark: 'Bookmark', lang: 'Language', exit: 'Exit', slower: 'Slower', slow: 'Slow', medium: 'Medium', normal: 'Normal', fast: 'Fast', faster: 'Fastest', loading: 'Loading...', bookmarkSaved: 'Saved!', copied: 'Copied!', pages: 'Mus-haf', moreControls: 'More Controls', surah: 'Surah', hizb: 'Hizb', juzu: 'Juzu'
            }
        };
        function $(id) { return document.getElementById(id); }
        function toArabicNum(n) { return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }
        const SAJDA_VERSES = [
            { s: 7, a: 206 }, { s: 13, a: 15 }, { s: 16, a: 50 }, { s: 17, a: 109 },
            { s: 19, a: 58 }, { s: 22, a: 18 }, { s: 22, a: 77 }, { s: 25, a: 60 },
            { s: 27, a: 26 }, { s: 32, a: 15 }, { s: 38, a: 24 }, { s: 41, a: 38 },
            { s: 53, a: 62 }, { s: 84, a: 21 }, { s: 96, a: 19 }
        ];
