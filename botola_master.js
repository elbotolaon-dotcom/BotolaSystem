// botola_master.js - النظام المتكامل للبطولة المغربية (النسخة المحسنة)
(function() {
    'use strict';
    
    // ==================== قاعدة البيانات الكاملة ====================
    const BOTOLA_DB = {
        teams: {
            "wac": { 
                name: "الوداد الرياضي", 
                logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", 
                founded: "1937", 
                city: "الدار البيضاء",
                stadium: "مركب محمد الخامس",
                manager: "أديل كروش"
            },
            "rca": { 
                name: "الرجاء الرياضي", 
                logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", 
                founded: "1949", 
                city: "الدار البيضاء",
                stadium: "مركب محمد الخامس",
                manager: "جوزيف زينباور"
            },
            "far": { 
                name: "الجيش الملكي", 
                logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", 
                founded: "1958", 
                city: "الرباط",
                stadium: "المجمع الرياضي مولاي عبد الله",
                manager: "مصطفى المدبوح"
            }
            // ... باقي الفرق (أضفها كما تريد)
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
            "1": [
                {d:"12/09", t:"20:00", t1:"wac", s:"1-0", t2:"kacm", std:"مركب محمد الخامس"},
                {d:"12/09", t:"18:00", t1:"far", s:"2-0", t2:"fus", std:"مركب مولاي عبد الله"},
                {d:"13/09", t:"16:00", t1:"rca", s:"1-0", t2:"husa", std:"مركب محمد الخامس"}
            ],
            "2": [
                {d:"19/09", t:"20:00", t1:"usym", s:"1-1", t2:"wac", std:"ملعب البشير"},
                {d:"19/09", t:"18:00", t1:"fus", s:"0-0", t2:"rca", std:"ملعب مولاي الحسن"},
                {d:"20/09", t:"16:00", t1:"kacm", s:"1-2", t2:"far", std:"ملعب مراكش الكبير"}
            ],
            "3": [
                {d:"28/09", t:"20:00", t1:"wac", s:"3-1", t2:"rcz", std:"مركب محمد الخامس"},
                {d:"28/09", t:"18:00", t1:"far", s:"4-0", t2:"ocs", std:"مركب مولاي عبد الله"},
                {d:"29/09", t:"16:00", t1:"rca", s:"2-0", t2:"irt", std:"مركب محمد الخامس"}
            ],
            "4": [
                {d:"03/10", t:"18:00", t1:"codm", s:"1-3", t2:"wac", std:"الشرق الشرفي"},
                {d:"03/10", t:"16:00", t1:"ocs", s:"0-3", t2:"rca", std:"ملعب المسيرة"},
                {d:"04/10", t:"18:00", t1:"rcz", s:"1-1", t2:"far", std:"ملعب أحمد شكري"}
            ],
            "5": [
                {d:"29/10", t:"20:00", t1:"wac", s:"0-0", t2:"rca", std:"مركب محمد الخامس"},
                {d:"29/10", t:"18:00", t1:"far", s:"3-0", t2:"codm", std:"مركب مولاي عبد الله"},
                {d:"30/10", t:"16:00", t1:"mas", s:"1-0", t2:"husa", std:"ملعب فاس الكبير"}
            ],
            "6": [
                {d:"02/11", t:"20:00", t1:"wac", s:"2-0", t2:"irt", std:"مركب محمد الخامس"},
                {d:"02/11", t:"18:00", t1:"rca", s:"1-0", t2:"uts", std:"مركب محمد الخامس"},
                {d:"03/11", t:"16:00", t1:"far", s:"0-0", t2:"dhj", std:"مركب مولاي عبد الله"}
            ],
            "7": [
                {d:"05/11", t:"16:00", t1:"husa", s:"1-2", t2:"wac", std:"ملعب أدرار"},
                {d:"05/11", t:"18:00", t1:"rca", s:"2-0", t2:"codm", std:"مركب محمد الخامس"},
                {d:"06/11", t:"16:00", t1:"far", s:"1-0", t2:"mas", std:"مركب مولاي عبد الله"}
            ],
            "8": [
                {d:"09/11", t:"16:00", t1:"ocs", s:"1-2", t2:"wac", std:"ملعب المسيرة"},
                {d:"09/11", t:"18:00", t1:"far", s:"1-0", t2:"mas", std:"مركب مولاي عبد الله"},
                {d:"10/11", t:"16:00", t1:"rca", s:"3-0", t2:"dhj", std:"مركب محمد الخامس"}
            ]
        },
        
        teamDetails: {
            "wac": {
                squad: [
                    {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, g:0, y:0, r:0},
                    {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:7, g:2, y:1, r:0},
                    {n:"أيوب بوشتى", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8u0i1Q9UlLw1PZbWBD6LvhkEx8x1IexgSkl1rnAxXFNb_glN3wzyJzf-asvvGITtfuD82vHLtvb1gKFPSTCMzOshcl6Hk_cot7CFSAkiHpk5IbgkwoifJpo1B17Lx_gEM7JxidrpN4XjRyfjv85yL-HULj4_U7yWhQE2NUHG2_k1tXpUWQU7zf6TX78/s1600/%D8%A7%D9%94%D9%8A%D9%88%D8%A8%20%D8%A8%D9%88%D8%B4%D8%AA%D9%89.png", m:8, g:0, y:2, r:0}
                    // ... أضف باقي اللاعبين هنا
                ],
                transfers: [
                    {n:"زاكارياس غيلان", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:""}
                    // ... أضف باقي الانتقالات هنا
                ]
            }
            // ... أضف تفاصيل باقي الفرق هنا
        }
    };
    
    // ==================== الستايل الكامل ====================
    const STYLES = `
    <style>
        #elbotolaon-widget-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #fff;
            color: #333;
            direction: rtl;
            text-align: right;
            font-size: 15px;
            line-height: 1.6;
            width: 100%;
            box-sizing: border-box;
        }
        
        #elbotolaon-widget-container * { box-sizing: border-box; }
        
        /* SECTIONS */
        .eb-section { 
            margin-bottom: 25px; 
            border: 1px solid #eee; 
            border-radius: 8px; 
            overflow: hidden; 
            background: #fff; 
        }
        .eb-header { 
            padding: 15px 20px; 
            border-bottom: 2px solid #f5f5f5; 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            background: #fafafa; 
        }
        .eb-title { 
            font-size: 18px; 
            font-weight: 700; 
            border-right: 5px solid #d2151e; 
            padding-right: 12px; 
            margin: 0; 
            color: #333; 
        }
        
        /* TEAM HEADER */
        .eb-team-header { 
            padding: 25px; 
            display: flex; 
            align-items: center; 
            gap: 20px; 
            background: #fff; 
            flex-wrap: wrap; 
        }
        .eb-team-logo { 
            width: 100px; 
            height: 100px; 
            object-fit: contain; 
        }
        
        /* STATS */
        .eb-stats-wrapper { 
            display: flex; 
            flex-wrap: wrap; 
            border-top: 1px solid #eee; 
            background: #fbfbfb; 
        }
        .eb-stat-item { 
            flex: 1; 
            min-width: 100px; 
            text-align: center; 
            padding: 15px 5px; 
            border-left: 1px solid #eee; 
        }
        .eb-stat-item:last-child { border-left: none; }
        .eb-stat-num { 
            font-size: 24px; 
            font-weight: 800; 
            color: #333; 
            display: block; 
            margin-bottom: 5px; 
        }
        .eb-stat-label { 
            font-size: 13px; 
            color: #666; 
            display: block; 
            font-weight: 600; 
        }
        
        /* TABLE - تصميم محسن */
        .eb-ranking-scroll { width: 100%; overflow-x: auto; }
        table.ranking-table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 0;
            min-width: 600px;
        }
        table.ranking-table th {
            background: #f4f4f4;
            color: #555;
            font-weight: 700;
            padding: 12px 8px;
            text-align: center;
            font-size: 13px;
            border-bottom: 2px solid #ddd;
            white-space: nowrap;
        }
        table.ranking-table td {
            padding: 12px 8px;
            text-align: center;
            border-bottom: 1px solid #eee;
            color: #444;
            font-size: 14px;
            white-space: nowrap;
            vertical-align: middle;
        }
        table.ranking-table th:nth-child(1),
        table.ranking-table td:nth-child(1) {
            width: 50px;
            text-align: center;
        }
        table.ranking-table th:nth-child(2),
        table.ranking-table td:nth-child(2) {
            text-align: right;
            padding-right: 10px;
            width: auto;
            min-width: 200px;
        }
        .col-team { 
            display: flex; 
            align-items: center; 
            justify-content: flex-start;
            gap: 10px; 
            font-weight: 600;
            width: 100%;
        }
        .team-mini-logo { 
            width: 28px; 
            height: 28px; 
            object-fit: contain; 
            display: inline-block; 
            margin: 0; 
        }
        .rank-badge { 
            display: inline-flex; 
            justify-content: center; 
            align-items: center;
            width: 26px; 
            height: 26px; 
            border-radius: 50%; 
            color: #fff; 
            font-size: 12px; 
            background: #ccc; 
            font-weight: bold;
        }
        /* التلوين - تحسين الألوان */
        tr.row-ucl { background-color: rgba(40, 167, 69, 0.1) !important; } 
        tr.row-ucl .rank-badge { background: #28a745 !important; }
        tr.row-conf { background-color: rgba(0, 123, 255, 0.1) !important; } 
        tr.row-conf .rank-badge { background: #007bff !important; }
        tr.row-rel { background-color: rgba(220, 53, 69, 0.1) !important; } 
        tr.row-rel .rank-badge { background: #dc3545 !important; }
        .current-team-highlight { 
            border: 2px solid #d2151e !important;
            background-color: #fff !important;
            font-weight: bold !important;
        }
        .points-cell { 
            font-weight: 800 !important; 
            color: #000 !important; 
            background: rgba(0,0,0,0.03) !important; 
            font-size: 15px !important;
        }
        
        /* MATCHES - تنسيق محسن للنتائج */
        .eb-schedule-header { 
            padding: 15px; 
            background: #f8f8f8; 
            border-bottom: 1px solid #eee; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            flex-wrap: wrap; 
            gap: 10px; 
        }
        .eb-select { 
            padding: 8px 12px; 
            border: 1px solid #ddd; 
            border-radius: 6px; 
            font-size: 14px; 
            width: 160px; 
            background: white;
        }
        .match-row { 
            display: flex; 
            align-items: center; 
            padding: 12px 15px; 
            border-bottom: 1px solid #f5f5f5; 
            flex-wrap: wrap; 
        }
        .m-date { 
            width: 80px; 
            font-size: 13px; 
            color: #555; 
            font-weight: bold; 
            text-align: center; 
            border-left: 1px solid #eee; 
            padding-left: 10px; 
            line-height: 1.4;
        }
        .m-info { 
            flex: 1; 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            padding: 0 15px; 
            min-width: 250px; 
        }
        .m-team { 
            width: 35%; 
            display: flex; 
            align-items: center; 
            gap: 10px; 
            font-weight: 700; 
            font-size: 14px; 
        }
        .m-team.away { 
            justify-content: flex-end; 
            flex-direction: row-reverse; 
            text-align: left;
        }
        .m-team img { 
            width: 30px; 
            height: 30px; 
            object-fit: contain;
        }
        .m-res { 
            background: #f8f9fa; 
            padding: 6px 12px; 
            border-radius: 6px; 
            font-weight: bold; 
            font-size: 15px; 
            min-width: 60px; 
            text-align: center; 
            border: 1px solid #e9ecef;
            color: #333;
        }
        .m-stadium { 
            font-size: 12px; 
            color: #777; 
            background: #f9f9f9; 
            padding: 4px 8px; 
            border-radius: 4px; 
            border: 1px solid #eee; 
            white-space: nowrap; 
            margin-top: 5px; 
            display: inline-block;
        }
        
        /* SQUAD - تحسين البطاقات */
        .eb-squad-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
            gap: 15px; 
            padding: 20px; 
        }
        .squad-card { 
            border: 1px solid #e9ecef; 
            border-radius: 10px; 
            background: #fff; 
            cursor: pointer; 
            transition: all 0.3s ease; 
            overflow: hidden; 
            position: relative; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .squad-card:hover { 
            border-color: #d2151e; 
            box-shadow: 0 5px 15px rgba(210, 21, 30, 0.1); 
            transform: translateY(-3px);
        }
        .squad-card.active { 
            border: 2px solid #d2151e; 
            background: #fffafa; 
            grid-row: span 2; 
        }
        .card-main { 
            display: flex; 
            align-items: center; 
            padding: 15px; 
        }
        .card-main img { 
            width: 60px; 
            height: 60px; 
            border-radius: 50%; 
            border: 3px solid #fff; 
            box-shadow: 0 3px 8px rgba(0,0,0,0.1); 
            margin-left: 15px; 
            object-fit: cover; 
            background: #f8f9fa;
        }
        .card-txt { flex: 1; }
        .card-txt h4 { 
            margin: 0 0 5px 0; 
            font-size: 16px; 
            font-weight: 700; 
            color: #333; 
        }
        .card-txt p { 
            margin: 0; 
            font-size: 13px; 
            color: #888; 
            text-transform: uppercase; 
            font-weight: 600;
        }
        .card-arrow { 
            margin-right: auto; 
            color: #ccc; 
            transition: transform 0.3s; 
            font-size: 18px; 
            margin-left: 10px;
        }
        .squad-card.active .card-arrow { 
            transform: rotate(180deg); 
            color: #d2151e; 
        }
        .card-stats { 
            display: none; 
            border-top: 1px solid #eee; 
            padding: 20px 15px; 
            background: #fff; 
            animation: slideOpen 0.3s ease; 
        }
        .squad-card.active .card-stats { 
            display: block; 
        }
        .cs-row { 
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            gap: 10px; 
            text-align: center; 
        }
        .cs-box { 
            display: flex; 
            flex-direction: column; 
            align-items: center;
        }
        .cs-val { 
            font-weight: bold; 
            font-size: 18px; 
            color: #d2151e; 
            margin-bottom: 3px;
        }
        .cs-lbl { 
            font-size: 11px; 
            color: #999; 
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        @keyframes slideOpen { 
            from { opacity: 0; max-height: 0; } 
            to { opacity: 1; max-height: 100px; } 
        }
        
        /* TRANSFERS - تحسين الجدول */
        .transfers-scroll { 
            overflow-x: auto; 
            width: 100%; 
            padding: 0 20px 20px;
        }
        .transfers-table { 
            width: 100%; 
            border-collapse: collapse; 
            font-size: 14px; 
            min-width: 650px;
        }
        .transfers-table thead { background: #f8f9fa; }
        .transfers-table td { 
            padding: 14px 12px; 
            border-bottom: 1px solid #eee; 
            vertical-align: middle; 
        }
        .transfers-table thead td { 
            font-weight: bold; 
            color: #555; 
            font-size: 14px; 
            padding: 12px;
        }
        .t-player { 
            display: flex; 
            align-items: center; 
        }
        .t-player img { 
            width: 30px; 
            height: 30px; 
            border-radius: 50%; 
            margin-left: 10px; 
            vertical-align: middle; 
            object-fit: cover;
        }
        .t-club { 
            display: flex; 
            align-items: center; 
            gap: 8px;
        }
        .t-club img { 
            width: 26px; 
            height: 26px; 
            margin-left: 8px; 
            vertical-align: middle; 
            object-fit: contain;
        }
        .t-type { 
            font-weight: bold; 
            color: #28a745; 
            font-size: 13px; 
            padding: 4px 8px;
            background: rgba(40, 167, 69, 0.1);
            border-radius: 4px;
            display: inline-block;
        }
        .t-type.loan { 
            color: #007bff; 
            background: rgba(0, 123, 255, 0.1);
        }
        
        /* MOBILE */
        @media (max-width: 768px) {
            .hide-on-mobile { display: none !important; }
            .hide-trans-mobile { display: none !important; }
            .col-team { width: 60%; font-size: 14px; }
            table.ranking-table { min-width: 100%; }
            .m-stadium { display: none; }
            .eb-team-header { flex-direction: column; text-align: center; }
            .eb-squad-grid { 
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
                gap: 12px; 
                padding: 15px; 
            }
            .card-main { padding: 12px; }
            .card-main img { width: 50px; height: 50px; margin-left: 12px; }
            .eb-stats-wrapper { flex-wrap: wrap; }
            .eb-stat-item { 
                flex: 1 0 50%; 
                min-width: 50%; 
                border-left: none; 
                border-bottom: 1px solid #eee; 
                padding: 12px 5px;
            }
            .eb-stat-num { font-size: 20px; }
            .transfers-scroll { padding: 0 10px 15px; }
            .transfers-table { min-width: 100%; font-size: 13px; }
            .t-player img, .t-club img { width: 24px; height: 24px; }
        }
        @media (max-width: 480px) {
            .eb-stat-item { flex: 1 0 100%; }
            .eb-squad-grid { grid-template-columns: 1fr; }
            .m-team { width: 40%; font-size: 13px; }
            .m-team img { width: 26px; height: 26px; }
            .m-res { min-width: 50px; font-size: 14px; padding: 5px 8px; }
            .m-date { width: 70px; font-size: 12px; }
            .cs-row { grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .cs-val { font-size: 16px; }
        }
    </style>
    `;
    
    // ==================== الدوال المساعدة ====================
    function loadRoundMatches(roundId) {
        const container = document.getElementById('matchesContainer');
        if (!container) return;
        
        const matches = BOTOLA_DB.rounds[roundId] || [];
        let matchesHtml = '';
        
        if(matches.length === 0) {
            matchesHtml = `
            <div style="padding:40px 20px; text-align:center; color:#999;">
                <div style="font-size:18px; margin-bottom:10px;">⚽</div>
                <div style="font-size:15px;">لا توجد مباريات لهذه الجولة</div>
            </div>`;
        } else {
            matches.forEach(match => {
                const team1 = BOTOLA_DB.teams[match.t1];
                const team2 = BOTOLA_DB.teams[match.t2];
                
                if (!team1 || !team2) return;
                
                matchesHtml += `
                <div class="match-row">
                    <div class="m-date">${match.d}<br><span style="color:#888; font-size:11px;">${match.t}</span></div>
                    <div class="m-info">
                        <div class="m-team">
                            <img src="${team1.logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                            <span>${team1.name}</span>
                        </div>
                        <div class="m-res">${match.s}</div>
                        <div class="m-team away">
                            <img src="${team2.logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                            <span>${team2.name}</span>
                        </div>
                    </div>
                    <div class="m-stadium">${match.std}</div>
                </div>`;
            });
        }
        
        container.innerHTML = matchesHtml;
    }
    
    function togglePlayerCard(index) {
        const card = document.getElementById(`playerCard-${index}`);
        if (!card) return;
        
        const isActive = card.classList.contains('active');
        
        // إغلاق جميع البطاقات
        document.querySelectorAll('.squad-card').forEach(c => {
            c.classList.remove('active');
        });
        
        // فتح البطاقة المختارة إذا لم تكن مفتوحة
        if(!isActive) {
            card.classList.add('active');
        }
    }
    
    function buildTeamSquadHTML(squad) {
        if (!squad || squad.length === 0) return `
        <div style="padding:40px 20px; text-align:center; color:#999;">
            <div style="font-size:18px; margin-bottom:10px;">👥</div>
            <div style="font-size:15px;">لا تتوفر بيانات التشكيلة حالياً</div>
        </div>`;
        
        let squadHtml = '';
        squad.forEach((player, index) => {
            squadHtml += `
            <div class="squad-card" id="playerCard-${index}" onclick="window.togglePlayerCard(${index})">
                <div class="card-main">
                    <img src="${player.img}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <div class="card-txt">
                        <h4>${player.n}</h4>
                        <p>${player.p}</p>
                    </div>
                    <div class="card-arrow">▼</div>
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
        
        return squadHtml;
    }
    
    function buildTransfersHTML(transfers, teamName) {
        if (!transfers || transfers.length === 0) return `
        <div style="padding:40px 20px; text-align:center; color:#999;">
            <div style="font-size:18px; margin-bottom:10px;">🔄</div>
            <div style="font-size:15px;">لا تتوفر بيانات الانتقالات حالياً</div>
        </div>`;
        
        let transfersHtml = '';
        transfers.forEach((transfer, index) => {
            transfersHtml += `
            <tr>
                <td class="hide-trans-mobile">${index + 1}</td>
                <td class="t-player">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif">
                    <span>${transfer.n}</span>
                </td>
                <td class="t-club">
                    <img src="${transfer.from_logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${transfer.from}</span>
                </td>
                <td class="t-club">
                    <img src="${transfer.to_logo}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${teamName}</span>
                </td>
                <td class="t-type hide-trans-mobile">${transfer.type}</td>
            </tr>`;
        });
        
        return `
        <table class="transfers-table">
            <thead>
                <tr>
                    <td class="hide-trans-mobile">#</td>
                    <td>اللاعب</td>
                    <td>من</td>
                    <td>إلى</td>
                    <td class="hide-trans-mobile">النوع</td>
                </tr>
            </thead>
            <tbody>
                ${transfersHtml}
            </tbody>
        </table>`;
    }
    
    // ==================== الدالة الرئيسية ====================
    function initBotolaSystem() {
        const appContainer = document.getElementById("botola-app");
        if(!appContainer) {
            console.error('لم يتم العثور على حاوية التطبيق');
            return;
        }
        
        const currentTeamId = appContainer.getAttribute("data-team") || "wac";
        const teamInfo = BOTOLA_DB.teams[currentTeamId] || BOTOLA_DB.teams["wac"];
        const teamDetails = BOTOLA_DB.teamDetails[currentTeamId] || { squad: [], transfers: [] };
        
        // ترتيب الفريق ديناميكياً
        const sortedStandings = [...BOTOLA_DB.standings].sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            return (b.gf - b.ga) - (a.gf - a.ga);
        });
        
        let html = STYLES;
        html += '<div id="elbotolaon-widget-container">';
        
        /* 1. رأس الفريق والإحصائيات */
        html += `
        <div class="eb-section">
            <div class="eb-team-header">
                <img src="${teamInfo.logo}" class="eb-team-logo" alt="${teamInfo.name}">
                <div>
                    <h1 style="margin:0 0 10px; color:#d2151e; font-size:28px;">${teamInfo.name}</h1>
                    <div style="font-size:14px; color:#666;">
                        <p style="margin:5px 0;"><strong>تاريخ التأسيس:</strong> ${teamInfo.founded} 📅</p>
                        <p style="margin:5px 0;"><strong>المدينة:</strong> ${teamInfo.city} | <strong>المدرب:</strong> ${teamInfo.manager || 'غير معروف'}</p>
                        <p style="margin:5px 0;"><strong>الملعب:</strong> ${teamInfo.stadium} 🏟️</p>
                    </div>
                </div>
            </div>
            <div class="eb-stats-wrapper">
                <div class="eb-stat-item"><span class="eb-stat-num">8</span><span class="eb-stat-label">مباريات</span></div>
                <div class="eb-stat-item"><span class="eb-stat-num">14</span><span class="eb-stat-label">أهداف</span></div>
                <div class="eb-stat-item"><span class="eb-stat-num">22</span><span class="eb-stat-label">صفراء</span></div>
                <div class="eb-stat-item"><span class="eb-stat-num">1</span><span class="eb-stat-label">حمراء</span></div>
                <div class="eb-stat-item"><span class="eb-stat-num">68%</span><span class="eb-stat-label">حيازة</span></div>
            </div>
        </div>`;
        
        /* 2. جدول الترتيب العام */
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">جدول الترتيب العام</h3></div>
            <div class="eb-ranking-scroll">
                <table class="ranking-table">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>
                    <tbody>`;
        
        sortedStandings.forEach((row, index) => {
            const rank = index + 1;
            const teamData = BOTOLA_DB.teams[row.id];
            if (!teamData) return;
            
            let rowClass = '';
            // التلوين كما في 01.txt
            if (rank <= 2) rowClass = 'row-ucl';
            else if (rank === 3) rowClass = 'row-conf';
            else if (rank >= 15) rowClass = 'row-rel';
            
            // إبراز الفريق الحالي
            if (row.id === currentTeamId) rowClass += ' current-team-highlight';
            
            html += `
            <tr class="${rowClass}">
                <td><span class="rank-badge">${rank}</span></td>
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
        
        /* 3. جدول المباريات */
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
        
        /* 4. تشكيلة الفريق */
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">تشكيلة الفريق</h3></div>
            <div class="eb-squad-grid" id="squadContainer">
                ${buildTeamSquadHTML(teamDetails.squad)}
            </div>
        </div>`;
        
        /* 5. الانتقالات */
        html += `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">الانتقالات والإعارات</h3></div>
            <div class="transfers-scroll">
                ${buildTransfersHTML(teamDetails.transfers, teamInfo.name)}
            </div>
        </div>`;
        
        html += '</div>'; // نهاية الحاوية
        
        appContainer.innerHTML = html;
        
        // إضافة الدوال إلى window للاستدعاء