// API Key
const apiKey = '4d50a99a94762896ed094022';

// Language translations
const translations = {
  en: {
    title: "Caleb Basil Currency Converter",
    subtitle: "Check live currency rate across the globe",
    amount: "Amount",
    from: "From",
    to: "To",
    loading: "Loading...",
    result: "Result",
    exchangeRate: "Exchange Rate",
    lastUpdated: "Last Updated",
    appBtn: "Get the App",
    conversionSummary: "is equal to",
    errorInvalidInput: "Please enter a valid amount and select currencies.",
    errorApi: "Error: Unable to fetch exchange rate. Please check your API key or try again."
  },
  fr: {
    title: "Convertisseur de devises Caleb Basil",
    subtitle: "Vérifiez les taux de change en direct à travers le monde",
    amount: "Montant",
    from: "De",
    to: "À",
    loading: "Chargement...",
    result: "Résultat",
    exchangeRate: "Taux de change",
    lastUpdated: "Dernière mise à jour",
    appBtn: "Obtenir l'application",
    conversionSummary: "est égal à",
    errorInvalidInput: "Veuillez entrer un montant valide et sélectionner des devises.",
    errorApi: "Erreur : Impossible de récupérer le taux de change. Vérifiez votre clé API ou réessayez."
  },
  es: {
    title: "Convertidor de divisas Caleb Basil",
    subtitle: "Verifique las tasas de cambio en vivo en todo el mundo",
    amount: "Cantidad",
    from: "De",
    to: "A",
    loading: "Cargando...",
    result: "Resultado",
    exchangeRate: "Tasa de cambio",
    lastUpdated: "Última actualización",
    appBtn: "Obtener la aplicación",
    conversionSummary: "es igual a",
    errorInvalidInput: "Por favor, ingrese una cantidad válida y seleccione monedas.",
    errorApi: "Error: No se pudo obtener la tasa de cambio. Verifique su clave API o intente de nuevo."
  },
  de: {
    title: "Währungsrechner Caleb Basil",
    subtitle: "Überprüfen Sie die aktuellen Wechselkurse weltweit",
    amount: "Betrag",
    from: "Von",
    to: "Zu",
    loading: "Wird geladen...",
    result: "Ergebnis",
    exchangeRate: "Wechselkurs",
    lastUpdated: "Letzte Aktualisierung",
    appBtn: "App herunterladen",
    conversionSummary: "ist gleich",
    errorInvalidInput: "Bitte geben Sie einen gültigen Betrag ein und wählen Sie Währungen.",
    errorApi: "Fehler: Wechselkurs konnte nicht abgerufen werden. Überprüfen Sie Ihren API-Schlüssel oder versuchen Sie es erneut."
  },
  it: {
    title: "Convertitore di valute Caleb Basil",
    subtitle: "Controlla i tassi di cambio live in tutto il mondo",
    amount: "Importo",
    from: "Da",
    to: "A",
    loading: "Caricamento...",
    result: "Risultato",
    exchangeRate: "Tasso di cambio",
    lastUpdated: "Ultimo aggiornamento",
    appBtn: "Scarica l'app",
    conversionSummary: "è uguale a",
    errorInvalidInput: "Inserisci un importo valido e seleziona le valute.",
    errorApi: "Errore: Impossibile recuperare il tasso di cambio. Controlla la tua chiave API o riprova."
  },
  pt: {
    title: "Conversor de Moedas Caleb Basil",
    subtitle: "Verifique as taxas de câmbio ao vivo em todo o mundo",
    amount: "Quantia",
    from: "De",
    to: "Para",
    loading: "Carregando...",
    result: "Resultado",
    exchangeRate: "Taxa de câmbio",
    lastUpdated: "Última atualização",
    appBtn: "Obter o aplicativo",
    conversionSummary: "é igual a",
    errorInvalidInput: "Por favor, insira um valor válido e selecione as moedas.",
    errorApi: "Erro: Não foi possível obter a taxa de câmbio. Verifique sua chave API ou tente novamente."
  },
  ru: {
    title: "Конвертер валют Калеба",
    subtitle: "Проверьте актуальные курсы валют по всему миру",
    amount: "Сумма",
    from: "Из",
    to: "В",
    loading: "Загрузка...",
    result: "Результат",
    exchangeRate: "Курс обмена",
    lastUpdated: "Последнее обновление",
    appBtn: "Скачать приложение",
    conversionSummary: "равно",
    errorInvalidInput: "Пожалуйста, введите действительную сумму и выберите валюты.",
    errorApi: "Ошибка: Не удалось получить курс обмена. Проверьте ваш API-ключ или попробуйте снова."
  },
  zh: {
    title: "卡勒布货币转换器",
    subtitle: "检查全球实时汇率",
    amount: "金额",
    from: "从",
    to: "到",
    loading: "加载中...",
    result: "结果",
    exchangeRate: "汇率",
    lastUpdated: "最后更新",
    appBtn: "获取应用",
    conversionSummary: "等于",
    errorInvalidInput: "请输入有效金额并选择货币。",
    errorApi: "错误：无法获取汇率。请检查您的API密钥或重试。"
  },
  ja: {
    title: "ケイレブ通貨コンバーター",
    subtitle: "世界中のライブ為替レートを確認",
    amount: "金額",
    from: "元",
    to: "宛",
    loading: "読み込み中...",
    result: "結果",
    exchangeRate: "為替レート",
    lastUpdated: "最終更新",
    appBtn: "アプリを入手",
    conversionSummary: "は等しい",
    errorInvalidInput: "有効な金額を入力し、通貨を選択してください。",
    errorApi: "エラー：為替レートを取得できません。APIキーを確認するか、再度試してください。"
  },
  ar: {
    title: "محول العملات كاليب",
    subtitle: "تحقق من أسعار الصرف المباشرة عبر العالم",
    amount: "المبلغ",
    from: "من",
    to: "إلى",
    loading: "جاري التحميل...",
    result: "النتيجة",
    exchangeRate: "سعر الصرف",
    lastUpdated: "آخر تحديث",
    appBtn: "احصل على التطبيق",
    conversionSummary: "يساوي",
    errorInvalidInput: "الرجاء إدخال مبلغ صالح واختيار العملات.",
    errorApi: "خطأ: تعذر جلب سعر الصرف. تحقق من مفتاح API الخاص بك أو حاول مرة أخرى."
  },
  hi: {
    title: "कैलेब मुद्रा परिवर्तक",
    subtitle: "दुनिया भर में लाइव मुद्रा दरों की जाँच करें",
    amount: "राशि",
    from: "से",
    to: "को",
    loading: "लोड हो रहा है...",
    result: "परिणाम",
    exchangeRate: "विनिमय दर",
    lastUpdated: "अंतिम अद्यतन",
    appBtn: "ऐप प्राप्त करें",
    conversionSummary: "के बराबर है",
    errorInvalidInput: "कृपया एक मान्य राशि दर्ज करें और मुद्राएँ चुनें।",
    errorApi: "त्रुटि: विनिमय दर प्राप्त करने में असमर्थ। कृपया अपनी API कुंजी जांचें या फिर से प्रयास करें।"
  }
};

