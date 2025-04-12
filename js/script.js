const translations = {
  ru: {
    title: "Модельное агентство X6 Studio",
    left_title: "Твой лучший выбор",
    left_text: "Получи возможность изменить свою жизнь. Агентство X6 приглашает тебя на отбор моделей OnlyFans.",
    right_title: "Стать действительно счастливой",
    s1: "Поддержка 24/7",
    s2: "Высокий %",
    s3: "Безопасность",
    s4: "Только опытные операторы",
    s5: "Переезд в США",
    about_title: "О агентстве X6 Studio",
    about_text: "Мы – профессиональная команда, которая поможет тебе реализовать себя на OnlyFans. У нас – индивидуальный подход и реальные возможности для роста."
  },
  en: {
    title: "Model Agency X6 Studio",
    left_title: "Your Best Choice",
    left_text: "Get a chance to change your life. X6 Studio invites you to a selection of OnlyFans models.",
    right_title: "Become Truly Happy",
    s1: "Support 24/7",
    s2: "High % commission",
    s3: "Security",
    s4: "Experienced operators only",
    s5: "Relocation to the USA",
    about_title: "About X6 Studio",
    about_text: "We are a professional team that will help you succeed on OnlyFans. We offer a personal approach and real growth opportunities."
  },
  de: {
    title: "Modelagentur X6 Studio",
    left_title: "Deine beste Wahl",
    left_text: "Nutze die Chance, dein Leben zu verändern. X6 Studio lädt dich zur Auswahl von OnlyFans-Models ein.",
    right_title: "Wirklich glücklich werden",
    s1: "Support rund um die Uhr",
    s2: "Hohe Provision",
    s3: "Sicherheit",
    s4: "Nur erfahrene Betreiber",
    s5: "Umzug in die USA",
    about_title: "Über X6 Studio",
    about_text: "Wir sind ein professionelles Team, das dir hilft, bei OnlyFans erfolgreich zu sein. Mit individueller Betreuung und echten Aufstiegschancen."
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}

