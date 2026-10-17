// Transcribed directly from NWVSA's Zero-Tolerance policy doc (Google Docs).
// Unlike constitutionContent.js, this wasn't run through an automated
// extraction: the source doc is short, mostly flat (no deep nested
// numbering), and has no real heading tags at all (its section titles are
// just bold paragraphs) — so hand transcription was more reliable than
// building another extraction pass for a different, inconsistent document
// shape.
//
// A few bare "Term is defined as..." paragraphs are reformatted as labeled
// list items (e.g. "Bullying — repeated, persistent...") for scannability on
// a web page, and some organizational subheadings are added where the source
// only had a bold lead-in sentence (e.g. "Definitions", "Categories of
// Harassment") — a presentational grouping, not a change to any wording.
// Every definition, example, and clause keeps its exact original text.

const li = (text, children = []) => ({ text, children });

export const ZERO_TOLERANCE_BLOCKS = [
  { type: "heading", level: 1, text: "Zero Tolerance Policy" },
  {
    type: "para",
    text: "The Northwest Vietnamese Student Association (NWVSA) is committed to providing an environment free from bullying, discrimination, and harassment based on any other characteristic protected by federal, state, or local employment discrimination laws.",
  },
  {
    type: "para",
    text: "NWVSA has adopted a zero-tolerance policy toward bullying, discrimination and all forms of unlawful harassment. This zero-tolerance policy means that no form of unlawful bullying, discrimination or harassing conduct by or towards any staff, member, vendor, or other person in our organization or event will be tolerated. NWVSA is committed to enforcing its policy at all levels within the organization. Any officer, director, staff, volunteer, or member who engages in prohibited bullying, discrimination or harassment will be subject to discipline, up to and including immediate discharge from NWVSA events or removal from leadership positions with first offense.",
  },

  { type: "heading", level: 2, text: "Definitions" },
  {
    type: "list",
    ordered: false,
    items: [
      li("Bullying — repeated, persistent, unreasonable behavior by one or more people, directed towards another individual or group of individuals, that creates a risk to their health and safety. This can include a range of behaviors over time. Bullying can be carried out verbally, physically or in writing."),
      li("Cyberbullying — sending, posting, or sharing negative, harmful, false, or mean content about someone else. It can include sharing personal or private information about someone else causing embarrassment or humiliation. Some cyberbullying crosses the line into unlawful or criminal behavior."),
      li("Physical Bullying — hurting a person's body or possessions. Examples include, but are not limited to, hitting, spitting, tripping, or making rude or mean hand gestures."),
      li("Verbal Bullying — saying or writing mean things. Examples include, but are not limited to, threatening, name calling, or unwarranted sexual comments."),
      li("Social Bullying — leaving someone out on purpose. Examples include, but are not limited to, telling others to not befriend an individual, spreading rumors, or purposefully embarrassing an individual."),
      li("Discrimination — when an individual or individuals are treated unfairly because they belong to a particular group of people or have a particular characteristic."),
    ],
  },

  { type: "heading", level: 2, text: "Examples of Discrimination" },
  { type: "para", text: "Examples of discrimination are, but are not limited to:" },
  {
    type: "list",
    ordered: false,
    items: [
      li("Age"), li("Disability"), li("Physical features"),
      li("Political belief or activity"),
      li("Race (including color, nationality, ethnicity and ethnic origin)"),
      li("Religious belief"), li("Sexual orientation"), li("Gender identity"), li("Hate speech"),
    ],
  },

  { type: "heading", level: 2, text: "Harassment" },
  {
    type: "para",
    text: "Harassment is defined as any unwanted and uncoerced physical or verbal conduct that offends, humiliates, or creates an environment for the recipient that interferes with their ability to work and learn or leads to adverse job-related consequences, and that any reasonable person ought to have known would be unwelcome.",
  },
  {
    type: "para",
    text: "Examples of harassment include, but are not limited to, racial or sexual slurs, name calling, racist or sexist jokes, negative stereotyping, physical assault, bullying, threats, demeaning pictures, posters and graffiti.",
  },
  {
    type: "para",
    text: "Harassment includes the following categories of behavior, whether the behavior occurs once or multiple times:",
  },

  { type: "heading", level: 3, text: "1. Discriminatory Behavior" },
  {
    type: "para",
    text: "Discrimination refers to treating people differently, negatively, or adversely because of one or more of the following prohibited grounds of discrimination: race, color, ancestry, place of origin, political belief, religion, age, sex, sexual orientation, marital status, family status, physical or mental disability, personal appearance, veteran status, pardoned criminal conviction, or any other legally protected characteristic.",
  },

  { type: "heading", level: 3, text: "2. Personal Harassment" },
  {
    type: "para",
    text: "Personal harassment includes ostracizing, shunning, and other forms of uncivil conduct made on either a one-time or continuous basis that demeans, belittles, or causes personal intimidating, humiliating, hostile, or offensive work environments for the recipient. It may or may not be linked to discriminatory behavior.",
  },

  { type: "heading", level: 3, text: "3. Sexual Harassment" },
  {
    type: "para",
    text: "Sexual harassment refers to any conduct, comment, gesture, or contact of a sexual nature, whether on a one-time basis or a series of incidents, that might reasonably be expected to cause offence or humiliation or that might reasonably be perceived as placing a condition of a sexual nature on employment and volunteering, an opportunity for training or promotion, receipt of services, or a contract.",
  },
  {
    type: "para",
    text: "Examples of behavior that can constitute sexual harassment include, but are not limited to:",
  },
  {
    type: "list",
    ordered: false,
    items: [
      li("Unwanted touching, hugging, patting or leering"),
      li("Verbal or written conduct such as derogatory comments, slurs, epithets, notes, messages, invitations, or jokes"),
      li("Sexual assault"),
      li("Sexual propositions"),
      li("Inquiries or comments about a person's sex life"),
      li("Telephone calls with sexual overtones"),
      li("Gender-based insults or jokes causing embarrassment or humiliation"),
      li("Repeated unwanted social or sexual invitations"),
      li("Inappropriate or unwelcome focus/comments on a person's physical attributes or appearance"),
      li("Offensive message or comments transmitted by e-mail or another messaging system"),
      li("Offensive or suggestive images or graphics whether physically present in the workplace/event or accessed over the Internet; or the possession of or use of sexually suggestive objects"),
      li("Offensive and unwelcome conduct of a sexual nature, including sexually graphic spoken comments"),
    ],
  },

  { type: "heading", level: 3, text: "4. Bullying" },
  {
    type: "para",
    text: "Bullying consists of behavior to attack and diminish another by subjecting the recipient to unjustified criticism and trivial fault-finding, humiliating the recipient (especially in front of others), and/or ignoring, overruling, isolating and excluding the recipient.",
  },

  { type: "heading", level: 3, text: "Abuse of Authority" },
  {
    type: "para",
    text: "Abuse of Authority refers to an individual improperly using the power and authority inherent in a position to endanger a person's job, undermine the performance of that job, or in any way interfere with or influence a person's job. It is the exercise of authority in a manner that serves no legitimate work purpose and ought reasonably to be known to be inappropriate.",
  },
  {
    type: "para",
    text: "Examples of abuse of authority include, but are not limited to, such acts or misuse of power as intimidation, threats, blackmail, or coercion.",
  },

  { type: "heading", level: 3, text: "5. Poisoned Work Environment" },
  {
    type: "para",
    text: "A poisoned work environment is characterized by an activity or behavior, not necessarily directed at anyone in particular, that creates a hostile or offensive workplace.",
  },
  {
    type: "para",
    text: "Examples of a poisoned work environment include but are not limited to: graffiti, sexual, racial or religious insults or jokes, abusive treatment of an employee, and the display of pornographic or other offensive material.",
  },

  { type: "heading", level: 2, text: "Procedures in Cases of Bullying, Discrimination, or Harassment" },
  {
    type: "para",
    text: "Any NWVSA member who feels that he/she/they/e/ey/xe/ve/zie has been subjected to or knows an individual who has been subjected to any form of bullying, discrimination, or harassment of any kind has the responsibility to report the incident(s) immediately to NWVSA Executive Board (eboard@nwvsa.org). If the member is uncomfortable reporting the incident(s) to NWVSA Executive Board (whether because an Executive Board member has committed the harassment, or for any other reason whatsoever), the member must report the incident(s) to the NWVSA Board of Directors (bod@nwvsa.org).",
  },
  {
    type: "para",
    text: "NWVSA is committed to taking all reasonable steps to prevent bullying, discrimination, or harassment. NWVSA will make every reasonable effort promptly and completely to address and correct any incident(s) that may occur. However, NWVSA cannot take prompt and effective remedial action unless each NWVSA member assumes the responsibility of reporting any incident(s) of bullying, discrimination, or harassment immediately to the NWVSA Executive Board.",
  },
  {
    type: "para",
    text: "Every report of bullying, discrimination, or harassment will be investigated promptly and impartially, with every effort to maintain confidentiality. The complainant and the accused will be informed of the results of the investigation. If NWVSA finds that its policy has been violated, it will take appropriate corrective and remedial action, up to and including discharge of offending officers, staff, or volunteers, and/or similarly appropriate action towards offending vendors, contractors, or members.",
  },

  { type: "heading", level: 2, text: "Reporting Without Fear of Retaliation" },
  {
    type: "para",
    text: "No NWVSA officer, director, or staff is authorized, or permitted, to retaliate or to take any adverse action whatsoever against anyone for reporting unlawful bullying, discrimination, or harassment or for opposing any other discriminatory practice in the organization. This no-retaliation policy applies whether a good faith complaint of bullying, discrimination, or harassment is well founded or ultimately determined to be unfounded.",
  },
  {
    type: "para",
    text: "Retaliation is against the law and this policy prohibits retaliation of any kind against individuals who file valid complaints or who participate in an investigation.",
  },
];