let currentLanguage = 'en';

// Currency to name and country mapping
const currencyDetails = {
  USD: { name: 'U.S. Dollar', countries: ['United States'] },
  EUR: { name: 'Euro', countries: ['Eurozone (e.g., France, Germany, Italy)'] },
  JPY: { name: 'Japanese Yen', countries: ['Japan'] },
  GBP: { name: 'British Pound', countries: ['United Kingdom'] },
  AUD: { name: 'Australian Dollar', countries: ['Australia'] },
  CAD: { name: 'Canadian Dollar', countries: ['Canada'] },
  CHF: { name: 'Swiss Franc', countries: ['Switzerland'] },
  CNY: { name: 'Chinese Yuan', countries: ['China'] },
  SEK: { name: 'Swedish Krona', countries: ['Sweden'] },
  NZD: { name: 'New Zealand Dollar', countries: ['New Zealand'] },
  SGD: { name: 'Singapore Dollar', countries: ['Singapore'] },
  HKD: { name: 'Hong Kong Dollar', countries: ['Hong Kong'] },
  NOK: { name: 'Norwegian Krone', countries: ['Norway'] },
  KRW: { name: 'South Korean Won', countries: ['South Korea'] },
  TRY: { name: 'Turkish Lira', countries: ['Turkey'] },
  RUB: { name: 'Russian Ruble', countries: ['Russia'] },
  INR: { name: 'Indian Rupee', countries: ['India'] },
  BRL: { name: 'Brazilian Real', countries: ['Brazil'] },
  ZAR: { name: 'South African Rand', countries: ['South Africa'] },
  MXN: { name: 'Mexican Peso', countries: ['Mexico'] },
  AED: { name: 'UAE Dirham', countries: ['United Arab Emirates'] },
  AMD: { name: 'Armenian Dram', countries: ['Armenia'] },
  DKK: { name: 'Danish Krone', countries: ['Denmark'] },
  THB: { name: 'Thai Baht', countries: ['Thailand'] },
  MYR: { name: 'Malaysian Ringgit', countries: ['Malaysia'] },
  ILS: { name: 'Israeli New Shekel', countries: ['Israel'] },
  PLN: { name: 'Polish Zloty', countries: ['Poland'] },
  HUF: { name: 'Hungarian Forint', countries: ['Hungary'] },
  CZK: { name: 'Czech Koruna', countries: ['Czech Republic'] },
  SAR: { name: 'Saudi Riyal', countries: ['Saudi Arabia'] },
  NGN: { name: 'Naira', countries: ['Nigeria'] },
  KWD: { name: 'Kuwaiti Dinar', countries: ['Kuwait'] },
  QAR: { name: 'Qatari Riyal', countries: ['Qatar'] },
  OMR: { name: 'Omani Rial', countries: ['Oman'] }
};

