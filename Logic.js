let userName = "Human";
let language = "en";
let currentTopic = 0; // Aktualny temat
let topics = []; // Lista tematów

const translations = {
    en: {
        sendMessage: "Send",
        addImage: "Add Image",
        placeholder: "Type a message...",
        aiResponse: "I will not answer any question.",
        userName: "Your name:",
        saveButton: "Save",
        languageSelector: "Choose language:",
        userNamePlaceholder: "Enter your name",
        newConversation: "New Conversation",
        topicPrefix: "Topic",
        searchTopic: "Search topic",
        topicLimitMessage: "You have reached the limit of 15 topics. No more can be created.",
        customization: "Customization",
        buttonColor: "Button color:",
        buttonTextColor: "Button text color:",
        backgroundColor: "Background color:",
        userMessageColor: "User message color:",
        aiMessageColor: "AI message color:",
        textColor: "Text color:",
        resetColors: "Reset colors"
    },
    zh: {
        sendMessage: "发送",
        addImage: "添加图片",
        placeholder: "输入消息...",
        aiResponse: "我不会回答任何问题。",
        userName: "你的名字：",
        saveButton: "保存",
        languageSelector: "选择语言：",
        userNamePlaceholder: "请输入你的名字",
        newConversation: "新对话",
        topicPrefix: "话题",  
        searchTopic: "搜索主题",
        topicLimitMessage: "您已达到 15 个主题的限制。无法创建更多。",
        customization: "定制化",
        buttonColor: "按钮颜色：",
        buttonTextColor: "按钮文字颜色：",
        backgroundColor: "背景颜色：",
        userMessageColor: "用户消息颜色：",
        aiMessageColor: "AI消息颜色：",
        textColor: "文字颜色：",
        resetColors: "重置颜色"
    },
    hi: {
        sendMessage: "भेजें",
        addImage: "चित्र जोड़ें",
        placeholder: "संदेश लिखें...",
        aiResponse: "मैं किसी भी सवाल का जवाब नहीं दूंगा।",
        userName: "तुम्हारा नाम:",
        saveButton: "सहेजें",
        languageSelector: "भाषा चुनें:",
        userNamePlaceholder: "अपना नाम दर्ज करें",
        newConversation: "नई बातचीत",
        topicPrefix: "विषय",  
        searchTopic: "विषय खोजें",
        topicLimitMessage: "आप 15 विषयों की सीमा तक पहुँच गए हैं। अधिक नहीं बनाया जा सकता है।",
        customization: "अनुकूलन",
        buttonColor: "बटन का रंग:",
        buttonTextColor: "बटन टेक्स्ट का रंग:",
        backgroundColor: "पृष्ठभूमि का रंग:",
        userMessageColor: "उपयोगकर्ता संदेश का रंग:",
        aiMessageColor: "AI संदेश का रंग:",
        textColor: "टेक्स्ट का रंग:",
        resetColors: "रंग रीसेट करें"
    },
    es: {
        sendMessage: "Enviar",
        addImage: "Agregar imagen",
        placeholder: "Escribe un mensaje...",
        aiResponse: "No responderé a ninguna pregunta.",
        userName: "Tu nombre:",
        saveButton: "Guardar",
        languageSelector: "Seleccionar idioma:",
        userNamePlaceholder: "Ingresa tu nombre",
        newConversation: "Nueva conversación",
        topicPrefix: "Tema",  
        searchTopic: "Buscar tema",
        topicLimitMessage: "Has alcanzado el límite de 15 temas. No se pueden crear más.",
        customization: "Personalización",
        buttonColor: "Color de botones:",
        buttonTextColor: "Color de texto de botones:",
        backgroundColor: "Color de fondo:",
        userMessageColor: "Color de mensajes de usuario:",
        aiMessageColor: "Color de mensajes de AI:",
        textColor: "Color de texto:",
        resetColors: "Restablecer colores"
    },
    pl: {
        sendMessage: "Wyślij",
        addImage: "Dodaj obraz",
        placeholder: "Wpisz wiadomość...",
        aiResponse: "Nie odpowiem na żadne pytanie.",
        userName: "Twoja nazwa:",
        saveButton: "Zapisz",
        languageSelector: "Wybierz język:",
        userNamePlaceholder: "Wpisz swoją nazwę",
        newConversation: "Nowa rozmowa",
        topicPrefix: "Temat",
        searchTopic: "Wyszukaj temat",
        topicLimitMessage: "Osiągnięto limit 15 tematów. Nie można utworzyć więcej.",
        customization: "Personalizacja",
        buttonColor: "Kolor przycisków:",
        buttonTextColor: "Kolor tekstu przycisków:",
        backgroundColor: "Kolor tła:",
        userMessageColor: "Kolor wiadomości użytkownika:",
        aiMessageColor: "Kolor wiadomości AI:",
        textColor: "Kolor tekstu:",
        resetColors: "Resetuj kolory"
    }
};

