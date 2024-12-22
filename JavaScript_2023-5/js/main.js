// בניית ג'ייסון לכרטיסיות שיוצגו במסך
const jsonData = {
    "CoPilotTips": [
        {
            "id": 1,
            "title": "יצירת תמונות עם AI",
            "img": "Tip1.mp4",
            "shortDescription": "צרו תמונות ייחודיות לפי בקשה",
            "content": "קו-פיילוט יכול ליצור תמונות על פי תיאור טקסטואלי שתספקו. לדוגמה, בקשו \"צור תמונה של שקיעה בחוף טרופי\"" +
                " וקבלו יצירת אמנות דיגיטלית מקסימה תוך שניות.",
            "tag": "תוכן, טכנולוגיה"
        },
        {
            "id": 2,
            "title": "ייעוץ אישי",
            "img": "Tip2.mp4",
            "shortDescription": "התייעצו על מגוון נושאים",
            "content": "יש צורך בעצה או רעיון בנושא מסוים? שלחו לקו-פיילוט את השאלות או הצורך, והוא יספק לכם ייעוץ אישי. תוכלו" +
                " לכלול העדפות ומגבלות והוא ייתחשב בהן.",
            "tag": "עזרה אישית"
        },
        {
            "id": 3,
            "title": "תיקון ועריכה של טקסטים",
            "img": "Tip3.mp4",
            "shortDescription": "שפרו את הטקסטים שלכם במהירות",
            "content": "יש טקסט שצריך שיפור? שלחו אותו לקו-פיילוט והוא יערוך, יתקן ויציע שינויים כדי להפוך אותו למושלם. הטקסט" +
                " יכול להיות מייל, עבודה אקדמית או אפילו הודעה לחברים.",
            "tag": "תוכן"
        },
        {
            "id": 4,
            "title": "ניהול רשימת מטלות",
            "img": "Tip4.mp4",
            "shortDescription": "נהלו משימות יומיומיות  בקלות",
            "content": "קו-פיילוט יכול לעזור בניהול רשימת מטלות יומיומיות. בקשו ממנו להוסיף משימות ומטלות חדשות, לעדכן או למחוק" +
                " משימות קיימות, וכך לא תפספסו שום דבר חשוב.",
            "tag": "אישי"
        },
        {
            "id": 5,
            "title": "תכנים למדיה חברתית",
            "img": "Tip5.mp4",
            "shortDescription": "קבלו רעיונות יצירתיים לפוסטים",
            "content": "אין רעיונות לפוסטים במדיה חברתית? קו-פיילוט יכול להציע רעיונות לתוכן יצירתי ואטרקטיבי שיתפוס את העין של" +
                " העוקבים, כולל טקסטים ותמונות לפוסטים וסטוריז.",
            "tag": "אישי, תוכן"
        },
        {
            "id": 6,
            "title": "הצעות לסרטים וסדרות",
            "img": "Tip6.mp4",
            "shortDescription": "קבלו המלצות לסרטים וסדרות",
            "content": "אין במה לצפות בטלוויזיה? בקשו מקו-פיילוט הצעות לסרטים או סדרות בהתאם להעדפות אישיות. הוא יכול להמליץ " +
                " על תכנים חדשים ומרתקים בהתאם לטעם האישי.",
            "tag": "אישי"
        },
        {
            "id": 7,
            "title": "כתיבת קוד",
            "img": "Tip7.mp4",
            "shortDescription": "קבלו עזרה בכתיבת קוד",
            "content": "משהו בקוד לא עובד או שיש בעיה שלא מצליחים לפתור? קו-פיילוט יכול לכתוב קוד בשפות תכנות שונות ולספק" +
                " דוגמאות ופיתרונות לבעיות מסובכות במהירות.",
            "tag": "טכנולוגיה, תוכן"
        },
        {
            "id": 8,
            "title": "ניתוח נתונים סטטיסטיים",
            "img": "Tip8.mp4",
            "shortDescription": "נתחו נתונים בקלות",
            "content": "קו-פיילוט יכול לעזור בניתוח נתונים עבור מטלות בלימודים ואף לעסקים. ספקו לו את הנתונים שברשותכם ובקשו" +
                " ממנו עזרה בניתוח וכך תייעלו את העבודה.",
            "tag": "תוכן"
        },
        {
            "id": 9,
            "title": "תכנון טיולים",
            "img": "Tip9.mp4",
            "shortDescription": "תכננו טיולים לפי העדפות",
            "content": "יש צורך בעזרה לתכנון הטיול הבא? קו-פיילוט יכול לעזור בתכנון הטיול, כולל מציאת אטרקציות" +
                " מקומיות, טיסות, מסעדות מומלצות ואפשרויות לינה.",
            "tag": "אישי"
        },
        {
            "id": 10,
            "title": "תרגום טקסטים",
            "img": "Tip10.mp4",
            "shortDescription": "תרגמו טקסטים בשלל שפות",
            "content": "קו-פיילוט יכול לתרגם טקסטים לשפות שונות בצורה מהירה ומדויקת. זה יכול להיות שימושי בזמן לימודים, כתיבת" +
                " מיילים,  עבודה או בטיול מחוץ לארץ.",
            "tag": "תוכן"
        }
    ]
}

// לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {

    //השפעה על אלמנט בHTML שיכיל את כל הכרטיסיות באמצעות משתנה שמאתר אותו לפי איידי
    const itemsContainer = document.getElementById("itemsContainer");

    // נתינת מחלקות בוטסטרפ לאחמנט שיכיל את כל הכרטיסיות- מה שישפיע על הסדר שלהן במסך
    itemsContainer.setAttribute("class", "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3");

    //לולאה שעוברת על הג'ייסון ובונה כרטיסייה עבור כל מחלקה בתוכו
    jsonData.CoPilotTips.forEach(g => {
        // הכרטיסיות נבנות באמצעות מחלקות בוטסטרפ שמשפיעות על הנראות וההתנהגות שלהן. יש שימוש ב-flip-card כדי שהכרטיסיות
        // יסתובבו לצד השני ויחשפו מידע נוסף
        const colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col myCards");

        const myCard = document.createElement("div");
        myCard.setAttribute("class", "flip-card");

        // הגדרת תוכן הכרטיסייה
        const cardInner = document.createElement("div");
        cardInner.setAttribute("class", "flip-card-inner");

        // בניית התוכן של החלק הקדמי של הכרטיסייה
        const cardFront = document.createElement("div");
        cardFront.setAttribute("class", "flip-card-front");

        // הכלת הסרטון המשוייך למחלקת הג'ייסון עליה הלולאה עוברת ונתינת הגדרות הפעלה
        const myImg = document.createElement("video");
        myImg.setAttribute("class", "card-img-top");
        myImg.setAttribute("src", `img/${g.img}`);
        myImg.setAttribute("autoplay", "true");
        myImg.setAttribute("muted", "true");
        myImg.setAttribute("preload", "auto");
        myImg.muted = true;

        //בניית גוף הכרטיסייה
        const bodyCardFront = document.createElement("div");
        bodyCardFront.setAttribute("class", "card-body cardFlipBody");

        //כותרת לכרטיסייה
        const myH5 = document.createElement("h5");
        myH5.setAttribute("class", "card-title");
        myH5.textContent = g.title;

        // טקסט הכרטיסייה
        const myShortDescription = document.createElement("p");
        myShortDescription.setAttribute("class", "card-text");
        myShortDescription.textContent = g.shortDescription;

        // בניית הכפתור שיסובב את הכרטיסייה לצידה האחורי
        const myBTN = document.createElement("a");
        myBTN.setAttribute("class", "btn btn-primary");
        myBTN.textContent = "> ";

        const myButton = document.createElement("a");
        myButton.setAttribute("class", "btn-text");
        myButton.setAttribute("style", "cursor: pointer;");
        myButton.textContent = "מה עוד?";
        myButton.appendChild(myBTN);

        //הכלת נתוני הצד הקדמי של הכרטיסייה בתוכו
        bodyCardFront.appendChild(myH5);
        bodyCardFront.appendChild(myShortDescription);
        bodyCardFront.appendChild(myButton);
        cardFront.appendChild(myImg);
        cardFront.appendChild(bodyCardFront);

        // בניית התוכן של החלק האחורי של הכרטיסייה
        const cardBack = document.createElement("div");
        cardBack.setAttribute("class", "flip-card-back");

        // טקסט הכרטיסייה
        const myText = document.createElement("p");
        myText.setAttribute("class", "card-text");
        myText.textContent = g.content;

        // בניית הכפתור שיסובב את הכרטיסייה לצידה הקדמי
        const myCloseBTN = document.createElement("a");
        myCloseBTN.setAttribute("class", "btn btn-primary");
        myCloseBTN.textContent = "<";

        const closeButton = document.createElement("button");
        closeButton.setAttribute("class", "btn-text");
        closeButton.textContent = "חזור";
        closeButton.appendChild(myCloseBTN);

        //הוספת מאזין שבעת לחיצה על הכפתור יסובב את הכרטיסייה לצידה הקדמי
        closeButton.addEventListener("click", function () {
            myCard.classList.remove("flipped"); // החזרת הכרטיס למצב המקורי
        });

        //הכלת נתוני הצד האחורי של הכרטיסייה בתוכו
        cardBack.appendChild(myText);
        cardBack.appendChild(closeButton);

        // הכלת שני צידי הכרטיסייה בגוף שלה
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);

        // הכלת גוף הכרטיסייה בכרטיסייה
        myCard.appendChild(cardInner);

        // הכלת הכרטיסייה באלמנט ה-HTML שיכיל את כל הכרטיסיות
        colDiv.appendChild(myCard);
        itemsContainer.appendChild(colDiv);
        
        //הוספת מאזין שבעת לחיצה על הכפתור יסובב את הכרטיסייה לצידה האחורי
        myButton.addEventListener("click", function () {
            myCard.classList.toggle("flipped");
        });
    });
});


