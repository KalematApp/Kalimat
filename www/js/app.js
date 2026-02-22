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

function createParticles() { const bg = $('ambientBg'); bg.innerHTML = ''; for (let i = 0; i < 20; i++) { const p = document.createElement('div'); p.className = 'particle'; p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 15}s;animation-duration:${12 + Math.random() * 8}s`; bg.appendChild(p); } }
function updateUI() { const t = i18n[state.lang]; if ($('introTitle')) $('introTitle').textContent = t.introTitle; if ($('introSubtitle')) $('introSubtitle').textContent = t.introSubtitle; if ($('startBtn')) $('startBtn').textContent = t.start; if ($('pageLabel')) $('pageLabel').textContent = t.page; if ($('ayahLabel')) $('ayahLabel').textContent = t.ayah; if ($('wordLabel')) $('wordLabel').textContent = t.word; if ($('surahLabel')) $('surahLabel').textContent = t.surah; if ($('surahSelectLabel')) $('surahSelectLabel').textContent = state.lang === 'ar' ? 'السورة' : 'Chapter'; if ($('hizbLabel')) $('hizbLabel').textContent = t.hizb; if ($('juzuLabel')) $('juzuLabel').textContent = t.juzu; if ($('pageNumberLabel')) $('pageNumberLabel').textContent = state.lang === 'ar' ? 'رقم الصفحة' : 'Page Number'; if ($('surahTimeLabel')) $('surahTimeLabel').textContent = t.surahTime; if ($('quranTimeLabel')) $('quranTimeLabel').textContent = t.quranTime; updatePlayButton(); if ($('startAyahLabel')) $('startAyahLabel').textContent = t.startAyah; if ($('endAyahLabel')) $('endAyahLabel').textContent = t.endAyah; if ($('skipBackLabel')) $('skipBackLabel').textContent = t.skip10; if ($('skipFwdLabel')) $('skipFwdLabel').textContent = t.skip10; if ($('speedLabel')) $('speedLabel').textContent = t.speed; if ($('variableSpeedLabel')) $('variableSpeedLabel').textContent = t.variableSpeed; if ($('variableSpeedTip')) $('variableSpeedTip').textContent = t.variableSpeedTip; if ($('loopLabel')) $('loopLabel').textContent = t.loop; if ($('loopRangeText')) $('loopRangeText').textContent = t.loopRange; if ($('fromLabel')) $('fromLabel').textContent = t.from; if ($('toLabel')) $('toLabel').textContent = t.to; if ($('enhancedTitle')) $('enhancedTitle').textContent = t.focus; if ($('enhancedDesc')) $('enhancedDesc').textContent = t.focusDesc; if ($('fontSizeLabel')) $('fontSizeLabel').textContent = t.fontSize; if ($('wordsReadLabel')) $('wordsReadLabel').textContent = t.wordsRead; if ($('timeSpentLabel')) $('timeSpentLabel').textContent = t.timeSpent; if ($('visitorsLabel')) $('visitorsLabel').textContent = t.visitors; if ($('themeLabel')) $('themeLabel').textContent = state.lang === 'ar' ? (state.theme === 'dark' ? 'فاتح' : 'داكن') : (state.theme === 'dark' ? 'Light' : 'Dark'); if ($('fsLabel')) $('fsLabel').textContent = t.fullscreen.split(' ')[0]; if ($('shareLabel')) $('shareLabel').textContent = t.share; if ($('bookmarkLabel')) $('bookmarkLabel').textContent = t.bookmark.split(' ')[0]; if ($('pagesLabel')) $('pagesLabel').textContent = t.pages; if ($('langLabel')) $('langLabel').textContent = state.lang === 'ar' ? 'اللغة' : 'Lang'; if ($('exitFocusLabel')) $('exitFocusLabel').textContent = t.exit; if ($('moreControlsLabel')) $('moreControlsLabel').textContent = t.moreControls; if ($('speedSlower')) $('speedSlower').textContent = t.slower; if ($('speedSlow')) $('speedSlow').textContent = t.slow; if ($('speedMedium')) $('speedMedium').textContent = t.medium; if ($('speedHigh')) $('speedHigh').textContent = t.fast; if ($('speedFaster')) $('speedFaster').textContent = t.faster; const speedLabelEl = $('speedLabel'); if (speedLabelEl && speedLabelEl.closest('.advanced-controls')) speedLabelEl.textContent = t.customSpeed || t.speed; document.querySelectorAll('.preset-btn').forEach((btn, i) => btn.textContent = [t.slow, t.normal, t.fast, t.faster][i]); document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = state.lang; if ($('ummahLabel')) $('ummahLabel').textContent = state.lang === 'ar' ? 'الأمة' : 'Ummah'; if ($('ummahLiveLabel')) $('ummahLiveLabel').textContent = state.lang === 'ar' ? 'مباشر' : 'LIVE'; if ($('ummahReadingNow')) $('ummahReadingNow').textContent = state.lang === 'ar' ? 'يقرأون الآن' : 'reading now'; if ($('ummahWordsLabel')) $('ummahWordsLabel').textContent = state.lang === 'ar' ? 'كلمة قرأتها الأمة معاً' : 'words read by the Ummah together'; if ($('ummahKhatmasLabel')) $('ummahKhatmasLabel').textContent = state.lang === 'ar' ? 'ختمة كاملة' : 'full khatmas'; if ($('ummahMyHoursLabel')) $('ummahMyHoursLabel').textContent = state.lang === 'ar' ? 'وقت قراءتك' : 'your time'; if ($('ummahHoursLabel')) $('ummahHoursLabel').textContent = state.lang === 'ar' ? 'ساعات الأمة' : 'ummah hours'; if ($('ummahFeedTitle')) $('ummahFeedTitle').textContent = state.lang === 'ar' ? 'نشاط مباشر' : 'LIVE FEED'; if ($('ummahShareLabel')) $('ummahShareLabel').textContent = state.lang === 'ar' ? 'ادعُ أصدقاءك وشارك الأجر' : 'Invite friends & share the reward'; }
function populateSurahSelect() { const sel = $('surahSelect'); sel.innerHTML = `<option value="">${i18n[state.lang].selectSurah}</option>`; SURAHS.forEach(s => { const o = document.createElement('option'); o.value = s.number; o.textContent = `${s.number}. ${s.name}`; sel.appendChild(o); }); sel.value = state.surah; }

function populatePageSelect() {
    const sel = $('pageSelect');
    if (!sel) return;
    const currentPage = state.words[state.wordIndex]?.page || 1;
    sel.innerHTML = `<option value="">--</option>`;
    for (let i = 1; i <= 604; i++) {
        const o = document.createElement('option');
        o.value = i;
        o.textContent = state.lang === 'ar' ? toArabicNum(i) : i;
        if (i === currentPage) o.selected = true;
        sel.appendChild(o);
    }
}

async function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > 604) return;

    // Always pause playback first - use the same logic as togglePlay
    if (state.isPlaying) {
        state.isPlaying = false;
        if (typeof playTimer !== 'undefined' && playTimer !== null) {
            clearTimeout(playTimer);
            playTimer = null;
        }
        if (typeof statsInterval !== 'undefined' && statsInterval !== null) {
            clearInterval(statsInterval);
            statsInterval = null;
        }
        updatePlayButton();
        // Sync Overlay Icon
        if ($('pauseOverlayIcon')) $('pauseOverlayIcon').style.display = 'flex';
    }

    // First, check if the page is in the current surah
    if (state.words.length) {
        const wordIndex = state.words.findIndex(w => w.page === pageNum);
        if (wordIndex !== -1) {
            state.wordIndex = wordIndex;
            displayWord();
            updateProgress();
            updateTimeEstimates();
            autoSaveBookmark();
            // Always update surah dropdown to reflect current surah
            if ($('surahSelect')) {
                $('surahSelect').value = state.surah;
            }
            // Always update page dropdown to reflect current page
            if ($('pageSelect')) {
                $('pageSelect').value = pageNum;
            }
            return;
        }
    }

    // If page is not in current surah, find which surah contains this page
    // and load that surah, then go to the first word on the page
    try {
        const sb = getSB();
        // Get the first word on this page to find the surah
        const { data, error } = await sb.from('quran_words')
            .select('surah, page_number')
            .eq('page_number', pageNum)
            .order('ayah')
            .order('word_position')
            .limit(1)
            .single();

        if (error || !data) {
            // Fallback: try API to find surah
            try {
                // Try to find surah by checking multiple surahs
                for (let surahNum = 1; surahNum <= 114; surahNum++) {
                    const res = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahNum}?language=en&fields=page_number&per_page=300`);
                    const apiData = await res.json();
                    if (apiData.verses && apiData.verses.some(v => v.page_number === pageNum)) {
                        await loadSurah(surahNum);
                        // Now find the first word on this page
                        const wordIndex = state.words.findIndex(w => w.page === pageNum);
                        if (wordIndex !== -1) {
                            state.wordIndex = wordIndex;
                            displayWord();
                            updateProgress();
                            updateTimeEstimates();
                            autoSaveBookmark();
                            // Always update surah dropdown
                            if ($('surahSelect')) {
                                $('surahSelect').value = state.surah;
                            }
                            // Always update page dropdown
                            if ($('pageSelect')) {
                                $('pageSelect').value = pageNum;
                            }
                        } else {
                            console.error('Word not found on page after loading surah');
                        }
                        return;
                    }
                }
                console.error('Could not find surah containing page:', pageNum);
            } catch (apiErr) {
                console.error('Failed to find surah for page:', apiErr);
            }
            return;
        }

        // Load the surah that contains this page
        await loadSurah(data.surah);

        // Now find the first word on the selected page
        const wordIndex = state.words.findIndex(w => w.page === pageNum);
        if (wordIndex !== -1) {
            state.wordIndex = wordIndex;
            displayWord();
            updateProgress();
            updateTimeEstimates();
            autoSaveBookmark();
            // Always update surah dropdown
            if ($('surahSelect')) {
                $('surahSelect').value = state.surah;
            }
            // Always update page dropdown
            if ($('pageSelect')) {
                $('pageSelect').value = pageNum;
            }
        } else {
            console.error('Word not found on page after loading surah:', pageNum);
        }
    } catch (err) {
        console.error('Error loading page:', err);
    }
}

