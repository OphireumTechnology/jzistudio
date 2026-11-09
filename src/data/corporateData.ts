export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'infrastructure' | 'renewable' | 'interior';
  categoryLabel: string;
  location: string;
  scope: string;
  lotArea?: string;
  floorArea?: string;
  yearDuration?: string;
  constructionSystem?: string;
  role: string;
  status: 'Completed' | 'Ongoing' | 'Pre-Construction';
  verifiedRelationship: string;
  imageUrl: string;
  blueprintUrl?: string;
  highlights: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Design' | 'Engineering' | 'Management' | 'Construction';
  shortDesc: string;
  fullDesc: string;
  applications: string[];
  deliverables: string[];
  iconName: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Earthmoving' | 'Hauling' | 'Lifting' | 'Concreting' | 'Compaction' | 'Power & Dewatering';
  modelOrType: string;
  capacityOrPower: string;
  typicalUse: string;
  status: 'Operational / Fleet Ready' | 'Mobilized on Site';
}

export interface CredentialItem {
  id: string;
  title: string;
  issuingAuthority: string;
  category: string;
  registrationNumberMasked: string;
  verificationStatus: 'Verified & Active' | 'Renewed & In Good Standing';
  scopeNote: string;
}

export const CORPORATE_IDENTITY = {
  name: "JZI STUDIO & CONSTRUCTION SERVICES INC.",
  shortName: "JZI Studio & Construction",
  classification: "Architects • Engineers • General Contractor",
  primaryTagline: "We Design. We Build. We Inspire.",
  secondaryTagline: "Your Ideas, Our Craftsmanship, Built to Last.",
  overview:
    "JZI Studio & Construction Services Inc. is a premier integrated design-and-build enterprise uniting licensed architectural design, multi-disciplinary engineering, and general contracting under one rigorous standard of craftsmanship. Established to deliver enduring structures across the Philippines, JZI transforms ambitious visions into masterfully executed realities.",
  history:
    "Founded on the combined decades of technical field leadership of its core practitioners and executive team, JZI evolved from high-demand commercial fit-outs and luxury private residences into a diversified general contracting force capable of executing utility-scale infrastructure, renewable solar energy fields, institutional edifices, and precision interior environments.",
  ceoMessage:
    "\"Our philosophy is anchored in an unyielding respect for the craft. Every line drawn by our architects and engineers must translate to enduring structural integrity, flawless safety, and timeless aesthetic value on site. We build with the knowledge that architecture shapes human life, enterprise, and national progress for generations to come. Welcome to JZI.\"",
  vision:
    "To stand as the benchmark of architectural ingenuity and engineering excellence in the Philippines, advancing national infrastructure and bespoke private spaces through sustainable practices, technical precision, and unwavering integrity.",
  missions: [
    {
      code: "Mission 01",
      title: "Integrated Design & Construction Excellence",
      description:
        "Deliver seamless, single-source design-build solutions where architectural ingenuity and structural rigor converge to minimize delays, optimize project lifecycles, and exceed client expectations."
    },
    {
      code: "Mission 02",
      title: "Sustainable & Enduring Nation-Building",
      description:
        "Champion modern green construction systems, resilient civil infrastructure, and renewable energy adoption that protect communities and foster sustainable economic development."
    }
  ],
  coreValues: [
    { title: "Integrity", desc: "Transparent accounting, ethical contracting, and uncompromised structural honesty in every joint and concrete pour." },
    { title: "Quality and Excellence", desc: "Craftsmanship that withstands both the scrutiny of engineers and the tests of tropical climate." },
    { title: "Innovation and Creativity", desc: "Harnessing BIM technology, contemporary architectural idioms, and forward-looking civil methods." },
    { title: "Customer Satisfaction", desc: "Dedicated project stewardship and responsive client collaboration from concept to occupancy." },
    { title: "Professionalism", desc: "Execution governed strictly by certified codes, licensed practitioners, and transparent milestones." },
    { title: "Safety and Responsibility", desc: "Zero-compromise on-site occupational safety, rigorous PPE mandates, and environmental risk controls." },
    { title: "Sustainability", desc: "Prioritizing renewable energy integration, solar readiness, low-carbon materials, and water stewardship." },
    { title: "Commitment and Reliability", desc: "Adherence to agreed construction schedules, rigorous material specifications, and firm milestones." }
  ],
  sustainabilityCommitment:
    "JZI integrates solar readiness, passive daylight harvesting, efficient storm water drainage, and climate-resilient engineering standards across both residential developments and utility-scale infrastructure.",
  professionalDisclaimer:
    "Professional services requiring licenses, registrations, or specific authorizations are provided by appropriately qualified and authorized practitioners.",
  contact: {
    address: "Unit 5k Seina Tower 1, Marikina, Philippines",
    phone: "+63 977-829-2851 / +63 933-210-6739 / (02) 7341-7233",
    email: "jziarchitectural@gmail.com",
    hours: "Contact for office hours",
    emergencySupport: "For project inquiries, use the official contact numbers."
  }
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "arch-design",
    number: "01",
    title: "Architectural Design",
    category: "Design",
    shortDesc: "Contemporary, bioclimatic, and functional architectural planning for luxury residential and commercial structures.",
    fullDesc: "Holistic architectural solutions spanning conceptual space planning, 3D parametric visualization, BIM coordination, code compliance, and detail construction documentation tailored to tropical climates.",
    applications: ["Custom Luxury Residences", "Commercial Office Buildings", "Retail Pavilions", "Hospitality Spaces"],
    deliverables: ["Architectural Blueprints", "3D Photorealistic Renderings", "Building Permit Sets", "Material Board Specifications"],
    iconName: "Compass"
  },
  {
    id: "civil-structural",
    number: "02",
    title: "Civil & Structural Engineering",
    category: "Engineering",
    shortDesc: "Seismic-resistant structural frameworks, deep foundation engineering, and civil site development.",
    fullDesc: "Complete structural analysis utilizing finite element modeling to ensure compliance with the National Structural Code of the Philippines (NSCP) for typhoons and earthquake resilience.",
    applications: ["Multi-Storey Structures", "Bridges & Overpasses", "Retaining Walls & Slope Stabilization", "Industrial Warehouses"],
    deliverables: ["Structural Calculations & Analysis Reports", "Reinforcement Rebar Schedules", "Foundation Piling Plans", "Seismic Compliance Certification"],
    iconName: "Layers"
  },
  {
    id: "electrical-eng",
    number: "03",
    title: "Electrical Engineering",
    category: "Engineering",
    shortDesc: "High-voltage substations, low-voltage distribution, architectural lighting design, and emergency power backup.",
    fullDesc: "Engineered electrical load calculations, panelboard schedules, harmonic mitigation, lightning protection, and integrated smart building automation.",
    applications: ["Commercial Fit-Outs", "Renewable Solar Grid Integration", "Industrial Facilities", "Residential Power Infrastructure"],
    deliverables: ["Single-Line Diagrams", "Lighting & Power Layouts", "Short Circuit Analysis", "Electrical Permit Drawings"],
    iconName: "Zap"
  },
  {
    id: "mechanical-eng",
    number: "04",
    title: "Mechanical Engineering",
    category: "Engineering",
    shortDesc: "HVAC climate control, mechanical ventilation, smoke evacuation systems, and industrial ducting.",
    fullDesc: "Precision thermal comfort analysis, duct design, energy-recovery ventilators, and central chiller plant coordination for energy-efficient commercial environments.",
    applications: ["Commercial Kitchens & Restaurants", "Server Rooms & Data Closets", "Shopping Malls", "High-End Residences"],
    deliverables: ["HVAC Schematics", "Ductwork Isometric Layouts", "Equipment CFM Schedules", "Mechanical Compliance Sets"],
    iconName: "Cpu"
  },
  {
    id: "sanitary-plumbing",
    number: "05",
    title: "Sanitary & Plumbing Design",
    category: "Engineering",
    shortDesc: "Domestic potable water supply, sanitary drainage, stormwater harvesting, and sewage treatment systems.",
    fullDesc: "Engineered hydraulic calculations, booster pump stations, backflow prevention, grease trap facilities, and eco-friendly rainwater harvesting layouts.",
    applications: ["Food & Beverage Outlets", "Multi-Family Residential", "Health Facilities", "Commercial Centers"],
    deliverables: ["Plumbing Isometric Diagrams", "Riser Diagrams", "Septic & STP Sizing Reports", "Sanitary Permit Plans"],
    iconName: "Droplets"
  },
  {
    id: "interior-design",
    number: "06",
    title: "Interior Design & Fit-Out",
    category: "Design",
    shortDesc: "Bespoke spatial design, acoustic paneling, custom joinery, and luxury hospitality interior execution.",
    fullDesc: "Turnkey interior architecture aligning brand identity with ergonomic function, tactile luxury materials, custom millwork, and lighting ambiance.",
    applications: ["Restaurant Chains & Casual Dining", "Corporate Executive Suites", "Boutique Retail", "Luxury Penthouses"],
    deliverables: ["Space Planning & Furniture Layouts", "Reflected Ceiling Plans", "Custom Millwork Shop Drawings", "FF&E Schedule"],
    iconName: "Palette"
  },
  {
    id: "quantity-surveying",
    number: "07",
    title: "Quantity Surveying & Cost Estimation",
    category: "Management",
    shortDesc: "Transparent Bill of Quantities (BOQ), material take-offs, lifecycle cost analysis, and tender packages.",
    fullDesc: "Thorough cost engineering from preliminary feasibility through trade contractor bidding and progress billing audits, preventing cost overruns.",
    applications: ["Pre-Construction Feasibility", "Value Engineering", "Bank Loan Documentation", "Tender Evaluation"],
    deliverables: ["Itemized Bill of Quantities (BOQ)", "Unit Price Analysis (DUPA)", "Cashflow Projections", "Value Engineering Audits"],
    iconName: "FileSpreadsheet"
  },
  {
    id: "project-management",
    number: "08",
    title: "Construction Project Management",
    category: "Management",
    shortDesc: "Authoritative project scheduling, QA/QC testing, safety supervision, and contractor oversight.",
    fullDesc: "Deployment of critical path method (CPM) scheduling, daily field reporting, concrete cylinder batch testing, and multi-trade synchronization.",
    applications: ["Owner's Representative Services", "Multi-Phase Developments", "Fast-Track Fit-Outs", "Public Works Supervision"],
    deliverables: ["Gantt Chart Master Schedules", "Quality Assurance Inspection Reports", "Weekly Progress Dashboards", "Turnover Punchlists"],
    iconName: "CheckCircle2"
  },
  {
    id: "gen-construction",
    number: "09",
    title: "Residential & Commercial Construction",
    category: "Construction",
    shortDesc: "Full-scale general contracting, reinforced concrete work, structural steel erection, and exterior envelopes.",
    fullDesc: "Turnkey structural construction with seasoned site superintendents, heavy machinery fleet support, and stringent on-site testing protocols.",
    applications: ["Custom Luxury Homes", "Commercial Multi-Storey Buildings", "Institutional Facilities", "Warehouses"],
    deliverables: ["Full Turnkey Building Delivery", "As-Built Drawings", "Occupancy Permit Assistance", "Structural Warranty Certificate"],
    iconName: "Building2"
  },
  {
    id: "renovation-remodel",
    number: "10",
    title: "Renovation & Structural Retrofitting",
    category: "Construction",
    shortDesc: "Adaptive reuse, structural carbon-fiber retrofitting, interior remodeling, and facade modernization.",
    fullDesc: "Specialized engineering to expand building capacity, reinforce aged foundations, modernize building facades, and transform interior footprints with minimal operational disruption.",
    applications: ["Commercial Store Conversions", "Historic & Residential Expansions", "Seismic Building Retrofits", "Tenant Improvements"],
    deliverables: ["Structural Assessment Reports", "Demolition & Phasing Plans", "Modernized As-Built Documentation", "Safe Handover"],
    iconName: "Hammer"
  }
];

