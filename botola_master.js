(function() {
    'use strict';

    // 1. قاعدة البيانات المركزية (تعدلها مرة واحدة هنا فتتغير في كل الصفحات)
    const DB = {
        teams: {
            "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png" },
            "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
            "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
            "mas": { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
            "rsb": { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
            "irt": { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
            "fus": { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
            "uts": { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
            "husa": { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
            "ocs": { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" },
            "rcz": { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" },
            "dhj": { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" },
            "codm": { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
            "od": { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png" },
            "kacm": { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png" },
            "usym": { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png" }
        },
        
        // الترتيب (يتم التحكم به يدوياً)
        standings: [
            { id: "far", pts: 21, w: 6, d: 3, l: 0, gf: 15, ga: 5 },
            { id: "wac", pts: 20, w: 6, d: 2, l: 1, gf: 13, ga: 5 },
            { id: "dhj", pts: 17, w: 5, d: 2, l: 2, gf: 8, ga: 3 },
            { id: "rsb", pts: 16, w: 5, d: 1, l: 2, gf: 7, ga: 0 },
            { id: "mas", pts: 15, w: 4, d: 3, l: 2, gf: 3, ga: 0 },
            { id: "rca", pts: 14, w: 3, d: 5, l: 1, gf: 2, ga: 0 },
            { id: "fus", pts: 13, w: 3, d: 4, l: 2, gf: 1, ga: 0 },
            { id: "uts", pts: 12, w: 3, d: 3, l: 3, gf: 0, ga: 0 },
            { id: "irt", pts: 11, w: 2, d: 5, l: 2, gf: 0, ga: 1 },
            { id: "husa", pts: 10, w: 2, d: 4, l: 3, gf: 0, ga: 2 },
            { id: "codm", pts: 9, w: 2, d: 3, l: 4, gf: 0, ga: 3 },
            { id: "ocs", pts: 8, w: 2, d: 2, l: 5, gf: 0, ga: 4 },
            { id: "rcz", pts: 7, w: 1, d: 4, l: 4, gf: 0, ga: 5 },
            { id: "od", pts: 6, w: 1, d: 3, l: 5, gf: 0, ga: 6 },
            { id: "kacm", pts: 5, w: 1, d: 2, l: 6, gf: 0, ga: 7 },
            { id: "usym", pts: 4, w: 0, d: 4, l: 5, gf: 0, ga: 8 }
        ],

        // قاعدة بيانات المباريات الكاملة
        matches: {
            "1": [ {t1:"wac", t2:"mas", s:"1-0", st:"دونور"}, {t1:"rca", t2:"far", s:"0-0", st:"الزاولي"} ],
            "2": [ {t1:"irt", t2:"wac", s:"2-2", st:"طنجة"}, {t1:"far", t2:"codm", s:"3-1", st:"القنيطرة"} ],
            "12": [
                {t1:"wac", t2:"rsb", s:"3-1", st:"الزاولي"},
                {t1:"far", t2:"rca", s:"1-1", st:"القنيطرة"},
                {t1:"mas", t2:"irt", s:"-", st:"الحسن الثاني"},
                {t1:"fus", t2:"od", s:"-", st:"مولاي الحسن"} // الدشيرة هنا
            ]
        }
    };

    // 2. المنطق (الدوال)
    window.BotolaEngine = {
        renderStandings: function(containerId, activeTeamId) {
            const container = document.getElementById(containerId);
            if(!container) return;
            
            const sorted = DB.standings.sort((a, b) => b.pts - a.pts || (b.gf-b.ga) - (a.gf-a.ga));
            
            let rows = sorted.map((row, index) => {
                const team = DB.teams[row.id] || {name: row.id, logo: ""};
                const rank = index + 1;
                const isActive = row.id === activeTeamId; // هل هذا هو الفريق الحالي؟
                
                // تلوين الصف النشط
                let bgStyle = isActive ? "background-color:#e0f7fa !important;" : "";
                
                // ألوان الرتب
                let rankColor = '#eee';
                if(rank<=2) rankColor='#2dce89'; else if(rank===3) rankColor='#11cdef'; else if(rank>=15) rankColor='#f5365c';
                
                return `
                <tr style="border-bottom:1px solid #f0f0f0; ${bgStyle}">
                    <td style="padding:10px;text-align:center;"><span style="background:${rankColor};color:#fff;width:20px;height:20px;border-radius:50%;display:inline-block;font-size:11px;">${rank}</span></td>
                    <td style="padding:10px;"><img src="${team.logo}" style="width:20px;vertical-align:middle;"> <small>${team.name}</small></td>
                    <td style="padding:10px;text-align:center;">${row.w+row.d+row.l}</td>
                    <td style="padding:10px;text-align:center;font-weight:bold;color:#5e72e4;">${row.pts}</td>
                </tr>`;
            }).join('');

            container.innerHTML = `
            <div style="background:#fff;border-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,0.05);overflow:hidden;">
                <div style="padding:10px;background:#f6f9fc;font-weight:bold;font-size:13px;">📊 الترتيب العام</div>
                <table style="width:100%;border-collapse:collapse;font-size:12px;">
                    <thead style="background:#fff;color:#888;"><tr><th>#</th><th style="text-align:right;">الفريق</th><th>ل</th><th>ن</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
        },

        renderTeamMatches: function(containerId, teamId) {
            const container = document.getElementById(containerId);
            if(!container) return;

            // الفلترة الذكية: ابحث عن المباريات التي يلعب فيها هذا الفريق
            let myMatches = [];
            Object.keys(DB.matches).forEach(round => {
                DB.matches[round].forEach(m => {
                    if(m.t1 === teamId || m.t2 === teamId) {
                        myMatches.push({...m, round: round});
                    }
                });
            });

            // ترتيب المباريات حسب الجولة
            myMatches.sort((a,b) => parseInt(a.round) - parseInt(b.round));

            let html = myMatches.map(m => {
                const t1 = DB.teams[m.t1];
                const t2 = DB.teams[m.t2];
                return `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;border-bottom:1px solid #eee;">
                    <div style="font-size:10px;color:#888;">ج${m.round}</div>
                    <div style="display:flex;align-items:center;gap:5px;width:35%;justify-content:flex-end;">
                        <span style="font-size:11px;">${t1.name}</span><img src="${t1.logo}" style="width:20px;">
                    </div>
                    <div style="background:#5e72e4;color:#fff;padding:2px 8px;border-radius:5px;font-size:12px;">${m.s}</div>
                    <div style="display:flex;align-items:center;gap:5px;width:35%;justify-content:flex-start;">
                        <img src="${t2.logo}" style="width:20px;"><span style="font-size:11px;">${t2.name}</span>
                    </div>
                </div>`;
            }).join('');

            if(html === '') html = '<div style="padding:20px;text-align:center;">لا توجد مباريات مسجلة</div>';

            container.innerHTML = `
            <div style="background:#fff;border-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,0.05);overflow:hidden;margin-top:20px;">
                <div style="padding:10px;background:#f6f9fc;font-weight:bold;font-size:13px;">📅 مباريات الفريق</div>
                <div>${html}</div>
            </div>`;
        },
        
        // دالة التهيئة (Initialize)
        init: function(teamId) {
            this.renderStandings('standings-container', teamId);
            this.renderTeamMatches('matches-container', teamId);
        }
    };
})();
