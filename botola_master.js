<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botola System V18</title>
</head>
<body style="font-family:Tahoma; background:#f4f4f4; margin:0; padding:20px;">

    <!-- 1. الشاشة (The Container) -->
    <div style="max-width:800px; margin:0 auto; background:#fff; padding:20px; border-radius:8px;">
        <div id="botola-app" data-team="wac"></div>
    </div>

    <!-- 2. الكود الكامل (Paste your FULL paste.txt content here) -->
    <script>
    // ==========================================
    // الصق هنا محتوى ملف paste.txt بالكامل
    // (من أول حرف إلى آخر حرف)
    // ==========================================
    
    /* 1. قاعدة البيانات الكاملة (DATABASE) */
    const BOTOLA_DB = {
        teams: {
            "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء" },
            "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء" },
            // ... (باقي البيانات كما في ملفك) ...
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
        rounds: {
            "7": [
                {d:"05/11", t:"16:00", t1:"husa", s:"1-2", t2:"wac", std:"ملعب أدرار"},
                {d:"05/11", t:"18:00", t1:"rca", s:"2-0", t2:"codm", std:"مركب محمد الخامس"}
            ],
            "8": [
                {d:"09/11", t:"16:00", t1:"ocs", s:"1-2", t2:"wac", std:"ملعب المسيرة"},
                {d:"09/11", t:"18:00", t1:"far", s:"1-0", t2:"mas", std:"مركب مولاي عبد الله"}
            ],
            "9": [
                {d:"22/11", t:"20:00", t1:"wac", s:"-", t2:"mas", std:"مركب محمد الخامس"}
            ]
        },
        teamDetails: {
            "wac": {
                squad: [
                   {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, y:0, r:0, g:0},
                   {n:"جمال حركاس", p:"دفاع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLwK5j1oH-4M5Zq0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/%D8%AC%D9%85%D8%A7%D9%84%20%D8%AD%D8%B1%D9%83%D8%A7%D8%B3.png", m:8, y:1, r:0, g:0},
                   {n:"نسيم الشاذلي", p:"هجوم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7bT27q75z0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/default.png", m:7, y:2, r:0, g:3}
                ],
                transfers: [
                    {n:"زاكارياس غيلان", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"}
                ]
            }
        }
    };
    
    // 2. الستايل المدمج الكامل (CSS)
    const stylesV18 = `
    <style>
        #elbotolaon-widget-container { font-family: 'Segoe UI', Tahoma, sans-serif !important; background: #fff !important; color: #333 !important; direction: rtl !important; text-align: right !important; width: 100% !important; box-sizing: border-box !important; }
        .eb-section { margin-bottom: 25px !important; border: 1px solid #eee !important; border-radius: 8px !important; overflow: hidden !important; background: #fff !important; }
        .eb-header { padding: 15px 20px !important; border-bottom: 2px solid #f5f5f5 !important; display: flex !important; align-items: center !important; justify-content: space-between !important; background: #fafafa !important; }
        .eb-title { font-size: 18px !important; font-weight: 700 !important; border-right: 5px solid #d2151e !important; padding-right: 12px !important; margin: 0 !important; color: #333 !important; }
        
        .eb-team-header { padding: 25px !important; display: flex !important; align-items: center !important; gap: 20px !important; background: #fff !important; flex-wrap: wrap !important; }
        .eb-team-logo { width: 90px !important; height: 90px !important; object-fit: contain !important; margin: 0 !important; }
        
        /* TABLE */
        .eb-scroll { width: 100% !important; overflow-x: auto !important; }
        table.ranking-table { width: 100% !important; border-collapse: collapse !important; min-width: 600px !important; margin: 0 !important; }
        table.ranking-table th { background: #f9f9f9 !important; padding: 10px 8px !important; text-align: center !important; font-weight: 700 !important; border-bottom: 2px solid #eee !important; color: #555 !important; white-space: nowrap !important; }
        table.ranking-table td { padding: 8px 8px !important; text-align: center !important; border-bottom: 1px solid #f5f5f5 !important; color: #444 !important; }
        
        /* LOGOS IN TABLE */
        img.team-mini-logo { width: 30px !important; height: 30px !important; object-fit: contain !important; display: inline-block !important; margin: 0 !important; vertical-align: middle !important; }
        .col-team { text-align: right !important; width: 40% !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; font-weight: 600 !important; }
        
        /* MATCHES */
        .match-row { display: flex !important; align-items: center !important; padding: 15px !important; border-bottom: 1px solid #f5f5f5 !important; flex-wrap: wrap !important; }
        .m-team img { width: 28px !important; height: 28px !important; vertical-align: middle !important; display: inline-block !important; }
        
        /* SQUAD */
        .squad-grid { display: grid !important; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; gap: 15px !important; padding: 20px !important; }
        .squad-card { border: 1px solid #eee !important; border-radius: 8px !important; background: #fff !important; cursor: pointer !important; overflow: hidden !important; display: block !important; }
        .squad-card img { width: 50px !important; height: 50px !important; border-radius: 50% !important; object-fit: cover !important; }
        .squad-card.active { border: 1px solid #d2151e !important; background: #fffafa !important; grid-row: span 2 !important; }
        .card-stats { display: none !important; border-top: 1px solid #eee !important; padding: 15px !important; }
        .squad-card.active .card-stats { display: block !important; }
    </style>
    `;
    
    // 3. المنطق (LOGIC)
    document.addEventListener("DOMContentLoaded", function() {
        const appContainer = document.getElementById("botola-app") || document.getElementById("team-app");
        if(!appContainer) return;
    
        const cTeamId = appContainer.getAttribute("data-team");
        const tInfo = BOTOLA_DB.teams[cTeamId] || BOTOLA_DB.teams["wac"];
        const tDetails = BOTOLA_DB.teamDetails[cTeamId] || { squad: [], transfers: [] };
    
        const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => (b.pts - a.pts) || ((b.gf - b.ga) - (a.gf - a.ga)));
    
        let html = stylesV18 + '<div id="elbotolaon-widget-container">';
    
        // Header
        html += `
        <div class="eb-section">
            <div class="eb-team-header">
                <img src="${tInfo.logo}" class="eb-team-logo">
                <div>
                    <h1 style="margin:0; color:#d2151e;">${tInfo.name}</h1>
                    <p style="margin:5px 0; color:#666;">تأسس: ${tInfo.founded} | المدينة: ${tInfo.city}</p>
                </div>
            </div>
        </div>`;
    
        // Standings
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">جدول الترتيب العام</h3></div>
            <div class="eb-scroll">
                <table class="ranking-table">
                    <thead><tr><th>#</th><th>الفريق</th><th>لعب</th><th>فاز</th><th>تعادل</th><th>خسر</th><th>+/-</th><th>ن</th></tr></thead>
                    <tbody>`;
        sortedStandings.forEach((row, index) => {
            const rank = index + 1;
            const teamData = BOTOLA_DB.teams[row.id];
            let hl = (row.id === cTeamId) ? "background:#fff9db; border:2px solid #d2151e;" : "";
            html += `
            <tr style="${hl}">
                <td>${rank}</td>
                <td class="col-team"><img src="${teamData.logo}" class="team-mini-logo"> ${teamData.name}</td>
                <td>${row.p}</td>
                <td>${row.w}</td>
                <td>${row.d}</td>
                <td>${row.l}</td>
                <td>${row.gf - row.ga}</td>
                <td style="font-weight:bold;">${row.pts}</td>
            </tr>`;
        });
        html += `</tbody></table></div></div>`;
    
        // Matches
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">مباريات الفريق</h3></div><div id="matchesBox" style="padding:10px;">سيتم عرض المباريات هنا...</div></div>`;
    
        // Squad
        if(tDetails.squad && tDetails.squad.length > 0) {
            html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">التشكيلة</h3></div><div class="squad-grid">`;
            tDetails.squad.forEach((p, idx) => {
                html += `
                <div class="squad-card" onclick="this.classList.toggle('active')">
                    <div style="padding:10px; display:flex; align-items:center;">
                        <img src="${p.img}">
                        <div style="margin-right:10px;"><b>${p.n}</b><br><small>${p.p}</small></div>
                    </div>
                    <div class="card-stats">مباريات: ${p.m} | أهداف: ${p.g || 0}</div>
                </div>`;
            });
            html += `</div></div>`;
        }
    
        html += `</div>`;
        appContainer.innerHTML = html;
        
        // Render Matches (Simple)
        const box = document.getElementById("matchesBox");
        const matches = BOTOLA_DB.rounds["8"] || [];
        let mHtml = "";
        matches.forEach(m => {
             const t1Name = BOTOLA_DB.teams[m.t1]?.name || m.t1;
             const t2Name = BOTOLA_DB.teams[m.t2]?.name || m.t2;
             mHtml += `<div style="border-bottom:1px solid #eee; padding:10px;">${t1Name} <b>${m.s}</b> ${t2Name} <span style="float:left;color:#999;font-size:12px;">${m.d}</span></div>`;
        });
        box.innerHTML = mHtml;
    });
    </script>
