import React, { useState, useEffect, useCallback } from 'react';

const BotolaApp = () => {
  // حالة الفريق الحالي
  const [currentTeam, setCurrentTeam] = useState('wac');
  // حالة الجولة المختارة
  const [selectedRound, setSelectedRound] = useState('8');

  // قاعدة البيانات الكاملة
  const teams = {
    wac: { name: "الوداد الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", founded: "1937", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "أديل كروش" },
    rca: { name: "الرجاء الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", founded: "1949", city: "الدار البيضاء", stadium: "مركب محمد الخامس", manager: "جوزيف زينباور" },
    far: { name: "الجيش الملكي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", founded: "1958", city: "الرباط", stadium: "المجمع الرياضي مولاي عبد الله", manager: "مصطفى المدبوح" },
    mas: { name: "المغرب الفاسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", founded: "1946", city: "فاس", stadium: "ملعب فاس الكبير", manager: "لحسن أميرة" },
    rsb: { name: "نهضة بركان", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", founded: "1955", city: "بركان", stadium: "ملعب البشير", manager: "أبوبكر بوطالب" },
    codm: { name: "النادي المكناسي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", founded: "1946", city: "مكناس", stadium: "الشرق الشرفي", manager: "جمال صلاح" },
    irt: { name: "اتحاد طنجة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", founded: "1977", city: "طنجة", stadium: "ملعب ابن بطوطة", manager: "محمد أمين بنهيمة" },
    ocs: { name: "أولمبيك آسفي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", founded: "1921", city: "آسفي", stadium: "ملعب المسيرة", manager: "ياسين منبو" },
    fus: { name: "الفتح الرياضي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", founded: "1946", city: "الرباط", stadium: "ملعب مولاي الحسن", manager: "عبد الإله طهوي" },
    uts: { name: "إتحاد تواركة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", founded: "1975", city: "تواركة", stadium: "ملعب بلدية تواركة", manager: "محمد فكير" },
    husa: { name: "حسنية أكادير", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", founded: "1946", city: "أكادير", stadium: "ملعب أدرار", manager: "الغنامي" },
    dhj: { name: "الدفاع الجديدي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", founded: "1956", city: "الجديدة", stadium: "ملعب بلدية الجديدة", manager: "سعيد شيبا" },
    od: { name: "أولمبيك الدشيرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", founded: "1921", city: "الدشيرة", stadium: "ملعب الدشيرة البلدي", manager: "مصطفى خديرة" },
    rcz: { name: "نهضة الزمامرة", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", founded: "1938", city: "الزمامرة", stadium: "ملعب أحمد شكري", manager: "عبد الرحيم طالب" },
    kacm: { name: "الكوكب المراكشي", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", founded: "1948", city: "مراكش", stadium: "ملعب مراكش الكبير", manager: "عبد الله الطود" },
    usym: { name: "يعقوب المنصور", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", founded: "1983", city: "الرباط", stadium: "ملعب البشير", manager: "كريم بنشريفة" }
  };

  const standings = [
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
  ];

  const rounds = {
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
  };

  // تشكيلة الوداد من ملف 007
  const wacSquad = [
    {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:0, g:0, y:0},
    {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:0, g:0, y:0},
    {n:"أيوب بوشتى", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8u0i1Q9UlLw1PZbWBD6LvhkEx8x1IexgSkl1rnAxXFNb_glN3wzyJzf-asvvGITtfuD82vHLtvb1gKFPSTCMzOshcl6Hk_cot7CFSAkiHpk5IbgkwoifJpo1B17Lx_gEM7JxidrpN4XjRyfjv85yL-HULj4_U7yWhQE2NUHG2_k1tXpUWQU7zf6TX78/s1600/%D8%A7%D9%94%D9%8A%D9%88%D8%A8%20%D8%A8%D9%88%D8%B4%D8%AA%D9%89.png", m:0, g:0, y:0},
    {n:"محمد مفيد", p:"مدافع أيمن", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidaZpqymNDEyQTp5GQ9i7nOp1-hp3hyphenhyphenCZAO7sSJ4oSrQAyUqJgrcbBRTdJSOC3sw_laHKtde1EynCzeBqLDZ5l9DpxB-1K9qtlJew-3jnVnq4L8T-6NwSLet5FV39N081wJwdg-fITlFu9PeXrDYqDCSYB0gRpJZGvE_KVQoL0yHzKFBjMLtr-htE0JvY/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D9%85%D9%81%D9%8A%D8%AF.png", m:0, g:0, y:0},
    {n:"محمد رايحي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHVwPaPAzeaAbXgiyuWSLyOS_GuMf-0_wg3NUtjX3-jlMfHyNxQOGuCV2VG2wo0arQcBOB0KmRwC431RO8DvPxEdTWHKhVuhW2vrQ9JARMkZdVsycWLNi19KEzKn0kz-EXLBYPqr8qopu2Bdcymsvg4jLvhxtO4C-u1EnNLaAsEJEujKuBXNdnljoT-lg/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D8%A7%D9%8A%D8%AD%D9%8A.png", m:0, g:0, y:0},
    {n:"أيمن ديراني", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", m:0, g:0, y:0},
    {n:"وليد ناسي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nX1H0ZgZb-8NOODz3N1N9a0nxO37oZPbTzdTN6PhaY6RmXwRbJNHd7H6QFo-yO-I0FQgZuQL0fCY3n5IYlyEbB3EJOTWQLeqdip3bSq3lgre6I08PDrp01KeyTLacJhUvjRbj6vXyid_1_EbiCx6D4z8v7RvGMsNUPA9ddNZKc-rxe9zTmjDZ6bTNGY/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D9%86%D8%A7%D8%B3%D9%8A.png", m:0, g:0, y:0},
    {n:"بيدرينهو", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3TdCJ62Hj8OFUJ2Bt2Td96R7-jQL4K_oWnLBCnIlhyzpmzqwMv8UUDfMQX5uKHjECWc5MBUJOjQR6182p_-sLM71eVSPPGW4g5iMD-buBdoWWtkIFicqxPicYgSKvEEGwGboiSb6ZJNBPFcqbE5ok6AfswXNqANUgOozor6X4iaiB-ZFWnI4m4SeQZrQ/s1600/%D8%A8%D9%8A%D8%AF%D8%B1%D9%8A%D9%86%D9%87%D9%88.png", m:0, g:0, y:0},
    {n:"معاذ أونزو", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi043gehhQWhaK_ye2vwKU24y_V0suMT_wurQcN4HgmFXEQmxozXZWO5Ifwcma-N7JIgJ1y4F5tO6l2ujMmQ4o6wG7xqjR8t60H89aWtQlAqCI40xgJIUe_0ZY5RfHd8EHsphquZoGLGTtSsQPn2_hBiimHx_23lWvSuiLLWILTJMy5UTUt3dhfxqpedBg/s1600/%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%94%D9%88%D9%86%D8%B2%D9%88.png", m:0, g:0, y:0},
    {n:"آرثور وينديروسكي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyclJvueyEeJJfK-20D167QfRMpOrGY8BdaTCll25ui4kn8t8v0qKO3KDU6qriRPkg-_NcBeWAdAW-5ScgVK1wq-amXNaHh2Tu_uhyphenhyphenjsmrKIV3XWHi0qa1a4g46ahguKntingVgvCmkvhVIMPOp5r0-pH9ROSSrGvEPzInPw0CL-CjbEcUk64s2ku-1ww/s1600/%D8%A7%D9%93%D8%B1%D8%AB%D9%88%D8%B1%20%D9%88%D9%8A%D9%86%D8%AF%D9%8A%D8%B1%D9%88%D8%B3%D9%83%D9%8A.png", m:0, g:0, y:0},
    {n:"عمر روصافي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"عمر أقزداو", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvCDhiuf8yAt31fram6dYsLS8I8zmexekKZwqn5TMU3wa-QT9kEx0OcfA9m3ZpF0YoXHW1dJlydpOW8VsldAP1GhLB2Do82u_akdbeVbnrljwqP2IReTKoIohRpsdBYWOfCliOSX-fHvi4E0ATI06ZYADhWJHXV1JsnYssNeCtkwWt_gdMk3HaHXJ61C4/s1600/%D8%B9%D9%85%D8%B1%20%D8%A7%D9%94%D9%82%D8%B2%D8%AF%D8%A7%D9%88.png", m:0, g:0, y:0},
    {n:"المهدي بنعبيد", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghAARNo2fmMAI5Wum7y01bYc0zh49IhHei9-TqKE2CrrKTJCQJgPBqYZtYsfTFtqcNtI2c9yj741tkR3tXTmdHbjpoToysZsH-LuJpgRlST7JxdTvaBrEawEZcoZmuSZhKkAYsNeJuknRGCSmV4NmkutFWAoC-lXIKVJ06uWix37yqC8cCaiSMRRzj2QM/s1600/%D8%A7%D9%84%D9%85%D9%87%D8%AF%D9%8A%20%D8%A8%D9%86%D8%B9%D8%A8%D9%8A%D8%AF.png", m:0, g:0, y:0},
    {n:"محمد الجديدي", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiw523l0kVgZV7gzAcS2WRqwVqD2n7Mv0ATSNGOmDMiBtUlpjXIIBb2j0E_rTz8bFlKfKYwzBgzIvL_vGkcEIxF56URAdHJo8k28rgM-EbjOAEq2oVho2AwQe5J-YQtujJoAMdNYyUpeGyEOkCJV68B7qXAgoZ8kJT-HQgYUGdpBoA2bev5O1ualfP5Oqo/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%8A.png", m:0, g:0, y:0},
    {n:"محمد ريان محتو", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipocvCMrPTAnK5kFFcrVTg5FbZpXN222yYxAMMXgG_DUBl_Q0IOcWMlN3RU7ay2elrd7xN6z4oXkTjtFbkIFYemSxCNhfqWOumrImpzfrgi8WwxVK3AtfXg0GkNHEvAswwQjtB2uoICufLXJFRaiLNSwRq6FPVePaTQIVU9FTt4365lI1O6nNt-cM6bYU/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D9%8A%D8%A7%D9%86%20%D9%85%D8%AD%D8%AA%D9%88.png", m:0, g:0, y:0},
    {n:"نورالدين أمرابط", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiff_LqHW1r1GrScOZ2JJL_rUD-lnEZ1zlVUHGwywe2lkf9RnlqWShUQgFMY7Rl1kGv-jXeBO9LuUhAda_HVpqnUNQIX1xfGD7oYQUUuHEl8bQYv7-frQ3ichEGKU2CweHo6-KUsyTDqN0hgQ7kItGrze8rnRFISvFAtdqEHmoQ4tBphoslgiveiHaYY8/s1600/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%94%D9%85%D8%B1%D8%A7%D8%A8%D8%B7.png", m:0, g:0, y:0},
    {n:"حمزة هنوري", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-Y_BC7r-GQ_qjxT8dGYAR9t58IzZ8W5sziQZ5OnF0JiB_dX78a2Y5aOnCM7VwgFL9vXAEMj_5MYi3omHuUzgLbzC8V3aTd9o2HZbiYAKe75x3b1KoQpwGWlY_gQimELfOKWkNLr5vtpYGt0fJIQXxUbJURE2NspwHFrZVWZy4WyCScOdezqgTA7dvreU/s1600/%D8%AD%D9%85%D8%B2%D8%A9%20%D9%87%D9%86%D9%88%D8%B1%D9%8A.png", m:0, g:0, y:0},
    {n:"ستيفان عزيز كي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8yjeW0uwsD37-SoNypJOUepZKEZZyxXjb3aKNDF-DJAXqyr8gDDMYMvIL42mT-DVCzq1H9ApDw5CqM7dNoQPWRZ87DKrM_8kjMnifgBuZoo01plbXD-WT5hjpZoLx7wrBTBAxow4IWsElAwtzHiXvBwQ_VOpII4iEcxzevVi81TP19W_iQcF-062pbO4/s1600/%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%86%20%D8%B9%D8%B2%D9%8A%D8%B2%20%D9%83%D9%8A.png", m:0, g:0, y:0},
    {n:"بارت مايرز", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkGfQI2gF_AYfMhSClufNoTUKc_ALEUK76UGEWvULvb-teHJxdND7Tv4h4-5lELJtqK1B2g3au9YFClBuUuU_Qrhob2wSSZyMUwrs1EYmQJt8hJcZUBbhKuNtT4Othac1-DdKHsZPymdPxT1tlSJNCZLFU0uzHlUPBSP3nCwRURTnr7M9IO2ZN-CB9Crc/s1600/%D8%A8%D8%A7%D8%B1%D8%AA%20%D9%85%D8%A7%D9%8A%D8%B1%D8%B2.png", m:0, g:0, y:0},
    {n:"غويليرمي فيريرا", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPgwcJ7U7_2taiOgkEKdAbPaKNYR79uxOui66iR9VR4CwERNFmksv-na2HDfHcwuPobXIdIipK-q9RsE4mtHzETkmQxV7f3cBHo_VazuilfOWUwMVFuyzcwr-33SXlr1mdUXT-OwIrUpsC07P1eLQ9G2fKG0m8EBQnNWWXSBU_4d8X8RWGDGEGQ2_qzfk/s1600/%D8%BA%D9%88%D9%8A%D9%84%D9%8A%D8%B1%D9%85%D9%8A%20%D9%81%D9%8A%D8%B1%D9%8A%D8%B1%D8%A7.png", m:0, g:0, y:0},
    {n:"عبد الغفور لاميرات", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFkI6RX9PX41DKyeZbVrJ-I86R9Dh0ngJTjwSjTg7K9KApywEZ7EcGI8qwe5XeGFiu7SMV8cfrNAVPxifQxOLfq-63w8rE7kRJ8WKgFPTY4WP2hYJgCgRRR21UlpL5cfXZwagxNcp5eowb4unZTpz3Mg6caL28G7Q9WixoqHVqHygNJgwg4Hf_7cJmSNQ/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AF%D9%81%D9%88%D8%B1%20%D9%84%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%D8%AA.png", m:0, g:0, y:0},
    {n:"حمزة الواسطي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRohWsJRWAjsmjyM7ymvOfTpuwB7hCyXn-9Uhhhv6_DlSWkrdqFAP8efaLPe4Elg0_aDklnd-kr86Axv2Wl8uKQU1y0gh7dvjX7VxEoI-ZOE2K-IAbWqMb3WDPnDKpqd1XFAGtMSoXolaJcX2hjGtxcTflJ8nd_K2FwOrDi0DOrMkP1v6H95_0WtntWu4/s1600/%D8%AD%D9%85%D8%B2%D8%A9%20%D8%A7%D9%84%D9%88%D8%A7%D8%B3%D8%B7%D9%8A.png", m:0, g:0, y:0},
    {n:"جوزيف باكاسو", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmrVmfIV4Sw3-szIWCIUkCby9GQSq2ubjRgHaOBgxuYsR2mOgi7UTcY4nER3n_vvAHQQMyEpQQTk1_sbKtiyOHz12F29hGDttaYRDE77cztljM3wHrwRqRVmzvekXyw9zBV6kz8uhfxnwJAWgU4YVl0raMMc8lKB1OxgjWFvXwwH_fithNhvUTgGF9u7s/s1600/%D8%AC%D9%88%D8%B2%D9%8A%D9%81%20%D8%A8%D8%A7%D9%83%D8%A7%D8%B3%D9%88.png", m:0, g:0, y:0},
    {n:"أمين أبو الفتح", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE-DZux1wLeqWSGoS24ZaGXD1Qy43uqdNGmlUM5wllZUphLdk61M2OgUYTeqOBuSjGUuh4q8zRuU6JLh8O3HBHPoF31coPMMSXzF7jv0VCr-eLNOpPzoXByKE9sGItgpceDzj5RpRZNktwpULyuMDxdm0zNDaNj36wLxMUqtV99NjSP3PIBDOApdWTAeY/s1600/%D8%A7%D9%94%D9%85%D9%8A%D9%86%20%D8%A7%D9%94%D8%A8%D9%88%20%D8%A7%D9%84%D9%81%D8%AA%D8%AD.png", m:0, g:0, y:0},
    {n:"وليد الصبار", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7511w-g5owduK1dR3JVqKONVgcIsO4NJoO6h_AmeqIIzFnUYDvNmaWeZLBQ04s7KsRQOw18Yt47-oLB3Ahh17JFfl0TivmkSgW3R6uFQBJlrgGxtbGssAZWngDtqYcjMojLmVlWGFDT359vWCZIZDAaaSsytuAt-ONMVtbCDSny5T0rFyuReerh2VW0/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1.png", m:0, g:0, y:0},
    {n:"ثيمبينكوسي لورش", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXkahxeOtSWtYTeOuhv1mu7N3bJDUD8pFt-RTvN1y5sOOergEy9o72IaTuyh2-wpKpSkHXYiH8eFiagsqy5oq38mLL96m5CDHorOvoTH56ciyXMjavIDoxaoGcoQl90yhDsieY9ghYm5tq6LvXOoODu8LouYtoH3IMK0tkO3dWHg2Xbr8um61U4XFZmZw/s1600/%D8%AB%D9%8A%D9%85%D8%A8%D9%8A%D9%86%D9%83%D9%88%D8%B3%D9%8A%20%D9%84%D9%88%D8%B1%D8%B4.png", m:0, g:0, y:0},
    {n:"محمد بوشواري", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBZUKZEWdGj3dbvm2ym0kxAIt9Gkh8FDQnCr39WN0TVkHKavE1_yDOpqPtHgGLmi-qtaDolkd0RIzeWo2opdGR_9-zp6ZB31iXGepyaJeFfT8T3kqRYtm3vJrGDEYSkgqaUzHUmKJup_NsLA37WUgR2LiWPx89sq26cNzCj0zPORN2_5eAgFek8C6hUKo/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A8%D9%88%D8%B4%D9%88%D8%A7%D8%B1%D9%8A.png", m:0, g:0, y:0},
    {n:"زهير المترجي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWGCfSoD8aUS2VglEJiZD2WMqqkXLrkIeV6c1sRD0KN2_ILdKSimr2BhdsQ8gHtKaiglwYE2z3bvgdxETgsbEztTe-Iza1-sCnbJL39ArY-z9P9kn7fujEPYc94Mc8A1xlCGh2ONlJJ46DI4jBEPfzlFQRlycuA4_3XhaJRnUF7sUJk_nIcI4ALALains/s1600/%D8%B2%D9%87%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%AA%D8%B1%D8%AC%D9%8A.png", m:0, g:0, y:0},
    {n:"توميسانغ أوريبونيي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcf14lhNEF8yCPgkjpgdIQXdbVtUj4I4FAsEk7cs0GsAvC4fl_NnJuH2BMMWEnYtigKg6YEL6NZf_ZyBj4IDtX1mM60MPDdDVdrYraklSjsU5HOk_ZwfE_dNzlw-q5JtxYe9Y3sqwBMRPrAJi8C3RXFsVuOQZg0tkoMgTmbWey4FJyTRXyy-Pp2OJZKbM/s1600/%D8%AA%D9%88%D9%85%D9%8A%D8%B3%D8%A7%D9%86%D8%BA%20%D8%A7%D9%94%D9%88%D8%B1%D9%8A%D8%A8%D9%88%D9%86%D9%8A%D9%8A.png", m:0, g:0, y:0},
    {n:"عبد العالي المحمدي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjTX9RTHz61FreoTcdlilvb2h-pncWoJ70msZtsuVDNKBd44pD6grL0lpf9LdZ15L_HfwTQTBfD_4jT2mS7R3imC5czEEyTlkXtREcAUZvYkQDKweUXrk89BiInp69yPcsDMZS6F1IQ1sOzeZ5-VaKriQgl34yT93IXOEQGPNeFWmTe1PigVTq2SUaksk/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D8%AF%D9%8A.png", m:0, g:0, y:0},
    {n:"محمد الوردي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"وليد عتيق", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"شمس الدين العلالي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"عبدولاي كوليبالي", p:"لاعب", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"مباي نيانغ", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", m:0, g:0, y:0},
    {n:"حكيم زياش", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png", m:0, g:0, y:0}
  ];

  // انتقالات الوداد
  const wacTransfers = [
    {n:"زاكارياس غيلان", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:""},
    {n:"زكرياء فتحي", from:"نهضة الزمامرة", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:""},
    {n:"أيمن ديراني", from:"الخالدية", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال", price:"0.095M €"},
    {n:"حكيم زياش", from:"حر", from_logo: "//images.elbotola.com/stats/logos/6ypq3nh0pejmd7o.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"حر", price:""},
    {n:"عبد المنعم بوطويل", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF_ZkiLexkF1lSvsTZyzyHA4J9HmJUCINLtWXd_a6UBdyLdnmX-L59VIteJppHH-GaXy_Hm2zWlmduxHCbA5O9DJcAT2samgYUBjNnhNmvSwLEex4q7o-MeRUrgd7rp7F5aAv9-etJN6DcZIJbQLkQTtoOnIgn9VTGUfxu3v-p3lXdBwtuZCxutENBuhQ/s1600/hazam.png", type:"انتقال", price:""},
    {n:"ميكائيل مالسا", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcVq_JSGW28_dkmFv60oOR0wEEHAhzyd3Wlb2WInEbqQfUsy3o2dz1KTFVJ8pFLNek763Jz0B87Th_ZxaAE69iJ9docMKQDDUKpFWDpw9Jg1otWab3gEfkKvI5shhq-qAr70oB3dR9tAEKRXAPUvfFKav7aYTAvQJ6-oia1x7cHqwHw3yRudKgm36Jv9Y/s1600/free%20elbotolaon.png", type:"حر", price:""},
    {n:"صمويل أوبينغ", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1ajn7GxLUTLsOEbYhtEp_D5tHlvoczRqwEnjPwjPFvQ-R2yxjp5oMz2BGQrgqPDMShRECnjo2VEFLotA5SH7bfskZzOwyuzDeDlLAoLN7S_mOeMOEP0yOQH0q22kaDE_jqgdWy-n4SM6M8ur2AxQoHszGucOhVg55JWtFvTNIkl2aOieYA1pJJJ1noqk/s1600/sabta%20elbotolaon.png", type:"انتقال", price:""},
    {n:"سيف الدين بوهرة", from:"الوداد", from_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to_logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", type:"انتقال", price:"0.142M €"}
  ];

  // حالة اللاعب المحدد حالياً
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // ترتيب الفرق ديناميكياً
  const sortedStandings = [...standings].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    return (b.gf - b.ga) - (a.gf - a.ga);
  });

  // دالة للتمرير إلى القسم
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // معالجة تغيير الفريق
  const handleTeamSelect = (teamId) => {
    setCurrentTeam(teamId);
    setTimeout(() => {
      scrollToSection('standings-section');
    }, 100);
  };

  // معالجة تغيير الجولة
  const handleRoundChange = (round) => {
    setSelectedRound(round);
  };

  // جلب مباريات الجولة المحددة
  const currentRoundMatches = rounds[selectedRound] || [];

  // معالجة الضغط على لاعب
  const handlePlayerClick = (player) => {
    setSelectedPlayer(selectedPlayer?.n === player.n ? null : player);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* شريط الفرق العلوي */}
        <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
          <h2 className="text-center text-xl font-bold text-purple-800 mb-4">🏆 اختر فريق البطولة المغربية</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {Object.entries(teams).map(([teamId, team]) => (
              <div
                key={teamId}
                className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  currentTeam === teamId 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => handleTeamSelect(teamId)}
              >
                <img 
                  src={team.logo} 
                  alt={team.name}
                  className="w-8 h-8 object-contain mr-2"
                  onError={(e) => e.target.src = 'https://placehold.co/32x32?text=??'}
                />
                <span className="text-xs font-medium text-right">{team.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* معلومات الفريق */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
            <div className="flex items-center">
              <img 
                src={teams[currentTeam].logo} 
                alt={teams[currentTeam].name}
                className="w-16 h-16 object-contain mr-4"
                onError={(e) => e.target.src = 'https://placehold.co/64x64?text=??'}
              />
              <div>
                <h1 className="text-2xl font-bold">{teams[currentTeam].name}</h1>
                <div className="text-sm opacity-90 mt-1">
                  <p>تاريخ التأسيس: {teams[currentTeam].founded} 📅</p>
                  <p>المدينة: {teams[currentTeam].city} | المدرب: {teams[currentTeam].manager}</p>
                  <p>الملعب: {teams[currentTeam].stadium} 🏟️</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-5 bg-gray-50">
            <div className="p-4 text-center border-r">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">مباريات</div>
            </div>
            <div className="p-4 text-center border-r">
              <div className="text-2xl font-bold text-green-600">14</div>
              <div className="text-sm text-gray-600">أهداف</div>
            </div>
            <div className="p-4 text-center border-r">
              <div className="text-2xl font-bold text-yellow-600">22</div>
              <div className="text-sm text-gray-600">صفراء</div>
            </div>
            <div className="p-4 text-center border-r">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-gray-600">حمراء</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">68%</div>
              <div className="text-sm text-gray-600">حيازة</div>
            </div>
          </div>
        </div>

        {/* جدول الترتيب */}
        <div id="standings-section" className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">📊</span>
              جدول الترتيب العام
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700">#</th>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700">الفريق</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700">لعب</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">فاز</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">تعادل</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">خسر</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">له</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">عليه</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700 hidden md:table-cell">+/-</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700">ن</th>
                </tr>
              </thead>
              <tbody>
                {sortedStandings.map((row, index) => {
                  const team = teams[row.id];
                  const rank = index + 1;
                  let bgColor = 'bg-white';
                  let textColor = 'text-gray-800';
                  
                  if (rank <= 2) {
                    bgColor = 'bg-green-50';
                    textColor = 'text-green-800';
                  } else if (rank === 3) {
                    bgColor = 'bg-blue-50';
                    textColor = 'text-blue-800';
                  } else if (rank >= 15) {
                    bgColor = 'bg-red-50';
                    textColor = 'text-red-800';
                  }
                  
                  const isCurrentTeam = row.id === currentTeam;
                  
                  return (
                    <tr 
                      key={row.id} 
                      className={`${bgColor} ${isCurrentTeam ? 'border-2 border-red-500' : ''}`}
                    >
                      <td className={`p-3 text-center font-bold ${textColor}`}>
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200">
                          {rank}
                        </span>
                      </td>
                      <td className="p-3 text-right font-medium">
                        <div className="flex items-center">
                          <img 
                            src={team.logo} 
                            alt={team.name}
                            className="w-6 h-6 object-contain mr-2"
                            onError={(e) => e.target.src = 'https://placehold.co/24x24?text=??'}
                          />
                          <span className={isCurrentTeam ? 'text-red-600 font-bold' : ''}>{team.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-center">{row.p}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.w}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.d}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.l}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.gf}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.ga}</td>
                      <td className="p-3 text-center hidden md:table-cell">{row.gf - row.ga}</td>
                      <td className={`p-3 text-center font-bold ${row.pts >= 15 ? 'text-green-600' : row.pts >= 10 ? 'text-blue-600' : 'text-gray-600'}`}>
                        {row.pts}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* جدول المباريات */}
        <div id="matches-section" className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 className="text-lg font-bold text-gray-800 flex items-center mb-2 sm:mb-0">
              <span className="mr-2">⚽</span>
              جدول المباريات
            </h3>
            <select 
              value={selectedRound}
              onChange={(e) => handleRoundChange(e.target.value)}
              className="border rounded-lg px-3 py-1 text-sm"
            >
              {Object.keys(rounds).map(round => (
                <option key={round} value={round}>الجولة {round}</option>
              ))}
            </select>
          </div>
          <div className="divide-y">
            {currentRoundMatches.length > 0 ? (
              currentRoundMatches.map((match, index) => {
                const team1 = teams[match.t1];
                const team2 = teams[match.t2];
                return (
                  <div key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center w-2/5">
                        <img 
                          src={team1.logo} 
                          alt={team1.name}
                          className="w-8 h-8 object-contain mr-2"
                          onError={(e) => e.target.src = 'https://placehold.co/32x32?text=??'}
                        />
                        <span className="font-medium">{team1.name}</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{match.s}</div>
                        <div className="text-xs text-gray-500">{match.d} | {match.t}</div>
                      </div>
                      <div className="flex items-center justify-end w-2/5">
                        <span className="font-medium">{team2.name}</span>
                        <img 
                          src={team2.logo} 
                          alt={team2.name}
                          className="w-8 h-8 object-contain ml-2"
                          onError={(e) => e.target.src = 'https://placehold.co/32x32?text=??'}
                        />
                      </div>
                    </div>
                    <div className="text-center text-xs text-gray-500 mt-2">{match.std}</div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-500">لا توجد مباريات لهذه الجولة</div>
            )}
          </div>
        </div>

        {/* تشكيلة الفريق */}
        <div id="squad-section" className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">👥</span>
              تشكيلة الفريق (36 لاعب)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {wacSquad.map((player, index) => (
              <div 
                key={index}
                className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                  selectedPlayer?.n === player.n ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                }`}
                onClick={() => handlePlayerClick(player)}
              >
                <div className="flex items-center">
                  <img 
                    src={player.img}
                    alt={player.n}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                    onError={(e) => e.target.src = 'https://placehold.co/48x48?text=??'}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{player.n}</h4>
                    <p className="text-xs text-gray-500">{player.p}</p>
                  </div>
                </div>
                {selectedPlayer?.n === player.n && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div>
                        <div className="font-bold text-red-600">{player.m}</div>
                        <div className="text-xs text-gray-500">مباريات</div>
                      </div>
                      <div>
                        <div className="font-bold text-red-600">{player.g}</div>
                        <div className="text-xs text-gray-500">أهداف</div>
                      </div>
                      <div>
                        <div className="font-bold text-red-600">{player.y}</div>
                        <div className="text-xs text-gray-500">صفراء</div>
                      </div>
                      <div>
                        <div className="font-bold text-red-600">{player.m * 0}</div>
                        <div className="text-xs text-gray-500">دقائق</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* الانتقالات */}
        <div id="transfers-section" className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <span className="mr-2">🔄</span>
              الانتقالات والإعارات
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700">اللاعب</th>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700">من</th>
                  <th className="p-3 text-right text-sm font-semibold text-gray-700">إلى</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700">النوع</th>
                </tr>
              </thead>
              <tbody>
                {wacTransfers.map((transfer, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-3">
                      <div className="flex items-center">
                        <img 
                          src={transfer.n.includes('غيلان') ? 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg' : 
                                transfer.n.includes('زياش') ? 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png' : 
                                'https://placehold.co/28x28?text=?'}
                          alt={transfer.n}
                          className="w-7 h-7 rounded-full object-cover ml-2"
                          onError={(e) => e.target.src = 'https://placehold.co/28x28?text=?'}
                        />
                        <span>{transfer.n}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <img 
                          src={transfer.from_logo}
                          alt={transfer.from}
                          className="w-6 h-6 object-contain ml-2"
                          onError={(e) => e.target.src = 'https://placehold.co/24x24?text=?'}
                        />
                        <span>{transfer.from}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center justify-end">
                        <span>{teams[currentTeam].name}</span>
                        <img 
                          src={teams[currentTeam].logo}
                          alt={teams[currentTeam].name}
                          className="w-6 h-6 object-contain mr-2"
                          onError={(e) => e.target.src = 'https://placehold.co/24x24?text=?'}
                        />
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transfer.type === 'انتقال' ? 'bg-green-100 text-green-800' : 
                        transfer.type === 'حر' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {transfer.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotolaApp;
