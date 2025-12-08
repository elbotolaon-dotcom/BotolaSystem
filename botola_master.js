/* ==========================================================================
   BOTOLA PRO ULTIMATE SYSTEM V12.0 (Matches + Transfers + Interactive Squad)
   ========================================================================== */

/* 1. قاعدة البيانات (DATABASE) */
const BOTOLA_DB = {
    teams: {
        "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء" },
        "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء" },
        "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", city: "الرباط" },
        // ... (يمكنك إضافة باقي الفرق هنا)
        "mas": { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", founded: "1946", city: "فاس" },
        "rsb": { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", founded: "1938", city: "بركان" },
        "codm": { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", founded: "1962", city: "مكناس" },
        "irt": { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", founded: "1983", city: "طنجة" },
        "ocs": { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", founded: "1921", city: "آسفي" },
        "fus": { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", founded: "1946", city: "الرباط" },
        "uts": { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", founded: "1969", city: "الرباط" },
        "husa": { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", founded: "1946", city: "أكادير" },
        "dhj": { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", founded: "1956", city: "الجديدة" },
        "od": { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", founded: "1940", city: "الدشيرة" },
        "rcz": { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", founded: "1977", city: "الزمامرة" },
        "kacm": { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", founded: "1947", city: "مراكش" },
        "usym": { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", founded: "1988", city: "الرباط" }
    },

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

    // بيانات مفصلة لكل فريق (لاعبين، مباريات، انتقالات)
    teamDetails: {
        "wac": {
            // اللاعبين مع إحصائياتهم
            squad: [
               {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, y:0, r:0},
               {n:"جمال حركاس", p:"دفاع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLwK5j1oH-4M5Zq0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/%D8%AC%D9%85%D8%A7%D9%84%20%D8%AD%D8%B1%D9%83%D8%A7%D8%B3.png", m:8, y:1, r:0},
               {n:"مباي نيانغ", p:"هجوم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtyFGW1x-E7l2vd22J20Qy1V1dsw65PNBv1A9jfrUy53wNe05DOZhwAJbYX5WUiEH_yzc3iPEdKsRK_XY-V7GXzOqOrGX3yek3Rg4PzQw7tsPn4sCft-vVULn15-eQ5yCivDEVNNND_qh-yTaUeBXRQRBK6DFOcSG7NTaNJsjzbHAA8SQDE5_Ix7_ind8/s1600/niang.png", m:5, y:0, r:0}
            ],
            // جدول المباريات
            matches: [
                {r:7, d:"05/11", opp:"husa", s:"1-2", ven:"أكادير (خ)"},
                {r:8, d:"09/11", opp:"ocs", s:"1-2", ven:"آسفي (خ)"},
                {r:9, d:"22/11", opp:"mas", s:"-", ven:"الدار البيضاء (د)"}
            ],
            // الانتقالات
            transfers: [
                {n:"زاكارياس غيلان", from:"نهضة الزمامرة", type:"انتقال", date:"23-11"},
                {n:"حكيم زياش", from:"غلطة سراي", type:"إعارة", date:"01-01"}
            ]
        },
        "rca": { squad: [], matches: [], transfers: [] },
        "far": { squad: [], matches: [], transfers: [] }
    }
};

/* 2. الستايل (CSS) - التصميم الفخم */
const ultimateStyles = `
<style>
    /* RESET & FONTS */
    #elbotolaon-widget-container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #fff; color: #333; direction: rtl; text-align: right; width: 100%; box-sizing: border-box; }
    #elbotolaon-widget-container * { box-sizing: border-box; }

    /* SECTIONS */
    .eb-section { margin-bottom: 25px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
    .eb-header { padding: 15px 20px; border-bottom: 2px solid #f5f5f5; display: flex; align-items: center; justify-content: space-between; background: #fafafa; }
    .eb-title { font-size: 18px; font-weight: 700; border-right: 5px solid #d2151e; padding-right: 12px; margin: 0; color: #333; }

    /* HEADER */
    .eb-team-header { padding: 25px; display: flex; align-items: center; gap: 20px; background: #fff; flex-wrap: wrap; }
    .eb-team-logo { width: 90px; height: 90px; object-fit: contain; }

    /* STANDINGS TABLE (SMART & BEAUTIFUL) */
    .eb-scroll { width: 100%; overflow-x: auto; }
    table.ranking-table { width: 100%; border-collapse: collapse; min-width: 600px; }
    table.ranking-table th { background: #f9f9f9; padding: 15px 10px; text-align: center; font-weight: 700; border-bottom: 2px solid #eee; color: #555; }
    table.ranking-table td { padding: 10px; text-align: center; border-bottom: 1px solid #f5f5f5; color: #444; }
    
    .team-cell { text-align: right !important; display: flex; align-items: center; gap: 10px; font-weight: 600; width: 35%; }
    .team-mini-logo { width: 25px; height: 25px; }
    
    /* RANK BADGES & COLORS */
    .rank-badge { display: inline-block; width: 26px; height: 26px; line-height: 26px; border-radius: 50%; color: #fff; font-size: 13px; font-weight: bold; background: #ccc; }
    
    /* Highlight Classes (Dynamic) */
    .row-ucl { background-color: #e6ffe6 !important; } /* أخضر للمتصدرين */
    .row-ucl .rank-badge { background: #28a745; }
    .row-rel { background-color: #ffe6e6 !important; } /* أحمر للهبوط */
    .row-rel .rank-badge { background: #dc3545; }

    /* Current Team Border Highlight */
    .current-team-border { border: 2px solid #d2151e !important; background-color: #fff9db !important; }

    /* INTERACTIVE SQUAD (ACCORDION) */
    .squad-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; padding: 20px; }
    .squad-card { border: 1px solid #eee; border-radius: 8px; cursor: pointer; transition: 0.3s; position: relative; overflow: hidden; background: #fff; }
    .squad-card:hover { border-color: #d2151e; }
    .card-head { padding: 10px; display: flex; align-items: center; gap: 15px; }
    .p-img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #eee; }
    .p-info h4 { margin: 0; font-size: 15px; }
    .p-info span { font-size: 12px; color: #777; }
    .card-details { display: none; background: #fdfdfd; padding: 10px; border-top: 1px solid #eee; font-size: 13px; color: #555; }
    .card-details div { margin-bottom: 5px; }
    .squad-card.active .card-details { display: block; animation: slideDown 0.3s; }
    .squad-card.active { border-color: #d2151e; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    
    @keyframes slideDown { from {opacity:0; transform:translateY(-10px);} to {opacity:1; transform:translateY(0);} }

    /* MATCHES TABLE */
    .match-row { display: flex; align-items: center; padding: 12px; border-bottom: 1px solid #f0f0f0; }
    .m-date { width: 60px; font-size: 12px; font-weight: bold; color: #555; text-align: center; border-left: 1px solid #eee; }
    .m-teams { flex: 1; padding: 0 15px; display: flex; justify-content: space-between; font-weight: 600; }
    .m-score { background: #eee; padding: 3px 10px; border-radius: 4px; font-size: 14px; }
    .m-ven { font-size: 11px; color: #999; }

    /* TRANSFERS TABLE */
    table.transfers-table { width: 100%; font-size: 14px; }
    table.transfers-table td { padding: 10px; border-bottom: 1px solid #eee; }
    .t-type { color: #28a745; font-weight: bold; font-size: 12px; }

    @media (max-width: 768px) {
        .hide-mobile { display: none !important; }
        .col-team { width: 60%; }
        .squad-grid { grid-template-columns: 1fr; }
    }
</style>
`;

/* 3. المنطق (LOGIC) */
document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.getElementById("botola-app") || document.getElementById("team-app");
    if(!appContainer) return;

    const currentTeamId = appContainer.getAttribute("data-team");
    const tInfo = BOTOLA_DB.teams[currentTeamId];
    const tDetails = BOTOLA_DB.teamDetails[currentTeamId] || { squad: [], matches: [], transfers: [] };

    // 1. ترتيب الجدول
    const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => (b.pts - a.pts) || ((b.gf - b.ga) - (a.gf - a.ga)));

    let html = ultimateStyles + '<div id="elbotolaon-widget-container">';

    // A. HEADER
    html += `
    <div class="eb-section">
        <div class="eb-team-header">
            <img src="${tInfo.logo}" class="eb-team-logo">
            <div>
                <h1 style="margin:0; color:#d2151e;">${tInfo.name}</h1>
                <p style="margin:5px 0; color:#666;">التأسيس: ${tInfo.founded} | المدينة: ${tInfo.city}</p>
            </div>
        </div>
    </div>`;

    // B. STANDINGS (الجدول الملون والمميز)
    html += `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">جدول الترتيب</h3></div>
        <div class="eb-scroll">
            <table class="ranking-table">
                <thead><tr><th>#</th><th>الفريق</th><th>لعب</th><th class="hide-mobile">+/-</th><th>ن</th></tr></thead>
                <tbody>`;
    sortedStandings.forEach((row, index) => {
        const rank = index + 1;
        const teamData = BOTOLA_DB.teams[row.id];
        let rClass = "";
        
        // الألوان (الأخضر للمتصدرين)
        if (rank <= 2) rClass = "row-ucl";
        else if (rank >= 15) rClass = "row-rel";

        // الإطار الأحمر للفريق الحالي
        if (row.id === currentTeamId) rClass += " current-team-border";

        html += `
        <tr class="${rClass}">
            <td><span class="rank-badge">${rank}</span></td>
            <td class="team-cell"><img src="${teamData.logo}" class="team-mini-logo"> ${teamData.name}</td>
            <td>${row.p}</td>
            <td class="hide-mobile">${row.gf - row.ga}</td>
            <td style="font-weight:bold;">${row.pts}</td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;

    // C. MATCHES (جدول المباريات)
    if(tDetails.matches.length > 0) {
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">المباريات القادمة والسابقة</h3></div><div>`;
        tDetails.matches.forEach(m => {
            const oppTeam = BOTOLA_DB.teams[m.opp] ? BOTOLA_DB.teams[m.opp].name : m.opp;
            html += `
            <div class="match-row">
                <div class="m-date">${m.d}<br>الجولة ${m.r}</div>
                <div class="m-teams">
                    <span>${tInfo.name}</span>
                    <span class="m-score">${m.s}</span>
                    <span>${oppTeam}</span>
                </div>
                <div class="m-ven hide-mobile">${m.ven}</div>
            </div>`;
        });
        html += `</div></div>`;
    }

    // D. TRANSFERS (جدول الانتقالات)
    if(tDetails.transfers.length > 0) {
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">سوق الانتقالات</h3></div>
        <table class="transfers-table"><tbody>`;
        tDetails.transfers.forEach(t => {
            html += `<tr><td>${t.n}</td><td style="color:#666">من: ${t.from}</td><td class="t-type">${t.type}</td></tr>`;
        });
        html += `</tbody></table></div>`;
    }

    // E. INTERACTIVE SQUAD (التشكيلة التفاعلية)
    if(tDetails.squad.length > 0) {
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">تشكيلة الفريق</h3></div><div class="squad-grid">`;
        tDetails.squad.forEach((p, idx) => {
            html += `
            <div class="squad-card" onclick="this.classList.toggle('active')">
                <div class="card-head">
                    <img src="${p.img}" class="p-img" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="p-info"><h4>${p.n}</h4><span>${p.p}</span></div>
                </div>
                <div class="card-details">
                    <div>مباريات: <strong>${p.m || 0}</strong></div>
                    <div>بطاقات صفراء: <strong>${p.y || 0}</strong></div>
                    <div>بطاقات حمراء: <strong>${p.r || 0}</strong></div>
                </div>
            </div>`;
        });
        html += `</div></div>`;
    }

    html += `</div>`;
    appContainer.innerHTML = html;
});
