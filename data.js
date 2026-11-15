const bookChapters = [
  {
    chapter: "I Bob • 1-§",
    title: "Kislorodning tavsifi",
    content:
      "<p><b>Kislorod (O)</b> — VI guruh elementi, Ar = 16, Mr(O₂) = 32. Yer po'stlog'ining 49% ini tashkil qiladi.</p>",
    labDesc: "Kislorod molekulasini ko'ring:",
    buttons: [
      {
        label: "O₂ molekulasini ko'rish",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "O = O (Qo'shbog'li kislorod, Mr = 32)",
      },
    ],
    quiz: [
      {
        q: "Kislorodning nisbiy atom massasi nechaga teng?",
        opts: ["8", "16", "32", "48"],
        ans: 1,
      },
      {
        q: "Kislorod Yer po'stlog'ining necha foizini tashkil qiladi?",
        opts: ["21%", "49%", "78%", "89%"],
        ans: 1,
      },
      {
        q: "Kislorodning tartib raqami nechaga teng?",
        opts: ["6", "7", "8", "16"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "I Bob • 2-§",
    title: "Kislorodning olinishi",
    content:
      "<p>Laboratoriyada <b>KMnO₄</b> yoki <b>H₂O₂</b> ni MnO₂ katalizatori ishtirokida parchalab olinadi. Sanoatda suyuq havoni haydab olinadi.</p>",
    labDesc: "Kislorod olish tajribasi:",
    buttons: [
      {
        label: "H₂O₂ + MnO₂ qo'shish",
        color: "#38bdf8",
        ph: "15%",
        pc: "#1e293b",
        gas: true,
        eq: "2H₂O₂ —(MnO₂)→ 2H₂O + O₂↑",
      },
      {
        label: "KMnO₄ qizdirish",
        color: "#a855f7",
        ph: "20%",
        pc: "#3b0764",
        gas: true,
        eq: "2KMnO₄ —(t°)→ K₂MnO₄ + MnO₂ + O₂↑",
      },
    ],
    quiz: [
      {
        q: "H₂O₂ ni parchalashda qaysi katalizator ishlatiladi?",
        opts: ["MnO₂", "CaO", "NaCl", "H₂SO₄"],
        ans: 0,
      },
      {
        q: "Bertole tuzining formulasi qaysi?",
        opts: ["KCl", "KClO₃", "KMnO₄", "K₂CO₃"],
        ans: 1,
      },
      {
        q: "Sanoatda kislorod qanday olinadi?",
        opts: [
          "KMnO₄ qizdirib",
          "Suyuq havoni haydab",
          "Ohaktoshdan",
          "Tuzdan",
        ],
        ans: 1,
      },
    ],
  },
  {
    chapter: "I Bob • 3-§",
    title: "Kislorod xossalari va oksidlar",
    content:
      "<p>Rangsiz, hidsiz gaz, -183°C da suyuqlanadi. Metallar va metallmaslar bilan reaksiyaga kirishib <b>oksidlar</b> hosil qiladi.</p>",
    labDesc: "Moddalarning kislorodda yonishi:",
    buttons: [
      {
        label: "Oltingugurtni yoqish",
        color: "#60a5fa",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "S + O₂ → SO₂↑ (Ko'k alanga)",
      },
      {
        label: "Temirni yoqish",
        color: "#f97316",
        ph: "25%",
        pc: "#334155",
        gas: false,
        eq: "3Fe + 2O₂ → Fe₃O₄",
      },
    ],
    quiz: [
      {
        q: "Kislorod necha gradusda suyuqlanadi?",
        opts: ["0°C", "-183°C", "-218°C", "+100°C"],
        ans: 1,
      },
      {
        q: "Temir kislorodda yonganda qaysi oksid hosil bo'ladi?",
        opts: ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₂"],
        ans: 2,
      },
      {
        q: "Oksidlarda kislorodning valentligi nechaga teng?",
        opts: ["I", "II", "III", "IV"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "I Bob • 4-§",
    title: "Ozon va Allotropiya",
    content:
      "<p><b>Allotropiya</b> — bir elementning bir nechta oddiy modda hosil qilishi: <b>O₂</b> va <b>O₃ (ozon)</b>. Ozon qatlami ultrabinafsha nurlardan himoya qiladi.</p>",
    labDesc: "Kisloroddan ozon hosil bo'lishi:",
    buttons: [
      {
        label: "Elektr razryadi (3O₂ → 2O₃)",
        color: "#818cf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "3O₂ —(elektr razryadi)→ 2O₃",
      },
    ],
    quiz: [
      {
        q: "Ozonning formulasi qaysi?",
        opts: ["O₂", "O₃", "H₂O₂", "CO₂"],
        ans: 1,
      },
      {
        q: "Ozonning molekulyar massasi nechaga teng?",
        opts: ["16", "32", "48", "64"],
        ans: 2,
      },
      {
        q: "Ozon qatlami qanday nurlardan himoya qiladi?",
        opts: ["Infraqizil", "Ultrabinafsha", "Rentgen", "Radio"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "I Bob • 5-§",
    title: "Havoning tarkibi",
    content:
      "<p>Havoda <b>78% azot (N₂)</b>, <b>21% kislorod (O₂)</b> va 1% boshqa gazlar (CO₂, Ar) bor. Havoning o'rtacha molekulyar massasi <b>29</b> ga teng.</p>",
    labDesc: "CO₂ gazini ohakli suv bilan aniqlash:",
    buttons: [
      {
        label: "Ohakli suvga CO₂ yuborish",
        color: "#e2e8f0",
        ph: "30%",
        pc: "#ffffff",
        gas: false,
        eq: "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O",
      },
    ],
    quiz: [
      {
        q: "Havo tarkibida azot necha foiz?",
        opts: ["21%", "78%", "49%", "1%"],
        ans: 1,
      },
      {
        q: "Havoning o'rtacha molekulyar massasi nechaga teng?",
        opts: ["28", "29", "32", "16"],
        ans: 1,
      },
      {
        q: "Havodagi CO₂ qaysi modda bilan aniqlanadi?",
        opts: ["Ohakli suv", "Osh tuzi", "Spirt", "Kislota"],
        ans: 0,
      },
    ],
  },
  {
    chapter: "I Bob • 6-§",
    title: "Yonish va sekin oksidlanish",
    content:
      "<p><b>Yonish</b> — issiqlik va yorug'lik chiqishi bilan boradigan reaksiya. <b>Sekin oksidlanish</b> — yorug'lik chiqmasdan boradi (temirning zanglashi).</p>",
    labDesc: "Tabiiy gaz (CH₄) ning yonishi:",
    buttons: [
      {
        label: "Metanni (CH₄) yoqish",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "CH₄ + 2O₂ → CO₂↑ + 2H₂O + Q",
      },
    ],
    quiz: [
      {
        q: "Temirning zanglashi qanday jarayon?",
        opts: ["Yonish", "Sekin oksidlanish", "Neytrallanish", "Parlanish"],
        ans: 1,
      },
      {
        q: "Tabiiy gazning asosiy tarkibi nima?",
        opts: ["Etan", "Metan (CH₄)", "Propan", "Vodorod"],
        ans: 1,
      },
      {
        q: "Yoqilg'i chala yonganda qaysi zaharli gaz chiqadi?",
        opts: ["CO₂", "CO (Is gazi)", "O₂", "N₂"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "II Bob • 7-§",
    title: "Vodorod: Olinishi va xossalari",
    content:
      "<p><b>Vodorod (H₂)</b> — eng yengil gaz (havodan 14,5 marta yengil), Mr = 2. Ruxga (Zn) xlorid kislota (HCl) ta'sir ettirib Kipp apparatida olinadi.</p>",
    labDesc: "Rux va xlorid kislota reaksiyasi:",
    buttons: [
      {
        label: "Zn + 2HCl reaksiyasi",
        color: "#cbd5e1",
        ph: "15%",
        pc: "#64748b",
        gas: true,
        eq: "Zn + 2HCl → ZnCl₂ + H₂↑",
      },
    ],
    quiz: [
      {
        q: "Vodorod havodan necha marta yengil?",
        opts: ["2 marta", "14,5 marta", "29 marta", "8 marta"],
        ans: 1,
      },
      {
        q: "Vodorod olishda qaysi asbob ishlatiladi?",
        opts: ["Termometr", "Kipp apparati", "Areometr", "Barometr"],
        ans: 1,
      },
      {
        q: "Vodorodning nisbiy molekulyar massasi nechaga teng?",
        opts: ["1", "2", "4", "16"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "II Bob • 8-§",
    title: "Vodorodning kimyoviy xossalari",
    content:
      "<p>Kislorodda yonib suv hosil qiladi (2H₂ + O₂ = 2H₂O). Metall oksidlaridan sof metallarni qaytaradi (CuO + H₂ = Cu + H₂O).</p>",
    labDesc: "Mis (II)-oksidni qaytarish:",
    buttons: [
      {
        label: "CuO + H₂ ni qizdirish",
        color: "#f97316",
        ph: "25%",
        pc: "#ea580c",
        gas: false,
        eq: "CuO + H₂ —(t°)→ Cu + H₂O",
      },
    ],
    quiz: [
      {
        q: "2 hajm H₂ va 1 hajm O₂ aralashmasi nima deyiladi?",
        opts: ["Is gazi", "Qaldiroq gaz", "Tabiiy gaz", "Inert gaz"],
        ans: 1,
      },
      {
        q: "Vodorod qaysi moddadan sof misni qaytaradi?",
        opts: ["CuSO₄", "CuO", "CuCl₂", "Cu(OH)₂"],
        ans: 1,
      },
      {
        q: "Vodorod azot bilan birikib nima beradi?",
        opts: ["NH₃ (Ammiak)", "HNO₃", "NO₂", "N₂O"],
        ans: 0,
      },
    ],
  },
  {
    chapter: "II Bob • 9-§",
    title: "Kislotalar: Tarkibi va turlari",
    content:
      "<p><b>Kislotalar</b> — vodorod atomlari va kislota qoldig'idan iborat. Kislorodsiz (HCl, H₂S) va kislorodli (H₂SO₄, HNO₃, H₃PO₄) bo'ladi.</p>",
    labDesc: "Kislotalarga indikatorlar ta'siri:",
    buttons: [
      {
        label: "Ko'k lakmus tomizish",
        color: "#ef4444",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Kislota + Ko'k lakmus → QIZIL rang",
      },
      {
        label: "Metiloranj tomizish",
        color: "#f43f5e",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Kislota + Metiloranj → PUSHTI rang",
      },
    ],
    quiz: [
      {
        q: "Uch negizli kislotani ko'rsating:",
        opts: ["HCl", "H₂SO₄", "H₃PO₄", "HNO₃"],
        ans: 2,
      },
      {
        q: "Kislorodsiz kislotani toping:",
        opts: ["H₂SO₄", "HNO₃", "H₂S", "H₂CO₃"],
        ans: 2,
      },
      {
        q: "Kislota eritmasida lakmus qanday rangga kiradi?",
        opts: ["Ko'k", "Qizil", "Sariq", "Yashil"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "II Bob • 10-§",
    title: "Kislotalarning kimyoviy xossalari",
    content:
      "<p>Aktiv metallar bilan tuz va vodorod beradi. Asoslar bilan neytrallanish reaksiyasiga kirishadi.</p>",
    labDesc: "Sulfat kislotaning sifat reaksiyasi:",
    buttons: [
      {
        label: "H₂SO₄ + BaCl₂ qo'shish",
        color: "#f1f5f9",
        ph: "35%",
        pc: "#ffffff",
        gas: false,
        eq: "H₂SO₄ + BaCl₂ → BaSO₄↓ (Oq cho'kma) + 2HCl",
      },
    ],
    quiz: [
      {
        q: "Qaysi metall H₂SO₄ dan vodorodni siqib chiqara olmaydi?",
        opts: ["Zn", "Mg", "Fe", "Ag (Kumush)"],
        ans: 3,
      },
      {
        q: "Sulfat kislota uchun sifat reaktivi qaysi?",
        opts: ["AgNO₃", "BaCl₂", "NaOH", "Lakmus"],
        ans: 1,
      },
      {
        q: "Kislota va asos reaksiyasi nima deyiladi?",
        opts: ["Yonish", "Neytrallanish", "Parchalanish", "Birikish"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "II Bob • 11-§",
    title: "Tuzlar: Tarkibi va turlari",
    content:
      "<p><b>Tuzlar:</b> O'rta tuzlar (NaCl, CaCO₃), nordon tuzlar (NaHCO₃) va asosli tuzlar (CuOHCl) ga bo'linadi.</p>",
    labDesc: "Ichimlik sodasiga kislota ta'siri:",
    buttons: [
      {
        label: "NaHCO₃ + HCl qo'shish",
        color: "#e0f2fe",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "NaHCO₃ + HCl → NaCl + H₂O + CO₂↑",
      },
    ],
    quiz: [
      {
        q: "Nordon tuzni ko'rsating:",
        opts: ["Na₂SO₄", "NaHSO₄", "CuOHCl", "KCl"],
        ans: 1,
      },
      {
        q: "Asosli tuz qaysi?",
        opts: ["CaCO₃", "NaHCO₃", "MgOHCl", "KNO₃"],
        ans: 2,
      },
      {
        q: "Ichimlik sodasining formulasi qanday?",
        opts: ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "II Bob • 12-§",
    title: "Tuzlarning kimyoviy xossalari",
    content:
      "<p>Tuzlar metallar, kislotalar va ishqorlar bilan reaksiyaga kirishadi. Qizdirilganda parchalanadi (CaCO₃ = CaO + CO₂↑).</p>",
    labDesc: "Xlorid ionini aniqlash (Sifat reaksiyasi):",
    buttons: [
      {
        label: "NaCl + AgNO₃ qo'shish",
        color: "#f8fafc",
        ph: "30%",
        pc: "#ffffff",
        gas: false,
        eq: "NaCl + AgNO₃ → AgCl↓ (Oq cho'kma) + NaNO₃",
      },
    ],
    quiz: [
      {
        q: "Ohaktosh (CaCO₃) qizdirilganda nima hosil bo'ladi?",
        opts: ["Ca + CO₂", "CaO + CO₂↑", "Ca(OH)₂ + CO", "CaC₂ + O₂"],
        ans: 1,
      },
      {
        q: "Xlorid ionini aniqlash uchun qaysi tuz ishlatiladi?",
        opts: ["BaCl₂", "AgNO₃", "Na₂SO₄", "KNO₃"],
        ans: 1,
      },
      {
        q: "CuSO₄ ga rux (Zn) solinsa nima hosil bo'ladi?",
        opts: ["ZnSO₄ + Cu", "ZnO + CuS", "Reaksiya bormaydi", "Zn(OH)₂"],
        ans: 0,
      },
    ],
  },
  {
    chapter: "III Bob • 13-§",
    title: "Suv: Fizik xossalari va tozalanishi",
    content:
      "<p><b>Suv (H₂O)</b> — 0°C da muzlaydi, 100°C da qaynaydi. Zichligi +4°C da 1 g/sm³. Eng toza suv haydash (distillash) yo'li bilan olinadi.</p>",
    labDesc: "Suvning elektroliz jarayoni:",
    buttons: [
      {
        label: "Suvga elektr toki yuborish",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "2H₂O —(elektr toki)→ 2H₂↑ + O₂↑",
      },
    ],
    quiz: [
      {
        q: "Suvning eng katta zichligi necha gradusda kuzatiladi?",
        opts: ["0°C", "+4°C", "+25°C", "+100°C"],
        ans: 1,
      },
      {
        q: "Eng toza suv qanday olinadi?",
        opts: ["Filtrlash", "Distillash (haydash)", "Tindirish", "Qaynatish"],
        ans: 1,
      },
      {
        q: "Suv molekulasi necha atomdan iborat?",
        opts: ["2 ta", "3 ta", "4 ta", "5 ta"],
        ans: 1,
      },
    ],
  },

  {
    chapter: "III Bob • 14-§",
    title: "Suv xossalari va kristallogidratlar",
    content:
      "Kristallogidratlar — tarkibida suv tutuvchi kristallar: CuSO₄·5H₂O (mis kuporosi), CaSO₄·2H₂O (gips).",
    labDesc: "Suvsiz CuSO₄ ga suv tomizish:",
    buttons: [
      {
        label: "Oq CuSO₄ ga suv tomizish",
        color: "#0284c7",
        ph: "25%",
        pc: "#38bdf8",
        gas: false,
        eq: "CuSO₄ + 5H₂O → CuSO₄·5H₂O (ko'k kristall)",
      },
    ],
    quiz: [
      {
        q: "Mis kuporosining formulasi qaysi?",
        opts: ["CuSO₄", "CuSO₄·5H₂O", "FeSO₄·7H₂O", "CaSO₄·2H₂O"],
        ans: 1,
      },
      {
        q: "Gipsning kimyoviy formulasi qanday?",
        opts: ["CaSO₄·2H₂O", "CaCO₃", "CaO", "CuSO₄"],
        ans: 0,
      },
      {
        q: "Suvsiz CuSO₄ qanday rangda bo'ladi?",
        opts: ["Ko'k", "Oq", "Yashil", "Qizil"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "III Bob • 15-§",
    title: "Eritmalar va eruvchanlik",
    content:
      "Eruvchanlik (S) — 100 g suvda ma'lum haroratda erishi mumkin bo'lgan moddaning maksimal gramm miqdori.",
    labDesc: "Haroratning eruvchanlikka ta'siri:",
    buttons: [
      {
        label: "Tuz eritmasini qizdirish",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Harorat ↑ → Qattiq moddaning eruvchanligi ↑",
      },
    ],
    quiz: [
      {
        q: "100 g suvda 36 g tuz erisa, 50 g suvda necha gramm eriydi?",
        opts: ["36 g", "18 g", "72 g", "9 g"],
        ans: 1,
      },
      {
        q: "Eruvchanlik necha gramm suvga nisbatan hisoblanadi?",
        opts: ["10 g", "50 g", "100 g", "1000 g"],
        ans: 2,
      },
      {
        q: "Suvda amalda erimaydigan moddani toping:",
        opts: ["NaCl", "Shakar", "AgCl", "H₂SO₄"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "III Bob • 16-§",
    title: "Foiz va molyar konsentratsiya",
    content:
      "Foiz konsentratsiya: C% = (m_modda / m_eritma) × 100%. Molyar konsentratsiya: C_M = n / V (mol/l).",
    labDesc: "20% li eritma tayyorlash:",
    buttons: [
      {
        label: "20 g tuz + 80 g suv",
        color: "#0ea5e9",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "C% = (20 / 100) × 100% = 20%",
      },
    ],
    quiz: [
      {
        q: "30 g shakar 120 g suvda eritildi. Konsentratsiya necha foiz?",
        opts: ["25%", "20%", "30%", "15%"],
        ans: 1,
      },
      {
        q: "2 litr eritmada 4 mol modda bo'lsa, molyar konsentratsiya qancha?",
        opts: ["2 M", "4 M", "8 M", "0,5 M"],
        ans: 0,
      },
      {
        q: "Molyar konsentratsiya birligi nima?",
        opts: ["g/ml", "mol/l", "%", "g/mol"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "III Bob • 17-§",
    title: "Asoslar: Tarkibi va turlari",
    content:
      "Suvda eriydigan asoslar ishqorlar (NaOH, KOH), erimaydiganlari (Cu(OH)₂, Fe(OH)₃) va amfoter asoslar (Zn(OH)₂, Al(OH)₃) ga bo'linadi.",
    labDesc: "Mis (II)-gidroksid cho'kmasini olish:",
    buttons: [
      {
        label: "CuSO₄ + 2NaOH qo'shish",
        color: "#38bdf8",
        ph: "35%",
        pc: "#1d4ed8",
        gas: false,
        eq: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄",
      },
    ],
    quiz: [
      {
        q: "Ishqorni ko'rsating:",
        opts: ["Cu(OH)₂", "Fe(OH)₂", "Ba(OH)₂", "Al(OH)₃"],
        ans: 2,
      },
      {
        q: "Amfoter asosni toping:",
        opts: ["NaOH", "KOH", "Zn(OH)₂", "Ca(OH)₂"],
        ans: 2,
      },
      {
        q: "O'yuvchi kaliyning formulasi qaysi?",
        opts: ["K₂O", "KOH", "K₂CO₃", "KH"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "III Bob • 18-§",
    title: "Asoslarning xossalari va indikatorlar",
    content:
      "Ishqorlar fenolftaleinni malina rangga, lakmusni ko'kka, metiloranjni sariqqa bo'yaydi. Kislotalar bilan neytrallanish reaksiyasiga kirishadi.",
    labDesc: "Indikator va neytrallanish tajribasi:",
    buttons: [
      {
        label: "Fenolftalein tomizish",
        color: "#ec4899",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "NaOH + Fenolftalein → Malina rang",
      },
      {
        label: "HCl bilan neytrallash",
        color: "#e0f2fe",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "NaOH + HCl → NaCl + H₂O",
      },
    ],
    quiz: [
      {
        q: "Ishqorda fenolftalein qanday rangga kiradi?",
        opts: ["Ko'k", "Sariq", "To'q malina (pushti)", "Rangsiz"],
        ans: 2,
      },
      {
        q: "Cu(OH)₂ qizdirilganda nima hosil bo'ladi?",
        opts: ["Cu + H₂O", "CuO + H₂O", "Cu₂O + O₂", "CuH₂"],
        ans: 1,
      },
      {
        q: "Ishqorda metiloranj qanday rangga o'tadi?",
        opts: ["Qizil", "Sariq", "Ko'k", "Pushti"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "IV Bob • 19-§",
    title: "Oksid, asos, kislota va tuzlar ta'siri",
    content:
      "Asosli oksid + Kislota → Tuz + Suv. Kislotali oksid + Ishqor → Tuz + Suv.",
    labDesc: "Mis (II)-oksidning kislotada erishi:",
    buttons: [
      {
        label: "CuO + H₂SO₄ qo'shish",
        color: "#0284c7",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "CuO + H₂SO₄ → CuSO₄ + H₂O",
      },
    ],
    quiz: [
      {
        q: "Asosli oksid + Kislota reaksiyasidan nima hosil bo'ladi?",
        opts: ["Tuz va vodorod", "Tuz va suv", "Asos va suv", "Faqat tuz"],
        ans: 1,
      },
      {
        q: "Qaysi ikki modda reaksiyaga kirishmaydi?",
        opts: ["CaO va HCl", "SO₃ va NaOH", "CO₂ va H₂SO₄", "NaOH va HCl"],
        ans: 2,
      },
      {
        q: "CuO sulfat kislotada eriganda eritma rangi qanday bo'ladi?",
        opts: ["Qizil", "Havorang (ko'k)", "Yashil", "Sariq"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "IV Bob • 20-§",
    title: "Genetik bog'lanish",
    content:
      "Metall → Asosli oksid → Asos → Tuz (Ca → CaO → Ca(OH)₂ → CaCO₃). Metallmas → Kislotali oksid → Kislota → Tuz.",
    labDesc: "Temir tuzidan asos va oksid olish:",
    buttons: [
      {
        label: "FeCl₃ + 3NaOH quyish",
        color: "#fed7aa",
        ph: "35%",
        pc: "#9a3412",
        gas: false,
        eq: "FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl",
      },
      {
        label: "Fe(OH)₃ ni qizdirish",
        color: "#fca5a5",
        ph: "30%",
        pc: "#7f1d1d",
        gas: true,
        eq: "2Fe(OH)₃ —(t°)→ Fe₂O₃ + 3H₂O↑",
      },
    ],
    quiz: [
      {
        q: "S → SO₂ → H₂SO₃ → Na₂SO₃ zanjirida SO₂ nima?",
        opts: ["Asosli oksid", "Kislotali oksid", "Tuz", "Asos"],
        ans: 1,
      },
      {
        q: "Erimaydigan asoslar qizdirilganda nimaga parchalanadi?",
        opts: ["Metall va suv", "Oksid va suv", "Tuz va gaz", "Kislota"],
        ans: 1,
      },
      {
        q: "Fe(OH)₃ cho'kmasi qanday rangda?",
        opts: ["Ko'k", "Oq", "Qo'ng'ir", "Yashil"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "IV Bob • 21-§",
    title: "Kimyoviy hisoblash masalalari",
    content:
      "Modda miqdori: ν = m / M (mol). Gaz hajmi (n.sh.): V = ν × 22,4 (litr). Avogadro soni: 6,02 × 10²³.",
    labDesc: "1 mol gazning molyar hajmi:",
    buttons: [
      {
        label: "1 mol gaz hajmi (n.sh. da)",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "1 mol gaz (n.sh.) = 22,4 litr = 6,02 × 10²³ molekula",
      },
    ],
    quiz: [
      {
        q: "Normal sharoitda 2 mol O₂ qancha hajm egallaydi?",
        opts: ["22,4 l", "44,8 l", "11,2 l", "32 l"],
        ans: 1,
      },
      {
        q: "36 g suv (Mr=18) necha molga teng?",
        opts: ["1 mol", "2 mol", "3 mol", "0,5 mol"],
        ans: 1,
      },
      {
        q: "Avogadro soni nechaga teng?",
        opts: ["22,4", "6,02 × 10²³", "3,14", "9,8"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "V Bob • 22-§",
    title: "Elementlarning tabiiy oilalari",
    content:
      "Ishqoriy metallar (I A): Li, Na, K. Galogenlar (VII A): F, Cl, Br, I. Inert gazlar (VIII A): He, Ne, Ar, Kr, Xe, Rn.",
    labDesc: "Kaliyning suv bilan reaksiyasi:",
    buttons: [
      {
        label: "Suvga Kaliy (K) tashlash",
        color: "#c084fc",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "2K + 2H₂O → 2KOH + H₂↑ (Binafsha alanga)",
      },
    ],
    quiz: [
      {
        q: "Qaysi element ishqoriy metall?",
        opts: ["Kalsiy", "Natriy", "Magniy", "Alyuminiy"],
        ans: 1,
      },
      {
        q: "Galogenlar qaysi guruhda joylashgan?",
        opts: ["I A", "VI A", "VII A", "VIII A"],
        ans: 2,
      },
      {
        q: "Inert gazni ko'rsating:",
        opts: ["Azot", "Xlor", "Argon", "Vodorod"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "V Bob • 23-§",
    title: "D.I. Mendeleyevning davriy qonuni",
    content:
      "1869-yilda D.I. Mendeleyev Davriy qonunni kashf etdi. Element xossalari atom yadrosi zaryadiga davriy ravishda bog'liq.",
    labDesc: "Davriy bog'liqlik qonuni:",
    buttons: [
      {
        label: "Davriy bog'liqlikni ko'rish",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Tartib raqami (Z) ↑ → Xossalar davriy takrorlanadi",
      },
    ],
    quiz: [
      {
        q: "Davriy qonun nechanchi yilda kashf etilgan?",
        opts: ["1861", "1869", "1885", "1900"],
        ans: 1,
      },
      {
        q: "Elementning tartib raqami nimani bildiradi?",
        opts: [
          "Neytronlar sonini",
          "Protonlar sonini (yadro zaryadini)",
          "Davr raqamini",
          "Valentlikni",
        ],
        ans: 1,
      },
      {
        q: "Davriy qonun ochilganda nechta element ma'lum edi?",
        opts: ["63 ta", "100 ta", "118 ta", "45 ta"],
        ans: 0,
      },
    ],
  },
  {
    chapter: "V Bob • 24-§",
    title: "Davriy sistemaning tuzilishi",
    content:
      "Davriy sistema 7 ta davr va 8 ta guruh dan iborat. 1, 2, 3-davrlar kichik, 4, 5, 6, 7-davrlar katta davrlar deyiladi.",
    labDesc: "Davr va guruh bo'ylab xossalar o'zgarishi:",
    buttons: [
      {
        label: "Chapdan o'ngga (Davr)",
        color: "#60a5fa",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Metallik kamayadi ← | → Metallmaslik ortadi",
      },
      {
        label: "Yuqoridan pastga (Guruh)",
        color: "#fb923c",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Atom radiusi ↑ → Metallik xossa ortadi",
      },
    ],
    quiz: [
      {
        q: "Davriy sistemada nechta davr bor?",
        opts: ["6 ta", "7 ta", "8 ta", "10 ta"],
        ans: 1,
      },
      {
        q: "1-davrda nechta element joylashgan?",
        opts: ["2 ta", "8 ta", "18 ta", "32 ta"],
        ans: 0,
      },
      {
        q: "3-davrda nechta element bor?",
        opts: ["2 ta", "8 ta", "18 ta", "32 ta"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "V Bob • 25-§",
    title: "Atom tarkibi va izotoplar",
    content:
      "Yadro proton (p⁺) va neytron (n⁰) dan tuzilgan: N = Ar - Z. Izotoplar — protonlari bir xil, massasi har xil atomlar (¹H, ²H, ³H).",
    labDesc: "Natriy atomi yadrosi tarkibi:",
    buttons: [
      {
        label: "Natriy (Z=11, Ar=23) tarkibi",
        color: "#facc15",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "p⁺ = 11 ta, e⁻ = 11 ta, n⁰ = 23 - 11 = 12 ta",
      },
    ],
    quiz: [
      {
        q: "Kalsiy (Z=20, Ar=40) atomida nechta neytron bor?",
        opts: ["10", "20", "40", "60"],
        ans: 1,
      },
      {
        q: "Proton qanday zaryadga ega?",
        opts: ["Manfiy (-1)", "Musbat (+1)", "Zaryadsiz (0)", "+2"],
        ans: 1,
      },
      {
        q: "Izotoplar nimasi bilan farq qiladi?",
        opts: [
          "Protonlar soni",
          "Elektronlar soni",
          "Neytronlar soni (massasi)",
          "Tartib raqami",
        ],
        ans: 2,
      },
    ],
  },

  {
    chapter: "V Bob • 26-§",
    title: "Yadro reaksiyalari va radioaktivlik",
    content:
      "<p><b>Radioaktivlik</b> — beqaror yadrolarning nurlanish chiqarib boshqa elementga aylanishi (Bekkerel, M. Kyuri). Nurlar: α, β va γ.</p>",
    labDesc: "Radiyning alfa-yemirilishi:",
    buttons: [
      {
        label: "Radiy (Ra) α-yemirilishi",
        color: "#a855f7",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "²²⁶Ra₈₈ → ²²²Rn₈₆ + ⁴He₂ (α-zarracha)",
      },
    ],
    quiz: [
      {
        q: "Radioaktivlikni kim kashf etgan?",
        opts: ["Mendeleyev", "Anri Bekkerel", "Rezerford", "Lomonosov"],
        ans: 1,
      },
      {
        q: "Alfa zarracha qaysi element yadrosidan iborat?",
        opts: ["Vodorod", "Geliy (⁴He)", "Kislorod", "Uglerod"],
        ans: 1,
      },
      {
        q: "Radiyni kim kashf etgan?",
        opts: ["Mariya va Pyer Kyuri", "Dalton", "Tomson", "Bor"],
        ans: 0,
      },
    ],
  },
  {
    chapter: "V Bob • 27-§",
    title: "Elektron qobiqlar (2n² qoidasi)",
    content:
      "<p>Pog'onalar soni <b>davr raqamiga</b> teng. Maksimal elektronlar soni: <b>N = 2n²</b> (1-qobiqda 2 ta, 2-qobiqda 8 ta, 3-qobiqda 18 ta).</p>",
    labDesc: "Kislorod va Xlor elektron sxemasi:",
    buttons: [
      {
        label: "Kislorod (Z=8) sxemasi",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "+8 O ) 2e⁻ ) 6e⁻",
      },
      {
        label: "Xlor (Z=17) sxemasi",
        color: "#4ade80",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "+17 Cl ) 2e⁻ ) 8e⁻ ) 7e⁻",
      },
    ],
    quiz: [
      {
        q: "3-pog'onada maksimum nechta elektron bo'ladi?",
        opts: ["2", "8", "18", "32"],
        ans: 2,
      },
      {
        q: "Pog'onalar soni nimaga teng?",
        opts: [
          "Guruh raqamiga",
          "Davr raqamiga",
          "Neytronlar soniga",
          "Valentlikka",
        ],
        ans: 1,
      },
      {
        q: "4-pog'onaning maksimal sig'imi nechaga teng?",
        opts: ["8", "18", "32", "50"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "V Bob • 28-§",
    title: "Elektron bulutlar (s, p, d-orbitallar)",
    content:
      "<p><b>s-orbital</b> — sharsimon (2e⁻), <b>p-orbital</b> — gantelsimon (6e⁻), <b>d-orbital</b> — murakkab shaklda (10e⁻).</p>",
    labDesc: "Orbitallar sig'imi:",
    buttons: [
      {
        label: "s, p, d orbitallar sig'imi",
        color: "#818cf8",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "s = 2e⁻ | p = 6e⁻ | d = 10e⁻",
      },
    ],
    quiz: [
      {
        q: "s-orbital qanday shaklga ega?",
        opts: ["Gantelsimon", "Sharsimon", "Kubsimon", "Uchburchak"],
        ans: 1,
      },
      {
        q: "p-pog'onachada maksimum nechta elektron joylashadi?",
        opts: ["2 ta", "6 ta", "10 ta", "14 ta"],
        ans: 1,
      },
      {
        q: "Bitta orbitalda ko'pi bilan nechta elektron bo'ladi?",
        opts: ["1 ta", "2 ta", "6 ta", "8 ta"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "VI Bob • 29-§",
    title: "Kovalent kimyoviy bog'lanish",
    content:
      "<p>Umumiy elektron juftlar hisobiga hosil bo'ladi: <b>qutbsiz</b> (H₂, O₂, N₂) va <b>qutbli</b> (HCl, H₂O, NH₃) kovalent bog'lanish.</p>",
    labDesc: "Kovalent bog'lanish sxemasi:",
    buttons: [
      {
        label: "H₂ (Qutbsiz bog')",
        color: "#38bdf8",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "H• + •H → H : H",
      },
      {
        label: "HCl (Qutbli bog')",
        color: "#4ade80",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "H• + •Cl: → H : Cl",
      },
    ],
    quiz: [
      {
        q: "Elektromanfiyligi eng katta element qaysi?",
        opts: ["Kislorod", "Xlor", "Ftor", "Azot"],
        ans: 2,
      },
      {
        q: "Qutbsiz kovalent bog'lanishli moddani toping:",
        opts: ["H₂O", "Cl₂", "HCl", "NH₃"],
        ans: 1,
      },
      {
        q: "Azot (N₂) molekulasida nechta bog' bor?",
        opts: ["1 ta", "2 ta", "3 ta", "4 ta"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "VI Bob • 30-§",
    title: "Ion va Metall bog'lanish",
    content:
      "<p><b>Ion bog'lanish</b> — metall va metallmas ionlari tortishishi (NaCl, KBr). <b>Metall bog'lanish</b> — musbat ionlar va erkin elektronlar orasidagi bog'lanish.</p>",
    labDesc: "NaCl ion bog'lanishi:",
    buttons: [
      {
        label: "Na⁺ va Cl⁻ ion bog'lanishi",
        color: "#e2e8f0",
        ph: "25%",
        pc: "#ffffff",
        gas: false,
        eq: "Na⁰ - 1e⁻ → Na⁺ va Cl⁰ + 1e⁻ → Cl⁻ ⇒ Na⁺Cl⁻",
      },
    ],
    quiz: [
      {
        q: "Qaysi moddada ion bog'lanish bor?",
        opts: ["H₂O", "CO₂", "KCl", "O₂"],
        ans: 2,
      },
      {
        q: "Musbat zaryadlangan ion nima deyiladi?",
        opts: ["Anion", "Kation", "Neytron", "Pozitron"],
        ans: 1,
      },
      {
        q: "Manfiy zaryadlangan ion nima deyiladi?",
        opts: ["Kation", "Anion", "Proton", "Atom"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "VI Bob • 31-§",
    title: "Kristall panjara turlari",
    content:
      "<p>Kristall panjara 4 xil: <b>Ion</b> (NaCl), <b>Atom</b> (Olmos, Kvars), <b>Molekulyar</b> (Muz, Yod) va <b>Metall</b> panjara.</p>",
    labDesc: "Kristall panjaralar mustahkamligi:",
    buttons: [
      {
        label: "Kristall panjara jadvali",
        color: "#60a5fa",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Atom (Olmos) > Ion (NaCl) > Molekulyar (Muz)",
      },
    ],
    quiz: [
      {
        q: "Olmos qanday kristall panjaraga ega?",
        opts: ["Ion", "Atom", "Molekulyar", "Metall"],
        ans: 1,
      },
      {
        q: "Osh tuzi (NaCl) qanday panjaraga ega?",
        opts: ["Atom", "Molekulyar", "Ion", "Metall"],
        ans: 2,
      },
      {
        q: "Amorf moddani ko'rsating:",
        opts: ["Osh tuzi", "Olmos", "Shisha", "Temir"],
        ans: 2,
      },
    ],
  },
  {
    chapter: "VI Bob • 32-§",
    title: "Oksidlanish darajasi",
    content:
      "<p>Oddiy moddalarda <b>0</b> ga teng. Kislorod <b>-2</b>, vodorod <b>+1</b>, ishqoriy metallar <b>+1</b> bo'ladi.</p>",
    labDesc: "Oksidlanish darajasini hisoblash:",
    buttons: [
      {
        label: "H₂SO₄ da oltingugurt (S)",
        color: "#fde047",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "2(+1) + x + 4(-2) = 0 ⇒ x = +6 (S⁺⁶)",
      },
      {
        label: "KMnO₄ da marganes (Mn)",
        color: "#a855f7",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "+1 + x + 4(-2) = 0 ⇒ x = +7 (Mn⁺⁷)",
      },
    ],
    quiz: [
      {
        q: "HNO₃ da azotning oksidlanish darajasi nechaga teng?",
        opts: ["+3", "+5", "-3", "+4"],
        ans: 1,
      },
      {
        q: "Oddiy moddalarda oksidlanish darajasi nechaga teng?",
        opts: ["+1", "-1", "0", "+2"],
        ans: 2,
      },
      {
        q: "H₂O₂ da kislorodning oksidlanish darajasi qancha?",
        opts: ["-2", "-1", "0", "+1"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "VII Bob • 33-§",
    title: "Galogenlarning umumiy tavsifi",
    content:
      "<p><b>Galogenlar (VII A):</b> F₂ (gaz), Cl₂ (gaz), Br₂ (suyuqlik), I₂ (qattiq kristall).</p>",
    labDesc: "Galogenlar agregat holati:",
    buttons: [
      {
        label: "Galogenlar qatori (F → I)",
        color: "#a855f7",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "F₂ (gaz) → Cl₂ (gaz) → Br₂ (suyuqlik) → I₂ (qattiq)",
      },
    ],
    quiz: [
      {
        q: "Xona haroratida suyuq holatda bo'ladigan galogen qaysi?",
        opts: ["Ftor", "Xlor", "Brom", "Yod"],
        ans: 2,
      },
      {
        q: "'Galogen' so'zining ma'nosi nima?",
        opts: [
          "Suv tug'diruvchi",
          "Tuz hosil qiluvchi",
          "Kislota beruvchi",
          "Zaharli gaz",
        ],
        ans: 1,
      },
      {
        q: "Eng kuchli metallmas galogen qaysi?",
        opts: ["Yod", "Brom", "Xlor", "Ftor"],
        ans: 3,
      },
    ],
  },
  {
    chapter: "VII Bob • 34-§",
    title: "Xlor: Olinishi va xossalari",
    content:
      "<p><b>Xlor (Cl₂)</b> — sarg'ish-yashil, havodan 2,5 marta og'ir zaharli gaz. Suvni zararsizlantirishda va xlorli ohak (CaOCl₂) olishda ishlatiladi.</p>",
    labDesc: "Xlorning suv bilan reaksiyasi:",
    buttons: [
      {
        label: "Cl₂ + H₂O reaksiyasi",
        color: "#fef08a",
        ph: "0%",
        pc: "transparent",
        gas: true,
        eq: "Cl₂ + H₂O ⇄ HCl + HClO",
      },
    ],
    quiz: [
      {
        q: "Xlor havodan necha marta og'ir?",
        opts: ["1,5 marta", "2,5 marta", "14,5 marta", "5 marta"],
        ans: 1,
      },
      {
        q: "Xlor qanday rangli gaz?",
        opts: ["Rangsiz", "Sarg'ish-yashil", "Qo'ng'ir", "Ko'k"],
        ans: 1,
      },
      {
        q: "Xlorli ohak formulasi qaysi?",
        opts: ["CaCl₂", "CaOCl₂", "Ca(OH)₂", "NaClO"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "VII Bob • 35-§",
    title: "Vodorod xlorid va xlorid kislota",
    content:
      "<p><b>HCl</b> — 1 hajm suvda 500 hajmgacha eriydi. Suvdagi eritmasi <b>xlorid kislota</b> deyiladi. Cl⁻ ionini <b>AgNO₃</b> bilan aniqlanadi.</p>",
    labDesc: "Xlorid kislotaga sifat reaksiyasi:",
    buttons: [
      {
        label: "HCl + AgNO₃ qo'shish",
        color: "#f8fafc",
        ph: "30%",
        pc: "#e2e8f0",
        gas: false,
        eq: "HCl + AgNO₃ → AgCl↓ (Oq cho'kma) + HNO₃",
      },
    ],
    quiz: [
      {
        q: "1 hajm suvda necha hajm HCl eriydi?",
        opts: ["10 hajm", "100 hajm", "500 hajm", "50 hajm"],
        ans: 2,
      },
      {
        q: "Cl⁻ ionini aniqlash reaktivi qaysi?",
        opts: ["BaCl₂", "AgNO₃", "NaOH", "Fenolftalein"],
        ans: 1,
      },
      {
        q: "Oshqozon shirasida qaysi kislota bor?",
        opts: ["Sulfat", "Xlorid", "Nitrat", "Sirka"],
        ans: 1,
      },
    ],
  },
  {
    chapter: "VII Bob • 36-§",
    title: "Galogenlarning tabiatda tarqalishi",
    content:
      "<p><b>NaCl</b> (galit), <b>KCl</b> (silvin), <b>CaF₂</b> (flyuorit). <b>Yod</b> qalqonsimon bez uchun, <b>Ftor</b> tish emali uchun zarur.</p>",
    labDesc: "Yodni kraxmal bilan aniqlash:",
    buttons: [
      {
        label: "Kraxmalga Yod tomizish",
        color: "#1e3a8a",
        ph: "0%",
        pc: "transparent",
        gas: false,
        eq: "Kraxmal + I₂ → To'q ko'k rang",
      },
    ],
    quiz: [
      {
        q: "Buqoq kasalligini oldini olish uchun tuzga nima qo'shiladi?",
        opts: ["Ftor", "Xlor", "Brom", "Yod"],
        ans: 3,
      },
      {
        q: "Tish pastalariga qaysi element qo'shiladi?",
        opts: ["Yod", "Ftor", "Brom", "Xlor"],
        ans: 1,
      },
      {
        q: "Yod kraxmalga tomizilganda qanday rang hosil bo'ladi?",
        opts: ["Qizil", "Sariq", "To'q ko'k", "Yashil"],
        ans: 2,
      },
    ],
  },
];

const aiKnowledge = [
  {
    keys: ["kislorod", "o2", "ozon", "o3"],
    answer:
      "Kislorod (O₂) — Mr = 32, havoning 21% ini tashkil qiladi. Ozon (O₃) esa uning allotropik shakl o'zgarishi.",
  },
  {
    keys: ["vodorod", "h2", "kipp"],
    answer:
      "Vodorod (H₂) — eng yengil gaz (havodan 14,5 marta yengil). Zn + 2HCl → ZnCl₂ + H₂↑ reaksiyasi bilan olinadi.",
  },
  {
    keys: ["oksid", "co2", "cao", "so2"],
    answer:
      "Oksidlar — asosli (CaO), kislotali (CO₂), amfoter (ZnO) va befarq (CO) oksidlarga bo'linadi.",
  },
  {
    keys: ["asos", "ishqor", "naoh", "koh", "fenolftalein"],
    answer:
      "Ishqorlar (NaOH, KOH) fenolftaleinni malina rangga, lakmusni ko'kka bo'yaydi.",
  },
  {
    keys: ["kislota", "hcl", "h2so4", "hno3", "lakmus"],
    answer: "Kislotalar (HCl, H₂SO₄) ko'k lakmusni qizil rangga bo'yaydi.",
  },
  {
    keys: ["tuz", "nacl", "nordon", "asosli"],
    answer: "Tuzlar o'rta (NaCl), nordon (NaHCO₃) va asosli (CuOHCl) bo'ladi.",
  },
  {
    keys: ["davriy", "mendeleyev", "davr", "guruh", "izotop"],
    answer:
      "Mendeleyev 1869-yilda Davriy qonunni ochgan (7 davr, 8 guruh). Maksimal elektronlar: N = 2n².",
  },
  {
    keys: ["bog'lanish", "kovalent", "ion", "kristall"],
    answer:
      "Bog'lanish turlari: Kovalent (H₂O, N₂), Ion (NaCl) va Metall bog'lanish.",
  },
  {
    keys: ["galogen", "xlor", "ftor", "brom", "yod", "agno3"],
    answer:
      "Galogenlar: F, Cl, Br, I. Xlorid ionini AgNO₃ bilan (oq AgCl cho'kma), yodni kraxmal bilan aniqlanadi.",
  },
];

function switchTab(tabName, btnEl) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("tab-" + tabName).classList.add("active");
  btnEl.classList.add("active");
}

const canvas = document.getElementById("chemCanvas");
const ctx = canvas.getContext("2d");
let labState = {
  liquidColor: "#38bdf8",
  gasActive: false,
  precipColor: null,
  wave: 0,
};
let bubbles = Array.from({ length: 28 }, () => ({
  x: 145 + Math.random() * 90,
  y: 150 + Math.random() * 30,
  r: 2 + Math.random() * 3.5,
  s: 1 + Math.random() * 1.8,
}));
let smoke = Array.from({ length: 18 }, () => ({
  x: 185 + Math.random() * 10,
  y: 75,
  r: 4 + Math.random() * 5,
  a: 1,
}));

function animateLab() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  labState.wave += 0.08;
  ctx.fillStyle = "#475569";
  ctx.fillRect(165, 198, 50, 22);
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(186, 190, 8, 8);
  const flameH = 18 + Math.sin(labState.wave * 2.5) * 4;
  ctx.beginPath();
  ctx.moveTo(182, 190);
  ctx.quadraticCurveTo(190, 190 - flameH * 1.6, 198, 190);
  ctx.fillStyle = "#f97316";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(186, 190);
  ctx.quadraticCurveTo(190, 190 - flameH, 194, 190);
  ctx.fillStyle = "#fde047";
  ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(175, 80);
  ctx.lineTo(175, 110);
  ctx.lineTo(135, 175);
  ctx.quadraticCurveTo(135, 185, 148, 185);
  ctx.lineTo(232, 185);
  ctx.quadraticCurveTo(245, 185, 245, 175);
  ctx.lineTo(205, 110);
  ctx.lineTo(205, 80);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = labState.liquidColor;
  ctx.beginPath();
  ctx.moveTo(130, 140);
  for (let x = 130; x <= 250; x += 5)
    ctx.lineTo(x, 138 + Math.sin(x * 0.1 + labState.wave) * 3);
  ctx.lineTo(250, 190);
  ctx.lineTo(130, 190);
  ctx.fill();
  if (labState.precipColor) {
    ctx.fillStyle = labState.precipColor;
    ctx.fillRect(130, 174, 120, 15);
  }
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  bubbles.forEach((b) => {
    b.y -= b.s;
    if (b.y < 140) {
      b.y = 182;
      b.x = 148 + Math.random() * 84;
    }
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(175, 75);
  ctx.lineTo(175, 110);
  ctx.lineTo(135, 175);
  ctx.quadraticCurveTo(135, 185, 148, 185);
  ctx.lineTo(232, 185);
  ctx.quadraticCurveTo(245, 185, 245, 175);
  ctx.lineTo(205, 110);
  ctx.lineTo(205, 75);
  ctx.stroke();
  smoke.forEach((s) => {
    s.y -= labState.gasActive ? 1.5 : 0.7;
    s.x += Math.sin(s.y * 0.1) * 0.6;
    s.a -= 0.015;
    if (s.a <= 0) {
      s.y = 75;
      s.x = 185 + Math.random() * 10;
      s.a = 0.8;
    }
    ctx.fillStyle = labState.gasActive
      ? `rgba(56, 189, 248, ${s.a})`
      : `rgba(226, 232, 240, ${s.a * 0.5})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateLab);
}
animateLab();

const topicList = document.getElementById("topic-list");
const quizSelect = document.getElementById("quiz-topic-select");

bookChapters.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<small style="color:#64748b">${item.chapter}</small><br>${item.title}`;
  li.onclick = () => openLesson(index, li);
  topicList.appendChild(li);
  const opt = document.createElement("option");
  opt.value = index;
  opt.textContent = `${item.chapter}: ${item.title}`;
  quizSelect.appendChild(opt);
});

function openLesson(index, liElement) {
  document
    .querySelectorAll("#topic-list li")
    .forEach((el) => el.classList.remove("active"));
  liElement.classList.add("active");
  const data = bookChapters[index];
  document.getElementById("chapter-badge").textContent = data.chapter;
  document.getElementById("lesson-title").textContent = data.title;
  document.getElementById("lesson-body").innerHTML = data.content;
  document.getElementById("lab-desc").textContent = data.labDesc;
  labState.liquidColor = "#38bdf8";
  labState.precipColor = null;
  labState.gasActive = false;
  document.getElementById("lab-eq").textContent =
    "Reaksiya tenglamasi shu yerda chiqadi";
  const btns = document.getElementById("lab-btns");
  btns.innerHTML = "";
  data.buttons.forEach((b) => {
    const btn = document.createElement("button");
    btn.textContent = b.label;
    btn.onclick = () => {
      labState.liquidColor = b.color;
      labState.precipColor =
        b.ph !== "0%" && b.pc !== "transparent" ? b.pc : null;
      labState.gasActive = b.gas;
      document.getElementById("lab-eq").textContent = b.eq;
    };
    btns.appendChild(btn);
  });
}

if (document.querySelector("#topic-list li"))
  document.querySelector("#topic-list li").click();

let currentQuiz = [],
  qIndex = 0,
  score = 0;
function startQuiz() {
  const allQ = [...bookChapters[quizSelect.value].quiz];
  for (let i = allQ.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQ[i], allQ[j]] = [allQ[j], allQ[i]];
  }
  currentQuiz = allQ;
  qIndex = 0;
  score = 0;
  document.getElementById("quiz-area").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const qData = currentQuiz[qIndex];
  document.getElementById("quiz-progress").textContent =
    `Savol: ${qIndex + 1} / ${currentQuiz.length}`;
  document.getElementById("quiz-score").textContent = `Ball: ${score}`;
  document.getElementById("quiz-question").textContent = qData.q;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("next-q-btn").style.display = "none";
  const optsDiv = document.getElementById("quiz-options");
  optsDiv.innerHTML = "";
  qData.opts.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = optText;
    btn.onclick = () => {
      document.querySelectorAll(".opt-btn").forEach((b) => (b.disabled = true));
      const fb = document.getElementById("quiz-feedback");
      if (i === qData.ans) {
        btn.classList.add("correct");
        score += 10;
        fb.style.color = "#16a34a";
        fb.textContent = "To'g'ri javob! +10 ball";
      } else {
        btn.classList.add("wrong");
        document
          .querySelectorAll(".opt-btn")
          [qData.ans].classList.add("correct");
        fb.style.color = "#dc2626";
        fb.textContent = `Noto'g'ri. To'g'ri javob: ${qData.opts[qData.ans]}`;
      }
      document.getElementById("quiz-score").textContent = `Ball: ${score}`;
      document.getElementById("next-q-btn").style.display = "inline-block";
    };
    optsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  qIndex++;
  if (qIndex < currentQuiz.length) showQuestion();
  else {
    document.getElementById("quiz-question").textContent =
      `O'yin tugadi! Natija: ${score} / ${currentQuiz.length * 10} ball`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("next-q-btn").style.display = "none";
  }
}

function askAI() {
  const input = document.getElementById("ai-input");
  const text = input.value.trim();
  if (!text) return;
  const chatBox = document.getElementById("chat-messages");
  chatBox.innerHTML += `<div class="message user">${text}</div>`;
  input.value = "";
  const q = text.toLowerCase();
  let bestAnswer = null,
    maxMatches = 0;
  aiKnowledge.forEach((item) => {
    let matches = 0;
    item.keys.forEach((k) => {
      if (q.includes(k)) matches++;
    });
    if (matches > maxMatches) {
      maxMatches = matches;
      bestAnswer = item.answer;
    }
  });
  let reply =
    bestAnswer ||
    (q.includes("salom")
      ? "Va alaykum assalom! 8-sinf kimyo darsligi bo'yicha savolingizni yozing."
      : "Kislorod, vodorod, oksidlar, asoslar, kislotalar, tuzlar, davriy qonun yoki galogenlar haqida so'rab ko'ring!");
  setTimeout(() => {
    chatBox.innerHTML += `<div class="message bot">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 300);
}
