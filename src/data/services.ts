// src/data/services.ts

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceType {
  name: string;
  description: string;
}

export interface ServiceDetails {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  serviceTypes?: ServiceType[]; // We added this new optional property!
  documents: string[];
  mistakes: string[];
  faqs: FAQ[];
}

export const servicesData: ServiceDetails[] = [
  // ==========================================
  // TAXATION & FINANCIAL FILINGS
  // ==========================================
  {
    id: "income-tax-return",
    title: "Income Tax Return (ITR) Filing",
    category: "Taxation & Financial Filings",
    shortDescription:
      "E-filing for salaried persons, freelancers, and businesses with max tax savings.",
    fullDescription:
      "Filing your Income Tax Return (ITR) is an annual legal obligation that also serves as a critical financial document for loan approvals and visa processing. Our expert professionals ensure your ITR is filed accurately, minimizing tax liability through strategic deductions.",
    serviceTypes: [
      {
        name: "ITR-1 (Sahaj)",
        description:
          "For resident individuals with income up to ₹50 Lakhs from salary, one house property, and other sources.",
      },
      {
        name: "ITR-3",
        description:
          "For individuals and HUFs having income from a proprietary business or profession.",
      },
      {
        name: "ITR-4 (Sugam)",
        description:
          "For individuals, HUFs, and Firms with presumptive business income up to ₹2 Crores.",
      },
      {
        name: "ITR-6 & ITR-7",
        description:
          "For corporate companies, trusts, and non-profit organizations.",
      },
    ],
    documents: [
      "Form 16 (for salaried individuals)",
      "Form 26AS and Annual Information Statement (AIS)",
      "Bank Statements for the financial year",
      "Aadhaar Card and PAN Card",
      "Investment Proofs (LIC, PPF, Mutual Funds under Section 80C)",
      "Home Loan Interest Certificate (if applicable)",
    ],
    mistakes: [
      "Forgetting to verify the ITR via Aadhaar OTP within 30 days of filing.",
      "Hiding or forgetting to declare interest income from savings accounts and FDs.",
      "Choosing the wrong ITR form (e.g., filing ITR-1 instead of ITR-3 for business income).",
      "Not reconciling income data with Form 26AS and the AIS portal.",
    ],
    faqs: [
      {
        question: "What happens if I miss the ITR filing deadline?",
        answer:
          "Filing after the due date attracts a penalty of up to ₹5,000 under Section 234F, along with penal interest on any unpaid tax amount.",
      },
      {
        question: "Do I need to file ITR if my income is below ₹2.5 Lakhs?",
        answer:
          "While not legally mandatory, it is highly recommended to file a 'Nil Return'. It helps in getting loans, claiming TDS refunds, and serves as standard income proof.",
      },
    ],
  },
  {
    id: "gst-return-filing",
    title: "GST Return Filing",
    category: "Taxation & Financial Filings",
    shortDescription:
      "Monthly and quarterly GSTR-1, GSTR-3B, and annual GSTR-9 filings.",
    fullDescription:
      "Timely GST return filing is crucial to avoid heavy penalties and cancellation of your GSTIN. We handle GSTR-1, GSTR-3B, and annual GSTR-9 filings. Our team meticulously reconciles your purchase data with GSTR-2A/2B to ensure you claim 100% of your eligible Input Tax Credit (ITC).",
    documents: [
      "Sales invoices (B2B and B2C)",
      "Purchase invoices for claiming ITC",
      "Bank statements for the filing period",
      "Credit and Debit notes issued during the month",
    ],
    mistakes: [
      "Failing to reconcile GSTR-3B with GSTR-2B, leading to ITC loss or department notices.",
      "Not filing a NIL return when there are no sales or purchases.",
      "Classifying B2B sales as B2C, denying your buyer their ITC.",
    ],
    faqs: [
      {
        question: "Is there a penalty for late filing of GST returns?",
        answer:
          "Yes, a late fee of ₹50 per day (₹20 per day for NIL returns) is applicable, plus 18% per annum interest on the tax shortfall.",
      },
      {
        question: "Can I revise a GST return once filed?",
        answer:
          "No, GST returns cannot be revised once filed. Any errors must be corrected in the subsequent month's return.",
      },
    ],
  },
  {
    id: "tds-tcs-returns",
    title: "TDS & TCS Returns",
    category: "Taxation & Financial Filings",
    shortDescription:
      "Quarterly TDS/TCS statement preparation and Form 16/16A generation.",
    fullDescription:
      "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) compliances require businesses to deduct tax on specific payments like salary, rent, and professional fees. We ensure accurate calculation, timely deposit of challans, quarterly return filing, and generation of TDS certificates.",
    documents: [
      "TAN (Tax Deduction and Collection Account Number) Certificate",
      "PAN of all deductees (employees/vendors)",
      "Details of TDS/TCS challans paid",
      "Invoice and payment details where TDS was deducted",
    ],
    mistakes: [
      "Deducting TDS at a higher 20% rate because the vendor did not provide a valid PAN.",
      "Failing to deposit the deducted TDS by the 7th of the following month.",
      "Entering incorrect challan details (BSR code or challan serial number) in the return.",
    ],
    faqs: [
      {
        question: "What is the penalty for late TDS filing?",
        answer:
          "A penalty of ₹200 per day is levied under section 234E until the return is filed, limited to the total TDS amount.",
      },
    ],
  },
  {
    id: "roc-compliance",
    title: "ROC Compliance & Filing",
    category: "Taxation & Financial Filings",
    shortDescription:
      "Annual ROC filings, director KYC, and statutory compliance for companies.",
    fullDescription:
      "Every Private Limited Company, OPC, and LLP must file annual returns with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA). Our services include filing AOC-4 (Financial Statements), MGT-7 (Annual Return), Director KYC (DIR-3), and maintaining mandatory statutory registers.",
    documents: [
      "Audited Financial Statements (Balance Sheet & P&L)",
      "Notice of AGM and Director's Report",
      "Digital Signature Certificate (DSC) of Directors",
      "Statutory Audit Report from a CA",
    ],
    mistakes: [
      "Delaying the Annual General Meeting (AGM) beyond September 30th.",
      "Failing to file Director KYC annually, leading to director disqualification.",
    ],
    faqs: [
      {
        question:
          "Does a Private Limited Company with zero turnover need to file ROC?",
        answer:
          "Yes, ROC compliance is mandatory for all registered companies, even if the turnover is zero. Failure to file can lead to the company being struck off.",
      },
    ],
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    category: "Taxation & Financial Filings",
    shortDescription:
      "End-to-end salary processing, PF/ESIC compliance, and pay-slip generation.",
    fullDescription:
      "Managing employee salaries, tax deductions, and statutory compliances like EPF, ESIC, and Professional Tax can be complex. We provide comprehensive payroll management services, ensuring accurate salary calculations and compliant payslips for your workforce.",
    documents: [
      "Employee KYC details (Aadhaar, PAN, Bank Details)",
      "Monthly attendance and leave records",
      "Company PF and ESIC registration certificates",
    ],
    mistakes: [
      "Calculating PF on gross salary instead of basic pay, leading to excess payouts.",
      "Delaying PF and ESIC challan payments past the 15th of the month.",
    ],
    faqs: [
      {
        question: "When is EPF registration mandatory?",
        answer:
          "EPF registration becomes mandatory when your business headcount reaches 20 employees.",
      },
    ],
  },

  // ==========================================
  // BUSINESS SETUP & REGISTRATIONS
  // ==========================================
  {
    id: "gst-registration",
    title: "GST Registration",
    category: "Business Setup & Registrations",
    shortDescription:
      "Fast-track online GST state registration for all business types.",
    fullDescription:
      "Under the GST regime, businesses whose turnover exceeds the statutory limit must register as a taxable person. We provide a hassle-free, fully online GST registration service, ensuring you get your GSTIN quickly so you can legally collect taxes and claim input tax credits.",
    serviceTypes: [
      {
        name: "Normal Taxpayer",
        description:
          "Standard registration for businesses with turnover exceeding the threshold limit. Allows claiming of Input Tax Credit (ITC).",
      },
      {
        name: "Composition Scheme",
        description:
          "Simplified scheme for small businesses (turnover up to ₹1.5 Cr) offering a fixed, lower tax rate but no ITC benefits.",
      },
      {
        name: "Casual Taxable Person",
        description:
          "Temporary registration for individuals/businesses occasionally making taxable supplies in a state where they have no fixed place of business.",
      },
      {
        name: "Non-Resident Taxable Person",
        description:
          "For individuals/businesses residing outside India but occasionally supplying goods or services within India.",
      },
    ],
    documents: [
      "PAN Card of the Business or Applicant",
      "Aadhaar Card of the Proprietor/Partners/Directors",
      "Address Proof of the Place of Business (Rent agreement, Electricity bill)",
      "Bank Account Statement or Cancelled Cheque",
    ],
    mistakes: [
      "Using an incorrect SAC/HSN code for your specific goods or services.",
      "Providing mismatched address details between the rent agreement and electricity bill.",
      "Not linking the Aadhaar card with the phone number for OTP verification.",
    ],
    faqs: [
      {
        question: "Is it mandatory to register for GST?",
        answer:
          "It is mandatory if your aggregate annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in special category states) or ₹20 Lakhs for services.",
      },
      {
        question: "How long does it take to get the GSTIN?",
        answer:
          "Once all accurate documents are submitted, the GST department usually takes 3 to 7 working days to issue the GSTIN.",
      },
    ],
  },
  {
    id: "company-registration",
    title: "Company Registration",
    category: "Business Setup & Registrations",
    shortDescription: "Pvt Ltd, LLP, OPC, and Partnership firm incorporation.",
    fullDescription:
      "Choosing the right legal structure is the foundation of a successful business. We handle end-to-end incorporation of companies, secure your company name, draft the MOA & AOA, and obtain your PAN/TAN simultaneously.",
    serviceTypes: [
      {
        name: "Private Limited Company",
        description:
          "Ideal for growing businesses and startups looking to raise funding. Limits shareholder liability.",
      },
      {
        name: "Limited Liability Partnership (LLP)",
        description:
          "Combines the benefits of a partnership and a company. Lower compliance requirements.",
      },
      {
        name: "One Person Company (OPC)",
        description:
          "Perfect for solo entrepreneurs who want limited liability protection without needing a partner.",
      },
      {
        name: "Partnership Firm",
        description:
          "A traditional business structure governed by a partnership deed between two or more individuals.",
      },
    ],
    documents: [
      "PAN and Aadhaar Card of all proposed Directors/Partners",
      "Recent passport-sized photographs",
      "Utility bill (Electricity/Water) for the Registered Office Address",
      "NOC from the owner of the premises",
    ],
    mistakes: [
      "Choosing a company name that closely resembles an existing registered trademark.",
      "Using a residential address without a proper NOC from the landlord.",
    ],
    faqs: [
      {
        question:
          "How many directors are required for a Private Limited Company?",
        answer:
          "A minimum of 2 directors and a maximum of 15 directors are required. At least one director must be an Indian resident.",
      },
    ],
  },
  {
    id: "msme-registration",
    title: "MSME / Udyam Registration",
    category: "Business Setup & Registrations",
    shortDescription:
      "Unlock government subsidies and tender benefits with official MSME certificates.",
    fullDescription:
      "Udyam Registration allows micro, small, and medium enterprises to access numerous government schemes, including collateral-free bank loans, subsidy on barcode registrations, and protection against delayed payments. We process your Udyam certificate swiftly.",
    serviceTypes: [
      {
        name: "Micro Enterprise",
        description:
          "Investment in Plant and Machinery up to ₹1 Crore and turnover up to ₹5 Crores.",
      },
      {
        name: "Small Enterprise",
        description:
          "Investment in Plant and Machinery up to ₹10 Crores and turnover up to ₹50 Crores.",
      },
      {
        name: "Medium Enterprise",
        description:
          "Investment in Plant and Machinery up to ₹50 Crores and turnover up to ₹250 Crores.",
      },
    ],
    documents: [
      "Aadhaar Number of the applicant (linked to mobile)",
      "PAN Number of the business",
      "Bank Account details (Account number and IFSC code)",
      "Details of main business activity and NIC codes",
    ],
    mistakes: [
      "Entering manufacturing NIC codes for a service-based business or vice versa.",
      "Failing to update investment and turnover details if the business grows.",
    ],
    faqs: [
      {
        question: "Is MSME/Udyam Registration valid for a lifetime?",
        answer:
          "Yes, the Udyam Registration Certificate is valid for a lifetime and does not require renewal.",
      },
    ],
  },
  {
    id: "startup-india",
    title: "Startup India Registration",
    category: "Business Setup & Registrations",
    shortDescription:
      "DPIIT recognition to gain tax exemptions and investor advantages.",
    fullDescription:
      "Getting recognized under the DPIIT Startup India initiative opens doors to Angel Tax exemptions, 3-year income tax holidays, and easier public procurement norms. We help innovative businesses draft their pitches and secure official Startup India recognition.",
    documents: [
      "Certificate of Incorporation",
      "Brief write-up on the innovative nature of the business/products",
      "Pitch deck or business plan",
      "Website link or video of the product/service in action",
    ],
    mistakes: [
      "Applying with a traditional business model (trading/consulting) lacking innovation.",
      "Providing a weak pitch deck that fails to explain scalability.",
    ],
    faqs: [
      {
        question: "Are proprietorship firms eligible for Startup India?",
        answer:
          "No, only Private Limited Companies, LLPs, and Registered Partnership Firms are eligible for DPIIT recognition.",
      },
    ],
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration",
    category: "Business Setup & Registrations",
    shortDescription:
      "Protect your brand name, logo, and identity with expert filing.",
    fullDescription:
      "A trademark protects your unique brand name, logo, or slogan from being copied by competitors. We conduct comprehensive trademark searches, correctly classify your goods/services, and file your application.",
    serviceTypes: [
      {
        name: "Word Mark",
        description:
          "Protects the text/name of your brand exclusively, regardless of font or style.",
      },
      {
        name: "Device Mark (Logo)",
        description:
          "Protects a specific logo design, symbol, or combined text-and-graphic element.",
      },
    ],
    documents: [
      "Logo image or wordmark details",
      "Identity proof of the applicant",
      "Certificate of Incorporation (if applying under a company name)",
      "MSME/Udyam Certificate (to claim a 50% discount on Govt filing fees)",
    ],
    mistakes: [
      "Trying to trademark highly generic or descriptive words.",
      "Filing under the wrong trademark class, leaving the brand unprotected in its actual industry.",
    ],
    faqs: [
      {
        question: "How soon can I use the ™ symbol?",
        answer:
          "You can start using the ™ symbol immediately after we file the application.",
      },
    ],
  },

  // ==========================================
  // CERTIFICATIONS & BUSINESS REPORTS
  // ==========================================
  {
    id: "fssai-license",
    title: "FSSAI Food License",
    category: "Certifications & Business Reports",
    shortDescription:
      "Basic, State, and Central FSSAI registrations for food businesses.",
    fullDescription:
      "Any business involved in the manufacturing, processing, packaging, storage, or distribution of food must obtain an FSSAI license. Whether you are running a home kitchen or a large manufacturing unit, we help you secure the correct license swiftly.",
    serviceTypes: [
      {
        name: "Basic Registration",
        description:
          "For petty food business operators with an annual turnover of up to ₹12 Lakhs (e.g., small stalls, home kitchens).",
      },
      {
        name: "State License",
        description:
          "For medium-sized food businesses with a turnover between ₹12 Lakhs and ₹20 Crores.",
      },
      {
        name: "Central License",
        description:
          "For large food businesses (turnover > ₹20 Crores), importers, and businesses operating in multiple states.",
      },
    ],
    documents: [
      "Passport-sized photograph of the applicant",
      "Government-issued ID proof (Aadhaar/Voter ID)",
      "Proof of address of the business premises",
      "List of food products to be manufactured/sold",
    ],
    mistakes: [
      "Applying for a Basic Registration when your turnover requires a State License.",
      "Operating multiple branches on a single FSSAI license (each premise needs a separate license).",
    ],
    faqs: [
      {
        question: "Do cloud kitchens and Swiggy/Zomato sellers need FSSAI?",
        answer:
          "Yes, it is absolutely mandatory. Food delivery platforms will not onboard your business without a valid FSSAI registration.",
      },
    ],
  },
  {
    id: "project-report",
    title: "Project Report for Bank Loans",
    category: "Certifications & Business Reports",
    shortDescription:
      "CMA Data and detailed project viability reports for quick loan approvals.",
    fullDescription:
      "Securing a term loan or working capital (CC/OD limit) requires presenting a robust financial case to the bank. We prepare detailed Project Reports and CMA Data aligned with banking standards to maximize approval chances.",
    documents: [
      "Last 3 years Audited Financials (Balance Sheet & P&L)",
      "Last 3 years Income Tax Returns (ITR)",
      "Current Bank Account Statements",
      "Quotations for machinery/assets to be purchased",
    ],
    mistakes: [
      "Presenting overly aggressive and unrealistic revenue projections.",
      "Failing to maintain a healthy Debt Service Coverage Ratio (DSCR) in the projections.",
    ],
    faqs: [
      {
        question: "Why do banks ask for CMA data?",
        answer:
          "CMA data helps bank managers analyze your past financial performance and evaluate your future repayment capacity before sanctioning a loan.",
      },
    ],
  },
  {
    id: "iec-code",
    title: "IEC (Import Export Code)",
    category: "Certifications & Business Reports",
    shortDescription:
      "Lifetime DGFT Import Export Code registration for global trade.",
    fullDescription:
      "If you plan to import goods into India or export products/services globally, an Import Export Code (IEC) issued by the DGFT is mandatory. We facilitate fast and error-free IEC registration.",
    documents: [
      "PAN Card of the individual or company",
      "Aadhaar Card or Passport of the applicant",
      "Cancelled cheque or Bank Certificate",
      "Address proof of the business premise",
    ],
    mistakes: [
      "Mismatch of the business name on the PAN card and the bank account.",
      "Failing to update the IEC profile annually on the DGFT portal (which leads to deactivation).",
    ],
    faqs: [
      {
        question: "Do I need to file monthly returns for IEC?",
        answer:
          "No, there are no monthly returns. However, the IEC profile must be updated electronically every year between April and June.",
      },
    ],
  },
  {
    id: "iso-certification",
    title: "ISO Certification",
    category: "Certifications & Business Reports",
    shortDescription:
      "Quality management system certifications to build customer credibility.",
    fullDescription:
      "ISO Certifications demonstrate to clients and government bodies that your business follows strict international standards. We assist with the documentation, audit preparation, and issuance of IAF-approved ISO certificates.",
    documents: [
      "Business Registration Proof (GST/Incorporation Cert)",
      "Company Profile and Scope of Business",
      "Sales/Purchase Invoices",
    ],
    mistakes: [
      "Purchasing 'non-IAF' ISO certificates for government tenders, which are often rejected.",
      "Getting certified but failing to implement the actual quality processes in the workplace.",
    ],
    faqs: [
      {
        question: "Which ISO certificate is best for a general business?",
        answer:
          "ISO 9001:2015 (Quality Management System) is the most universally recognized standard applicable to almost any manufacturing or service business.",
      },
    ],
  },
  {
    id: "pwd-registration",
    title: "PWD Contractor Registration",
    category: "Certifications & Business Reports",
    shortDescription:
      "Enlistment services for government civil and PWD tender bidding.",
    fullDescription:
      "To bid for government construction, civil, or electrical projects, businesses must be enlisted as contractors with the Public Works Department (PWD). We guide contractors through the complex paperwork and financial solvency requirements.",
    documents: [
      "Bank Solvency Certificate",
      "Work Experience/Completion Certificates",
      "ITR and Audited Balance Sheets for the last 3 years",
      "GST Registration Certificate",
    ],
    mistakes: [
      "Applying for a higher Class of registration without meeting the minimum financial turnover criteria.",
      "Submitting an expired bank solvency certificate.",
    ],
    faqs: [
      {
        question: "What is a Bank Solvency Certificate?",
        answer:
          "It is a document issued by your bank manager certifying your financial stability and the bank's trust in your business, required for PWD enlistment.",
      },
    ],
  },
];