// Quranic markings to filter out (pause signs, Hizb marks, recitation indicators)
const QURAN_MARKS = /^[ۖۗۘۚۛۙ۞ۜ۩ۣ۠ۢۡۤۥۦ]*$|^[صقطعل]{1,4}ۢ?$|^ج$|^صل[ىي]?$/;
function isQuranMark(word) { return QURAN_MARKS.test(word) || word.length === 1 && word.charCodeAt(0) >= 0x06D6 && word.charCodeAt(0) <= 0x06ED; }
async function loadSurah(num) {
    state.surah = num;
    state.words = [];
    state.wordIndex = 0;
    // Reset surah completion animation
    const playBtn = $('playBtn');
    if (playBtn) playBtn.classList.remove('play-btn-complete');
    // Show loading dots instead of "جاري التحميل"
    $('currentWord').innerHTML = '<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>';
    updateLoopSliders();
    try {
        // Primary: Supabase (self-hosted, fast)
        const sb = getSB();
        const { data, error } = await sb.from('quran_words').select('text_uthmani, ayah, word_position, page_number').eq('surah', num).order('ayah').order('word_position');
        if (error || !data || data.length === 0) throw new Error(error?.message || 'empty');
        data.forEach(w => state.words.push({ text: w.text_uthmani, ayah: w.ayah, page: w.page_number }));
    } catch (sbErr) {
        console.warn('Supabase failed, falling back:', sbErr.message);
        try {
            const res = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${num}?language=en&fields=text_uthmani,page_number&per_page=300`);
            const data = await res.json();
            data.verses.forEach(v => {
                const ayahNum = v.verse_key.split(':')[1];
                v.text_uthmani.split(/\s+/).filter(Boolean).filter(w => !isQuranMark(w)).forEach(w => {
                    state.words.push({ text: w, ayah: parseInt(ayahNum), page: v.page_number });
                });
            });
        } catch {
            try {
                const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}`);
                const data = await res.json();
                data.data.ayahs.forEach(a => a.text.split(/\s+/).filter(Boolean).filter(w => !isQuranMark(w)).forEach(w => state.words.push({ text: w, ayah: a.numberInSurah, page: a.page })));
            } catch {
                state.words = [{ text: 'خطأ', ayah: 1, page: 1 }];
            }
        }
    }
    displayWord();
    updateProgress();
    updateTimeEstimates();
    autoSaveBookmark();
    updatePlayButton();
    populatePageSelect();
    // Update surah dropdown to reflect current surah
    if ($('surahSelect')) $('surahSelect').value = state.surah;
}
// Calculate Juzu from page number (each Juzu is ~20 pages, but varies)
function getJuzuFromPage(page) {
    // Standard Quran has 604 pages, 30 Juzus
    // Juzu boundaries are approximate: Juzu 1 starts at page 1, Juzu 2 at ~22, etc.
    const juzuBoundaries = [1, 22, 42, 62, 82, 102, 121, 142, 162, 182, 201, 222, 242, 262, 282, 302, 322, 341, 361, 381, 401, 421, 441, 461, 481, 501, 521, 541, 561, 582];
    for (let i = juzuBoundaries.length - 1; i >= 0; i--) {
        if (page >= juzuBoundaries[i]) return i + 1;
    }
    return 1;
}
// Calculate Hizb from page number (each Juzu has 2 Hizbs, so 60 Hizbs total)
function getHizbFromPage(page) {
    const juzu = getJuzuFromPage(page);
    // Each Juzu has 2 Hizbs, but we need to determine which half of the Juzu
    // Approximate: first Hizb is roughly first half of Juzu pages
    const juzuBoundaries = [1, 22, 42, 62, 82, 102, 121, 142, 162, 182, 201, 222, 242, 262, 282, 302, 322, 341, 361, 381, 401, 421, 441, 461, 481, 501, 521, 541, 561, 582];
    const nextJuzuPage = juzu < 30 ? juzuBoundaries[juzu] : 604;
    const prevJuzuPage = juzuBoundaries[juzu - 1];
    const midPage = prevJuzuPage + Math.floor((nextJuzuPage - prevJuzuPage) / 2);
    const hizbInJuzu = page >= midPage ? 2 : 1;
    return (juzu - 1) * 2 + hizbInJuzu;
}
function displayWord() { if (!state.words.length) return; const word = state.words[state.wordIndex]; const el = $('currentWord'); el.className = `current-word size-${state.fontSize}`; if (state.enhancedMode) { const text = word.text; el.innerHTML = `<span style="display:inline-block">${text}</span>`; $('focusContainer').classList.remove('focus-lines-hidden'); } else { el.textContent = word.text; $('focusContainer').classList.add('focus-lines-hidden'); } state.currentAyah = word.ayah; const currentPage = word.page; const currentJuzu = getJuzuFromPage(currentPage); const currentHizb = getHizbFromPage(currentPage); const surahName = SURAHS.find(s => s.number === state.surah)?.name || ''; if ($('surahName')) $('surahName').textContent = surahName; if ($('juzuNum')) $('juzuNum').textContent = state.lang === 'ar' ? toArabicNum(currentJuzu) : currentJuzu; if ($('hizbNum')) $('hizbNum').textContent = state.lang === 'ar' ? toArabicNum(currentHizb) : currentHizb; if ($('pageSelect')) $('pageSelect').value = currentPage; if ($('pageNum')) $('pageNum').textContent = state.lang === 'ar' ? toArabicNum(currentPage) : currentPage; if ($('surahSelect')) $('surahSelect').value = state.surah; if ($('ayahNum')) $('ayahNum').textContent = state.lang === 'ar' ? toArabicNum(word.ayah) : word.ayah; const wordsInAyah = state.words.filter(w => w.ayah === word.ayah); const posInAyah = wordsInAyah.indexOf(word) + 1; if ($('wordNum')) { const wordNumEl = $('wordNum'); wordNumEl.style.direction = 'ltr'; wordNumEl.style.unicodeBidi = 'embed'; wordNumEl.textContent = state.lang === 'ar' ? `${toArabicNum(posInAyah)}/${toArabicNum(wordsInAyah.length)}` : `${posInAyah}/${wordsInAyah.length}`; } }
function getWordWeight(text) {
    if (!state.variableSpeed) return 1.0;
    let weight = 0.8 + (text.length * 0.04);
    // Mad Detect: Madda (\u0653) or Superscript Alef (\u0670)
    if (/[\u0653\u0670]/.test(text)) weight += 0.25;
    // Pause Detect: Superscript markers (\u06D6 - \u06ED)
    if (/[\u06D6-\u06ED]/.test(text)) weight += 0.35;
    return weight;
}
function updateProgress() { if (!state.words.length) return; const pct = (state.wordIndex / (state.words.length - 1)) * 100; $('progressBar').style.width = `${pct}%`; const thumb = $('progressThumb'); const currentAyah = state.words[state.wordIndex]?.ayah || 1; if (state.lang === 'ar') { thumb.style.left = 'auto'; thumb.style.right = `calc(${pct}% - 16px)`; } else { thumb.style.right = 'auto'; thumb.style.left = `calc(${pct}% - 16px)`; } thumb.textContent = state.lang === 'ar' ? toArabicNum(currentAyah) : currentAyah; }
function updateTimeEstimates() {
    if (!state.words.length) return;

    // Precise Surah Time: Sum actual weighted durations
    let remainingMs = 0;
    const baseDuration = 60000 / state.wpm; // Duration of 1 weight unit
    for (let i = state.wordIndex; i < state.words.length; i++) {
        remainingMs += baseDuration * getWordWeight(state.words[i].text);
    }
    const surahMins = Math.ceil(remainingMs / 60000);

    $('surahTime').textContent = surahMins < 60
        ? `${surahMins} ${state.lang === 'ar' ? 'دقيقة' : 'min'}`
        : `${Math.floor(surahMins / 60)}:${String(surahMins % 60).padStart(2, '0')}`;

    // Quran Time: Heuristic (Iterating all 77k words is too slow)
    // If Variable Speed is ON, assume ~15% average increase in time
    const globalMultiplier = state.variableSpeed ? 1.15 : 1.0;
    const quranMins = Math.ceil((TOTAL_QURAN_WORDS / state.wpm) * globalMultiplier);
    const quranHrs = Math.floor(quranMins / 60);

    // Proper Arabic pluralization: ساعات for 1-9 (مفرد أقل من عشرة), ساعة for 10+
    const hoursText = state.lang === 'ar'
        ? (quranHrs >= 1 && quranHrs <= 9 ? 'ساعات' : 'ساعة')
        : (quranHrs === 1 ? 'hr' : 'hrs');
    $('quranTime').textContent = `${quranHrs} ${hoursText}`;
}
function updateLoopSliders() { const maxAyah = SURAHS.find(s => s.number === state.surah)?.ayahs || 7; $('loopStartSlider').max = maxAyah; $('loopEndSlider').max = maxAyah; $('loopStartInput').max = maxAyah; $('loopEndInput').max = maxAyah; state.loopEnd = Math.min(state.loopEnd, maxAyah); $('loopStartSlider').value = state.loopStart; $('loopEndSlider').value = state.loopEnd; $('loopStartInput').value = state.loopStart; $('loopEndInput').value = state.loopEnd; updateLoopDisplay(); }
function updateLoopDisplay() { $('loopRangeValue').textContent = state.lang === 'ar' ? `${toArabicNum(state.loopStart)} - ${toArabicNum(state.loopEnd)}` : `${state.loopStart} - ${state.loopEnd}`; }
function syncLoopFromSlider(type) { if (type === 'start') { state.loopStart = parseInt($('loopStartSlider').value); $('loopStartInput').value = state.loopStart; if (state.loopStart > state.loopEnd) { state.loopEnd = state.loopStart; $('loopEndSlider').value = state.loopEnd; $('loopEndInput').value = state.loopEnd; } } else { state.loopEnd = parseInt($('loopEndSlider').value); $('loopEndInput').value = state.loopEnd; if (state.loopEnd < state.loopStart) { state.loopStart = state.loopEnd; $('loopStartSlider').value = state.loopStart; $('loopStartInput').value = state.loopStart; } } updateLoopDisplay(); if (state.loopEnabled && type === 'start') seekToAyah(state.loopStart); }
function syncLoopFromInput(type) { const max = SURAHS.find(s => s.number === state.surah)?.ayahs || 7; if (type === 'start') { state.loopStart = Math.max(1, Math.min(max, parseInt($('loopStartInput').value) || 1)); $('loopStartSlider').value = state.loopStart; $('loopStartInput').value = state.loopStart; if (state.loopStart > state.loopEnd) { state.loopEnd = state.loopStart; $('loopEndSlider').value = state.loopEnd; $('loopEndInput').value = state.loopEnd; } } else { state.loopEnd = Math.max(1, Math.min(max, parseInt($('loopEndInput').value) || max)); $('loopEndSlider').value = state.loopEnd; $('loopEndInput').value = state.loopEnd; if (state.loopEnd < state.loopStart) { state.loopStart = state.loopEnd; $('loopStartSlider').value = state.loopStart; $('loopStartInput').value = state.loopStart; } } updateLoopDisplay(); if (state.loopEnabled && type === 'start') seekToAyah(state.loopStart); }
function seekToAyah(ayahNum) { const idx = state.words.findIndex(w => w.ayah === ayahNum); if (idx !== -1) { state.wordIndex = idx; displayWord(); updateProgress(); } }
let playTimer = null;
let statsInterval = null;

// Gaze Logic
let faceMesh = null;
let camera = null;

async function initGaze() {
    if (faceMesh) return;
    $('gazeStatus').textContent = 'جاري التحميل...';

    // Check camera API availability
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('getUserMedia not available');
        $('gazeStatus').textContent = state.lang === 'ar' ? 'الكاميرا غير متاحة على هذا الجهاز' : 'Camera not available on this device';
        state.gazeEnabled = false;
        $('gazeToggle').checked = false;
        return;
    }

    try {
        // Request camera permission explicitly before initializing MediaPipe
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 320, height: 240 } });
        // Stop the stream — MediaPipe Camera will create its own
        stream.getTracks().forEach(t => t.stop());

        faceMesh = new FaceMesh({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }
        });
        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        faceMesh.onResults(onGazeResults);

        // Setup Canvas
        const c = $('gazeCanvas');
        ctx = c.getContext('2d');

        const videoElement = $('gazeVideo');
        camera = new Camera(videoElement, {
            onFrame: async () => {
                if (state.gazeEnabled) await faceMesh.send({ image: videoElement });
            },
            width: 320,
            height: 240
        });
        await camera.start();
        $('gazeStatus').textContent = state.lang === 'ar' ? 'الكاميرا تعمل' : 'Camera active';
    } catch (e) {
        console.error('Gaze init error:', e);
        const denied = e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError';
        if (denied) {
            $('gazeStatus').textContent = state.lang === 'ar' ? 'تم رفض إذن الكاميرا' : 'Camera permission denied';
        } else {
            $('gazeStatus').textContent = state.lang === 'ar' ? 'فشل الوصول للكاميرا' : 'Camera access failed';
        }
        state.gazeEnabled = false;
        $('gazeToggle').checked = false;
    }
}

