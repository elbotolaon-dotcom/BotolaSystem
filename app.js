// app.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. تحديد الفريق الحالي من كود HTML
    const container = document.getElementById("botola-app");
    const currentTeamId = container.getAttribute("data-team"); // مثلاً 'wac'

    renderApp(currentTeamId);
});

function renderApp(teamId) {
    const db = BOTOLA_DB;
    
    // أولاً: معالجة الترتيب (الفرز الأوتوماتيكي)
    // نقوم بحساب النقاط وترتيب الفرق من الأعلى للأسفل
    const sortedStandings = db.standings.sort((a, b) => {
        // الفرز حسب النقاط (p)
        if (b.p !== a.p) return b.p - a.p; 
        // إذا تعادلو في النقاط، نفرز بفارق الأهداف (gf - ga)
        const diffA = a.gf - a.ga;
        const diffB = b.gf - b.ga;
        return diffB - diffA;
    });

    // بناء جدول الترتيب
    let standingsHTML = `
    <div class="standings-box">
        <h3>جدول ترتيب البطولة الاحترافية</h3>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>الفريق</th>
                    <th>لعب</th>
                    <th>ن</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedStandings.forEach((row, index) => {
        const teamInfo = db.teams[row.id];
        const rank = index + 1;
        
        // منطق الألوان (الديناميكي)
        let rowClass = "";
        if (rank === 1 || rank === 2) rowClass = "rank-green"; // دوري الأبطال
        else if (rank === 3) rowClass = "rank-blue"; // الكونفدرالية
        else if (rank >= 15) rowClass = "rank-red"; // الهبوط

        // تمييز الفريق الحالي (صفحة الفريق الذي نتصفحه)
        if (row.id === teamId) rowClass += " current-team-row";

        standingsHTML += `
            <tr class="${rowClass}">
                <td>${rank}</td>
                <td class="team-cell">
                    <img src="${teamInfo.logo}" alt="${teamInfo.name}" width="20">
                    <span>${teamInfo.short}</span>
                </td>
                <td>${row.w + row.d + row.l}</td> <!-- حساب عدد المباريات -->
                <td><strong>${row.p}</strong></td>
            </tr>
        `;
    });

    standingsHTML += `</tbody></table></div>`;

    // عرض النتيجة في الصفحة
    document.getElementById("botola-app").innerHTML = standingsHTML;
    
    // ملاحظة: هنا سنضيف لاحقاً كود عرض اللاعبين والمباريات الخاص بالفريق teamId
}