// Domyślne kolory dla aplikacji
const defaultColors = {
    buttonColor: "#cccccc",
    buttonTextColor: "#000000",
    backgroundColor: "#ffffff",
    userMessageColor: "#e3e3e3",
    aiMessageColor: "#e3e3e3",
    textColor: "#000000"
};

// Aktualne kolory aplikacji
let appColors = { ...defaultColors };

// Funkcja do ładowania zapisanych kolorów
function loadSavedColors() {
    const savedColors = localStorage.getItem('appColors');
    if (savedColors) {
        appColors = JSON.parse(savedColors);
        applyColors();
    }
    updateColorInputs();
}

// Funkcja do zapisywania kolorów
function saveColors() {
    // Pobierz wartości z inputów kolorów
    appColors.buttonColor = document.getElementById('buttonColor').value;
    appColors.buttonTextColor = document.getElementById('buttonTextColor').value;
    appColors.backgroundColor = document.getElementById('backgroundColor').value;
    appColors.userMessageColor = document.getElementById('userMessageColor').value;
    appColors.aiMessageColor = document.getElementById('aiMessageColor').value;
    appColors.textColor = document.getElementById('textColor').value;
    
    // Zapisz do localStorage
    localStorage.setItem('appColors', JSON.stringify(appColors));
    
    // Zastosuj kolory
    applyColors();
}

// Funkcja do resetowania kolorów do domyślnych
function resetColors() {
    appColors = { ...defaultColors };
    localStorage.setItem('appColors', JSON.stringify(appColors));
    updateColorInputs();
    applyColors();
}

// Funkcja do aktualizacji inputów kolorów zgodnie z aktualnymi kolorami
function updateColorInputs() {
    document.getElementById('buttonColor').value = appColors.buttonColor;
    document.getElementById('buttonTextColor').value = appColors.buttonTextColor;
    document.getElementById('backgroundColor').value = appColors.backgroundColor;
    document.getElementById('userMessageColor').value = appColors.userMessageColor;
    document.getElementById('aiMessageColor').value = appColors.aiMessageColor;
    document.getElementById('textColor').value = appColors.textColor;
}

// Funkcja do zastosowania kolorów do elementów interfejsu
function applyColors() {
    // Zastosuj kolor tła
    document.body.style.backgroundColor = appColors.backgroundColor;
    
    // Zastosuj kolor tekstu
    document.body.style.color = appColors.textColor;
    
    // Zastosuj kolory przycisków
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.backgroundColor = appColors.buttonColor;
        button.style.color = appColors.buttonTextColor;
    });
    
    // Zastosuj kolory wiadomości
    const userMessages = document.querySelectorAll('.user-message');
    userMessages.forEach(msg => {
        msg.style.backgroundColor = appColors.userMessageColor;
    });
    
    const aiMessages = document.querySelectorAll('.ai-message');
    aiMessages.forEach(msg => {
        msg.style.backgroundColor = appColors.aiMessageColor;
    });
    
    // Aktualizuj style CSS dla nowych wiadomości
    updateMessageStyles();
}

// Funkcja do aktualizacji stylów CSS dla wiadomości
function updateMessageStyles() {
    // Sprawdź, czy istnieje już element stylu dla wiadomości
    let styleElement = document.getElementById('dynamic-message-styles');
    
    // Jeśli nie istnieje, utwórz nowy
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-message-styles';
        document.head.appendChild(styleElement);
    }
    
    // Ustaw nowe style
    styleElement.textContent = `
        .user-message { background-color: ${appColors.userMessageColor}; }
        .ai-message { background-color: ${appColors.aiMessageColor}; }
    `;
}

function loadUserName() {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
        userName = savedUserName; // Ustaw nazwę użytkownika na zapisaną
    }
    updateUserNameLabel(); // Zaktualizuj etykietę z nazwą użytkownika
}

function updateUserNameLabel() {
    const label = document.getElementById("labelUserName");
    label.textContent = translations[language].userName;
}