export const AUTHENTIC_PROJECTS: ProjectItem[] = [
  {
    id: "proj-res-01",
    title: "The Horizon Ridge Contemporary Residence",
    category: "residential",
    categoryLabel: "Residential Construction",
    location: "Exclusive Enclave, Calabarzon / Metro Manila Border",
    scope: "Architectural Design, Structural Engineering, Turnkey Construction, Custom Millwork & Infinity Pool Integration",
    lotArea: "720 sq.m",
    floorArea: "540 sq.m (3 Levels)",
    yearDuration: "14 Months (Completed)",
    constructionSystem: "Reinforced Concrete Frame with Post-Tensioned Cantilever Slabs & Insulated Low-E Glass",
    role: "Architect of Record & General Contractor",
    status: "Completed",
    verifiedRelationship: "Direct Design & Build Contract",
    imageUrl: "/assets/images/project_residential_villa_1794254055730.jpg",
    highlights: [
      "Triple-height glass curtain wall with automated shading",
      "Cantilevered master terrace overlooking coastal hills",
      "Integrated 12 kW solar PV backup array with battery bank",
      "Native teak slat ceiling accents and natural travertine stone walls"
    ],
    description: "A showpiece contemporary residence designed to seamlessly harmonize indoor luxury with tropical surroundings. Featuring high-span reinforced concrete construction, passive cooling channels, and bespoke architectural woodwork."
  },
  {
    id: "proj-res-02",
    title: "Modern Duplex & Multi-Storey Living Suites",
    category: "residential",
    categoryLabel: "Residential Construction",
    location: "Urban Growth Corridor, Cavite / Laguna",
    scope: "Structural Engineering, Architectural Detailing, Construction & Utility Integration",
    lotArea: "450 sq.m",
    floorArea: "680 sq.m Total GFA",
    yearDuration: "11 Months (Completed)",
    constructionSystem: "Monolithic Shear Walls with Lightweight Concrete Partitions",
    role: "General Contractor & Engineering Supervision",
    status: "Completed",
    verifiedRelationship: "Verified Project Profile Documentation (pp. 12-17)",
    imageUrl: "/assets/images/project_residential_villa_1794254055730.jpg",
    highlights: [
      "Dual independent utility metering and acoustic party walls",
      "Private garden courtyards for each residential wing",
      "Reinforced roof deck prepared for future vertical expansion",
      "Low-maintenance textured stucco and anodized bronze aluminum frames"
    ],
    description: "Engineered multi-family residential solution optimizing high urban land values while maintaining private luxury and individual identity for each home."
  },
  {
    id: "proj-com-01",
    title: "Kuya J Restaurant — SM City San Pedro",
    category: "commercial",
    categoryLabel: "Commercial & Restaurant Fit-Out",
    location: "SM City San Pedro, Laguna",
    scope: "Turnkey Commercial Fit-Out, MEPFS Engineering, Commercial Kitchen Ventilation, Custom Millwork & Storefront Glazing",
    floorArea: "215 sq.m Dining & Back-of-House",
    yearDuration: "45 Calendar Days (Completed)",
    constructionSystem: "Commercial Fire-Rated Gypsum Partitions, Stainless Ducting, Custom Wood Coffer Ceilings",
    role: "General Fit-Out Contractor & MEP Coordinator",
    status: "Completed",
    verifiedRelationship: "Documented Commercial Client Project (PDF Page 18-20)",
    imageUrl: "/assets/images/project_commercial_kuya_j_1794254055188.jpg",
    highlights: [
      "Precision-milled acoustic wood ceiling lattice",
      "Heavy-duty commercial kitchen exhaust with wet-chemical fire suppression",
      "Custom brass metallic accents and ambient architectural lighting",
      "Zero mall-operation disturbance with strict night-shift scheduling"
    ],
    description: "Flagship commercial casual-dining fit-out completed within a compressed mall schedule. Full coordination of grease interception, dedicated exhaust hood make-up air, and high-traffic hospitality finishes."
  },
  {
    id: "proj-com-02",
    title: "BBQ Chicken — Festival Mall Expansion",
    category: "commercial",
    categoryLabel: "Commercial & Restaurant Fit-Out",
    location: "Festival Supermall, Alabang, Muntinlupa City",
    scope: "Interior Architectural Fit-Out, Kitchen Electromechanical Works, High-Voltage Fryer Wiring & Dining Hall Handover",
    floorArea: "185 sq.m",
    yearDuration: "40 Calendar Days (Completed)",
    constructionSystem: "Commercial Steel Stud Framing, Terrazzo Flooring, Stainless Prep Stations",
    role: "General Fit-Out Contractor",
    status: "Completed",
    verifiedRelationship: "Documented Commercial Client Project (PDF Page 21)",
    imageUrl: "/assets/images/project_commercial_kuya_j_1794254055188.jpg",
    highlights: [
      "High-output electrical load connection for commercial fryers",
      "Bespoke booth seating joinery with stain-resistant commercial upholstery",
      "Integrated POS and digital ordering infrastructure",
      "Mall mall-compliance inspection passed on first turnover run"
    ],
    description: "High-throughput commercial restaurant build delivered under strict mall tenant guidelines with durable finishes built for continuous heavy foot-traffic."
  },
  {
    id: "proj-com-03",
    title: "Kuya J Restaurant — SM City Sta. Rosa",
    category: "commercial",
    categoryLabel: "Commercial & Restaurant Fit-Out",
    location: "SM City Santa Rosa, Laguna",
    scope: "Complete Interior Remodeling, Acoustic Ceiling Installation, Kitchen Plumbing & Signage Works",
    floorArea: "230 sq.m",
    yearDuration: "42 Calendar Days (Completed)",
    constructionSystem: "Heavy Duty Commercial Kitchen Tile Beds, Custom Curved Wood Portal Arches",
    role: "General Fit-Out Contractor",
    status: "Completed",
    verifiedRelationship: "Documented Commercial Client Project (PDF Page 22)",
    imageUrl: "/assets/images/project_commercial_kuya_j_1794254055188.jpg",
    highlights: [
      "Custom warm walnut arched portal dividers",
      "Dual commercial grease trap drainage system",
      "Energy-efficient LED downlights and cove illumination",
      "Fast-track turnover coordinated with mall engineering management"
    ],
    description: "Full restaurant interior transformation delivering brand uniformity, warm contemporary hospitality ambiance, and high-efficiency culinary back-of-house workflow."
  },
  {
    id: "proj-infra-01",
    title: "Aviation Runway & Civil Pavement Rehabilitation",
    category: "infrastructure",
    categoryLabel: "Civil Infrastructure & Aviation",
    location: "Regional Airstrip / Airfield Facility, Luzon",
    scope: "Runway Surface Grading, Sub-Base Compaction, Heavy Asphalt Paving, Concrete Apron Works & Drainage Channels",
    yearDuration: "Multi-Phase Civil Works (Completed)",
    constructionSystem: "Crushed Aggregate Sub-Base with High-Bearing Heavy Aviation Asphalt Overlay",
    role: "Civil Infrastructure Specialist & Paving Contractor",
    status: "Completed",
    verifiedRelationship: "Verified Infrastructure Portfolio Documentation (PDF pp. 23-28)",
    imageUrl: "/assets/images/project_infrastructure_solar_1794254055468.jpg",
    highlights: [
      "Laser-guided grading achieving exact civil cross-slope drainage tolerances",
      "High-bearing asphaltic concrete resistant to jet fuel and thermal extremes",
      "Engineered stormwater culverts preventing runway ponding",
      "Mobilized dedicated heavy compaction rollers and asphalt spreaders"
    ],
    description: "Critical civil aviation infrastructure contract requiring rapid mobilization, rigorous core density testing, and adherence to aviation authority safety standards."
  },
  {
    id: "proj-infra-02",
    title: "Regional Flood Control, Dikes & Irrigation Canals",
    category: "infrastructure",
    categoryLabel: "Civil Infrastructure & Water Resources",
    location: "Agricultural & River Basins, Central Luzon",
    scope: "Earth Dike Revetment, Reinforced Concrete Slope Protection, Box Culverts & Irrigation Headworks",
    yearDuration: "18 Months (Completed)",
    constructionSystem: "Gabion Mattresses, Reinforced Concrete Retaining Walls, Geotextile Membrane Layering",
    role: "General Contractor for Civil Works",
    status: "Completed",
    verifiedRelationship: "Documented Public Works Accomplishment (PDF pp. 29-31)",
    imageUrl: "/assets/images/project_infrastructure_solar_1794254055468.jpg",
    highlights: [
      "Over 4.2 km of continuous reinforced riverbank slope protection",
      "Automated sluice gates for controlled wet-season agricultural irrigation",
      "Zero breach performance through subsequent typhoon seasons",
      "Heavy hydraulic excavator fleet deployment on sensitive riverbeds"
    ],
    description: "Protective civil engineering works that safeguard vulnerable agricultural municipalities against flash floods while stabilizing vital farming irrigation corridors."
  },
  {
    id: "proj-renew-01",
    title: "Utility-Scale Solar Farm Infrastructure & Grid Intertie",
    category: "renewable",
    categoryLabel: "Renewable Energy & Solar",
    location: "Clean Energy Corridor, Central / Northern Luzon",
    scope: "Site Preparation, Pile Driving of Solar Ground Racks, Inverter Station Housing, Access Roads & High-Voltage Interconnection",
    yearDuration: "12 Months (Completed & Active)",
    constructionSystem: "Galvanized Steel Ground-Mount Racks, Prefab Concrete Substation Pads, Heavy Gravel Access Arteries",
    role: "EPC Civil & Structural Partner",
    status: "Completed",
    verifiedRelationship: "Documented Renewable Energy Portfolio (PDF pp. 32-33)",
    imageUrl: "/assets/images/project_infrastructure_solar_1794254055468.jpg",
    highlights: [
      "Over 35,000 high-efficiency tier-1 photovoltaic panels mounted",
      "Engineered stormwater retention ponds and all-weather perimeter patrol roads",
      "Turnkey civil construction of MV/HV transformer switchyard enclosures",
      "Contribution to national renewable clean power generation goals"
    ],
    description: "Mega-scale clean energy installation demonstrating JZI's capacity to deploy civil engineering, structural pile driving, and electrical balance-of-system at utility scale."
  }
];

