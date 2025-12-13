(function() {
    'use strict';

    // ==================== 1. قاعدة البيانات ====================
    const DB = {
        // بيانات الفرق (ثابتة)
        teams: {
            "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", manager: "محمد أمين بنهاشم", stadium: "دونور" },
            "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", manager: "ريكاردو سا بينتو", stadium: "العربي الزاولي" },
            "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", manager: "هوبرت فيلود", stadium: "القنيطرة" },
            "mas": { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", manager: "طارق السكتيوي", stadium: "الحسن الثاني" },
            "rsb": { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", manager: "معين الشعباني", stadium: "البلدي" },
            "irt": { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", manager: "هلال الطير", stadium: "ابن بطوطة" },
            "fus": { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", manager: "جمال السلامي", stadium: "مولاي الحسن" },
            "uts": { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", manager: "عبد الواحد زمرات", stadium: "18 نونبر" },
            "husa": { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", manager: "عبد الهادي السكتيوي", stadium: "أدرار" },
            "ocs": { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", manager: "زكرياء عبوب", stadium: "المسيرة" },
            "rcz": { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", manager: "محمد أمين بنهاشم", stadium: "أحمد شكري" },
            "dhj": { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", manager: "عبد الرحيم طاليب", stadium: "العبدي" },
            "codm": { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", manager: "عزيز كركاش", stadium: "الشرفي" },
            "od": { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", manager: "مصطفى أوشريف", stadium: "أحمد فانا" },
            "kacm": { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", manager: "رضوان الحيمر", stadium: "مراكش الكبير" },
            "usym": { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", manager: "مهدي بنعطية", stadium: "يعقوب المنصور" }
        },

        // ==== الترتيب اليدوي (أنت تتحكم في النقاط هنا) ====
        // أدخل النقاط (pts) والأهداف (gd) هنا، والنظام سيرتبهم ويلونهم تلقائياً
        standings: [
            { id: "far", pts: 15, w: 6, d: 3, l: 0, gd: 10 }, // الجيش: 21 نقطة
            { id: "wac", pts: 40, w: 6, d: 2, l: 1, gd: 8 },  // الوداد: 20 نقطة
            { id: "dhj", pts: 17, w: 5, d: 2, l: 2, gd: 5 },  // الجديدة: 17 نقطة
            { id: "rsb", pts: 16, w: 5, d: 1, l: 2, gd: 7 },
            { id: "mas", pts: 15, w: 4, d: 3, l: 2, gd: 3 },
            { id: "rca", pts: 14, w: 3, d: 5, l: 1, gd: 2 },
            { id: "fus", pts: 13, w: 3, d: 4, l: 2, gd: 1 },
            { id: "uts", pts: 30, w: 3, d: 3, l: 3, gd: 0 },
            { id: "irt", pts: 11, w: 2, d: 5, l: 2, gd: -1 },
            { id: "husa", pts: 10, w: 2, d: 4, l: 3, gd: -2 },
            { id: "codm", pts: 20, w: 2, d: 3, l: 4, gd: -3 },
            { id: "ocs", pts: 8, w: 2, d: 2, l: 5, gd: -4 },
            { id: "rcz", pts: 7, w: 1, d: 4, l: 4, gd: -5 },
            { id: "od", pts: 6, w: 1, d: 3, l: 5, gd: -6 },
            { id: "kacm", pts: 5, w: 1, d: 2, l: 6, gd: -7 },
            { id: "usym", pts: 4, w: 0, d: 4, l: 5, gd: -8 }
        ],

        // ==== سجل المباريات الكامل (جولة بجولة) ====
        matches: {
            "1": [ {t1:"wac", t2:"mas", s:"1-0", st:"دونور"}, {t1:"rca", t2:"far", s:"0-0", st:"الزاولي"} ],
            "2": [ {t1:"irt", t2:"wac", s:"2-2", st:"طنجة"}, {t1:"far", t2:"codm", s:"3-1", st:"القنيطرة"} ],
            // ... يمكنك إضافة الجولات 3، 4، 5 ...
            "8": [ 
                {t1:"wac", t2:"rsb", s:"-", st:"دونور"},
                {t1:"far", t2:"rca", s:"-", st:"القنيطرة"},
                {t1:"dhj", t2:"mas", s:"-", st:"العبدي"},
                {t1:"irt", t2:"husa", s:"-", st:"طنجة"}
            ],
            "9": [ {t1:"wac", t2:"dhj", s:"-", st:"دونور"} ]
        },

        players: {
            "wac": [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", stats: {mp: 12, cs: 5, min: 1080}},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", stats: {mp: 11, g: 1, a: 0}}
            ]
        },

        transfers: {
            "wac": [ {n: "مباي نيانغ", type: "out", to: "الخالدية", price: "فسخ عقد"} ]
        }
    };

    // ==================== 2. المنطق والعرض ====================

    // دالة ترتيب الجدول (ترتب بناءً على النقاط التي أدخلتها)
    function renderStandings() {
        // ترتيب المصفوفة بناءً على النقاط (pts)
        const sorted = DB.standings.sort((a, b) => b.pts - a.pts || b.gd - a.gd);

        let rows = '';
        sorted.forEach((row, index) => {
            const team = DB.teams[row.id] || {name: row.id, logo: ""};
            const rank = index + 1;
            
            // === التلوين حسب الطلب ===
            // 1, 2: أخضر | 3: أزرق | 15, 16: أحمر
            let rankColor = '#eee'; // الافتراضي (رمادي فاتح)
            let textColor = '#333';
            
            if (rank <= 2) { rankColor = '#2dce89'; textColor = '#fff'; } // أخضر
            else if (rank === 3) { rankColor = '#11cdef'; textColor = '#fff'; } // أزرق
            else if (rank >= 15) { rankColor = '#f5365c'; textColor = '#fff'; } // أحمر

            rows += `
                <tr style="border-bottom:1px solid #f0f0f0; transition:background 0.2s;">
                    <td style="padding:12px;text-align:center;">
                        <span style="background:${rankColor};color:${textColor};width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">${rank}</span>
                    </td>
                    <td style="padding:12px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <img src="${team.logo}" style="width:28px;height:28px;object-fit:contain;">
                            <span style="font-weight:600;font-size:13px;color:#32325d;">${team.name}</span>
                        </div>
                    </td>
                    <td style="padding:12px;text-align:center;">${row.w + row.d + row.l}</td> <!-- عدد المباريات -->
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.w}</td>
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.d}</td>
                    <td style="padding:12px;text-align:center;" class="hide-mobile">${row.l}</td>
                    <td style="padding:12px;text-align:center;direction:ltr;font-weight:bold;" class="hide-mobile">${row.gd > 0 ? '+'+row.gd : row.gd}</td>
                    <td style="padding:12px;text-align:center;font-weight:800;color:#5e72e4;font-size:15px;">${row.pts}</td>
                </tr>`;
        });

        return `
            <div class="eb-card">
                <div class="eb-card-header">📊 الترتيب العام</div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;white-space:nowrap;">
                        <thead style="background:#f6f9fc;color:#8898aa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">
                            <tr>
                                <th style="padding:12px;">#</th>
                                <th style="padding:12px;text-align:right;">الفريق</th>
                                <th style="padding:12px;">لعب</th>
                                <th style="padding:12px;" class="hide-mobile">فاز</th>
                                <th style="padding:12px;" class="hide-mobile">تعادل</th>
                                <th style="padding:12px;" class="hide-mobile">خسر</th>
                                <th style="padding:12px;" class="hide-mobile">+/-</th>
                                <th style="padding:12px;">نقاط</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>`;
    }

    // دالة عرض المباريات مع اختيار الجولة
    window.changeRound = function(roundNum) {
        const container = document.getElementById('matchesList');
        const matches = DB.matches[roundNum] || [];
        
        if(matches.length === 0) {
            container.innerHTML = '<div style="padding:20px;text-align:center;color:#999;">لا توجد مباريات لهذه الجولة</div>';
            return;
        }

        let html = matches.map(m => {
            const t1 = DB.teams[m.t1] || {name: m.t1, logo: ""};
            const t2 = DB.teams[m.t2] || {name: m.t2, logo: ""};
            return `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border-bottom:1px solid #f0f0f0;">
                    <div style="text-align:center;width:30%;">
                        <img src="${t1.logo}" style="width:30px;margin-bottom:4px;">
                        <div style="font-size:11px;font-weight:bold;">${t1.name}</div>
                    </div>
                    <div style="text-align:center;width:40%;">
                        <div style="background:#5e72e4;color:#fff;padding:4px 12px;border-radius:15px;font-weight:bold;font-size:14px;display:inline-block;margin-bottom:4px;box-shadow:0 2px 4px rgba(94,114,228,0.3);">${m.s}</div>
                        <div style="font-size:10px;color:#888;">${m.st}</div>
                    </div>
                    <div style="text-align:center;width:30%;">
                        <img src="${t2.logo}" style="width:30px;margin-bottom:4px;">
                        <div style="font-size:11px;font-weight:bold;">${t2.name}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
        document.getElementById('currentRoundLabel').innerText = `الجولة ${roundNum}`;
    };

    function renderMatchesComponent() {
        // إنشاء قائمة أزرار للجولات
        const rounds = Object.keys(DB.matches).sort((a,b)=>a-b);
        const lastRound = rounds[rounds.length-1] || "1";
        
        // قائمة منسدلة بسيطة لاختيار الجولة
        let options = rounds.map(r => `<option value="${r}" ${r===lastRound?'selected':''}>الجولة ${r}</option>`).join('');
        
        return `
            <div class="eb-card">
                <div class="eb-card-header" style="display:flex;justify-content:space-between;align-items:center;">
                    <span id="currentRoundLabel">📅 مباريات البطولة</span>
                    <select onchange="changeRound(this.value)" style="padding:4px 8px;border:1px solid #ddd;border-radius:5px;outline:none;font-size:12px;">
                        ${options}
                    </select>
                </div>
                <div id="matchesList"></div>
            </div>
        `;
    }

    // (باقي الدوال: renderPlayers و renderTransfers و renderAll... انسخها كما هي من الكود السابق مع التأكد من وجودها)
    // ... لضمان الاختصار هنا، سأعيد كتابة renderAll فقط لربط كل شيء ...

    function renderPlayers(teamId) { /* ... نفس دالة اللاعبين السابقة مع المودال ... */ 
        const players = DB.players[teamId];
        if (!players || players.length === 0) return '';
        let pGrid = players.map((p, idx) => `
            <div onclick="showPlayerStats('${teamId}', ${idx})" style="text-align:center; border:1px solid #eee; border-radius:8px; padding:8px; background:#fcfcfc; cursor:pointer;">
                <img src="${p.img}" style="width:100%; height:100px; object-fit:cover; border-radius:5px; margin-bottom:5px;">
                <div style="font-weight:bold; font-size:12px;">${p.n}</div>
            </div>`).join('');
        return `<div class="eb-card"><div class="eb-card-header">👥 تشكيلة الفريق</div><div style="padding:15px;display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:10px;">${pGrid}</div></div>
        <div id="playerModal" class="eb-modal" onclick="closeModal(event)"><div class="eb-modal-content"><span class="eb-close" onclick="document.getElementById('playerModal').style.display='none'">&times;</span><div id="playerDetails"></div></div></div>`;
    }

    window.showPlayerStats = function(teamId, idx) {
        const p = DB.players[teamId][idx];
        const stats = p.stats || {};
        document.getElementById('playerDetails').innerHTML = `
            <div style="text-align:center;">
                <img src="${p.img}" style="width:100px;height:100px;border-radius:50%;margin-bottom:10px;">
                <h3>${p.n}</h3>
                <p>${p.p}</p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                    <div style="background:#f0f0f0;padding:5px;"><b>${stats.mp||0}</b><br><small>مباريات</small></div>
                    <div style="background:#f0f0f0;padding:5px;"><b>${stats.g||0}</b><br><small>أهداف</small></div>
                </div>
            </div>
        `;
        document.getElementById('playerModal').style.display = 'flex';
    }
    window.closeModal = function(e) { if(e.target.id === 'playerModal') document.getElementById('playerModal').style.display = 'none'; }

    function renderTransfers(teamId) {
        const tr = DB.transfers[teamId];
        if (!tr || tr.length === 0) return '';
        let tRows = tr.map(t => `<div style="padding:10px;border-bottom:1px solid #eee;">${t.type==='in'?'🟢':'🔴'} <b>${t.n}</b> <small>${t.type==='in'?'من':'إلى'} ${t.type==='in'?t.from:t.to}</small></div>`).join('');
        return `<div class="eb-card"><div class="eb-card-header">⇄ الميركاتو</div><div>${tRows}</div></div>`;
    }

    window.renderAll = function() {
        const app = document.getElementById('botola-app');
        if(!app) return;
        const teamId = app.getAttribute('data-team') || 'wac';
        const team = DB.teams[teamId];

        let html = `
            <div class="eb-card" style="text-align:center;padding:30px;">
                <img src="${team.logo}" style="width:70px;">
                <h1 style="color:#32325d;">${team.name}</h1>
            </div>
            <div class="eb-grid-layout">
                <div class="eb-col">${renderStandings()} ${renderPlayers(teamId)}</div>
                <div class="eb-col">${renderMatchesComponent()} ${renderTransfers(teamId)}</div>
            </div>
        `;

        if(!document.getElementById('js-styles')) {
            const style = document.createElement('style');
            style.id = 'js-styles';
            style.textContent = `
                .eb-card { background:#fff; border-radius:12px; box-shadow:0 4px 6px rgba(50,50,93,0.11); margin-bottom:20px; overflow:hidden; }
                .eb-card-header { padding:15px; border-bottom:1px solid #f0f0f0; font-weight:bold; background:#fff; }
                .eb-grid-layout { display:grid; grid-template-columns: 2fr 1fr; gap:20px; }
                .eb-modal { display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); align-items:center; justify-content:center; }
                .eb-modal-content { background:#fff; padding:20px; border-radius:10px; width:90%; max-width:350px; }
                .eb-close { float:right; cursor:pointer; font-size:24px; }
                @media (max-width: 768px) { .eb-grid-layout { grid-template-columns: 1fr; } .hide-mobile { display:none !important; } }
            `;
            document.head.appendChild(style);
        }
        app.innerHTML = html;
        
        // تفعيل الجولة الأخيرة تلقائياً
        const rounds = Object.keys(DB.matches).sort((a,b)=>a-b);
        if(rounds.length > 0) window.changeRound(rounds[rounds.length-1]);
    };

    if(document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', window.renderAll); } else { window.renderAll(); }

})();