let currencies = {};

// Update language
function updateLanguage() {
  const lang = translations[currentLanguage];
  document.querySelector('h1').textContent = lang.title;
  document.querySelector('.subtitle').textContent = lang.subtitle;
  document.querySelector('label[for="amount"]').textContent = lang.amount;
  document.querySelector('label[for="from-currency-search"]').textContent = lang.from;
  document.querySelector('label[for="to-currency-search"]').textContent = lang.to;
  document.querySelector('.loading p').textContent = lang.loading;
  document.querySelector('.app-btn').textContent = lang.appBtn;
}

document.getElementById('language').addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  updateLanguage();
});

// Filter currencies for search
function filterCurrencies(searchInput, listId, codeInputId) {
  const searchTerm = searchInput.value.toLowerCase();
  const list = document.getElementById(listId);
  list.innerHTML = '';

  for (let code in currencies) {
    const { name, countries } = currencies[code];
    const displayText = `${name} - ${countries.join(', ')}`;
    if (name.toLowerCase().includes(searchTerm) || code.toLowerCase().includes(searchTerm) || displayText.toLowerCase().includes(searchTerm)) {
      const li = document.createElement('li');
      li.textContent = displayText;
      li.dataset.code = code;
      li.addEventListener('click', () => {
        searchInput.value = displayText;
        document.getElementById(codeInputId).value = code;
        list.classList.remove('active');
      });
      list.appendChild(li);
    }
  }

  if (searchTerm && list.children.length > 0) {
    list.classList.add('active');
  } else {
    list.classList.remove('active');
  }
}

