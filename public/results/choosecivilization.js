// ==================== Game Data ++ ====================
const civData = {
    china: {
        name: "China",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "Han",
            status: "Scholar",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The Emperor's Summons",
                description: "You are a scholar in the Han Dynasty court. The Emperor has summoned you for an important assignment. As you enter the throne room, you notice tension in the air. The Emperor explains that northern barbarians (Xiongnu) are threatening the Silk Road trade routes. He gives you a choice...",
                options: [
                    { text: "Propose a military campaign to defeat the Xiongnu", nextScene: "military_campaign", statusChange: "Military Advisor" },
                    { text: "Suggest diplomatic marriage alliance (heqin policy)", nextScene: "diplomatic_alliance", statusChange: "Diplomat" },
                    { text: "Advocate for building fortifications along the border", nextScene: "fortifications", statusChange: "Architect Engineer" }
                ]
            },
            "military_campaign": {
                title: "The Military Campaign",
                description: "The Emperor approves your plan. General Wei Qing leads the army north. During the campaign, you face a critical decision...",
                options: [
                    { text: "Attack the Xiongnu head-on with full force", nextScene: "head_on_after", statusChange: "Field Strategist" },
                    { text: "Use a flanking strategy to surround the enemy", nextScene: "flanking_after", statusChange: "Tactical Commander" },
                    { text: "Bribe Xiongnu tribes to turn against each other", nextScene: "divide_after", statusChange: "Spymaster" }
                ]
            },
            "head_on_after": {
                title: "After the Assault",
                description: "Your direct attack caused heavy casualties on both sides. The Xiongnu are retreating but not broken. What now?",
                options: [
                    { text: "Pursue and destroy them completely", nextScene: "head_on_pursue", statusChange: "Aggressive Commander" },
                    { text: "Secure your position and send envoys", nextScene: "head_on_secure", statusChange: "Cautious Victor" }
                ]
            },
            "head_on_pursue": {
                title: "Decisive Pursuit",
                description: "You chase the fleeing Xiongnu deep into the steppe. After a long pursuit, you corner them and achieve total victory. The northern frontier is safe for generations.",
                ending: "great_victory",
                endingType: "good"
            },
            "head_on_secure": {
                title: "Consolidation",
                description: "You hold your ground and send envoys. The Xiongnu, weakened, accept a peace treaty. You return home as a hero, but some call you cautious.",
                ending: "tactical_victory",
                endingType: "mixed"
            },
            "flanking_after": {
                title: "Flanking Success",
                description: "Your flanking maneuver worked perfectly. The Xiongnu are surrounded. They offer surrender. Do you accept?",
                options: [
                    { text: "Accept surrender and integrate them", nextScene: "flanking_accept", statusChange: "Merciful Victor" },
                    { text: "Refuse and annihilate them", nextScene: "flanking_annihilate", statusChange: "Ruthless Commander" }
                ]
            },
            "flanking_accept": {
                title: "Merciful Victory",
                description: "You accept the surrender. The Xiongnu become vassals and provide tribute and warriors. The border is peaceful for decades.",
                ending: "great_victory",
                endingType: "good"
            },
            "flanking_annihilate": {
                title: "Total Annihilation",
                description: "You order the slaughter. The Xiongnu are wiped out, but news of your cruelty spreads. Future enemies fight to the death, making later campaigns harder.",
                ending: "harsh_success",
                endingType: "mixed"
            },
            "divide_after": {
                title: "Divide and Conquer",
                description: "Your bribes cause chaos among the Xiongnu tribes. One chieftain emerges stronger and offers an alliance. Do you trust him?",
                options: [
                    { text: "Trust him and form an alliance", nextScene: "divide_trust", statusChange: "Alliance Builder" },
                    { text: "Prepare for betrayal", nextScene: "divide_betray", statusChange: "Paranoid Strategist" }
                ]
            },
            "divide_trust": {
                title: "A Fragile Alliance",
                description: "The chieftain proves loyal for years. But his successor later rebels. Still, you gained a generation of peace.",
                ending: "cultural_success",
                endingType: "mixed"
            },
            "divide_betray": {
                title: "Self-Fulfilling Prophecy",
                description: "Your preparations are seen as hostile. The chieftain attacks you preemptively. You win, but at great cost.",
                ending: "backfire",
                endingType: "bad"
            },
            "diplomatic_alliance": {
                title: "Diplomatic Mission",
                description: "You are sent as an envoy to the Xiongnu with a princess for marriage alliance. The Shanyu receives you but seems skeptical. During negotiations, an incident occurs...",
                options: [
                    { text: "Offer additional gifts and trade privileges", nextScene: "generous_gifts_after", statusChange: "Chief Negotiator" },
                    { text: "Threaten with Han military might", nextScene: "threat_response_after", statusChange: "Hardline Diplomat" },
                    { text: "Propose cultural exchange and education programs", nextScene: "cultural_exchange_after", statusChange: "Cultural Ambassador" }
                ]
            },
            "generous_gifts_after": {
                title: "Gifts and Diplomacy",
                description: "The Shanyu is impressed by your gifts, but his advisors are divided. Some urge acceptance, others see it as a trick. What do you do?",
                options: [
                    { text: "Double the gifts to win over the skeptics", nextScene: "generous_gifts", statusChange: "Overgenerous Envoy" },
                    { text: "Propose a personal meeting with the Shanyu", nextScene: "peaceful_alliance", statusChange: "Trust Builder" }
                ]
            },
            "generous_gifts": { title: "Successful Alliance", description: "Your generous gifts impress the Shanyu. The marriage alliance proceeds, bringing 20 years of peace along the northern border. Trade flourishes on the Silk Road.", ending: "peaceful_alliance", endingType: "good" },
            "peaceful_alliance": { title: "Personal Bond", description: "Your personal meeting creates a genuine friendship. The alliance is strong and lasts for generations.", ending: "great_victory", endingType: "good" },
            "threat_response_after": {
                title: "Hardline Stance",
                description: "Your threats anger some Xiongnu leaders, but others are intimidated. The Shanyu asks for time to consider. Meanwhile, a rival tribe offers to ally with you against the Shanyu.",
                options: [
                    { text: "Accept the rival tribe's offer", nextScene: "divide_and_conquer", statusChange: "Schemer" },
                    { text: "Stick to your original threat", nextScene: "threat_response", statusChange: "Intransigent" }
                ]
            },
            "threat_response": { title: "Diplomatic Disaster", description: "Your threats anger the Shanyu. He rejects the alliance and increases raids along the border. You return in disgrace.", ending: "failed_diplomacy", endingType: "bad" },
            "cultural_exchange_after": {
                title: "Cultural Bridge",
                description: "The Xiongnu show interest in Han culture, but their shamans oppose it. They propose a debate between scholars and shamans.",
                options: [
                    { text: "Accept the debate and prepare your best scholars", nextScene: "cultural_success", statusChange: "Debate Master" },
                    { text: "Refuse and insist on your program", nextScene: "cultural_exchange", statusChange: "Inflexible" }
                ]
            },
            "cultural_exchange": { title: "Cultural Exchange", description: "The cultural exchange program is accepted. Xiongnu nobles send their sons to study in Chang'an. While not eliminating conflict entirely, it reduces hostilities significantly.", ending: "cultural_success", endingType: "mixed" },
            "fortifications": {
                title: "Building the Great Wall",
                description: "You are put in charge of extending fortifications along the northern border. Thousands of conscripted workers are under your command. A crisis emerges when...",
                options: [
                    { text: "Workers rebel due to harsh conditions", nextScene: "worker_rebellion_after", statusChange: "Construction Overseer" },
                    { text: "Xiongnu raids threaten the construction sites", nextScene: "raid_defense_after", statusChange: "Border Commander" },
                    { text: "Imperial inspectors accuse you of corruption", nextScene: "corruption_accusation_after", statusChange: "Suspected Official" }
                ]
            },
            "worker_rebellion_after": {
                title: "Rebellion",
                description: "The workers demand better conditions. Your subordinates suggest either crushing the rebellion or negotiating.",
                options: [
                    { text: "Crush the rebellion ruthlessly", nextScene: "worker_rebellion", statusChange: "Tyrant" },
                    { text: "Negotiate and improve conditions", nextScene: "harsh_success", statusChange: "Reformer" }
                ]
            },
            "worker_rebellion": { title: "Rebellion Suppressed", description: "You suppress the rebellion harshly, executing the leaders. The wall construction continues but your reputation suffers. The completed wall section is strong but built on suffering.", ending: "harsh_success", endingType: "mixed" },
            "raid_defense_after": {
                title: "Under Attack",
                description: "Xiongnu raiders are approaching. You have limited troops. Do you sally out to meet them or defend from the walls?",
                options: [
                    { text: "Sally out and attack", nextScene: "raid_defense", statusChange: "Aggressive Defender" },
                    { text: "Defend from the walls", nextScene: "defensive_victory", statusChange: "Cautious Defender" }
                ]
            },
            "raid_defense": { title: "Heroic Defense", description: "You successfully defend the construction sites, defeating multiple Xiongnu raids. The completed wall section becomes a model for future constructions. You are promoted.", ending: "defensive_victory", endingType: "good" },
            "corruption_accusation_after": {
                title: "Accusations",
                description: "Imperial inspectors accuse you of embezzling funds. You know it's false, but your rivals have influence. What do you do?",
                options: [
                    { text: "Travel to the capital to defend yourself", nextScene: "political_downfall", statusChange: "Self-Advocate" },
                    { text: "Send gifts to the inspectors to buy them off", nextScene: "corruption_accusation", statusChange: "Briber" }
                ]
            },
            "corruption_accusation": { title: "Court Intrigue", description: "The corruption accusations, though false, lead to your dismissal. Rival officials take over the project. The wall construction continues without you.", ending: "political_downfall", endingType: "bad" },
            "cultural_success": { title: "Cultural Success", description: "Your cultural exchange program succeeds.", ending: "cultural_success", endingType: "mixed" },
            "harsh_success": { title: "Harsh Success", description: "Your harsh methods achieve success but at a cost.", ending: "harsh_success", endingType: "mixed" },
            "defensive_victory": { title: "Defensive Victory", description: "Your defensive strategy pays off.", ending: "defensive_victory", endingType: "good" },
            "political_downfall": { title: "Political Downfall", description: "You fall victim to court intrigue.", ending: "political_downfall", endingType: "bad" }
        },
        gameEndings: {
            "great_victory": { title: "Glory to the Han Empire!", description: "Your brilliant strategy secures a decisive victory. The northern borders are secure for a generation. The Emperor rewards you with land, titles, and honor. Your name is recorded in the imperial histories.", historicalContext: { title: "Historical Context: Han-Xiongnu Wars", text: "The Han Dynasty (206 BCE-220 CE) fought prolonged wars against the Xiongnu. Emperor Wu (r. 141-87 BCE) launched major campaigns. The most successful Han generals used flanking maneuvers to achieve decisive victories around 119 BCE." } },
            "tactical_victory": { title: "Costly Triumph", description: "You achieve victory but at tremendous cost. Thousands perish, and the treasury is nearly emptied. While the Xiongnu are pushed back temporarily, resentment grows.", historicalContext: { title: "Historical Context: The Cost of War", text: "Han campaigns against the Xiongnu were extremely costly. The Mobei campaign of 119 BCE, while successful, nearly bankrupted the Han treasury and caused widespread suffering." } },
            "backfire": { title: "Unintended Consequences", description: "Your scheme to divide the Xiongnu backfires spectacularly. A new, more unified and hostile Xiongnu confederation emerges.", historicalContext: { title: "Historical Context: Xiongnu Consolidation", text: "The Han Dynasty did attempt to use divide-and-conquer tactics, with mixed results. Sometimes they backfired when capable Xiongnu leaders unified tribes more effectively." } },
            "peaceful_alliance": { title: "Architect of Peace", description: "Your diplomatic skills secure two decades of peace. The Silk Road flourishes, bringing wealth and exotic goods to Chang'an. You are celebrated as a master diplomat.", historicalContext: { title: "Historical Context: Heqin Policy", text: "The heqin ('harmonious kinship') policy of marriage alliances was used by early Han emperors toward the Xiongnu. While it brought temporary peace, it was expensive and seen as humiliating by some." } },
            "failed_diplomacy": { title: "Disgrace and War", description: "Your failed diplomacy leads to renewed war. The Emperor, angry at the wasted opportunity, sends you to a remote post. Major military campaigns are launched, costing thousands of lives.", historicalContext: { title: "Historical Context: Diplomatic Failures", text: "Han diplomats did face dangerous missions. The most famous, Su Wu, was captured and held for 19 years. Failed diplomacy often led to immediate military retaliation." } },
            "cultural_success": { title: "Bridge Between Cultures", description: "Your cultural exchange program creates lasting connections. While border skirmishes continue, large-scale war is avoided for years. You write influential texts on border relations.", historicalContext: { title: "Historical Context: Cultural Exchange", text: "Some Xiongnu nobles did adopt Han customs and send their sons to be educated in Chang'an. This sinicization process contributed to the decline of Xiongnu power." } },
            "harsh_success": { title: "The Wall Stands, Your Reputation Falls", description: "The wall section is completed and proves effective. However, stories of your harsh treatment spread. Confucian scholars criticize your methods. Your career advances no further.", historicalContext: { title: "Historical Context: Great Wall Construction", text: "The Great Wall was built through conscripted labor under harsh conditions. Historical records mention worker rebellions and high mortality rates. While effective militarily, the human cost was tremendous." } },
            "defensive_victory": { title: "Defender of the Frontier", description: "Your successful defenses make you a hero along the border. You are promoted to regional commander and continue to serve with distinction for decades.", historicalContext: { title: "Historical Context: Border Defense", text: "Han frontier commanders who successfully defended against Xiongnu raids were celebrated and promoted. Successful commanders often came from border regions themselves." } },
            "political_downfall": { title: "Victim of Court Politics", description: "Despite your competence, political enemies undermine you with false accusations. You are removed from your post. You retire to your estate, writing bitter poetry about court intrigues.", historicalContext: { title: "Historical Context: Court Intrigue", text: "Han court politics were notoriously treacherous. Officials frequently fell victim to accusations, whether true or false. The historian Sima Qian himself was castrated for defending a disgraced general." } }
        }
    },

    // ========== Egypt ==========
    egypt: {
        name: "Egypt",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "New Kingdom",
            status: "Young Official",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The Pharaoh’s Summons",
                description: "You are a young official serving in the court of Pharaoh Hatshepsut during the New Kingdom. The annual flooding of the Nile has been unusually low, threatening Egypt’s agriculture. The Pharaoh seeks your counsel...",
                options: [
                    { text: "Recommend constructing new irrigation canals", nextScene: "irrigation_project", statusChange: "Royal Engineer" },
                    { text: "Propose sending an expedition to Punt for resources", nextScene: "punt_expedition", statusChange: "Expedition Leader" },
                    { text: "Suggest increasing temple offerings to appease the gods", nextScene: "temple_offerings", statusChange: "High Priest’s Aide" }
                ]
            },
            "irrigation_project": {
                title: "The Irrigation Project",
                description: "The Pharaoh approves your ambitious plan. Thousands of workers are mobilized along the Nile. As the work begins, a major dilemma arises...",
                options: [
                    { text: "Divert a larger section of the Nile, risking damage to nearby villages", nextScene: "large_diversion_after", statusChange: "Master Engineer" },
                    { text: "Build smaller channels that take longer but avoid displacement", nextScene: "small_channels_after", statusChange: "Careful Planner" },
                    { text: "Recruit Nubian laborers to speed up construction", nextScene: "nubian_labor_after", statusChange: "Labor Overseer" }
                ]
            },
            "large_diversion_after": {
                title: "The Great Diversion",
                description: "Your engineers say the diversion will flood three villages. The villagers beg you to reconsider. What do you do?",
                options: [
                    { text: "Proceed anyway – the needs of Egypt come first", nextScene: "large_diversion", statusChange: "Ruthless Engineer" },
                    { text: "Find an alternate route, even if slower", nextScene: "controversial_success", statusChange: "Compassionate Engineer" }
                ]
            },
            "large_diversion": { title: "Great Canal Completed", description: "Your bold diversion succeeds in channeling more water. However, several villages suffer flooding and displacement. While crops flourish, resentment grows among the locals.", ending: "controversial_success", endingType: "mixed" },
            "small_channels_after": {
                title: "Slow and Steady",
                description: "The smaller channels are progressing, but a drought worsens. Farmers are desperate. The Pharaoh demands faster results.",
                options: [
                    { text: "Speed up by using more forced labor", nextScene: "harsh_success", statusChange: "Taskmaster" },
                    { text: "Stick to your original plan and explain the risks", nextScene: "small_channels", statusChange: "Patient Leader" }
                ]
            },
            "small_channels": { title: "Steady Progress", description: "Your careful construction avoids harming any village. The smaller channels take longer, but the farming season improves steadily. You are praised for your wisdom and restraint.", ending: "engineering_success", endingType: "good" },
            "nubian_labor_after": {
                title: "Nubian Labor",
                description: "Nubian laborers arrive, but local Egyptians resent them. Tensions rise. How do you handle it?",
                options: [
                    { text: "Segregate the groups to prevent conflict", nextScene: "labor_conflict", statusChange: "Divider" },
                    { text: "Promote mixing and shared celebrations", nextScene: "modest_success", statusChange: "Unifier" }
                ]
            },
            "nubian_labor": { title: "Unrest Among Workers", description: "Recruiting Nubians speeds progress, but tensions arise between Egyptian and Nubian laborers. A violent clash erupts, delaying the project and staining your reputation.", ending: "labor_conflict", endingType: "bad" },
            "punt_expedition": {
                title: "Expedition to Punt",
                description: "You set sail down the Red Sea toward the fabled Land of Punt. After weeks of travel, storms, and sickness, your crew grows restless. A crisis emerges...",
                options: [
                    { text: "Trade generously with the local rulers of Punt", nextScene: "generous_trade_after", statusChange: "Chief Trader" },
                    { text: "Demand tribute using Egypt’s military power", nextScene: "military_pressure_after", statusChange: "Forceful Envoy" },
                    { text: "Focus on collecting rare plants and myrrh rather than large trade deals", nextScene: "rare_collection_after", statusChange: "Naturalist" }
                ]
            },
            "generous_trade_after": {
                title: "Generous Trade",
                description: "The Puntite rulers are pleased but ask for Egyptian artisans to stay and teach their crafts. Do you agree?",
                options: [
                    { text: "Agree – it builds a lasting bond", nextScene: "punt_success", statusChange: "Cultural Ambassador" },
                    { text: "Refuse – we need every skilled person", nextScene: "generous_trade", statusChange: "Pragmatist" }
                ]
            },
            "generous_trade": { title: "Treasures of Punt", description: "Your generosity impresses the rulers of Punt. They offer gold, myrrh, and exotic animals. The Pharaoh celebrates you, and Egypt enjoys renewed prosperity.", ending: "punt_success", endingType: "good" },
            "military_pressure_after": {
                title: "Military Pressure",
                description: "The Puntites are intimidated but also angered. They offer a small tribute but warn of resistance. Your officers suggest a show of force.",
                options: [
                    { text: "Launch a raid to teach them a lesson", nextScene: "failed_expedition", statusChange: "Warlord" },
                    { text: "Accept the tribute and leave peacefully", nextScene: "military_pressure", statusChange: "Cautious Commander" }
                ]
            },
            "military_pressure": { title: "Diplomatic Breakdown", description: "Your threats anger the rulers of Punt. They refuse cooperation and your ships return home nearly empty. You face criticism for damaging Egypt’s long-standing relationship with Punt.", ending: "failed_expedition", endingType: "bad" },
            "rare_collection_after": {
                title: "Rare Collection",
                description: "You gather rare plants, but your crew complains about missing out on trade goods. Some suggest secretly taking valuable items from a temple.",
                options: [
                    { text: "Refuse – we are here for science", nextScene: "modest_success", statusChange: "Ethical Scientist" },
                    { text: "Take a few items – no one will notice", nextScene: "rare_collection", statusChange: "Looter" }
                ]
            },
            "rare_collection": { title: "Botanical Wonders", description: "You gather rare plants and myrrh crucial for temple rituals. While not a grand success, your findings support religious ceremonies and please the priests.", ending: "modest_success", endingType: "mixed" },
            "temple_offerings": {
                title: "Appeasing the Gods",
                description: "You oversee ceremonies in Karnak. Priests chant to Amun-Ra as crowds gather. During the preparations for a large festival, complications arise...",
                options: [
                    { text: "Use more grain for offerings despite Egypt’s shortage", nextScene: "lavish_offerings_after", statusChange: "Devoted Servant" },
                    { text: "Reduce the offerings to preserve food reserves", nextScene: "reduced_offerings_after", statusChange: "Practical Priest" },
                    { text: "Redirect offerings toward rituals honoring Hapi, god of the Nile", nextScene: "hapi_rituals_after", statusChange: "Ritual Specialist" }
                ]
            },
            "lavish_offerings_after": {
                title: "Lavish Offerings",
                description: "The priests are delighted, but the people grumble about hunger. The Pharaoh asks if you are sure this is wise.",
                options: [
                    { text: "Trust the gods – they will provide", nextScene: "spiritual_success_costly", statusChange: "Zealot" },
                    { text: "Reduce slightly and distribute food to the poor", nextScene: "ritual_success", statusChange: "Wise Priest" }
                ]
            },
            "lavish_offerings": { title: "Praise of the Gods", description: "Your lavish offerings impress the priesthood. However, using vital grain during a low Nile year worsens famine conditions. Many blame you for shortages.", ending: "spiritual_success_costly", endingType: "mixed" },
            "reduced_offerings_after": {
                title: "Reduced Offerings",
                description: "The priests are angry. They threaten to curse the harvest. Do you give in or stand firm?",
                options: [
                    { text: "Stand firm – the people must eat", nextScene: "practical_success", statusChange: "Defiant" },
                    { text: "Give in and restore offerings", nextScene: "reduced_offerings", statusChange: "Yielding" }
                ]
            },
            "reduced_offerings": { title: "Balanced Decision", description: "Reducing offerings preserves Egypt’s food supply. Some priests accuse you of disrespect, but most people praise your practical thinking.", ending: "practical_success", endingType: "good" },
            "hapi_rituals_after": {
                title: "Rituals to Hapi",
                description: "Your rituals are elaborate and well-received. But the Nile still does not rise. Some say you need to make a human sacrifice.",
                options: [
                    { text: "Absolutely not – find another way", nextScene: "ritual_success", statusChange: "Humane Priest" },
                    { text: "If it will save Egypt...", nextScene: "hapi_rituals", statusChange: "Desperate" }
                ]
            },
            "hapi_rituals": { title: "Blessing of the Nile", description: "Your specialized rituals to Hapi are well-received. When the Nile floods slightly better the next year, many attribute it to your actions—whether rightly or not.", ending: "ritual_success", endingType: "mixed" },
            "controversial_success": { title: "Controversial Success", description: "Your success is marred by controversy.", ending: "controversial_success", endingType: "mixed" },
            "harsh_success": { title: "Harsh Success", description: "Your harsh methods achieve success but at a cost.", ending: "harsh_success", endingType: "mixed" },
            "labor_conflict": { title: "Labor Conflict", description: "Tensions among workers lead to conflict.", ending: "labor_conflict", endingType: "bad" },
            "punt_success": { title: "Punt Success", description: "Your expedition to Punt is a success.", ending: "punt_success", endingType: "good" },
            "failed_expedition": { title: "Failed Expedition", description: "Your expedition ends in failure.", ending: "failed_expedition", endingType: "bad" },
            "modest_success": { title: "Modest Success", description: "Your efforts yield modest results.", ending: "modest_success", endingType: "mixed" },
            "spiritual_success_costly": { title: "Spiritual Success, Costly", description: "The gods are pleased, but the people suffer.", ending: "spiritual_success_costly", endingType: "mixed" },
            "practical_success": { title: "Practical Success", description: "Your practical approach succeeds.", ending: "practical_success", endingType: "good" },
            "ritual_success": { title: "Ritual Success", description: "Your rituals are successful.", ending: "ritual_success", endingType: "mixed" }
        },
        gameEndings: {
            "engineering_success": { title: "Water for Egypt!", description: "Your irrigation channels restore farmland, ensuring food for thousands. Pharaoh rewards you with land and a golden collar, honoring your wisdom.", historicalContext: { title: "Historical Context: Irrigation and the Nile", text: "Ancient Egyptian agriculture relied heavily on the annual flooding of the Nile. When floods were low, Egyptians built canals, basins, and shaduf systems to distribute water." } },
            "controversial_success": { title: "A Price Paid in Water and Lives", description: "Although your project restores farmland, displaced families resent your methods. You receive mixed praise—admired for success, criticized for cruelty.", historicalContext: { title: "Historical Context: Canal Construction", text: "Large irrigation projects sometimes displaced villages or required forced labor. Egyptian officials were judged not only by results but by how justly they treated workers and locals." } },
            "labor_conflict": { title: "Conflict on the Nile", description: "Your decision sparks worker rivalries. Productivity slows, and you are reassigned to a minor administrative post, far from the Pharaoh’s trust.", historicalContext: { title: "Historical Context: Nubian Laborers", text: "Egypt relied on diverse labor forces, including Nubians. While relations were often cooperative, tensions existed, especially when resources were scarce." } },
            "punt_success": { title: "Treasures of the Red Sea", description: "Your diplomatic skill brings exotic wealth to Egypt. Pharaoh Hatshepsut immortalizes your success on her temple walls at Deir el-Bahri.", historicalContext: { title: "Historical Context: Expedition to Punt", text: "Hatshepsut’s expedition to Punt is one of Egypt’s most famous foreign ventures. Reliefs depict gifts like myrrh trees, incense, gold, and exotic animals." } },
            "failed_expedition": { title: "Empty Ships, Heavy Consequences", description: "Your aggression collapses negotiations. Egypt loses valuable trade resources, and you return in disgrace.", historicalContext: { title: "Historical Context: Diplomacy and Trade", text: "Egyptian expeditions depended on diplomacy and ritualized gift-giving. Attempts to force tribute from Punt were rare and likely to backfire." } },
            "modest_success": { title: "Gifts for the Gods", description: "Your botanical discoveries enhance temple rituals but fail to solve Egypt’s resource crisis. A modest contribution—but valued nonetheless.", historicalContext: { title: "Historical Context: Myrrh and Incense", text: "Myrrh, incense, and aromatic plants were essential in Egyptian religious ceremonies. Hatshepsut famously brought living myrrh trees from Punt to plant in temple gardens." } },
            "spiritual_success_costly": { title: "The Gods Are Pleased, the People Are Hungry", description: "Your lavish offerings impress the priesthood but worsen famine. You are remembered as pious—but not wise.", historicalContext: { title: "Historical Context: Temple Offerings", text: "Temples required large offerings of grain, incense, and animals. In times of scarcity, excessive offerings could strain Egypt’s food reserves, causing public resentment." } },
            "practical_success": { title: "Wisdom Over Ritual", description: "You maintain food supplies and prevent starvation. Though some priests grumble, the Pharaoh praises your foresight.", historicalContext: { title: "Historical Context: Famine Management", text: "Egyptian officials often had to balance religious obligations with practical necessities. Preserving grain was crucial during low Nile years." } },
            "ritual_success": { title: "Blessed by Hapi", description: "Your rituals are credited for improving the Nile flood. Whether divine favor or luck, your name is remembered with respect.", historicalContext: { title: "Historical Context: Worship of Hapi", text: "Hapi, god of the Nile, was central to Egyptian life. Rituals and offerings to Hapi were believed to influence the river’s flooding." } }
        }
    },

    // ========== Mesopotamia ==========
    mesopotamia: {
        name: "Mesopotamia",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "Akkadian Empire",
            status: "Rising Official",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The King's Summons",
                description: "You are a rising official in the great city of Babylon. King Hammurabi has summoned you to the palace. Tensions rise between rival cities, irrigation canals, and foreign threats along the Euphrates. The king seeks your counsel...",
                options: [
                    { text: "Advise launching a military campaign against Larsa", nextScene: "military_campaign", statusChange: "Military Advisor" },
                    { text: "Propose forming alliances through marriage and trade treaties", nextScene: "diplomatic_alliance", statusChange: "Diplomat" },
                    { text: "Recommend improving the irrigation canals to stabilize food supply", nextScene: "canal_project", statusChange: "Chief Engineer" }
                ]
            },
            "military_campaign": {
                title: "War Against Larsa",
                description: "Hammurabi approves your war plan. The army marches south under General Zikiru. As you reach the outskirts of Larsa, the enemy forces prepare for battle. You must decide on a critical strategy...",
                options: [
                    { text: "Launch a direct assault on Larsa's fortified walls", nextScene: "head_on_attack_after", statusChange: "Field Strategist" },
                    { text: "Cut off Larsa's water supply by diverting the canal", nextScene: "canal_siege_after", statusChange: "Tactical Commander" },
                    { text: "Bribe Larsa's mercenaries to abandon their posts", nextScene: "divide_and_conquer_after", statusChange: "Spymaster" }
                ]
            },
            "head_on_attack_after": {
                title: "The Assault",
                description: "Your troops are ready. The walls are high, but your engineers have built siege towers. Do you attack at dawn or wait?",
                options: [
                    { text: "Attack at dawn – surprise is key", nextScene: "head_on_attack", statusChange: "Bold Commander" },
                    { text: "Wait for night and use stealth", nextScene: "tactical_victory", statusChange: "Cautious Commander" }
                ]
            },
            "head_on_attack": { title: "Assault on Larsa", description: "Your direct attack leads to brutal fighting at Larsa’s gates. The city falls, but Babylon suffers heavy losses. Victory is achieved, but at a painful cost.", ending: "tactical_victory", endingType: "mixed" },
            "canal_siege_after": {
                title: "Water Diversion",
                description: "Diverting the canal will take days. Meanwhile, Larsa's envoys offer peace in exchange for tribute. Do you accept?",
                options: [
                    { text: "Accept peace – we can fight another day", nextScene: "peaceful_alliance", statusChange: "Pragmatist" },
                    { text: "Continue the siege – they are weakening", nextScene: "canal_siege", statusChange: "Persistent" }
                ]
            },
            "canal_siege": { title: "Victory Through Strategy", description: "You divert Larsa's water canal. Thirst forces the defenders to surrender. The capture is swift, losses are minimal, and your strategy wins you great honor.", ending: "great_victory", endingType: "good" },
            "divide_and_conquer_after": {
                title: "Bribery",
                description: "The mercenaries agree to abandon Larsa, but demand gold upfront. Your treasury is limited. Do you pay?",
                options: [
                    { text: "Pay – it's worth it", nextScene: "divide_and_conquer", statusChange: "Spendthrift" },
                    { text: "Refuse and try to negotiate", nextScene: "backfire", statusChange: "Frugal" }
                ]
            },
            "divide_and_conquer": { title: "Chaos and Consequence", description: "Your bribery plan causes confusion among Larsa’s troops, but soon a strong new commander unites them. They become more hostile and unpredictable than before.", ending: "backfire", endingType: "bad" },
            "diplomatic_alliance": {
                title: "Alliance Negotiations",
                description: "You are sent to negotiate with the city-state Mari along the Euphrates. Its ruler, Zimri-Lim, receives you warmly, but tensions rise during talks when rumors of treachery emerge...",
                options: [
                    { text: "Offer generous trade rights and gifts", nextScene: "generous_gifts_after_m", statusChange: "Chief Negotiator" },
                    { text: "Threaten Mari with Babylon's expanding army", nextScene: "threat_response_after_m", statusChange: "Hardline Diplomat" },
                    { text: "Propose shared irrigation projects to benefit both cities", nextScene: "shared_irrigation_after", statusChange: "Cultural Ambassador" }
                ]
            },
            "generous_gifts_after_m": {
                title: "Generous Gifts",
                description: "Zimri-Lim is pleased but his advisors are suspicious. They ask for a Babylonian princess in marriage to seal the deal.",
                options: [
                    { text: "Agree – a royal marriage strengthens ties", nextScene: "peaceful_alliance", statusChange: "Matchmaker" },
                    { text: "Refuse – it's too much", nextScene: "generous_gifts", statusChange: "Stingy" }
                ]
            },
            "generous_gifts": { title: "Alliance Secured", description: "Your gifts impress Zimri-Lim, and Mari signs a long-term peace treaty with Babylon. Trade thrives along the Euphrates, bringing wealth to both cities.", ending: "peaceful_alliance", endingType: "good" },
            "threat_response_after_m": {
                title: "Threats",
                description: "Mari's court is angered. Some advisors whisper of war. The king asks for time to consider. Meanwhile, an envoy from another city arrives offering an alliance against Mari.",
                options: [
                    { text: "Accept the rival alliance", nextScene: "backfire", statusChange: "Schemer" },
                    { text: "Wait for Mari's decision", nextScene: "threat_response", statusChange: "Patient" }
                ]
            },
            "threat_response": { title: "Diplomatic Breakdown", description: "Your threats anger Mari’s rulers. They break off talks and ally with Babylon’s enemies. War becomes unavoidable. You return home disgraced.", ending: "failed_diplomacy", endingType: "bad" },
            "shared_irrigation_after": {
                title: "Shared Irrigation",
                description: "Mari agrees in principle, but disputes arise over water rights. A local tribe offers to mediate. Do you accept?",
                options: [
                    { text: "Accept mediation", nextScene: "cultural_success", statusChange: "Cooperative" },
                    { text: "Reject – we can negotiate directly", nextScene: "shared_irrigation", statusChange: "Independent" }
                ]
            },
            "shared_irrigation": { title: "Water for All", description: "The idea of shared canals is welcomed. Both cities cooperate in maintaining water routes, reducing border tensions and improving agriculture.", ending: "cultural_success", endingType: "mixed" },
            "canal_project": {
                title: "Irrigation Crisis",
                description: "You oversee repairs of the massive canal network linking the Tigris and Euphrates. Thousands of laborers depend on your leadership. A crisis emerges when...",
                options: [
                    { text: "Workers revolt due to exhausting labor demands", nextScene: "worker_rebellion_after_m", statusChange: "Construction Overseer" },
                    { text: "A rival city sabotages the canal to weaken Babylon", nextScene: "sabotage_defense_after", statusChange: "Border Commander" },
                    { text: "Court officials accuse you of stealing canal funds", nextScene: "corruption_accusation_after_m", statusChange: "Suspected Official" }
                ]
            },
            "worker_rebellion_after_m": {
                title: "Worker Revolt",
                description: "The workers demand rest and better food. Your options: crush the revolt or give in.",
                options: [
                    { text: "Crush it ruthlessly", nextScene: "worker_rebellion", statusChange: "Tyrant" },
                    { text: "Negotiate and improve conditions", nextScene: "harsh_success", statusChange: "Reformer" }
                ]
            },
            "worker_rebellion": { title: "Order Restored", description: "You crush the rebellion. The canal is completed, but your harsh rule earns you the hatred of many workers. The project succeeds, but your name is stained.", ending: "harsh_success", endingType: "mixed" },
            "sabotage_defense_after": {
                title: "Sabotage",
                description: "You catch the saboteurs – they are from a rival city. Do you execute them publicly or use them as spies?",
                options: [
                    { text: "Execute them – send a message", nextScene: "defensive_victory", statusChange: "Vengeful" },
                    { text: "Use them as double agents", nextScene: "sabotage_defense", statusChange: "Spymaster" }
                ]
            },
            "sabotage_defense": { title: "Protector of the Waterways", description: "You catch the saboteurs and defend the canal system. Babylon praises your vigilance, and the restored canals strengthen the empire’s food supply.", ending: "defensive_victory", endingType: "good" },
            "corruption_accusation_after_m": {
                title: "Accusations",
                description: "The accusations are false, but your rivals have influence. Do you go to the king to defend yourself or try to bribe the accusers?",
                options: [
                    { text: "Go to the king", nextScene: "political_downfall", statusChange: "Honest" },
                    { text: "Bribe them", nextScene: "corruption_accusation", statusChange: "Corrupt" }
                ]
            },
            "corruption_accusation": { title: "Political Downfall", description: "False accusations overwhelm you. Despite your competence, rivals remove you from your position. Babylon continues the canal work without you.", ending: "political_downfall", endingType: "bad" },
            "tactical_victory": { title: "Tactical Victory", description: "You achieve victory but at great cost.", ending: "tactical_victory", endingType: "mixed" },
            "peaceful_alliance": { title: "Peaceful Alliance", description: "Your diplomacy secures a peaceful alliance.", ending: "peaceful_alliance", endingType: "good" },
            "backfire": { title: "Backfire", description: "Your plan backfires disastrously.", ending: "backfire", endingType: "bad" },
            "cultural_success": { title: "Cultural Success", description: "Your cultural exchange succeeds.", ending: "cultural_success", endingType: "mixed" },
            "harsh_success": { title: "Harsh Success", description: "Your harsh methods achieve success but at a cost.", ending: "harsh_success", endingType: "mixed" },
            "defensive_victory": { title: "Defensive Victory", description: "Your defensive strategy pays off.", ending: "defensive_victory", endingType: "good" },
            "political_downfall": { title: "Political Downfall", description: "You fall victim to court intrigue.", ending: "political_downfall", endingType: "bad" }
        },
        gameEndings: {
            "great_victory": { title: "Triumph for Babylon", description: "Your strategy secures a swift victory. Babylon expands its power with minimal losses. Hammurabi rewards you with land and high office.", historicalContext: { title: "Historical Context: Babylon vs. Larsa", text: "Hammurabi famously defeated rival cities like Larsa through strategic use of irrigation canals. Controlling water flow was a powerful military tool in Mesopotamia." } },
            "tactical_victory": { title: "Victory at Great Cost", description: "Larsa falls, but the casualties are severe. Though you claim victory, critics argue the price was too high. Your reputation is respected but questioned.", historicalContext: { title: "Historical Context: Mesopotamian Warfare", text: "Siege warfare in Mesopotamia was brutal and costly. Cities had strong walls, and direct assaults often resulted in heavy losses." } },
            "backfire": { title: "Unintended Chaos", description: "Your plan backfires. A new leader unifies the enemy more fiercely, escalating conflict. You are blamed for worsening tensions.", historicalContext: { title: "Historical Context: Shifting Alliances", text: "Rival Mesopotamian city-states often used bribery and internal manipulation, but such tactics sometimes strengthened enemies instead." } },
            "peaceful_alliance": { title: "Blessings of Peace", description: "Your diplomacy forges a long period of peace and profitable trade. Goods flow freely along the Euphrates, and Babylon prospers.", historicalContext: { title: "Historical Context: Diplomacy in Mesopotamia", text: "Cities like Mari and Babylon maintained alliances through trade, marriages, and diplomatic gifts. Mari’s palace archives reveal extensive diplomatic correspondence." } },
            "failed_diplomacy": { title: "Disgrace and Conflict", description: "Your threats cause negotiations to collapse. Mari joins Babylon’s foes, and your failure contributes to spreading war.", historicalContext: { title: "Historical Context: Diplomatic Tensions", text: "Mesopotamian diplomacy was delicate; threats often backfired. Aggressive envoys could destabilize relations and provoke wars." } },
            "cultural_success": { title: "Shared Prosperity", description: "Your shared irrigation plan eases tensions and stabilizes agriculture. Cooperation improves both cities' livelihoods, though rivalry never fully disappears.", historicalContext: { title: "Historical Context: Irrigation Cooperation", text: "Irrigation was the lifeblood of Mesopotamia. Cities sometimes cooperated to maintain canals, though disputes over water could also spark wars." } },
            "harsh_success": { title: "Canals Saved, Legacy Damaged", description: "The canal is repaired, and agriculture flourishes. Still, stories of your brutality spread. You succeed, but at a moral cost.", historicalContext: { title: "Historical Context: Labor in Mesopotamia", text: "Canal construction often relied on corvée labor—forced work demands on citizens. Rebellions were not uncommon, especially in times of drought or famine." } },
            "defensive_victory": { title: "Guardian of the Rivers", description: "You successfully protect the canals, restoring order and earning renown as a defender of Babylon’s prosperity.", historicalContext: { title: "Historical Context: Canal Sabotage", text: "Cities would sometimes sabotage rivals’ canals to destroy crops. Babylon’s kings strictly guarded irrigation systems." } },
            "political_downfall": { title: "Lost to Court Intrigue", description: "False accusations end your career. Though talented, you fall victim to Babylon’s political rivalries. You live quietly, writing complaints on clay tablets.", historicalContext: { title: "Historical Context: Court Politics", text: "Mesopotamian courts could be ruthless. Officials were often removed through accusations, sometimes based on omens or rivalries." } }
        }
    }
};