function changeLanguage(newLanguage) {
    language = newLanguage; // Ustaw nowy język
    updateUserNameLabel(); // Zaktualizuj etykietę

    document.getElementById("labelLanguage").textContent = translations[language].languageSelector;
    document.getElementById("saveButton").textContent = translations[language].saveButton;
    document.getElementById("sendButton").textContent = translations[language].sendMessage;
    document.getElementById("userInput").placeholder = translations[language].placeholder;
    document.getElementById("searchTopicInput").placeholder = translations[language].searchTopic;
    document.getElementById("labelUserName").textContent = translations[language].userName;
    document.getElementById("userName").placeholder = translations[language].userNamePlaceholder;
    document.getElementById("newConversationButton").textContent = translations[language].newConversation;
    document.getElementById("addImageButton").textContent = translations[language].addImage;
    
    // Aktualizacja etykiet w sekcji personalizacji kolorów
    document.getElementById("labelCustomization").textContent = translations[language].customization;
    document.getElementById("labelButtonColor").textContent = translations[language].buttonColor;
    document.getElementById("labelButtonTextColor").textContent = translations[language].buttonTextColor;
    document.getElementById("labelBackgroundColor").textContent = translations[language].backgroundColor;
    document.getElementById("labelUserMessageColor").textContent = translations[language].userMessageColor;
    document.getElementById("labelAiMessageColor").textContent = translations[language].aiMessageColor;
    document.getElementById("labelTextColor").textContent = translations[language].textColor;
    document.getElementById("resetColorsButton").textContent = translations[language].resetColors;
	
    displayTopics();
}

// Dodanie funkcji zapisywania i wczytywania wiadomości
function saveTopicsToStorage() {
    localStorage.setItem('topics', JSON.stringify(topics));
}

function loadTopicsFromStorage() {
    const savedTopics = localStorage.getItem('topics');
    if (savedTopics) {
        topics = JSON.parse(savedTopics);
        displayTopics();
        if (currentTopic >= 0 && currentTopic < topics.length) {
            displayMessages(topics[currentTopic].messages);
        }
    }
}

window.addEventListener('load', () => {
    loadTopicsFromStorage();
    loadUserName();
    loadSavedColors(); // Ładuj zapisane kolory
    console.log("Aktualny język przed zmianą:", language);
    changeLanguage(language); // Wywołaj zmianę języka na domyślny
    
    // Dodaj nasłuchiwanie zmian kolorów
    document.getElementById('buttonColor').addEventListener('input', saveColors);
    document.getElementById('buttonTextColor').addEventListener('input', saveColors);
    document.getElementById('backgroundColor').addEventListener('input', saveColors);
    document.getElementById('userMessageColor').addEventListener('input', saveColors);
    document.getElementById('aiMessageColor').addEventListener('input', saveColors);
    document.getElementById('textColor').addEventListener('input', saveColors);
    
    // Przekaż obiekt translations do Jade.js
    if (typeof window.setTranslationsForJade === 'function') {
        window.setTranslationsForJade(translations);
    }
});

function createTopic() {
    if (topics.length >= 16) {
        alert(translations[language].topicLimitMessage);
        return null;
    }
    const topicName = `${translations[language].topicPrefix} ${topics.length}`;
    console.log(`Creating topic with name: ${topicName}`); // Dodanie logowania
    const topic = {
        id: topics.length,
        name: topicName,
        messages: [],
        favorite: false // Add this line
    };
    topics.push(topic);
    saveTopicsToStorage();
    return topic;
}

function startNewConversation() { // Rozpoczęcie nowej rozmowy
    const newTopic = createTopic();
    if (!newTopic) return;
    currentTopic = newTopic.id;
    displayTopics(); // Odświeżamy listę tematów
    clearChatWindow(); // Czyścimy okno czatu
}