</body>
</html>
            squad: [
               {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, y:0, r:0, g:0},
               {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:7, y:1, r:0, g:2},
               {n:"أيوب بوشتى", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8u0i1Q9UlLw1PZbWBD6LvhkEx8x1IexgSkl1rnAxXFNb_glN3wzyJzf-asvvGITtfuD82vHLtvb1gKFPSTCMzOshcl6Hk_cot7CFSAkiHpk5IbgkwoifJpo1B17Lx_gEM7JxidrpN4XjRyfjv85yL-HULj4_U7yWhQE2NUHG2_k1tXpUWQU7zf6TX78/s1600/%D8%A7%D9%94%D9%8A%D9%88%D8%A8%20%D8%A8%D9%88%D8%B4%D8%AA%D9%89.png", m:8, y:2, r:0, g:0},
               {n:"محمد مفيد", p:"مدافع أيمن", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidaZpqymNDEyQTp5GQ9i7nOp1-hp3hyphenhyphenCZAO7sSJ4oSrQAyUqJgrcbBRTdJSOC3sw_laHKtde1EynCzeBqLDZ5l9DpxB-1K9qtlJew-3jnVnq4L8T-6NwSLet5FV39N081wJwdg-fITlFu9PeXrDYqDCSYB0gRpJZGvE_KVQoL0yHzKFBjMLtr-htE0JvY/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D9%85%D9%81%D9%8A%D8%AF.png", m:6, y:1, r:0, g:1},
               {n:"محمد رايحي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHVwPaPAzeaAbXgiyuWSLyOS_GuMf-0_wg3NUtjX3-jlMfHyNxQOGuCV2VG2wo0arQcBOB0KmRwC431RO8DvPxEdTWHKhVuhW2vrQ9JARMkZdVsycWLNi19KEzKn0kz-EXLBYPqr8qopu2Bdcymsvg4jLvhxtO4C-u1EnNLaAsEJEujKuBXNdnljoT-lg/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D8%A7%D9%8A%D8%AD%D9%8A.png", m:8, y:1, r:0, g:4},
               {n:"أيمن ديراني", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", m:5, y:0, r:0, g:0},
               {n:"وليد ناسي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nX1H0ZgZb-8NOODz3N1N9a0nxO37oZPbTzdTN6PhaY6RmXwRbJNHd7H6QFo-yO-I0FQgZuQL0fCY3n5IYlyEbB3EJOTWQLeqdip3bSq3lgre6I08PDrp01KeyTLacJhUvjRbj6vXyid_1_EbiCx6D4z8v7RvGMsNUPA9ddNZKc-rxe9zTmjDZ6bTNGY/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D9%86%D8%A7%D8%B3%D9%8A.png", m:4, y:0, r:0, g:1},
               {n:"بيدرينهو", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3TdCJ62Hj8OFUJ2Bt2Td96R7-jQL4K_oWnLBCnIlhyzpmzqwMv8UUDfMQX5uKHjECWc5MBUJOjQR6182p_-sLM71eVSPPGW4g5iMD-buBdoWWtkIFicqxPicYgSKvEEGwGboiSb6ZJNBPFcqbE5ok6AfswXNqANUgOozor6X4iaiB-ZFWnI4m4SeQZrQ/s1600/%D8%A8%D9%8A%D8%AF%D8%B1%D9%8A%D9%86%D9%87%D9%88.png", m:7, y:1, r:0, g:2},
               {n:"معاذ أونزو", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi043gehhQWhaK_ye2vwKU24y_V0suMT_wurQcN4HgmFXEQmxozXZWO5Ifwcma-N7JIgJ1y4F5tO6l2ujMmQ4o6wG7xqjR8t60H89aWtQlAqCI40xgJIUe_0ZY5RfHd8EHsphquZoGLGTtSsQPn2_hBiimHx_23lWvSuiLLWILTJMy5UTUt3dhfxqpedBg/s1600/%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%94%D9%88%D9%86%D8%B2%D9%88.png", m:3, y:0, r:0, g:0},
               {n:"آرثور وينديروسكي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyclJvueyEeJJfK-20D167QfRMpOrGY8BdaTCll25ui4kn8t8v0qKO3KDU6qriRPkg-_NcBeWAdAW-5ScgVK1wq-amXNaHh2Tu_uhyphenhyphenjsmrKIV3XWHi0qa1a4g46ahguKntingVgvCmkvhVIMPOp5r0-pH9ROSSrGvEPzInPw0CL-CjbEcUk64s2ku-1ww/s1600/%D8%A7%D9%93%D8%B1%D8%AB%D9%88%D8%B1%20%D9%88%D9%8A%D9%86%D8%AF%D9%8A%D8%B1%D9%88%D8%B3%D9%83%D9%8A.png", m:6, y:0, r:0, g:1},
               {n:"عمر روصافي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:5, y:1, r:0, g:2},
               {n:"عمر أقزداو", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvCDhiuf8yAt31fram6dYsLS8I8zmexekKZwqn5TMU3wa-QT9kEx0OcfA9m3ZpF0YoXHW1dJlydpOW8VsldAP1GhLB2Do82u_akdbeVbnrljwqP2IReTKoIohRpsdBYWOfCliOSX-fHvi4E0ATI06ZYADhWJHXV1JsnYssNeCtkwWt_gdMk3HaHXJ61C4/s1600/%D8%B9%D9%85%D8%B1%20%D8%A7%D9%94%D9%82%D8%B2%D8%AF%D8%A7%D9%88.png", m:0, y:0, r:0, g:0},
               {n:"المهدي بنعبيد", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghAARNo2fmMAI5Wum7y01bYc0zh49IhHei9-TqKE2CrrKTJCQJgPBqYZtYsfTFtqcNtI2c9yj741tkR3tXTmdHbjpoToysZsH-LuJpgRlST7JxdTvaBrEawEZcoZmuSZhKkAYsNeJuknRGCSmV4NmkutFWAoC-lXIKVJ06uWix37yqC8cCaiSMRRzj2QM/s1600/%D8%A7%D9%84%D9%85%D9%87%D8%AF%D9%8A%20%D8%A8%D9%86%D8%B9%D8%A8%D9%8A%D8%AF.png", m:0, y:0, r:0, g:0},
               {n:"محمد الجديدي", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiw523l0kVgZV7gzAcS2WRqwVqD2n7Mv0ATSNGOmDMiBtUlpjXIIBb2j0E_rTz8bFlKfKYwzBgzIvL_vGkcEIxF56URAdHJo8k28rgM-EbjOAEq2oVho2AwQe5J-YQtujJoAMdNYyUpeGyEOkCJV68B7qXAgoZ8kJT-HQgYUGdpBoA2bev5O1ualfP5Oqo/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%8A.png", m:6, y:1, r:0, g:0},
               {n:"محمد ريان محتو", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipocvCMrPTAnK5kFFcrVTg5FbZpXN222yYxAMMXgG_DUBl_Q0IOcWMlN3RU7ay2elrd7xN6z4oXkTjtFbkIFYemSxCNhfqWOumrImpzfrgi8WwxVK3AtfXg0GkNHEvAswwQjtB2uoICufLXJFRaiLNSwRq6FPVePaTQIVU9FTt4365lI1O6nNt-cM6bYU/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D9%8A%D8%A7%D9%86%20%D9%85%D8%AD%D8%AA%D9%88.png", m:2, y:0, r:0, g:0},
               {n:"نورالدين أمرابط", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiff_LqHW1r1GrScOZ2JJL_rUD-lnEZ1zlVUHGwywe2lkf9RnlqWShUQgFMY7Rl1kGv-jXeBO9LuUhAda_HVpqnUNQIX1xfGD7oYQUUuHEl8bQYv7-frQ3ichEGKU2CweHo6-KUsyTDqN0hgQ7kItGrze8rnRFISvFAtdqEHmoQ4tBphoslgiveiHaYY8/s1600/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%94%D9%85%D8%B1%D8%A8%D8%A7%D8%B7.png", m:7, y:0, r:0, g:3},
               {n:"حمزة هنوري", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-Y_BC7r-GQ_qjxT8dGYAR9t58IzZ8W5sziQZ5OnF0JiB_dX78a2Y5aOnCM7VwgFL9vXAEMj_5MYi3omHuUzgLbzC8V3aTd9o2HZbiYAKe75x3b1KoQpwGWlY_gQimELfOKWkNLr5vtpYGt0fJIQXxUbJURE2NspwHFrZVWZy4WyCScOdezqgTA7dvreU/s1600/%D8%AD%D9%85%D8%B2%D8%A9%20%D9%87%D9%86%D9%88%D8%B1%D9%8A.png", m:3, y:0, r:0, g:1},
               {n:"ستيفان عزيز كي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8yjeW0uwsD37-SoNypJOUepZKEZZyxXjb3aKNDF-DJAXqyr8gDDMYMvIL42mT-DVCzq1H9ApDw5CqM7dNoQPWRZ87DKrM_8kjMnifgBuZoo01plbXD-WT5hjpZoLx7wrBTBAxow4IWsElAwtzHiXvBwQ_VOpII4iEcxzevVi81TP19W_iQcF-062pbO4/s1600/%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%86%20%D8%B9%D8%B2%D9%8A%D8%B2%20%D9%83%D9%8A.png", m:5, y:1, r:0, g:0},
               {n:"بارت مايرز", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkGfQI2gF_AYfMhSClufNoTUKc_ALEUK76UGEWvULvb-teHJxdND7Tv4h4-5lELJtqK1B2g3au9YFClBuUuU_Qrhob2wSSZyMUwrs1EYmQJt8hJcZUBbhKuNtT4Othac1-DdKHsZPymdPxT1tlSJNCZLFU0uzHlUPBSP3nCwRURTnr7M9IO2ZN-CB9Crc/s1600/%D8%A8%D8%A7%D8%B1%D8%AA%20%D9%85%D8%A7%D9%8A%D8%B1%D8%B2.png", m:4, y:2, r:0, g:0},
               {n:"غويليرمي فيريرا", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPgwcJ7U7_2taiOgkEKdAbPaKNYR79uxOui66iR9VR4CwERNFmksv-na2HDfHcwuPobXIdIipK-q9RsE4mtHzETkmQxV7f3cBHo_VazuilfOWUwMVFuyzcwr-33SXlr1mdUXT-OwIrUpsC07P1eLQ9G2fKG0m8EBQnNWWXSBU_4d8X8RWGDGEGQ2_qzfk/s1600/%D8%BA%D9%88%D9%8A%D9%84%D9%8A%D8%B1%D9%85%D9%8A%20%D9%81%D9%8A%D8%B1%D9%8A%D8%B1%D8%A7.png", m:3, y:0, r:0, g:0},
               {n:"عبد الغفور لاميرات", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFkI6RX9PX41DKyeZbVrJ-I86R9Dh0ngJTjwSjTg7K9KApywEZ7EcGI8qwe5XeGFiu7SMV8cfrNAVPxifQxOLfq-63w8rE7kRJ8WKgFPTY4WP2hYJgCgRRR21UlpL5cfXZwagxNcp5eowb4unZTpz3Mg6caL28G7Q9WixoqHVqHygNJgwg4Hf_7cJmSNQ/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AF%D9%81%D9%88%D8%B1%20%D9%84%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%D8%AA.png", m:2, y:0, r:0, g:0},
               {n:"حمزة الواسطي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRohWsJRWAjsmjyM7ymvOfTpuwB7hCyXn-9Uhhhv6_DlSWkrdqFAP8efaLPe4Elg0_aDklnd-kr86Axv2Wl8uKQU1y0gh7dvjX7VxEoI-ZOE2K-IAbWqMb3WDPnDKpqd1XFAGtMSoXolaJcX2hjGtxcTflJ8nd_K2FwOrDi0DOrMkP1v6H95_0WtntWu4/s1600/%D8%AD%D9%85%D8%B2%D8%A9%20%D8%A7%D9%84%D9%88%D8%A7%D8%B3%D8%B7%D9%8A.png", m:1, y:0, r:0, g:0},
               {n:"جوزيف باكاسو", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmrVmfIV4Sw3-szIWCIUkCby9GQSq2ubjRgHaOBgxuYsR2mOgi7UTcY4nER3n_vvAHQQMyEpQQTk1_sbKtiyOHz12F29hGDttaYRDE77cztljM3wHrwRqRVmzvekXyw9zBV6kz8uhfxnwJAWgU4YVl0raMMc8lKB1OxgjWFvXwwH_fithNhvUTgGF9u7s/s1600/%D8%AC%D9%88%D8%B2%D9%8A%D9%81%20%D8%A8%D8%A7%D9%83%D8%A7%D8%B3%D9%88.png", m:0, y:0, r:0, g:0},
               {n:"أمين أبو الفتح", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE-DZux1wLeqWSGoS24ZaGXD1Qy43uqdNGmlUM5wllZUphLdk61M2OgUYTeqOBuSjGUuh4q8zRuU6JLh8O3HBHPoF31coPMMSXzF7jv0VCr-eLNOpPzoXByKE9sGItgpceDzj5RpRZNktwpULyuMDxdm0zNDaNj36wLxMUqtV99NjSP3PIBDOApdWTAeY/s1600/%D8%A7%D9%94%D9%85%D9%8A%D9%86%20%D8%A7%D9%94%D8%A8%D9%88%20%D8%A7%D9%84%D9%81%D8%AA%D8%AD.png", m:0, y:0, r:0, g:0},
               {n:"وليد الصبار", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7511w-g5owduK1dR3JVqKONVgcIsO4NJoO6h_AmeqIIzFnUYDvNmaWeZLBQ04s7KsRQOw18Yt47-oLB3Ahh17JFfl0TivmkSgW3R6uFQBJlrgGxtbGssAZWngDtqYcjMojLmVlWGFDT359vWCZIZDAaaSsytuAt-ONMVtbCDSny5T0rFyuReerh2VW0/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1.png", m:2, y:0, r:0, g:0},
               {n:"ثيمبينكوسي لورش", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXkahxeOtSWtYTeOuhv1mu7N3bJDUD8pFt-RTvN1y5sOOergEy9o72IaTuyh2-wpKpSkHXYiH8eFiagsqy5oq38mLL96m5CDHorOvoTH56ciyXMjavIDoxaoGcoQl90yhDsieY9ghYm5tq6LvXOoODu8LouYtoH3IMK0tkO3dWHg2Xbr8um61U4XFZmZw/s1600/%D8%AB%D9%8A%D9%85%D8%A8%D9%8A%D9%86%D9%83%D9%88%D8%B3%D9%8A%20%D9%84%D9%88%D8%B1%D8%B4.png", m:4, y:0, r:0, g:1},
               {n:"محمد بوشواري", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBZUKZEWdGj3dbvm2ym0kxAIt9Gkh8FDQnCr39WN0TVkHKavE1_yDOpqPtHgGLmi-qtaDolkd0RIzeWo2opdGR_9-zp6ZB31iXGepyaJeFfT8T3kqRYtm3vJrGDEYSkgqaUzHUmKJup_NsLA37WUgR2LiWPx89sq26cNzCj0zPORN2_5eAgFek8C6hUKo/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A8%D9%88%D8%B4%D9%88%D8%A7%D8%B1%D9%8A.png", m:5, y:1, r:0, g:0},
               {n:"زهير المترجي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWGCfSoD8aUS2VglEJiZD2WMqqkXLrkIeV6c1sRD0KN2_ILdKSimr2BhdsQ8gHtKaiglwYE2z3bvgdxETgsbEztTe-Iza1-sCnbJL39ArY-z9P9kn7fujEPYc94Mc8A1xlCGh2ONlJJ46DI4jBEPfzlFQRlycuA4_3XhaJRnUF7sUJk_nIcI4ALALains/s1600/%D8%B2%D9%87%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%AA%D8%B1%D8%AC%D9%8A.png", m:3, y:0, r:0, g:0},
               {n:"توميسانغ أوريبونيي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcf14lhNEF8yCPgkjpgdIQXdbVtUj4I4FAsEk7cs0GsAvC4fl_NnJuH2BMMWEnYtigKg6YEL6NZf_ZyBj4IDtX1mM60MPDdDVdrYraklSjsU5HOk_ZwfE_dNzlw-q5JtxYe9Y3sqwBMRPrAJi8C3RXFsVuOQZg0tkoMgTmbWey4FJyTRXyy-Pp2OJZKbM/s1600/%D8%AA%D9%88%D9%85%D9%8A%D8%B3%D8%A7%D9%86%D8%BA%20%D8%A7%D9%94%D9%88%D8%B1%D9%8A%D8%A8%D9%88%D9%86%D9%8A%D9%8A.png", m:3, y:0, r:0, g:1},
               {n:"عبد العالي المحمدي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjTX9RTHz61FreoTcdlilvb2h-pncWoJ70msZtsuVDNKBd44pD6grL0lpf9LdZ15L_HfwTQTBfD_4jT2mS7R3imC5czEEyTlkXtREcAUZvYkQDKweUXrk89BiInp69yPcsDMZS6F1IQ1sOzeZ5-VaKriQgl34yT93IXOEQGPNeFWmTe1PigVTq2SUaksk/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D8%AF%D9%8A.png", m:0, y:0, r:0, g:0},
               {n:"محمد الوردي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:2, y:0, r:0, g:0},
               {n:"وليد عتيق", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:1, y:0, r:0, g:0},
               {n:"شمس الدين العلالي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, y:0, r:0, g:0},
               {n:"عبدولاي كوليبالي", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, y:0, r:0, g:0},
               {n:"مباي نيانغ", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, y:0, r:0, g:0},
               {n:"حكيم زياش", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png", m:0, y:0, r:0, g:0}
            ],
            transfers: [
                {n:"زاكارياس غيلان", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:""},
                {n:"زكرياء فتحي", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:""},
                {n:"أيمن ديراني", from:"الخالدية", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"0.095M €", price:"0.095M €"},
                {n:"حكيم زياش", from:"حر", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"حر", price:""},
                {n:"عبد المنعم بوطويل", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF_ZkiLexkF1lSvsTZyzyHA4J9HmJUCINLtWXd_a6UBdyLdnmX-L59VIteJppHH-GaXy_Hm2zWlmduxHCbA5O9DJcAT2samgYUBjNnhNmvSwLEex4q7o-MeRUrgd7rp7F5aAv9-etJN6DcZIJbQLkQTtoOnIgn9VTGUfxu3v-p3lXdBwtuZCxutENBuhQ/s1600/hazam.png", type:"انتقال", price:""},
                {n:"ميكائيل مالسا", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcVq_JSGW28_dkmFv60oOR0wEEHAhzyd3Wlb2WInEbqQfUsy3o2dz1KTFVJ8pFLNek763Jz0B87Th_ZxaAE69iJ9docMKQDDUKpFWDpw9Jg1otWab3gEfkKvI5shhq-qAr70oB3dR9tAEKRXAPUvfFKav7aYTAvQJ6-oia1x7cHqwHw3yRudKgm36Jv9Y/s1600/free%20elbotolaon.png", type:"حر", price:""},
                {n:"صمويل أوبينغ", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1ajn7GxLUTLsOEbYhtEp_D5tHlvoczRqwEnjPwjPFvQ-R2yxjp5oMz2BGQrgqPDMShRECnjo2VEFLotA5SH7bfskZzOwyuzDeDlLAoLN7S_mOeMOEP0yOQH0q22kaDE_jqgdWy-n4SM6M8ur2AxQoHszGucOhVg55JWtFvTNIkl2aOieYA1pJJJ1noqk/s1600/sabta%20elbotolaon.png", type:"انتقال", price:""},
                {n:"سيف الدين بوهرة", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", type:"0.142M €", price:"0.142M €"}
            ]
        },
        "rca": { squad: [], transfers: [] },
        "far": { squad: [], transfers: [] },
        "mas": { squad: [], transfers: [] },
        "rsb": { squad: [], transfers: [] },
        "codm": { squad: [], transfers: [] },
        "irt": { squad: [], transfers: [] },
        "ocs": { squad: [], transfers: [] },
        "fus": { squad: [], transfers: [] },
        "uts": { squad: [], transfers: [] },
        "husa": { squad: [], transfers: [] },
        "dhj": { squad: [], transfers: [] },
        "od": { squad: [], transfers: [] },
        "rcz": { squad: [], transfers: [] },
        "kacm": { squad: [], transfers: [] },
        "usym": { squad: [], transfers: [] }
    }
};

/* 2. الستايل المدمج الكامل (CSS) - أفضل من الملفين القديمين */
const stylesV18 = `
<style>
    /* =========================================
       BOTOLA PRO MASTER V18 STYLES
       ========================================= */
    #elbotolaon-widget-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        background-color: #fff !important;
        color: #333 !important;
        direction: rtl !important;
        text-align: right !important;
        font-size: 15px !important;
        line-height: 1.6 !important;
        width: 100% !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    #elbotolaon-widget-container * { box-sizing: border-box !important; }
    #elbotolaon-widget-container a { text-decoration: none !important; color: inherit !important; }
    
    /* SECTIONS */
    .eb-section { 
        margin-bottom: 25px !important; 
        border: 1px solid #eee !important; 
        border-radius: 8px !important; 
        overflow: hidden !important; 
        background: #fff !important; 
    }
    .eb-header { 
        padding: 15px 20px !important; 
        border-bottom: 2px solid #f5f5f5 !important; 
        display: flex !important; 
        align-items: center !important; 
        justify-content: space-between !important; 
        background: #fafafa !important; 
    }
    .eb-title { 
        font-size: 18px !important; 
        font-weight: 700 !important; 
        border-right: 5px solid #d2151e !important; 
        padding-right: 12px !important; 
        margin: 0 !important; 
        color: #333 !important; 
    }
    
    /* TEAM HEADER */
    .eb-team-header { 
        padding: 25px !important; 
        display: flex !important; 
        align-items: center !important; 
        gap: 20px !important; 
        background: #fff !important; 
        flex-wrap: wrap !important; 
    }
    .eb-team-logo { 
        width: 100px !important; 
        height: 100px !important; 
        object-fit: contain !important; 
    }
    
    /* STATS BAR */
    .eb-stats-wrapper { 
        display: flex !important; 
        flex-wrap: wrap !important; 
        border-top: 1px solid #eee !important; 
        background: #fbfbfb !important; 
    }
    .eb-stat-item { 
        flex: 1 !important; 
        min-width: 100px !important; 
        text-align: center !important; 
        padding: 20px 5px !important; 
        border-left: 1px solid #eee !important; 
    }
    .eb-stat-item:last-child { border-left: none !important; }
    .eb-stat-num { 
        font-size: 30px !important; 
        font-weight: 800 !important; 
        color: #333 !important; 
        display: block !important; 
        margin-bottom: 5px !important; 
    }
    .eb-stat-label { 
        font-size: 14px !important; 
        color: #666 !important; 
        display: block !important; 
        font-weight: 600 !important; 
    }
    
    /* ================ TABLE STYLES (من 01.txt) ================ */
    .eb-ranking-scroll { width: 100% !important; overflow-x: auto !important; }
    table.ranking-table { 
        width: 100% !important; 
        border-collapse: collapse !important; 
        border-spacing: 0 !important;
        margin: 0 !important;
        min-width: 600px !important;
    }
    
    /* HEADER CELLS */
    table.ranking-table th {
        background: #f4f4f4 !important;
        color: #555 !important;
        font-weight: 700 !important;
        padding: 12px 0 !important;
        text-align: center !important;
        font-size: 13px !important;
        border-bottom: 2px solid #ddd !important;
        white-space: nowrap !important;
    }
    
    /* BODY CELLS */
    table.ranking-table td {
        padding: 10px 0 !important;
        text-align: center !important;
        border-bottom: 1px solid #eee !important;
        color: #444 !important;
        font-size: 14px !important;
        white-space: nowrap !important;
        vertical-align: middle !important;
    }
    
    /* COLUMN 1: RANK (#) */
    table.ranking-table th:nth-child(1),
    table.ranking-table td:nth-child(1) {
        width: 40px !important;
        max-width: 40px !important;
        text-align: center !important;
        padding-right: 10px !important;
    }
    
    /* COLUMN 2: TEAM NAME */
    table.ranking-table th:nth-child(2),
    table.ranking-table td:nth-child(2) {
        text-align: right !important;
        padding-right: 5px !important;
        width: auto !important;
        min-width: 180px !important;
    }
    
    /* Flex Container for Image + Name */
    .col-team { 
        display: flex !important; 
        align-items: center !important; 
        justify-content: flex-start !important;
        gap: 10px !important; 
        font-weight: 600 !important;
        width: 100% !important;
    }
    
    /* Team Logo in Table */
    .team-mini-logo { 
        width: 24px !important; 
        height: 24px !important; 
        object-fit: contain !important; 
        display: inline-block !important; 
        margin: 0 !important; 
    }
    
    /* Rank Badge Style */
    .rank-badge { 
        display: inline-flex !important; 
        justify-content: center !important; 
        align-items: center !important;
        width: 24px !important; 
        height: 24px !important; 
        border-radius: 50% !important; 
        color: #fff !important; 
        font-size: 12px !important; 
        background: #ccc !important; 
    }
    
    /* Colors & Highlights */
    tr.row-ucl { background-color: #e6ffe6 !important; } 
    tr.row-ucl .rank-badge { background: #28a745 !important; }
    tr.row-conf { background-color: #e6f2ff !important; } 
    tr.row-conf .rank-badge { background: #007bff !important; }
    tr.row-rel { background-color: #fff0f0 !important; } 
    tr.row-rel .rank-badge { background: #dc3545 !important; }
    
    .current-team-highlight { 
        border-top: 2px solid #d2151e !important;
        border-bottom: 2px solid #d2151e !important;
        background-color: #fff !important;
        font-weight: bold !important;
    }
    .current-team-highlight td:first-child { border-right: 2px solid #d2151e !important; }
    .current-team-highlight td:last-child { border-left: 2px solid #d2151e !important; }
    
    .points-cell { font-weight: 800 !important; color: #000 !important; background: rgba(0,0,0,0.03) !important; }
    
    /* ================ MATCHES STYLES (من 0.txt) ================ */
    .eb-schedule-header { 
        padding: 15px !important; 
        background: #f8f8f8 !important; 
        border-bottom: 1px solid #eee !important; 
        display: flex !important; 
        justify-content: space-between !important; 
        align-items: center !important; 
        flex-wrap: wrap !important; 
        gap: 10px !important; 
    }
    .eb-select { 
        padding: 8px !important; 
        border: 1px solid #ddd !important; 
        border-radius: 4px !important; 
        font-size: 14px !important; 
        width: 150px !important; 
    }
    .match-row { 
        display: flex !important; 
        align-items: center !important; 
        padding: 15px !important; 
        border-bottom: 1px solid #f5f5f5 !important; 
        flex-wrap: wrap !important; 
    }
    .m-date { 
        width: 75px !important; 
        font-size: 13px !important; 
        color: #555 !important; 
        font-weight:bold !important; 
        text-align: center !important; 
        border-left: 1px solid #eee !important; 
        padding-left: 10px !important; 
    }
    .m-info { 
        flex: 1 !important; 
        display: flex !important; 
        align-items: center !important; 
        justify-content: space-between !important; 
        padding: 0 10px !important; 
        min-width: 200px !important; 
    }
    .m-team { 
        width: 35% !important; 
        display: flex !important; 
        align-items: center !important; 
        gap: 8px !important; 
        font-weight: 700 !important; 
        font-size: 14px !important; 
    }
    .m-team.away { justify-content: flex-end !important; flex-direction: row-reverse !important; }
    .m-team img { width: 28px !important; height: 28px !important; }
    .m-res { 
        background: #eee !important; 
        padding: 5px 10px !important; 
        border-radius: 6px !important; 
        font-weight: bold !important; 
        font-size: 15px !important; 
        min-width: 50px !important; 
        text-align: center !important; 
    }
    .m-stadium { 
        font-size: 11px !important; 
        color: #777 !important; 
        background: #f9f9f9 !important; 
        padding: 4px 8px !important; 
        border-radius: 4px !important; 
        border: 1px solid #eee !important; 
        white-space: nowrap !important; 
        margin-top: 5px !important; 
    }
    
    /* ================ SQUAD STYLES (من 0.txt) ================ */
    .eb-squad-grid { 
        display: grid !important; 
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) !important; 
        gap: 15px !important; 
        padding: 20px !important; 
    }
    .squad-card { 
        border: 1px solid #eee !important; 
        border-radius: 8px !important; 
        background: #fff !important; 
        cursor: pointer !important; 
        transition: all 0.2s !important; 
        overflow: hidden !important; 
        position: relative !important; 
    }
    .squad-card:hover { border-color: #d2151e !important; box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important; }
    .squad-card.active { border: 1px solid #d2151e !important; background: #fffafa !important; grid-row: span 2 !important; }
    
    .card-main { 
        display: flex !important; 
        align-items: center !important; 
        padding: 12px !important; 
    }
    .card-main img { 
        width: 55px !important; 
        height: 55px !important; 
        border-radius: 50% !important; 
        border: 3px solid #fff !important; 
        box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important; 
        margin-left: 15px !important; 
        object-fit: cover !important; 
    }
    .card-txt h4 { margin: 0 !important; font-size: 15px !important; font-weight: 700 !important; color: #333 !important; }
    .card-txt p { margin: 4px 0 0 !important; font-size: 13px !important; color: #888 !important; text-transform: uppercase !important; }
    .card-arrow { margin-right: auto !important; color: #ccc !important; transition: transform 0.3s !important; font-size: 18px !important; }
    .squad-card.active .card-arrow { transform: rotate(180deg) !important; color: #d2151e !important; }
    
    .card-stats { 
        display: none !important; 
        border-top: 1px solid #eee !important; 
        padding: 15px !important; 
        background: #fff !important; 
        animation: slideOpen 0.3s ease !important; 
    }
    .squad-card.active .card-stats { display: block !important; }
    .cs-row { 
        display: flex !important; 
        justify-content: space-around !important; 
        text-align: center !important; 
    }
    .cs-box span { display: block !important; }
    .cs-val { font-weight: bold !important; font-size: 16px !important; color: #d2151e !important; }
    .cs-lbl { font-size: 12px !important; color: #999 !important; }
    
    @keyframes slideOpen { 
        from { opacity: 0; max-height: 0; } 
        to { opacity: 1; max-height: 100px; } 
    }
    
    /* ================ TRANSFERS STYLES (من 0.txt) ================ */
    .transfers-scroll { overflow-x: auto !important; width: 100% !important; }
    .transfers-table { 
        width: 100% !important; 
        border-collapse: collapse !important; 
        font-size: 14px !important; 
        min-width: 600px !important; 
    }
    .transfers-table td { 
        padding: 12px !important; 
        border-bottom: 1px solid #eee !important; 
        vertical-align: middle !important; 
    }
    .transfers-table thead td { 
        font-weight: bold !important; 
        background: #fbfbfb !important; 
        color: #555 !important; 
        font-size: 15px !important; 
    }
    .t-player img { width: 28px !important; height: 28px !important; border-radius: 50% !important; margin-left: 8px !important; vertical-align: middle !important; }
    .t-club img { width: 24px !important; height: 24px !important; margin-left: 8px !important; vertical-align: middle !important; }
    .t-type { font-weight: bold !important; color: #28a745 !important; font-size: 13px !important; }
    .t-type.loan { color: #007bff !important; }
    
    /* ================ MOBILE OPTIMIZATION ================ */
    @media (max-width: 768px) {
        .hide-on-mobile { display: none !important; }
        .hide-trans-mobile { display: none !important; }
        .col-team { width: 60% !important; }
        table.ranking-table { min-width: 100% !important; }
        .m-stadium { display: none !important; }
        .eb-team-header { flex-direction: column !important; text-align: center !important; }
        
        .eb-squad-grid { 
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) !important; 
            gap: 12px !important; 
            padding: 15px !important; 
        }
        .card-main { padding: 10px !important; }
        .card-main img { width: 45px !important; height: 45px !important; margin-left: 10px !important; }
        
        .eb-stats-wrapper { flex-wrap: wrap !important; }
        .eb-stat-item { flex: 1 0 50% !important; min-width: 50% !important; border-left: none !important; border-bottom: 1px solid #eee !important; }
        
        .transfers-table { min-width: 100% !important; }
    }
    
    @media (max-width: 480px) {
        .eb-stat-item { flex: 1 0 100% !important; }
        .eb-squad-grid { grid-template-columns: 1fr !important; }
        .m-team { width: 40% !important; font-size: 14px !important; }
        .m-team img { width: 28px !important; height: 28px !important; }
        table.ranking-table th:nth-child(2),
        table.ranking-table td:nth-child(2) { min-width: 140px !important; }
    }
</style>
`;

/* 3. المنطق الرئيسي (LOGIC) */
document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.getElementById("botola-app") || document.getElementById("team-app");
    if(!appContainer) return;
    
    const currentTeamId = appContainer.getAttribute("data-team");
    const teamInfo = BOTOLA_DB.teams[currentTeamId] || BOTOLA_DB.teams["wac"];
    const teamDetails = BOTOLA_DB.teamDetails[currentTeamId] || { squad: [], transfers: [] };
    
    // A. ترتيب الفريق ديناميكياً (إذا تغيرت النتائج يتغير الترتيب)
    const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        return (b.gf - b.ga) - (a.gf - a.ga);
    });
    
    let html = stylesV18;
    
    html += '<div id="elbotolaon-widget-container">';
    
    /* =================== 1. رأس الفريق والإحصائيات =================== */
    html += `
    <div class="eb-section">
        <div class="eb-team-header">
            <img src="${teamInfo.logo}" class="eb-team-logo" alt="${teamInfo.name}">
            <div>
                <h1 style="margin:0 0 10px; color:#d2151e; font-size:32px;">${teamInfo.name}</h1>
                <div style="font-size:15px; color:#555;">
                    <p style="margin:5px 0;"><strong>تاريخ التأسيس:</strong> ${teamInfo.founded} 📅</p>
                    <p style="margin:5px 0;"><strong>المدينة:</strong> ${teamInfo.city} 🇲🇦</p>
                </div>
            </div>
        </div>
        <div class="eb-stats-wrapper">
            <div class="eb-stat-item"><span class="eb-stat-num">8</span><span class="eb-stat-label">مباريات <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaEqa10EiO_myBQqPsSUyBVXH4Rmi7hFDKq5ZIrVdnlM6pwqaODjjq1f9wEDNuZ0NX2PsjLlXgh68fgq_HAOkUmPYMYxwcHinUH8rbWap3ZePYFp3nMKuy2mW8pb1fIWp7xfYeDGFupe7A-r8g8lTJldV2XdzqiZN5qOPCXvXnwhS6tE6GERYFwdozcTE/s1600/played-matches.png" style="width:20px;height:20px;vertical-align:middle;"></span></div>
            <div class="eb-stat-item"><span class="eb-stat-num">14</span><span class="eb-stat-label">أهداف <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiit1179n7N_MVuReHPyL7mjNDn5zMRtvdC9441kVGOufI5aIh3OgoF1FLDVwwWH4GEOE6XZxnRZorQ9elETjfbLTqgwgIKv0_5OcuOLq5TkheYMOwnNWL0AaIk3VcRO5t8HaBiRjsb8Oo4mlS4XipknOz8e74NC2ii7VpeqsyFuVJKUpGFDhBzjr0jIbQ/s1600/green-ball.png" style="width:20px;height:20px;vertical-align:middle;"></span></div>
            <div class="eb-stat-item"><span class="eb-stat-num">2</span><span class="eb-stat-label">ركلات جزاء <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgveoaOT4C2NhZmU29OQI17Gc48KlxNp31DdFzkBgUCnMVOJLeE1JQRpMUaDYJc7jPeQEyvyGLzuKgtEBkzKblj8IxaaiP-cvE-IX5qrz5_l1IrQMs5d-AuDfZt6Ju1LkXbfm0NwJ-oxkkwV8pZbwFaaMPWzMzbWK4JduPh_gFz1h1OkOsZRX9mno8_v1I/s1600/player-setting-ball.png" style="width:20px;height:20px;vertical-align:middle;"></span></div>
            <div class="eb-stat-item"><span class="eb-stat-num">22</span><span class="eb-stat-label">صفراء <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuCLKlXx74HSTi5RJVQB5frzLbB5daBX9R708pH1jzLCEvTzKtikesldD1_YegM62yPeEI9Cr7urmA6BfamV679BkW3vcOReBpEhH3l6Kl0KM7nk5n99g88po-7Ri-qyRU3_wHawWf3u1olwlxPLDaFvIHMpE5zTpuCyXsW79g4kc9vVl89X9uXl5uCPA/s1600/large-YC.png" style="width:20px;height:20px;vertical-align:middle;"></span></div>
            <div class="eb-stat-item"><span class="eb-stat-num">1</span><span class="eb-stat-label">حمراء <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtyFGW1x-E7l2vd22J20Qy1V1dsw65PNBv1A9jfrUy53wNe05DOZhwAJbYX5WUiEH_yzc3iPEdKsRK_XY-V7GXzOqOrGX3yek3Rg4PzQw7tsPn4sCft-vVULn15-eQ5yCivDEVNNND_qh-yTaUeBXRQRBK6DFOcSG7NTaNJsjzbHAA8SQDE5_Ix7_ind8/s1600/large-RC.png" style="width:20px;height:20px;vertical-align:middle;"></span></div>
        </div>
    </div>`;
    
    /* =================== 2. جدول الترتيب العام =================== */
    html += `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">الترتيب العام</h3></div>
        <div class="eb-ranking-scroll">
            <table class="ranking-table">
                <thead><tr>
                    <th>#</th>
                    <th>الفريق</th>
                    <th>لعب</th>
                    <th class="hide-on-mobile">فاز</th>
                    <th class="hide-on-mobile">تعادل</th>
                    <th class="hide-on-mobile">خسر</th>
                    <th class="hide-on-mobile">له</th>
                    <th class="hide-on-mobile">عليه</th>
                    <th class="hide-on-mobile">+/-</th>
                    <th>ن</th>
                </tr></thead>
                <tbody>`;
    
    sortedStandings.forEach((row, index) => {
        const rank = index + 1;
        const teamData = BOTOLA_DB.teams[row.id];
        let rowClass = '';
        
        // تحديد الألوان حسب الترتيب
        if (rank <= 2) rowClass = 'row-ucl';
        else if (rank === 3) rowClass = 'row-conf';
        else if (rank >= 15) rowClass = 'row-rel';
        
        // إبراز الفريق الحالي
        if (row.id === currentTeamId) rowClass += ' current-team-highlight';
        
        html += `
        <tr class="${rowClass}">
            <td><span class="rank-badge rank-${rank}">${rank}</span></td>
            <td><div class="col-team"><img src="${teamData.logo}" class="team-mini-logo"> ${teamData.name}</div></td>
            <td>${row.p}</td>
            <td class="hide-on-mobile">${row.w}</td>
            <td class="hide-on-mobile">${row.d}</td>
            <td class="hide-on-mobile">${row.l}</td>
            <td class="hide-on-mobile">${row.gf}</td>
            <td class="hide-on-mobile">${row.ga}</td>
            <td class="hide-on-mobile">${row.gf - row.ga}</td>
            <td class="points-cell">${row.pts}</td>
        </tr>`;
    });
    
    html += `</tbody></table></div></div>`;
    
    /* =================== 3. جدول المباريات =================== */
    html += `
    <div class="eb-section">
        <div class="eb-schedule-header">
            <h3 class="eb-title">جدول المباريات</h3>
            <select id="roundSelect" class="eb-select" onchange="window.loadRoundMatches(this.value)">
                <option value="1">الجولة 1</option>
                <option value="2">الجولة 2</option>
                <option value="3">الجولة 3</option>
                <option value="4">الجولة 4</option>
                <option value="5">الجولة 5</option>
                <option value="6">الجولة 6</option>
                <option value="7">الجولة 7</option>
                <option value="8" selected>الجولة 8</option>
            </select>
        </div>
        <div id="matchesContainer"></div>
    </div>`;
    
    /* =================== 4. تشكيلة الفريق =================== */
    if(teamDetails.squad && teamDetails.squad.length > 0) {
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">تشكيلة الفريق (${teamDetails.squad.length} لاعب)</h3></div>
            <div class="eb-squad-grid" id="squadContainer"></div>
        </div>`;
    }
    
    /* =================== 5. الانتقالات =================== */
    if(teamDetails.transfers && teamDetails.transfers.length > 0) {
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">الانتقالات والإعارات</h3></div>
            <div class="transfers-scroll">
                <table class="transfers-table">
                    <thead><tr>
                        <td class="hide-trans-mobile">التاريخ</td>
                        <td>اللاعب</td>
                        <td>من</td>
                        <td>إلى</td>
                        <td class="hide-trans-mobile">النوع</td>
                    </tr></thead>
                    <tbody>`;
        
        teamDetails.transfers.forEach(transfer => {
            html += `
            <tr>
                <td class="hide-trans-mobile">23-11</td>
                <td class="t-player"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif"> ${transfer.n}</td>
                <td class="t-club"><img src="${transfer.from_logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${transfer.from}</td>
                <td class="t-club"><img src="${transfer.to_logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${teamInfo.name}</td>
                <td class="t-type hide-trans-mobile">${transfer.type}</td>
            </tr>`;
        });
        
        html += `</tbody></table></div></div>`;
    }
    
    html += '</div>'; // نهاية elbotolaon-widget-container
    
    appContainer.innerHTML = html;
    
    // =================== تهيئة الدوال ===================
    
    // دالة عرض المباريات حسب الجولة
    window.loadRoundMatches = function(roundId) {
        const container = document.getElementById('matchesContainer');
        const matches = BOTOLA_DB.rounds[roundId] || [];
        
        let matchesHtml = '';
        
        if(matches.length === 0) {
            matchesHtml = '<div style="padding:20px;text-align:center;color:#999;">لا توجد مباريات لهذه الجولة</div>';
        } else {
            matches.forEach(match => {
                const team1 = BOTOLA_DB.teams[match.t1];
                const team2 = BOTOLA_DB.teams[match.t2];
                
                matchesHtml += `
                <div class="match-row">
                    <div class="m-date">${match.d}<br>${match.t}</div>
                    <div class="m-info">
                        <div class="m-team"><img src="${team1.logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${team1.name}</div>
                        <div class="m-res">${match.s}</div>
                        <div class="m-team away"><img src="${team2.logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${team2.name}</div>
                    </div>
                    <div class="m-stadium">${match.std}</div>
                </div>`;
            });
        }
        
        container.innerHTML = matchesHtml;
    };
    
    // دالة عرض تشكيلة الفريق مع البطاقات التفاعلية
    if(teamDetails.squad && teamDetails.squad.length > 0) {
        const squadContainer = document.getElementById('squadContainer');
        let squadHtml = '';
        
        teamDetails.squad.forEach((player, index) => {
            squadHtml += `
            <div class="squad-card" id="playerCard-${index}" onclick="window.togglePlayerCard(${index})">
                <div class="card-main">
                    <img src="${player.img}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <div class="card-txt">
                        <h4>${player.n}</h4>
                        <p>${player.p}</p>
                    </div>
                    <i class="card-arrow">▼</i>
                </div>
                <div class="card-stats">
                    <div class="cs-row">
                        <div class="cs-box"><span class="cs-val">${player.m}</span><span class="cs-lbl">مباريات</span></div>
                        <div class="cs-box"><span class="cs-val">${player.g || 0}</span><span class="cs-lbl">أهداف</span></div>
                        <div class="cs-box"><span class="cs-val">${player.y}</span><span class="cs-lbl">إنذارات</span></div>
                        <div class="cs-box"><span class="cs-val">${player.r || 0}</span><span class="cs-lbl">طرد</span></div>
                    </div>
                </div>
            </div>`;
        });
        
        squadContainer.innerHTML = squadHtml;
    }
    
    // دالة تبديل بطاقة اللاعب
    window.togglePlayerCard = function(index) {
        const card = document.getElementById(`playerCard-${index}`);
        const isActive = card.classList.contains('active');
        
        // إغلاق جميع البطاقات
        document.querySelectorAll('.squad-card').forEach(c => {
            c.classList.remove('active');
        });
        
        // فتح البطاقة المختارة إذا لم تكن مفتوحة
        if(!isActive) {
            card.classList.add('active');
        }
    };
    
    // تهيئة الصفحة الأولى
    window.loadRoundMatches('8'); // عرض الجولة 8 أولاً
});
//]]>
</script>