function onGazeResults(results) {
    if (!ctx) return;
    ctx.clearRect(0, 0, 120, 30);

    // Draw Eyes Base (Relative to canvas size)
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    const eyeY = ch * 0.5;
    const eyeX1 = cw * 0.3;
    const eyeX2 = cw * 0.7;
    const eyeRx = cw * 0.15;
    const eyeRy = ch * 0.35;

    function drawEyeBase(x, y) {
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.ellipse(x, y, eyeRx, eyeRy, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    drawEyeBase(eyeX1, eyeY);
    drawEyeBase(eyeX2, eyeY);

    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        const landmarks = results.multiFaceLandmarks[0];
        state.faceDetected = true;

        // 1. Iris Gaze Sensing (High Precision)
        // Left Iris: 468, Left Corners: 33(outer), 133(inner)
        // Right Iris: 473, Right Corners: 362(inner), 263(outer)
        const irisL = landmarks[468];
        const irisR = landmarks[473];
        const eyeOuterL = landmarks[33];
        const eyeInnerL = landmarks[133];
        const eyeInnerR = landmarks[362];
        const eyeOuterR = landmarks[263];

        // Define vertical landmarks HERE (Top level) so EAR can use them
        const eyeTopL = landmarks[159];
        const eyeBotL = landmarks[145];
        const eyeTopR = landmarks[386];
        const eyeBotR = landmarks[374];

        let gazeDeviation = 0;
        let hasEyes = false;
        let vertDeviation = 0;

        if (irisL && irisR && eyeOuterL && eyeOuterR) {
            hasEyes = true;
            // Horizontal Gaze
            const midEyeX = (eyeInnerL.x + eyeOuterL.x + eyeInnerR.x + eyeOuterR.x) / 4;
            const midIrisX = (irisL.x + irisR.x) / 2;
            const eyeWidthTotal = Math.abs(eyeOuterL.x - eyeOuterR.x);
            gazeDeviation = (midIrisX - midEyeX) / (eyeWidthTotal * 0.10 || 0.01);

            // Vertical Gaze
            const eyeHeightL = Math.abs(eyeTopL.y - eyeBotL.y);
            const midEyeY = (eyeTopL.y + eyeBotL.y) / 2;
            vertDeviation = (irisL.y - midEyeY) / (eyeHeightL * 0.3 || 0.01);

            // Final Gaze Magnitude (2D Vector)
            gazeDeviation = Math.sqrt(gazeDeviation * gazeDeviation + vertDeviation * vertDeviation);
            // Preserve sign for horizontal pupil drawing
            const pupilSign = (midIrisX - midEyeX) > 0 ? 1 : -1;
            gazeDeviation = gazeDeviation * pupilSign;
        }

        // 2. Face Fallback (If eyes are squinted/not detected well)
        const nose = landmarks[1];
        const leftPoint = landmarks[33];
        const rightPoint = landmarks[263];
        const faceWidth = Math.abs(leftPoint.x - rightPoint.x);
        const faceMidX = (leftPoint.x + rightPoint.x) / 2;
        const faceRatio = (nose.x - faceMidX) / (faceWidth || 0.01);

        // Combine: Use Eye Gaze Primarily (85% weight), fallback to Face Ratio if eyes noisy
        const rawRatio = hasEyes ? (gazeDeviation * 0.85 + faceRatio * 0.15) : faceRatio;

        // EMA Smoothing (Exponential Moving Average) to kill jitter
        if (typeof state.gazeSmoothed === 'undefined') state.gazeSmoothed = rawRatio;
        state.gazeSmoothed = state.gazeSmoothed * 0.7 + rawRatio * 0.3;

        const finalRatio = state.gazeSmoothed;

        // --- BLINK DETECTION (Eye Aspect Ratio - EAR) ---
        // Left Eye Width/Height
        const ewL = Math.abs(eyeOuterL.x - eyeInnerL.x);
        const ehL = Math.abs(eyeTopL.y - eyeBotL.y);
        const earL = ehL / (ewL || 0.1);

        // Right Eye (Indices: Top=386, Bot=374)
        // eyeTopR and eyeBotR are now defined above
        const ewR = Math.abs(eyeOuterR.x - eyeInnerR.x);
        const ehR = eyeTopR && eyeBotR ? Math.abs(eyeTopR.y - eyeBotR.y) : ehL;
        const earR = ehR / (ewR || 0.1);

        const avgEar = (earL + earR) / 2;

        // Debug EAR (Temporary)
        // ctx.font = "12px Arial";
        // ctx.fillStyle = "red";
        // ctx.fillText(avgEar.toFixed(3), 10, 20);

        // Threshold decreased to 0.15 to avoid false positives on narrow eyes
        let isBlinking = avgEar < 0.15;

        // Fail-Safe: If "blinking" for > 800ms, assume eyes are just squinty and FORCE it false
        if (isBlinking) {
            if (!state.blinkStart) state.blinkStart = Date.now();
            if (Date.now() - state.blinkStart > 800) {
                isBlinking = false; // Override: User is likely just squinting/looking down
            }
        } else {
            state.blinkStart = 0;
        }

        // If blinking, FORCE "Looking at Screen" (ignore gaze deviation)
        const isLookingAway = isBlinking ? false : (Math.abs(finalRatio) > 0.32);

        // Draw Pupils (Relative)
        const pupilOffset = Math.max(-eyeRx * 0.8, Math.min(eyeRx * 0.8, finalRatio * cw * 0.2));
        const pupilSize = ch * 0.2;

        function drawPupil(x, y) {
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(x + pupilOffset, y, pupilSize, 0, Math.PI * 2);
            ctx.fill();
        }
        drawPupil(eyeX1, eyeY);
        drawPupil(eyeX2, eyeY);

        if (isLookingAway) {
            // Anti-Jitter Buffer: Only pause if looked away for > 150ms
            // This filters out signal noise while remaining perceptibly "instant"
            if (state.lastSeen && (Date.now() - state.lastSeen > 150)) {
                showOverlay();
                state.focusStart = 0;
                state.rampFactor = Math.max(0.5, (state.wpm - 150) / state.wpm);
            }
        } else {
            state.lastSeen = Date.now();
            if (state.overlayActive) {
                if (state.focusStart === 0) state.focusStart = Date.now();
                const elapsed = Date.now() - state.focusStart;
                const progress = Math.min(1, elapsed / 1500);

                // Update Progress Ring
                const ring = $('focusFillRing');
                if (ring) {
                    const offset = 377 * (1 - progress);
                    ring.style.strokeDashoffset = offset;
                    if (progress > 0.1) $('focusRingContainer').classList.add('focus-active');
                }

                if (elapsed > 1500) {
                    hideOverlay();
                }
            } else {
                state.focusStart = 0;
            }
        }

        if (!state.overlayActive) {
            $('gazeStatus').textContent = state.isPlaying ? 'نشط' : 'توقف';
        } else {
            $('gazeStatus').textContent = 'مؤقت';
        }

    } else {
        // No face detected - wait 450ms before pausing (for deep blink/momentary loss)
        if (state.faceDetected && (Date.now() - state.lastSeen > 450)) {
            state.faceDetected = false;
            showOverlay();
            state.focusStart = 0;
        } else if (!state.faceDetected) {
            showOverlay(); // Already lost, keep overlaying
        }
    }
}

function showOverlay() {
    if (state.overlayActive) return;
    state.overlayActive = true;
    $('pauseOverlay').style.display = 'flex';
    setTimeout(() => $('pauseOverlay').style.opacity = '1', 10);

    $('overlayAyah').textContent = `${i18n[state.lang].ayah} ${state.lang === 'ar' ? toArabicNum(state.currentAyah) : state.currentAyah}`;
    $('overlayWords').textContent = state.lang === 'ar' ? toArabicNum(state.wordsRead) : state.wordsRead;
    $('overlayTime').textContent = $('timeSpent').textContent;

    // Reset Focus Ring
    const ring = $('focusFillRing');
    if (ring) ring.style.strokeDashoffset = '377';
    $('focusRingContainer').classList.remove('focus-active');
}

function showToast(text) {
    let toast = $('toastNotify');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotify';
        toast.className = 'toast-notify';
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function hideOverlay() {
    if (!state.overlayActive) return;
    state.overlayActive = false;
    state.rampFactor = Math.max(0.5, (state.wpm - 150) / state.wpm);
    $('pauseOverlay').style.opacity = '0';
    setTimeout(() => {
        if (!state.overlayActive) $('pauseOverlay').style.display = 'none';
    }, 300);
}

function gameLoop() {
    if (!state.isPlaying) return;

    let effectiveWpm = state.wpm;

    if (state.gazeEnabled) {
        if (state.overlayActive) {
            effectiveWpm = 0;
        } else {
            if (state.rampFactor < 1.0) {
                state.rampFactor += 0.05;
                if (state.rampFactor > 1.0) state.rampFactor = 1.0;
            }
            effectiveWpm = state.wpm * state.rampFactor;
        }
    }

    if (effectiveWpm < 10) {
        playTimer = setTimeout(gameLoop, 200);
        return;
    }

    state.wordIndex++;
    state.wordsRead++;
    $('wordsRead').textContent = state.lang === 'ar' ? toArabicNum(state.wordsRead) : state.wordsRead;

    if (state.loopEnabled) {
        const currentWord = state.words[state.wordIndex];
        if (!currentWord || currentWord.ayah > state.loopEnd) {
            seekToAyah(state.loopStart);
            playTimer = setTimeout(gameLoop, 60000 / effectiveWpm);
            return;
        }
    }

    if (state.wordIndex >= state.words.length) {
        state.wordIndex = state.words.length - 1;
        togglePlay();
        return;
    }

    displayWord();
    updateProgress();
    updateTimeEstimates();
    autoSaveBookmark();

    // Sajda Check
    const currIdx = state.wordIndex;
    const nextWord = state.words[currIdx + 1];
    const currentWord = state.words[currIdx];

    // If it's the end of an ayah, check if it was a Sajda ayah
    if (!nextWord || nextWord.ayah !== currentWord.ayah) {
        const isSajda = SAJDA_VERSES.some(v => v.s === state.surah && v.a === currentWord.ayah);
        if (isSajda) {
            togglePlay();
            showSajda();
            return;
        }
    }

    const duration = (60000 / effectiveWpm) * getWordWeight(state.words[state.wordIndex].text);
    playTimer = setTimeout(gameLoop, duration);
}

let _sajdaAlternator = 0;
function showSajda() {
    const el = $('sajdaNotif');
    if (el) {
        const d1 = $('sajdaDua1'), d2 = $('sajdaDua2');
        if (d1 && d2) {
            d1.style.display = (_sajdaAlternator % 2 === 0) ? 'block' : 'none';
            d2.style.display = (_sajdaAlternator % 2 === 1) ? 'block' : 'none';
            _sajdaAlternator++;
        }
        el.style.display = 'flex';
        setTimeout(() => el.classList.add('show'), 10);
    }
}
function hideSajda() {
    const el = $('sajdaNotif');
    if (el) {
        el.classList.remove('show');
        setTimeout(() => { if (!el.classList.contains('show')) el.style.display = 'none'; }, 400);
    }
}

function updatePlayButton() {
    const isFinished = state.words.length > 0 && state.wordIndex >= state.words.length - 1 && !state.isPlaying;
    const currentSurahIndex = SURAHS.findIndex(s => s.number === state.surah);
    const hasNextSurah = currentSurahIndex !== -1 && currentSurahIndex < SURAHS.length - 1;
    const showNextSurah = isFinished && hasNextSurah;
    const playBtn = $('playBtn');
    const playbackControls = document.querySelector('.playback-controls');

    if (state.isPlaying) {
        // Pause icon - dim labels
        $('playIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        $('playLabel').textContent = i18n[state.lang].pause;
        if (playBtn) playBtn.classList.remove('play-btn-complete');
        if (playbackControls) playbackControls.classList.add('playback-playing');
    } else if (showNextSurah) {
        // Next surah icon with green completion animation (RTL: flipped arrow pointing left)
        $('playIcon').innerHTML = '<path d="M16 5v14l-7-7 7-7zm-8 0v14H6V5h2z"/>';
        $('playLabel').textContent = i18n[state.lang].nextSurah;
        if (playBtn) playBtn.classList.add('play-btn-complete');
        if (playbackControls) playbackControls.classList.remove('playback-playing');
    } else {
        // Play icon
        $('playIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
        $('playLabel').textContent = i18n[state.lang].play;
        if (playBtn) playBtn.classList.remove('play-btn-complete');
        if (playbackControls) playbackControls.classList.remove('playback-playing');
    }
}

async function togglePlay() {
    // Check if we've finished reading the current surah and user wants to play again
    if (!state.isPlaying && state.words.length > 0 && state.wordIndex >= state.words.length - 1) {
        // Find the next surah
        const currentSurahIndex = SURAHS.findIndex(s => s.number === state.surah);
        if (currentSurahIndex !== -1 && currentSurahIndex < SURAHS.length - 1) {
            const nextSurah = SURAHS[currentSurahIndex + 1];
            // Reset completion animation before loading next surah
            const playBtn = $('playBtn');
            if (playBtn) playBtn.classList.remove('play-btn-complete');
            // Load the next surah
            await loadSurah(nextSurah.number);
            // Update the surah selector
            $('surahSelect').value = nextSurah.number;
        }
    }

    state.isPlaying = !state.isPlaying;
    updatePlayButton();

    // Sync Overlay Icon
    const displayStyle = state.isPlaying ? 'none' : 'flex';
    if ($('pauseOverlayIcon')) $('pauseOverlayIcon').style.display = displayStyle;
    if (state.isPlaying) {
        statsInterval = setInterval(() => {
            state.elapsedSeconds++;
            const mins = Math.floor(state.elapsedSeconds / 60);
            $('timeSpent').textContent = `${mins}:${String(state.elapsedSeconds % 60).padStart(2, '0')}`;
            updateCollectiveTime();
        }, 1000);

        // If at the start of a surah (wordIndex 0), ensure first word gets full duration
        if (state.wordIndex === 0 && state.words.length > 0) {
            // Refresh display to ensure word is visible
            displayWord();
            updateProgress();
            updateTimeEstimates();
            autoSaveBookmark();

            // Calculate effective WPM
            let effectiveWpm = state.wpm;
            if (state.gazeEnabled && !state.overlayActive) {
                effectiveWpm = state.wpm * state.rampFactor;
            }

            // Small delay to ensure display is rendered, then start timer for first word
            // After timer expires, gameLoop() will increment to index 1 and continue
            setTimeout(() => {
                if (!state.isPlaying) return; // Check if still playing
                if (effectiveWpm < 10) {
                    playTimer = setTimeout(gameLoop, 200);
                } else {
                    const duration = (60000 / effectiveWpm) * getWordWeight(state.words[0].text);
                    playTimer = setTimeout(gameLoop, duration);
                }
            }, 50); // Small delay to ensure rendering
        } else {
            // Start recursive loop
            gameLoop();
        }

    } else {
        clearTimeout(playTimer);
        playTimer = null;
        clearInterval(statsInterval);
        statsInterval = null;
    }
}

// Wire up Gaze Toggle
// Wire up Gaze Toggle & Modals
$('gazeToggle').addEventListener('click', (e) => {
    if (e.target.checked) {
        e.preventDefault();
        $('privacyModal').style.display = 'flex';
    } else {
        state.gazeEnabled = false;
        $('gazeStatus').textContent = 'مغلق';
    }
});

$('privacyConfirmBtn').addEventListener('click', async () => {
    $('privacyModal').style.display = 'none';
    $('gazeToggle').checked = true;
    state.gazeEnabled = true;
    await initGaze();
});

$('privacyCancelBtn').addEventListener('click', () => {
    $('privacyModal').style.display = 'none';
});

// Resume Modal Listeners
$('resumeLastBtn').addEventListener('click', () => {
    $('resumeModal').style.display = 'none';
    restoreBookmark();
    showScreen('appScreen');
});
$('resumeAyahBtn').addEventListener('click', () => {
    $('resumeModal').style.display = 'none';
    const saved = JSON.parse(localStorage.getItem('quranReaderBookmark'));
    if (saved) {
        $('surahSelect').value = saved.surah;
        loadSurah(saved.surah).then(() => {
            const w = state.words[saved.wordIndex];
            if (w) seekToAyah(w.ayah);
            showScreen('appScreen');
        });
    }
});
$('resumeSurahBtn').addEventListener('click', () => {
    $('resumeModal').style.display = 'none';
    const saved = JSON.parse(localStorage.getItem('quranReaderBookmark'));
    if (saved) {
        $('surahSelect').value = saved.surah;
        loadSurah(saved.surah).then(() => {
            showScreen('appScreen');
        });
    }
});
function autoSaveBookmark() { localStorage.setItem('quranReaderBookmark', JSON.stringify({ surah: state.surah, wordIndex: state.wordIndex, wordsRead: state.wordsRead })); try { getSB().rpc('upsert_session', { p_device_id: getDeviceId(), p_surah: state.surah, p_word_index: state.wordIndex, p_words_read: state.wordsRead, p_total_seconds: state.elapsedSeconds, p_lang: state.lang, p_theme: state.theme, p_font_size: state.fontSize, p_wpm: state.wpm, p_enhanced_mode: state.enhancedMode }); } catch (e) { console.warn('Session sync:', e.message); } }
async function restoreBookmark() {
    let surah, wordIndex, wordsRead;
    try {
        const sb = getSB();
        const { data } = await sb.from('user_sessions').select('*').eq('device_id', getDeviceId()).single();
        if (data) { surah = data.surah; wordIndex = data.word_index; wordsRead = data.words_read; state.elapsedSeconds = data.total_seconds || 0; }
    } catch (e) { console.warn('Supabase restore:', e.message); }
    if (!surah) {
        const saved = localStorage.getItem('quranReaderBookmark');
        if (saved) { const p = JSON.parse(saved); surah = p.surah; wordIndex = p.wordIndex; wordsRead = p.wordsRead; }
    }
    if (surah) {
        state.wordsRead = wordsRead || 0;
        $('wordsRead').textContent = state.lang === 'ar' ? toArabicNum(state.wordsRead) : state.wordsRead;
        if (surah !== state.surah) { $('surahSelect').value = surah; await loadSurah(surah); }
        state.wordIndex = wordIndex || 0; displayWord(); updateProgress();
    }
}
function saveManualBookmark() { autoSaveBookmark(); showToast(i18n[state.lang].bookmarkSaved); }
function showToast(msg) { const toast = document.createElement('div'); toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--bg-card-solid);color:var(--accent-1);padding:12px 24px;border-radius:25px;border:1px solid var(--border-accent);z-index:1001;animation:fadeIn 0.3s ease'; toast.textContent = msg; document.body.appendChild(toast); setTimeout(() => toast.remove(), 2000); }
function shareApp() { const surahName = SURAHS.find(s => s.number === state.surah)?.name || ''; const url = window.location.href; const text = state.lang === 'ar' ? `أقرأ سورة ${surahName} - كلمات` : `Reading Surah ${surahName}`; if (navigator.share) { navigator.share({ title: 'كلمات', text, url }); } else { navigator.clipboard.writeText(url); showToast(i18n[state.lang].copied); } }
// ── Supabase Global Stats ──
function formatTime(totalSecs) {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    return `${state.lang === 'ar' ? toArabicNum(hrs) : hrs} ${state.lang === 'ar' ? 'س' : 'h'} ${state.lang === 'ar' ? toArabicNum(mins) : mins} ${state.lang === 'ar' ? 'د' : 'm'}`;
}

async function initVisitorCounter() {
    try {
        const sb = getSB();
        const { data, error } = await sb.rpc('increment_visitors');
        if (error) throw error;
        $('visitorsCount').textContent = state.lang === 'ar' ? toArabicNum(data) : data;
    } catch (e) {
        console.warn('Visitor counter:', e.message);
        let visitors = parseInt(localStorage.getItem('quranReaderVisitors') || '0') + 1;
        localStorage.setItem('quranReaderVisitors', visitors);
        $('visitorsCount').textContent = state.lang === 'ar' ? toArabicNum(visitors) : visitors;
    }
}

async function updateCollectiveTime() {
    let localTotal = parseInt(localStorage.getItem('quranReaderTotalSeconds') || '0') + 1;
    localStorage.setItem('quranReaderTotalSeconds', localTotal);
    if (state.elapsedSeconds > 0 && state.elapsedSeconds % 60 === 0) {
        try {
            const sb = getSB();
            const { data, error } = await sb.rpc('add_reading_time', { seconds_to_add: 60 });
            if (!error && data) { $('collectiveTime').textContent = formatTime(data); return; }
        } catch (e) { /* fallback below */ }
    }
    $('collectiveTime').textContent = formatTime(localTotal);
}

async function loadCollectiveTime() {
    try {
        const sb = getSB();
        const { data, error } = await sb.from('global_stats').select('total_seconds, total_visitors').eq('id', 1).single();
        if (!error && data) { $('collectiveTime').textContent = formatTime(data.total_seconds); return; }
    } catch (e) { /* fallback below */ }
    let localTotal = parseInt(localStorage.getItem('quranReaderTotalSeconds') || '0');
    $('collectiveTime').textContent = formatTime(localTotal);
}
async function getGlobalStats() {
    try {
        const sb = getSB();
        const { data, error } = await sb.from('global_stats').select('*').eq('id', 1).limit(1);
        if (error) console.log('[Ummah]', 'getGlobalStats query error: ' + JSON.stringify(error));
        if (!error && data && data.length > 0) return data[0];
    } catch (e) { console.log('[Ummah]', 'getGlobalStats exception: ' + e.message); }
    return { total_visitors: parseInt(localStorage.getItem('quranReaderVisitors') || '0'), total_seconds: parseInt(localStorage.getItem('quranReaderTotalSeconds') || '0'), total_khatmas: 0 };
}
function toggleFocusMode() { state.isFullscreen = !state.isFullscreen; document.body.classList.toggle('focus-mode', state.isFullscreen); }
function showScreen(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); }
function toggleMoreControls() {
    const advancedControls = $('advancedControls');
    const moreControlsBtn = $('moreControlsBtn');
    const isVisible = advancedControls.style.display !== 'none';
    advancedControls.style.display = isVisible ? 'none' : 'block';
    moreControlsBtn.classList.toggle('expanded', !isVisible);
    if (!isVisible) {
        setTimeout(() => advancedControls.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
}
let isDragging = false; $('progressContainer').addEventListener('mousedown', e => { isDragging = true; handleProgressDrag(e); }); $('progressContainer').addEventListener('touchstart', e => { isDragging = true; handleProgressDrag(e.touches[0]); }, { passive: true }); document.addEventListener('mousemove', e => { if (isDragging) handleProgressDrag(e); }); document.addEventListener('touchmove', e => { if (isDragging) handleProgressDrag(e.touches[0]); }, { passive: true }); document.addEventListener('mouseup', () => isDragging = false); document.addEventListener('touchend', () => isDragging = false);
function handleProgressDrag(e) { if (state._loading || !state.words.length) return; const rect = $('progressContainer').getBoundingClientRect(); let pct = (e.clientX - rect.left) / rect.width; if (state.lang === 'ar') pct = 1 - pct; pct = Math.max(0, Math.min(1, pct)); state.wordIndex = Math.floor(pct * (state.words.length - 1)); displayWord(); updateProgress(); }
document.querySelectorAll('.lang-btn').forEach(btn => { btn.addEventListener('click', async () => { state.lang = btn.dataset.lang; updateUI(); populateSurahSelect(); const hasBookmark = localStorage.getItem('quranReaderBookmark'); if (hasBookmark) { showScreen('appScreen'); await restoreBookmark(); if (!state.words.length) loadSurah(1); } else { updateOnboarding(); showScreen('onboardScreen'); } }); });
function updateOnboarding() {
    const lang = state.lang;
    document.getElementById('onbTitle').textContent = lang === 'ar' ? 'كلمات' : 'Kalimat';
    document.getElementById('onbSub').textContent = lang === 'ar' ? 'رفيقك في تلاوة القرآن الكريم' : 'Your companion in reciting the Noble Quran';
    document.getElementById('onbStartBtn').textContent = lang === 'ar' ? 'ابدأ القراءة' : 'Start Reading';
    document.getElementById('onbTip').textContent = lang === 'ar' ? 'اضغط على الشاشة للتشغيل والإيقاف — انقر مرتين على الأطراف للتنقل' : 'Tap the screen to play/pause — double-tap edges to skip';
    document.querySelectorAll('.onb-feat-title').forEach(el => { el.textContent = el.getAttribute('data-' + lang); });
    document.querySelectorAll('.onb-feat-desc').forEach(el => { el.textContent = el.getAttribute('data-' + lang); });
    document.getElementById('onboardScreen').dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.onb-feature').forEach(f => f.style.textAlign = lang === 'ar' ? 'right' : 'left');
}
document.getElementById('onbStartBtn').addEventListener('click', async () => { showScreen('appScreen'); await restoreBookmark(); if (!state.words.length) loadSurah(1); });
$('surahSelect').addEventListener('change', async e => {
    if (e.target.value) {
        // Pause playback if currently playing
        if (state.isPlaying) {
            state.isPlaying = false;
            clearTimeout(playTimer);
            playTimer = null;
            clearInterval(statsInterval);
            statsInterval = null;
            updatePlayButton();
        }
        await loadSurah(parseInt(e.target.value));
    }
});
$('pageSelect').addEventListener('change', async e => { if (e.target.value) await goToPage(parseInt(e.target.value)); });
$('playBtn').addEventListener('click', togglePlay);
// Logic Corrected: skipBack decreases index (Previous), skipFwd increases index (Next)
$('skipBackBtn').addEventListener('click', () => { state.wordIndex = Math.max(0, state.wordIndex - 10); displayWord(); updateProgress(); });
$('skipFwdBtn').addEventListener('click', () => { state.wordIndex = Math.min(state.words.length - 1, state.wordIndex + 10); displayWord(); updateProgress(); });
// Double-click on startAyah goes to previous ayah
let startAyahLastClick = 0;
$('startAyahBtn').addEventListener('click', () => { const now = Date.now(); if (now - startAyahLastClick < 500 && state.currentAyah > 1) { seekToAyah(state.currentAyah - 1); } else { seekToAyah(state.currentAyah); } startAyahLastClick = now; });
$('endAyahBtn').addEventListener('click', () => { const nextAyah = state.words.find((w, i) => i > state.wordIndex && w.ayah !== state.currentAyah); if (nextAyah) seekToAyah(nextAyah.ayah); else { state.wordIndex = state.words.length - 1; displayWord(); updateProgress(); } });
$('themeBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('quranReaderTheme', state.theme);
    $('themeLabel').textContent = state.lang === 'ar' ? (state.theme === 'dark' ? 'فاتح' : 'داكن') : (state.theme === 'dark' ? 'Light' : 'Dark');
    if (typeof updateUmmahGlobeTheme === 'function') updateUmmahGlobeTheme();
});
$('focusModeBtn').addEventListener('click', toggleFocusMode);
$('focusExit').addEventListener('click', toggleFocusMode);
// shareBtn removed from UI — sharing available from Ummah screen
// bookmarkBtn removed from UI - saving is automatic
$('langSwitchBtn').addEventListener('click', () => { state.lang = state.lang === 'ar' ? 'en' : 'ar'; updateUI(); populateSurahSelect(); displayWord(); });
$('enhancedToggle').addEventListener('change', e => { state.enhancedMode = e.target.checked; displayWord(); });
$('variableSpeedToggle').addEventListener('change', e => {
    state.variableSpeed = e.target.checked;
    if (state.variableSpeed) showToast(i18n[state.lang].variableSpeedTip);
});

$('speedSlider').addEventListener('input', e => { state.wpm = parseInt(e.target.value); updateSpeedDisplay(); });
$('decreaseSpeedBtn').addEventListener('click', () => { state.wpm = Math.max(50, state.wpm - 50); updateSpeedDisplay(); });
$('increaseSpeedBtn').addEventListener('click', () => { state.wpm = Math.min(600, state.wpm + 50); updateSpeedDisplay(); });
function updateSpeedDisplay() {
    if ($('wpmValue')) $('wpmValue').textContent = state.wpm;
    if ($('speedSlider')) $('speedSlider').value = state.wpm;
    updateTimeEstimates();
    localStorage.setItem('kalima_wpm', state.wpm);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.wpm) === state.wpm));
    // Update simplified speed buttons - find closest match
    document.querySelectorAll('.speed-btn-simple').forEach(b => {
        b.classList.remove('active');
    });
    const speedButtons = Array.from(document.querySelectorAll('.speed-btn-simple'));
    const currentWpm = state.wpm;
    let closestBtn = speedButtons[0];
    let minDiff = Math.abs(parseInt(closestBtn.dataset.wpm) - currentWpm);
    speedButtons.forEach(btn => {
        const diff = Math.abs(parseInt(btn.dataset.wpm) - currentWpm);
        if (diff < minDiff) {
            minDiff = diff;
            closestBtn = btn;
        }
    });
    if (closestBtn) closestBtn.classList.add('active');
}
document.querySelectorAll('.preset-btn').forEach(btn => { btn.addEventListener('click', () => { state.wpm = parseInt(btn.dataset.wpm); updateSpeedDisplay(); }); });
// Simplified speed buttons
document.querySelectorAll('.speed-btn-simple').forEach(btn => {
    btn.addEventListener('click', () => {
        state.wpm = parseInt(btn.dataset.wpm);
        updateSpeedDisplay();
    });
});

$('loopToggle').addEventListener('change', e => { state.loopEnabled = e.target.checked; if (state.loopEnabled) seekToAyah(state.loopStart); });
$('loopStartSlider').addEventListener('input', () => syncLoopFromSlider('start'));
$('loopEndSlider').addEventListener('input', () => syncLoopFromSlider('end'));
$('loopStartInput').addEventListener('change', () => syncLoopFromInput('start'));
$('loopEndInput').addEventListener('change', () => syncLoopFromInput('end'));
document.querySelectorAll('.font-btn').forEach(btn => { btn.addEventListener('click', () => { state.fontSize = btn.dataset.size; document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); displayWord(); }); });