export const HEAVY_EQUIPMENT_FLEET: EquipmentItem[] = [
  {
    id: "eq-01",
    name: "Hydraulic Crawler Excavators (CAT 320 / Komatsu PC200)",
    category: "Earthmoving",
    modelOrType: "20-Ton Class Tracked Hydraulic Excavators",
    capacityOrPower: "1.0 - 1.2 cu.m Bucket / 150 HP Turbocharged",
    typicalUse: "Deep foundation excavation, trenching, riverbank desilting, site clearing",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-02",
    name: "Heavy Dump Trucks (10-Wheeler / 12-Wheeler)",
    category: "Hauling",
    modelOrType: "Isuzu Giga / Hino Profia Dump Units",
    capacityOrPower: "18 - 22 cu.m Payload / 380 HP",
    typicalUse: "Bulk aggregate transport, soil disposal, quarry materials hauling",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-03",
    name: "Articulated Wheel Loaders (CAT 950 / Komatsu WA320)",
    category: "Earthmoving",
    modelOrType: "Heavy Wheel Loaders",
    capacityOrPower: "3.2 cu.m Bucket Capacity / 195 HP",
    typicalUse: "Batch plant material charging, aggregate stockpiling, bulk loading",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-04",
    name: "Telescopic Mobile & Boom Cranes",
    category: "Lifting",
    modelOrType: "Tadano / Kato Hydraulic All-Terrain Cranes",
    capacityOrPower: "25 - 50 Metric Ton Lifting Capacity",
    typicalUse: "Structural steel erection, precast beam lifting, rooftop chiller hoisting",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-05",
    name: "Concrete Transit Mixers & Mobile Batching Support",
    category: "Concreting",
    modelOrType: "Heavy Commercial Concrete Agitator Units",
    capacityOrPower: "8 - 10 cu.m Drum Capacity",
    typicalUse: "Ready-mix structural concrete pours, foundation footings, highway slabs",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-06",
    name: "Heavy Vibratory Soil & Tandem Rollers",
    category: "Compaction",
    modelOrType: "Dynapac / Bomag Vibratory Compactor",
    capacityOrPower: "10 - 12 Ton Operating Weight / Dynamic Centrifugal Force",
    typicalUse: "Runway sub-base compaction, road embankment stabilization, asphalt surfacing",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-07",
    name: "Prime Power Industrial Diesel Generators",
    category: "Power & Dewatering",
    modelOrType: "Denyo / Cummins Silent Containerized Gensets",
    capacityOrPower: "150 kVA - 500 kVA Prime Output",
    typicalUse: "Continuous site power, tower crane operation, off-grid infrastructure sites",
    status: "Operational / Fleet Ready"
  },
  {
    id: "eq-08",
    name: "Precision Total Stations & GPS Survey Equipment",
    category: "Power & Dewatering",
    modelOrType: "Leica / Topcon Robotic Geospatial Systems",
    capacityOrPower: "Sub-millimeter EDM Accuracy / RTK Satellite Sync",
    typicalUse: "Building layout staking, boundary verification, grade monitoring",
    status: "Operational / Fleet Ready"
  }
];

