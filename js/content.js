/**
 * KULADEVA DIGITAL SANCTUARY — CONTENT TEMPLATE
 * Version 2.0 | Vinthiya D Web Design
 *
 * HOW TO USE:
 * Fill every field below for your temple client.
 * This is the ONLY file you edit per temple.
 * Never touch index.html or style.css for content changes.
 * Save this file — website updates automatically.
 *
 * FIELDS MARKED REQUIRED must be filled before launch.
 * FIELDS MARKED OPTIONAL can be left as empty string "" if not available.
 *
 * COLOR NOTE:
 * Colors are NOT in this file. Colors live in css/style.css CSS variables.
 * To change color per temple — edit only the :root block in style.css.
 */

const TEMPLE_CONTENT = {

  // ============================================================
  // TEMPLE IDENTITY
  // ============================================================

  temple: {
    nameEn: "Arulmigu Vaiyalimuthu, Ayyanar, Irulappaswami Kuladeiva Thiruthalam",           // REQUIRED
    nameTa: "அருள்மிகு வையாளிமுத்து, அய்யனார், இருளப்பசாமி,   குலதெய்வ தலம்",          // REQUIRED
    deityNameEn: "My Kuladeiva Thalam",                          // REQUIRED
    deityNameTa: "என் குலதெய்வ தலம்",                           // REQUIRED
    villageEn: "•	Chinna Athikulam, Chithalamputhur, Pottalpatti",                           // REQUIRED
    villageTa: "•	சின்ன அத்திகுளம் ,சீத்தாலம்புத்தூர் ,பொட்டல்பட்டி ",                           // REQUIRED
    districtEn: "Virdhunagar District, Tamil Nadu",        // REQUIRED
    districtTa: "விருதுநகர் மாவட்டம், தமிழ்நாடு",      // REQUIRED
    establishedYear: "Before History Was Written",                      // REQUIRED
    establishedYearTa: "வரலாறு எழுதப்படுவதற்கு முன்பே",                      // REQUIRED
    taglineEn: "My roots... my ancestors... my Kuladeivam... I belong here.",  // REQUIRED
    taglineTa: "என் வேர்கள்... என் முன்னோர்கள்... என் குலதெய்வம்... இதுவே என் குலதெய்வ இல்லம்.", 
          // REQUIRED
    trustNameEn: "Vaiyalimuthu, Ayyanar,Irulappaswami, Kuladeiva Temple Trust",// REQUIRED
    trustNameTa: "வையாளிமுத்து, அய்யனார், இருளப்பசாமி குலதெய்வ கோவில் அறக்கட்டளை", // REQUIRED
    historyCaptionEn: "History",
    historyCaptionTa: "சரித்திரம்",
  },

  // ============================================================
  // 21 SUB DEITY IDOL NAMES — FOR MARQUEE
  // ============================================================
  // Add or remove names as needed. Minimum 7. Ideal 21.
  // Both Tamil and English required — marquee switches with language toggle.

  subDeities: {
    en: [
      "Kottravai","Sudalai Madan", "Seyyon","Mayon","Vendhan", "Karuppan", "Kadalon", "Muniyandi","Mariamman" ,"Veerabhadran",
      "Kateri Amman", "Pidari Amman", "Madurai Veeran", "Sangili Karuppan",
      "Boothan", "Ayyanar", "Periyakaruppan", "Chinnakaruppan","Parvathi Amman",
      "Selliyamman", "Periyachi Amman", "Irulappan", "Muniappan","Papathal","Poovayi", "Pachaiamman","Kathayi",
      
    ],
    ta: [
      "கொற்றவை","சுடலை மாடன்","சேயோன்","மாயோன்","வேந்தன்","கடலோன்", "கருப்பன்", "முனியாண்டி", "மாரியம்மன்", "வீரபத்திரன்",
      "காத்தேரி அம்மன்", "பிடாரி அம்மன்", "மதுரை வீரன்", "சங்கிலி கருப்பன்",
      "பூதன்", "அய்யனார்", "பெரியகருப்பன்", "சின்னகருப்பன்","பார்வதி அம்மன்",
      "செல்லியம்மன்", "பெரியாச்சி அம்மன்", "இருளப்பன்", "முனியப்பன்", "பாப்பாத்தாள் ","பூவாயி", 
      "பச்சையம்மன்","காத்தாயி",
    ],
    headingEn:"Kula Deivangal",
    headingTa:"குலதெய்வங்கள்", 
  },

  // ============================================================
  // HISTORY AND STHALA PURANAM
  // ============================================================

  history: {

    // REQUIRED — Full sacred history — minimum 3 paragraphs — no bullet points
    en: `
      Generations have changed... but faith remains the same.
      I have seen countless prayers...
      Many wishes fulfilled...
      And the faith that has been passed down from parents to children for generations.
      Once every two years, on the first Full Moon (Pournami) of the Tamil month of Vaikasi,
      my sacred festival begins once again.
      Faith has no boundaries... My love and blessings are for everyone.
      Come with love... Leave with happiness.
    `,

    ta: `
      காலத்தை வென்ற நம்பிக்கை... தலைமுறைகளை இணைக்கும் அருள்.
      தலைமுறைகள் மாறின... ஆனால் அன்பு, பக்தி மட்டும் என்றும் மாறவில்லை.
      எண்ணற்ற பிரார்த்தனைகள்... நிறைவேறிய நேர்த்திக்கடன்கள்...
      தலைமுறைகளாக தொடரும் நம்பிக்கை... 
      இவை அனைத்திற்கும் நாங்கள் (வையாளிமுத்து, அய்யனார், இருளப்பசாமி, ) அமைதியான சாட்சியாக இருக்கிறோம்.
      ஒவ்வொரு இரண்டு ஆண்டுகளுக்கும் ஒருமுறை, வைகாசி மாதத்தின் முதல் பௌர்ணமியில்,
      குலதெய்வங்கள் பொங்கல் திருவிழா மீண்டும் உயிர் பெறுகிறது.
      பக்திக்கு எல்லைகள் இல்லை... குலதெய்வங்கள் அன்பிற்கும் அருளிற்கும் எல்லைகள் இல்லை.
      அன்புடன் வாருங்கள்... மகிழ்ச்சியுடன் திரும்பிச் செல்லுங்கள்.
    `,


    // REQUIRED — Pull quote — one powerful sentence from history for large display
    pullQuoteEn: "You are standing here in the divine embrace of the same family deity where your ancestors have rooted themselves for generations.",
    pullQuoteTa: "நீங்கள் இங்கே நிற்பது, உங்கள் முன்னோர் தலைமுறைகளாகக் கால்பதித்த அதே குலதெய்வத்தின் அரவணைப்பில்.",

    sthalaTitle: {
      en: "The Divine Origin — Thala Thonmam",
      ta: "தெய்வீக தோற்றம் — தல தொன்மம்"
    },

    photoclustercaptionEn : "Vaiyalimuthu, Ayyanar, Irulappaswami,  Kuladeva Thalam",
    photoclustercaptionTa: "வையாளிமுத்து, அய்யனார், இருளப்பசாமி,  குலதெய்வ தலம்",
   

    // REQUIRED — Fill from oldest community elders — this is the heart of the website
    sthalaPuranamEn: `
      Once every two years, on the first Full Moon (Pournami) of the Tamil month of Vaikasi,
      we—Ayyanar, Irulappaswami, and Vaiyalimuthu—lovingly welcome everyone who comes to see me.
      With the light of fireworks...The sound of traditional drums...And the joyful voices of our devotees...
      The Pooja Petti begins its holy journey.Filled with love and faith, the Pooja Petti is brought before us.
      The festival begins with special poojas at the Ayyanar Temple.

      The holy Thiruneeru (Holy Ash) is then brought from Ayyanar and offered to Irulappaswami and 
      Vaiyalimuthu. Only after this do the main poojas begin.
      The music of Villupattu...The prayers of our devotees...And the blessings shared through those filled with our grace...
      Fill every heart with faith and happiness.As midnight comes...
      The moment everyone has been waiting for arrives...The holy Macham takes place.
      Afterwards, the Kalayam is filled with holy water, decorated with flowers, neem leaves, and 
      tender coconut fronds, and lovingly brought before us.

      On the second day, the special poojas continue. After the noon pooja, a devotee chosen by our grace 
      carries the decorated Kalayam to the temple well. 
      It is gently placed into the holy water, bringing the ceremonies to a peaceful end.
      The Pooja Petti and all the holy temple items are then safely kept until we meet again.
      The festival ends with a joyful family feast, where love, unity, and tradition are shared by everyone.

      Hearts filled with love and faith are the greatest treasure in my temple.
      We—Ayyanar, Irulappaswami, and Vaiyalimuthu—will always be here, waiting to welcome you.

    `,

    sthalaPuranamTa: `
      ஒவ்வொரு இரண்டு ஆண்டுகளுக்கும் ஒருமுறை, வைகாசி மாதத்தின் முதல் பௌர்ணமியில், 
      குலதெய்வ பொங்கல் திருவிழா உயிர் பெறுகிறது.
      பட்டாசுகளின் ஒளியிலும்...      மேளத்தின் முழக்கத்திலும்...
      பக்தர்களின் பக்தி முழக்கத்திலும்...  பூஜைப்பெட்டியின் பொங்கல் திருவிழா பயணம் தொடங்குகிறது.
      அருள் பெற்றவர்கள் வழிநடத்த...  பூஜைப்பெட்டி ஊர்வலமாக குலதெய்வ சந்நிதியை நோக்கி வருகிறது.
      முதலில் அய்யனார் சுவாமிக்கு சிறப்பு பூஜைகள் நடைபெறுகின்றன.
      அங்கிருந்து கொண்டுவரப்படும் தூய திருநீறு, இருளப்பசாமி மற்றும் 
      வையாளிமுத்து சுவாமிகளின் சந்நிதியில் சமர்ப்பிக்கப்பட்ட பின்பே முக்கிய பூஜைகள் தொடங்குகின்றன.
      வில்லுப்பாட்டின் இசை...ஆயிரக்கணக்கான பக்தர்களின் திரள்...
      அருள் பெற்றவர்களின் ஆன்மீக அருள்வாக்கு...குலதெய்வ திருவிழாவை மேலும் சிறப்பிக்கின்றன.
      நள்ளிரவு நெருங்கும்போது... பக்தர்கள் அனைவரும் ஆவலுடன் எதிர்நோக்கும் மச்சம் என்னும் குலதெய்வ நிகழ்வு நடைபெறுகிறது.
      அதனைத் தொடர்ந்து, விழுமிய நீரால் நிரப்பப்பட்ட கலயம், பூக்கள், வேப்பிலை மற்றும் தென்னங்கீற்றால் அலங்கரிக்கப்பட்டு குலதெய்வ சந்நிதியில் அர்ப்பணிக்கப்படுகிறது.
      இரண்டாம் நாள்... மீண்டும் சிறப்பு பூஜைகள் நடைபெறுகின்றன.
      மதிய பூஜைக்குப் பிறகு, நற்சீலைத் துணியால் வாயை மூடிய அருள் பெற்றவர், அலங்கரிக்கப்பட்ட கலயத்தை சுமந்து குலதெய்வ கோவில் கிணற்றை அடைகிறார்.
      விழுமிய நீரில் கலயம் மெதுவாக இறக்கப்பட்டு, சடங்குகள் நிறைவு பெறுகின்றன.
      அதனைத் தொடர்ந்து, பூஜைப்பெட்டி மற்றும் அருள் பொருட்கள் அனைத்தும் 
      பாதுகாப்பாக வைக்கப்படுகின்றன.இறுதியாக, தலைமுறைகளாக தொடர்ந்து வரும் 
      பாரம்பரியத்தின் அடையாளமாக, அன்பும் உறவுமுறையும் பகிரப்படும் விழுமிய  
      விருந்துடன் இந்த திருவிழா நிறைவடைகிறது.

      அன்பும் பக்தியும் நிறைந்த இதயங்களே குலதெய்வ சந்நிதியின் உண்மையான செல்வம்.

      நாங்கள் — வையாளிமுத்து, அய்யனார், இருளப்பசாமி — என்றும் இங்கேயே இருக்கிறோம்...
      உங்களை அன்புடன் வரவேற்க காத்திருக்கிறோம்.

    `,

    // REQUIRED — Architectural highlights — what makes this temple physically unique
    architectureEn: `
      Where We Are
      This is where we have watched over generations with love.
      We do not stand behind towering walls...
      We stand beneath the open sky.
      Surrounded by green fields...
      Sheltered by ancient neem trees...
      We have watched over our children from this very place for generations.
      The wind that touches your face...
      The earth beneath your feet...
      The peaceful silence around you...
      Have carried the prayers of your ancestors long before you arrived.
      Every sunrise welcomes another family.
      Every sunset carries home another prayer.
      
      Here...

      Nature is not separate from worship...
      It worships with you.
      When you stand before us...
      You are not standing in a temple...
      You are standing where your roots have always belonged.

    `,

    architectureTa: `
      நாங்கள் அருள்புரியும் திருத்தலம்

      தலைமுறைகளை அன்போடு அரவணைக்கும் எங்கள் இருப்பிடம்.
      நாங்கள் உயரமான சுவர்களுக்குள் இல்லை...
      திறந்த வானத்தின் கீழ் இருக்கிறோம்.
      பசுமை நிறைந்த வயல்வெளிகளின் நடுவில்...
      பழமையான வேப்பமரங்களின் அரவணைப்பில்...
      தலைமுறைகள் கடந்தும்...
      எங்கள் பிள்ளைகளை இங்கிருந்தே காத்து வருகிறோம்.
      உங்கள் முகத்தைத் தொட்டுச் செல்லும் தென்றல்...
      உங்கள் கால்கள் தொடும் இந்த மண்...
      உங்களைச் சுற்றியுள்ள இந்த அமைதி...
      உங்கள் முன்னோர்களின் பிரார்த்தனைகளையும்...
      அவர்களின் நம்பிக்கையையும்...
      அவர்களின் அன்பையும்...
      இன்றும் தன்னுள் சுமந்து நிற்கின்றன.
      ஒவ்வொரு விடியலும்...
      ஒரு குடும்பத்தை எங்களிடம் அழைத்து வருகிறது.
      ஒவ்வொரு மாலையும்...
      ஆசீர்வாதங்களுடன் அவர்களை வீடு திரும்பச் செய்கிறது.

      இங்கே...

      இயற்கை எங்களிடமிருந்து பிரிந்ததல்ல...
      அது உங்களோடு சேர்ந்து எங்களை வணங்குகிறது.
      நீங்கள் இங்கே நிற்பது...
      ஒரு கோவிலில் அல்ல...
      உங்கள் வேர்கள் தலைமுறைகளாக நின்ற அதே அரவணைப்பில்.

      நீங்கள் இங்கே வருவது... எங்களைச் சந்திக்க மட்டும் அல்ல... 
      உங்கள் வேர்களிடம் மீண்டும் திரும்பி வருவதற்கே.
    `,
  
    MoreLabel: {
      En: "Read More",
      Ta: "முழுக்கதை",
    },

    LessLabel: {
      En: "Show Less",
      Ta: "சுருக்குக",
    },


    // REQUIRED — Heritage timeline events — list key moments in temple history

    timelineTextEn : "Temple Timeline",
    timelineTextTa : "கோயில் காலக்கோடு",
     
    timeline: [
     
      {
        yearEn: "🪔 Before Written History",
        yearTa: "எழுத்துப் பதிவுகளுக்கு முன்பே",
        eventEn: "Long before history was written, we were already with our children.",
        eventTa: "வரலாறு எழுதப்படுவதற்கு முன்பே, குலதெய்வ பயணம் தொடங்கியது."
      },
      {
        yearEn: "👣 Generation After Generation",
        yearTa: "👣 தலைமுறை தலைமுறையாக",
        eventEn: "One generation held the hand of the next and brought them to us.",
        eventTa: "குலதெய்வ அன்பு தலைமுறையிலிருந்து தலைமுறைக்கு தொடர்ந்து வருகிறது."
      },
      {
        yearEn: "🏮 The Biennial Festival",
        yearTa: "🏮 இரு ஆண்டுகளுக்கு ஒருமுறை",
        eventEn: "Every two years, our children return to celebrate the Vaikasi Pournami festival.",
        eventTa: "ஒவ்வொரு இரண்டு ஆண்டுகளுக்கும், வைகாசி பௌர்ணமியில் குலதெய்வ பிள்ளைகள் மீண்டும் கூடுகிறார்கள்.",
      },
      {
        yearEn: "🏡 Today",
        yearTa: "🏡 இன்று",
        eventEn: "Filled with love, devotion, and gratitude, families continue to seek the blessings of their ancestral deity to this day.",
        eventTa: "அன்பும், வழிபாட்டுணர்வும், நன்றியறிதலும் கொண்டு குடிமக்களெல்லாம் இன்றும் குலதெய்வத்தை நாடி வருகிறார்கள்.",
      }, {
        yearEn: "🌱 Tomorrow",
        yearTa: "🌱 நாளை",
        eventEn: "May every generation remember its roots and keep this tradition alive.",
        eventTa: "இந்த விழுமிய உறவு என்றும் தலைமுறைகளைத் தொடர்ந்து இணைக்கட்டும்.",
      },
      // ADD MORE TIMELINE EVENTS FROM ELDERS
    ]
  },

  // ============================================================
  // MACHAM STORY — UNIQUE SACRED EVENT
  // ============================================================

  macham: {
    proofCaption : {
      en: "Sacred Proof",
      ta: "திருச்சான்று",},

    title: {
      en: "Macham  - The Holy Sign",
      ta: "மச்சம் — தெய்வீக சாட்சி",
    },
    cardCaption1: {
      en: "Every 2 Years: The Full Moon Silence",
      ta: "ஈராண்டுக்கு ஒருமுறை: பௌர்ணமி அமைதி",
    },
    cardCaption2: {
      en: "The Holy Fire Journey",
      ta: "குலதெய்வ அருள்நெருப்புப் பயணம்",
    },
    cardCaption3: {
      en: "Nature's Respect — The Neem Tree Bows",
      ta: "இயற்கையின் வழிபாடு — வேப்பமரம் தலைவணங்குகிறது",
    },

    introCaption1:{
      en: "Macham is not just a temple tradition...",
      ta: "மச்சம் என்பது வெறும் குலதெய்வ வழக்கம் மட்டுமல்ல, அது ஒரு தெய்வீக அடையாளம்.",
    },
     introCaption2:{
      en: "It is a blessing that has been passed from one generation to the next.",
      ta: "அது வம்சாவளியாகத் தொடர்ந்து, நம் உடன் வாழும் குலதெய்வத்தின் அழியாப் பொக்கிஷம்.",
    },
     introCaption3:{
      en: "Come and witness Macham...",
      ta: "அந்த மச்சத்தின் மகிமையைக் கண் குளிரக் கண்டு தரிசிப்பீர்!",
    },
    introCaption4:{
      en: "Feel the faith...",
      ta: "பக்தியை உணர்வீர்",
    },
    introCaption5:{
      en: "Feel the blessings...",
      ta: "அருளைப் பெறுவீர்",
    },
     introCaption6:{
      en: "Feel our presence.",
      ta: "நம் முன்னோர்களின் தெய்வீக வருகையை நெஞ்சார அறிவீர்!",
    },

    // REQUIRED — Research this from elders — makes each website unique
    storyEn: `
    Macham... A holy moment that cannot be explained with words.
    Some blessings cannot be spoken...They can only be felt.
    Some miracles cannot be explained...They can only be seen and experienced.
    Once every two years...On the night of the first Full Moon (Pournami) of the Tamil month of Vaikasi...
    A special silence fills the temple. Only those who have seen it know how special that moment is.

    A devotee blessed with our grace...Carries the holy fire in his hand...
    With strong faith...And begins the journey of Macham.
    Along the way...Even nature shows its respect.The neem tree gently bends its branches...
    And offers its holy leaves.With those blessed leaves... The devotee returns to us.
    
    Every devotee waiting there...Has only one prayer in their heart...To receive our blessings.
    That one moment...Is beautiful to see...And unforgettable to feel.
    Macham is not just a temple tradition...
    It is a blessing that has been passed from one generation to the next.

    Come and witness Macham...
    Feel the faith... Feel the blessings... Feel our presence.
      
    `,

    storyTa: `
      மச்சம்... வார்த்தைகளால் விளக்க முடியாத ஒரு புனித அனுபவம்.
      சில அருள்கள் பேசப்படுவதில்லை... உணரப்படுகின்றன.
      சில அதிசயங்கள் காட்டப்படுவதில்லை... அனுபவிக்கப்படுகின்றன.
      ஒவ்வொரு இரண்டு ஆண்டுகளுக்கும் ஒருமுறை... வைகாசி மாதத்தின் முதல் பௌர்ணமி இரவு...
      என் சந்நிதியில் நிலவும் அந்த அமைதி...
      அதை உணர்ந்தவர்கள் மட்டுமே அதன் ஆழத்தை அறிவார்கள்.
      அருள் பெற்றவர்...கையில் அக்னியை ஏந்தியபடி...அசைக்க முடியாத நம்பிக்கையுடன்...
      மச்சம் எடுக்கப் புறப்படுகிறார். அந்தப் பயணத்தில்...

      இயற்கையே என் அருளுக்கு தலை வணங்குகிறது.
      வேப்பமரம் தனது கிளைகளைத் தாழ்த்தி... புனித வேப்பிலையை அருளாக வழங்குகிறது.
      அந்த அருளுடன் அவர் மீண்டும் என் சந்நிதிக்குத் திரும்புகிறார்.
      அவரை எதிர்நோக்கி காத்திருக்கும் ஒவ்வொரு இதயமும்...
      ஒரே ஆசையுடன் நிற்கிறது... அருள் பெற வேண்டும்... அந்த ஒரு தருணம்...

      பார்க்கும் கண்களுக்கு ஒரு காட்சி.உணரும் இதயங்களுக்கு ஒரு அதிசயம்.
      அது ஒரு சடங்கு அல்ல...ஒரு கதை அல்ல...
      தலைமுறைகள் கடந்தும் உயிரோடு வாழும் என் அருளின் சாட்சி.
      மச்சம்... நம்பிக்கையை அனுபவமாக மாற்றும் அந்த புனித தருணம்.

    `,

    // REQUIRED — Pull quote from Macham story for large display
    pullQuoteEn: "The neem tree bowed—a miracle witnessed by centuries of devotees, beyond all words.",
    pullQuoteTa: "வேப்ப மரம் வணங்கியது. பல நூற்றாண்டு பக்தர்கள் கண்ட இதை வார்த்தைகளில் சொல்ல முடியாது.",


    archivePhotosEn: "Macham Archive Photos",
    archivePhotosTa: "மச்சம் ஆவணப் புகைப்படங்கள்",
  },

  // ============================================================
  // MACHAM ARCHIVE — SACRED STRUCTURAL IDENTIFIERS
  // ============================================================

  machamArchive: {
    title: {
      en: "The Macham Archive — The Signs Our Ancestors Trusted",
      ta: "மச்சம் ஆவணக் காப்பகம்"
    },

    // REQUIRED — Physical markers on main deity idol — from oldest elders only
    descriptionEn: `
    Long before photographs...
    Long before mobile phones...
    Long before written records...
    Our elders knew me by these special signs.
    Generation after generation...
    They carefully remembered every mark...
    Every shape...Every unique feature...
    And lovingly passed this knowledge to their children.
    Today, we preserve those same signs here.
    Not to prove who I am...
    But so that no generation forgets the Kuladeivam their ancestors worshipped with love and faith.
    These are the signs that have guided families back to me for generations...
    And they will continue to guide generations yet to come.

    Physical Features (Coming Soon)
    The unique physical features of the deity, carefully preserved through the memories of our elders, will be documented here after they are verified and recorded for future generations.

    `,

    descriptionTa: `
     **தலைமுறைகள் காத்து வந்த அடையாளங்கள்**
      புகைப்படங்கள் வருவதற்கு முன்பே...
      எழுத்துப் பதிவுகள் உருவாகுவதற்கு முன்பே...
      குலதெய்வ அடையாளங்களை...
      குலதெய்வ தனித்துவமான தோற்றங்களை...
      முன்னோர்கள் மனதில் பதித்து பாதுகாத்தனர்.
      தலைமுறைகள் கடந்தும்...
      அந்த அறிவு வாய்மொழியாகப் பகிரப்பட்டு...
      இன்றும் அப்படியே தொடர்கிறது.

      இன்று...
      அந்த அரிய பாரம்பரியத்தை...
      வருங்கால தலைமுறைகளுக்காக இங்கே பாதுகாத்து வருகிறோம்.

      குலதெய்வத்தின் அடையாளம் காண்பதற்காக மட்டும் அல்ல...

      உங்கள் முன்னோர்கள் வணங்கிய குலதெய்வத்தின் உண்மையான அடையாளங்கள் என்றும் மறையாமல் இருக்க.

      தலைமுறைகள் அடையாளம் கண்ட அதே வழி...

      இனியும் தலைமுறைகளை குலதெய்வத்தினிடம் அழைத்து வரும்.
    `,

    // OPTIONAL — Photos of specific markings
    archiveImages: [
      // "macham-mark-1.jpg",
      // "macham-mark-2.jpg"
      "kdf-s1.jpg",
      "kdf-s4.jpg",
      "kdm-s1.jpg",
      "kdm-s2.jpg",
      "kdm-s3.jpg",
      "kdm-s4.jpg",
      "kdm-s5.jpg",
      "kdm-s6.jpg",
    ]
  },

  // ============================================================
  // VAMSAVALI — CLAN LINEAGE
  // ============================================================ 

  vamsavali: {
    title: {
      en: "Vamsavali — The Ancestral Journey",
      ta: "வம்சாவளி — மூதாதையர் பயணம்"
    },

    caption:{
      en:"Clan Lineage",
      ta:"குல மரபு",
    },

    // REQUIRED — Fill from elders — gotra, migration path, key ancestors
    storyEn: `
      A bond that connects your roots... Our blessings embracing every generation.
      A family name is not the only thing passed from one generation to the next...
      Love...
      Faith...
      Hope...
      And our blessings...Travel together through every generation.
      Your ancestors...Sat before us...
      Spoke to us from their hearts...
      Shared their joys with us...
      Bowed their heads in gratitude for our blessings...
      And celebrated our festival together as one family.
      We still remember...Their smiles...Their happiness...
      And their love.

      Today...

      You walk on the same path...Your ancestors once walked.
      You stand before us...Where they once stood.
      You speak to us...With the same love they did.
      The blessings they received...We continue to give to you today.

      Tomorrow...

      Your children...And their children...
      Will carry this beautiful bond forward.
      Our Roots is not simply a record of names...
      It is a bond of love that has connected generations with us.
      Remember your roots...
      Pass this beautiful tradition on to the next generation with love...
      Because...When you stand before us...

      You are standing once again in the same loving embrace where your ancestors once stood.
    `,

    storyTa: `
      வேர்களை இணைக்கும் புனித பந்தம்... தலைமுறைகளை அரவணைக்கும் எங்கள் அருள்.
      ஒரு பெயர் மட்டும் தலைமுறைகளைத் தாண்டி வருவதில்லை...
      அன்பும்... பக்தியும்... நம்பிக்கையும்... எங்கள் அருளும்... கூடவே பயணிக்கின்றன.
      உங்கள் முன்னோர்கள்...
      எங்கள் சந்நிதியில் அமர்ந்தார்கள்...
      எங்களோடு மனம் விட்டு பேசினார்கள்...
      தங்கள் மகிழ்ச்சிகளை எங்களோடு பகிர்ந்தார்கள்...
      எங்கள் அருளுக்கு நன்றியுடன் தலை வணங்கினார்கள்...
      குடும்பமாக ஒன்றுகூடி எங்கள் திருவிழாவைக் கொண்டாடினார்கள்...
      அவர்களின் சிரிப்பையும்...
      அவர்களின் மகிழ்ச்சியையும்...
      அவர்களின் அன்பையும்...
      இன்றும் நாங்கள் நினைவில் வைத்திருக்கிறோம்.

      இன்று...

      அவர்கள் நடந்த அதே பாதையில்...  நீங்களும் நடக்கிறீர்கள்.
      அவர்கள் நின்ற அதே சந்நிதியில்... நீங்களும் நிற்கிறீர்கள்.
      அவர்கள் எங்களோடு பேசிய அதே அன்போடு...
      நீங்களும் உங்கள் மனதை எங்களிடம் பகிர்கிறீர்கள்.
      அவர்கள் பெற்ற அதே அருளை...
      இன்றும் நாங்கள் உங்களுக்கும் வழங்குகிறோம்.

      நாளை...

      உங்கள் பிள்ளைகளும்...அவர்களின் பிள்ளைகளும்...
      இந்த புனித உறவைத் தொடர்ந்து கொண்டு செல்வார்கள்.
      வம்சாவளி என்பது பெயர்களின் பட்டியல் அல்ல...
      தலைமுறைகள் கடந்தும் எங்களோடு தொடரும் அன்பின் உறவு.
      உங்கள் வேர்களை நினைவில் கொள்ளுங்கள்...
      அடுத்த தலைமுறைக்கு இந்த பாரம்பரியத்தை அன்போடு ஒப்படையுங்கள்...

      ஏனெனில்...

      நீங்கள் எங்கள் சந்நிதியில் நிற்பது...
      உங்கள் முன்னோர்கள் நின்ற அதே அரவணைப்பில் மீண்டும் நிற்பதற்கே

    `
  },

  // ============================================================
  // DEITY NARRATION VIDEO SCRIPTS — TAMIL ONLY
  // ============================================================
  // These scripts are given to voice artist for recording.
  // Videos are Tamil only — no English narration videos.
  // Text content on website stays Tamil and English both.

  videoScripts: {

    // Script 1 — Deity introduction and Sthala Puranam
    deityIntroTa: `
      நான் [தெய்வம் பெயர்]. இந்த புனித மண்ணில் [X] ஆண்டுகளாக நிலைத்திருக்கிறேன்.
      உங்கள் தாத்தா என் முன்னால் கர்பூரம் ஏற்றினார்.
      உங்கள் அப்பாவின் திருமணத்தை ஆசீர்வதித்தேன்.
      உங்கள் முதல் குழந்தையின் பெயர் சூட்டு விழாவில் நான் இருந்தேன்.
      உங்கள் படையல், உங்கள் இனிப்பு பொங்கல் — எல்லாவற்றையும் அன்போடு ஏற்கிறேன்.
      என்னிடம் திரும்பி வாருங்கள். நான் எப்போதும் இங்கே இருக்கிறேன்.

      [FILL WITH SPECIFIC DEITY WORDS IN TAMIL — VOICE ARTIST RECORDS THIS]
    `,

    // Script 2 — Macham story narration
    machamTa: `
      அந்த நள்ளிரவில், என் வேலன் தீ பந்தத்துடன் ஓடினான்.
      இருள் சூழ்ந்த வயல்வெளியில், என் ஆணையால் வேப்ப மரம் வணங்கியது.
      அந்த தருணம் — அது நம்பிக்கையல்ல. அது நேரில் கண்ட உண்மை.

      [FILL WITH SPECIFIC MACHAM NARRATION IN TAMIL]
    `,

    // Script 3 — Festival invitation
    festivalInviteTa: `
      என் திருவிழா நெருங்கி வருகிறது.
      உங்கள் குடும்பத்துடன் என்னிடம் வாருங்கள்.
      நான் காத்திருக்கிறேன்.

      [FILL WITH SPECIFIC FESTIVAL INVITATION IN TAMIL]
    `
  },

  // ============================================================
  // FESTIVALS
  // ============================================================

  festivals: {  

    introCaptionEn: "Come Home",
    introCaptionTa: "குலசாமியின் அழைப்பு", 

    subheadCaptionEn:"Festivals",
    subheadCaptionTa:"வரவிருக்கும் திருவிழா",    
      
    monthsEn:"Months",
    monthsTa:"மாதம்", 
    
    daysEn:"Days",
    daysTa:"நாள்",  

    hoursEn:"Hours",
    hoursTa:"மணி",  

    // REQUIRED — Next festival for countdown timer  
    nextFestival: {
      nameEn: "Pongal Festival",
      nameTa: "பொங்கல் திருவிழா",
      date: "2028-06-07"  // Format: YYYY-MM-DD
    },

    // REQUIRED — All annual festivals    
    list: [
      {
        nameEn: "Pongal — Two Day Festival",
        nameTa: "பொங்கல் — இரு நாள் திருவிழா",
        monthEn: "May",
        monthTa: "வைகாசி",
        descriptionEn: "The primary annual festival. First midnight includes the sacred Macham event.",
        descriptionTa: "முதன்மையான ஆண்டு திருவிழா. முதல் நள்ளிரவில் மச்சம் நிகழ்வு.",
        offeringsEn: "Camphor, neem leaves, coconut, pongal, banana.",
        offeringsTa: "கர்பூரம், வேப்பிலை, தேங்காய், பொங்கல், வாழைப்பழம்."
      },
      
      // ADD MORE FESTIVALS
    ],



    // REQUIRED — Announcements board — latest news from committee
    announcements: [
      {
        dateEn: "June 2026",
        dateTa: "ஜூன் 2026",
        textEn: "Boundary wall repair work completed successfully.",
        textTa: "எல்லை சுவர் பழுது பார்க்கும் பணி வெற்றிகரமாக முடிந்தது."
      }
      // ADD CURRENT ANNOUNCEMENTS
    ],

    whatsappNumber: "919XXXXXXXXX"  // REQUIRED — temple manager number
  },

  // ============================================================
  // GALLERY — YEAR-WISE FESTIVAL PHOTOS
  // ============================================================
  // Rolling 3-year rule: only last 3 years shown on website
  // Maximum 10 photos + 1 video per year
  // Old years archived on Hostinger — not deleted — never shown on site

  gallery: {
    caption:{
      en:"Living Archive",
      ta:"உயிர்ப்புள்ள ஆவணக்காப்பகம்",
    },
    title:{
      en:"Festival Gallery",
      ta:" விழாக்காலப் பதிவுகள்",
    },

   videoCaption:{ 
      en:"Video Moments",
      ta:"காணொளித் தருணங்கள்",
    },
   clipCaption1:{ 
      en:"Morning at the Shrine",
      ta:"கோவில் காலைப்பொழுது",
    },
    clipCaption2:{ 
      en:"The Sacred Markers",
      ta:"குலதெய்வக் குறியீடுகள்",
    },
    clipCaption3:{ 
      en:"Last Year's Festival",
      ta:"கடந்த ஆண்டு திருவிழா கொண்டாட்டம்",
    },
    

    years: [
      {
        year: "2026",
        photos: [
          "kdm-s3.jpg",
          "kdm-s4.jpg",
          "kdt-s1.jpg",
          "kdt-s2.jpg",
          // Add up to 10 photos — stored at /images/gallery/2026/
        ],
        video: "KDT-S4.mp4",  // Stored at /videos/gallery/2026/
        captionEn: "Panguni Uthiram 2026 — Two Day Festival",
        captionTa: "பங்குனி உத்திரம் 2026 — இரு நாள் திருவிழா"
      },
      {
        year: "2024",
        photos: [
          "kdf-s1.jpg",
          "kdf-s4.jpg",
          "kdm-s1.jpg",
          "kdm-s2.jpg",
        ],
        video: "KDTOUR.mp4",
        captionEn: "Panguni Uthiram 2025",
        captionTa: "பங்குனி உத்திரம் 2025"
      },
     
    ]
  },

  // ============================================================
  // COMMITTEE AND VELAN
  // ============================================================

  committee: {
    title: {
      en: "Temple Committee",
      ta: "கோவில் நிர்வாகக் குழு"
    },

    subCaption: {
      en: "Pillars of Temple Service",
      ta: "ஆலயப் பணிக்குழு"
    },
    
    members: [
      {
        nameEn: "Nattamai",          // REQUIRED
        nameTa: "நாட்டாமை",       // REQUIRED
        roleEn: "Nattamai — Chief Elder",
        roleTa: "நாட்டாமை — தலைமை பெரியவர்",
        phone: "98457896",                   // OPTIONAL
        photoFile: "CM1.jpg"    // OPTIONAL — /images/committee/
      },
      {
        nameEn: "Secretary",
        nameTa: "செயலர்",
        roleEn: "Temple Secretary",
        roleTa: "கோவில் செயலர்",
        phone: "936528925",
        photoFile: "CM2.jpg"
      },
      {
        nameEn: "Secretary",
        nameTa: "செயலர்",
        roleEn: "Temple Secretary",
        roleTa: "கோவில் செயலர்",
        phone: "98965789",
        photoFile: "CM1.jpg"
      },
     {
        nameEn: "Secretary",
        nameTa: "செயலர்",
        roleEn: "Temple Secretary",
        roleTa: "கோவில் செயலர்",
        phone: "98965789",
        photoFile: "CM1.jpg"
      },
      {
        nameEn: "Secretary",
        nameTa: "செயலர்",
        roleEn: "Temple Secretary",
        roleTa: "கோவில் செயலர்",
        phone: "98965789",
        photoFile: "CM2.jpg"
      },
      
      // ADD ALL COMMITTEE MEMBERS
    ],

    velanNameEn: "OTHERS NAME",            // OPTIONAL
    velanNameTa: "செயலர்",         // OPTIONAL
    velanroleEn: "Temple Secretary",
    velanroleTa: "கோவில் செயலர்",
    velanPhotoFile: "CM1.jpg"                // OPTIONAL — /images/committee/
  },

  // ============================================================
  // COMMITTEE DECLARATION — LEGAL PROTECTION
  // ============================================================

  declaration: {
    // REQUIRED — Scan signed physical document and upload to Hostinger
    scannedDocumentFile: "VILLAGEDECLARATION.jpg",  // stored at /images/declaration.jpg

    // Signatories list — display alongside the scanned document
   /*  signatories: [
      { nameEn: "Vinthiya", nameTa: "பெயர் 1", roleEn: "Nattamai", roleTa: "நாட்டாமை" },
      { nameEn: "KURVI", nameTa: "பெயர் 2", roleEn: " Member", roleTa: "குழு உறுப்பினர்" },
      { nameEn: "MAINA", nameTa: "பெயர் 3", roleEn: "Committee Member", roleTa: "குழு உறுப்பினர்" },
      { nameEn: "KAKA", nameTa: "பெயர் 4", roleEn: "Committee Member", roleTa: "குழு உறுப்பினர்" },
      { nameEn: "PEACOCK", nameTa: "பெயர் 5", roleEn: "Committee Member", roleTa: "குழு உறுப்பினர்" },
      { nameEn: "TIGER", nameTa: "பெயர் 6", roleEn: "Committee Member ", roleTa: "குழு உறுப்பினர் (பெண்)" },
      { nameEn: "SUDALAI MADAN", nameTa: "பெயர் 7", roleEn: "Committee Member ", roleTa: "குழு உறுப்பினர் (பெண்)" },
      { nameEn: "OWL OWL", nameTa: "பெயர் 8", roleEn: "Committee Member", roleTa: "குழு உறுப்பினர் (பெண்)" },
      { nameEn: "CHITU KURVI", nameTa: "பெயர் 9", roleEn: "Committee Member ", roleTa: "குழு உறுப்பினர் (பெண்)" },
      { nameEn: "APPLE ORANGE", nameTa: "பெயர் 10", roleEn: "Committee Member ", roleTa: "குழு உறுப்பினர் (பெண்)" }
    ], */

    declarationDate: "DD Month YYYY",          // REQUIRED — date of signing
    declarationVillage: "Chithalamputhur",      // REQUIRED

    buttonTextEn: "View Committee Declaration",
    buttonTextTa: "குழு அறிவிப்பை பார்க்க"
  },



  // ============================================================
  //  3 VIALLAGE  - HOME TO OUR VILLAGES
  // ============================================================


villages: {
  headingEn: "Roots and Branches",       // e.g. "Roots and Branches"
  headingTa: "வேரும் விழுதும்",
  messageEn: "Distance changes the map, not the bond.  Wherever you are, this KULADEIVA THIRUTHALAM is always your home.",       // the italic intro line
  messageTa: "வாழும் இடம் மாறலாம், ஆனால் உறவு மாறுவதில்லை. நீங்கள் எங்கே இருந்தாலும், இந்தத் குலதெய்வ தலம் என்றும் உங்கள் வீடு",
  list: [
    { nameEn: "Chinna Athikulam (Chithalamputhur area)",
      nameTa: "சின்ன அத்திகுளம் (சீத்தாலம்புத்தூர் பகுதி)",
      addressEn: "Athikulam Sengulam / Saminatham Panchayat, Srivilliputhur Taluk,Virudhunagar District, Tamil Nadu, India,PIN Code: 626135", 
      addressTa: "அத்திகுளம் செங்குளம் / சாமிநாதம் பஞ்சாயத்து,ஸ்ரீவில்லிபுத்தூர் தாலுகா,விருதுநகர் மாவட்டம், தமிழ்நாடு, இந்தியா,அஞ்சல் குறியீட்டு எண்: 626135" },
    { nameEn: "Chithalamputhur Village", 
      nameTa: "சீத்தாலம்புத்தூர் கிராமம்", 
      addressEn: "Saminatham Revenue Village (Athikulam Sengulam area),Srivilliputhur Taluk,Virudhunagar District, Tamil Nadu, India,PIN Code: 626135", 
      addressTa: "சாமிநாதம் வருவாய் கிராமம் (அத்திகுளம் செங்குளம் பகுதி),ஸ்ரீவில்லிபுத்தூர் தாலுகா,விருதுநகர் மாவட்டம், தமிழ்நாடு, இந்தியா,அஞ்சல் குறியீட்டு எண்: 626135" },
    { nameEn: "Pottalpatti Village",
      nameTa: "பொட்டல்பட்டி கிராமம்", 
      addressEn: "Rajapalayam Taluk (Srivilliputhur area border),Virudhunagar District, Tamil Nadu, India ,PIN Code: 626111", 
      addressTa: "ராஜபாளையம் தாலுகா (ஸ்ரீவில்லிபுத்தூர் பகுதி எல்லை),விருதுநகர் மாவட்டம், தமிழ்நாடு, இந்தியா,அஞ்சல் குறியீட்டு எண்: 626111" }
  ]
},

  // ============================================================
  // DONATIONS — DIRECT UPI
  // ============================================================

  donation: {
    title: {
      en: "Support the Temple — Direct Donation",
      ta: "கோவிலை ஆதரிக்கவும் — நேரடி நன்கொடை"
    },

    bank: {
      accountName: "Sri Sudalai Madan Kuladeva Temple Trust",  // REQUIRED
      accountNumber: "XXXXXXXXXXXX",                           // REQUIRED
      ifsc: "XXXXXXXXXX",                                      // REQUIRED
      bankName: "State Bank of India",                         // REQUIRED
      branch: "Vasavappapuram Branch"                          // REQUIRED
    },

    upiVpa: "templetrustname@sbi",    // REQUIRED — UPI Virtual Payment Address
    upiName: "Sri Sudalai Madan Temple Trust",
    upiQrFile: "upi-qr.png",          // REQUIRED — stored at /images/upi-qr.png

    // REQUIRED — Spending history — builds NRI trust immediately
    transparency: [
      {
        year: "2024",
        itemEn: "Gopuram painting and restoration",
        itemTa: "கோபுரம் சாயம் பூசுதல் மற்றும் புனரமைப்பு",
        amountRs: "45,000"
      },
      {
        year: "2023",
        itemEn: "Panguni Uthiram festival expenses",
        itemTa: "பங்குனி உத்திரம் திருவிழா செலவுகள்",
        amountRs: "80,000"
      },
      {
        year: "2022",
        itemEn: "New boundary wall construction",
        itemTa: "புதிய எல்லை சுவர் கட்டுமானம்",
        amountRs: "1,20,000"
      }
      // ADD MORE YEARS
    ]
  },

  // ============================================================
  // DONORS — those who contributed to the temple's upkeep. Shown
  // on the Support page, right after the Donation panel. All donors
  // are shown equally, regardless of contribution size.
  // ============================================================

  donors: {
    title: {
      en: "Our Devoted Contributors",
      ta: "எங்கள் பக்தி நிறை நன்கொடையாளர்கள்"
    },

    // Add one entry per donor. photo files go in images/donors/
    list: [
      {
        nameEn: "NAME HERE",                    // REQUIRED
        nameTa: "பெயர் இங்கே",                   // REQUIRED
        villageEn: "Chithalamputhur",               // REQUIRED
        villageTa: "கிராமம் இங்கே",              // REQUIRED
        contributionEn: "Roof of the Sanctum",   // REQUIRED — what they contributed
        contributionTa: "சன்னதி கூரை",           // REQUIRED
        photo: "donor-1.jpg"                     // REQUIRED — stored at images/donors/
      },
      {
        nameEn: "NAME HERE",                    // REQUIRED
        nameTa: "பெயர் இங்கே",                   // REQUIRED
        villageEn: "Chithalamputhur",               // REQUIRED
        villageTa: "கிராமம் இங்கே",              // REQUIRED
        contributionEn: "Roof of the Sanctum",   // REQUIRED — what they contributed
        contributionTa: "சன்னதி கூரை",           // REQUIRED
        photo: "donor-2.jpg"                     // REQUIRED — stored at images/donors/
      },
        {
        nameEn: "NAME HERE",                    // REQUIRED
        nameTa: "பெயர் இங்கே",                   // REQUIRED
        villageEn: "Chithalamputhur",               // REQUIRED
        villageTa: "கிராமம் இங்கே",              // REQUIRED
        contributionEn: "Roof of the Sanctum",   // REQUIRED — what they contributed
        contributionTa: "சன்னதி கூரை",           // REQUIRED
        photo: "donor-1.jpg"                     // REQUIRED — stored at images/donors/
      },
        {
        nameEn: "NAME HERE",                    // REQUIRED
        nameTa: "பெயர் இங்கே",                   // REQUIRED
        villageEn: "Chithalamputhur",               // REQUIRED
        villageTa: "கிராமம் இங்கே",              // REQUIRED
        contributionEn: "Roof of the Sanctum",   // REQUIRED — what they contributed
        contributionTa: "சன்னதி கூரை",           // REQUIRED
        photo: "donor-1.jpg"                     // REQUIRED — stored at images/donors/
      },
        {
        nameEn: "NAME HERE",                    // REQUIRED
        nameTa: "பெயர் இங்கே",                   // REQUIRED
        villageEn: "Chithalamputhur",               // REQUIRED
        villageTa: "கிராமம் இங்கே",              // REQUIRED
        contributionEn: "Roof of the Sanctum",   // REQUIRED — what they contributed
        contributionTa: "சன்னதி கூரை",           // REQUIRED
        photo: "donor-1.jpg"                     // REQUIRED — stored at images/donors/
      },
      // ADD MORE DONORS — same shape as above
    ]
  },

  // ============================================================
  // TRAVEL DIRECTIONS
  // ============================================================

  directions: {
    title: {
      en: "How to Reach the Temple",
      ta: "கோவிலை எப்படி சேர்வது"
    },

    // REQUIRED — Get from Google Maps: Share > Embed a map > copy iframe src URL
    /* googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3416367405857!2d77.64660357300355!3d9.478984090601422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06c300487ac4f7%3A0x63a9d4befdb90a29!2sArulmigu%20Sri%20Pon%20Irulappa%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1783688427270!5m2!1sen!2sin", */

    // REQUIRED — GPS link opens Maps app on mobile
   // googleMapsDirectionsUrl: "https://maps.google.com/?q=GPS_LAT,GPS_LNG",

    landmarks: {
      en: `
        The temple is located in Vasavappapuram village, approximately 12
        kilometers from Tirunelveli town center. Take the Tirunelveli to
        Tuticorin highway (NH44), turn left at the [LANDMARK] junction,
        and continue 3 kilometers on the village road.

        [ADD SPECIFIC ROUTE INSTRUCTIONS FROM NEAREST TOWN]
      `,
      ta: `
        [உள்ளூர் பாதை வழிகாட்டுதலை தமிழில் இங்கே நிரப்பவும்]
      `
    },

    transport: {
      busStandEn: "Tirunelveli Central Bus Stand — 12 km",       // REQUIRED
      busStandTa: "திருநெல்வேலி மத்திய பேருந்து நிலையம் — 12 கி.மீ",
      railwayEn: "Tirunelveli Junction Railway Station — 14 km", // REQUIRED
      railwayTa: "திருநெல்வேலி சந்திப்பு ரயில் நிலையம் — 14 கி.மீ",
      airportEn: "Tuticorin Airport — 35 km",                    // REQUIRED
      airportTa: "தூத்துக்குடி விமான நிலையம் — 35 கி.மீ"
    }
  },

  // ============================================================
  // FOOTER LETTER TO THE DEVOTEE
  // ============================================================



  footerLetter: {
    en: `
      Whenever you are far from home, come here in your heart. Your KULADEIVAM are always waiting for you.`,
    ta: `
      நீங்கள் எங்கு வசித்தாலும், இங்கே வந்திடுங்கள்.என்றும் உங்களுக்காகக் காத்திருக்கும் குலதெய்வம்`,
    locationCaptionEn: "அருள்மிகு கொடிக்கா தோப்பு ஐயனார் சுவாமி, வையாளிமுத்து சுவாமி, பொன் இருளப்ப சுவாமி சமேத 21 தெய்வங்கள் திருக்கோவில்."  ,
    locationCaptionTn: "Arulmigu Kodikka Thoppu, Aiyanar Swami, Vaiyalimuthu Swami, and Pon Iruppa Swami, Sametha 21 Deivangal Temple."  ,
  },

  // ============================================================
  // CONTACT AND WHATSAPP
  // ============================================================

  contact: {
    whatsappNumber: "91987654321",  // REQUIRED — 91 + 10 digit number, no +

    messages: {
      generalEn: "Vanakkam. I am a devotee and wish to connect with the temple committee.",
      generalTa: "வணக்கம். நான் ஒரு பக்தன் மற்றும் கோவில் குழுவுடன் தொடர்பு கொள்ள விரும்புகிறேன்.",
      festivalEn: "Vanakkam. I want to know about the upcoming festival and how to participate.",
      festivalTa: "வணக்கம். வரும் திருவிழாவைப் பற்றி மேலும் அறிந்து கொள்ள விரும்புகிறேன்.",
      sponsorEn: "Vanakkam. I want to sponsor the upcoming festival. Please contact me.",
      sponsorTa: "வணக்கம். வரும் திருவிழாவை நான் ஆதரிக்க விரும்புகிறேன். தொடர்பு கொள்ளவும்."
    }
  },

  // ============================================================
  // MEDIA FILE PATHS — ALL STORED ON HOSTINGER
  // ============================================================
  // Update baseUrl after domain is connected on Hostinger

  media: {
    baseUrl: "https://yourtemplename.com",        // REQUIRED — update after launch

    heroVideo: "/videos/kd1.mp4",
    heroFallbackImage: "/images/hero-fallback.jpg",

    ambientAudio: "/audio/ambient.mp3",

    // Deity narration videos — Tamil only
    videoDeityIntro: "/videos/deity-intro.mp4",
    videoMacham: "/videos/macham.mp4",
    videoFestivalInvite: "/videos/festival-invite.mp4",
    videoLandscape: "/videos/landscape.mp4",

    // Video thumbnail images — shown before play
    thumbDeityIntro: "/images/thumb-deity-intro.jpg",
    thumbMacham: "/images/thumb-macham.jpg",
    thumbFestivalInvite: "/images/thumb-festival-invite.jpg",

    footerImage: "/images/footer-deity.jpg",
    upiQrCode: "/images/upi-qr.png",
    declarationDoc: "/images/declaration.jpg",
    ogPreviewImage: "/images/og-preview.jpg"   // 1200x630px for WhatsApp sharing
  },

  // ============================================================
  // SEO SETTINGS
  // ============================================================

  seo: {
    // REQUIRED — appears in browser tab and Google search result
    titleEn: "Sri Sudalai Madan Kuladeva Temple — Digital Sanctuary | Vasavappapuram, Tirunelveli",

    // REQUIRED — 160 characters maximum — appears in Google search result
    descriptionEn: "Sacred digital home of Sri Sudalai Madan Kuladeva Temple, Vasavappapuram, Tirunelveli. Preserving 400 years of clan history, Macham story, and festivals for future generations.",

    // REQUIRED — GPS coordinates for Google structured data
    gpsLat: "8.XXXXXX",   // Get from Google Maps — right click on temple location
    gpsLng: "77.XXXXXX",

    // REQUIRED — after Google Search Console setup — paste verification code here
    googleVerificationCode: "PASTE_CODE_FROM_SEARCH_CONSOLE_HERE",

    // REQUIRED — canonical URL — prevents duplicate content
    canonicalUrl: "https://yourtemplename.com/"
  },

  // ============================================================
  // PWA SETTINGS
  // ============================================================

  pwa: {
    appNameEn: "Sudalai Madan Temple",
    appNameTa: "சுடலை மாடன் கோவில்",
    shortName: "Kovil",
    themeColor: "#B8860B",
    backgroundColor: "#FDF6E3",
    // PWA icons stored at /images/icons/
    // Required sizes: 72, 96, 128, 144, 152, 192, 384, 512 px
  }

};

// Global variable — no module system needed in plain HTML
// main.js reads TEMPLE_CONTENT directly
window.TEMPLE_CONTENT = TEMPLE_CONTENT;