window.addEventListener('beforeunload', () => { autoSaveBookmark(); });
window.addEventListener('pagehide', () => { autoSaveBookmark(); });
// Ummah Globe: request geolocation and upsert to Supabase. Returns {latitude, longitude} or null.
async function updateUmmahLocation() {
    try {
        const referredBy = localStorage.getItem('kalima_referred_by') || '';
        console.log('[Ummah]', 'Auto-detecting location from IP...');

        // Step 1: Get location from IP using free CORS-friendly APIs
        let latitude, longitude, city, countryCode;
        try {
            // Primary: geojs (extremely CORS friendly for file:// / origin null)
            const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
            const geo = await res.json();
            latitude = parseFloat(geo.latitude);
            longitude = parseFloat(geo.longitude);
            city = geo.city;
            countryCode = geo.country_code;
        } catch (e1) {
            try {
                // Fallback: ipapi
                const res = await fetch('https://ipapi.co/json/');
                const geo = await res.json();
                latitude = parseFloat(geo.latitude);
                longitude = parseFloat(geo.longitude);
                city = geo.city;
                countryCode = geo.country_code;
            } catch (e2) {
                console.log('[Ummah]', 'All IP geo APIs failed (CORS/Adblock)');
                return null;
            }
        }

        if (!latitude || !longitude || isNaN(latitude)) {
            console.log('[Ummah]', 'IP geo returned invalid coordinates');
            return null;
        }

        console.log('[Ummah]', 'IP location: ' + (city || '?') + ', ' + (countryCode || '?') + ' (' + latitude + ', ' + longitude + ')');

        // Step 2: Upsert into Supabase using existing RPC
        localStorage.setItem('kalima_last_loc', JSON.stringify({ lat: latitude, lng: longitude }));
        const { error } = await getSB().rpc('upsert_location', {
            p_device_id: getDeviceId(),
            p_latitude: latitude,
            p_longitude: longitude,
            p_referred_by: referredBy
        });
        if (error) console.log('[Ummah]', 'upsert_location RPC error: ' + JSON.stringify(error));
        else console.log('[Ummah]', 'Location upserted OK');

        // Step 3: Update city + country_code directly (RPC may not handle these)
        if (city || countryCode) {
            const { error: updateErr } = await getSB()
                .from('ummah_locations')
                .update({ city: city, country_code: countryCode })
                .eq('device_id', getDeviceId());
            if (updateErr) console.log('[Ummah]', 'City/country update error: ' + JSON.stringify(updateErr));
        }

        return { latitude, longitude };
    } catch (e) {
        console.log('[Ummah]', 'Location auto-detect error: ' + (e.message || e));
        return null;
    }
}

