// 翻译数据 - 从 ima 知识库提取
// 格式：英文原文（生词/关键词后加括号中文注释）+ 整句中文意思
const TRANSLATIONS_DATA = {
  "U1": [
    {
      num: "1",
      english: "Urban-rural integration（城乡一体化） is a new stage（新阶段） in China's development（发展） toward modernization（现代化） and urbanization（城市化）.",
      chinese: "城乡一体化是我国现代化和城市化发展的一个新阶段。",
      mnemonic: "新阶段"
    },
    {
      num: "2",
      english: "It aims（其目的是） to eliminate（破除/消除） the urban-rural dual economic structure（城乡二元经济结构） through integrated planning（统筹规划） for urban and rural development（城乡发展）, and through institutional reform（体制改革） and policy adjustment（政策调整）, so that（以便/从而） the urban and rural areas（城乡） will achieve（实现） policy equality（政策平等） and complement each other（互补） in the mode of industrial development（产业发展模式）, enabling（让/使） rural residents（农村居民） to enjoy（享受） the same civilization（同样的文明） and welfare（福利） as urban residents（城镇居民）.",
      chinese: "其目的是通过对城乡发展进行统筹规划，并通过体制改革和政策调整，破除城乡二元经济结构，从而实现城乡在政策上平等、在产业发展模式上互补，让农村居民享受到与城镇居民同样的文明和福利。",
      mnemonic: "统筹破除"
    },
    {
      num: "3",
      english: "Only by（只有通过） greatly promoting（大力推进） urban-rural integration（城乡一体化） can（才能） the whole urban and rural economy（整个城乡经济） of our country develop（发展） comprehensively（全面地） and sustainably（可持续地）.",
      chinese: "只有大力推进城乡一体化，我国整个城乡经济才能实现全面、可持续发展。",
      mnemonic: "才能发展"
    }
  ],
  "U3": [
    {
      num: "1",
      english: "With the rapid development（飞速发展） of our society and economy（社会经济）, China is playing（发挥） an increasingly important role（越来越大的作用） in the international arena（国际舞台）.",
      chinese: "随着社会和经济的飞速发展，中国在国际舞台上发挥着越来越大的作用。",
      mnemonic: "大作用"
    },
    {
      num: "2",
      english: "In this context（在此背景下）, we should stay firmly rooted in（坚守） Chinese culture（中华文化）, accelerate（加快） the establishment（构建） of China's discourse（话语） and narrative systems（叙事体系）. We should better present China to the world（向世界讲好中国故事）, make China's voice better heard（传播好中国声音）, and present China as a country worthy of friendship（可信）, trust（可爱）, and respect（可敬）.",
      chinese: "在此背景下，我们必须坚守中华文化立场，加快构建中国话语和中国叙事体系，讲好中国故事、传播好中国声音，展现可信、可爱、可敬的中国形象。",
      mnemonic: "讲好故事"
    },
    {
      num: "3",
      english: "We should strengthen（加强） our capabilities（能力） for international communications（国际传播）, strive（努力） to make our communications more effective（提升效能）, and establish China's voice（话语权） in international affairs（国际事务） so that it is commensurate with（与……相匹配） our composite national strength（综合国力） and international status（国际地位）. We should deepen（深化） exchanges and mutual learning（交流互鉴） with other civilizations（其他文明） and better present Chinese culture to the world（推动中华文化更好走向世界）.",
      chinese: "加强国际传播能力建设，全面提升国际传播效能，形成同我国综合国力和国际地位相匹配的国际话语权。深化文明交流互鉴，推动中华文化更好走向世界。",
      mnemonic: "加强传播"
    }
  ],
  "U4": [
    {
      num: "1",
      english: "Since the reform and opening up（改革开放以来）, the Chinese government（中国政府） has taken a series of measures（采取了一系列措施） to improve（改善） the ecological environment（生态环境） and protect（保护） biodiversity（生物多样性）.",
      chinese: "改革开放以来，中国政府采取了一系列改善生态环境、保护生物多样性的措施。",
      mnemonic: "过去措施"
    },
    {
      num: "2",
      english: "Many key ecological projects（许多重点生态工程） have been advanced or implemented（得到推进或实施）, and a large number of（一大批） nature reserves（自然保护区）, ecological demonstration zones（生态示范区） and forest parks（森林公园） have been successively established（先后被设立）.",
      chinese: "许多重点生态工程得到推进或实施，一大批自然保护区、生态示范区和森林公园先后被设立。",
      mnemonic: "现有成果"
    },
    {
      num: "3",
      english: "In the future（今后）, we should further enhance（进一步提升） the diversity（多样性）, stability（稳定性）, and sustainability（持续性） of our ecosystems（生态系统）. We should uphold and act on（牢固树立和践行） the principle（理念） that lucid waters and lush mountains are invaluable assets（绿水青山就是金山银山）, and remember to maintain（保持） the harmony between humanity and nature（人与自然和谐共生） when planning our development（谋划发展）.",
      chinese: "今后，我们还需要进一步提升生态系统的多样性、稳定性、持续性，牢固树立和践行绿水青山就是金山银山的理念，站在人与自然和谐共生的高度谋划发展。",
      mnemonic: "未来理念"
    }
  ],
  "U6": [
    {
      num: "1",
      english: "Boao Forum for Asia（博鳌亚洲论坛） is an international organization（国际组织） headquartered（总部设在） in Boao Town（博鳌镇）, Hainan Province（海南省）, China（中国）.",
      chinese: "博鳌亚洲论坛是一个总部设在中国海南省博鳌镇的国际组织。",
      mnemonic: "是什么"
    },
    {
      num: "2",
      english: "Jointly initiated by（共同发起于） 29 member states（29个成员国）, it was officially founded（正式成立） in 2001. BFA（博鳌亚洲论坛） holds conferences（举行会议） in Boao on an annual basis（每年定期在博鳌）, and has now become（已成为） a high-level dialogue platform（高层次对话平台） for political（政界）, business（工商界）, and academic leaders（学术界领袖） from Asia and other continents（亚洲及其他洲） to discuss（讨论） key Asian and global issues（亚洲及全球关键问题）.",
      chinese: "它由29个成员国共同发起，于2001年正式成立。论坛每年定期在博鳌举行会议，目前已成为亚洲以及其他洲政界、工商界和学术界领袖商讨亚洲及全球关键问题的高层次对话平台。",
      mnemonic: "怎么来"
    },
    {
      num: "3",
      english: "In the new historical period（在新的历史时期）, BFA（博鳌亚洲论坛） will continue to contribute actively to（继续为……做出积极贡献） the peace（和平）, prosperity（繁荣）, and sustainable development（可持续发展） of Asia and the world（亚洲及世界）.",
      chinese: "在新的历史时期，博鳌亚洲论坛将继续为亚洲及世界和平、繁荣与可持续发展做出积极贡献。",
      mnemonic: "要干嘛"
    }
  ]
};

// 顺口溜速记表
const MNEMONICS = {
  "U1": { rhyme: "新家规划真公平，才能过上幸福日", keywords: ["新阶段", "统筹破除", "才能发展"] },
  "U3": { rhyme: "大舞台，讲好故事传文化", keywords: ["大作用", "讲好故事", "加强传播"] },
  "U4": { rhyme: "过去努力有成绩，未来绿水青山共", keywords: ["过去措施", "现有成果", "未来理念"] },
  "U6": { rhyme: "博鳌成立定海南，年年开会做贡献", keywords: ["是什么", "怎么来", "要干嘛"] }
};