function filterTopics() { // Filtrowanie tematów
    const searchTerm = document.getElementById("searchTopicInput").value.toLowerCase();
    const topicList = document.getElementById("topicList");
    topicList.innerHTML = ""; // Czyścimy listę

    topics.forEach((topic, index) => {
        if (topic.name.toLowerCase().includes(searchTerm)) {
            const topicButton = document.createElement("div");
            topicButton.className = "topic-button";
            topicButton.style.position = "relative";

            const topicName = document.createElement("div");
            topicName.className = 'topic-name editable';
            topicName.textContent = topic.name;
            topicName.contentEditable = false; // Wyłącz edycję domyślnie
            topicName.style.textAlign = 'center';
            topicName.style.maxWidth = 'calc(100% - 50px)';

            // Zmiana na podwójne kliknięcie do edycji
            topicName.ondblclick = function(e) {
                e.stopPropagation();
                this.contentEditable = true; // Włącz edycję dopiero po podwójnym kliknięciu
                this.focus();
            };

            topicName.onkeydown = function(e) {
                if(e.key === 'Enter') {
                    e.preventDefault();
                    this.blur();
                } else {
                    e.stopPropagation(); // Pozwól na normalne wprowadzanie tekstu
                }
            };

            topicName.onblur = function() {
                this.contentEditable = false; // Wyłącz edycję po utracie fokusu
                const newName = this.textContent.trim();
                if(newName && newName !== topic.name) {
                    topic.name = newName;
                    saveTopicsToStorage();
                    displayTopics();
                }
            };

            topicButton.appendChild(topicName);

            const deleteIcon = document.createElement("span");
            deleteIcon.className = "delete-icon";
            deleteIcon.innerHTML = "🗑️";
            deleteIcon.style.position = "absolute";
            deleteIcon.style.top = "5px";
            deleteIcon.style.right = "5px";
            deleteIcon.style.display = "none";
            deleteIcon.style.cursor = "pointer";
            deleteIcon.style.color = "#ff4444";
            deleteIcon.onclick = (e) => {
                e.stopPropagation();
                deleteTopic(index);
            };

            const starIcon = document.createElement("span");
            starIcon.className = "star-icon";
            starIcon.innerHTML = "⭐️";
            starIcon.style.position = "absolute";
            starIcon.style.top = "5px";
            starIcon.style.left = "5px";
            starIcon.style.display = "none";
            starIcon.style.cursor = "pointer";
            starIcon.style.color = "#ff4444";
            starIcon.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(index);
                starIcon.classList.toggle('active', topics[index].favorite);
                window.scrollTo(0, 0); // Przewiń do góry
            };

            topicButton.appendChild(starIcon);
            topicButton.appendChild(deleteIcon);

            topicButton.onmouseenter = () => {
                deleteIcon.style.display = "block";
                starIcon.style.display = "block";
            };
            topicButton.onmouseleave = () => {
                deleteIcon.style.display = "none";
                starIcon.style.display = "none";
            };

            topicButton.onclick = () => switchTopic(index); // Add this line

            topicList.appendChild(topicButton);
        }
    });
}

function deleteTopic(topicId) { // Usuwanie tematu
    if (topicId === 0) {
        return; // Zablokowanie usuwania tematu o ID 0
    }
    if (confirm("Czy na pewno chcesz usunąć ten temat?")) {
        topics.splice(topicId, 1); // Usuwamy temat z listy
        saveTopicsToStorage(); // Zapisujemy zmiany w localStorage
        if (currentTopic === topicId) {
            currentTopic = 0; // Przełączamy na pierwszy temat, jeśli usunięto aktualny
        }
        displayTopics(); // Odświeżamy listę tematów
        displayMessages(topics[currentTopic].messages); // Wyświetlamy wiadomości z nowego tematu
        if (topics.length < 16) {
            document.getElementById('newConversationButton').disabled = false;
        }
    }
}