// Fetch available currencies
async function fetchCurrencies() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    if (!response.ok) throw new Error('Failed to fetch currencies');
    const data = await response.json();
    if (data.result === 'error') throw new Error(data['error-type'] || 'API error');
    for (let code in data.conversion_rates) {
      currencies[code] = currencyDetails[code] || { name: code, countries: ['Unknown'] };
    }
    // Set default currencies
    document.getElementById('from-currency-search').value = 'U.S. Dollar - United States';
    document.getElementById('from-currency-code').value = 'USD';
    document.getElementById('to-currency-search').value = 'Naira - Nigeria';
    document.getElementById('to-currency-code').value = 'NGN';
  } catch (error) {
    console.error('Error fetching currencies:', error);
    document.getElementById('conversion-summary').textContent = translations[currentLanguage].errorApi;
    // Fallback currencies
    for (const code in currencyDetails) {
      currencies[code] = currencyDetails[code];
    }
  }
}

// Event listeners
document.getElementById('from-currency-search').addEventListener('input', function() {
  filterCurrencies(this, 'from-currency-list', 'from-currency-code');
});

document.getElementById('to-currency-search').addEventListener('input', function() {
  filterCurrencies(this, 'to-currency-list', 'to-currency-code');
});

document.getElementById('swap-btn').addEventListener('click', () => {
  const fromSearch = document.getElementById('from-currency-search').value;
  const toSearch = document.getElementById('to-currency-search').value;
  const fromCode = document.getElementById('from-currency-code').value;
  const toCode = document.getElementById('to-currency-code').value;
  document.getElementById('from-currency-search').value = toSearch;
  document.getElementById('to-currency-search').value = fromSearch;
  document.getElementById('from-currency-code').value = toCode;
  document.getElementById('to-currency-code').value = fromCode;
  convertCurrency();
});

document.getElementById('convert-btn').addEventListener('click', convertCurrency);

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('amount').value = '';
  document.getElementById('from-currency-search').value = 'U.S. Dollar - United States';
  document.getElementById('from-currency-code').value = 'USD';
  document.getElementById('to-currency-search').value = 'Naira - Nigeria';
  document.getElementById('to-currency-code').value = 'NGN';
  document.getElementById('conversion-summary').textContent = '';
  document.getElementById('exchange-rate').textContent = '';
  document.getElementById('last-updated').textContent = '';
});

// Convert currency
async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from-currency-code').value;
  const toCurrency = document.getElementById('to-currency-code').value;
  const summaryElement = document.getElementById('conversion-summary');
  const lang = translations[currentLanguage];

  // Validate inputs
  if (!amount || isNaN(amount) || amount <= 0 || !fromCurrency || !toCurrency) {
    summaryElement.textContent = lang.errorInvalidInput;
    document.getElementById('exchange-rate').textContent = '';
    document.getElementById('last-updated').textContent = '';
    return;
  }

  if (fromCurrency === toCurrency) {
    summaryElement.textContent = 'Please select different currencies.';
    document.getElementById('exchange-rate').textContent = '';
    document.getElementById('last-updated').textContent = '';
    return;
  }

  // Show loading
  document.getElementById('loading').classList.remove('hidden');
  summaryElement.textContent = '';
  document.getElementById('exchange-rate').textContent = '';
  document.getElementById('last-updated').textContent = '';

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
    if (!response.ok) throw new Error('Failed to fetch exchange rate');
    const data = await response.json();
    if (data.result === 'error') throw new Error(data['error-type'] || 'API error');
    const rate = data.conversion_rates[toCurrency];
    if (!rate) throw new Error('Rate not found for selected currency');
    const result = (amount * rate).toFixed(2);
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });

    summaryElement.textContent = `${amount} ${fromCurrency} ${lang.conversionSummary} ${result} ${toCurrency}`;
    document.getElementById('exchange-rate').textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
    document.getElementById('last-updated').textContent = `${lang.lastUpdated}: ${new Date(data.time_last_update_utc).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
  } catch (error) {
    summaryElement.textContent = lang.errorApi;
    document.getElementById('exchange-rate').textContent = '';
    document.getElementById('last-updated').textContent = '';
    console.error('Conversion error:', error);
  }

  document.getElementById('loading').classList.add('hidden');
}

// Initialize
fetchCurrencies().then(() => updateLanguage());