// פונקצייה שתבצע את החיפוש
function searchFunc() {
    // שאיבת נתונים רלוונטיים לצורך ביצוע החיפוש
    const mySearch = document.getElementById("searchInput").value.trim();
    const cardContainers = document.querySelectorAll("#itemsContainer .col");
    const titles = document.getElementsByClassName("card-title");
    const itemsContainer = document.getElementById("itemsContainer");
    const filterContainer = document.querySelector(".filter");
    let noResultsMessage = document.getElementById("noResultsMessage");

    // אם שדה החיפוש ריק
    if (mySearch == "") {
        // לולאה שעוברת על כל הכרטיסיות ומשנה את הדיספליי שלהן כך שיוצגו
        for (let i = 0; i < cardContainers.length; i++) {
            cardContainers[i].style.display = "flex";
        }
        // הסרת הודעת "לא נמצאו תוצאות" אם קיימת
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
        // הצגת כפתורי הפילטר
        filterContainer.style.display = "flex";
        return;
    }

    // משתנה לשליטה על מצב מציאת התוצאות- האם נמצאו או לא
    let hasResults = false;

    // הסתרת כל הכרטיסיות על ידיי שינוי הדיספליי שלהן
    for (let i = 0; i < cardContainers.length; i++) {
        cardContainers[i].style.display = "none";
    }

    // חיפוש כרטיסיות התואמות לחיפוש. לולאה שעוברת על הכותרות של כל הכרטיסיות ואם הכותרת מכילה בתוכה את המחרוזת שהמשתמש חיפש
    // אז הכרטיסייה של אותה כותרת תוצג באמצעות שינוי הדיספליי שלה
    for (let i = 0; i < titles.length; i++) {
        //הגדרת משתנים לחיפוש. בשניהם יש התייחסות לאותיות קטנות למקרה שהכותרת הכרטיסייה מכילה תווים באנגלית (כמו יצירת תמונות
        // באמצעות AI)
        const title = titles[i].textContent.toLowerCase();
        const searchValue = mySearch.toLowerCase();

        //בדיקה אם הכותרת מכילה את המחרוזת שהמשתמש חיפש
        if (title.includes(searchValue)) {
            cardContainers[i].style.display = "flex"; // הצגת הכרטיסים המתאימים
            hasResults = true;
        }
    }

    // אם אין תוצאות
    if (!hasResults) {
        // בדיקה האם יש הודעה שלא נמצאו תוצאות שמוצגת כבר. אם אין
        if (!noResultsMessage) {
            // יצירת הודעת "לא נמצאו תוצאות" 
            noResultsMessage = document.createElement("div");
            noResultsMessage.id = "noResultsMessage";
            noResultsMessage.className = "noResult text-center text-dark"; // עיצוב Bootstrap
            noResultsMessage.textContent = "לא נמצאו תוצאות";
            // הוספת ההודעה באלמנט שמכיל את הכרטיסיות כדי שתוצג בקומן
            itemsContainer.appendChild(noResultsMessage); 
        }
        // הסתרת כפתורי הפילטר במקרה בו אין תוצאות
        filterContainer.style.display = "none";
        
        //אחרת כלומר אם יש תוצאות לחיפוש המשתמש
    } else { 
        // הסרת הודעת "לא נמצאו תוצאות" אם קיימת
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
        // הצגת כפתורי הפילטר
        filterContainer.style.display = "flex";
    }
}



