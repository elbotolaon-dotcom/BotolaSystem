/* ==========================================================================
   BOTOLA PRO MASTER SYSTEM - V10.0 (Hybrid: Dynamic Table + Full Squad)
   ========================================================================== */

/* 1. قاعدة البيانات المركزية (تعدل هنا فقط) */
const BOTOLA_DB = {
    // أ) بيانات الفرق الثابتة (الشعارات، الأسماء)
    teams: {
        "wac": { name: "الوداد الرياضي", short: "الوداد", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء" },
        "rca": { name: "الرجاء الرياضي", short: "الرجاء", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء" },
        "far": { name: "الجيش الملكي", short: "الجيش", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", city: "الرباط" },
        "mas": { name: "المغرب الفاسي", short: "الماص", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", founded: "1946", city: "فاس" },
        "rsb": { name: "نهضة بركان", short: "بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", founded: "1938", city: "بركان" },
        "codm": { name: "النادي المكناسي", short: "مكناس", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", founded: "1962", city: "مكناس" },
        "irt": { name: "اتحاد طنجة", short: "طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", founded: "1983", city: "طنجة" },
        "ocs": { name: "أولمبيك آسفي", short: "آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", founded: "1921", city: "آسفي" },
        "fus": { name: "الفتح الرياضي", short: "الفتح", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", founded: "1946", city: "الرباط" },
        "uts": { name: "إتحاد تواركة", short: "تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", founded: "1969", city: "الرباط" },
        "husa": { name: "حسنية أكادير", short: "أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", founded: "1946", city: "أكادير" },
        "dhj": { name: "الدفاع الجديدي", short: "الجديدة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", founded: "1956", city: "الجديدة" },
        "od": { name: "أولمبيك الدشيرة", short: "الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", founded: "1940", city: "الدشيرة" },
        "rcz": { name: "نهضة الزمامرة", short: "الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", founded: "1977", city: "الزمامرة" },
        "kacm": { name: "الكوكب المراكشي", short: "الكوكب", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", founded: "1947", city: "مراكش" },
        "usym": { name: "يعقوب المنصور", short: "المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", founded: "1988", city: "الرباط" }
    },

    // ب) جدول الترتيب (ديناميكي) - عدل النقاط هنا فقط
    standings: [
        { id: "wac",  p: 8, w: 6, d: 2, l: 0, gf: 14, ga: 5,  pts: 20 },
        { id: "far",  p: 8, w: 5, d: 3, l: 0, gf: 14, ga: 1,  pts: 18 },
        { id: "mas",  p: 8, w: 4, d: 4, l: 0, gf: 11, ga: 2,  pts: 16 },
        { id: "rca",  p: 7, w: 4, d: 3, l: 0, gf: 7,  ga: 1,  pts: 15 },
        { id: "codm", p: 8, w: 3, d: 3, l: 2, gf: 6,  ga: 6,  pts: 12 },
        { id: "rsb",  p: 6, w: 3, d: 2, l: 1, gf: 13, ga: 7,  pts: 11 },
        { id: "od",   p: 8, w: 3, d: 2, l: 3, gf: 8,  ga: 9,  pts: 11 },
        { id: "dhj",  p: 8, w: 2, d: 3, l: 3, gf: 6,  ga: 11, pts: 9 },
        { id: "irt",  p: 8, w: 1, d: 5, l: 2, gf: 7,  ga: 11, pts: 8 },
        { id: "rcz",  p: 7, w: 2, d: 2, l: 3, gf: 5,  ga: 9,  pts: 8 },
        { id: "husa", p: 8, w: 2, d: 1, l: 5, gf: 6,  ga: 14, pts: 7 },
        { id: "kacm", p: 8, w: 2, d: 1, l: 5, gf: 8,  ga: 9,  pts: 7 },
        { id: "fus",  p: 8, w: 2, d: 1, l: 5, gf: 7,  ga: 10, pts: 7 },
        { id: "usym", p: 8, w: 1, d: 3, l: 4, gf: 8,  ga: 11, pts: 6 },
        { id: "uts",  p: 8, w: 0, d: 5, l: 3, gf: 7,  ga: 12, pts: 5 },
        { id: "ocs",  p: 8, w: 1, d: 2, l: 5, gf: 6,  ga: 15, pts: 5 }
    ],

    // ج) بيانات اللاعبين والمباريات (لكل فريق)
    // هذا الجزء هو الذي يجعل كل صفحة مختلفة عن الأخرى
    teamDetails: {
        "wac": {
            squad: [
               {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png"},
               {n:"جمال حركاس", p:"دفاع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLwK5j1oH-4M5Zq0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/%D8%AC%D9%85%D8%A7%D9%84%20%D8%AD%D8%B1%D9%83%D8%A7%D8%B3.png"}
               // ... أضف باقي لاعبي الوداد هنا
            ],
            matches: [
               {d:"09/11", t:"16:00", opp:"ocs", s:"2-1", venue:"خارج"}
               // ... أضف المباريات هنا
            ]
        },
        "rca": {
            squad: [], // ضع لاعبي الرجاء هنا
            matches: [] // ضع مباريات الرجاء هنا
        }
        // ... وهكذا لـ 16 فريق
    }
};

/* 2. كود العرض (البرمجة) */
document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.getElementById("botola-app");
    if (!appContainer) return;

    // معرفة أي فريق نعرض (من الكود في بلوجر data-team="wac")
    const currentTeamId = appContainer.getAttribute("data-team");
    const currentTeamInfo = BOTOLA_DB.teams[currentTeamId];
    const currentTeamDetails = BOTOLA_DB.teamDetails[currentTeamId] || { squad: [], matches: [] };

    // 1. فرز الجدول ديناميكياً
    const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts; // حسب النقاط
        return (b.gf - b.ga) - (a.gf - a.ga); // ثم فارق الأهداف
    });

    // 2. بناء الـ HTML
    let html = `
    <style>
        /* ستايلات سريعة لضمان المظهر */
        .eb-app { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; direction: rtl; text-align: right; color: #333; }
        .eb-header-box { background: #fdfdfd; padding: 20px; border: 1px solid #eee; margin-bottom: 20px; display: flex; align-items: center; gap: 20px; border-radius: 8px; }
        .eb-logo-lg { width: 80px; height: 80px; }
        .eb-section-title { border-right: 4px solid #d2151e; padding-right: 10px; margin: 20px 0 10px; font-size: 18px; font-weight: bold; }
        
        /* الجدول */
        .standings-table { width: 100%; border-collapse: collapse; font-size: 14px; background: #fff; border: 1px solid #eee; }
        .standings-table th { background: #f4f4f4; padding: 10px 5px; text-align: center; font-weight: bold; }
        .standings-table td { padding: 8px 5px; text-align: center; border-bottom: 1px solid #eee; }
        .col-team { text-align: right !important; display: flex; align-items: center; gap: 8px; }
        .team-mini-logo { width: 20px; height: 20px; }
        
        /* الألوان */
        .row-cl { background-color: #d1e7dd; border-right: 3px solid #198754; }
        .row-caf { background-color: #cfe2ff; border-right: 3px solid #0d6efd; }
        .row-rel { background-color: #f8d7da; border-right: 3px solid #dc3545; }
        .current-team-hl { background-color: #fff3cd !important; font-weight: bold; border: 2px solid #ffc107; }

        /* اللاعبين */
        .squad-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; }
        .player-card { border: 1px solid #eee; padding: 10px; text-align: center; border-radius: 6px; }
        .player-img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-bottom: 5px; }
    </style>

    <div class="eb-app">
        <!-- 1. معلومات الفريق (ديناميكي من data.js) -->
        <div class="eb-header-box">
            <img src="${currentTeamInfo.logo}" class="eb-logo-lg">
            <div>
                <h1 style="margin:0; color:#d2151e;">${currentTeamInfo.name}</h1>
                <p style="margin:5px 0; color:#666;">تأسس: ${currentTeamInfo.founded} | المدينة: ${currentTeamInfo.city}</p>
            </div>
        </div>

        <!-- 2. جدول الترتيب (الذكي) -->
        <div class="eb-section-title">جدول الترتيب المباشر</div>
        <div style="overflow-x:auto;">
            <table class="standings-table">
                <thead>
                    <tr><th>#</th><th>الفريق</th><th>لعب</th><th>+/-</th><th>ن</th></tr>
                </thead>
                <tbody>
    `;

    // حلقة تكرار لرسم الجدول
    sortedStandings.forEach((row, index) => {
        const rank = index + 1;
        const tInfo = BOTOLA_DB.teams[row.id];
        
        let rowClass = "";
        if (rank <= 2) rowClass = "row-cl";
        else if (rank === 3) rowClass = "row-caf";
        else if (rank >= 15) rowClass = "row-rel";

        if (row.id === currentTeamId) rowClass += " current-team-hl";

        html += `
            <tr class="${rowClass}">
                <td>${rank}</td>
                <td class="col-team">
                    <img src="${tInfo.logo}" class="team-mini-logo"> ${tInfo.short}
                </td>
                <td>${row.p}</td>
                <td>${row.gf - row.ga}</td>
                <td><strong>${row.pts}</strong></td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;

    // 3. عرض اللاعبين (إذا كانوا موجودين في الداتا)
    if (currentTeamDetails.squad.length > 0) {
        html += `<div class="eb-section-title">تشكيلة الفريق</div><div class="squad-grid">`;
        currentTeamDetails.squad.forEach(player => {
            html += `
                <div class="player-card">
                    <img src="${player.img}" class="player-img" onerror="this.src='https://via.placeholder.com/50'">
                    <div style="font-size:12px; font-weight:bold;">${player.n}</div>
                    <div style="font-size:11px; color:#666;">${player.p}</div>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `<div style="padding:20px; text-align:center; color:#999;">جاري إضافة اللاعبين...</div>`;
    }

    html += `</div>`; // إغلاق الحاوية
    appContainer.innerHTML = html;
});