// Themes + Banner
const themes = {
    neutral: {
        primary: '#6c757d',
        primaryDark: '#495057',
        secondary: '#adb5bd',
        accent: '#ced4da',
        bgLight: '#f8f9fa',
        textDark: '#212529',
        textMuted: '#6c757d',
        border: '#dee2e6',
    },
    china: {
        primary: '#c62828',
        primaryDark: '#8b0000',
        secondary: '#ffd700',
        accent: '#b8860b',
        bgLight: '#fff3e0',
        textDark: '#2c2c2c',
        textMuted: '#5a3e2b',
        border: '#c62828',
    },
    mesopotamia: {
        primary: '#1976D2',
        primaryDark: '#0D47A1',
        secondary: '#9E9E9E',
        accent: '#616161',
        bgLight: '#f5f5f5',
        textDark: '#212121',
        textMuted: '#757575',
        border: '#1976D2',
    },
    egypt: {
        primary: '#FFC107',
        primaryDark: '#FF8F00',
        secondary: '#0D47A1',
        accent: '#1976D2',
        bgLight: '#FFF9C4',
        textDark: '#1a1a1a',
        textMuted: '#5d4037',
        border: '#FFC107',
    }
};

const bannerUrls = {
    china: 'https://tse1.mm.bing.net/th/id/OIP.wT9tK0iAr7DOZdQUFJEfmgHaD7?rs=1&pid=ImgDetMain&o=7&rm=3',
    mesopotamia: 'https://cdn.britannica.com/01/184701-050-EB45F22E/Standard-of-Ur-war-scenes-Mesopotamia.jpg',
    egypt: 'https://cdn.britannica.com/25/83825-050-F8826674/Anubis-Egyptian-Book-of-the-Dead-dead-c-1275-bce.jpg'
};

