// Transcribed directly from NWVSA's Zero-Tolerance and COVID-19 Safety policy
// docs (Google Docs). Unlike constitutionContent.js, these weren't run
// through an automated extraction: both source docs are short, mostly flat
// (no deep nested numbering), and the Zero-Tolerance doc has no real heading
// tags at all (its section titles are just bold paragraphs) — so hand
// transcription was more reliable than building another extraction pass for
// a different, inconsistent document shape.
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

export const COVID_BLOCKS = [
  { type: "heading", level: 1, text: "2026 NWVSA Camp Solstice: COVID-19 Policy" },
  {
    type: "para",
    text: "Effective Date: July 1, 2026 · Last Revision: June 23, 2026",
  },
  {
    type: "para",
    text: "On behalf of the 2026 NWVSA Camp Solstice Team and the NWVSA Executive Board: we are excited to welcome you to Mayfield, Washington, for the 2026 NWVSA Camp Solstice. The health and safety of our attendees, staff, and guests remain a priority. While we acknowledge the ever-evolving nature of the COVID-19 pandemic, we have updated our policies to reflect current circumstances and promote a responsible and inclusive environment for all participants.",
  },

  { type: "heading", level: 2, text: "Safety Guidelines" },
  {
    type: "list",
    ordered: false,
    items: [
      li("Vaccination Requirement: all attendees are required to be vaccinated against COVID-19. While we no longer require proof of vaccination to be submitted, you will be required to fill out an attestation form. Though not a requirement, it is highly recommended to receive the booster shot."),
      li("COVID-19 Testing: NWVSA will no longer enforce mandatory COVID-19 PCR or rapid antigen testing prior to the event. We highly encourage you to test for COVID-19 prior to traveling to Camp Solstice as an added safety precaution."),
      li("Illness Precautions: if you are feeling sick or have symptoms of any illness (including but not limited to COVID-19), please exercise proper precautions. These may include staying home, masking, and limiting contact with others to avoid spreading illness."),
      li("Masking: masking is optional and left to the discretion of each attendee. However, we highly encourage masking in indoor spaces and crowded settings for those who feel more comfortable doing so."),
    ],
  },

  { type: "heading", level: 2, text: "On-Site Support" },
  {
    type: "para",
    text: "During the camp, the NWVSA team will have a limited number of COVID-19 rapid antigen tests available for attendees who develop symptoms. Should you begin to feel unwell:",
  },
  {
    type: "list",
    ordered: true,
    items: [
      li("Notify our hospitality team immediately. You can contact them directly or through your family leaders."),
      li("Return to your room promptly."),
      li("A staff member will assist you with further steps, including testing with one of our on-site kits if necessary."),
    ],
  },

  { type: "heading", level: 2, text: "Liability Disclaimer" },
  {
    type: "para",
    text: "NWVSA is not liable for any illness, including COVID-19, contracted during the 2026 NWVSA Camp Solstice. Additionally, NWVSA is not responsible for reimbursing any expenses incurred as a result of illness, inability to attend programming, or lack of preparation.",
  },
  {
    type: "para",
    text: "We trust that all attendees will do their part to prioritize the health and safety of the community by following these guidelines. Thank you for your cooperation and commitment to making the 2026 NWVSA Camp Solstice a safe and enriching experience for everyone.",
  },

  { type: "heading", level: 1, text: "Waiver Form" },
  {
    type: "para",
    text: "By signing this agreement relating to the event 2026 NWVSA Camp Solstice from August 28, 2026 to August 30, 2026, attendees acknowledge and agree to the following:",
  },
  {
    type: "list",
    ordered: true,
    items: [
      li("I acknowledge the contagious nature of COVID-19 and voluntarily assume the risk that I may be exposed to or infected by COVID-19 by attending 2026 NWVSA Camp Solstice and that such exposure or infection may result in personal injury, illness, permanent disability, and/or death. I understand that the risk of becoming exposed to or infected by COVID-19 at 2026 NWVSA Camp Solstice may result from the actions, omissions, or negligence of myself and others, including, but not limited to, NWVSA Camp Crews, program participants and their families. By signing this, I acknowledge that we have no perfect plan to fully prevent the spread of COVID-19, and that there will always be an inherent risk with holding an in person event. The 2026 NWVSA Camp Solstice Crews will do our best to create an event that is as safe as possible."),
      li("I voluntarily agree to assume all of the foregoing risks and accept sole responsibility for any injury to myself (including, but not limited to, personal injury, disability, and death), illness, damage, loss, claim, liability, or expense, of any kind, that I may experience or incur in connection with my participation in events held by or associated with NWVSA. I hereby release, covenant not to sue, discharge, and hold harmless NWVSA, its volunteers, contract workers, agents, and representatives, including all liabilities, claims, actions, damages, costs or expenses of any kind arising out of or relating thereto. I understand and agree that this release includes any claims based on the actions, omissions, or negligence of NWVSA, its volunteers, contract workers, agents, and representatives, whether a COVID-19 infection occurs before, during, or after participation held by or associated with NWVSA."),
      li("I agree that I comply with all health and safety rules and guidelines imposed by NWVSA or by any state, local, or federal governmental entity, and will practice safe social distancing and clean hygiene during my participation at events held by or associated with NWVSA."),
      li("I have had sufficient time to read this entire document prior to signing. Also, I understand that this activity might not be made available to me or that the cost to engage in this activity would be significantly greater if I were to choose not to sign this release, and agree that the opportunity to participate at the stated cost in return for the execution of this release is reasonable. I have read and understood this document and I agree to be bound by its terms."),
    ],
  },
  {
    type: "para",
    text: "Thank you for your time and understanding, as we continue to navigate towards creating a healthy and safe space for all. If you have any further questions, please contact the NWVSA Executive Board at eboard@nwvsa.org.",
  },

  { type: "heading", level: 1, text: "2026 NWVSA Camp Solstice: COVID-19 Action Plan" },
  {
    type: "para",
    text: "In the event that you or another NWVSA associated staff member/attendee is experiencing symptoms and suspect COVID-19 or another illness, please refer yourself or the affected staff member/attendee to the Hospitality Crew.",
  },

  { type: "heading", level: 2, text: "Step #1: Assess" },
  {
    type: "para",
    text: "Notify the Camp Solstice Executive team of the affected individual(s)'s name, Camp Solstice family/crew and presenting issue. The Executive Team consists of Camp Master(s), Camp Captain(s) and NWVSA Executive Board members.",
  },
  {
    type: "para",
    text: "Before moving forward, relocate to a private area away from other Camp staff/attendees for safety and confidentiality. Refrain from raising attention from attendees to the situation before assessing and testing for infection.",
  },
  { type: "para", text: "Assess for signs and symptoms of a COVID-19 infection listed below:" },
  {
    type: "list",
    ordered: false,
    items: [
      li("New onset of loss of taste or smell"), li("Persistent cough"),
      li("Shortness of breath or difficulty breathing"), li("Fatigue"),
      li("Muscle or body aches"), li("Headache"), li("Fever or chills"),
      li("Sore throat"), li("Congestion or runny nose"), li("Nausea or vomiting"), li("Diarrhea"),
    ],
  },
  {
    type: "para",
    text: "Additionally, please assess the affected individual(s) for any relevant medical history or exposure.",
  },

  { type: "heading", level: 2, text: "Step #2: Intervene" },
  {
    type: "para",
    text: "Through assessment and consultation of appropriate personnel, the Hospitality Crew may perform a rapid antigen COVID-19 test with the participant's consent. In the event that the affected individual(s) does not consent to a rapid antigen COVID test despite a reasonably suspected COVID-19 infection, please notify the Camp Solstice Executive team and NWVSA Executive Board.",
  },

  { type: "heading", level: 3, text: "Testing Positive" },
  {
    type: "para",
    text: "In the event of a NWVSA associated staff member/attendee testing positive for COVID-19 while on-site:",
  },
  {
    type: "list",
    ordered: true,
    items: [
      li("Update the Camp Solstice Executive team and NWVSA Executive Board on the situation."),
      li("Provide masks for the affected individual(s)."),
      li("Quarantine the affected individual(s) in an appropriate site until further notice (med tent, cabin, etc.)."),
      li("Coordinate with the Executive team and NWVSA Executive Board to coordinate infection control and reach out to the individual's emergency contact(s) to pick up the affected individual(s) from the site."),
      li("The Executive team and NWVSA Executive Board will let any close 1st party individuals know of this positive test. Examples would be people in the same car, Camp family, same committee/crew, and any other direct contact."),
    ],
  },

  { type: "heading", level: 3, text: "Testing Negative" },
  {
    type: "para",
    text: "In the event that a NWVSA associated staff member/attendee tests negative for COVID-19 with sustained symptoms, the affected individual(s) may return to programming.",
  },
  {
    type: "para",
    text: "Please advise the affected individual(s) to monitor symptoms and wear a mask for the safety of others, as the likelihood of contagious disease is still present regardless of whether or not it is COVID-19.",
  },
  {
    type: "para",
    text: "Hospitality Crew may choose to refrain from the above suggestions or employ additional interventions based on additional assessment of the situation.",
  },
];
