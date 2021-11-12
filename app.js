const popupWrapper = document.getElementById('timeline-popup-wrapper')
const popupYear = document.getElementById('timeline-popup-year')
const popupBody = document.getElementById('timeline-popup-body')
const popupCloseBtn = document.getElementById('timeline-close-btn')

const timelineSections = [
  {
    link: document.getElementById('forties-link'),
    text: document.getElementById('forties-text'),
    showing: false,
    year: '1940s',
    body: `
          <h4 class="timeline-popup-title">
            Rooted in Discovery from the Start
          </h4>
          <p class="timeline-popup-text">
            MSD establishes its animal health division (Intervet Inc.) and
            discovers sulfaquinoxaline, the first poultry coccidiostat.
          </p>
          <p class="timeline-popup-text">
            Coccidiostats are added to poultry feed to combat coccidiosis, a
            parasitic disease of the intestinal tract, and help improve animal
            health and welfare.
          </p>
          `
  },
  {
    link: document.getElementById('fifties-link'),
    text: document.getElementById('fifties-text'),
    showing: false,
    year: '1950s',
    body: `
          <h4 class="timeline-popup-title">Creation of First Poultry Vaccine</h4>
          <p class="timeline-popup-text">
            Intervet develops TREMVAC<sup>®</sup>-FP, the first fowl pox vaccine for
            poultry. Before the vaccine, fowl pox was a lethal threat that was
            highly transmissible and could cause a transient drop in egg
            production and a reduced growth rate in young birds.
          </p>
          <p class="timeline-popup-text">
            Additionally, the first edition of The MSD Veterinary Manual is
            published, offering a comprehensive, reliable source of information
            on all aspects of animal healthcare.
          </p>
         `
  },
  {
    link: document.getElementById('seventies-link'),
    text: document.getElementById('seventies-text'),
    showing: false,
    year: '1970s',
    body: `
          <h4 class="timeline-popup-title">
            Development of Enduring Poultry Welfare Solutions
          </h4>
          <p class="timeline-popup-text">
            Intervet develops anthelmintic fenbendazole, which is still used
            today against parasites, such as roundworms and hookworms, that are
            found in the gastrointestinal and respiratory tracts of chickens.
          </p>
          <p class="timeline-popup-text">
            Since their introduction, benzimidazole drugs have had an extensive
            therapeutic effect against a broad range of parasite species, and
            they are still known as one of the safest drugs used in food
            animals.
          </p>
          `
  },
  {
    link: document.getElementById('nine-link'),
    text: document.getElementById('nine-text'),
    showing: false,
    year: '2009',
    body: `
          <h4 class="timeline-popup-title">Commitment to Healthy Animals and a Healthy Planet</h4>
          <p class='timeline-popup-text'>
            Intervet and Schering-Plough Animal Health create SPHEREON<sup>®</sup>, a novel
            vaccine formulation technology that freeze-dries vaccines into
            small, highly soluble spheres that dissolve in water and can be
            easily administered to poultry. Because these spheres dissolve
            quickly and completely in water – and containers come in a variety
            of volumes that can fully dose flocks of many sizes – producers
            don’t need to use protective gear or open multiple individual glass
            vials, making SPHEREON a convenient and environmentally-friendly
            option for poultry farms.
          </p>
          `
  },
  {
    link: document.getElementById('seventeen-link'),
    text: document.getElementById('seventeen-text'),
    showing: false,
    year: '2017',
    body: `
            <p class="timeline-popup-month">March</p>
            <h4 class="timeline-popup-title">
              A Focus on Firsts: High–Quality Poultry Science Award
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health* announces a call for submissions for its first
              annual High–Quality Poultry Science Award, which is granted to
              three recent veterinary or animal science graduates in support of
              research in poultry health, production and welfare.
            </p>
            <p class="timeline-popup-month">September</p>
            <h4 class="timeline-popup-title dual">
              A Focus on Firsts: INNOVAX<sup>®</sup>-ND-IBD and EXZOLT<sup>®</sup> Launches
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health launches INNOVAX<sup>®</sup>-ND-IBD, the first ever
              biotech-based vaccine that provides life-long protection against
              three incredibly infectious poultry diseases (infectious bursal
              disease, Newcastle disease and Marek’s disease), and EXZOLT<sup>®</sup>
              (fluralaner), the first systemic treatment for poultry red mite
              infestations.
            </p>
            <p class="timeline-popup-text">
              <em
                >*The operating name of MSD’s animal health unit officially
                changes to MSD Animal Health in 2011.</em
              >
            </p>
          `
  },
  {
    link: document.getElementById('eightteen-link'),
    text: document.getElementById('eightteen-text'),
    showing: false,
    year: '2018',
    body: `
          <p class="timeline-popup-month">March</p>
            <h4 class="timeline-popup-title">
              Expanded Indication for PANACUR<sup>®</sup> AquaSol
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health receives marketing authorization from the
              European Commission for the expanded indication of PANACUR<sup>®</sup>
              AquaSol to combat three gastrointestinal parasites in chickens.
              PANACUR AquaSol was originally approved in 2013 for the same
              indication in pigs to treat three similar types of parasites.
            </p>
            <p class="timeline-popup-month">June</p>
            <h4 class="timeline-popup-title">Vinovo Partnership</h4>
            <p class="timeline-popup-text">
              MSD Animal Health announces partnership agreement with Vinovo B.V.
              to combine its vaccine portfolio with Vinovo’s novel delivery
              system, making it easier for farmers to deliver poultry vaccines
              more effectively.
            </p>
            <p class="timeline-popup-month">October</p>
            <h4 class="timeline-popup-title">
              EXZOLT<sup>®</sup> Wins Breakthrough of the Year
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health receives recognition for EXZOLT<sup>®</sup> as the
              breakthrough of the year at the 2018 British Free-Range Egg
              Producers Association Conference.
            </p>
          `
  },
  {
    link: document.getElementById('nineteen-link'),
    text: document.getElementById('nineteen-text'),
    showing: false,
    year: '2019',
    body: `
            <p class="timeline-popup-month">February</p>
            <h4 class="timeline-popup-title">
              Rapid Genomics Exclusive Agreement
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health collaborates with Rapid Genomics for exclusive
              rights to the company’s vaccination verification tool, Viral
              Flex-Seq<sup>®</sup>, to use in combination with Innovax<sup>®</sup> vaccines, to
              optimize and enhance disease outbreak management in poultry.
            </p>
            <p class="timeline-popup-month">April</p>
            <h4 class="timeline-popup-title">Acquisition of Antelliq</h4>
            <p class="timeline-popup-text">
              MSD Animal Health acquires Antelliq Corporation and becomes the
              global leader in animal health digital tracking, traceability and
              monitoring technology for livestock and companion animals.
            </p>
           `
  },
  {
    link: document.getElementById('twenty-link'),
    text: document.getElementById('twenty-text'),
    showing: false,
    year: '2020',
    body: `
          <p class="timeline-popup-month">January</p>
            <h4 class="timeline-popup-title dual">
              Introduction of Innoject Pro
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health introduces the Innoject Pro, a subcutaneous
              chick vaccination technology that provides increased accuracy of
              injection and greater sustainability during the vaccination
              process, reducing stress to chicks and improving operator safety.
            </p>
            <p class="timeline-popup-month">August</p>
            <h4 class="timeline-popup-title">IdentiGEN Acquisition</h4>
            <p class="timeline-popup-text">
              MSD Animal Health acquires IdentiGEN, a leader in DNA-based animal
              traceability solutions for livestock and aquaculture that combines
              species’ unique DNA and data analytics to accurately and precisely
              trace poultry, beef, seafood and pork that is verifiable from farm
              to table.
            </p>
          `
  },
  {
    link: document.getElementById('twentyone-link'),
    text: document.getElementById('twentyone-text'),
    showing: false,
    year: '2021',
    body: `
            <p class="timeline-popup-month">January</p>
            <h4 class="timeline-popup-title">EXZOLT<sup>®</sup> SPC Update</h4>
            <p class="timeline-popup-text">
              EXZOLT<sup>®</sup> becomes the first veterinary product centrally registered
              in the EU to include animal welfare improvement in its Summary of
              Product Characteristics following a positive opinion from the EMA
              CVMP.
            </p>
            <p class="timeline-popup-month">February</p>
            <h4 class="timeline-popup-title dual">
              Acquisition of Poultry Sense Limited
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health completes the acquisition of Poultry Sense
              Limited, broadening its portfolio to enhance health and
              environmental monitoring technology to the poultry industry.
            </p>
            <p class="timeline-popup-month">February</p>
            <h4 class="timeline-popup-title">
              Best New Food Animal Product Award Win
            </h4>
            <p class="timeline-popup-text">
              MSD Animal Health is officially presented with the 2020 Best New
              Food Animal Product Award for NOBILIS<sup>®</sup> SALENVAC<sup>®</sup> ETC for poultry,
              an inactivated, intramuscular, two-dose trivalent Salmonella
              vaccine.
            </p>
            <p class="timeline-popup-text">
              NOBILIS SALENVAC ETC, registered and launched in the EU in 2020,
              offers the broadest protection for layers and breeders against
              three different Salmonella serogroups (B-C-D) and was developed
              based on the need for broad Salmonella food safety control in
              poultry farms.
            </p>
          `
  }
]

timelineSections.forEach((section) => {
  section.link.addEventListener('click', () => {
    if (window.innerWidth > 600 && window.innerWidth < 870) {
      if (section.showing) {
        section.text.style.opacity = 0.15
        section.showing = false
      } else {
        section.text.style.opacity = 1
        section.showing = true
      }
    }
    if (window.innerWidth < 600) {
      popupYear.innerText = section.year
      popupBody.innerHTML = section.body
      popupWrapper.style.display = 'block'
    }
  })
})

popupCloseBtn.addEventListener('click', () => {
  popupWrapper.style.display = 'none'
})