// Heartbeat: re-ping location every 10 minutes to stay in the 24h active window
let _ummahHeartbeatId = null;
function startUmmahHeartbeat() {
    if (_ummahHeartbeatId) return;
    _ummahHeartbeatId = setInterval(() => { updateUmmahLocation(); }, 10 * 60 * 1000);
    console.log('[Ummah]', 'Heartbeat started (every 10 min)');
}
function stopUmmahHeartbeat() {
    if (_ummahHeartbeatId) { clearInterval(_ummahHeartbeatId); _ummahHeartbeatId = null; }
}
async function getActiveReaders() {
    try {
        const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const { data, error } = await getSB()
            .from('ummah_locations')
            .select('latitude, longitude, city, country_code, last_active, referred_by')
            .gte('last_active', cutoff);
        if (error) console.log('[Ummah]', 'getActiveReaders query error: ' + JSON.stringify(error));
        console.log('[Ummah]', 'Active readers found: ' + (data || []).length);
        return data || [];
    } catch (e) {
        console.log('[Ummah]', 'getActiveReaders exception: ' + e.message);
        return [];
    }
}


function toArabicNumGlobe(n) { return String(n).replace(/[0-9]/g, d => String.fromCharCode(0x0660 + +d)); }
// Number formatting: use standard comma (,) and period (.) not raised Arabic separators
function fmtArNum(n) { if (n >= 1e6) { const m = (Math.floor(n / 1e5) / 10).toFixed(1).split('.'); return toArabicNumGlobe(m[0]) + '.' + toArabicNumGlobe(m[1]) + ' مليون'; } if (n >= 1000) { const s = String(Math.floor(n)); let o = '', c = 0; for (let i = s.length - 1; i >= 0; i--) { if (c > 0 && c % 3 === 0) o = ',' + o; o = s[i] + o; c++; } return toArabicNumGlobe(o); } return toArabicNumGlobe(n); }