function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function applyTheme(civKey) {
    const theme = themes[civKey] || themes.neutral;
    // Set all CSS variables
    for (let key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }

    const primaryRgb = hexToRgb(theme.primary);
    if (primaryRgb) {
        document.documentElement.style.setProperty('--primary-rgb', primaryRgb);
    }

    const secondaryRgb = hexToRgb(theme.secondary);
    if (secondaryRgb) {
        document.documentElement.style.setProperty('--secondary-rgb', secondaryRgb);
    }

    if (bannerUrls[civKey]) {
        setBannerWithAnimation(bannerUrls[civKey]);
    }
}

function setBannerWithAnimation(url) {
    const bannerImg = document.querySelector('.banner-image img');
    if (!bannerImg) return;
    bannerImg.style.transition = 'opacity 0.5s ease';
    bannerImg.style.opacity = '0';
    setTimeout(() => {
        bannerImg.src = url;
        bannerImg.style.opacity = '1';
    }, 500);
}


// Accounts, comments, ratings
let currentUser = null;
let currentCiv = null;

function readStorage(key, fallbackValue) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallbackValue;
    } catch (error) {
        console.error(`Problem reading ${key} from localStorage.`, error);
        return fallbackValue;
    }
}

let userProfiles = readStorage('userProfiles', {});
let comments = readStorage('globalComments', []);
let anonymousRatings = readStorage('anonymousRatings', []);