export const CORPORATE_CREDENTIALS: CredentialItem[] = [
  {
    id: "cred-01",
    title: "Certificate of Incorporation",
    issuingAuthority: "Securities and Exchange Commission (SEC)",
    category: "Corporate Legal Entity",
    registrationNumberMasked: "CS2026•••••• (Verified Active)",
    verificationStatus: "Verified & Active",
    scopeNote: "Authorized corporate charter for general contracting, engineering, and architectural services in the Republic of the Philippines."
  },
  {
    id: "cred-02",
    title: "General Building & Engineering Contractor's License",
    issuingAuthority: "Philippine Contractors Accreditation Board (PCAB)",
    category: "Construction Authority License",
    registrationNumberMasked: "PCAB Lic. No. •••••• (Current Cycle)",
    verificationStatus: "Renewed & In Good Standing",
    scopeNote: "Authorized classification for General Building, Civil Infrastructure, Structural Paving, and Electromechanical Works."
  },
  {
    id: "cred-03",
    title: "Certificate of Tax Registration & Clearances",
    issuingAuthority: "Bureau of Internal Revenue (BIR)",
    category: "National Tax Compliance",
    registrationNumberMasked: "TIN: •••-•••-•••-000",
    verificationStatus: "Verified & Active",
    scopeNote: "Full tax clearance, VAT registered, compliant with all withholding and fiscal reporting obligations."
  },
  {
    id: "cred-04",
    title: "Mayor's Permit & Business Licensing Clearance",
    issuingAuthority: "City Business Permits and Licensing Office (BPLO)",
    category: "Local Government Compliance",
    registrationNumberMasked: "BPLO Permit No. 2026-••••••",
    verificationStatus: "Verified & Active",
    scopeNote: "Annual municipal operating license for headquarters, engineering offices, and logistical dispatch."
  },
  {
    id: "cred-05",
    title: "PhilGEPS Platinum Membership Certificate",
    issuingAuthority: "Philippine Government Electronic Procurement System",
    category: "Government Procurement Accreditation",
    registrationNumberMasked: "Platinum Reg. #2026-••••••",
    verificationStatus: "Verified & Active",
    scopeNote: "Eligible for public bidding across local and national civil infrastructure, flood control, and educational buildings."
  },
  {
    id: "cred-06",
    title: "Approved Construction Safety & Health Program (CSHP)",
    issuingAuthority: "Department of Labor and Employment (DOLE - BWC)",
    category: "Occupational Safety Standard",
    registrationNumberMasked: "DOLE-CSHP-2026-••••",
    verificationStatus: "Verified & Active",
    scopeNote: "Site safety management programs conforming to DOLE Department Order No. 13 standards with certified safety officers."
  }
];

export interface InquirySubmission {
  id: string;
  referenceNo: string;
  fullName: string;
  companyName?: string;
  email: string;
  contactNumber: string;
  projectType: string;
  projectLocation: string;
  lotArea?: string;
  estimatedFloorArea?: string;
  budgetRange?: string;
  targetTimeline: string;
  projectDescription: string;
  drawingFileName?: string;
  status: 'New' | 'In Review' | 'Quoted' | 'Scheduled Site Visit' | 'Archived';
  submittedAt: string;
  notes?: string;
}