// ── Referral System ──
function getReferralCode() {
    let code = localStorage.getItem('kalima_ref_code');
    if (!code) {
        // Derive a short 8-char code from the device ID
        code = getDeviceId().replace(/-/g, '').substring(0, 8);
        localStorage.setItem('kalima_ref_code', code);
    }
    return code;
}
// Check URL for incoming referral code and save it
(function checkIncomingRef() {
    try {
        const params = new URLSearchParams(window.location.search);
        const incomingRef = params.get('ref');
        if (incomingRef) localStorage.setItem('kalima_referred_by', incomingRef);
    } catch (e) { }
})();
function shareReferral() {
    const code = getReferralCode();
    const refUrl = `https://onelink.to/dmwgt8?ref=${code}`;
    const msg = state.lang === 'ar'
        ? `📖 أقرأ معي القرآن الكريم على تطبيق *كلمات*\nكلمة بكلمة — بلا إعلانات — صدقة جارية\n\nتحميل التطبيق:\n${refUrl}`
        : `📖 Read the Quran with me on *Kalimat*\nWord by word — No ads — Ongoing charity\n\nDownload the app:\n${refUrl}`;
    if (navigator.share) {
        navigator.share({ title: 'كلمات', text: msg, url: refUrl }).catch(() => {
            navigator.clipboard.writeText(msg).then(() => showToast(i18n[state.lang].copied));
        });
    } else {
        navigator.clipboard.writeText(msg).then(() => showToast(i18n[state.lang].copied)).catch(() => showToast(refUrl));
    }
}

// ── Three.js Globe ──
let _UMMAH3 = { renderer: null, rafId: null, readerDots: [], scene: null, globeGroup: null, camera: null, clock: null, isDragging: false, prevMouse: { x: 0, y: 0 }, markerMeshes: [], beamMeshes: [], radius: 2.6, targetRot: { x: 0, y: 0 }, targetCamZ: 4.2 };

function latLngToVec3(lat, lng, r) {
    const latRad = lat * Math.PI / 180;
    const lngRad = lng * Math.PI / 180;
    return new THREE.Vector3(
        r * Math.cos(latRad) * Math.sin(lngRad),
        r * Math.sin(latRad),
        r * Math.cos(latRad) * Math.cos(lngRad)
    );
}

function initUmmahGlobe() {
    if (typeof THREE === 'undefined') { console.log('[Ummah]', 'THREE.js not loaded'); return; }
    const container = document.getElementById('ummahGlobeContainer');
    if (!container) { console.log('[Ummah]', 'Globe container not found'); return; }
    if (_UMMAH3.renderer) { console.log('[Ummah]', 'Globe already initialized'); return; }

    const W = container.clientWidth, H = container.clientHeight;
    if (W === 0 || H === 0) {
        console.log('[Ummah]', 'Globe container 0 size (' + W + 'x' + H + '), retrying in 200ms');
        setTimeout(initUmmahGlobe, 200);
        return;
    }
    console.log('[Ummah]', 'Container size: ' + W + 'x' + H);

    try {
        const scene = new THREE.Scene();
        _UMMAH3.scene = scene;
        _UMMAH3.clock = new THREE.Clock();

        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
        camera.position.z = 10; // Start far out for a "zoom in" effect
        _UMMAH3.targetCamZ = 4.2;
        _UMMAH3.camera = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        _UMMAH3.renderer = renderer;

        const globeGroup = new THREE.Group();
        globeGroup.rotation.order = 'YXZ';
        _UMMAH3.globeGroup = globeGroup;
        scene.add(globeGroup);

        const RADIUS = _UMMAH3.radius;

        // Sphere (transparent)
        const isDark = state.theme === 'dark';
        const sphereGeo = new THREE.SphereGeometry(RADIUS - 0.01, 64, 64);
        const sphereMat = new THREE.MeshBasicMaterial({
            color: isDark ? 0x111118 : 0xf0ede8,
            transparent: true,
            opacity: isDark ? 0.9 : 0.7
        });
        const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
        globeGroup.add(globeMesh);

        // Topology dots
        let topologyPoints = null;
        const texLoader = new THREE.TextureLoader();
        texLoader.load('https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png', tex => {
            const img = tex.image;
            const tc = document.createElement('canvas');
            tc.width = img.width; tc.height = img.height;
            const ctx = tc.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const data = ctx.getImageData(0, 0, tc.width, tc.height);
            const positions = [];
            const samples = 24000;
            for (let i = 0; i < samples; i++) {
                const phi = Math.acos(-1 + (2 * i) / samples);
                const theta = Math.sqrt(samples * Math.PI) * phi;
                const lat = 90 - phi * 180 / Math.PI;
                const lon = (theta * 180 / Math.PI) % 360 - 180;

                const u = ((lon + 180) / 360) * tc.width;
                const v = ((90 - lat) / 180) * tc.height;
                const idx = (Math.floor(v) * tc.width + Math.floor(u)) * 4;
                const brightness = (data.data[idx] + data.data[idx + 1] + data.data[idx + 2]) / 3;
                if (brightness > 30) {
                    const p = latLngToVec3(lat, lon, RADIUS);
                    positions.push(p.x, p.y, p.z);
                }
            }
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            const mat = new THREE.PointsMaterial({
                color: isDark ? 0xd4af37 : 0xb8860b,
                size: 0.012,
                transparent: true,
                opacity: isDark ? 0.75 : 0.9,
                sizeAttenuation: true
            });
            topologyPoints = new THREE.Points(geo, mat);
            globeGroup.add(topologyPoints);
        });

        // Handle theme response
        window.updateUmmahGlobeTheme = () => {
            const dark = state.theme === 'dark';
            sphereMat.color.setHex(dark ? 0x111118 : 0xf0ede8);
            sphereMat.opacity = dark ? 0.9 : 0.7;
            if (topologyPoints) {
                topologyPoints.material.color.setHex(dark ? 0xd4af37 : 0xb8860b);
                topologyPoints.material.opacity = dark ? 0.75 : 0.9;
            }
        };

        // Country borders
        fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
            .then(r => r.json()).then(world => {
                const topo = window.topojson;
                if (!topo) return;
                const features = topo.feature(world, world.objects.countries).features;
                const drawRing = coords => {
                    const pts = coords.map(c => latLngToVec3(c[1], c[0], RADIUS + 0.003));
                    if (pts.length < 2) return;
                    const geo = new THREE.BufferGeometry().setFromPoints(pts);
                    const mat = new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 });
                    globeGroup.add(new THREE.Line(geo, mat));
                };
                features.forEach(f => {
                    const t = f.geometry.type;
                    if (t === 'Polygon') f.geometry.coordinates.forEach(r => drawRing(r));
                    else if (t === 'MultiPolygon') f.geometry.coordinates.forEach(p => p.forEach(r => drawRing(r)));
                });
            }).catch(e => { console.log('[Ummah]', 'World atlas fetch failed: ' + e); });

        // Lat/lng grid
        for (let la = -60; la <= 60; la += 20) {
            const pts = [];
            for (let lo = -180; lo <= 180; lo += 4) pts.push(latLngToVec3(la, lo, RADIUS + 0.005));
            globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x55472d, transparent: true, opacity: 0.15 })));
        }
        for (let lo = -180; lo < 180; lo += 20) {
            const pts = [];
            for (let la = -90; la <= 90; la += 4) pts.push(latLngToVec3(la, lo, RADIUS + 0.005));
            globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x55472d, transparent: true, opacity: 0.15 })));
        }

        // Orbital rings
        [{ rx: Math.PI / 2, ry: 0 }, { rx: Math.PI / 3, ry: Math.PI / 5 }].forEach(r => {
            const rGeo = new THREE.TorusGeometry(RADIUS + 0.28, 0.004, 16, 100);
            const rMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.25 });
            const ring = new THREE.Mesh(rGeo, rMat);
            ring.rotation.x = r.rx; ring.rotation.y = r.ry;
            globeGroup.add(ring);
        });

        // Ambient light
        scene.add(new THREE.AmbientLight(0xffffff, 1.5));

        // Drag to rotate
        const dom = renderer.domElement;
        dom.style.touchAction = 'none';
        dom.addEventListener('pointerdown', e => { _UMMAH3.isDragging = true; _UMMAH3.prevMouse = { x: e.clientX, y: e.clientY }; });
        window.addEventListener('pointermove', e => {
            if (!_UMMAH3.isDragging || !_UMMAH3.globeGroup) return;
            const dx = e.clientX - _UMMAH3.prevMouse.x, dy = e.clientY - _UMMAH3.prevMouse.y;
            _UMMAH3.globeGroup.rotation.y += dx * 0.006;
            _UMMAH3.globeGroup.rotation.x += dy * 0.006;
            _UMMAH3.prevMouse = { x: e.clientX, y: e.clientY };
        });
        window.addEventListener('pointerup', () => { _UMMAH3.isDragging = false; });

        // Resize
        const onResize = () => {
            if (!_UMMAH3.renderer) return;
            const W2 = container.clientWidth, H2 = container.clientHeight;
            camera.aspect = W2 / H2;
            camera.updateProjectionMatrix();
            _UMMAH3.renderer.setSize(W2, H2);
        };
        window.addEventListener('resize', onResize);
        _UMMAH3._onResize = onResize;

        // Animate
        const animate = () => {
            _UMMAH3.rafId = requestAnimationFrame(animate);
            const t = _UMMAH3.clock.getElapsedTime();
            // Smoothly interpolate camera and rotation
            if (_UMMAH3.camera) {
                _UMMAH3.camera.position.z += (_UMMAH3.targetCamZ - _UMMAH3.camera.position.z) * 0.05;
            }
            if (!_UMMAH3.isDragging && _UMMAH3.globeGroup) {
                // Constant slow orbit PLUS target rotation drift using shortest path
                _UMMAH3.globeGroup.rotation.y += 0.001;

                let dy = _UMMAH3.targetRot.y - _UMMAH3.globeGroup.rotation.y;
                dy = Math.atan2(Math.sin(dy), Math.cos(dy));
                _UMMAH3.globeGroup.rotation.y += dy * 0.02;

                let dx = _UMMAH3.targetRot.x - _UMMAH3.globeGroup.rotation.x;
                dx = Math.atan2(Math.sin(dx), Math.cos(dx));
                _UMMAH3.globeGroup.rotation.x += dx * 0.02;
            }
            // Pulsing glow rings and beams
            _UMMAH3.markerMeshes.forEach(m => {
                if (m.userData.glowRing) {
                    const pulse = 0.6 + 0.4 * Math.sin(t * 2 + m.userData.offset);
                    m.userData.glowRing.material.opacity = pulse * 0.5;
                    const scale = 1 + 0.25 * Math.sin(t * 2 + m.userData.offset);
                    m.userData.glowRing.scale.setScalar(scale);
                }
            });
            _UMMAH3.beamMeshes.forEach(b => {
                const pulse = 0.7 + 0.3 * Math.sin(t * 1.5 + b.userData.offset);
                b.material.opacity = pulse * 0.4;
                b.scale.x = b.scale.y = 0.8 + 0.2 * pulse;
            });
            renderer.render(scene, camera);
        };
        animate();
        console.log('[Ummah]', 'Globe initialized successfully');
    } catch (e) {
        console.log('[Ummah]', 'Globe initialization FAILED: ' + e.message);
    }
}

