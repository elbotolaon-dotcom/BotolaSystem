/* Botola Master Engine v5.0 (Matches HTML 0.txt & 01.txt) */
(function() {
    const DB = {
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
        matches: {
            "1": [ {h:"wac", a:"mas", hs:1, as:0, date:"30/08", st:"محمد الخامس"}, {h:"rca", a:"far", hs:0, as:0, date:"31/08", st:"الزاولي"} ],
            "2": [ {h:"irt", a:"wac", hs:2, as:2, date:"07/09", st:"طنجة الكبير"} ]
            // ... Add more rounds
        },
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
        calcStats: function() {
            let s = {};
            Object.keys(DB.teams).forEach(id => s[id] = { id, ...DB.teams[id], p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 });
            Object.values(DB.matches).flat().forEach(m => {
                if(m.hs!==null && m.as!==null && s[m.h] && s[m.a]) {
                    s[m.h].p++; s[m.a].p++; s[m.h].gf+=m.hs; s[m.h].ga+=m.as; s[m.a].gf+=m.as; s[m.a].ga+=m.hs;
                    if(m.hs>m.as) { s[m.h].w++; s[m.h].pts+=3; s[m.a].l++; }
                    else if(m.as>m.hs) { s[m.a].w++; s[m.a].pts+=3; s[m.h].l++; }
                    else { s[m.h].d++; s[m.h].pts++; s[m.a].d++; s[m.a].pts++; }
                }
            });
            return Object.values(s).sort((a,b) => (b.pts-a.pts)||( (b.gf-b.ga)-(a.gf-a.ga) ));
        },
        render: function(tId) {
            // 1. Standings
            const sb = document.getElementById('standings-body');
            if(sb) {
                sb.innerHTML = this.calcStats().map((t,i) => `
                <tr class="${t.id===tId?'active-row':''}">
                    <td><span class="rank-badge r-${i+1}">${i+1}</span></td>
                    <td class="team-col"><img src="${t.logo}" width="24">${t.name}</td>
                    <td>${t.p}</td>
                    <td class="pts-col">${t.pts}</td>
                    <td class="desktop-only">${t.gf-t.ga}</td>
                </tr>`).join('');
            }
            // 2. Matches
            const rn = document.getElementById('rounds-nav');
            if(rn) {
                rn.innerHTML = Array.from({length:30},(_,i)=>i+1).map(r => {
                    let has = (DB.matches[r]||[]).some(m=>m.h===tId||m.a===tId);
                    return `<button onclick="BotolaEngine.showMatch(${r},'${tId}')" id="rt-${r}" class="r-tab" style="${has?'border-color:#5e72e4':''}">${r}</button>`;
                }).join('');
                this.showMatch(1, tId);
            }
            // 3. Squad
            const sg = document.getElementById('squad-grid');
            if(sg) {
                sg.innerHTML = (DB.players[tId]||[]).map(p => `
                <div class="p-card" onclick="this.classList.toggle('active')">
                    <img src="${p.img}" class="p-img">
                    <div style="font-weight:700;font-size:13px">${p.name}</div>
                    <div class="p-stats">
                        <div>لعب: <b>${p.m}</b></div>
                        <div>أهداف: <b>${p.g}</b></div>
                    </div>
                </div>`).join('');
            }
        },
        showMatch: function(r, tId) {
            document.querySelectorAll('.r-tab').forEach(b=>b.classList.remove('active'));
            let b=document.getElementById(`rt-${r}`); if(b) b.classList.add('active');
            
            const md = document.getElementById('match-display');
            const m = (DB.matches[r]||[]).find(x=>x.h===tId||x.a===tId);
            
            if(!m) { md.innerHTML = '<div style="color:#999">لا توجد مباراة</div>'; return; }
            
            let me = DB.teams[tId], op = DB.teams[m.h===tId?m.a:m.h];
            md.innerHTML = `
            <div style="font-size:13px;color:#888;margin-bottom:15px">${m.date} | ${m.st}</div>
            <div class="m-score-box">
                <div style="width:100px"><img src="${me.logo}" width="60"><br><span class="m-t-name">${me.name}</span></div>
                <div class="m-score-val">${m.hs!==null?m.hs+'-'+m.as:'VS'}</div>
                <div style="width:100px"><img src="${op.logo}" width="60"><br><span class="m-t-name">${op.name}</span></div>
            </div>`;
        },
        init: function(tId) { this.render(tId); }
    };
})();
