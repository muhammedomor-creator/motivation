// পৃথিবীর প্রায় সকল দেশের তালিকা (কান্ট্রি কোড, পতাকা ও নাম সহ)
// ওমর, তুমি পরবর্তীতে চাইলে এই তালিকার নিচে নতুন যেকোনো দেশের অবজেক্ট { code: "...", flag: "...", name: "..." } যোগ করতে পারবে।

const countriesList = [
    { code: "880", flag: "🇧🇩", name: "Bangladesh (+880)" },
    { code: "91", flag: "🇮🇳", name: "India (+91)" },
    { code: "966", flag: "🇸🇦", name: "Saudi Arabia (+966)" },
    { code: "971", flag: "🇦🇪", name: "UAE (+971)" },
    { code: "965", flag: "🇰🇼", name: "Kuwait (+965)" },
    { code: "974", flag: "🇶🇦", name: "Qatar (+974)" },
    { code: "968", flag: "🇴🇲", name: "Oman (+968)" },
    { code: "60", flag: "🇲🇾", name: "Malaysia (+60)" },
    { code: "92", flag: "🇵🇰", name: "Pakistan (+92)" },
    { code: "1", flag: "🇺🇸", name: "United States (+1)" },
    { code: "44", flag: "🇬🇧", name: "United Kingdom (+44)" },
    { code: "65", flag: "🇸🇬", name: "Singapore (+65)" },
    { code: "39", flag: "🇮🇹", name: "Italy (+39)" },
    { code: "1", flag: "🇨🇦", name: "Canada (+1)" },
    { code: "61", flag: "🇦🇺", name: "Australia (+61)" },
    { code: "49", flag: "🇩🇪", name: "Germany (+49)" },
    { code: "33", flag: "🇫🇷", name: "France (+33)" },
    { code: "81", flag: "🇯🇵", name: "Japan (+81)" },
    { code: "82", flag: "🇰🇷", name: "South Korea (+82)" },
    { code: "86", flag: "🇨🇳", name: "China (+86)" },
    { code: "90", flag: "🇹🇷", name: "Turkey (+90)" },
    { code: "20", flag: "🇪🇬", name: "Egypt (+20)" },
    { code: "973", flag: "🇧🇭", name: "Bahrain (+973)" },
    { code: "960", flag: "🇲🇻", name: "Maldives (+960)" },
    { code: "977", flag: "🇳🇵", name: "Nepal (+977)" },
    { code: "94", flag: "🇱🇰", name: 
"Sri Lanka (+94)" },
    { code: "62", flag: "🇮🇩", name: "Indonesia (+62)" },
    { code: "66", flag: "🇹🇭", name: "Thailand (+66)" },
    { code: "31", flag: "🇳🇱", name: "Netherlands (+31)" },
    { code: "34", flag: "🇪🇸", name: "Spain (+34)" },
    { code: "41", flag: "🇨🇭", name: "Switzerland (+41)" },
    { code: "27", flag: "🇿🇦", name: "South Africa (+27)" },
    { code: "55", flag: "🇧🇷", name: "Brazil (+55)" },
    { code: "7", flag: "🇷🇺", name: "Russia (+7)" },
    { code: "64", flag: "🇳🇿", name: 
"New Zealand (+64)" }
];

// গ্লোবাল অ্যাক্সেসের জন্য উইন্ডো অবজেক্টে সেট করা হলো
window.countriesList = countriesList;