function saveUserProfiles() {
    localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
}

function saveComments() {
    localStorage.setItem('globalComments', JSON.stringify(comments));
}

function saveRatings() {
    localStorage.setItem('anonymousRatings', JSON.stringify(anonymousRatings));
}

function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
}

function formatDate(timestamp) {
    return new Date(timestamp).toLocaleString();
}

function getDefaultGameState(civKey) {
    if (civKey === 'china') {
        return {
            currentScene: 'start',
            choicesMade: 0,
            dynasty: 'Han',
            status: 'Scholar',
            gameEnded: false
        };
    }

    if (civKey === 'egypt') {
        return {
            currentScene: 'start',
            choicesMade: 0,
            dynasty: 'New Kingdom',
            status: 'Young Official',
            gameEnded: false
        };
    }

    return {
        currentScene: 'start',
        choicesMade: 0,
        dynasty: 'Akkadian Empire',
        status: 'Rising Official',
        gameEnded: false
    };
}

function normaliseProfiles() {
    Object.keys(userProfiles).forEach((email) => {
        const profile = userProfiles[email];

        if (!Array.isArray(profile.saveSlots)) {
            profile.saveSlots = [null, null, null];

            if (profile.saveData && profile.saveData.civ && profile.saveData.state) {
                profile.saveSlots[0] = {
                    slotId: 1,
                    civ: profile.saveData.civ,
                    state: deepCopy(profile.saveData.state),
                    lastSaved: Date.now()
                };
            }
        }

        if (profile.saveSlots.length < 3) {
            while (profile.saveSlots.length < 3) {
                profile.saveSlots.push(null);
            }
        }

        profile.saveSlots = profile.saveSlots.slice(0, 3).map((slot, index) => {
            if (!slot) return null;
            return {
                slotId: index + 1,
                civ: slot.civ,
                state: slot.state || getDefaultGameState(slot.civ || 'china'),
                lastSaved: slot.lastSaved || Date.now()
            };
        });

        if (!Array.isArray(profile.comments)) {
            profile.comments = [];
        }
    });

    saveUserProfiles();
}