function displayTopics() { // Wyświetlanie listy tematów
    const topicList = document.getElementById("topicList");
    topicList.innerHTML = ""; // Czyścimy listę

    topics.sort((a, b) => b.favorite - a.favorite);

    topics.forEach((topic, index) => {
        const topicButton = document.createElement("div");
        topicButton.className = "topic-button";
        topicButton.style.position = "relative";

        const topicName = document.createElement("div");
        topicName.className = 'topic-name editable';
        topicName.textContent = topic.name;
        topicName.contentEditable = false; // Wyłącz edycję domyślnie
        topicName.style.textAlign = 'center';
        topicName.style.maxWidth = 'calc(100% - 50px)';

        // Zmiana na podwójne kliknięcie do edycji
        topicName.ondblclick = function(e) {
            e.stopPropagation();
            this.contentEditable = true; // Włącz edycję dopiero po podwójnym kliknięciu
            this.focus();
        };

        topicName.onkeydown = function(e) {
            if(e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            } else {
                e.stopPropagation(); // Pozwól na normalne wprowadzanie tekstu
            }
        };

        topicName.onblur = function() {
            this.contentEditable = false; // Wyłącz edycję po utracie fokusu
            const newName = this.textContent.trim();
            if(newName && newName !== topic.name) {
                topic.name = newName;
                saveTopicsToStorage();
                displayTopics();
            }
        };

        topicButton.appendChild(topicName);

        const deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.innerHTML = "🗑️";
        deleteIcon.style.position = "absolute";
        deleteIcon.style.top = "5px";
        deleteIcon.style.right = "5px";
        deleteIcon.style.display = "none";
        deleteIcon.style.cursor = "pointer";
        deleteIcon.style.color = "#ff4444";
        deleteIcon.onclick = (e) => {
            e.stopPropagation();
            deleteTopic(index);
        };

        const starIcon = document.createElement("span");
        starIcon.className = "star-icon";
        starIcon.innerHTML = "⭐️";
        starIcon.style.position = "absolute";
        starIcon.style.top = "5px";
        starIcon.style.left = "5px";
        starIcon.style.display = "none";
        starIcon.style.cursor = "pointer";
        starIcon.style.color = "#ff4444";
        starIcon.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite(index);
            starIcon.classList.toggle('active', topics[index].favorite);
            window.scrollTo(0, 0); // Przewiń do góry
        };

        topicButton.appendChild(starIcon);
        topicButton.appendChild(deleteIcon);

        topicButton.onmouseenter = () => {
            deleteIcon.style.display = "block";
            starIcon.style.display = "block";
        };
        topicButton.onmouseleave = () => {
            deleteIcon.style.display = "none";
            starIcon.style.display = "none";
        };

        topicButton.onclick = () => switchTopic(index); // Add this line

        if(topic.favorite) {
            starIcon.classList.add('active');
        }

        topicList.appendChild(topicButton);
    });
}

function switchTopic(topicId) { // Przełączanie między tematami
    currentTopic = topicId;
    clearChatWindow();
    displayMessages(topics[topicId].messages);
}

