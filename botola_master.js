(function() {
    'use strict';

    // ==================== 1. قاعدة البيانات (دجنبر 2025) ====================
    const DB = {
        config: {
            currentRound: 12,
            season: "2025/2026"
        },

        teams: {
            "wac": { name: "الوداد الرياضي", founded: "1937", city: "الدار البيضاء", stadium: "دونور", manager: "محمد أمين بنهاشم", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png" },
            "rca": { name: "الرجاء الرياضي", founded: "1949", city: "الدار البيضاء", stadium: "العربي الزاولي", manager: "ريكاردو سا بينتو", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
            "far": { name: "الجيش الملكي", founded: "1958", city: "الرباط", stadium: "القنيطرة", manager: "هوبرت فيلود", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
            "mas": { name: "المغرب الفاسي", founded: "1946", city: "فاس", stadium: "الحسن الثاني", manager: "طارق السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
            "rsb": { name: "نهضة بركان", founded: "1938", city: "بركان", stadium: "البلدي", manager: "معين الشعباني", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
            "irt": { name: "اتحاد طنجة", founded: "1983", city: "طنجة", stadium: "ابن بطوطة", manager: "هلال الطير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
            "fus": { name: "الفتح الرياضي", founded: "1946", city: "الرباط", stadium: "مولاي الحسن", manager: "جمال السلامي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
            "uts": { name: "إتحاد تواركة", founded: "1969", city: "الرباط", stadium: "18 نونبر", manager: "عبد الواحد زمرات", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
            "husa": { name: "حسنية أكادير", founded: "1946", city: "أكادير", stadium: "أدرار", manager: "عبد الهادي السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
            "codm": { name: "النادي المكناسي", founded: "1962", city: "مكناس", stadium: "الشرفي", manager: "عبد العزيز كركاش", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
            "ocs": { name: "أولمبيك آسفي", founded: "1921", city: "آسفي", stadium: "المسيرة", manager: "زكرياء عبوب", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" },
            "dhj": { name: "الدفاع الجديدي", founded: "1956", city: "الجديدة", stadium: "العبدي", manager: "عبد الرحيم طاليب", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" },
            "rcz": { name: "نهضة الزمامرة", founded: "1977", city: "الزمامرة", stadium: "أحمد شكري", manager: "محمد أمين بنهاشم", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" },
            "od": { name: "أولمبيك الدشيرة", founded: "1940", city: "الدشيرة", stadium: "أحمد فانا", manager: "مصطفى أوشريف", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png" },
            "kacm": { name: "الكوكب المراكشي", founded: "1947", city: "مراكش", stadium: "مراكش الكبير", manager: "رضوان الحيمر", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png" },
            "usym": { name: "يعقوب المنصور", founded: "1989", city: "الرباط", stadium: "يعقوب المنصور", manager: "مهدي بنعطية", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png" }
        },

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
            { id: "codm", p: 12, w: 3, d: 4, l: 5, gf: 8, ga: 12 },
            { id: "ocs", p: 12, w: 3, d: 3, l: 6, gf: 10, ga: 15 },
            { id: "dhj", p: 12, w: 3, d: 3, l: 6, gf: 9, ga: 14 },
            { id: "rcz", p: 12, w: 3, d: 2, l: 7, gf: 8, ga: 16 },
            { id: "od", p: 12, w: 2, d: 5, l: 5, gf: 7, ga: 12 },
            { id: "kacm", p: 12, w: 2, d: 4, l: 6, gf: 6, ga: 13 },
            { id: "usym", p: 12, w: 1, d: 5, l: 6, gf: 5, ga: 12 }
        ],

        matches: {
            "12": [
                {d:"12/12", t:"18:00", t1:"wac", s:"-", t2:"rsb", st:"ملعب العربي الزاولي"},
                {d:"12/12", t:"20:00", t1:"far", s:"-", t2:"rca", st:"ملعب القنيطرة"},
                {d:"13/12", t:"16:00", t1:"mas", s:"-", t2:"irt", st:"ملعب الحسن الثاني"}
            ]
        },

        transfers: {
            "wac": [
                {n: "مباي نيانغ", type: "out", to: "الخالدية البحريني", price: "فسخ عقد"},
                {n: "حمزة الساخي", type: "in", from: "أجاكسيو", price: "حر"}
            ]
        },

        // 2. تحديث قسم اللاعبين (ليظهر لكل فريق)
        players: {
            "wac": [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png"},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif"}
            ],
            "rca": [
                {n:"أنس الزنيتي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif"}
            ]
        }
    };

    // ==================== دوال الرسم والمنطق ====================

    function renderStandings() {
        const sorted = DB.standings.map(t => {
            t.pts = (t.w * 3) + t.d;
            t.gd = t.gf - t.ga;
            return t;
        }).sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.gd !== a.gd) return b.gd - a.gd;
            return b.w - a.w;
        });

        let rows = '';
        sorted.forEach((row, index) => {
            const team = DB.teams[row.id] || {name: "Unknown", logo: ""};
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

    function renderTransfers(teamId) {
        const tr = DB.transfers[teamId];
        if (!tr || tr.length === 0) return ''; // إذا لم تكن هناك انتقالات، لا تعرض شيئاً

        let tRows = tr.map(t => {
            const color = t.type === 'in' ? '#2dce89' : '#f5365c';
            const arrow = t.type === 'in' ? '↙️' : '↗️';
            const label = t.type === 'in' ? `من: ${t.from}` : `إلى: ${t.to}`;
            
            return `
                <div style="display:flex;align-items:center;padding:10px;border-bottom:1px solid #f9f9f9;font-size:13px;">
                    <div style="width:3px;height:30px;background:${color};margin-left:8px;"></div>
                    <div style="flex:1;">
                        <div style="font-weight:bold;">${t.n}</div>
                        <div style="color:#666;font-size:11px;">${label}</div>
                    </div>
                    <div style="color:${color};background:${color}15;padding:2px 6px;border-radius:4px;font-size:10px;">
                        ${arrow} ${t.price}
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

    // دالة رسم اللاعبين (تمت إضافتها)
    function renderPlayers(teamId) {
        const players = DB.players[teamId];
        if (!players || players.length === 0) return '';

        let pGrid = players.map(p => `
            <div style="text-align:center; border:1px solid #eee; border-radius:8px; padding:8px; background:#fcfcfc;">
                <div style="height:100px; overflow:hidden; border-radius:5px; margin-bottom:5px; background:#f0f0f0;">
                    <img src="${p.img}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div style="font-weight:bold; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.n}</div>
                <div style="font-size:10px; color:#888;">${p.p}</div>
            </div>
        `).join('');

        return `
            <div class="eb-card">
                <div class="eb-card-header">👥 تشكيلة الفريق</div>
                <div style="padding:15px; display:grid; grid-template-columns:repeat(auto-fill, minmax(100px, 1fr)); gap:10px;">
                    ${pGrid}
                </div>
            </div>
        `;
    }

    window.renderAll = function() {
        const app = document.getElementById('botola-app');
        if(!app) return;

        const teamId = app.getAttribute('data-team') || 'wac';
        const team = DB.teams[teamId];

        // 1. بطاقة الفريق (الرأس)
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

        // 2. الشبكة الرئيسية (Grid Layout)
        html += `<div class="eb-grid-layout">`;
        
        // العمود الأيمن: الترتيب + اللاعبين
        html += `<div class="eb-col">
                    ${renderStandings()}
                    ${renderPlayers(teamId)}
                 </div>`;
        
        // العمود الأيسر: المباريات + الانتقالات
        html += `<div class="eb-col">
                    ${renderMatches()}
                    ${renderTransfers(teamId)}
                 </div>`;
        
        html += `</div>`;

        // حقن الستايل
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

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.renderAll);
    } else {
        window.renderAll();
    }

})();
