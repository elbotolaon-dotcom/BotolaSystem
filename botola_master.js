(function() {
    'use strict';

    // ==================== 1. قاعدة البيانات (الذكية) ====================
    const DB = {
        config: {
            currentRound: 12,
            season: "2025/2026"
        },

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

        // ==== النقاط المبدئية (رصيد سابق) ====
        // يمكنك وضع نقاط البداية هنا، ثم النظام سيضيف عليها نتائج المباريات في الأسفل
        initialStandings: {
            "rsb": { p: 10, w: 7, d: 2, l: 1, gf: 13, ga: 4 },
            "far": { p: 10, w: 6, d: 3, l: 1, gf: 15, ga: 5 },
            "mas": { p: 10, w: 5, d: 4, l: 1, gf: 9, ga: 6 },
            "wac": { p: 10, w: 4, d: 3, l: 3, gf: 13, ga: 11 },
            "rca": { p: 10, w: 3, d: 5, l: 2, gf: 8, ga: 7 },
            // ... (بقية الفرق تبدأ من هذا الرصيد) ...
            // تأكد من إضافة كل الفرق هنا ولو بأصفار
            "irt": { p: 10, w: 3, d: 4, l: 3, gf: 10, ga: 10 },
            "fus": { p: 10, w: 3, d: 4, l: 3, gf: 8, ga: 8 },
            "uts": { p: 10, w: 3, d: 3, l: 4, gf: 11, ga: 10 },
            "husa": { p: 10, w: 3, d: 2, l: 5, gf: 9, ga: 11 },
            "codm": { p: 10, w: 2, d: 4, l: 4, gf: 7, ga: 11 },
            "ocs": { p: 10, w: 2, d: 3, l: 5, gf: 9, ga: 13 },
            "dhj": { p: 10, w: 2, d: 3, l: 5, gf: 8, ga: 12 },
            "rcz": { p: 10, w: 2, d: 2, l: 6, gf: 7, ga: 14 },
            "od": { p: 10, w: 1, d: 5, l: 4, gf: 6, ga: 11 },
            "kacm": { p: 10, w: 1, d: 4, l: 5, gf: 5, ga: 12 },
            "usym": { p: 10, w: 0, d: 5, l: 5, gf: 4, ga: 11 }
        },

        // ==== المباريات (المحرك الحقيقي للترتيب) ====
        // عند تغيير النتيجة هنا، سيتحدث الجدول تلقائياً
        matches: {
            "11": [ // نتائج جولات سابقة (للحساب)
                {t1:"wac", s:"2-1", t2:"rca", played: true},
                {t1:"rsb", s:"1-0", t2:"far", played: true}
            ],
            "12": [ // الجولة الحالية
                {d:"12/12", t:"18:00", t1:"wac", s:"3-0", t2:"codm", st:"العربي الزاولي", played: true}, // مثال: الوداد فاز 3-0
                {d:"12/12", t:"20:00", t1:"far", s:"1-1", t2:"rca", st:"القنيطرة", played: true},
                {d:"13/12", t:"16:00", t1:"mas", s:"-", t2:"irt", st:"الحسن الثاني", played: false} // لم تلعب بعد
            ]
        },

        transfers: {
            "wac": [ {n: "مباي نيانغ", type: "out", to: "الخالدية", price: "فسخ عقد"} ],
            "rca": [ {n: "كريم باعدي", type: "in", from: "نهضة بركان", price: "تبادل"} ]
        },

        players: {
            "wac": [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", stats: {mp: 12, cs: 5, min: 1080}},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", stats: {mp: 11, g: 1, a: 0}}
            ],
            "rca": [
                {n:"أنس الزنيتي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", stats: {mp: 10, cs: 4, min: 900}}
            ]
        }
    };

    // ==================== 2. المحرك (Engine) ====================

    // دالة لحساب الترتيب تلقائياً
    function calculateStandings() {
        // 1. نسخ الحالة المبدئية
        let liveStandings = JSON.parse(JSON.stringify(DB.initialStandings));

        // 2. المرور على كل المباريات وإضافة النتائج
        Object.keys(DB.matches).forEach(round => {
            DB.matches[round].forEach(m => {
                if (m.played && m.s.includes('-')) {
                    const score = m.s.split('-').map(Number); // [3, 0]
                    const t1 = m.t1;
                    const t2 = m.t2;
                    
                    // تحديث الأهداف ولعب المباريات
                    if(liveStandings[t1]) {
                        liveStandings[t1].p += 1;
                        liveStandings[t1].gf += score[0];
                        liveStandings[t1].ga += score[1];
                    }
                    if(liveStandings[t2]) {
                        liveStandings[t2].p += 1;
                        liveStandings[t2].gf += score[1];
                        liveStandings[t2].ga += score[0];
                    }

                    // تحديث الفوز والتعادل والخسارة
                    if (score[0] > score[1]) { // t1 فاز
                        if(liveStandings[t1]) liveStandings[t1].w += 1;
                        if(liveStandings[t2]) liveStandings[t2].l += 1;
                    } else if (score[0] < score[1]) { // t2 فاز
                        if(liveStandings[t1]) liveStandings[t1].l += 1;
                        if(liveStandings[t2]) liveStandings[t2].w += 1;
                    } else { // تعادل
                        if(liveStandings[t1]) liveStandings[t1].d += 1;
                        if(liveStandings[t2]) liveStandings[t2].d += 1;
                    }
                }
            });
        });

        // 3. تحويل الكائن إلى مصفوفة للترتيب
        return Object.keys(liveStandings).map(teamId => {
            const t = liveStandings[teamId];
            return {
                id: teamId,
                ...t,
                pts: (t.w * 3) + t.d,
                gd: t.gf - t.ga
            };
        }).sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.w - a.w);
    }

    function renderStandings() {
        const sorted = calculateStandings(); // استخدام الدالة الحسابية

        let rows = '';
        sorted.forEach((row, index) => {
            const team = DB.teams[row.id] || {name: row.id, logo: ""};
            const rank = index + 1;
            let badgeColor = rank <= 2 ? '#d4edda' : rank >= 15 ? '#f8d7da' : '#f8f9fa';
            let textColor = rank <= 2 ? '#155724' : rank >= 15 ? '#721c24' : '#666';

            rows += `
                <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:12px;text-align:center;"><span style="background:${badgeColor};color:${textColor};width:25px;height:25px;border-radius:50%;display:inline-block;line-height:25px;font-weight:bold;font-size:12px;">${rank}</span></td>
                    <td style="padding:12px;text-align:right;">
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
                <div class="eb-card-header">📊 الترتيب العام (محدث تلقائياً)</div>
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

    // دالة عرض اللاعبين التفاعلية (Popup Modal)
    function renderPlayers(teamId) {
        const players = DB.players[teamId];
        if (!players || players.length === 0) return '';

        let pGrid = players.map((p, idx) => `
            <div onclick="showPlayerStats('${teamId}', ${idx})" style="text-align:center; border:1px solid #eee; border-radius:8px; padding:8px; background:#fcfcfc; cursor:pointer; transition:transform 0.2s;">
                <div style="height:100px; overflow:hidden; border-radius:5px; margin-bottom:5px; background:#f0f0f0;">
                    <img src="${p.img}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div style="font-weight:bold; font-size:12px;">${p.n}</div>
                <div style="font-size:10px; color:#888;">${p.p}</div>
            </div>
        `).join('');

        return `
            <div class="eb-card">
                <div class="eb-card-header">👥 تشكيلة الفريق (اضغط على اللاعب)</div>
                <div style="padding:15px; display:grid; grid-template-columns:repeat(auto-fill, minmax(100px, 1fr)); gap:10px;">
                    ${pGrid}
                </div>
            </div>
            <!-- نافذة منبثقة (Modal) -->
            <div id="playerModal" class="eb-modal" onclick="closeModal(event)">
                <div class="eb-modal-content">
                    <span class="eb-close" onclick="document.getElementById('playerModal').style.display='none'">&times;</span>
                    <div id="playerDetails"></div>
                </div>
            </div>
        `;
    }
    
    // دالة مساعدة لفتح المودال (يجب أن تكون global)
    window.showPlayerStats = function(teamId, playerIdx) {
        const p = DB.players[teamId][playerIdx];
        const stats = p.stats || {};
        const html = `
            <div style="text-align:center;">
                <img src="${p.img}" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:4px solid #5e72e4;margin-bottom:15px;">
                <h2 style="color:#32325d;margin-bottom:5px;">${p.n}</h2>
                <p style="color:#888;margin-bottom:20px;">${p.p}</p>
                
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;text-align:center;">
                    <div style="background:#f8f9fa;padding:10px;border-radius:8px;">
                        <div style="font-size:20px;font-weight:bold;color:#5e72e4;">${stats.mp || 0}</div>
                        <div style="font-size:12px;color:#666;">مباريات</div>
                    </div>
                    <div style="background:#f8f9fa;padding:10px;border-radius:8px;">
                        <div style="font-size:20px;font-weight:bold;color:#2dce89;">${stats.g || stats.cs || 0}</div>
                        <div style="font-size:12px;color:#666;">${p.p.includes('حارس') ? 'شباك نظيفة' : 'أهداف'}</div>
                    </div>
                    <div style="background:#f8f9fa;padding:10px;border-radius:8px;">
                        <div style="font-size:20px;font-weight:bold;color:#11cdef;">${stats.a || 0}</div>
                        <div style="font-size:12px;color:#666;">تمريرات</div>
                    </div>
                    <div style="background:#f8f9fa;padding:10px;border-radius:8px;">
                        <div style="font-size:20px;font-weight:bold;color:#fb6340;">${stats.min || 0}</div>
                        <div style="font-size:12px;color:#666;">دقائق لعب</div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('playerDetails').innerHTML = html;
        document.getElementById('playerModal').style.display = 'flex';
    };

    window.closeModal = function(e) {
        if(e.target.id === 'playerModal') {
            document.getElementById('playerModal').style.display = 'none';
        }
    };

    // ... (دالة renderMatches و renderTransfers تبقى كما هي من الكود السابق) ...
    function renderMatches() { /* ... استخدم نفس دالة المباريات السابقة ... */ 
        const round = DB.config.currentRound;
        const matches = DB.matches[round] || [];
        let mHtml = matches.length === 0 ? '<div style="padding:20px;text-align:center;">لا توجد مباريات</div>' : matches.map(m => `
             <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border-bottom:1px solid #f0f0f0;">
                <div style="text-align:center;width:30%;"><img src="${DB.teams[m.t1]?.logo}" style="width:25px;"> <br> <small>${DB.teams[m.t1]?.name}</small></div>
                <div style="text-align:center;width:40%;"><div style="background:#eee;padding:2px 8px;border-radius:10px;font-weight:bold;">${m.s}</div><small>${m.d}</small></div>
                <div style="text-align:center;width:30%;"><img src="${DB.teams[m.t2]?.logo}" style="width:25px;"> <br> <small>${DB.teams[m.t2]?.name}</small></div>
            </div>
        `).join('');
        return `<div class="eb-card"><div class="eb-card-header">📅 مباريات الجولة ${round}</div><div>${mHtml}</div></div>`;
    }

    function renderTransfers(teamId) { /* ... استخدم نفس دالة الانتقالات السابقة ... */ 
        const tr = DB.transfers[teamId];
        if (!tr || tr.length === 0) return '';
        let tRows = tr.map(t => `<div style="padding:10px;border-bottom:1px solid #eee;">${t.type==='in'?'🟢':'🔴'} <b>${t.n}</b> <small>${t.type==='in'?'من':'إلى'} ${t.type==='in'?t.from:t.to}</small></div>`).join('');
        return `<div class="eb-card"><div class="eb-card-header">⇄ الميركاتو</div><div>${tRows}</div></div>`;
    }

    // دالة العرض الرئيسية
    window.renderAll = function() {
        const app = document.getElementById('botola-app');
        if(!app) return;
        const teamId = app.getAttribute('data-team') || 'wac';
        const team = DB.teams[teamId];

        let html = `
            <div class="eb-card" style="text-align:center;padding:30px 20px;">
                <img src="${team.logo}" style="width:70px;">
                <h1 style="font-size:22px;color:#32325d;">${team.name}</h1>
            </div>
            <div class="eb-grid-layout">
                <div class="eb-col">${renderStandings()} ${renderPlayers(teamId)}</div>
                <div class="eb-col">${renderMatches()} ${renderTransfers(teamId)}</div>
            </div>
        `;

        // حقن الستايل (CSS) للمودال
        if(!document.getElementById('js-styles')) {
            const style = document.createElement('style');
            style.id = 'js-styles';
            style.textContent = `
                .eb-card { background:#fff; border-radius:12px; box-shadow:0 4px 6px rgba(50,50,93,0.11); margin-bottom:20px; overflow:hidden; }
                .eb-card-header { padding:15px; border-bottom:1px solid #f0f0f0; font-weight:bold; background:#fff; }
                .eb-grid-layout { display:grid; grid-template-columns: 2fr 1fr; gap:20px; }
                /* ستايل المودال (Popup) */
                .eb-modal { display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); align-items:center; justify-content:center; }
                .eb-modal-content { background-color:#fff; margin:auto; padding:20px; border-radius:15px; width:90%; max-width:400px; position:relative; animation: slideUp 0.3s ease; }
                .eb-close { position:absolute; top:10px; right:15px; font-size:28px; font-weight:bold; cursor:pointer; color:#aaa; }
                @keyframes slideUp { from {transform:translateY(20px);opacity:0;} to {transform:translateY(0);opacity:1;} }
                @media (max-width: 768px) { .eb-grid-layout { grid-template-columns: 1fr; } .hide-mobile { display:none !important; } }
            `;
            document.head.appendChild(style);
        }
        app.innerHTML = html;
    };

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.renderAll);
    } else {
        window.renderAll();
    }
})();
