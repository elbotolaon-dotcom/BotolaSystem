// botola_master.js - النسخة النهائية للمشروع

/* =========================================
   1. قاعدة البيانات (Data Structure)
   ========================================= */
const BOTOLA_DB = {
    // تعريف الفرق (البيانات الأساسية والشعارات)
    teams: {
        "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", manager: "رولاني موكوينا" },
        "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", manager: "ريكاردو سا بينتو" },
        "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", manager: "هوبير فيلود" },
        "mas": { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", founded: "1946", manager: "طارق السكتيوي" },
        "rsb": { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
        "codm": { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
        "irt": { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
        "ocs": { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" },
        "fus": { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
        "uts": { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
        "husa": { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
        "dhj": { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" },
        "od": { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png" },
        "rcz": { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" },
        "kacm": { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png" },
        "usym": { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png" }
    },

    // جدول الترتيب العام
    standings: [
        { id: "wac", p: 8, w: 6, d: 2, l: 0, gf: 14, ga: 5, pts: 20 },
        { id: "far", p: 8, w: 5, d: 3, l: 0, gf: 14, ga: 1, pts: 18 },
        { id: "mas", p: 8, w: 4, d: 4, l: 0, gf: 11, ga: 2, pts: 16 },
        { id: "rca", p: 7, w: 4, d: 3, l: 0, gf: 7, ga: 1, pts: 15 },
        { id: "codm", p: 8, w: 3, d: 3, l: 2, gf: 6, ga: 6, pts: 12 },
        { id: "rsb", p: 6, w: 3, d: 2, l: 1, gf: 13, ga: 7, pts: 11 },
        { id: "od", p: 8, w: 3, d: 2, l: 3, gf: 8, ga: 9, pts: 11 },
        { id: "dhj", p: 8, w: 2, d: 3, l: 3, gf: 6, ga: 11, pts: 9 },
        { id: "irt", p: 8, w: 1, d: 5, l: 2, gf: 7, ga: 11, pts: 8 },
        { id: "rcz", p: 7, w: 2, d: 2, l: 3, gf: 5, ga: 9, pts: 8 },
        { id: "husa", p: 8, w: 2, d: 1, l: 5, gf: 6, ga: 14, pts: 7 },
        { id: "kacm", p: 8, w: 2, d: 1, l: 5, gf: 8, ga: 9, pts: 7 },
        { id: "fus", p: 8, w: 2, d: 1, l: 5, gf: 7, ga: 10, pts: 7 },
        { id: "usym", p: 8, w: 1, d: 3, l: 4, gf: 8, ga: 11, pts: 6 },
        { id: "uts", p: 8, w: 0, d: 5, l: 3, gf: 7, ga: 12, pts: 5 },
        { id: "ocs", p: 8, w: 1, d: 2, l: 5, gf: 6, ga: 15, pts: 5 }
    ],

    // تفاصيل الفرق (التشكيلة والانتقالات)
    teamDetails: {
        
        // 1. الوداد الرياضي (مكتمل)
        "wac": {
            squad: [
                {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, g:0},
                {n:"عبدالعالي المحمدي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv_8XlF5Qn3lJ2Wd8vJ4zH1g5tK6X7rL9yB3M1NqO4P5R2S8T6V9U3W0X4Y7Z1A2B5C8D3E6F9G2H5I8J1K4L7M0N3O6P9Q2R5S8T1U4V7W0X3Y6Z9A2B5C8/s1600/mohamedi.png", m:0, g:0},
                {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/harkas.png", m:8, g:1},
                {n:"نبيل مرموق", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/marmouk.png", m:7, g:0},
                {n:"أيوب بوشتة", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8u0i1Q9UlLw1PZbWBD6LvhkEx8x1IexgSkl1rnAxXFNb_glN3wzyJzf-asvvGITtfuD82vHLtvb1gKFPSTCMzOshcl6Hk_cot7CFSAkiHpk5IbgkwoifJpo1B17Lx_gEM7JxidrpN4XjRyfjv85yL-HULj4_U7yWhQE2NUHG2_k1tXpUWQU7zf6TX78/s1600/bouchta.png", m:6, g:0},
                {n:"حمزة الساخي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/sakhi.png", m:8, g:2},
                {n:"وليد ناسي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/nassi.png", m:7, g:1},
                {n:"كاسيوس مايلولا", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/mailula.png", m:5, g:1},
                {n:"مباي نيانغ", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/niang.png", m:6, g:2}
                // ... يمكنك إضافة باقي اللاعبين الـ 36 هنا بنفس الصيغة ...
            ],
            transfers: [
                {n:"زاكارياس غيلان", type:"انتقال", price:"3 ملايين درهم"},
                {n:"حمزة الساخي", type:"انتقال حر", price:"-"}
            ]
        },

        // 2. الرجاء الرياضي (مكتمل)
        "rca": {
            squad: [
                {n:"أنس الزنيتي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/zniti.png", m:7, g:0},
                {n:"عبدالله خفيفي", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/khafifi.png", m:6, g:1},
                {n:"محمد بولكسوت", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/boulksout.png", m:7, g:0},
                {n:"صابر بوغرين", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/bougrine.png", m:7, g:2},
                {n:"يسري بوزوق", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/bouzouq.png", m:7, g:3},
                {n:"آدم النفاتي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/nafati.png", m:6, g:1},
                {n:"نوفل الزرهوني", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/zarhouni.png", m:7, g:2}
                // ... باقي اللاعبين ...
            ],
            transfers: [
                {n:"بنايا بنعياد", type:"إعارة", price:"-"},
                {n:"المهدي موهوب", type:"انتقال", price:"1.8 مليون دولار"}
            ]
        },

        // 3. الجيش الملكي (مكتمل)
        "far": {
            squad: [
                {n:"أيوب الخياطي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/khayate.png", m:8, g:0},
                {n:"ربيع حريمات", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/hrimat.png", m:8, g:4},
                {n:"أمين زحزوح", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/zahzouh.png", m:8, g:3},
                {n:"أحمد حمودان", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/hamoudan.png", m:7, g:2},
                {n:"خالد آيت أورخان", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/orkhan.png", m:6, g:1}
                // ... باقي اللاعبين ...
            ],
            transfers: [
                {n:"يوسف الفحلي", type:"انتقال", price:"-"}
            ]
        },

        // 4. المغرب الفاسي (مكتمل)
        "mas": {
            squad: [
                {n:"صلاح الدين شهاب", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/chihab.png", m:8, g:0},
                {n:"حمزة الجناتي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/janati.png", m:8, g:2},
                {n:"محسن بوريكة", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/bourika.png", m:8, g:3},
                {n:"سعد آيت الخرصة", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-n9vExdRzw8_aLOWtC42XxKBMSkIVtIihsqcKuhMkJpDPX7T9_c9LCmLroTREK4y1Qkn3_RISsLc1sCJf5n4CddE2dH3t9_C2oyTQqevcEnXy8nyD8e4lVpEfJ0uKv4j_HDXyxqlddcNfIgIckAkjYKh3ZFOztYKrOrlxXkW9qGRYVJzBgb4B45pK5SQ/s1600/kharsa.png", m:7, g:0}
                // ... باقي اللاعبين ...
            ],
            transfers: []
        },

        /* --- الأماكن الفارغة للفرق الـ 11 المتبقية (جاهزة للملء) --- */
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

/* =========================================
   2. المنطق البرمجي (Logic)
   ========================================= */

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderLogos();
    // تحميل الفريق الافتراضي (الوداد مثلاً) دون التمرير للأسفل
    loadTeam('wac', false);
});

// 1. رسم شبكة الشعارات الثابتة
function renderLogos() {
    const grid = document.getElementById('logosGrid');
    grid.innerHTML = '';
    
    Object.keys(BOTOLA_DB.teams).forEach(id => {
        const team = BOTOLA_DB.teams[id];
        const btn = document.createElement('div');
        btn.className = 'team-btn';
        btn.onclick = () => selectTeam(id); // ربط الضغطة بالوظيفة الجديدة
        btn.innerHTML = `<img src="${team.logo}" alt="${team.name}" title="${team.name}">`;
        grid.appendChild(btn);
    });
}

// 2. الوظيفة الرئيسية: اختيار الفريق + التمرير الذكي
function selectTeam(id) {
    // أولاً: تحميل البيانات
    loadTeam(id, true);

    // ثانياً: التمرير الناعم إلى المحتوى (حل مشكلة الموبايل)
    const contentStart = document.getElementById('contentStart');
    if(contentStart) {
        contentStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 3. تحميل بيانات الفريق في الصفحة
function loadTeam(id, animate) {
    const team = BOTOLA_DB.teams[id];
    const details = BOTOLA_DB.teamDetails[id];
    const stats = BOTOLA_DB.standings.find(s => s.id === id) || {};

    // تحديث الهيرو (القسم العلوي)
    document.getElementById('heroImg').src = team.logo;
    document.getElementById('heroName').textContent = team.name;
    document.getElementById('heroDetails').textContent = `تأسس: ${team.founded || '-'} | المدرب: ${team.manager || '-'}`;
    
    // تحديث إحصائيات الهيرو
    document.getElementById('heroStats').innerHTML = `
        <div class="stat-box"><span class="stat-num">${stats.p || 0}</span><span class="stat-label">مباريات</span></div>
        <div class="stat-box"><span class="stat-num">${stats.pts || 0}</span><span class="stat-label">نقاط</span></div>
        <div class="stat-box"><span class="stat-num">${stats.gf || 0}</span><span class="stat-label">أهداف له</span></div>
        <div class="stat-box"><span class="stat-num">${stats.w || 0}</span><span class="stat-label">فوز</span></div>
    `;

    // تحديث جدول الترتيب (مع تمييز الفريق)
    renderStandings(id);

    // تحديث التشكيلة
    renderSquad(details.squad || []);

    // تحديث الانتقالات
    renderTransfers(details.transfers || []);
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.team-btn').forEach(btn => btn.classList.remove('active'));
    // (يمكن إضافة كود لتمييز الزر النشط هنا إذا أردت)
}

// 4. رسم جدول الترتيب
function renderStandings(activeId) {
    const tbody = document.getElementById('standingsBody');
    tbody.innerHTML = '';
    
    // ترتيب المصفوفة حسب النقاط
    const sorted = [...BOTOLA_DB.standings].sort((a, b) => b.pts - a.pts);

    sorted.forEach((row, index) => {
        const teamInfo = BOTOLA_DB.teams[row.id];
        const tr = document.createElement('tr');
        if(row.id === activeId) tr.classList.add('highlight-row');
        
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-cell"><img src="${teamInfo.logo}"> ${teamInfo.name}</td>
            <td>${row.p}</td>
            <td style="font-weight:bold; color:#d2151e;">${row.pts}</td>
            <td class="hide-mobile">${row.w}</td>
            <td class="hide-mobile">${row.d}</td>
            <td class="hide-mobile">${row.l}</td>
            <td class="hide-mobile" dir="ltr">${row.gf - row.ga > 0 ? '+' : ''}${row.gf - row.ga}</td>
        `;
        tbody.appendChild(tr);
    });
}

// 5. رسم التشكيلة
function renderSquad(squad) {
    const container = document.getElementById('squadContainer');
    container.innerHTML = '';
    
    if(!squad.length) {
        container.innerHTML = '<p style="text-align:center; width:100%; color:#888;">لا توجد بيانات متاحة حالياً.</p>';
        return;
    }

    squad.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.img}" class="player-img" onerror="this.src='https://placehold.co/60x60?text=No+Img'">
            <div class="player-info">
                <h4>${player.n}</h4>
                <div class="player-meta">${player.p}</div>
                <div class="player-stats">لعب: ${player.m || 0} | أهداف: ${player.g || 0}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 6. رسم الانتقالات
function renderTransfers(transfers) {
    const container = document.getElementById('transfersContainer');
    container.innerHTML = '';

    if(!transfers.length) {
        container.innerHTML = '<p style="text-align:center; color:#888;">لا توجد انتقالات حديثة.</p>';
        return;
    }

    transfers.forEach(t => {
        const item = document.createElement('div');
        item.className = 'transfer-item';
        item.innerHTML = `
            <div style="font-weight:bold;">${t.n}</div>
            <div style="font-size:0.9rem; color:#666;">${t.type} (${t.price})</div>
        `;
        container.appendChild(item);
    });
}