function stopUmmahGlobe() {
    if (_UMMAH3.rafId) { cancelAnimationFrame(_UMMAH3.rafId); _UMMAH3.rafId = null; }
    if (_UMMAH3.renderer) { _UMMAH3.renderer.dispose(); _UMMAH3.renderer.domElement.remove(); _UMMAH3.renderer = null; }
    if (_UMMAH3._onResize) { window.removeEventListener('resize', _UMMAH3._onResize); _UMMAH3._onResize = null; }
    _UMMAH3.scene = null; _UMMAH3.globeGroup = null; _UMMAH3.clock = null; _UMMAH3.markerMeshes = [];
}

function closeUmmahScreen() { stopUmmahGlobe(); if (_UMMAH3._feedInterval) { clearInterval(_UMMAH3._feedInterval); _UMMAH3._feedInterval = null; } showScreen('appScreen'); }

function updateGlobeReaders(dots) {
    if (!_UMMAH3.globeGroup) return;
    const RADIUS = _UMMAH3.radius;
    // Remove old items
    _UMMAH3.markerMeshes.forEach(m => { _UMMAH3.globeGroup.remove(m); if (m.userData.glowRing) _UMMAH3.globeGroup.remove(m.userData.glowRing); });
    _UMMAH3.beamMeshes.forEach(b => { _UMMAH3.globeGroup.remove(b); });
    _UMMAH3.markerMeshes = [];
    _UMMAH3.beamMeshes = [];

    if (dots.length > 0) {
        // Group dots by location (approximate to 0.5 degree)
        const clusters = {};
        dots.forEach(d => {
            const key = `${Math.round(d.lat * 2) / 2},${Math.round(d.lng * 2) / 2}`;
            if (!clusters[key]) clusters[key] = { lat: d.lat, lng: d.lng, count: 0, isRef: false };
            clusters[key].count++;
            if (d.ref) clusters[key].isRef = true;
        });

        let meanLat = 0, meanLng = 0;
        let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;

        Object.values(clusters).forEach((c, idx) => {
            const pos = latLngToVec3(c.lat, c.lng, RADIUS);
            const col = c.isRef ? 0x37d4a5 : 0xd4af37;

            // Individual Dot (Smaller)
            const geo = new THREE.SphereGeometry(0.015, 12, 12);
            const mat = new THREE.MeshBasicMaterial({ color: col });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(pos);
            mesh.userData.offset = idx * 0.7;

            // Glow Ring
            const rGeo = new THREE.RingGeometry(0.03, 0.05, 24);
            const rMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
            const ring = new THREE.Mesh(rGeo, rMat);
            ring.position.copy(pos);
            ring.lookAt(0, 0, 0);
            mesh.userData.glowRing = ring;

            _UMMAH3.globeGroup.add(mesh);
            _UMMAH3.globeGroup.add(ring);
            _UMMAH3.markerMeshes.push(mesh);

            // Cluster Beam (Column of Light)
            if (c.count > 1) {
                const beamHeight = Math.min(0.8, 0.2 + (c.count * 0.05));
                const bGeo = new THREE.CylinderGeometry(0.005, 0.015, beamHeight, 8, 1, true);
                const bMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
                const beam = new THREE.Mesh(bGeo, bMat);

                // Position beam pointing outward
                const beamPos = latLngToVec3(c.lat, c.lng, RADIUS + beamHeight / 2);
                beam.position.copy(beamPos);
                beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
                beam.userData.offset = idx * 0.5;

                _UMMAH3.globeGroup.add(beam);
                _UMMAH3.beamMeshes.push(beam);
            }

            meanLat += c.lat; meanLng += c.lng;
            minLat = Math.min(minLat, c.lat); maxLat = Math.max(maxLat, c.lat);
            minLng = Math.min(minLng, c.lng); maxLng = Math.max(maxLng, c.lng);
        });

        // Set target rotation to centroid (facing camera at Z+)
        meanLat /= Object.keys(clusters).length; meanLng /= Object.keys(clusters).length;
        _UMMAH3.targetRot.y = - (meanLng) * Math.PI / 180;
        _UMMAH3.targetRot.x = (meanLat) * Math.PI / 180;

        // Set target zoom based on spread
        const spread = Math.max(maxLat - minLat, maxLng - minLng);
        _UMMAH3.targetCamZ = 3.6 + (spread / 180) * 2.5; // Zoom in more for tight clusters
    } else {
        _UMMAH3.targetCamZ = 4.2; // Return to neutral
    }
}

