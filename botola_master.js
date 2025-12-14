/* 
   Botola Pro Mega Engine 2025
   يحتوي على: حساب الترتيب، فلترة الجولات، إحصائيات اللاعبين
*/

const BotolaDB = {
    // 1. تعريف الفرق
    teams: [
        { id: 'wac', name: 'الوداد الرياضي', logo: 'wac.png' },
        { id: 'rca', name: 'الرجاء الرياضي', logo: 'rca.png' },
        { id: 'far', name: 'الجيش الملكي', logo: 'far.png' },
        { id: 'mas', name: 'المغرب الفاسي', logo: 'mas.png' },
        // ... أضف باقي الفرق الـ 16 هنا
    ],

    // 2. سجل المباريات (أدخل النتائج هنا فقط)
    matches: [
        // الجولة 1
        { r: 1, h: 'wac', a: 'mas', hs: 1, as: 0, date: '30/08/2024', time: '20:00', st: 'ملعب محمد الخامس' },
        { r: 1, h: 'rca', a: 'far', hs: 1, as: 1, date: '31/08/2024', time: '18:00', st: 'ملعب العربي الزاولي' },
        // الجولة 2
        { r: 2, h: 'mas', a: 'rca', hs: 0, as: 0, date: '07/09/2024', time: '19:15', st: 'ملعب الحسن الثاني' },
        { r: 2, h: 'far', a: 'wac', hs: 1, as: 2, date: '07/09/2024', time: '21:30', st: 'ملعب القنيطرة' },
        // ... أكمل باقي الجولات
    ],

    // 3. بيانات اللاعبين (لكل فريق)
    players: {
        'wac': [
            { id: 1, name: 'يوسف المطيع', pos: 'GK', img: 'motie.jpg', match: 8, goals: 0, yellow: 1, red: 0 },
            { id: 2, name: 'جمال حركاس', pos: 'DEF', img: 'harkas.jpg', match: 7, goals: 1, yellow: 2, red: 0 },
            { id: 3, name: 'بونا عمر', pos: 'FWD', img: 'bouna.jpg', match: 8, goals: 3, yellow: 0, red: 0 },
            // ...
        ],
        'rca': [
            { id: 1, name: 'أنس الزنيتي', pos: 'GK', img: 'zniti.jpg', match: 8, goals: 0, yellow: 0, red: 0 },
            // ...
        ]
    }
};

