(function() {
    'use strict';

    // ==================== 1. قاعدة البيانات المحدثة (دجنبر 2025) ====================
    const DB = {
        config: {
            currentRound: 12, // رقم الجولة الحالية
            season: "2025/2026"
        },

        teams: {
            "wac": { name: "الوداد الرياضي", founded: "1937", city: "الدار البيضاء", stadium: "دونور", manager: "محمد أمين بنهاشم", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png" },
            "rca": { name: "الرجاء الرياضي", founded: "1949", city: "الدار البيضاء", stadium: "العربي الزاولي", manager: "ريكاردو سا بينتو", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
            "far": { name: "الجيش الملكي", founded: "1958", city: "الرباط", stadium: "القنيطرة", manager: "هوبرت فيلود", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
            "mas": { name: "المغرب الفاسي", founded: "1946", city: "فاس", stadium: "الحسن الثاني", manager: "طارق السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
            "rsb": { name: "نهضة بركان", founded: "1938", city: "بركان", stadium: "البلدي", manager: "معين الشعباني", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
            // ... (أضف باقي الفرق هنا بنفس الطريقة) ...
            "irt": { name: "اتحاد طنجة", founded: "1983", city: "طنجة", stadium: "ابن بطوطة", manager: "هلال الطير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
            "fus": { name: "الفتح الرياضي", founded: "1946", city: "الرباط", stadium: "مولاي الحسن", manager: "جمال السلامي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
            "uts": { name: "إتحاد تواركة", founded: "1969", city: "الرباط", stadium: "18 نونبر", manager: "عبد الواحد زمرات", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
            "husa": { name: "حسنية أكادير", founded: "1946", city: "أكادير", stadium: "أدرار", manager: "عبد الهادي السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
            "codm": { name: "النادي المكناسي", founded: "1962", city: "مكناس", stadium: "الشرفي", manager: "عبد العزيز كركاش", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" }
        },

        // بيانات الترتيب (أدخل الأرقام هنا، سيتم الترتيب تلقائياً)
        standings: [
            { id: "rsb", p: 12, w: 8, d: 3, l: 1, gf: 15, ga: 5 },
            { id: "far", p: 12, w: 7, d: 4, l: 1, gf: 18, ga: 6 },
            { id: "mas", p: 12, w: 6, d: 4, l: 2, gf: 10, ga: 7 },
            { id: "wac", p: 12, w: 5, d: 4, l: 3, gf: 14, ga: 11 },
            { id: "rca", p: 12, w: 4, d: 5, l: 3, gf: 9, ga: 8 },
            { id: "uts", p: 12, w: 4, d: 4, l: 4, gf: 13, ga: 11 },
            { id: "irt", p: 12, w: 3, d: 5, l: 4, gf: 12, ga: 12 },
            { id: "fus", p: 12, w: 3, d: 5, l: 4, gf: 9, ga: 10 },
            { id: "husa", p: 12, w: 4, d: 2, l: 6, gf: 11, ga: 13 },
            { id: "codm", p: 12, w: 3, d: 4, l: 5, gf: 8, ga: 12 }
            // ... أكمل باقي الفرق لتصل لـ 16 فريق
        ],

        // المباريات (يمكنك إضافة الجولات القادمة هنا)
        matches: {
            "12": [
                {d:"12/12", t:"18:00", t1:"wac", s:"-", t2:"rsb", st:"ملعب العربي الزاولي"},
                {d:"12/12", t:"20:00", t1:"far", s:"-", t2:"rca", st:"ملعب القنيطرة"},
                {d:"13/12", t:"16:00", t1:"mas", s:"-", t2:"irt", st:"ملعب الحسن الثاني"}
            ],
            "13": [
                {d:"19/12", t:"16:00", t1:"rca", s:"-", t2:"codm", st:"ملعب العربي الزاولي"},
                {d:"19/12", t:"18:00", t1:"uts", s:"-", t2:"wac", st:"ملعب 18 نونبر"}
            ]
        },

        // الانتقالات (جديد)
        transfers: {
            "wac": [
                {n: "مباي نيانغ", type: "out", to: "الخالدية البحريني", price: "فسخ عقد"},
                {n: "حمزة الساخي", type: "in", from: "أجاكسيو", price: "حر"}
            ],
            "rca": [
                {n: "كريم باعدي", type: "in", from: "نهضة بركان", price: "تبادل"}
            ]
        },

        // اللاعبين (عيينة)
        players: {
            "wac": [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png"},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif"}
            ]
        }
    };

    // ==================== 2. دوال الرسم والمنطق ====================

    // دالة رسم الجدول (محسنة لضبط الأعمدة)
    function renderStandings() {
        // الحساب والترتيب
        const sorted = DB.standings.map(t => {
            t.pts = (t.w * 3) + t.d;
            t.gd = t.gf - t.ga;
            return t;
        }).sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.gd !== a.gd) return b.gd - a.gd;
            return b.w - a.w; // الأفضلية لمن فاز أكثر
        });

        let rows = '';
        sorted.forEach((row, index) => {
            const team = DB.teams[row.id] || {name: "Unknown", logo: ""};
            const rank = index + 1;
            let badgeClass = rank <= 2 ? 'bg-success' : rank >= 15 ? 'bg-danger' : 'bg-light';
            let badgeColor = rank <= 2 ? '#d4edda' : rank >= 15 ? '#f8d7da' : '#f8f9fa';
            let textColor = rank <= 2 ? '#155724' : rank >= 15 ? '#721c24' : '#666';

            rows += `
                <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:12px;text-align:center;"><span style="background:${badgeColor};color:${textColor};width:25px;height:25px;border-radius:50%;display:inline-block;line-height:25px;font-weight:bold;font-size:12px;">${rank}</span></td>
                    <td style="padding:12px;width:40%;text-align:right;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <img src="${team.logo}" style="width:25px;height:25px;object-fit:contain;">
                            <span style="font-weight:600;font-size:13px;color:#333;">${team.name}</span>
                        </div>
                    </td>
                    <td style="padding:12px;text-align:center;">${row.p}</td>
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.w}</td>
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.d}</td>
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.l}</td>
                    <td style="padding:12px;text-align:center;direction:ltr;" class="hide-mobile">${row.gd > 0 ? '+'+row.gd : row.gd}</td>
                    <td style="padding:12px;text-align:center;font-weight:800;color:#5e72e4;">${row.pts}</td>
                </tr>`;
        });

        return `
            <div class="eb-card">
                <div class="eb-card-header">📊 الترتيب العام</div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;white-space:nowrap;">
                        <thead style="background:#f6f9fc;color:#8898aa;font-size:11px;text-transform:uppercase;">
                            <tr>
                                <th style="padding:10px;">#</th>
                                <th style="padding:10px;text-align:right;">الفريق</th>
                                <th style="padding:10px;">ل</th>
                                <th style="padding:10px;" class="hide-mobile">ف</th>
                                <th style="padding:10px;" class="hide-mobile">ت</th>
                                <th style="padding:10px;" class="hide-mobile">خ</th>
                                <th style="padding:10px;" class="hide-mobile">+/-</th>
                                <th style="padding:10px;">ن</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>`;
    }

    // دالة رسم المباريات
    function renderMatches() {
        const round = DB.config.currentRound;
        const matches = DB.matches[round] || [];
        
        let mHtml = '';
        if(matches.length === 0) {
            mHtml = '<div style="padding:20px;text-align:center;color:#999;">لا توجد مباريات مسجلة لهذه الجولة</div>';
        } else {
            matches.forEach(m => {
                const t1 = DB.teams[m.t1] || {name: m.t1, logo: ""};
                const t2 = DB.teams[m.t2] || {name: m.t2, logo: ""};
                mHtml += `
                    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border-bottom:1px solid #f0f0f0;">
                        <div style="text-align:center;width:30%;">
                            <img src="${t1.logo}" style="width:30px;height:30px;display:block;margin:0 auto 5px;">
                            <span style="font-size:11px;font-weight:bold;">${t1.name}</span>
                        </div>
                        <div style="text-align:center;width:40%;">
                            <div style="background:#eee;padding:3px 10px;border-radius:15px;font-weight:bold;font-size:14px;display:inline-block;margin-bottom:3px;">${m.s}</div>
                            <div style="font-size:10px;color:#888;">${m.d} | ${m.t}</div>
                            <div style="font-size:10px;color:#888;">${m.st}</div>
                        </div>
                        <div style="text-align:center;width:30%;">
                            <img src="${t2.logo}" style="width:30px;height:30px;display:block;margin:0 auto 5px;">
                            <span style="font-size:11px;font-weight:bold;">${t2.name}</span>
                        </div>
                    </div>
                `;
            });
        }

        return `
            <div class="eb-card">
                <div class="eb-card-header" style="display:flex;justify-content:space-between;">
                    <span>📅 مباريات الجولة ${round}</span>
                    <span style="font-size:12px;background:#fff;color:#5e72e4;padding:2px 8px;border-radius:10px;">${DB.config.season}</span>
                </div>
                <div>${mHtml}</div>
            </div>
        `;
    }

    // دالة رسم الانتقالات
    function renderTransfers(teamId) {
        const tr = DB.transfers[teamId];
        if (!tr || tr.length === 0) return '';

        let tRows = tr.map(t => {
            const color = t.type === 'in' ? '#2dce89' : '#f5365c';
            const arrow = t.type === 'in' ? '↙️ قادم' : '↗️ مغادر';
            const label = t.type === 'in' ? `من: ${t.from}` : `إلى: ${t.to}`;
            
            return `
                <div style="display:flex;align-items:center;padding:12px;border-bottom:1px solid #f9f9f9;">
                    <div style="width:4px;height:40px;background:${color};border-radius:2px;margin-left:10px;"></div>
                    <div style="flex:1;">
                        <div style="font-weight:bold;font-size:14px;">${t.n}</div>
                        <div style="font-size:12px;color:#666;">${label} (${t.price})</div>
                    </div>
                    <div style="font-size:11px;color:${color};background:${color}15;padding:4px 8px;border-radius:4px;">
                        ${arrow}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="eb-card">
                <div class="eb-card-header">⇄ الميركاتو</div>
                <div>${tRows}</div>
            </div>
        `;
    }

    // الدالة الرئيسية التي تستدعيها الصفحة
    window.renderAll = function() {
        const app = document.getElementById('botola-app');
        if(!app) return;

        const teamId = app.getAttribute('data-team') || 'wac';
        const team = DB.teams[teamId];

        // 1. بطاقة الفريق
        let html = `
            <div class="eb-card" style="text-align:center;padding:30px 20px;">
                <img src="${team.logo}" style="width:70px;height:70px;margin-bottom:15px;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
                <h1 style="font-size:22px;color:#32325d;margin-bottom:5px;">${team.name}</h1>
                <p style="color:#8898aa;font-size:14px;margin-bottom:15px;">
                    المدرب: <span style="color:#333;font-weight:bold;">${team.manager}</span> | 
                    الملعب: ${team.stadium}
                </p>
            </div>
        `;

        // 2. تقسيم الصفحة إلى عمودين للشاشات الكبيرة
        html += `<div class="eb-grid-layout">`;
        
        // العمود الأيمن (الترتيب)
        html += `<div class="eb-col">${renderStandings()}</div>`;
        
        // العمود الأيسر (المباريات + الانتقالات)
        html += `<div class="eb-col">
                    ${renderMatches()}
                    ${renderTransfers(teamId)}
                 </div>`;
        
        html += `</div>`; // إغلاق Grid

        // حقن الستايل الضروري
        if(!document.getElementById('js-styles')) {
            const style = document.createElement('style');
            style.id = 'js-styles';
            style.textContent = `
                .eb-card { background:#fff; border-radius:12px; box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08); margin-bottom:20px; overflow:hidden; }
                .eb-card-header { padding:15px 20px; border-bottom:1px solid #f0f0f0; font-weight:bold; color:#32325d; font-size:16px; background:#fff; }
                .eb-grid-layout { display:grid; grid-template-columns: 2fr 1fr; gap:20px; }
                @media (max-width: 768px) { .eb-grid-layout { grid-template-columns: 1fr; } .hide-mobile { display:none !important; } }
            `;
            document.head.appendChild(style);
        }

        app.innerHTML = html;
    };

    // تشغيل تلقائي عند التحميل
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.renderAll);
    } else {
        window.renderAll();
    }

})();