function displayMessages(messages) {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML = "";

    if (!Array.isArray(messages)) return;

    messages.forEach(message => {
        if (!message || !message.type || !message.content) return;
        
        const messageElement = document.createElement("p");
        messageElement.classList.add("message", message.type === "user" ? "user-message" : "ai-message");
        
        // Usuwamy ewentualne poprzednie ikonki kopiowania z tekstu
        const cleanContent = message.type === "user" 
            ? `${userName}: ${message.content}`.replace(/📋/g, '') 
            : message.content.replace(/📋/g, '');
        
        messageElement.textContent = cleanContent;
        
        // Dodaj ikonkę kopiowania tylko do wiadomości AI
        if (message.type === "ai") {
            const copyIcon = document.createElement('span');
            copyIcon.className = 'copy-icon';
            copyIcon.innerHTML = '📋';
            copyIcon.onclick = () => copyToClipboard(message.content); // Kopiuj oryginalną treść wiadomości
            messageElement.appendChild(copyIcon);
        }
        
        chatWindow.appendChild(messageElement);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function clearChatWindow() { // Czyszczenie okna czatu
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML = "";
}

function saveMessage(type, content) {
    if (currentTopic === -1) {
        createNewTopic();
    }
    
    topics[currentTopic].messages.push({
        type: type,
        content: content,
        timestamp: new Date().toISOString()
    });
    
    saveTopicsToStorage(); // Zapisz po każdej nowej wiadomości
}

function loadTopics() { // Ładowanie tematów z localStorage
    const savedTopics = localStorage.getItem("topics");
    if (savedTopics) {
        topics = JSON.parse(savedTopics);
    }
}

function toggleSettings() { 
    const settings = document.getElementById("settingsWindow");
    settings.style.display = settings.style.display === "block" ? "none" : "block";
}

function toggleTopics() {
    const topicWindow = document.getElementById("topicWindow"); 
    topicWindow.style.display = topicWindow.style.display === "block" ? "none" : "block";
}

function saveSettings() {
    const nameInput = document.getElementById("userName").value.trim();
    userName = nameInput || "Human";
    document.getElementById("settingsWindow").style.display = "none";
    localStorage.setItem("userName", userName);
    
    // Zapisz również kolory
    saveColors();
}

function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function resizeImage(file, maxWidth, maxHeight, callback) { // Funkcja do skalowania zdjęć
    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (e) {
        img.src = e.target.result;

        img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            let width = img.width;
            let height = img.height;

            // Oblicz nowe wymiary, zachowując proporcje
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height); // Narysuj przeskalowane zdjęcie na canvas

            const resizedImageUrl = canvas.toDataURL("image/jpeg", 0.8);// Konwertuj canvas na URL danych
            callback(resizedImageUrl);
        };
    };

    reader.readAsDataURL(file);
}

document.getElementById("fileInput").addEventListener("change", function (event) {// Obsługa dodawania obrazu
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        resizeImage(file, 400, 400, function (resizedImageUrl) {
            const chatWindow = document.getElementById("chatWindow");
            const userMessage = document.createElement("p");
            userMessage.classList.add("message", "user-message");

            const img = document.createElement("img");
            img.src = resizedImageUrl;
            img.style.maxWidth = "100%"; // Obraz dostosuje się do szerokości kontenera
            img.style.height = "auto";   // Zachowanie proporcji
            img.style.borderRadius = "5px";
            img.style.marginTop = "10px";

            userMessage.appendChild(img);
            chatWindow.appendChild(userMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;

            saveMessage("user", `[Image] ${resizedImageUrl}`);  // Zapisujemy obraz jako wiadomość użytkownika

            const inputArea = document.querySelector('.input-area input'); // Przywracamy wysokość pola do wprowadzania tekstu
            inputArea.style.height = 'auto'; // Przywróć wysokość po dodaniu obrazu
        });
    }
});

function toggleFavorite(topicId) {
    topics[topicId].favorite = !topics[topicId].favorite;
    if(topics[topicId].favorite) {
        const favTopic = topics.splice(topicId, 1)[0];
        topics.splice(0, 0, favTopic);
    }
    saveTopicsToStorage();
    displayTopics();
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatWindow = document.getElementById("chatWindow");

    if (input.value.trim() !== "") {
        console.log("Wiadomość użytkownika:", input.value); // Logowanie wiadomości użytkownika

        saveMessage("user", input.value); // Zapisujemy wiadomość użytkownika
        displayMessages(topics[currentTopic].messages); // Odświeżamy okno czatu

        setTimeout(() => {
            console.log("Tworzenie odpowiedzi AI..."); // Logowanie rozpoczęcia tworzenia odpowiedzi AI

            // Użycie funkcji z Jade.js do generowania odpowiedzi AI
            const aiResponseText = generateAIResponse(input.value, language);
            
            const aiMessage = document.createElement("p");
            aiMessage.classList.add("message", "ai-message", "message-ai");
            aiMessage.textContent = aiResponseText;
            aiMessage.style.position = 'relative'; // Wymuszenie pozycjonowania kontenera wiadomości

            console.log("Dodawanie ikony kopiowania..."); // Logowanie dodawania ikony

            const copyIcon = document.createElement('span');
            copyIcon.className = 'copy-icon';
            copyIcon.innerHTML = '📋'; // Dodajemy ikonę 
            copyIcon.onclick = async () => await copyToClipboard(aiMessage.textContent);

            aiMessage.appendChild(copyIcon); // Dodaj ikonę do wiadomości AI
            document.getElementById('chatWindow').appendChild(aiMessage);

            console.log("Ikona kopiowania została dodana."); // Potwierdzenie dodania ikony

            saveMessage("ai", aiResponseText); // Zapisujemy odpowiedź AI
            displayMessages(topics[currentTopic].messages); // Odświeżamy okno czatu
        }, 500);

        input.value = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    } else {
        console.log("Pole wiadomości jest puste. Wiadomość nie została wysłana."); // Logowanie, jeśli pole jest puste
    }
}

async function copyToClipboard(text) {
    try {
        // Usuń emoji ikonki kopiowania z tekstu
        const cleanText = text.replace(/📋/g, '').trim();
        
        // Kopiuj do schowka
        await navigator.clipboard.writeText(cleanText);
    } catch (err) {
        console.error('Błąd podczas kopiowania:', err);
    }
}

// Dodanie funkcji czyszczenia localStorage dla Topic 0
function cleanupTopic0() {
    if (topics && topics[0]) {
        // Usuń duplikaty wiadomości
        const uniqueMessages = [];
        const seen = new Set();
        
        topics[0].messages = topics[0].messages.filter(message => {
            const key = `${message.type}-${message.content}-${message.timestamp}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
        
        saveTopicsToStorage();
        displayMessages(topics[0].messages);
    }
}

// Wywołaj funkcję czyszczenia
cleanupTopic0();