function normaliseComments() {
    comments = comments.map((comment) => ({
        id: comment.id || (Date.now() + Math.random()),
        text: comment.text || '',
        username: comment.username || 'User',
        pronouns: comment.pronouns || 'they/them',
        authorEmail: comment.authorEmail || null,
        timestampMs: comment.timestampMs || new Date(comment.timestamp).getTime() || Date.now(),
        parentId: typeof comment.parentId === 'undefined' ? null : comment.parentId
    }));
    saveComments();
}

function normaliseRatings() {
    anonymousRatings = anonymousRatings.map((rating) => ({
        id: rating.id || (Date.now() + Math.random()),
        stars: Number(rating.stars) || 0,
        text: rating.text || '',
        timestampMs: rating.timestampMs || new Date(rating.timestamp).getTime() || Date.now()
    }));
    saveRatings();
}

normaliseProfiles();
normaliseComments();
normaliseRatings();

let signupEmail, signupUsername, signupPassword, signupPronoun, accountMessage,
    civRadios, gameSection, displayUsername, displayPronoun, restartBtn,
    resetGameBtn, gameChoiceForm, makeChoiceBtn, gameOptionsEl,
    gameEndingEl, endingTitleEl, endingDescriptionEl, historicalContextEl,
    gameTitleEl, gameDescriptionEl, civGameTitle, gameIntro, currentCivDisplay,
    currentDynastyEl, currentStatusEl, choiceCountEl, signupTab, loginTab,
    signupForm, loginForm, loginEmail, loginPassword, newCommentForm, newCommentText,
    commentsList, openEditProfileBtn, editProfileForm, editUsername, editPronoun,
    editPassword, cancelEditProfileBtn, saveSlotsContainer, ratingForm, ratingStars,
    ratingText, editingRatingId, cancelRatingEditBtn, ratingsList, ratingSummary;

