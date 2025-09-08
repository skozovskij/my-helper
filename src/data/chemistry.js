const data = [
  {
    id: 1,
    type: "organic",
    title: "Історія розвитку органічної хімії",
    subtopics: [
      {
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Стародавні цивілізації", bold: true },
              { value: " (Єгипет, Індія, Фінікія) вже використовували органічні речовини: цукор, барвники, ефірні та тваринні олії. Навчилися перетворювати їх: оцет з вина, мило з жирів." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "Алхімічний період (IV–XVI ст.)", bold: true },
              { value: " — емпіричні дослідження без знання складу. Виділено винний спирт, діетиловий етер." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "Ятрохімія (XVI–XVIII ст.)", bold: true },
              { value: " — Парацельс започаткував медичну хімію. Виділено органічні кислоти (щавлева, лимонна, яблучна тощо) та алкалоїди (опій)." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "XVIII ст.", bold: true },
              { value: " — Ломоносов і Лавуазьє сформулювали закон збереження маси. Встановлено склад вуглеводнів: метан (CH₄), етилен (C₂H₄), ацетилен (C₂H₂), бензол (C₆H₆). Виявлено, що всі органічні речовини містять Карбон." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "1808р. ", bold: true },
              { value: " — Я. Берцеліус ввів термін «органічна хімія» (теорія віталізму)." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "1824 - 1828рр.", bold: true },
              { value: " — Ф. Велер спростував віталізм, синтезував щавлеву кислоту та сечовину з неорганічних речовин." }
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "XIX ст. — розвиток синтезу:", bold: true },
            ],
            className: "underTitle"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "1845р", bold: true },
                  { value: " — Кольбе синтезував оцтову кислоту" }
                ],
              },
              {
                value: [
                  { value: "1854р", bold: true },
                  { value: " — Бертло отримав жири" }
                ]
              },
              {
                value: [
                  { value: "1861р", bold: true },
                  { value: " — Бутлеров синтезував вуглеводи та сформулював теорію хімічної будови" }
                ]
              }
            ],
            className: "list"
          },
        ],
      }
    ]
  },
  {
    id: 2,
    type: "organic",
    title: "1. Початкові поняття",
    subtopics: [
      {
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Органічна хімія", bold: true },
              { value: " вивчає сполуки Карбону, який завжди чотиривалентний. Атоми в молекулах з'єднуються згідно з валентністю, утворюючи ланцюги — лінійні, розгалужені або циклічні. Такий порядок називають " },
              { value: "органічною будовою." , bold: true },
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "Класифікація сполук базується на їх " },
              { value: "структурі, ", bold: true },
              { value: "що описується " },
              { value: "структурною формулою. " , bold: true },
              { value: "Атоми позначаються латинськими символами." },
            ],
            className: "underTitle"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Водневі та електрондефіцитні зв’язки — пунктиром" }
                ],
              },
              {
                value: [
                  { value: "Іонні — через заряди частинок" }
                ],
              }
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Водень часто не позначають, крім випадків приєднання до функціональних груп. Якщо у атома Карбону не вистачає валентності — поруч є атом(и) водню. Атоми можуть формувати " },
              { value: "циклічні ", bold: true },
              { value: "та " },
              { value: "ароматичні системи. " , bold: true },
            ],
            className: "underTitle"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/1.png",
            alt: "Органічна хімія",
            className: "image"
          }, 
        ],
      },
      {
        title: "Класифікація та номенклатура",
        contentBlocks: [
          {
            type: "image",
            src: "../images/chemistry/organic/2.png",
            alt: "Органічна хімія",
            className: "image"
          }
        ],
      },
      {
        title: "Теорія будови органічних сполук",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Основні положення" },
            ],
            className: "underTitle"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "1. Властивості речовини визначаються її складом і хімічною будовою." },
                ],
              },
              {
                value: [
                  { value: "2. Хімічна будова — це порядок з’єднання та взаємний вплив атомів у молекулі." },
                ],
              },
              {
                value: [
                  { value: "3. Властивості речовини залежать від її будови — знаючи одне, можна встановити інше." },
                ],
              },
              {
                value: [
                  { value: "4. Речовини з однаковим складом, але різною будовою — це " },
                  { value: "ізомери." , bold: true }
                ],
              },
            ],
            className: "list noCircle"
          },
          {
            type: "text",
            text: [
              { value: "ВАЖЛИВО: ", bold: true },
              { value: "Атоми в молекулі органічної речовини впливають один на одного." },
            ],
            className: "underTitle"
          }
        ],
      },
      {
        title: "Ізомерія",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Ізомери поділяються на " },
              { value: "структурні ", bold: true },
              { value: "та " },
              { value: "просторові (стереоізомери).", bold: true },
            ],
            className: "underTitle"
          },
          {
            type: "text",
            text: [
              { value: "Структурна ізомерія — різний порядок з’єднання атомів:" },
            ],
            className: "underTitle"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Ізомерія карбонового скелету: ", bold: true },
                  { value: "різна структура ланцюга (н-бутан vs ізобутан)" }
                ],
              },
              {
                value: [
                  { value: "Ізомерія положення кратного зв’язку: ", bold: true },
                  { value: "різне розташування С=С (бут-1-ен vs бут-2-ен)" }
                ],
              },
              {
                value: [
                  { value: "Ізомерія функціональних груп:  ", bold: true },
                  { value: "пропан-1-ол vs пропан-2-ол" }
                ],
              },
              {
                value: [
                  { value: "Ізомерія замісників: ", bold: true },
                  { value: "1-хлорпропан vs 2-хлорпропан" }
                ],
              },
              {
                value: [
                  { value: "Міжкласова ізомерія: ", bold: true },
                  { value: "алкени vs циклоалкани" }
                ],
              },
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Просторова ізомерія — однаковий склад, різне розміщення в просторі:" },
            ],
            className: "underTitle"
          },
          {
            type: "list",
            items: [
              {
                value: "Геометрична ізомерія:",
                subItems: [
                  { value: "Цис-ізомер — однакові групи по один бік С=С" },
                  { value: "Транс-ізомер — по різні боки" },
                ],
              },
              {
                value: "Оптична ізомерія:",
                subItems: [
                  { value: "Молекули з асиметричним атомом Карбону." },
                  { value: "Дзеркальні зображення, однакові властивості, але різна оптична активність." },
                  { value: "Правообертаючий vs лівообертаючий ізомер." },
                ]
              }
            ],
            className: "list"
          },
        ]
      }
    ]
  },
  {
    id: 3,
    type: "organic",
    title: "2. Алкани. Гомологічний ряд",
    subtopics: [
      {
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Алкани", bold: true },
              { value: " — насичені вуглеводні з одинарними σ-зв’язками. Атоми Карбону перебувають у sp³-гібридизації." },
            ]
          },
          {
            type: "text",
            text: [
              { value: "Формула: CₙH₂ₙ₊₂" },
            ]
          },
          {
            type: "text",
            text: [
              { value: "Гомологічний ряд: кожен наступний член відрізняється на –CH₂–." },
            ]
          },
          {
            type: "text",
            text: [
              { value: "Найпростіший представник — метан (CH₄)." },
            ]
          },
          {
            type: "text",
            text: [
              { value: "Перші чотири алкани мають тривіальні назви, далі — назви за грецькими числівниками + суфікс –ан." },
            ]
          }
        ]
      },
      {
        title: "Класифікація та номенклатура",
        contentBlocks: [
          {
            type: "image",
            src: "../images/chemistry/organic/3.png",
            alt: "Алкани і Радикали",
            className: "image"
          },
          {
            type: "text",
            text: [
              { value: "Структурна ізомерія:" }
            ]
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Вибір найдовшого ланцюга" },
                ],
              },
              {
                value: [
                  { value: "Нумерація з боку ближчого замісника" },
                ],
              },
              {
                value: [
                  { value: "Перелік радикалів із зазначенням положення" },
                ],
              },
              {
                value: [
                  { value: "Назва головного алкану" },
                ],
              },
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Типи структурної ізомерії:" }
            ]
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "1. Ізомерія карбонового скелету" },
                ],
              },
              {
                value: [
                  { value: "2. Ізомерія положення кратного зв’язку" },
                ],
              },
              {
                value: [
                  { value: "3. Ізомерія функціональних груп" },
                ],
              },
              {
                value: [
                  { value: "4. Ізомерія замісників" },
                ],
              },
              {
                value: [
                  { value: "5. Міжкласова ізомерія" },
                ],
              },
            ],
            className: "list noCircle"
          },
        ],
      },
      {
        title: "Фізичні властивості",
        contentBlocks: [
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "C₁–C₄ — гази" },
                ],
              },
              {
                value: [
                  { value: "C₅–C₁₅ — рідини" },
                ],
              },
              {
                value: [
                  { value: "C₁₆+ — тверді речовини" },
                ],
              },
              {
                value: [
                  { value: "Безбарвні, малополярні, не розчиняються у воді" },
                ],
              },
              {
                value: [
                  { value: "Добре розчиняються в органічних розчинниках" },
                ],
              },
              {
                value: [
                  { value: "Парафін — типовий представник твердих алканів" },
                ],
              },
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Хімічні властивості",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Хімічно інертні" },
                ],
              },
              {
                value: "Реакції:",
                subItems: [
                  { value: "Горіння" },
                  { value: "Радикальне заміщення (галогенування, нітрування)" },
                  { value: "Крекінг (термічний, каталітичний, піроліз)" },
                  { value: "Дегідрування → алкени, алкіни" },
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Добування та застосування алканів",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Добування:", bold: true },
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "1. Гідрування алкенів/алкінів" }
                ]
              },
              {
                value: [
                  { value: "2. Реакція Вюрца" }
                ]
              },
              {
                value: [
                  { value: "3. Декарбоксилювання солей кислот" }
                ]
              },  
              {
                value: [
                  { value: "4. Реакція C + H₂ → CH₄" }
                ]
              },
              {
                value: [
                  { value: "5. Гідроліз Al₄C₃" }
                ]
              },
            ],
            className: "list noCircle"
          },
          {
            type: "text",
            text: [
              { value: "Застосування:", bold: true },
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Метан — паливо, сировина для сажі, метанолу, формальдегіду, синтез-газу" }
                ]
              },
              {
                value: [
                  { value: "Пропан і бутан — скраплені гази, сировина для синтезу" }
                ]
              },
            ],
            className: "list "
          }
        ]
      },
      {
        title: "Циклоалкани",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Формула: CₙH₂ₙ (n ≥ 3)" }
                ]
              },
              {
                value: [
                  { value: "Класифікація: малі, звичайні, середні, макроцикли" }
                ]
              },
              {
                value: [
                  { value: "Назви: «цикло-» + назва алкану" }
                ]
              },
              {
                value: [
                  { value: "Фізичні властивості: гази, рідини, тверді" }
                ]
              },
              {
                value: [
                  { value: "Реакції: приєднання, радикальне заміщення, зміна розміру циклу" }
                ]
              },
              {
                value: [
                  { value: "Добування: циклізація, гідрування, піроліз" }
                ]
              },
              {
                value: "Застосування:",
                subItems: [
                  { value: "Циклопропан — наркоз" },
                  { value: "Циклопентан — у простагландинах" },
                  { value: "Циклогексан — розчинник, сировина для капролактаму" },
                ]
              }
            ],
            className: "list "
          }
        ]
      }
    ]
  },
  {
    id: 4,
    type: "organic",
    title: "3. Алкени та Алкіни",
    subtopics: [
      {
        title: "Алкени",
        contentBlocks: [
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Формула: ", bold: true },
                  { value: "CₙH₂ₙ" }
                ],
              },
              {
                value: [
                  { value: "Зв’язок: ", bold: true },
                  { value: "один подвійний (C=C), sp²-гібридизація" }
                ],
              },
              {
                value: [
                  { value: "Назви: ", bold: true },
                  { value: "заміна суфікса –ан на –ен, нумерація з боку ближчого подвійного зв’язку" }
                ],
              },
              {
                value: [
                  { value: "Приклади: ", bold: true },
                  { value: "етен (C₂H₄), пропен (C₃H₆), бутен (C₄H₈)" }
                ],
              },
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Алкіни",
        contentBlocks: [
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Формула: ", bold: true },
                  { value: "CₙH₂ₙ₋₂" }
                ],
              },
              {
                value: [
                  { value: "Зв’язок: ", bold: true },
                  { value: "один потрійний (C≡C), sp-гібридизація" }
                ],
              },
              {
                value: [
                  { value: "Назви: ", bold: true },
                  { value: "суфікс –ін, нумерація з боку ближчого потрійного зв’язку" }
                ],
              },
              {
                value: [
                  { value: "Приклади: ", bold: true },
                  { value: "етин (C₂H₂), пропін (C₃H₄), бутин (C₄H₆)" }
                ],
              },
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Фізичні властивості",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "C₂–C₄ — гази" },
                ]
              },
              {
                value: [
                  { value: "C₅–C₁₆ — рідини" },
                ]
              },
              {
                value: [
                  { value: "C₁₇+ — тверді" },
                ]
              },
              {
                value: [
                  { value: "Алкени — малорозчинні у воді" },
                ]
              },
              {
                value: [
                  { value: "Алкіни — краще розчинні, мають запах" },
                ]
              },
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Хімічні властивості",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Спільні реакції:", bold: true },
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "1. Горіння" }
                ]
              },
              {
                value: [
                  { value: "2. Гідрування (→ алкани)" }
                ]
              },
              {
                value: [
                  { value: "3. Галогенування (Cl₂, Br₂)" }
                ]
              },
              {
                value: [
                  { value: "4. Гідратація (→ спирти)" }
                ]
              },
            ],
            className: "list noCircle"
          },
        ]
      },
      {
        title: "Добування",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Алкени:", bold: true },
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Крекінг алканів" }
                ]
              },
              {
                value: [
                  { value: "Дегідрування алканів" }
                ]
              },
              {
                value: "Елімінування:",
                subItems: [
                  { value: "дегідратація спиртів" },
                  { value: "відщеплення галогеноводнів (правило Зайцева)" },
                  { value: "дегалогенування дигалогеналканів" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Алкіни:", bold: true },
            ]
          },
          {
            type: "list",
            items:[
              {
                value:[
                  { value: "Відщеплення галогеноводнів" },
                ]
              },
              {
                value:[
                  { value: "Реакція з ацетиленідами" },
                ]
              },
              {
                value:[
                  { value: "Крекінг метану, етану, пропану" },
                ]
              },
              {
                value:[
                  { value: "Гідроліз CaC₂ → C₂H₂" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Реакція Кучерова (для алканів):", bold: true },
            ]
          },
          {
            type: "image",
            src: "../images/chemistry/organic/4.png",
            alt: "Реакція Кучерова (для алканів)",
            className: "image"
          }
        ]
      },
      {
        title: "Алкадієни",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Формула: ", bold: true },
                  { value: "CₙH₂ₙ₋₂" }
                ]
              },
              {
                value: [
                  { value: "Мають: ", bold: true },
                  { value: "два подвійні зв’язки" }
                ]
              },
              {
                value: [
                  { value: "Ізомерія: ", bold: true },
                  { value: "скелетна, положення зв’язків, міжкласова, просторова" }
                ]
              },
              {
                value: [
                  { value: "Спряжені дієни: ", bold: true },
                  { value: "подвійні зв’язки розділені одинарним — вихідна сировина для каучуків" }
                ]
              },
            ],
            className: "list",
          }
        ]
      },
      {
        title: "Хімічні властивості алкадієнів",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Аленові дієни:", bold: true },
            ]
          },
          {
            type: "image",
            src: "../images/chemistry/organic/5.png",
            alt: "Аленові дієни",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Висока реакційна здатність" }
                ]
              },
              {
                value: [
                  { value: "Реакції: електрофільне, радикальне, нуклеофільне приєднання" }
                ]
              },
              {
                value: [
                  { value: "Можлива ізомеризація в ацетиленові або спряжені структури" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Спряжені дієни",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Реакції:", bold: true}
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "галогенування (1,2- і 1,4-продукти)" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/6.png",
            alt: "Галогенування",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "гідрогалогенування" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/7.png",
            alt: "Гідрогалогенування",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "дієновий синтез (Дільс-Альдер)" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/8.png",
            alt: "Дієновий синтез (Дільс-Альдер)",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "полімеризація → синтетичні каучуки" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/9.png",
            alt: "полімеризація → cинтетичні каучуки)",
            className: "image"
          },
          {
            type: "text",
            text: [
              { value: "Ізольовані дієни", bold: true },
              { value: " — поводяться як алкени" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    type: "organic",
    title: "4. Загальна характеристика аренів",
    subtopics: [
      {
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Арени", bold: true },
                  { value: " — карбоциклічні сполуки з бензеновим кільцем" }
                ]
              },
              {
                value: [
                  { value: "Формула: ", bold: true },
                  { value: "CₙH₂ₙ₋₆ (n ≥ 6)" }
                ]
              },
              {
                value: "Ізомерія:", bold: true,
                subItems: [
                  { value: "радикалів" },
                  { value: "кількості радикалів" },
                  { value: "положення радикалів у кільці" }
                ]
              }, 
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Ароматичність",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Властивість ароматичності визначає стабільність і реакційну здатність" }
                ]
              },
              {
                value: [
                  { value: "Правило Хюккеля:", bold: true },
                  { value: " ароматичні сполуки мають:" }
                ],
                subItems: [
                  { value: "плоску циклічну структуру" },
                  { value: "4n + 2 π-електронів (n = 0, 1, 2…)" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Бензен",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Безбарвна, токсична рідина з різким запахом" }
                ]
              },
              {
                value: [
                  { value: "Легша за воду, не розчиняється в ній" }
                ]
              },
              {
                value: [
                  { value: "Робота з бензеном у школах заборонена" }
                ]
              }
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Хімічні властивості  бензену",
        contentBlocks: [
          {
            type: "image",
            src: "../images/chemistry/organic/10.png",
            alt: "Хімічні властивості  бензену",
            className: "image"
          },
          {
            type: "image",
            src: "../images/chemistry/organic/11.png",
            alt: "Хімічні властивості  бензену",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Реакції " },
                  { value: "електрофільного заміщення: ", bold: true },
                  { value: "нітрування, галогенування, сульфування" }
                ]
              },
              {
                value: [
                  { value: "Стійкий до реакцій приєднання" },
                ]
              },
              {
                value: [
                  { value: "Висока стабільність завдяки делокалізації електронів" },
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Толуен (метилбензен)",
        contentBlocks: [
          {
            type: "image",
            src: "../images/chemistry/organic/12.png",
            alt: "Толуен (метилбензен)",
            className: "image"
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Гомолог бензену з метильною групою (–CH₃)" }
                ]
              },
              {
                value: [
                  { value: "Метильна група активує кільце → легше проходять реакції" }
                ]
              },
              {
                value: [
                  { value: "Нітрування:", bold: true },
                  { value: " можливе утворення тринітротолуену" }
                ]
              },
              {
                value: [
                  { value: "Окиснення:", bold: true },
                  { value: " толуен легко окиснюється (KMnO₄, O₂, K₂Cr₂O₇), на відміну від бензену" }
                ]
              }
            ]
          },
          {
            type: "image",
            src: "../images/chemistry/organic/13.png",
            alt: "Толуен (окиснення від бензену)",
            className: "image"
          },
        ]
      }
    ]
  },
  {
    id: 6,
    type: "organic",
    title: "5. Спирти та феноли",
    subtopics: [
      {
        title: "Загальна характеристика спиртів:",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Органічні речовини з гідроксильною групою –OH, приєднаною до карбонового радикала" }
                ]
              },
              {
                value: [
                  { value: "Формула: CₙH₂ₙ₊₁OH або R–OH" }
                ]
              },
              {
                value: [
                  { value: "Поділ: одноатомні (метанол, етанол) і багатоатомні (етиленгліколь, гліцерин)" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Ізомерія",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Скелетна" }
                ]
              },
              {
                value: [
                  { value: "Положення –OH" }
                ]
              },
              {
                value: [
                  { value: "Міжгрупова (спирти ↔ етери)" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Класифікація",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Первинні, вторинні, третинні — за типом атома Карбону, до якого приєднано –OH" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Номенклатура",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Суфікс –ол (пропанол-1, бутанол-2)" }
                ]
              },
              {
                value: [
                  { value: "Для багатоатомних — числівник перед –ол (гліколь, гліцерин)" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Фізичні властивості",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "C₁–C₁₄ — рідини, C₁₅+ — тверді" }
                ]
              },
              {
                value: [
                  { value: "Зі збільшенням маси: ↑температура кипіння, ↓розчинність у воді" }
                ]
              },
              {
                value: [
                  { value: "Метанол і етанол — схожі за запахом" }
                ]
              },
              {
                value: [
                  { value: "Багатоатомні спирти — в’язкі, добре розчинні у воді" }
                ]
              }
            ],
            className: "list"
          },
          {
            type: "text",
            text: [
              { value: "Етиленгліколь:", bold: true },
              { value: "сиропоподібна, отруйна, tₖ = +197.9 °C" }
            ]
          },
          {
            type: "text",
            text: [
              { value: "Гліцерин:", bold: true },
              { value: "солодкий, неотруйний, гігроскопічний, tₖ = +290 °C" }
            ]
          }
        ]
      },
      {
        title: "Добування спиртів",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "1. Гідратація алкенів" }
                ]
              },
              {
                value: [
                  { value: "2. Гідроліз галогеналканів" }
                ]
              },
              {
                value: [
                  { value: "3. Відновлення альдегідів" }
                ]
              },
              {
                value: [
                  { value: "4. Спиртове бродіння (C₆H₁₂O₆ → C₂H₅OH + CO₂)" }
                ]
              },
            ],
            className: "list noCircle"
          }
        ]
      },
      {
        title: "Хімічні властивості спиртів",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Горіння (повне/неповне)" }
                ]
              },
              {
                value: [
                  { value: "Реакції з металами → алкоголяти" }
                ]
              },
              {
                value: [
                  { value: "З галогеноводнями → етери" }
                ]
              },
              {
                value: [
                  { value: "Дегідратація → алкени або етери" }
                ]
              },
              {
                value: [
                  { value: "Окиснення → альдегіди" }
                ]
              },
              {
                value: [
                  { value: "Естерифікація → естери" }
                ]
              },
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Застосування",
        contentBlocks: [
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Розчинники, паливо, сировина для пластмас" }
                ]
              },
              {
                value: [
                  { value: "Метанол → формальдегід" }
                ]
              },
              {
                value: [
                  { value: "Етиленгліколь → антифризи, гальмівні рідини" }
                ]
              },
              {
                value: [
                  { value: "Гліцерин → фармація, парфумерія, вибухівка (нітрогліцерин)" }
                ]
              }
            ],
            className: "list"
          }
        ]
      },
      {
        title: "Феноли",
        contentBlocks: [
          {
            type: "text",
            text: [
              { value: "Феноли", bold: true },
              { value: " — ароматичні сполуки з –OH, приєднаною безпосередньо до бензенового кільця. " },
              { value: "Бувають одно-, дво-, багатоатомні" }
            ]
          },
          {
            type: "text",
            text: [
              { value: "Фенол:", bold: true },
            ]
          },
          {
            type: "list",
            items: [
              {
                value: [
                  { value: "Безбарвні кристали, рожевіють при зберіганні" }
                ]
              },
              {
                value: [
                  { value: "Має специфічний запах" }
                ]
              },
              {
                value: [
                  { value: "Отруйний, викликає хімічні опіки" }
                ]
              },
              {
                value: [
                  { value: "Погано розчиняється в холодній воді, добре — в гарячій" }
                ]
              },
              {
                value: [
                  { value: "tₚл = +42 °C" }
                ]
              }
            ],
            className: "list"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    type: "organic",
    title: "6. Альдегіди та карбонові кислоти",
    subtopics: [

    ]
  },
  {
    id: 10,
    type: "inorganic",
    title: "1. Основні питання. Періодичний закон і будова атома",
    subtopics: [
      {
        title: "Молекула",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Молекула", bold: true },
              { value: " — найменша частинка речовини, здатна існувати самостійно та зберігати її властивості." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Іони", bold: true },
              { value: " — заряджені молекули, які існують у розчиненому або розплавленому стані, або в поєднанні з протилежно зарядженими частинками (наприклад, білки, нуклеїнові кислоти)." }
            ]
          },
          { 
            type: "text",
            text: [
              { value: "Властивості речовин", bold: true },
              { value: " (агрегатний стан, колір, запах, температура кипіння тощо) залежать не від окремих молекул, а від їх сукупності. Однак молекули мають масу, розмір, дипольний момент і здатність до взаємодії — саме ці характеристики визначають фізичні властивості речовини." }
            ]
          },
        ],
        className: "subtopic"
      },
      {
        title: "Атом",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Атом", bold: true },
              { value: " — електронейтральна частинка речовини, що складається з ядра (протони й нейтрони) та електронної оболонки. Електрони рухаються навколо ядра, визначаючи розміри атома." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "У хімічних реакціях", bold: true },
              { value: " атоми не зникають, а лише перегруповуються. Змінюється електронна оболонка, але ядро залишається незмінним." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Характеристики атома:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              "Протонне число — кількість протонів",
              "Нейтронне число — кількість нейтронів",
              "Нуклонне число — сума протонів і нейтронів",
              "Ізотопи — атоми одного елемента з різною масою",
              "Ізобари — атоми різних елементів з однаковою масою"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Хімічний елемент", bold: true },
              { value: " — тип атомів з однаковим зарядом ядра. Атом — носій властивостей елемента. Елементи не зникають у реакціях, а переходять у нові речовини." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Класифікація елементів:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              { value: "За електронною оболонкою:" },
              { value: "s-, p-, d-, f-елементи" },
              { value: "За властивостями: метали (віддають електрони), неметали (приймають)" },
              { value: "Групи: лужні, лужноземельні, інертні гази, лантаноїди" }
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Речовини:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              "Прості — з атомів одного елемента",
              "Складні — з атомів різних елементів"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Відомо 118 хімічних елементів, більшість із них — природні, решта — штучні." },
            ],
          },
        ],
        className: "subtopic"
      },
      {
        title: "Періодичний закон",
        contentBlocks: [
           { 
            type: "text",
            text: [
              { value: "Періодичний закон", bold: true },
              { value: " — властивості хімічних елементів і їхніх сполук змінюються періодично залежно від заряду ядра атома." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Періодична система", bold: true },
              { value: " — таблиця всіх елементів, упорядкованих за зростанням зарядів ядер (тобто порядкових номерів)." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Ключові поняття:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Порядковий номер", bold: true }, 
                  { value: " = кількість протонів = заряд ядра = кількість електронів в атомі." }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/1.png",
            alt: "Порядковий номер = кількість протонів = заряд ядра = кількість електронів в атомі.",
            className: "image"
          },
          { 
            type: "list",
            items: [
              { 
                value: [
                  { value: "Порядковий", bold: true }, 
                  { value: " номер = кількість протонів" }
                ],
              }
            ],
            className: "list"
          },
          { 
            type: "list",
            items: [
              { 
                value: [
                  { value: "Період", bold: true }, 
                  { value: " — горизонтальний ряд елементів; номер періоду відповідає числу енергетичних рівнів." }
                ],
              }
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/2.png",
            alt: "Період",
            className: "image"
          },
          { 
            type: "list",
            items: [
              { 
                value: [
                  { value: "Група", bold: true }, 
                  { value: " — вертикальний стовпчик елементів; номер групи = кількість валентних електронів." }
                ],
              }
            ],
            className: "list"
          },
          {
            type: "list",
            items: [
              {
                value: "Підгрупи", bold: true,
                subItems: [
                  "Головна — елементи малих і великих періодів.",
                  "Побічна — лише елементи великих періодів."
                ]
              }
            ],
            className: "list"
          },
        ]
      },
    ]
  },
  {
    id: 11,
    type: "inorganic",
    title: "2. Хімічний зв'язок і будова речовини",
    subtopics: [
      {
        title: "Хімічний зв'язок",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Хімічний зв’язок", bold: true },
              { value: " — взаємодія атомів, що об’єднує їх у молекули, йони, радикали, кристали." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Ковалентний зв’язок ", bold: true },
              { value: " — утворюється завдяки спільним електронним парам між атомами." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Обмінний механізм: ", bold: true },
              { value: "неспарені електрони об’єднуються (наприклад, H∙ + ∙H → H:H або H–H). " },
              { value: "s-орбіталі ", bold: true }, { value: "перекриваються, виникає електронна густина, яка притягує ядра." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Типи ковалентного зв’язку: ", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Неполярний", bold: true }, 
                  { value: " — між атомами з однаковою електронегативністю, електронна пара не зміщена (наприклад, H₂, Cl₂)." }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/3.png",
            alt: "Період",
            className: "image"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Полярний", bold: true }, 
                  { value: " — між атомами з різною електронегативністю, електронна пара зміщена до більш електронегативного атома (наприклад, HCl)." }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/4.png",
            alt: "Період",
            className: "image"
          },
        ]
      },
      {
        title: "Донорно-акцепторний механізм",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Зв’язок в іоні амонію NH₄⁺ ", bold: true }, 
            ],
            className: "underTitle"
          },
          { 
            type: "list",
            items: [
              "Іон NH₄⁺ має чотири ковалентні зв’язки з атомами Гідрогену:",
              "3 — за обмінним механізмом (неспарені електрони об’єднуються)",
              "1 — за донорно-акцепторним (донор надає електронну пару, акцептор — вільну орбіталь)"
            ],
            className: "list noCircle"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/5.png",
            alt: "Період",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "Кратність ковалентного зв’язку", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              "Визначається числом спільних електронних пар між атомами (одинарний, подвійний, потрійний зв’язок)"
            ],
            className: "list noCircle"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/6.png",
            alt: "Період",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "Характеристики зв’язку", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Довжина зв’язку", bold: true }, 
                  { value: " — відстань між ядрами; чим коротша, тим міцніший зв’язок" }
                ],
              },
            ],
            className: "list noCircle"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Енергія зв’язку", bold: true }, 
                  { value: " — кількість енергії, потрібної для його розриву; показник міцності" }
                ],
              },
            ],
            className: "list noCircle"
          },
        ]
      },
      {
        title: "Іонний зв'язок",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Іонний зв’язок", bold: true }, 
              { value: " — це хімічний зв’язок, що виникає між іонами з протилежними зарядами через електростатичне притягання." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [ 
              { value: "Утворюється при повному перенесенні електрона від атома з меншою електронегативністю (метал) до атома з більшою (неметал). Типовий приклад — зв’язок між елементами І–ІІ груп (метали) та VI–VII груп (неметали)." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Приклад: KCl (калій хлорид)", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              "K (1 валентний електрон) → K⁺",
              "Cl (7 валентних електронів) + 1e⁻ → Cl⁻",
              "K⁺ + Cl⁻ → KCl"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Особливості:", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              "Йонний зв’язок — крайній випадок полярного ковалентного зв’язку",
              "Сполуки з таким зв’язком: MgS, AlCl₃, NaBr",
              "Також зустрічається в солях оксигеновмісних кислот і лугах"
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Металічний зв’язок",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Металічний зв’язок", bold: true }, 
              { value: " — це взаємодія між атомами металів, де валентні електрони вільно переміщаються між перекритими орбіталями сусідніх атомів." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Атоми металів мають 1–3 електрони на зовнішньому рівні та багато вільних орбіталей. Електрони рухаються між атомами, утворюючи «електронний газ». Відбувається постійне перетворення: атом ↔ йон" }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Властивості металів завдяки металічному зв’язку:", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              "Твердість",
              "Електро- і теплопровідність",
              "Ковкість і пластичність",
              "Металічний блиск"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Структура:", bold: true }, 
            ],
          },
          { 
            type: "list",
            items: [
              "Металічні кристалічні гратки, де в вузлах — атоми або йони, між якими вільно рухаються електрони."
            ],
            className: "list noCircle"
          },
        ]
      },
      {
        title: "Водневий зв’язок",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Водневий зв’язок", bold: true }, 
              { value: " — слабкий хімічний зв’язок, що має електростатичний і донорно-акцепторний характер." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Виникає між атомом Гідрогену, зв’язаним з електронегативним елементом (O, N, F), і неподіленою електронною парою іншого електронегативного атома. У молекулі води зв’язки H–O поляризовані, що сприяє утворенню водневих зв’язків між молекулами." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Значення:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              { 
                value: [
                  { value: "Стабілізує структуру речовин" }
                ],
              }
            ],
            className: "list noCircle"
          },
          {
            type: "list",
            items: [
              {
                value: "Пояснює агрегатний стан низькомолекулярних речовин:",
                subItems: [
                  "Вода, спирт — рідини",
                  "Амоніак, HF — гази, що легко зріджуються"
                ]
              }
            ],
            className: "list noCircle"
          },
        ]
      },
      {
        title: "Молекулярна і немолекулярна будова речовин",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Молекулярні речовини", bold: true }, 
              { value: " — складаються з окремих молекул. Зв’язки між молекулами слабкі, легко руйнуються при нагріванні." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Приклади:", }
            ],
          },
          { 
            type: "list",
            items: [
              "Гази (H₂, O₂, N₂)",
              "Рідина (Br₂)",
              "Тверді речовини (I₂, P₄, S₈)"
            ],
            className: "list noCircle"
          },
          { 
            type: "text",
            text: [
              { value: "Немолекулярні речовини", bold: true }, 
              { value: " — мають іонну або атомну будову. Складаються з йонів або атомів, зв’язаних міцними зв’язками." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Приклади:", }
            ],
          },
          { 
            type: "list",
            items: [
              "Солі (NaCl, K₂SO₄)",
              "Гідриди (LiH)",
              "Оксиди (CaO)",
              "Основи (NaOH)"
            ],
            className: "list noCircle"
          },
          { 
            type: "text",
            text: [
              { value: "Температурні властивості:", bold: true }
            ],
          },
          { 
            type: "list",
            items: [
              "Молекулярні речовини — низькі температури плавлення/кипіння",
              "Немолекулярні — високі температури плавлення/кипіння"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              "Типи твердих речовин:",
            ],
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/7.png",
            alt: "Типи твердих речовин",
            className: "image"
          },
        ]
      }
    ]
  },
  {
    id: 12,
    type: "inorganic",
    title: "3. Хімічні реакції",
    subtopics: [
      {
        title: "Хімічні реакції",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Хімічна реакція — процес, у якому з одних речовин утворюються інші з новим складом, будовою та властивостями." }
            ],
            className: "underTitle"
          },
          { 
            type: "text",
            text: [
              { value: "Типи хімічних реакцій:", bold: true }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "1. Без зміни складу:", bold: true }
            ],
            className: "withNumbers",
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Алотропія:", bold: true }, 
                  { value: " C(графіт) ↔ C(алмаз), S(ромбічна) ↔ S(моноклінна)" }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Ізомерія:", bold: true }, 
                  { value: " (в органічній хімії)" }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/8.png",
            alt: "Хімічні реакції",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "2. Зі зміною складу:", bold: true }
            ],
            className: "withNumbers",
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/9.png",
            alt: "Типи хімічних реакцій",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "Реакції обміну відбуваються лише при утворенні осаду, газу або слабодисоційованої речовини (правило Бертолле).", italic: true }
            ],
          },
        ]
      },
      {
        title: "Теплові ефекти хімічних реакцій",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Екзотермічні реакції", bold: true },
              { value: " — відбуваються з виділенням теплоти" }
            ],
          },
          { 
            type: "text",
            text: [
              "Приклад: 2Mg + O₂ → 2MgO + Q"
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Ендотермічні реакції", bold: true },
              { value: " — проходять з поглинанням теплоти" }
            ],
          },
          { 
            type: "text",
            text: [
              "Приклад: N₂ + O₂ ↔ 2NO – Q"
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Тепловий ефект (Q)", bold: true },
              { value: " — кількість теплоти, що виділяється або поглинається в реакції." }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Внутрішня енергія речовини", bold: true },
              { value: " — сума енергій:" }
            ],
          },                  
          { 
            type: "list",
            items: [
              "руху частинок",
              "електронних взаємодій",
              "внутрішньоядерної енергії"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Зміна енергії в реакціях:", bold: true },
            ],
          },
          { 
            type: "list",
            items: [
              "Якщо Е реагентів > Е продуктів → виділення енергії (екзотермія)",
              "Якщо Е реагентів < Е продуктів → поглинання енергії (ендотермія)"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Термохімічне рівняння", bold: true },
              { value: " — показує тепловий ефект:", }
            ],
          },
          { 
            type: "list",
            items: [
              "2H₂ + O₂ → 2H₂O + 484 кДж",
              "2NH₃ ↔ N₂ + 3H₂ – 46,36 кДж"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              "Типи хімічних реакцій за середовищем:"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Гомогенні реакції", bold: true }, 
                  { value: " — проходять в однорідному середовищі (без поверхні розділу), наприклад, у газових сумішах або розчинах." }
                ],
              },
              {
                value: [
                  { value: "Гетерогенні реакції ", bold: true }, 
                  { value: " — відбуваються між речовинами з різною фазою (тверде–рідина, газ–рідина тощо), є поверхня розділу." }
                ],
              },
            ],
            className: "list"
          },
        ]
      },
      {
        title: "Швидкість хімічної реакції",
        contentBlocks: [
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Швидкість реакції (v) ", bold: true }, 
                  { value: " — це зміна концентрації реагенту або продукту за одиницю часу:" }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/10.jpg",
            alt: "Швидкість реакції",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "Чинники, що впливають на швидкість", bold: true }
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Температура ", bold: true }, 
                  { value: " — при підвищенні швидкість зростає" }
                ],
              },
              {
                value: [
                  { value: "Правило Вант-Гоффа  ", bold: true }, 
                  { value: " — при збільшенні температури на 10 °C швидкість реакції зростає в 2–4 рази:" }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "image",
            src: "../images/chemistry/inorganic/11.png",
            alt: "Швидкість реакції",
            className: "image"
          },
        ]
      },
      {
        title: "Оборотні та необоротні хімічні реакції",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Необоротні реакції", bold: true },
              { value: " — вихідні речовини повністю перетворюються на продукти.", }
            ],
          },
          { 
            type: "text",
            text: [
              "Приклад: горіння, обмін у розчинах електролітів (FeS + 2HCl → FeCl₂ + H₂S↑)"
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Оборотні реакції", bold: true },
              { value: " — протікають одночасно в прямому і зворотному напрямках. Приклад:", }
            ],
          },
          { 
            type: "list",
            items: [
              "2SO₂ + O₂ ↔ 2SO₃ + Q",
              "3H₂ + N₂ ↔ 2NH₃ + Q",
              "C₂H₆ ↔ C₂H₄ + H₂",
              "RCOOH + HOR₁ ↔ RCOOR₁ + H₂O"
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Хімічна рівновага ", bold: true },
              { value: " — стан, коли швидкість прямої реакції дорівнює швидкості зворотної. Реакція триває, але концентрації речовин залишаються сталими (динамічна рівновага).", }
            ],
          },
        ]
      }
    ]
  },
  {
    id: 13,
    type: "inorganic",
    title: "4. Розчини. Концентрації розчинів",
    subtopics: [
      {
        title: "Розчини як дисперсні системи",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Розчин", bold: true },
              { value: " — це дисперсна система, що складається з:", }
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Дисперсійного середовища", bold: true }, 
                  { value: " (розчинника)" }
                ],
              },
              {
                value: [
                  { value: "Дисперсної фази", bold: true }, 
                  { value: " (розчиненої речовини)" }
                ],
              },
            ],
            className: "list noCircle"
          },
          { 
            type: "text",
            text: [
              "Залежно від агрегатного стану та ступеня дисперсності, розчини бувають:"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Тверді, рідкі, газоподібні", bold: true }, 
                ],
              },
              {
                value: [
                  { value: "Справжні, колоїдні, суспензії, зависі", bold: true }, 
                ],
              },
            ],
            className: "list noCircle"
          },
          { 
            type: "text",
            text: [
              "Термін «дисперсна система» походить від лат. disperse — розсіювати."
            ],
          },
          { 
            type: "text",
            text: [
              "Класифікація розчинів за розмірами частинок"
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Розчини", bold: true },
              { value: " — дисперсні системи, що складаються з:", }
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Розчинника", bold: true }, 
                  { value: " (дисперсійне середовище)" }
                ],
              },
              {
                value: [
                  { value: "Розчиненої речовини", bold: true }, 
                  { value: " (дисперсна фаза)" }
                ],
              },
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              "За розміром частинок розчини поділяють на:"
            ],
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/12.png",
            alt: "Розчини за розміром частинок",
            className: "image"
          },
          { 
            type: "text",
            text: [
              { value: "Ефект Тіндаля", italic: true },
              { value: " — розсіювання світла в колоїдних розчинах, як у промені фар у тумані.", }
            ],
          },
          { 
            type: "text",
            text: [
              "Справжні розчини"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Суміші, де речовина подрібнена до молекул або іонів" }
                ],
              },
              {
                value: [
                  { value: "Найчастіше — рідкі, з водою як розчинником" }
                ],
              },
              {
                value: [
                  { value: "Однорідні, змінного складу, але з міжчастинковою взаємодією" }
                ],
              },
              {
                value: [
                  { value: "Відрізняються від механічних сумішей (газові суміші — виняток)" }
                ]
              }
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              "Якщо змішано дві рідини — розчинником вважається та, якої більше. Якщо є вода — вона вважається розчинником незалежно від кількості."
            ],
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/13.png",
            alt: "Типи розчинів",
            className: "image"
          },
          { 
            type: "text",
            text: [
              "Класифікація дисперсних систем за агрегатним станом дисперсної фази або дисперсійного середовища"
            ],
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/14.png",
            alt: "Класифікація дисперсних систем",
            className: "image"
          },
        ]  
      },
      {
        title: "РОЗЧИННІСТЬ. КРИСТАЛОГІДРАТИ",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Розчинність", bold: true },
              { value: " — здатність речовини розчинятися в розчиннику (найчастіше у воді).", }
            ],
          },
          { 
            type: "text",
            text: [
              "Речовини поділяють на:"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Розчинні", bold: true }, 
                  { value: " (цукор, сіль)" }
                ],
              },
              {
                value: [
                  { value: "Малорозчинні", bold: true }, 
                  { value: " (гіпс, бензен)" }
                ],
              },
              {
                value: [
                  { value: "Нерозчинні", bold: true }, 
                  { value: " (сірка, скло) — умовно, бо повна нерозчинність не існує" }
                ],
              }
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Необмежено розчинні речовини", bold: true },
              { value: " — утворюють розчини будь-якої концентрації (спирт, ацетон).", }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Насичений розчин", bold: true },
              { value: " — містить максимум розчиненої речовини при даній температурі, перебуває в рівновазі з надлишком.", }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Пересичений розчин", bold: true },
              { value: " — нестійкий, утворюється при охолодженні насиченого розчину. Осад випадає при струшуванні або додаванні кристала.", }
            ],
          },
          { 
            type: "text",
            text: [
              "Кількісна характеристика розчинності:"
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Коефіцієнт розчинності", bold: true },
              { value: " — маса речовини, що розчиняється в 100 г води при певній температурі", }
            ],
          },
          { 
            type: "text",
            text: [
              "Наприклад: CuSO₄ при +20 °C → 20,7 г/100 г води"
            ],
          },
          { 
            type: "text",
            text: [
              "Вплив природи на речовини"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Полярні речовини", bold: true }, 
                  { value: " добре розчиняються в полярних розчинниках (вода, спирт)" }
                ],
              },
              {
                value: [
                  { value: "Неполярні речовини", bold: true }, 
                  { value: " — у неполярних розчинниках (бензен, гексан)" }
                ],
              }
            ],
            className: "list"
          },
          { 
            type: "text",
            text: [
              { value: "Принцип:", },
              { value: " подібне розчиняється в подібному.", italic: true }
            ],
          },
          { 
            type: "text",
            text: [
              { value: "Кристалогідрати", bold: true },
              { value: " — речовини, що кристалізуються з водою.", }
            ],
          },
          { 
            type: "text",
            text: [
              "Наприклад:"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "CuSO₄·5H₂O — мідний купорос" }
                ],
              },
              {
                value: [
                  { value: "Na₂SO₄·10H₂O — глауберова сіль" }
                ],
              },
              {
                value: [
                  { value: "CaSO₄·2H₂O — гіпс" }
                ],
              }
            ],
            className: "list noCircle"
          },
          { 
            type: "text",
            text: [
              "Вплив температури і тиску"
            ],
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/15.png",
            alt: "Вплив температури і тиску",
            className: "image"
          },
          { 
            type: "text",
            text: [
              "Взаємний вплив речовин"
            ],
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Закон Сєченова:" },
                  { value: " електроліти знижують розчинність газів" }
                ],
              },
              {
                value: [
                  { value: "Висолювання:" },
                  { value: " додавання солі зменшує розчинність іншої речовини" }
                ]
              }
            ],
            className: "list"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Причина" },
                  { value: " — гідратація іонів, зменшення доступної води для сольватації" }
                ]
              }
            ],
            className: "list noCircle"
          },
        ]
      },
      {
        title: "РОЗЧИННІСТЬ. КРИСТАЛОГІДРАТИ",
        contentBlocks: [
          { 
            type: "text",
            text: [
              { value: "Концентрація", bold: true },
              { value: " — кількісна характеристика складу розчину, що показує співвідношення розчиненої речовини до розчинника або розчину.", }
            ],
          },
          { 
            type: "text",
            text: [
              "Найпоширеніші способи вираження:"
            ],
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/16.png",
            alt: "Способи вираження концентрації розчинів",
            className: "image"
          },   
          { 
            type: "text",
            text: [
              "Інші способи: мольна частка, моляльність, нормальність, титр, об’ємна частка — використовуються рідше."
            ],
          }, 
          {
            type: "image",
            src: "../images/chemistry/inorganic/17.jpg",
            alt: "Пояснення до формул",
            className: "image"
          },
          {
            type: "image",
            src: "../images/chemistry/inorganic/18.png",
            alt: "Формула 1",
            className: "image"
          },   
          {
            type: "image",
            src: "../images/chemistry/inorganic/19.png",
            alt: "Формула 2",
            className: "image"
          },      
          { 
            type: "text",
            text: [
              "Концентрований, або розведений"
            ],
          }, 
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Розведений розчин", bold: true },
                  { value: " — <10% розчиненої речовини" }
                ],
              },
              {
                value: [
                  { value: "Концентрований розчин", bold: true },
                  { value: " — >50% розчиненої речовини" }
                ]
              }
            ],
            className: "list"
          },
          { 
            type: "list",
            items: [
              {
                value: [
                  { value: "Ці терміни — умовні, без чіткої кількісної межі." }
                ]
              }
            ],
            className: "list noCircle"
          },
        ]
      }
    ]
  }
];

export default data;