const BotolaSystem = {
    currentTeam: '',

    init: function(teamId) {
        this.currentTeam = teamId;
        this.renderStandings();
        this.renderRoundSelector(); // إنشاء أزرار الجولات
        this.showMatchForRound(1);  // عرض الجولة 1 افتراضياً
        this.renderPlayers();
    },

    // --- منطق الترتيب ---
    calculateStandings: function() {
        let stats = {};
        BotolaDB.teams.forEach(t => {
            stats[t.id] = { ...t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
        });

        BotolaDB.matches.forEach(m => {
            if (m.hs !== null && m.as !== null && stats[m.h] && stats[m.a]) {
                stats[m.h].p++; stats[m.a].p++;
                stats[m.h].gf += m.hs; stats[m.h].ga += m.as;
                stats[m.a].gf += m.as; stats[m.a].ga += m.hs;

                if (m.hs > m.as) { stats[m.h].w++; stats[m.h].pts += 3; stats[m.a].l++; }
                else if (m.as > m.hs) { stats[m.a].w++; stats[m.a].pts += 3; stats[m.h].l++; }
                else { 
                    stats[m.h].d++; stats[m.h].pts += 1; 
                    stats[m.a].d++; stats[m.a].pts += 1; 
                }
            }
        });

        return Object.values(stats).sort((a, b) => (b.pts - a.pts) || ((b.gf-b.ga) - (a.gf-a.ga)));
    },

    renderStandings: function() {
        const sorted = this.calculateStandings();
        let html = '';
        sorted.forEach((t, i) => {
            let zoneClass = ''; 
            if(i < 2) zoneClass = 'zone-cl'; // أخضر
            else if(i === 2) zoneClass = 'zone-caf'; // أزرق
            else if(i > 13) zoneClass = 'zone-rel'; // أحمر

            // التمييز الخاص بالفريق الحالي (الإطار الملون)
            const highlightClass = (t.id === this.currentTeam) ? 'my-team-highlight' : '';
            
            html += `
            <tr class="${highlightClass}">
                <td><span class="rank-dot ${zoneClass}">${i+1}</span></td>
                <td style="text-align:right; font-weight:600;">${t.name}</td>
                <td class="pts-bold">${t.pts}</td>
                <td>${t.p}</td>
                <td class="desktop-only">${t.gf - t.ga}</td>
            </tr>`;
        });
        document.getElementById('standings-body').innerHTML = html;
    },

    // --- منطق المباريات (الجولات) ---
    renderRoundSelector: function() {
        const maxRounds = 30; // عدد جولات الدوري
        let html = '';
        for(let i=1; i<=maxRounds; i++) {
            html += `<button class="round-btn" onclick="BotolaSystem.showMatchForRound(${i})" id="r-btn-${i}">${i}</button>`;
        }
        document.getElementById('rounds-scroller').innerHTML = html;
    },

    showMatchForRound: function(round) {
        // تحديث أزرار الجولات (Active State)
        document.querySelectorAll('.round-btn').forEach(b => b.classList.remove('active'));
        const btn = document.getElementById(`r-btn-${round}`);
        if(btn) btn.classList.add('active');

        // البحث عن المباراة
        const match = BotolaDB.matches.find(m => m.r === round && (m.h === this.currentTeam || m.a === this.currentTeam));
        const container = document.getElementById('match-display-area');

        if (!match) {
            container.innerHTML = `<div class="no-match-msg">لا توجد مباراة للفريق في الجولة ${round} بعد</div>`;
            return;
        }

        const opponentId = (match.h === this.currentTeam) ? match.a : match.h;
        const opponent = BotolaDB.teams.find(t => t.id === opponentId);
        const isHome = (match.h === this.currentTeam);
        
        let resultHTML = '<span class="vs-badge">VS</span>';
        if(match.hs !== null) {
            resultHTML = `<span class="score-final">${match.hs} - ${match.as}</span>`;
        }

        container.innerHTML = `
            <div class="match-detail-card">
                <div class="match-meta">
                    <span><i class="far fa-calendar"></i> ${match.date}</span>
                    <span><i class="far fa-clock"></i> ${match.time}</span>
                </div>
                <div class="match-teams-visual">
                    <div class="team-v home">
                        <div class="t-name">${isHome ? 'فريقنا' : opponent.name}</div>
                    </div>
                    <div class="score-center">${resultHTML}</div>
                    <div class="team-v away">
                        <div class="t-name">${!isHome ? 'فريقنا' : opponent.name}</div>
                    </div>
                </div>
                <div class="match-stadium"><i class="fas fa-map-marker-alt"></i> ${match.stadium}</div>
            </div>
        `;
    },

    // --- منطق اللاعبين (Popups) ---
    renderPlayers: function() {
        const players = BotolaDB.players[this.currentTeam];
        const container = document.getElementById('players-grid');
        
        if(!players) { container.innerHTML = 'لا توجد بيانات لاعبين'; return; }

        let html = '';
        players.forEach(p => {
            html += `
            <div class="player-card" onclick="BotolaSystem.togglePlayerStats(this)">
                <img src="${p.img}" class="p-img" onerror="this.src='https://via.placeholder.com/100'">
                <div class="p-info">
                    <span class="p-name">${p.name}</span>
                    <span class="p-pos">${p.pos}</span>
                </div>
                <!-- الإحصائيات المخفية -->
                <div class="p-stats-overlay">
                    <div class="stat-row"><span>مباريات</span> <strong>${p.match}</strong></div>
                    <div class="stat-row"><span>أهداف</span> <strong>${p.goals}</strong></div>
                    <div class="stat-row"><span>إنذارات</span> <strong style="color:orange">${p.yellow}</strong></div>
                </div>
            </div>`;
        });
        container.innerHTML = html;
    },

    togglePlayerStats: function(card) {
        // إغلاق جميع البطاقات الأخرى أولاً
        document.querySelectorAll('.player-card.active').forEach(c => {
            if(c !== card) c.classList.remove('active');
        });
        // تفعيل البطاقة الحالية
        card.classList.toggle('active');
    }
};
