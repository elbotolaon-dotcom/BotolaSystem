/* 
   Botola Pro Master Engine v4.0 (Fix Overflow & Tabs)
   Author: You
   Date: Dec 2025
*/

(function() {
    const DB = {
        // بيانات الفرق (كما هي، لا تغيير)
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
        
        // سجل المباريات (الجولات)
        matches: {
            "1": [ {h:"wac", a:"mas", hs:1, as:0, date:"30/08", st:"محمد الخامس"}, {h:"rca", a:"far", hs:1, as:1, date:"31/08", st:"الزاولي"} ],
            "2": [ {h:"irt", a:"wac", hs:2, as:2, date:"07/09", st:"طنجة الكبير"} ],
            "3": [ {h:"wac", a:"uts", hs:null, as:null, date:"14/09", st:"الزاولي"} ]
        },

        // اللاعبين
        players: {
            "wac": [
                {name: "يوسف المطيع", pos: "حارس", img: "https://via.placeholder.com/100", m:8, g:0, y:1},
                {name: "جمال حركاس", pos: "دفاع", img: "https://via.placeholder.com/100", m:7, g:1, y:2}
            ],
            "rca": [
                {name: "أنس الزنيتي", pos: "حارس", img: "https://via.placeholder.com/100", m:8, g:0, y:0}
            ]
        }
    };

    window.BotolaEngine = {
        calculateStandings: function() {
            let stats = {};
            Object.keys(DB.teams).forEach(id => { stats[id] = { id: id, ...DB.teams[id], p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 }; });
            Object.values(DB.matches).flat().forEach(m => {
                if(m.hs !== null && m.as !== null && stats[m.h] && stats[m.a]) {
                    stats[m.h].p++; stats[m.a].p++;
                    stats[m.h].gf += m.hs; stats[m.h].ga += m.as;
                    stats[m.a].gf += m.as; stats[m.a].ga += m.hs;
                    if(m.hs > m.as) { stats[m.h].w++; stats[m.h].pts += 3; stats[m.a].l++; }
                    else if(m.as > m.hs) { stats[m.a].w++; stats[m.a].pts += 3; stats[m.h].l++; }
                    else { stats[m.h].d++; stats[m.h].pts += 1; stats[m.a].d++; stats[m.a].pts += 1; }
                }
            });
            return Object.values(stats).sort((a,b) => (b.pts - a.pts) || ((b.gf-b.ga)-(a.gf-a.ga)));
        },

        renderStandings: function(cId, tId) {
            const c = document.getElementById(cId); if(!c) return;
            const s = this.calculateStandings();
            
            // حل مشكلة التداخل في الجدول: استخدام display: flex أو grid بسيط
            let h = s.map((t, i) => {
                let cl = i<2 ? '#2dce89' : (i===2 ? '#11cdef' : (i>13 ? '#f5365c' : '#eee'));
                let style = (t.id === tId) ? "background:#fff9c4; font-weight:bold; border: 2px solid #5e72e4;" : "background:#fff;";
                
                return `
                <div style="display:grid; grid-template-columns: 30px 1fr 30px 30px; gap:5px; padding:10px; border-bottom:1px solid #f0f0f0; align-items:center; ${style}">
                    <div style="text-align:center;"><span style="background:${cl};color:#fff;border-radius:50%;width:20px;height:20px;display:inline-block;font-size:11px;line-height:20px;">${i+1}</span></div>
                    <div style="display:flex;align-items:center;gap:5px;overflow:hidden;white-space:nowrap;"><img src="${t.logo}" style="width:20px;flex-shrink:0;"> <span style="font-size:12px;">${t.name}</span></div>
                    <div style="text-align:center;font-size:12px;">${t.p}</div>
                    <div style="text-align:center;font-weight:bold;font-size:12px;">${t.pts}</div>
                </div>`;
            }).join('');
            
            // رأس الجدول
            c.innerHTML = `
            <div style="background:#f6f9fc; padding:10px; display:grid; grid-template-columns: 30px 1fr 30px 30px; gap:5px; font-weight:bold; font-size:11px; color:#888;">
                <div>#</div><div>الفريق</div><div>ل</div><div>ن</div>
            </div>
            <div style="max-height:500px; overflow-y:auto;">${h}</div>`;
        },

        renderRoundMatches: function(rId, mId, tId) {
            const rc = document.getElementById(rId);
            const mc = document.getElementById(mId);
            if(!rc || !mc) return;

            // حل مشكلة التداخل: استخدام flex-wrap وتصغير الأزرار
            let btns = '';
            for(let i=1; i<=30; i++) {
                // هل توجد مباراة للفريق في هذه الجولة؟
                let hasMatch = (DB.matches[i] || []).some(m => m.h === tId || m.a === tId);
                let bg = hasMatch ? '#fff' : '#f9f9f9'; // تمييز خفيف
                btns += `<button onclick="BotolaEngine.showMatch(${i}, '${tId}')" class="r-btn" id="r-btn-${i}" style="min-width:35px; height:35px; border:1px solid #ddd; background:${bg}; border-radius:50%; margin:2px; font-size:12px; cursor:pointer;">${i}</button>`;
            }
            rc.innerHTML = `<div style="display:flex; flex-wrap:wrap; gap:5px; justify-content:center; padding-bottom:10px;">${btns}</div>`;

            this.showMatch(1, tId);
        },

        showMatch: function(r, tId) {
            const mc = document.getElementById('match-display-area');
            document.querySelectorAll('.r-btn').forEach(b => { b.style.background='#fff'; b.style.color='#333'; b.style.borderColor='#ddd'; });
            const ab = document.getElementById(`r-btn-${r}`);
            if(ab) { ab.style.background='#5e72e4'; ab.style.color='#fff'; ab.style.borderColor='#5e72e4'; }

            const match = (DB.matches[r] || []).find(m => m.h === tId || m.a === tId);
            if(!match) { mc.innerHTML = '<div style="padding:20px;text-align:center;color:#888;">لا توجد مباراة</div>'; return; }

            const isHome = (match.h === tId);
            const op = DB.teams[isHome ? match.a : match.h];
            const me = DB.teams[tId];
            const score = (match.hs !== null) ? `${match.hs}-${match.as}` : "VS";

            // تصميم البطاقة "بدون تداخل"
            mc.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:15px; padding:15px;">
                <div style="font-size:11px; color:#888; background:#f0f0f0; padding:3px 10px; border-radius:10px;">${match.date} | ${match.st}</div>
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                    <div style="text-align:center; width:30%;"><img src="${me.logo}" style="width:40px;height:40px;object-fit:contain;"><br><span style="font-size:11px;font-weight:bold;">${me.name}</span></div>
                    <div style="font-size:20px; font-weight:bold; background:#5e72e4; color:#fff; padding:5px 15px; border-radius:10px;">${score}</div>
                    <div style="text-align:center; width:30%;"><img src="${op.logo}" style="width:40px;height:40px;object-fit:contain;"><br><span style="font-size:11px;font-weight:bold;">${op.name}</span></div>
                </div>
            </div>`;
        },

        renderPlayers: function(cId, tId) {
            const c = document.getElementById(cId); if(!c) return;
            const p = DB.players[tId] || [];
            if(!p.length) { c.innerHTML = 'لا توجد بيانات'; return; }

            c.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap:10px;">
                ${p.map(pl => `
                <div onclick="this.classList.toggle('active')" class="pl-card" style="position:relative; border:1px solid #eee; padding:10px; border-radius:8px; text-align:center; overflow:hidden;">
                    <img src="${pl.img}" style="width:50px; height:50px; border-radius:50%; border:2px solid #fff; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                    <div style="font-size:11px; font-weight:bold; margin-top:5px;">${pl.name}</div>
                    <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.95); display:flex; flex-direction:column; justify-content:center; opacity:0; transition:0.2s;" class="stats">
                        <div style="font-size:10px;">لعب: <b>${pl.m}</b></div>
                        <div style="font-size:10px;">أهداف: <b>${pl.g}</b></div>
                    </div>
                </div>`).join('')}
            </div>
            <style>.pl-card.active .stats { opacity:1; cursor:pointer; }</style>`;
        },

        init: function(tId) {
            this.renderStandings('standings-box', tId);
            this.renderRoundMatches('rounds-box', 'match-display-area', tId);
            this.renderPlayers('players-box', tId);
        }
    };
})();