// משתנה שיכיל את מצב הסינון
let currentFilter = null; 

//פונקצייה לשליטה על סינון הכרטיסיות. הפונקצייה מקבלת בעת לחיצה על הכפתור איוונט ואת את הטאג אותו מייצג כפתור הסינון
function filter(tag, event) {
    // שאיבת נתונים רלוונטיים לצורך ביצוע הסינון
    const cards = document.getElementsByClassName("flip-card");
    const cardContainers = document.querySelectorAll("#itemsContainer .col");
    const buttons = document.getElementsByClassName("filter-button");
    // משתנה לשמירת הכפתור שנלחץ
    const clickedButton = event.target;

    //מעבר על כל הכפתורים והסרת קלאס האקטיב שלהם
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    //אם טאג הכרטיסייה שווה לפילטר עליו לחץ המשתמש- כלומר הפילטר שלחוץ כרגע, זהו מצב של ביטול הסינון
    if (currentFilter == tag) { 

        //הצגת כל הכרטיסיות
        for (let i = 0; i < cardContainers.length; i++) {
            cardContainers[i].style.display = "flex";
        }

        // איפוס  מצב הסינון
        currentFilter = null; 
        
        // אחרת- אם אני במצב של ביצוע סינון
    } else { 
        // הסתרת כל הכרטיסיות 
        for (let i = 0; i < cardContainers.length; i++) {
            cardContainers[i].style.display = "none";
        }

        // מעבר על כל הכרטיסיות והצגת הכרטיסיות שמכילות את טאג שזהה לכפתור שנבחר
        jsonData.CoPilotTips.forEach((AISystems, index) => {
            const cardTag = AISystems.tag;
            if (cardTag.indexOf(tag) != -1) {
                cardContainers[index].style.display = "flex";
            }
        });
        
        // עדכון מצב הסינון
        currentFilter = tag; 

        // הוספת מחלקת אקטיב לכפתור הנלחץ כדי לשנות את עיצובו באמצעות הבוטסטרפ
        clickedButton.classList.add("active");
    }
}



