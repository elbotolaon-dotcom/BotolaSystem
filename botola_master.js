/* ==========================================================================
   BOTOLA PRO MASTER V15 (The Ultimate Merge: Beauty + Logic)
   ========================================================================== */

/* 1. قاعدة البيانات (DATABASE) */
const BOTOLA_DB = {
    // أ) الفرق (Teams)
    teams: {
        "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء" },
        "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء" },
        "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", city: "الرباط" },
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

    // ب) جدول الترتيب (Standings) - فقط حدّث هذا القسم أسبوعياً
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

    // ج) بيانات الجولات (Rounds) - أضف المباريات هنا حسب الجولة
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

    // د) تفاصيل كل فريق (اللاعبين + الانتقالات)
    teamDetails: {
        "wac": {
            squad: [
               {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, y:0, r:0, g:0},
               {n:"جمال حركاس", p:"دفاع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLwK5j1oH-4M5Zq0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/%D8%AC%D9%85%D8%A7%D9%84%20%D8%AD%D8%B1%D9%83%D8%A7%D8%B3.png", m:8, y:1, r:0, g:0},
               {n:"نسيم الشاذلي", p:"هجوم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7bT27q75z0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/default.png", m:7, y:2, r:0, g:3}
            ],
            transfers: [
                {n:"زاكارياس غيلان", from:"nahdat_z", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"},
                {n:"حكيم زياش", from:"galatasaray", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh.../galatasaray.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"إعارة"}
            ]
        },
        // باقي الفرق فارغة وجاهزة للتعبئة
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

/* 2. الستايل (STYLES) - دمج احترافي لجمالية 0.txt مع ذكاء 01.txt */
const stylesV15 = `
<style>
    /* =========================================
       ELBOTOLAON PRO STYLES V15
       ========================================= */
    #elbotolaon-widget-container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff; color: #333; direction: rtl; text-align: right; box-sizing: border-box; width: 100%; max-width: 100%; }
    #elbotolaon-widget-container * { box-sizing: border-box; outline: none; }

    /* SECTIONS */
    .eb-section { margin-bottom: 25px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
    .eb-header { padding: 15px 20px; border-bottom: 2px solid #f5f5f5; display: flex; align-items: center; justify-content: space-between; background: #fafafa; }
    .eb-title { font-size: 18px; font-weight: 700; border-right: 5px solid #d2151e; padding-right: 12px; margin: 0; color: #333; }

    /* TEAM HEADER (From 0.txt) */
    .eb-team-header { padding: 25px; display: flex; align-items: center; gap: 20px; background: #fff; flex-wrap: wrap; }
    .eb-team-logo { width: 90px; height: 90px; object-fit: contain; }
    @media (max-width: 480px) {
        .eb-team-header { padding: 15px; flex-direction: column; text-align: center; }
        .eb-title { font-size: 16px; }
    }

    /* --- SMART RANKING TABLE (Logic from 01, Style from 0) --- */
    .eb-scroll { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    table.ranking-table { width: 100%; border-collapse: collapse; min-width: 100%; }
    
    table.ranking-table th { background: #f9f9f9; padding: 12px 8px; text-align: center; font-weight: 700; border-bottom: 2px solid #eee; color: #555; white-space: nowrap; font-size: 13px; }
    table.ranking-table td { padding: 10px 8px; text-align: center; border-bottom: 1px solid #f5f5f5; color: #444; font-size: 14px; }
    
    /* Column widths optimization */
    .col-rank { width: 40px; }
    .col-team { text-align: right !important; width: 40%; display: flex; align-items: center; gap: 10px; font-weight: 600; }
    .team-mini-logo { width: 24px; height: 24px; object-fit: contain; }
    
    /* Rank Badges & Colors */
    .rank-badge { display: inline-flex; justify-content: center; align-items: center; width: 24px; height: 24px; border-radius: 50%; color: #fff; font-size: 12px; font-weight: bold; background: #ccc; }
    .row-ucl { background-color: #f0fff4 !important; } .row-ucl .rank-badge { background: #28a745; } /* أخضر للأول والثاني */
    .row-conf { background-color: #e6f2ff !important; } .row-conf .rank-badge { background: #007bff; } /* أزرق للثالث */
    .row-rel { background-color: #fff5f5 !important; } .row-rel .rank-badge { background: #dc3545; } /* أحمر للأخيرين */
    
    .current-team-hl { background-color: #fff9db !important; border: 2px solid #d2151e; }
    .points-cell { font-weight: 800; background: #fdfdfd; color: #000; }

    /* --- DYNAMIC MATCHES (From 0.txt) --- */
    .eb-schedule-header { padding: 15px; background: #f8f8f8; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    .eb-select { padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; min-width: 120px; cursor: pointer; background: #fff; }
    .match-row { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f5f5f5; flex-wrap: wrap; transition: 0.2s; }
    .match-row:hover { background: #fafafa; }
    .m-date { width: 80px; font-size: 13px; color: #555; font-weight:bold; text-align: center; border-left: 1px solid #eee; padding-left: 10px; display: flex; flex-direction: column; justify-content: center; }
    .m-info { flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 0 15px; min-width: 220px; }
    .m-team { width: 35%; display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 14px; }
    .m-team.away { justify-content: flex-end; flex-direction: row-reverse; }
    .m-team img { width: 30px; height: 30px; }
    .m-res { background: #eee; padding: 6px 14px; border-radius: 6px; font-weight: bold; font-size: 15px; min-width: 60px; text-align: center; letter-spacing: 1px; }
    .m-stadium { font-size: 11px; color: #888; background: #f9f9f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #eee; white-space: nowrap; margin-top: 5px; }

    /* --- INTERACTIVE SQUAD CARDS (Accordion Effect) --- */
    .squad-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; padding: 20px; }
    .squad-card { border: 1px solid #eee; border-radius: 8px; background: #fff; cursor: pointer; transition: all 0.3s; overflow: hidden; position: relative; }
    .squad-card:hover { border-color: #d2151e; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .squad-card.active { border: 1px solid #d2151e; background: #fffafa; grid-row: span 2; }
    
    .card-main { display: flex; align-items: center; padding: 12px; }
    .card-main img { width: 55px; height: 55px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-left: 15px; object-fit: cover; }
    .card-txt h4 { margin: 0; font-size: 15px; font-weight: 700; color: #333; }
    .card-txt p { margin: 4px 0 0; font-size: 13px; color: #888; }
    
    .card-stats { display: none; border-top: 1px solid #eee; padding: 15px; background: #fff; animation: slideOpen 0.3s ease; }
    .squad-card.active .card-stats { display: block; }
    .cs-row { display: flex; justify-content: space-around; text-align: center; }
    .cs-box span { display: block; }
    .cs-val { font-weight: bold; font-size: 16px; color: #d2151e; }
    .cs-lbl { font-size: 12px; color: #999; }
    @keyframes slideOpen { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 100px; } }

    /* --- TRANSFERS TABLE --- */
    .transfers-table td { padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; vertical-align: middle; }
    .t-player img { width: 30px; height: 30px; border-radius: 50%; margin-left: 8px; vertical-align: middle; }
    .t-club img { width: 24px; height: 24px; margin-left: 5px; vertical-align: middle; }
    .t-type { color: #28a745; font-weight: bold; font-size: 13px; }

    /* MOBILE TWEAKS */
    @media (max-width: 480px) {
        .hide-mobile { display: none !important; }
        .m-stadium { display: none; }
        .col-team { width: auto; flex: 1; font-size: 13px; }
        .rank-badge { width: 20px; height: 20px; line-height: 20px; font-size: 11px; }
        table.ranking-table th, table.ranking-table td { padding: 10px 4px; font-size: 13px; }
        .m-team { font-size: 12px; flex-direction: column; gap: 2px; text-align: center; }
        .m-team.away { flex-direction: column; }
        .m-info { padding: 0 5px; }
        .squad-grid { grid-template-columns: 1fr; }
    }
</style>
`;

/* 3. المنطق (LOGIC) */
document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.getElementById("botola-app") || document.getElementById("team-app");
    if(!appContainer) return;

    const cTeamId = appContainer.getAttribute("data-team");
    const tInfo = BOTOLA_DB.teams[cTeamId] || BOTOLA_DB.teams["wac"];
    const tDetails = BOTOLA_DB.teamDetails[cTeamId] || { squad: [], transfers: [] };

    // A. دالة الترتيب (Sorting)
    const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => (b.pts - a.pts) || ((b.gf - b.ga) - (a.gf - a.ga)));

    let html = stylesV15 + '<div id="elbotolaon-widget-container">';

    // 1. Header
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

    // 2. Standings (The Smart Colored Table)
    html += `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">جدول الترتيب العام</h3></div>
        <div class="eb-scroll">
            <table class="ranking-table">
                <thead><tr><th class="col-rank">#</th><th>الفريق</th><th>لعب</th><th class="hide-mobile">فاز</th><th class="hide-mobile">تعادل</th><th class="hide-mobile">خسر</th><th class="hide-mobile">+/-</th><th>ن</th></tr></thead>
                <tbody>`;
    sortedStandings.forEach((row, index) => {
        const rank = index + 1;
        const teamData = BOTOLA_DB.teams[row.id];
        let rClass = "";
        
        // منطق الألوان الجديد
        if (rank <= 2) rClass = "row-ucl"; // أخضر (1, 2)
        else if (rank === 3) rClass = "row-conf"; // أزرق (3)
        else if (rank >= 15) rClass = "row-rel"; // أحمر (15, 16)
        
        if (row.id === cTeamId) rClass += " current-team-hl";

        html += `
        <tr class="${rClass}">
            <td><span class="rank-badge">${rank}</span></td>
            <td class="col-team"><img src="${teamData.logo}" class="team-mini-logo"> ${teamData.name}</td>
            <td>${row.p}</td>
            <td class="hide-mobile">${row.w}</td>
            <td class="hide-mobile">${row.d}</td>
            <td class="hide-mobile">${row.l}</td>
            <td class="hide-mobile">${row.gf - row.ga}</td>
            <td class="points-cell">${row.pts}</td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;

    // 3. Matches Schedule (Dynamic Dropdown)
    html += `
    <div class="eb-section">
        <div class="eb-schedule-header">
            <h3 class="eb-title">جدول المباريات</h3>
            <select id="roundSelect" class="eb-select" onchange="window.renderRound(this.value)">
                <option value="7">الجولة 7</option>
                <option value="8" selected>الجولة 8</option>
                <option value="9">الجولة 9</option>
            </select>
        </div>
        <div id="matchesBox"></div>
    </div>`;

    // 4. Squad (Interactive Cards)
    if(tDetails.squad && tDetails.squad.length > 0) {
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">تشكيلة الفريق</h3></div><div class="squad-grid">`;
        tDetails.squad.forEach((p, idx) => {
            html += `
            <div class="squad-card" id="card-${idx}" onclick="toggleCard(${idx})">
                <div class="card-main">
                    <img src="${p.img}" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="card-txt"><h4>${p.n}</h4><p>${p.p}</p></div>
                </div>
                <div class="card-stats">
                    <div class="cs-row">
                        <div class="cs-box"><span class="cs-val">${p.m}</span><span class="cs-lbl">مباريات</span></div>
                        <div class="cs-box"><span class="cs-val">${p.g || 0}</span><span class="cs-lbl">أهداف</span></div>
                        <div class="cs-box"><span class="cs-val">${p.y}</span><span class="cs-lbl">إنذارات</span></div>
                    </div>
                </div>
            </div>`;
        });
        html += `</div></div>`;
    }

    // 5. Transfers (Clean Table with Logos)
    if(tDetails.transfers && tDetails.transfers.length > 0) {
        html += `<div class="eb-section"><div class="eb-header"><h3 class="eb-title">سوق الانتقالات</h3></div><div class="eb-scroll"><table class="transfers-table" style="width:100%">`;
        tDetails.transfers.forEach(t => {
            // نستخدم شعار الفريق إذا كان رابطاً، أو شعار افتراضي
            const fLogo = t.from_logo || ""; 
            const tLogo = t.to_logo || "";
            html += `<tr>
                <td class="t-player"><img src="https://via.placeholder.com/30?text=P"> ${t.n}</td>
                <td class="t-club" style="color:#666">من: <img src="${fLogo}"></td>
                <td class="t-club" style="color:#666">إلى: <img src="${tLogo}"></td>
                <td class="t-type">${t.type}</td>
            </tr>`;
        });
        html += `</table></div></div>`;
    }

    html += `</div>`;
    appContainer.innerHTML = html;

    // --- Helper Functions ---
    
    // 1. Matches Renderer
    window.renderRound = function(roundId) {
        const box = document.getElementById("matchesBox");
        const matches = BOTOLA_DB.rounds[roundId] || [];
        
        let mHtml = "";
        if(matches.length === 0) {
            mHtml = '<div style="padding:20px;text-align:center;color:#999;">لا توجد مباريات لهذه الجولة</div>';
        } else {
            matches.forEach(m => {
                const logo1 = BOTOLA_DB.teams[m.t1] ? BOTOLA_DB.teams[m.t1].logo : "";
                const name1 = BOTOLA_DB.teams[m.t1] ? BOTOLA_DB.teams[m.t1].name : m.t1;
                const logo2 = BOTOLA_DB.teams[m.t2] ? BOTOLA_DB.teams[m.t2].logo : "";
                const name2 = BOTOLA_DB.teams[m.t2] ? BOTOLA_DB.teams[m.t2].name : m.t2;

                mHtml += `
                <div class="match-row">
                    <div class="m-date"><span>${m.d}</span><span>${m.t}</span></div>
                    <div class="m-info">
                        <div class="m-team"><img src="${logo1}"> ${name1}</div>
                        <div class="m-res">${m.s}</div>
                        <div class="m-team away"><img src="${logo2}"> ${name2}</div>
                    </div>
                    <div class="m-stadium">${m.std}</div>
                </div>`;
            });
        }
        box.innerHTML = mHtml;
    };
    
    // 2. Toggle Card Function (Accordion)
    window.toggleCard = function(idx) {
        // Close all others
        const allCards = document.querySelectorAll('.squad-card');
        allCards.forEach(c => {
            if(c.id !== `card-${idx}`) c.classList.remove('active');
        });
        // Toggle current
        const current = document.getElementById(`card-${idx}`);
        current.classList.toggle('active');
    };
    
    // Initial Call
    window.renderRound("8");
});