// Populate reader dots — from Supabase or simulated
async function loadUmmahData() {
    console.log('[Ummah]', 'loadUmmahData() called');
    console.log('[Ummah]', 'typeof supabase = ' + typeof supabase);
    // Verify Supabase is available
    try { const sb = getSB(); console.log('[Ummah]', 'Supabase client created OK'); } catch (e) { console.log('[Ummah]', 'Supabase NOT available: ' + e.message); return; }
    const COUNTRIES = [
        { n: 'السعودية', lat: 24.7, lng: 46.7, w: 30 }, { n: 'مصر', lat: 30, lng: 31.2, w: 22 },
        { n: 'الإمارات', lat: 24.5, lng: 54.4, w: 12 }, { n: 'تركيا', lat: 41, lng: 28.9, w: 9 },
        { n: 'إندونيسيا', lat: -6.2, lng: 106.8, w: 18 }, { n: 'باكستان', lat: 33.7, lng: 73, w: 14 },
        { n: 'المغرب', lat: 33.6, lng: -7.6, w: 10 }, { n: 'العراق', lat: 33.3, lng: 44.4, w: 8 },
        { n: 'الهند', lat: 28.6, lng: 77.2, w: 12 }, { n: 'نيجيريا', lat: 9.1, lng: 7.5, w: 8 },
        { n: 'بنغلاديش', lat: 23.8, lng: 90.4, w: 7 }, { n: 'أمريكا', lat: 40.7, lng: -74, w: 6 },
        { n: 'الكويت', lat: 29.4, lng: 47.9, w: 5 }, { n: 'الأردن', lat: 31.9, lng: 35.9, w: 7 }
    ];
    const SURAH_NAMES = ['الفاتحة', 'البقرة', 'آل عمران', 'الكهف', 'مريم', 'طه', 'يس', 'الملك', 'الرحمن', 'الواقعة', 'النساء', 'يوسف'];
    const totalW = COUNTRIES.reduce((a, c) => a + c.w, 0);
    const pick = () => { let r = Math.random() * totalW; for (const c of COUNTRIES) { r -= c.w; if (r <= 0) return c; } return COUNTRIES[0]; };

    // Load ONLY real readers from Supabase — no simulated padding
    let realReaders = [];
    try { realReaders = await getActiveReaders(); } catch (e) { console.log('[Ummah]', 'getActiveReaders FAILED: ' + e.message); }

    // Ensure current user always appears on globe even if Supabase hasn't returned their row yet
    const cachedLoc = localStorage.getItem('kalima_last_loc');
    if (cachedLoc) {
        try {
            const loc = JSON.parse(cachedLoc);
            const alreadyIncluded = realReaders.some(r =>
                Math.abs(r.latitude - loc.lat) < 0.01 && Math.abs(r.longitude - loc.lng) < 0.01
            );
            if (!alreadyIncluded) {
                realReaders.push({
                    latitude: loc.lat, longitude: loc.lng,
                    city: null, country_code: null,
                    last_active: new Date().toISOString(),
                    referred_by: null
                });
                console.log('[Ummah]', 'Added current user from cache');
            }
        } catch (e) { /* invalid cached location */ }
    }

    const myCode = getReferralCode();
    let referredCount = 0;

    // Build dots for Three.js globe — green = referred by me, gold = others
    const globeDots = [];
    realReaders.forEach(r => {
        const isReferred = r.referred_by === myCode;
        if (isReferred) referredCount++;
        globeDots.push({ lat: r.latitude, lng: r.longitude, ref: isReferred });
    });
    updateGlobeReaders(globeDots);

    // Show popup if user has referred readers
    if (referredCount > 0) {
        const popup = document.getElementById('refPopup');
        if (popup) {
            popup.textContent = state.lang === 'ar'
                ? `✨ ${toArabicNumGlobe(referredCount)} من الأصدقاء الذين دعوتهم يقرأون الآن — النقاط الخضراء!`
                : `✨ ${referredCount} friend${referredCount > 1 ? 's' : ''} you referred are reading now — green dots!`;
            popup.style.display = 'block';
            setTimeout(() => { popup.style.display = 'none'; }, 5000);
        }
    }

    // ── Fetch global stats ──
    console.log('[Ummah]', 'Fetching global stats...');
    const l = state.lang;
    let stats = null;
    try {
        stats = await getGlobalStats() || {};
        console.log('[Ummah]', 'Global stats: ' + JSON.stringify(stats).substring(0, 200));
        const totalSeconds = stats.total_seconds || 0;
        const totalWords = totalSeconds * 3.3;

        $('ummahTotalWords').textContent = l === 'ar' ? fmtArNum(Math.floor(totalWords)) : Math.floor(totalWords).toLocaleString();
        $('ummahKhatmas').textContent = l === 'ar' ? toArabicNumGlobe(Math.floor(totalWords / 77430)) : Math.floor(totalWords / 77430);
        $('ummahHours').textContent = l === 'ar' ? toArabicNumGlobe(Math.floor(totalSeconds / 3600)) : Math.floor(totalSeconds / 3600);
        // Personal reading time
        const myHours = Math.floor(state.elapsedSeconds / 3600);
        const myMins = Math.floor((state.elapsedSeconds % 3600) / 60);
        $('ummahMyHours').textContent = myHours > 0
            ? (l === 'ar' ? toArabicNumGlobe(myHours) : myHours)
            : (l === 'ar' ? toArabicNumGlobe(myMins) + ' د' : myMins + 'm');
    } catch (e) {
        console.error('Ummah stats load fail:', e);
        $('ummahTotalWords').textContent = l === 'ar' ? '٠' : '0';
        $('ummahHours').textContent = l === 'ar' ? '٠' : '0';
        const myMins = Math.floor((state.elapsedSeconds % 3600) / 60);
        $('ummahMyHours').textContent = l === 'ar' ? toArabicNumGlobe(myMins) + ' د' : myMins + 'm';
        $('ummahKhatmas').textContent = l === 'ar' ? '٠' : '0';
    }

    // ── Smart Counter: show active readers if high, else community size ──
    const ACTIVE_THRESHOLD = 5; // Show "reading now" if this many active readers
    const badge = document.getElementById('ummahCounterBadge');
    const dot = document.getElementById('ummahCounterDot');
    const readingNowEl = $('ummahReadingNow');
    const countEl = $('ummahReaderCount');
    const lang = state.lang;

    // Read previous count from localStorage for change detection
    const prevCount = parseInt(localStorage.getItem('kalima_prev_reader_count') || '0');

    let displayCount, isLive;
    if (realReaders.length >= ACTIVE_THRESHOLD) {
        // Enough real readers — show "reading now" in green
        displayCount = realReaders.length;
        isLive = true;
    } else {
        // Few/no readers with location — show total community size honestly
        displayCount = stats ? (stats.total_visitors || realReaders.length) : realReaders.length;
        isLive = false;
    }

    // Update the badge color & label depending on mode
    if (isLive) {
        badge.style.background = 'rgba(55,212,165,0.08)';
        badge.style.border = '1px solid rgba(55,212,165,0.2)';
        dot.style.background = '#37d4a5';
        dot.style.boxShadow = '0 0 6px rgba(55,212,165,0.6)';
        readingNowEl.textContent = lang === 'ar' ? 'يقرأون الآن' : 'reading now';
        readingNowEl.style.color = '#37d4a5';
    } else {
        // Community size mode — warm gold tone
        badge.style.background = 'rgba(196,164,46,0.06)';
        badge.style.border = '1px solid rgba(196,164,46,0.15)';
        dot.style.background = '#c4a42e';
        dot.style.boxShadow = 'none';
        readingNowEl.textContent = lang === 'ar' ? 'قارئ' : 'reader';
        readingNowEl.style.color = '#6a5a20';
    }

    countEl.textContent = lang === 'ar' ? toArabicNumGlobe(displayCount) : displayCount;

    // Visual cue if count grew since last visit (flash badge)
    if (displayCount > prevCount && prevCount > 0) {
        const diff = displayCount - prevCount;
        badge.style.transition = 'transform 0.15s ease, box-shadow 0.3s ease';
        badge.style.transform = 'scale(1.08)';
        badge.style.boxShadow = isLive
            ? '0 0 16px rgba(55,212,165,0.5)'
            : '0 0 16px rgba(196,164,46,0.4)';
        // Show a +N toast
        showToast(lang === 'ar' ? `+${toArabicNumGlobe(diff)} انضموا للمجتمع ✨` : `+${diff} joined ✨`);
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
            badge.style.boxShadow = 'none';
        }, 1200);
    }
    localStorage.setItem('kalima_prev_reader_count', displayCount);

    // Live feed — show real readers (async reverse-geocode if needed)
    const feedEl = $('ummahFeed');
    const feedEmptyEl = $('ummahFeedEmpty');
    if (feedEl) feedEl.innerHTML = '';

    if (realReaders.length === 0) {
        if (feedEmptyEl) feedEmptyEl.style.display = 'block';
    } else {
        if (feedEmptyEl) feedEmptyEl.style.display = 'none';

        // Country code → flag image helper (Windows doesn't support emoji flags)
        function countryFlag(code) {
            if (!code || code.length !== 2) return '🌐';
            const lowerCode = code.toLowerCase();
            return `<img src="https://flagcdn.com/w20/${lowerCode}.png" srcset="https://flagcdn.com/w40/${lowerCode}.png 2x" width="16" height="12" alt="${code}" style="vertical-align: middle; border-radius: 2px;">`;
        }

        // Time since label
        function timeSince(iso) {
            const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
            if (mins < 2) return state.lang === 'ar' ? 'الآن' : 'Just now';
            if (mins < 60) return state.lang === 'ar' ? `منذ ${toArabicNumGlobe(mins)} دقيقة` : `${mins}m ago`;
            const hrs = Math.round(mins / 60);
            return state.lang === 'ar' ? `منذ ${toArabicNumGlobe(hrs)} ساعة` : `${hrs}h ago`;
        }

        // Show up to 6 most recent readers (even if they only have lat/lng)
        const toShow = realReaders
            .slice()
            .sort((a, b) => new Date(b.last_active) - new Date(a.last_active))
            .slice(0, 6);

        toShow.forEach(reader => {
            const isReferred = reader.referred_by === myCode;
            const when = reader.last_active ? timeSince(reader.last_active) : '';
            const dotCol = isReferred ? '#37d4a5' : '#d4af37';
            const refLabel = state.lang === 'ar' ? 'دعوتك' : 'invited';

            const row = document.createElement('div');
            row.style.cssText = `display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,0.04);animation:fadeIn 0.4s ease;`;

            // Unique ID for the text span so we can update it asynchronously
            const spanId = 'feed-loc-' + Math.random().toString(36).substr(2, 9);

            let initialLocationText = state.lang === 'ar' ? 'قارئ...' : 'Reader...';
            let needsGeocode = false;

            if (reader.city && reader.country_code) {
                initialLocationText = `${countryFlag(reader.country_code)} ${reader.city}, ${reader.country_code}`;
            } else if (reader.country_code) {
                initialLocationText = `${countryFlag(reader.country_code)} ${reader.country_code}`;
            } else if (reader.latitude && reader.longitude) {
                needsGeocode = true; // DB only had coords
            } else {
                initialLocationText = state.lang === 'ar' ? 'قارئ حول العالم' : 'Global Reader';
            }

            row.innerHTML = `
                <span style="width:7px;height:7px;border-radius:50%;background:${dotCol};box-shadow:0 0 5px ${dotCol};flex-shrink:0;"></span>
                <span id="${spanId}" style="flex:1;font-size:13px;font-weight:700;color:var(--text-primary); transition: opacity 0.3s ease;">${initialLocationText}</span>
                ${isReferred ? `<span style="font-size:9px;font-weight:700;color:#37d4a5;background:rgba(55,212,165,0.1);border:1px solid rgba(55,212,165,0.25);border-radius:8px;padding:2px 6px;">${refLabel}</span>` : ''}
                <span style="font-size:10px;color:var(--text-muted);font-weight:600;flex-shrink:0;">${when}</span>
            `;
            feedEl.appendChild(row);

            // Asynchronously fetch reverse geocoding if missing
            if (needsGeocode) {
                const lg = state.lang === 'ar' ? 'ar' : 'en';
                // Using OpenStreetMap Nominatim for free reverse geocoding without cors issues
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${reader.latitude}&lon=${reader.longitude}&zoom=10&accept-language=${lg}`)
                    .then(res => res.json())
                    .then(geo => {
                        const city = geo.address.city || geo.address.town || geo.address.state || geo.address.region;
                        const code = geo.address.country_code ? geo.address.country_code.toUpperCase() : '';
                        const el = document.getElementById(spanId);
                        if (el) {
                            el.style.opacity = '0'; // fade out
                            setTimeout(() => {
                                el.textContent = city && code ? `${countryFlag(code)} ${city}, ${code}` : (code ? `${countryFlag(code)} ${code}` : (state.lang === 'ar' ? 'قارئ حول العالم' : 'Global Reader'));
                                el.style.opacity = '1'; // fade in
                            }, 300);
                        }
                    })
                    .catch(e => {
                        console.log('[Ummah]', 'Async geocode failed', e);
                        const el = document.getElementById(spanId);
                        if (el) el.textContent = state.lang === 'ar' ? 'قارئ حول العالم' : 'Global Reader';
                    });
            }
        });
    }
}


async function openUmmahScreen() {
    console.log('[Ummah]', 'Opening screen...');
    showScreen('ummahScreen');
    // Wait for layout to calculate container dimensions before init
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    // Check if THREE.js is loaded, wait if still pending
    console.log('[Ummah]', 'typeof THREE = ' + typeof THREE);
    if (typeof THREE === 'undefined') {
        console.log('[Ummah]', 'Waiting for THREE.js to load...');
        await new Promise(r => setTimeout(r, 1500));
    }
    if (typeof THREE === 'undefined') {
        console.log('[Ummah]', 'THREE.js FAILED to load');
    }
    console.log('[Ummah]', 'Initializing globe...');
    initUmmahGlobe();
    console.log('[Ummah]', 'Loading data + requesting location in parallel...');
    const [userLoc] = await Promise.all([
        updateUmmahLocation().catch(e => { console.log('[Ummah]', 'Location failed: ' + e); return null; }),
        loadUmmahData().catch(e => { console.log('[Ummah]', 'Data load failed: ' + e); })
    ]);
    console.log('[Ummah]', 'Data + location done.');
    // Center the globe on the user's location if available
    if (userLoc && _UMMAH3.globeGroup) {
        _UMMAH3.targetRot.y = -(userLoc.longitude) * Math.PI / 180;
        _UMMAH3.targetRot.x = (userLoc.latitude) * Math.PI / 180;
        _UMMAH3.targetCamZ = 3.6;
        console.log('[Ummah]', 'Globe centered on user');
    }
    createParticles();
}

$('ummahBtn').addEventListener('click', openUmmahScreen);
$('ummahShareBtn').addEventListener('click', shareReferral);
// Restore preferred speed from last session
const savedWpm = parseInt(localStorage.getItem('kalima_wpm'));
if (savedWpm && savedWpm >= 50 && savedWpm <= 600) state.wpm = savedWpm;
createParticles(); updateUI(); populateSurahSelect(); populatePageSelect(); updateSpeedDisplay(); initVisitorCounter(); loadCollectiveTime(); updateUmmahLocation(); startUmmahHeartbeat();

// Load theme from localStorage and apply it
const savedTheme = localStorage.getItem('quranReaderTheme') || state.theme;
state.theme = savedTheme;
document.documentElement.setAttribute('data-theme', state.theme);
// Save theme to localStorage to ensure it's available for other pages
localStorage.setItem('quranReaderTheme', state.theme);

// Auto-initialize: Skip language screen and resume modal, always start from last position
(async () => {
    try {
        const hasBookmark = localStorage.getItem('quranReaderBookmark');
        if (hasBookmark) {
            // Restore from last position automatically
            showScreen('appScreen');
            state._loading = true;
            await restoreBookmark();
            if (!state.words.length) await loadSurah(1);
            state._loading = false;
            // Don't show resume modal - just continue from last position
        } else {
            // No bookmark - show onboarding
            updateOnboarding();
            showScreen('onboardScreen');
        }
    } catch (e) {
        console.error('Error initializing app:', e);
        // Fallback to onboarding
        updateOnboarding();
        showScreen('onboardScreen');
    }
})();

// Interaction Overlay Logic
document.addEventListener('DOMContentLoaded', () => {
    const center = $('zoneCenter');
    const right = $('zoneRight');
    const left = $('zoneLeft');

    if (center) {
        center.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            togglePlay();
        });
    }

    function handleDoubleTap(el, action) {
        let lastTap = 0;
        if (!el) return;
        el.addEventListener('click', (e) => {
            const now = new Date().getTime();
            const diff = now - lastTap;
            if (diff < 300 && diff > 0) {
                action(e);
                e.preventDefault();
            }
            lastTap = now;
        });
    }

    // Right Zone (RTL) -> Previous 10 Words (Skip Back)
    handleDoubleTap(right, () => {
        const btn = $('skipBackBtn');
        if (btn) btn.click();
    });

    // Left Zone (RTL) -> Next 10 Words (Skip Fwd)
    handleDoubleTap(left, () => {
        const btn = $('skipFwdBtn');
        if (btn) btn.click();
    });
});

// ============================================
// PWA: Service Worker Registration
// ============================================
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.protocol === 'http:')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('SW registered:', reg.scope);
                // Check for updates periodically
                setInterval(() => reg.update(), 60 * 60 * 1000); // hourly
            })
            .catch(err => console.log('SW registration failed:', err));
    });
}