//פונקציה להצגת פופ אפ הרכישה
function popFunc() {
    // בניית ג'ייסון לכרטיסיות שיוצגו בתוך הפופאפ
    const plans = [
        {
            name: 'private',
            title: 'עבור משתמשים פרטיים',
            description: 'קבלו גישה לכל תכונות ה-WEB Copilot לשימוש אישי ויום-יומי. תיהנו מתמיכה טכנית, מדריכים, וקורסים מקוונים שיעזרו לכם למקסם את הפוטנציאל של הכלי בכל תחום בחיים האישיים.',
            price: '49 ₪ לחודש',
            isRecommended: true
        },
        {
            name: 'business',
            title: 'עבור עסקים',
            description: 'קבלו גישה לכל הכלים והמשאבים המתקדמים של ה-WEB Copilot כדי לייעל את ניהול העסק שלכם. תיהנו מתמיכה טכנית, גישה לקורסים עסקיים, ומגוון אפשרויות להתאמה אישית לצרכים העסקיים.',
            price: '199 ₪ לחודש',
        },
        {
            name: 'students',
            title: 'עבור תלמידים ומורים',
            description: 'קבלו גישה לכל תכונות ה-WEB Copilot המיועדות לחינוך ולמידה. תיהנו מכלים לשיתוף תכנים, יצירת פעילויות אינטראקטיביות, ומעקב אחר התקדמות הלמידה,כדי לשדרג את חוויית הלימוד.',
            price: '29 ₪ לחודש',
        }
    ];

    // בניית המודל שבו יוצג הפופ אפ. יש שימוש במחלקות בוטסטרפ לעיצוב
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal fade');
    modal.setAttribute('id', 'purchaseModal');
    modal.setAttribute('aria-hidden', 'true');
    
    // בניית הפופ אפ ושינוי גודלו לגודל הרצוי בנוסף למחלקות הבוטסטרפ
    const modalDialog = document.createElement('div');
    modalDialog.setAttribute('class', 'modal-dialog modal-dialog-centered modal-lg');
    modalDialog.style.width = '90%'; // התאמת רוחב הפופ אפ
    modalDialog.style.maxWidth = '90%'; // למניעת הגבלת רוחב במכשירים קטנים

    //בניית הדיב שיכיל את תוכן המודל
    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');
    modalContent.style.backgroundColor = '#EFEFEF';

    //בניית ההדר של המודל
    const modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'modal-header');

    //הגדרת כותרת למודל
    const modalTitle = document.createElement('h5');
    modalTitle.setAttribute('class', 'modal-title');
    modalTitle.textContent = 'רכישת שירותי CoPilot';

    // בניית כפתור סגירה לפופ אפ
    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // הכלת הכפתור והכותרת בהדר של המודל
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    //בניית גוף המודל
    const modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modal-body');
    
    // בניית הדיב שיכיל כל כרטיסייה וישפיע על הרווח בינהן
    const row = document.createElement('div');
    row.setAttribute('class', 'row g-4'); // רווחים בין הכרטיסים

    // לולאה שתעבור על הג'ייסון ותבנה את כרטיסיות אופציות הרכישה
    plans.forEach(plan => {
        const col = document.createElement('div');
        col.setAttribute('class', 'col-md-4 col-sm-12'); // 3 עמודות במחשב, 1 במובייל

        //בניית הכרטיס של התכנית
        const card = document.createElement('div');
        card.setAttribute('class', 'card cardBuy shadow-sm h-100'); // התאמה לגובה אחיד

        // יכיל את כל תוכן גוף הכרטיסייה
        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body text-right');
        
        // יכיל את המידע על התכנית
        const cardBodyInfo = document.createElement('div');
        cardBody.setAttribute('class', 'card-body text-right cardBody cardBodyInfo');

        // דיב שיכיל את הבאדג' והלוגו לשליטה נוחה יותר על מיקומם אחד ביחס לשני
        const topBody = document.createElement('div');
        topBody.setAttribute('class', ' topBody'); // שימוש ב-flex למיקום
        topBody.style.width = "100%"; // הגדרת גובה הלוגו

        //הוספת הלוגו לכרטיסייה
        const coLogo = document.createElement('img');
        coLogo.setAttribute('class', 'me-2'); // ריווח קטן בין הלוגו לבאדג'
        coLogo.setAttribute('src', 'img/Microsoft_365_Copilot_Icon.svg.png');
        coLogo.style.height = "30px"; // הגדרת גובה הלוגו
        topBody.appendChild(coLogo); // הוספת הלוגו אחרי הבאדג'

        // הבאדג' בצד שמאל של הלוגו. הוא יופיע רק עבור התוכנית שהוגדרה בג'ייסון כמומלצת
        if (plan.isRecommended) {
            const recommendedBadge = document.createElement('div');
            recommendedBadge.setAttribute('class', 'badge badgePlan bg-warning text-dark'); // עיצוב הבאדג'
            recommendedBadge.textContent = 'התוכנית המשתלמת ביותר';
            recommendedBadge.style.left = "0"; // הגדרת גובה הלוגו
            topBody.appendChild(recommendedBadge); // הוספת הבאדג'
        }

        //בניית כותרת לכרטיסיה
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title cardPlanTitle fw-bold');
        cardTitle.textContent = plan.title;

        //הוספת מחיר הכרטיסייה
        const cardPrice = document.createElement('div');
        cardPrice.setAttribute('class', 'pricePlan');
        cardPrice.textContent = plan.price;

        //הוספת תיאור התכנית לכרטיסייה
        const cardDescription = document.createElement('p');
        cardDescription.setAttribute('class', 'card-text');
        cardDescription.textContent = plan.description;
        
        //בניית הצ'ק בוקס להוספת גרסת הניסיון החינמית
        const checkboxFree = document.createElement('input');
        checkboxFree.setAttribute('type', 'checkbox'); // סוג צ'קבוקס
        checkboxFree.setAttribute('class', 'form-check-input'); // עיצוב Bootstrap (לא חובה)

        // יצירת אלמנט טקסט בסמוך לצ'קבוקס
        const textFree = document.createElement('span');
        textFree.textContent = 'הוסיפו גרסת ניסיון ללא תשלום למשך 30 ימים'; 
        textFree.style.marginRight = '3px'; 

        // יצירת מיכל  לצ'קבוקס ולמלל
        const checkboxContainer = document.createElement('div');
        checkboxContainer.setAttribute('class', 'form-check'); 
        checkboxContainer.appendChild(textFree);
        checkboxContainer.appendChild(checkboxFree);

        //קיצור למעבר להצגת הפרטים המלאים על תכנית הרכישה
        const showAll = document.createElement('a');
        showAll.setAttribute('class', 'showAll');
        showAll.setAttribute('href', '#');
        showAll.textContent = "הציגו את כל הפרטים לגבי תוכניות ותמחור";

        //בניית מיכל שיכיל את כפתור הרכישה ואת סימון הקנייה המאובטחת
        const cardFooter = document.createElement('div');
        cardFooter.setAttribute('class', 'cardFooter mt-3');

        //מיכל ייעודי לכפתור הרכישה 
        const cardFooterBTN = document.createElement('div');
        cardFooterBTN.setAttribute('class', 'cardFooterBTN');
        
        // בניית כפתור הרכישה
        const buyButton = document.createElement('button');
        buyButton.setAttribute('class', 'btn costumeBuyBTN w-20');
        buyButton.textContent = 'קנו עכשיו';

        //מיכל שיכיל את תמונת הרכישה המאובטחת ואת הטקסט
        const securePurchaseFooter = document.createElement('div');
        securePurchaseFooter.setAttribute('class', 'securePurchaseFooter');

        //הוספת תמונת מנעול לרכישה המאובטחת
        const securePurchaseLock = document.createElement('img');
        securePurchaseLock.setAttribute('class', 'securePurchaseLock');
        securePurchaseLock.setAttribute('src', 'img/lock.png');
        securePurchaseLock.style.width = "1.7vh";

        //הוספת הכיתוב "רכישה המאובטחת" 
        const securePurchase = document.createElement('span');
        securePurchase.setAttribute('class', ' securePurchase w-40');
        securePurchase.textContent = 'עסקה מאובטחת';

        //הכלת האלמנטים של הרכישה המאובטחת במיכל הייעודי
        securePurchaseFooter.appendChild(securePurchaseLock);
        securePurchaseFooter.appendChild(securePurchase);
        
        //הוספת כפתור הרכישה למיכל הייעודי לו 
        cardFooterBTN.appendChild(buyButton);

        //הוספת האלמנטים לפוטר הכרטיסייה
        cardFooter.appendChild(securePurchaseFooter);
        cardFooter.appendChild(cardFooterBTN);

        // הכלת הנתונים על מידע על התכנית במיכל הייעודי
        cardBodyInfo.appendChild(topBody);
        cardBodyInfo.appendChild(cardTitle);
        cardBodyInfo.appendChild(cardPrice);
        cardBodyInfo.appendChild(cardDescription);
        cardBodyInfo.appendChild(checkboxContainer);
        cardBodyInfo.appendChild(showAll);

        // הכלת הנתונים בגוף הכרטיסייה
        cardBody.appendChild(cardBodyInfo);
        cardBody.appendChild(cardFooter);

        // הכלת גוף הכרטיסייה בכרטיסייה
        card.appendChild(cardBody);
        
        // הכלת הכרטיסייה במקום הייעודי לה
        col.appendChild(card);
        row.appendChild(col);
    });

    // הכלת המודל המקום הייעודי לו
    modalBody.appendChild(row);

    // הכלת רכיבי המודל במיכל התוכן שלו
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    //  הוספת תוכן המודל לחלון המודל
    modalDialog.appendChild(modalContent);
    
    //  הוספת חלון המודל למודל הראשי
    modal.appendChild(modalDialog);

    // הוספת המודל לעמוד ה-HTML
    document.body.appendChild(modal);

    // יצירת אובייקט מודל באמצעות Bootstrap
    const purchaseModal = new bootstrap.Modal(modal);
    
    //הצגת המודל
    purchaseModal.show();
}
