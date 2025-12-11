
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body {
                  background-color: white; /* Ensure the iframe has a white background */
                }

                
              </style>
                        </head>
                        <body>
                                <script src="https://your-username.github.io/your-repo/botola_master.js"></script>
    


              <script>
                              // botola_master.js
// قاعدة البيانات المركزية الكاملة للبطولة الوطنية المغربية (Inwi)
// ملف نقي للبيانات - بدون HTML/CSS/JS للعرض

const BOTOLA_DB = {
  // ========== 1. معلومات الفرق الـ16 ==========
  teams: {
    "wac": { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "أديل كروش" },
    "rca": { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "جوزيف زينباور" },
    "far": { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", city: "الرباط", stadium: "المجمع الرياضي مولاي عبد الله", manager: "مصطفى المدبوح" },
    "mas": { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", founded: "1946", city: "فاس", stadium: "ملعب فاس الكبير", manager: "لحسن أميرة" },
    "rsb": { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", founded: "1955", city: "بركان", stadium: "ملعب البشير", manager: "أبوبكر بوطالب" },
    "codm": { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", founded: "1946", city: "مكناس", stadium: "الشرق الشرفي", manager: "جمال صلاح" },
    "irt": { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", founded: "1977", city: "طنجة", stadium: "ملعب ابن بطوطة", manager: "محمد أمين بنهيمة" },
    "ocs": { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", founded: "1921", city: "آسفي", stadium: "ملعب المسيرة", manager: "ياسين منبو" },
    "fus": { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", founded: "1946", city: "الرباط", stadium: "ملعب مولاي الحسن", manager: "عبد الإله طهوي" },
    "uts": { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", founded: "1975", city: "تواركة", stadium: "ملعب بلدية تواركة", manager: "محمد فكير" },
    "husa": { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", founded: "1946", city: "أكادير", stadium: "ملعب أدرار", manager: "الغنامي" },
    "dhj": { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", founded: "1956", city: "الجديدة", stadium: "ملعب بلدية الجديدة", manager: "سعيد شيبا" },
    "od": { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", founded: "1921", city: "الدشيرة", stadium: "ملعب الدشيرة البلدي", manager: "مصطفى خديرة" },
    "rcz": { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", founded: "1938", city: "الزمامرة", stadium: "ملعب أحمد شكري", manager: "عبد الرحيم طالب" },
    "kacm": { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", founded: "1948", city: "مراكش", stadium: "ملعب مراكش الكبير", manager: "عبد الله الطود" },
    "usym": { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", founded: "1983", city: "الرباط", stadium: "ملعب البشير", manager: "كريم بنشريفة" }
  },

  // ========== 2. الترتيب العام (سيتم ترتيبه ديناميكيًا) ==========
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

  // ========== 3. جدول المباريات لكل جولة ==========
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

  // ========== 4. تفاصيل كل فريق (التشكيلة والانتقالات) ==========
  teamDetails: {
    // --- ابدأ بملء بيانات الفرق الـ16 هنا بنفس الهيكل ---
    // مثال للفريق الأول (الوداد)
    "wac": {
      squad: [
        // ... لاعبي الوداد من ملف 007.txt (36 لاعبًا)
      ],
      transfers: [
        // ... انتقالات الوداد من ملف 007.txt
      ]
    },
    // كرر لكل فريق: "rca", "far", "mas", ... إلخ
    // ...
  }
};


              </script>
                        </body>
                        </html>
                    