document.addEventListener('DOMContentLoaded', function () {
    signupEmail = document.getElementById('signupEmail');
    signupUsername = document.getElementById('signupUsername');
    signupPassword = document.getElementById('signupPassword');
    signupPronoun = document.getElementById('signupPronoun');
    accountMessage = document.getElementById('accountMessage');
    civRadios = document.querySelectorAll('input[name="civilization"]');
    gameSection = document.getElementById('destinyGame');
    displayUsername = document.getElementById('displayUsername');
    displayPronoun = document.getElementById('displayPronoun');
    restartBtn = document.getElementById('restartBtn');
    resetGameBtn = document.getElementById('resetGameBtn');
    gameChoiceForm = document.getElementById('gameChoiceForm');
    makeChoiceBtn = document.getElementById('makeChoiceBtn');
    gameOptionsEl = document.getElementById('gameOptions');
    gameEndingEl = document.getElementById('gameEnding');
    endingTitleEl = document.getElementById('endingTitle');
    endingDescriptionEl = document.getElementById('endingDescription');
    historicalContextEl = document.getElementById('historicalContext');
    gameTitleEl = document.getElementById('gameTitle');
    gameDescriptionEl = document.getElementById('gameDescription');
    civGameTitle = document.getElementById('civGameTitle');
    gameIntro = document.getElementById('gameIntro');
    currentCivDisplay = document.getElementById('currentCivDisplay');
    currentDynastyEl = document.getElementById('currentDynasty');
    currentStatusEl = document.getElementById('currentStatus');
    choiceCountEl = document.getElementById('choiceCount');
    signupTab = document.getElementById('signupTab');
    loginTab = document.getElementById('loginTab');
    signupForm = document.getElementById('signupForm');
    loginForm = document.getElementById('loginForm');
    loginEmail = document.getElementById('loginEmail');
    loginPassword = document.getElementById('loginPassword');
    newCommentForm = document.getElementById('newCommentForm');
    newCommentText = document.getElementById('newCommentText');
    commentsList = document.getElementById('commentsList');
    openEditProfileBtn = document.getElementById('openEditProfileBtn');
    editProfileForm = document.getElementById('editProfileForm');
    editUsername = document.getElementById('editUsername');
    editPronoun = document.getElementById('editPronoun');
    editPassword = document.getElementById('editPassword');
    cancelEditProfileBtn = document.getElementById('cancelEditProfileBtn');
    saveSlotsContainer = document.getElementById('saveSlotsContainer');
    ratingForm = document.getElementById('ratingForm');
    ratingStars = document.getElementById('ratingStars');
    ratingText = document.getElementById('ratingText');
    editingRatingId = document.getElementById('editingRatingId');
    cancelRatingEditBtn = document.getElementById('cancelRatingEditBtn');
    ratingsList = document.getElementById('ratingsList');
    ratingSummary = document.getElementById('ratingSummary');

    function clearAuthFields() {
        signupEmail.value = '';
        signupUsername.value = '';
        signupPassword.value = '';
        signupPronoun.value = '';
        loginEmail.value = '';
        loginPassword.value = '';
    }

    function setAccountMessage(message, type = '') {
        accountMessage.textContent = message;
        accountMessage.className = 'account-message';
        if (type) {
            accountMessage.classList.add(type);
        }
    }

    function setCivInputsDisabled(shouldDisable) {
        civRadios.forEach((radio) => {
            radio.disabled = shouldDisable;
            if (shouldDisable) {
                radio.checked = false;
            }
        });
    }

    function updatePlayerPanel() {
        if (currentUser) {
            displayUsername.textContent = currentUser.username;
            displayPronoun.textContent = currentUser.pronouns;
        } else {
            displayUsername.textContent = '—';
            displayPronoun.textContent = '—';
        }
    }

    function fillEditProfileForm() {
        if (!currentUser) return;
        editUsername.value = currentUser.username;
        editPronoun.value = currentUser.pronouns;
        editPassword.value = '';
    }

    function openEditProfileForm() {
        if (!currentUser) {
            alert('Please log in first.');
            return;
        }
        fillEditProfileForm();
        editProfileForm.classList.remove('hidden');
    }

    function closeEditProfileForm() {
        editProfileForm.classList.add('hidden');
        editPassword.value = '';
    }

    function getLatestOccupiedSlot() {
        if (!currentUser) return null;
        const occupied = currentUser.saveSlots.filter(Boolean);
        if (occupied.length === 0) return null;
        occupied.sort((a, b) => b.lastSaved - a.lastSaved);
        return occupied[0];
    }

    function renderSaveSlots() {
        if (!saveSlotsContainer) return;

        if (!currentUser) {
            saveSlotsContainer.innerHTML = '<p class="empty-note">Log in to use the save slots.</p>';
            return;
        }

        saveSlotsContainer.innerHTML = '';

        currentUser.saveSlots.forEach((slot, index) => {
            const slotCard = document.createElement('div');
            slotCard.className = 'save-slot-card';

            const title = document.createElement('h5');
            title.textContent = `Slot ${index + 1}`;
            slotCard.appendChild(title);

            const civLine = document.createElement('p');
            const saveLine = document.createElement('p');

            if (slot) {
                civLine.textContent = `Civilization: ${civData[slot.civ] ? civData[slot.civ].name : slot.civ}`;
                saveLine.textContent = `Last saved: ${formatDate(slot.lastSaved)}`;
            } else {
                civLine.textContent = 'Civilization: Empty';
                saveLine.textContent = 'Last saved: —';
            }

            slotCard.appendChild(civLine);
            slotCard.appendChild(saveLine);

            const actions = document.createElement('div');
            actions.className = 'slot-actions';

            const saveBtn = document.createElement('button');
            saveBtn.type = 'button';
            saveBtn.className = 'slot-save-btn';
            saveBtn.textContent = `Save Here`;
            saveBtn.addEventListener('click', () => saveToSlot(index));
            actions.appendChild(saveBtn);

            const loadBtn = document.createElement('button');
            loadBtn.type = 'button';
            loadBtn.className = 'slot-load-btn';
            loadBtn.textContent = 'Load';
            loadBtn.disabled = !slot;
            loadBtn.addEventListener('click', () => loadFromSlot(index));
            actions.appendChild(loadBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'slot-delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.disabled = !slot;
            deleteBtn.addEventListener('click', () => deleteSlot(index));
            actions.appendChild(deleteBtn);

            slotCard.appendChild(actions);
            saveSlotsContainer.appendChild(slotCard);
        });
    }

    function saveToSlot(slotIndex) {
        if (!currentUser || !currentCiv) {
            alert('Please start a civilization first before saving.');
            return;
        }

        currentUser.saveSlots[slotIndex] = {
            slotId: slotIndex + 1,
            civ: currentCiv,
            state: deepCopy(civData[currentCiv].gameState),
            lastSaved: Date.now()
        };

        userProfiles[currentUser.email] = currentUser;
        saveUserProfiles();
        renderSaveSlots();
        alert(`Your progress was saved to Slot ${slotIndex + 1}.`);
    }

    function loadFromSlot(slotIndex) {
        if (!currentUser) return;

        const slot = currentUser.saveSlots[slotIndex];
        if (!slot) {
            alert('That slot is empty.');
            return;
        }

        const targetRadio = document.getElementById(`civ-${slot.civ}`);
        if (targetRadio) {
            targetRadio.checked = true;
        }

        initGame(slot.civ, slot.state);
        alert(`Loaded Slot ${slotIndex + 1}.`);
    }

    function deleteSlot(slotIndex) {
        if (!currentUser) return;

        const slot = currentUser.saveSlots[slotIndex];
        if (!slot) {
            alert('That slot is already empty.');
            return;
        }

        if (!confirm(`Delete the save in Slot ${slotIndex + 1}?`)) {
            return;
        }

        currentUser.saveSlots[slotIndex] = null;
        userProfiles[currentUser.email] = currentUser;
        saveUserProfiles();
        renderSaveSlots();
        alert(`Slot ${slotIndex + 1} was deleted.`);
    }

    function updateGameStats() {
        if (!currentCiv || !civData[currentCiv]) return;
        const state = civData[currentCiv].gameState;
        currentCivDisplay.textContent = civData[currentCiv].name;
        currentDynastyEl.textContent = state.dynasty;
        currentStatusEl.textContent = state.status;
        choiceCountEl.textContent = state.choicesMade;
    }

    function loadScene(sceneId) {
        if (!currentCiv) return;

        const civ = civData[currentCiv];
        const scene = civ.gameScenarios[sceneId];

        if (!scene) {
            console.error('Scene not found:', sceneId);
            return;
        }

        civ.gameState.currentScene = sceneId;
        gameTitleEl.textContent = scene.title;

        let description = scene.description;
        if (currentUser && currentUser.username) {
            description = `Hello, ${currentUser.username}. ${description}`;
        }
        gameDescriptionEl.textContent = description;

        if (scene.ending) {
            showEnding(scene.ending, scene.endingType);
            return;
        }

        gameOptionsEl.innerHTML = '';
        scene.options.forEach((option, index) => {
            const radioId = `option-${index}`;
            const div = document.createElement('div');
            div.className = 'option-radio';
            div.innerHTML = `
                <input type="radio" name="gameChoice" id="${radioId}" value="${index}" data-next="${option.nextScene}" data-status="${option.statusChange || ''}">
                <label for="${radioId}">${index + 1}. ${option.text}</label>
            `;
            gameOptionsEl.appendChild(div);
        });

        makeChoiceBtn.disabled = true;
        document.querySelectorAll('input[name="gameChoice"]').forEach((radio) => {
            radio.addEventListener('change', () => {
                makeChoiceBtn.disabled = false;
            });
        });

        gameEndingEl.classList.add('hidden');
    }

    function chooseOption(selectedRadio) {
        if (!currentCiv) return;

        const civ = civData[currentCiv];
        const nextScene = selectedRadio.dataset.next;
        const statusChange = selectedRadio.dataset.status;

        civ.gameState.choicesMade += 1;
        if (statusChange) {
            civ.gameState.status = statusChange;
        }

        civ.gameState.currentScene = nextScene;
        updateGameStats();

        makeChoiceBtn.disabled = true;
        document.querySelectorAll('input[name="gameChoice"]').forEach((radio) => {
            radio.disabled = true;
        });

        setTimeout(() => {
            loadScene(nextScene);
        }, 500);
    }

    function showEnding(endingId, endingType) {
        if (!currentCiv) return;

        const civ = civData[currentCiv];
        const ending = civ.gameEndings[endingId];
        if (!ending) {
            console.error('Ending not found:', endingId);
            return;
        }

        let endingDesc = ending.description;
        if (currentUser && currentUser.username) {
            endingDesc = `Dear ${currentUser.username}, ${endingDesc}`;
        }

        endingTitleEl.textContent = ending.title;
        endingDescriptionEl.textContent = endingDesc;
        historicalContextEl.innerHTML = `
            <h4>${ending.historicalContext.title}</h4>
            <p>${ending.historicalContext.text}</p>
        `;

        gameEndingEl.classList.remove('hidden');
        gameOptionsEl.innerHTML = '';
        makeChoiceBtn.disabled = true;

        if (endingType === 'good') {
            gameEndingEl.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else if (endingType === 'bad') {
            gameEndingEl.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else {
            gameEndingEl.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
        }

        civ.gameState.gameEnded = true;
    }

    function initGame(civKey, savedState = null) {
        if (!currentUser) {
            alert('Please sign in first.');
            return;
        }

        currentCiv = civKey;
        const civ = civData[civKey];
        applyTheme(civKey);

        if (savedState) {
            civ.gameState = deepCopy(savedState);
        } else {
            civ.gameState = getDefaultGameState(civKey);
        }

        updateGameStats();
        loadScene(civ.gameState.currentScene || 'start');

        gameSection.style.display = 'block';
        gameEndingEl.classList.add('hidden');
        civGameTitle.textContent = `Your Journey: ${civ.name}`;
        gameIntro.textContent = `${currentUser.username}, experience life in ancient ${civ.name} through this interactive story.`;
    }

    function updateCommentsAfterProfileEdit(oldUsername, oldPronouns) {
        comments.forEach((comment) => {
            const sameAuthor = comment.authorEmail === currentUser.email || comment.username === oldUsername;
            if (sameAuthor) {
                comment.username = currentUser.username;
                comment.pronouns = currentUser.pronouns;
                comment.authorEmail = currentUser.email;
            }
        });
        saveComments();
    }

    function isOwnComment(comment) {
        if (!currentUser) return false;
        return comment.authorEmail === currentUser.email;
    }

    function canEditComment(comment) {
        return isOwnComment(comment) && (Date.now() - comment.timestampMs <= 10 * 60 * 1000);
    }

    function renderComments() {
        if (!commentsList) return;

        commentsList.innerHTML = '';
        const topLevelComments = comments
            .filter((comment) => comment.parentId === null)
            .sort((a, b) => b.timestampMs - a.timestampMs);

        if (topLevelComments.length === 0) {
            commentsList.innerHTML = '<p class="empty-note">No comments yet.</p>';
            return;
        }

        topLevelComments.forEach((comment) => {
            const commentEl = createCommentElement(comment, false);
            commentsList.appendChild(commentEl);

            const replies = comments
                .filter((reply) => reply.parentId === comment.id)
                .sort((a, b) => a.timestampMs - b.timestampMs);

            if (replies.length > 0) {
                const repliesContainer = document.createElement('div');
                repliesContainer.className = 'replies';
                replies.forEach((reply) => {
                    repliesContainer.appendChild(createCommentElement(reply, true));
                });
                commentEl.appendChild(repliesContainer);
            }
        });
    }

    function createCommentElement(comment, isReply) {
        const wrapper = document.createElement('div');
        wrapper.className = isReply ? 'comment reply' : 'comment';
        wrapper.dataset.commentId = comment.id;

        const header = document.createElement('div');
        header.className = 'comment-header';

        const meta = document.createElement('div');
        meta.className = 'comment-meta';

        const strong = document.createElement('strong');
        strong.textContent = comment.username;
        meta.appendChild(strong);

        const pronouns = document.createElement('span');
        pronouns.className = 'pronouns';
        pronouns.textContent = `(${comment.pronouns})`;
        meta.appendChild(pronouns);

        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        timestamp.textContent = formatDate(comment.timestampMs);
        meta.appendChild(timestamp);

        header.appendChild(meta);

        const actionBox = document.createElement('div');
        actionBox.className = 'comment-actions';

        if (currentUser && !isReply) {
            const replyBtn = document.createElement('button');
            replyBtn.type = 'button';
            replyBtn.className = 'comment-action-btn';
            replyBtn.textContent = 'Reply';
            replyBtn.addEventListener('click', () => {
                showReplyForm(comment.id, wrapper);
            });
            actionBox.appendChild(replyBtn);
        }

        if (canEditComment(comment)) {
            const editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'comment-action-btn';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                showEditCommentForm(comment.id, wrapper);
            });
            actionBox.appendChild(editBtn);
        }

        if (isOwnComment(comment)) {
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'comment-action-btn danger-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                deleteComment(comment.id);
            });
            actionBox.appendChild(deleteBtn);
        }

        header.appendChild(actionBox);
        wrapper.appendChild(header);

        const body = document.createElement('div');
        body.className = 'comment-body';
        body.textContent = comment.text;
        wrapper.appendChild(body);

        return wrapper;
    }

    function showReplyForm(parentId, commentElement) {
        const oldForm = commentElement.querySelector('.reply-form');
        if (oldForm) {
            oldForm.remove();
        }

        const form = document.createElement('form');
        form.className = 'reply-form';
        form.innerHTML = `
            <textarea rows="2" placeholder="Write your reply..." required></textarea>
            <div class="reply-actions">
                <button type="submit" class="submit-reply">Post Reply</button>
                <button type="button" class="cancel-reply">Cancel</button>
            </div>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!currentUser) {
                alert('Please log in first.');
                return;
            }

            const replyText = form.querySelector('textarea').value.trim();
            if (!replyText) return;

            const reply = {
                id: Date.now() + Math.random(),
                text: replyText,
                username: currentUser.username,
                pronouns: currentUser.pronouns,
                authorEmail: currentUser.email,
                timestampMs: Date.now(),
                parentId: parentId
            };

            comments.push(reply);
            saveComments();
            renderComments();
        });

        form.querySelector('.cancel-reply').addEventListener('click', () => {
            form.remove();
        });

        commentElement.appendChild(form);
    }

    function showEditCommentForm(commentId, commentElement) {
        const comment = comments.find((item) => item.id === commentId);
        if (!comment) return;

        const oldEditor = commentElement.querySelector('.comment-edit-box');
        if (oldEditor) {
            oldEditor.remove();
        }

        const editBox = document.createElement('div');
        editBox.className = 'comment-edit-box';
        editBox.innerHTML = `
            <textarea rows="3" required>${comment.text}</textarea>
            <div class="inline-actions">
                <button type="button" class="mini-btn save-comment-edit">Save Comment</button>
                <button type="button" class="mini-btn secondary-btn cancel-comment-edit">Cancel</button>
            </div>
        `;

        editBox.querySelector('.save-comment-edit').addEventListener('click', () => {
            const newText = editBox.querySelector('textarea').value.trim();
            if (!newText) return;
            comment.text = newText;
            saveComments();
            renderComments();
        });

        editBox.querySelector('.cancel-comment-edit').addEventListener('click', () => {
            editBox.remove();
        });

        commentElement.appendChild(editBox);
    }

    function deleteComment(commentId) {
        const targetComment = comments.find((item) => item.id === commentId);
        if (!targetComment) return;

        if (!confirm('Delete this comment?')) {
            return;
        }

        if (targetComment.parentId === null) {
            comments = comments.filter((item) => item.id !== commentId && item.parentId !== commentId);
        } else {
            comments = comments.filter((item) => item.id !== commentId);
        }

        saveComments();
        renderComments();
    }

    function resetRatingForm() {
        ratingForm.reset();
        editingRatingId.value = '';
        cancelRatingEditBtn.classList.add('hidden');
        document.getElementById('submitRatingBtn').innerHTML = '<i class="fas fa-paper-plane"></i> Post Rating';
    }

    function renderRatings() {
        if (!ratingsList || !ratingSummary) return;

        if (anonymousRatings.length === 0) {
            ratingSummary.innerHTML = '<p class="empty-note">No ratings yet.</p>';
            ratingsList.innerHTML = '<p class="empty-note">Be the first to rate the website.</p>';
            return;
        }

        const totalStars = anonymousRatings.reduce((sum, rating) => sum + rating.stars, 0);
        const average = (totalStars / anonymousRatings.length).toFixed(1);
        ratingSummary.innerHTML = `
            <p><strong>Average Rating:</strong> ${average} / 5</p>
            <p><strong>Total Reviews:</strong> ${anonymousRatings.length}</p>
        `;

        ratingsList.innerHTML = '';
        const sortedRatings = [...anonymousRatings].sort((a, b) => b.timestampMs - a.timestampMs);

        sortedRatings.forEach((rating) => {
            const card = document.createElement('div');
            card.className = 'rating-card';

            const top = document.createElement('div');
            top.className = 'rating-top';
            top.innerHTML = `
                <div>
                    <strong>Anonymous</strong>
                    <p class="rating-stars">${'★'.repeat(rating.stars)}${'☆'.repeat(5 - rating.stars)}</p>
                </div>
                <div>${formatDate(rating.timestampMs)}</div>
            `;
            card.appendChild(top);

            const text = document.createElement('p');
            text.textContent = rating.text || 'No written review.';
            card.appendChild(text);

            const actions = document.createElement('div');
            actions.className = 'rating-actions';

            const editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'rating-action-btn';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                editingRatingId.value = rating.id;
                ratingStars.value = String(rating.stars);
                ratingText.value = rating.text;
                cancelRatingEditBtn.classList.remove('hidden');
                document.getElementById('submitRatingBtn').innerHTML = '<i class="fas fa-check"></i> Update Rating';
                ratingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            actions.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'rating-action-btn danger-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                if (!confirm('Delete this rating?')) return;
                anonymousRatings = anonymousRatings.filter((item) => item.id !== rating.id);
                saveRatings();
                renderRatings();
                if (editingRatingId.value === String(rating.id)) {
                    resetRatingForm();
                }
            });
            actions.appendChild(deleteBtn);

            card.appendChild(actions);
            ratingsList.appendChild(card);
        });
    }

    function loginUser(profile) {
        currentUser = userProfiles[profile.email];
        updatePlayerPanel();
        setAccountMessage(`Welcome, ${currentUser.username}!`, 'success');
        setCivInputsDisabled(false);
        closeEditProfileForm();
        renderSaveSlots();
        renderComments();

        const latestSlot = getLatestOccupiedSlot();
        if (latestSlot) {
            const latestRadio = document.getElementById(`civ-${latestSlot.civ}`);
            if (latestRadio) {
                latestRadio.checked = true;
            }
            initGame(latestSlot.civ, latestSlot.state);
        } else {
            gameSection.style.display = 'none';
            applyTheme('neutral');
        }
    }

    // ----- Auth tabs -----
    signupTab.addEventListener('click', () => {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        setAccountMessage('');
    });

    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        setAccountMessage('');
    });

    // ----- Sign up -----
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = signupEmail.value.trim();
        const username = signupUsername.value.trim();
        const password = signupPassword.value.trim();
        const pronouns = signupPronoun.value;

        if (!email || !username || !password || !pronouns) {
            setAccountMessage('Please complete all sign up fields.', 'error');
            return;
        }

        const usernameTaken = Object.values(userProfiles).some((profile) => {
            return profile.username.toLowerCase() === username.toLowerCase();
        });

        if (usernameTaken) {
            setAccountMessage('Username already taken.', 'error');
            return;
        }

        if (userProfiles[email]) {
            setAccountMessage('That email is already registered.', 'error');
            return;
        }

        userProfiles[email] = {
            email: email,
            username: username,
            password: password,
            pronouns: pronouns,
            saveSlots: [null, null, null],
            comments: []
        };

        saveUserProfiles();
        clearAuthFields();
        loginUser(userProfiles[email]);
    });

    // ----- Login -----
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();
        const profile = userProfiles[email];

        if (!profile || profile.password !== password) {
            setAccountMessage('Wrong email or password.', 'error');
            return;
        }

        clearAuthFields();
        loginUser(profile);
    });

    // ----- Edit profile -----
    openEditProfileBtn.addEventListener('click', openEditProfileForm);
    cancelEditProfileBtn.addEventListener('click', closeEditProfileForm);

    editProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!currentUser) return;

        const oldUsername = currentUser.username;
        const oldPronouns = currentUser.pronouns;
        const newUsername = editUsername.value.trim();
        const newPronouns = editPronoun.value;
        const newPassword = editPassword.value.trim();

        if (!newUsername || !newPronouns) {
            alert('Please complete the profile form.');
            return;
        }

        const usernameTaken = Object.values(userProfiles).some((profile) => {
            return profile.email !== currentUser.email && profile.username.toLowerCase() === newUsername.toLowerCase();
        });

        if (usernameTaken) {
            alert('That username is already being used.');
            return;
        }

        currentUser.username = newUsername;
        currentUser.pronouns = newPronouns;
        if (newPassword) {
            currentUser.password = newPassword;
        }

        userProfiles[currentUser.email] = currentUser;
        saveUserProfiles();
        updateCommentsAfterProfileEdit(oldUsername, oldPronouns);
        updatePlayerPanel();
        renderComments();
        closeEditProfileForm();
        alert('Profile updated.');
    });

    // ----- Civilization choice -----
    civRadios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            if (!currentUser) {
                alert('Please sign in first.');
                event.target.checked = false;
                return;
            }

            const civValue = event.target.value;
            const proceed = confirm(`Start a fresh game in ${civData[civValue].name}? Save your current run first if you still need it.`);
            if (!proceed) {
                event.target.checked = false;
                return;
            }

            initGame(civValue);
        });
    });

    // ----- Game form -----
    gameChoiceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (makeChoiceBtn.disabled) return;

        const selectedRadio = document.querySelector('input[name="gameChoice"]:checked');
        if (selectedRadio) {
            chooseOption(selectedRadio);
        }
    });

    resetGameBtn.addEventListener('click', () => {
        if (!currentCiv) {
            alert('Start a game first.');
            return;
        }

        if (!confirm('Reset the current game?')) {
            return;
        }

        civData[currentCiv].gameState = getDefaultGameState(currentCiv);
        updateGameStats();
        loadScene('start');
        gameEndingEl.classList.add('hidden');
    });

    restartBtn.addEventListener('click', () => {
        if (!currentCiv) return;
        civData[currentCiv].gameState = getDefaultGameState(currentCiv);
        updateGameStats();
        loadScene('start');
        gameEndingEl.classList.add('hidden');
    });

    // ----- New top-level comment -----
    newCommentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!currentUser) {
            alert('Please log in before posting a comment.');
            return;
        }

        const text = newCommentText.value.trim();
        if (!text) return;

        comments.push({
            id: Date.now() + Math.random(),
            text: text,
            username: currentUser.username,
            pronouns: currentUser.pronouns,
            authorEmail: currentUser.email,
            timestampMs: Date.now(),
            parentId: null
        });

        saveComments();
        newCommentText.value = '';
        renderComments();
    });

    // ----- Rating -----
    ratingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const stars = Number(ratingStars.value);
        const text = ratingText.value.trim();
        if (!stars) {
            alert('Please select a star rating.');
            return;
        }

        if (editingRatingId.value) {
            const ratingToEdit = anonymousRatings.find((item) => String(item.id) === editingRatingId.value);
            if (ratingToEdit) {
                ratingToEdit.stars = stars;
                ratingToEdit.text = text;
                ratingToEdit.timestampMs = Date.now();
            }
        } else {
            anonymousRatings.push({
                id: Date.now() + Math.random(),
                stars: stars,
                text: text,
                timestampMs: Date.now()
            });
        }

        saveRatings();
        renderRatings();
        resetRatingForm();
    });

    cancelRatingEditBtn.addEventListener('click', resetRatingForm);

    // ----- Functions -----
    setCivInputsDisabled(true);
    updatePlayerPanel();
    renderSaveSlots();
    renderComments();
    renderRatings();
});