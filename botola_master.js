// botola_master.js - نظام البطولة الوطنية المغربية المتكامل

(function() {
    'use strict';

    // ==================== قاعدة البيانات (الفرق، اللاعبين، المباريات) ====================
    const DB = {
        // بيانات الفرق الأساسية (يجب أن تطابق IDs في index.html)
        teams: {
            "wac": { name: "الوداد الرياضي", founded: "1937", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "رولاني موكوينا", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png" },
            "rca": { name: "الرجاء الرياضي", founded: "1949", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "ريكاردو سا بينتو", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
            "far": { name: "الجيش الملكي", founded: "1958", city: "الرباط", stadium: "المجمع الرياضي مولاي عبد الله", manager: "هوبرت فيلود", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
            "mas": { name: "المغرب الفاسي", founded: "1946", city: "فاس", stadium: "ملعب فاس الكبير", manager: "طارق السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
            "rsb": { name: "نهضة بركان", founded: "1938", city: "بركان", stadium: "ملعب البلدي ببركان", manager: "معين الشعباني", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
            "codm": { name: "النادي المكناسي", founded: "1962", city: "مكناس", stadium: "الملعب الشرفي", manager: "عزيز كركاش", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
            "irt": { name: "اتحاد طنجة", founded: "1983", city: "طنجة", stadium: "ملعب ابن بطوطة", manager: "هلال الطير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
            "ocs": { name: "أولمبيك آسفي", founded: "1921", city: "آسفي", stadium: "ملعب المسيرة", manager: "زكرياء عبوب", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" },
            "fus": { name: "الفتح الرياضي", founded: "1946", city: "الرباط", stadium: "ملعب مولاي الحسن", manager: "جمال السلامي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
            "uts": { name: "إتحاد تواركة", founded: "1969", city: "الرباط", stadium: "ملعب الأمير مولاي الحسن", manager: "طارق السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
            "husa": { name: "حسنية أكادير", founded: "1946", city: "أكادير", stadium: "ملعب أدرار", manager: "عبد الهادي السكتيوي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
            "dhj": { name: "الدفاع الجديدي", founded: "1956", city: "الجديدة", stadium: "ملعب العبدي", manager: "عبد الرحيم طاليب", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" },
            "od": { name: "أولمبيك الدشيرة", founded: "1940", city: "الدشيرة", stadium: "ملعب أحمد فانا", manager: "مصطفى أوشريف", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png" },
            "rcz": { name: "نهضة الزمامرة", founded: "1977", city: "الزمامرة", stadium: "ملعب أحمد شكري", manager: "محمد أمين بنهاشم", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" },
            "kacm": { name: "الكوكب المراكشي", founded: "1947", city: "مراكش", stadium: "ملعب مراكش الكبير", manager: "رضوان الحيمر", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png" },
            "usym": { name: "يعقوب المنصور", founded: "1989", city: "الرباط", stadium: "ملعب يعقوب المنصور", manager: "مهدي بنعطية", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png" }
        },

        // بيانات الترتيب (قم بتعديل الأرقام هنا، الترتيب سيحدث تلقائياً)
        standings: [
            { id: "rsb",  p: 10, w: 7, d: 2, l: 1, gf: 13, ga: 4 },
            { id: "mas",  p: 10, w: 5, d: 3, l: 2, gf: 8,  ga: 6 },
            { id: "far",  p: 10, w: 4, d: 4, l: 2, gf: 14, ga: 4 },
            { id: "wac",  p: 10, w: 4, d: 3, l: 3, gf: 13, ga: 11 },
            { id: "rca",  p: 10, w: 3, d: 4, l: 3, gf: 8,  ga: 8 },
            { id: "husa", p: 10, w: 4, d: 1, l: 5, gf: 11, ga: 12 },
            { id: "uts",  p: 10, w: 3, d: 4, l: 3, gf: 12, ga: 10 },
            { id: "rcz",  p: 10, w: 4, d: 1, l: 5, gf: 10, ga: 14 },
            { id: "dhj",  p: 10, w: 4, d: 1, l: 5, gf: 9,  ga: 13 },
            { id: "irt",  p: 10, w: 3, d: 3, l: 4, gf: 12, ga: 12 },
            { id: "fus",  p: 10, w: 3, d: 3, l: 4, gf: 8,  ga: 9 },
            { id: "ocs",  p: 10, w: 3, d: 2, l: 5, gf: 10, ga: 15 },
            { id: "codm", p: 10, w: 2, d: 4, l: 4, gf: 7,  ga: 11 },
            { id: "od",   p: 10, w: 2, d: 4, l: 4, gf: 9,  ga: 12 }, // مثال
            { id: "kacm", p: 10, w: 2, d: 3, l: 5, gf: 8,  ga: 13 }, // مثال
            { id: "usym", p: 10, w: 1, d: 5, l: 4, gf: 6,  ga: 10 }  // مثال
        ],

        // جدول المباريات
        rounds: {
            "10": [ // الجولة الحالية كمثال
                {d:"08/11", t:"18:00", t1:"rca", s:"0-0", t2:"mas", std:"العربي الزاولي"},
                {d:"09/11", t:"16:00", t1:"wac", s:"2-2", t2:"irt", std:"العربي الزاولي"},
                {d:"09/11", t:"20:00", t1:"rsb", s:"1-0", t2:"husa", std:"البلدي بركان"},
                {d:"10/11", t:"18:00", t1:"far", s:"1-1", t2:"uts", std:"القنيطرة"}
            ],
            "11": [ // الجولة القادمة
                {d:"22/11", t:"20:00", t1:"mas", s:"-", t2:"far", std:"فاس الكبير"},
                {d:"23/11", t:"16:00", t1:"rca", s:"-", t2:"wac", std:"العربي الزاولي"},
                {d:"23/11", t:"18:00", t1:"irt", s:"-", t2:"rsb", std:"سانية الرمل"}
            ]
        },

        // بيانات اللاعبين (تم دمج بيانات الوداد الكاملة)
        players: {
            "wac": [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:10, g:0, a:0},
                {n:"عبد العالي المحمدي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjTX9RTHz61FreoTcdlilvb2h-pncWoJ70msZtsuVDNKBd44pD6grL0lpf9LdZ15L_HfwTQTBfD_4jT2mS7R3imC5czEEyTlkXtREcAUZvYkQDKweUXrk89BiInp69yPcsDMZS6F1IQ1sOzeZ5-VaKriQgl34yT93IXOEQGPNeFWmTe1PigVTq2SUaksk/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D8%AF%D9%8A.png", m:2, g:0, a:0},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:9, g:1, a:0},
                {n:"نبيل مرموق", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:8, g:0, a:0},
                {n:"محمد مفيد", p:"مدافع أيمن", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidaZpqymNDEyQTp5GQ9i7nOp1-hp3hyphenhyphenCZAO7sSJ4oSrQAyUqJgrcbBRTdJSOC3sw_laHKtde1EynCzeBqLDZ5l9DpxB-1K9qtlJew-3jnVnq4L8T-6NwSLet5FV39N081wJwdg-fITlFu9PeXrDYqDCSYB0gRpJZGvE_KVQoL0yHzKFBjMLtr-htE0JvY/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D9%85%D9%81%D9%8A%D8%AF.png", m:10, g:0, a:2},
                {n:"أيوب بوشتى", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8u0i1Q9UlLw1PZbWBD6LvhkEx8x1IexgSkl1rnAxXFNb_glN3wzyJzf-asvvGITtfuD82vHLtvb1gKFPSTCMzOshcl6Hk_cot7CFSAkiHpk5IbgkwoifJpo1B17Lx_gEM7JxidrpN4XjRyfjv85yL-HULj4_U7yWhQE2NUHG2_k1tXpUWQU7zf6TX78/s1600/%D8%A7%D9%94%D9%8A%D9%88%D8%A8%20%D8%A8%D9%88%D8%B4%D8%AA%D9%89.png", m:6, g:0, a:0},
                {n:"أيمن ديراني", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", m:5, g:0, a:0},
                {n:"زكرياء ناسيك", p:"مدافع أيسر", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:7, g:0, a:1},
                {n:"أسامة محروس", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:8, g:0, a:0},
                {n:"إسماعيل المترجي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:6, g:1, a:0},
                {n:"حمزة الساخي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:9, g:2, a:1},
                {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:4, g:0, a:0},
                {n:"آرثور وينديروسكي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyclJvueyEeJJfK-20D167QfRMpOrGY8BdaTCll25ui4kn8t8v0qKO3KDU6qriRPkg-_NcBeWAdAW-5ScgVK1wq-amXNaHh2Tu_uhyphenhyphenjsmrKIV3XWHi0qa1a4g46ahguKntingVgvCmkvhVIMPOp5r0-pH9ROSSrGvEPzInPw0CL-CjbEcUk64s2ku-1ww/s1600/%D8%A7%D9%93%D8%B1%D8%AB%D9%88%D8%B1%20%D9%88%D9%8A%D9%86%D8%AF%D9%8A%D8%B1%D9%88%D8%B3%D9%83%D9%8A.png", m:5, g:0, a:0},
                {n:"وليد ناسي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nX1H0ZgZb-8NOODz3N1N9a0nxO37oZPbTzdTN6PhaY6RmXwRbJNHd7H6QFo-yO-I0FQgZuQL0fCY3n5IYlyEbB3EJOTWQLeqdip3bSq3lgre6I08PDrp01KeyTLacJhUvjRbj6vXyid_1_EbiCx6D4z8v7RvGMsNUPA9ddNZKc-rxe9zTmjDZ6bTNGY/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D9%86%D8%A7%D8%B3%D9%8A.png", m:8, g:2, a:1},
                {n:"محمد رايحي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHVwPaPAzeaAbXgiyuWSLyOS_GuMf-0_wg3NUtjX3-jlMfHyNxQOGuCV2VG2wo0arQcBOB0KmRwC431RO8DvPxEdTWHKhVuhW2vrQ9JARMkZdVsycWLNi19KEzKn0kz-EXLBYPqr8qopu2Bdcymsvg4jLvhxtO4C-u1EnNLaAsEJEujKuBXNdnljoT-lg/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D8%A7%D9%8A%D8%AD%D9%8A.png", m:7, g:1, a:0},
                {n:"كاسيوس مايلولا", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", m:6, g:1, a:0},
                {n:"مباي نيانغ", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/blank.gif", m:5, g:2, a:0},
                {n:"سيف الدين بوهرة", p:"جناح", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-gjy7i738UOKEtaApP7oSaMgogLZWe5DEdw9MsHTXiHHcuoyiqJINV8jJ1m-PfHcQ9PsuOmP36VSvPbb5Sn_5n3Tlee7fmkVmrxEwwNEDNxfc6D2npUE_eG-NcGeQjBrvXsbh7rbJ0F_WljAyiVO9_b7g_cM29wI1pd1bKJSudFEXLh_dBR1MfZ8Sccs/s1600/%D8%A8%D9%88%D9%87%D8%B1%D8%A7%20%D8%A7%D9%84%D8%A8%D8%B7%D9%88%D9%84%D8%A9%20%D8%A7%D9%88%D9%86.png", m:7, g:0, a:1}
            ],
            // يمكنك إضافة باقي الفرق هنا بنفس الهيكل
            "rca": [],
            "far": []
        },

        // بيانات الانتقالات
        transfers: {
            "wac": [
                {n:"زاكارياس غيلان", from:"نهضة الزمامرة", from_logo:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", type:"انتقال", price:"مجاني"},
                {n:"حكيم زياش", from:"حر", from_logo:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/blank.gif", type:"إشاعة", price:"-"}
            ]
        }
    };

    // ==================== ستايلات ديناميكية (CSS) ====================
    const dynamicStyles = `
        .eb-section { padding: 25px; border-bottom: 1px solid #eee; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        /* رأس الصفحة */
        .eb-team-header { display: flex; align-items: center; gap: 20px; background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 20px; }
        .eb-team-logo-lg { width: 80px; height: 80px; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
        .eb-team-info h1 { font-size: 28px; margin-bottom: 5px; color: #764ba2; }
        .eb-team-info p { color: #666; font-size: 14px; margin-bottom: 3px; }

        /* الترتيب */
        .standings-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .standings-table th { background: #667eea; color: white; padding: 12px; font-weight: 600; }
        .standings-table td { padding: 12px 8px; border-bottom: 1px solid #eee; text-align: center; }
        .team-cell { display: flex; align-items: center; gap: 10px; justify-content: flex-start; text-align: right; }
        .team-cell img { width: 24px; height: 24px; }
        .rank-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-left: 5px; }

        /* المباريات */
        .matches-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; }
        .match-card { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .match-date { font-size: 12px; color: #888; margin-bottom: 10px; display: block; }
        .match-vs { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .match-team { display: flex; flex-direction: column; align-items: center; width: 35%; }
        .match-team img { width: 40px; height: 40px; margin-bottom: 5px; }
        .match-team span { font-size: 12px; font-weight: bold; }
        .match-score { font-size: 20px; font-weight: bold; background: #f0f0f0; padding: 5px 12px; border-radius: 6px; }

        /* اللاعبين */
        .players-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px; }
        .player-card { background: #fff; border: 1px solid #eee; border-radius: 10px; overflow: hidden; text-align: center; transition: transform 0.2s; cursor: pointer; }
        .player-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .player-img-container { height: 140px; background: #f8f9fa; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
        .player-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .player-info { padding: 10px; }
        .player-name { font-size: 13px; font-weight: bold; margin-bottom: 3px; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .player-pos { font-size: 11px; color: #777; background: #f0f0f0; padding: 2px 6px; border-radius: 4px; }
        
        /* التجاوب */
        @media (max-width: 600px) {
            .hide-mobile { display: none; }
            .eb-team-header { flex-direction: column; text-align: center; }
            .team-cell { font-size: 13px; }
        }
    `;

    // ==================== الوظائف الأساسية ====================

    // دالة لإنشاء عناصر DOM من HTML string
    function createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

    // حقن الستايل
    function injectStyles() {
        if (!document.getElementById('botola-styles')) {
            const style = document.createElement('style');
            style.id = 'botola-styles';
            style.textContent = dynamicStyles;
            document.head.appendChild(style);
        }
    }

    // 1. قسم المعلومات الأساسية
    function renderHeader(teamId) {
        const t = DB.teams[teamId];
        if (!t) return `<div class="eb-section">فريق غير موجود</div>`;
        return `
            <div class="eb-section">
                <div class="eb-team-header">
                    <img src="${t.logo}" class="eb-team-logo-lg" alt="${t.name}">
                    <div class="eb-team-info">
                        <h1>${t.name}</h1>
                        <p>🏙️ المدينة: ${t.city}</p>
                        <p>🏟️ الملعب: ${t.stadium}</p>
                        <p>👔 المدرب: ${t.manager}</p>
                        <p>📅 التأسيس: ${t.founded}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. قسم الترتيب (حساب تلقائي)
    function renderStandings() {
        // حساب النقاط وفارق الأهداف
        const sortedStandings = DB.standings.map(t => {
            t.pts = (t.w * 3) + t.d;
            t.gd = t.gf - t.ga;
            return t;
        }).sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts; // ترتيب بالنقاط
            return b.gd - a.gd; // ثم فارق الأهداف
        });

        let rows = '';
        sortedStandings.forEach((row, index) => {
            const team = DB.teams[row.id];
            const rank = index + 1;
            let color = '#6c757d'; // رمادي عادي
            if (rank <= 2) color = '#28a745'; // أخضر للأول والثاني
            if (rank === 3) color = '#007bff'; // أزرق
            if (rank >= 15) color = '#dc3545'; // أحمر للهبوط

            rows += `
                <tr ${rank <= 2 ? 'style="background:#f0fff4"' : ''}>
                    <td><span class="rank-dot" style="background:${color}"></span> ${rank}</td>
                    <td class="team-cell"><img src="${team.logo}"> ${team.name}</td>
                    <td>${row.p}</td>
                    <td>${row.pts}</td>
                    <td class="hide-mobile">${row.gd > 0 ? '+'+row.gd : row.gd}</td>
                    <td class="hide-mobile">${row.w}</td>
                    <td class="hide-mobile">${row.d}</td>
                    <td class="hide-mobile">${row.l}</td>
                </tr>
            `;
        });

        return `
            <div class="eb-section">
                <h3 style="margin-bottom:15px;color:#333;">📊 الترتيب العام</h3>
                <div style="overflow-x:auto;">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>الفريق</th>
                                <th>ل</th>
                                <th>ن</th>
                                <th class="hide-mobile">+/-</th>
                                <th class="hide-mobile">ف</th>
                                <th class="hide-mobile">ت</th>
                                <th class="hide-mobile">خ</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // 3. قسم المباريات
    function renderMatches() {
        const roundIds = Object.keys(DB.rounds).sort((a,b) => b-a); // ترتيب عكسي
        const currentRound = roundIds[0] || "1";
        const matches = DB.rounds[currentRound];

        let cards = '';
        matches.forEach(m => {
            const t1 = DB.teams[m.t1];
            const t2 = DB.teams[m.t2];
            cards += `
                <div class="match-card">
                    <span class="match-date">${m.d} - ${m.t}</span>
                    <div class="match-vs">
                        <div class="match-team">
                            <img src="${t1.logo}">
                            <span>${t1.name}</span>
                        </div>
                        <div class="match-score">${m.s}</div>
                        <div class="match-team">
                            <img src="${t2.logo}">
                            <span>${t2.name}</span>
                        </div>
                    </div>
                    <span style="font-size:11px;color:#999;">${m.std}</span>
                </div>
            `;
        });

        return `
            <div class="eb-section">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
                    <h3 style="color:#333;">📅 مباريات الجولة ${currentRound}</h3>
                </div>
                <div class="matches-grid">
                    ${cards}
                </div>
            </div>
        `;
    }

    // 4. قسم اللاعبين
    function renderPlayers(teamId) {
        const players = DB.players[teamId] || [];
        if (players.length === 0) return `<div class="eb-section"><h3>👥 التشكيلة</h3><p>لا توجد بيانات لاعبين لهذا الفريق حالياً.</p></div>`;

        let grid = '';
        players.forEach(p => {
            grid += `
                <div class="player-card">
                    <div class="player-img-container">
                        <img src="${p.img}" loading="lazy" alt="${p.n}">
                    </div>
                    <div class="player-info">
                        <span class="player-name">${p.n}</span>
                        <span class="player-pos">${p.p}</span>
                    </div>
                </div>
            `;
        });

        return `
            <div class="eb-section">
                <h3 style="margin-bottom:15px;color:#333;">👥 تشكيلة الفريق (${players.length})</h3>
                <div class="players-grid">
                    ${grid}
                </div>
            </div>
        `;
    }

    // ==================== المحرك الرئيسي ====================
    window.reloadBotolaSystem = function() {
        const app = document.getElementById('botola-app');
        if (!app) return;

        // الحصول على الفريق المختار
        const teamId = app.getAttribute('data-team') || 'wac';
        
        // تنظيف الحاوية
        app.innerHTML = '';
        
        // حقن الستايل
        injectStyles();

        // بناء المحتوى
        let content = '';
        content += renderHeader(teamId);
        content += renderStandings(); // الترتيب عام لكل الفرق
        content += renderMatches();   // المباريات عامة
        content += renderPlayers(teamId); // اللاعبين خاص بالفريق

        app.innerHTML = content;
    };

    // التشغيل الأولي
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.reloadBotolaSystem);
    } else {
        window.reloadBotolaSystem();
    }

})();
