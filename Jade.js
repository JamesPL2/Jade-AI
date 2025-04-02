// Jade.js - Plik zawierający funkcje związane z odpowiedziami AI Jade

// Referencja do obiektu translations z Logic.js
let translationsForAI;

// Funkcja do ustawienia obiektu translations z Logic.js
function setTranslations(translationsObj) {
    translationsForAI = translationsObj;
}

// Funkcja generująca odpowiedź AI
function generateAIResponse(userMessage, language) {
    // Tutaj w przyszłości będzie logika generowania odpowiedzi AI
    // Na razie zwracamy prostą odpowiedź z tłumaczeń
    return translationsForAI[language].aiResponse;
}

// Eksportuj funkcje, aby były dostępne w Logic.js
if (typeof window !== 'undefined') {
    // W środowisku przeglądarki
    window.generateAIResponse = generateAIResponse;
    window.setTranslationsForJade = setTranslations;
} else if (typeof module !== 'undefined' && module.exports) {
    // W środowisku Node.js
    module.exports = {
        generateAIResponse,
        setTranslations
    };
}
