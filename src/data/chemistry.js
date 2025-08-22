const data = [
  {
    id: 1,
    type: "organic",
    title: "1. Повторення початкових понять про органічні речовини",
    subtopics: [
      {
        title: "Основи органічної хімії",
        contentBlocks: [
          { type: "text", text: "Повторення основних відомостей про органічні сполуки" },
          { type: "text", text: "Органічна хімія вивчає сполуки Карбону. Атоми у молекулах речовин з'єднані в певній послідовності згідно їх валентності." },
          { 
            type: "text", 
            text: "ВАЖЛИВО! Карбон в органічних сполуках завжди чотиривалентний, а його атоми здатні з'єднуватися один з одним утворюючи ланцюги (лінійні, розгалужені та циклічні)",
            style: { color: "red" },
            className: "warning"
          },
          { type: "text", text: "Порядок з'єднання атомів у молекулі згідно їх валентності називають органічною будовою." },
          { type: "image", src: "/images/chemistry/organic/1.png", alt: "Органічна будова" },
          { type: "text", text: "Класифікація та номенклатура органічних сполук:" },
          { type: "image", src: process.env.PUBLIC_URL + "/images/chemistry/organic/2.png", alt: "Номенклатура органічних сполук" },
          { type: "text", text: "З історії органічної хімії" },
          { type: "text", text: "Теорія будови органічних сполук за О.М. Бутлеровим: 1) природа органічної речовини..." }
        ]
      }
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
              "За електронною оболонкою: s-, p-, d-, f-елементи",
              "За властивостями: метали (віддають електрони), неметали (приймають)",
              "Групи: лужні, лужноземельні, інертні гази, лантаноїди"
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
            alt: "Хімічні реакції",
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