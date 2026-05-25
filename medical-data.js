/* ===== Dog Library Clinical Veterinary Database ===== */
(function() {
  'use strict';

  const DOG_MEDICAL_DATA = {
    // Detailed clinic advice for 12 popular/representative breeds
    breeds: {
      "pomeranian": {
        vetCheckpoints: {
          ko: [
            { title: "🏥 슬개골 탈구 (Patellar Luxation)", desc: "무릎 관절의 슬개골이 원래 홈에서 탈구되는 질환입니다. 포메라니안의 약 80% 이상이 유전적 소인을 갖고 있어 잦은 다리 절뚝임이나 딛지 못하는 증상 발생 시 즉시 방사선 진단을 받아야 합니다. 높은 곳에서 점프하지 않게 슬라이드를 대주세요." },
            { title: "🗣️ 기관 허착/협착증 (Tracheal Collapse)", desc: "산소를 공급하는 통로인 기관지가 타원형으로 납작하게 찌그러져 호흡곤란을 겪는 질환입니다. 흥분하거나 물을 마신 후 목에서 '거위 울음소리(Honking Cough)'와 유사한 마른 기침을 낸다면 엑스레이 검사로 연골의 퇴화 단계를 확인하고 절대 목줄 대신 가슴줄(하네스)을 써야 합니다." },
            { title: "🧬 알로페시아 X (Alopecia X / 클리퍼 증후군)", desc: "질병이나 호르몬 이상이 아닌 유전적 원인으로 전신 털이 빠져 다시 나지 않는 탈모증입니다. 미용 시 피부 자극을 주는 이발기(클리퍼)로 가깝게 깎을 때 주로 트리거가 되므로 포메라니안은 항상 털을 적당량 남기는 가위 컷을 하는 것이 예방에 매우 유리합니다." }
          ],
          en: [
            { title: "🏥 Patellar Luxation", desc: "A common condition where the kneecap slips out of its groove. Over 80% of Pomeranians have genetic vulnerability. If you notice skipping or limping, get X-rays. Prevent high jumping and place non-slip rugs." },
            { title: "🗣️ Tracheal Collapse", desc: "The windpipe rings weaken and flatten, restricting airflow. Characterized by a dry 'goose-honk' cough when excited or after drinking. Never use a collar; switch entirely to a harness to avoid airway pressure." },
            { title: "🧬 Alopecia X (Black Skin Disease)", desc: "Cosmetic hair loss without inflammation, often triggered by shaving the thick double coat too short with electric clippers. Hand-scissors grooms are highly recommended to prevent permanent coat damage." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🔄 일시적 역재치기 (Reverse Sneezing)", desc: "갑자기 목덜미를 쭉 빼고 바람을 안쪽으로 흡입하며 '끅끅'거리는 거위 기침 같은 소리를 냅니다. 기도가 좁고 긴 소형견들의 연개구(입천장 뒷부분)가 흥분/온도변화/향수에 자극받아 발생하는 단순 경련입니다. 목덜미를 부드럽게 쓰다듬거나 콧구멍을 2초간 막아 침을 삼키게 하면 바로 풀립니다." },
            { title: "⚡ 미세한 흥분성 떨림 (Excitement Shiver)", desc: "춥지 않은 상온 환경인데도 기뻐서 방방 뛰거나 낯선 곳에 갈 때 부들부들 몸을 떱니다. 몸집이 작은 토이 그룹 특유의 높은 대사율과 신경 흥분이 결합된 신체적 감정 표현으로, 질병이나 통증이 아니므로 안아주며 흥분을 가라앉혀 주면 금방 호전됩니다." }
          ],
          en: [
            { title: "🔄 Reverse Sneezing", desc: "A rapid, involuntary inhalation sequence making snorting/honking sounds. Triggered by nasal irritation or excitement. Completely harmless. Rub their throat or block their nose for a second to force a swallow." },
            { title: "⚡ Excitement Tremors", desc: "Shivering in comfortable temperatures. A common byproduct of a high metabolic rate and sensitive nervous system. They shake due to heightened emotions (happy or anxious), not pain or seizures." }
          ]
        }
      },
      "maltese": {
        vetCheckpoints: {
          ko: [
            { title: "❤️ 이첨판 폐쇄부전증 (Mitral Valve Insufficiency)", desc: "좌심방과 좌심실 사이 혈류를 통제하는 이첨판막이 변성되어 피가 역류하는 퇴행성 심장 질환입니다. 말티즈가 7세 이상이 되면 청진을 통한 심장 잡음(Heart Murmur) 조기 검진이 절대적입니다. 잠잘 때 호흡수가 1분당 30회 이상이거나 기침 시 즉각적인 초음파 정밀검사가 필합니다." },
            { title: "💧 선천성 누관 폐쇄 및 유루증 (Epiphora / 눈물 과다)", desc: "눈물이 콧구멍으로 빠져나가는 얇은 관(누관)이 막히거나 속눈썹이 눈을 찔러 눈물이 계속 넘쳐 흐릅니다. 털이 적갈색으로 변하고 세균이 번식해 악취와 진균성 피부염이 생기므로 매일 눈가를 건조하게 닦아주고 병원서 누관 개통(세척) 검사를 받아야 합니다." },
            { title: "🦴 소형견 슬개골 탈구", desc: "포메라니안과 마찬가지로 유전적으로 대퇴골 고랑이 얕아 무릎뼈 이탈이 만성화되기 쉽습니다. 깽깽이 걸음을 하거나 뒷다리를 차는 모션이 포착될 시 슬개골 기수(1~4기) 상태에 따라 관절 영양제 급여 및 외과적 수술 시기를 적기에 논의해야 합니다." }
          ],
          en: [
            { title: "❤️ Mitral Valve Disease (MVD)", desc: "Degenerative heart failure where the heart valves fail to close properly. Maltese have exceptionally high rates of MVD. Annual stethoscope auscultation for murmurs starting at age 6 is critical. Monitor sleeping breath rate." },
            { title: "💧 Epiphora (Tear Staining)", desc: "Excessive tearing caused by blocked tear ducts or ingrown eyelashes. Leads to red-brown stains, odor, and skin infections. Clean eye areas daily and have a vet evaluate duct blockages or do a flush." },
            { title: "🦴 Patellar Luxation", desc: "Due to genetically shallow grooves in the femur, the kneecap easily slides out of position. स्किप or hopping gaits require immediate orthopedic grading to prevent joint degeneration." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🩺 하얀 개 증후군 머리 떨림 (Shaker Syndrome)", desc: "쉬고 있거나 간식을 집중해서 기다릴 때 머리와 눈가가 미세하게 부르르 떨릴 수 있습니다. 말티즈 등 선천적으로 모색이 하얀 소형견들에게 드물게 나타나는 경미한 뇌간 신경계 세포의 떨림증입니다. 일상생활이나 사료 섭취에 문제 없다면 치료가 필요치 않은 정상 특징입니다." },
            { title: "🤧 거위 기침 소리 (역재치기)", desc: "갑자기 먼지를 들이마셨거나 물을 마신 직후, 꺽꺽 소리를 내는 것입니다. 이 증상은 아픈 것이 아니며, 일시적인 호흡 통로의 정렬 경련이므로 가슴을 쓸어주고 공기 순환을 원활히 시켜주면 가라앉습니다." }
          ],
          en: [
            { title: "🩺 White Dog Shaker Syndrome", desc: "Mild, localized tremors in the head/body when focusing or resting. Common in small white-coated breeds. If it doesn't affect coordination, appetite, or posture, it is benign and considered a normal quirk." },
            { title: "🤧 Reverse Sneezing", desc: "Short spasms of coughing/snorting caused by drinking too fast or sniffing particles. Safe and benign. Help them calm down and massage their chest to help expand the airway." }
          ]
        }
      },
      "poodle": {
        vetCheckpoints: {
          ko: [
            { title: "👂 삼출성 외이염 (Otitis Externa)", desc: "푸들은 곱슬곱슬한 털이 귀 안쪽 통로까지 빽빽이 자라고 귓바퀴가 완전히 아래로 덮여있어 습기 배출이 불가능합니다. 이는 곰팡이(효모균)의 증식 온상이 되어 귀 가려움증, 냄새를 유발하므로 주기적으로 귀 안쪽 털을 핀셋 등으로 정리하고 전용 세정제로 세척해야 합니다." },
            { title: "🧪 부신피질기능항진증 (Cushing's Syndrome)", desc: "부신에서 코르티솔 호르몬이 비정상적으로 과다 분비되어 몸을 해치는 질환입니다. 푸들이 8세 이상이 되면서 물을 비정상적으로 많이 마시고(다뇨/다갈), 배가 뚱뚱하게 올챙이처럼 나오며, 등 쪽 탈모가 대칭으로 온다면 반드시 ACTH 호르몬 자극 혈액 검사를 받아야 합니다." },
            { title: "🦴 특발성 대퇴골두 무혈성 괴사증 (LCPD)", desc: "어린 푸들(생후 4~10개월)에게서 호발하며, 허벅지 뼈 머리 부분에 혈액 공급이 끊겨 골두가 괴사하는 무서운 유전 질환입니다. 한쪽 뒷다리를 갑자기 전혀 딛지 못하고 만질 때 소리를 지른다면 단순 탈구가 아닌 대퇴골두 파괴 여부를 엑스레이로 감별해 절제 수술을 해야 합니다." }
          ],
          en: [
            { title: "👂 Otitis Externa (Ear Infection)", desc: "Floppy ears coupled with internal hair growth block air circulation, trapping moisture. Poodles are prone to chronic yeast and bacterial ear infections. Routinely pluck excessive ear canal hair and clean weekly." },
            { title: "🧪 Cushing's Disease (Hyperadrenocorticism)", desc: "Overproduction of cortisol. Symptoms in middle-aged/older poodles include extreme drinking/urination, symmetrical hair loss, and a potbellied appearance. Early diagnosis via ACTH screening is essential." },
            { title: "🦴 Legg-Calve-Perthes Disease (LCPD)", desc: "Aseptic necrosis of the femoral head in young poodles (4-10 months). The hip joint degenerates due to lack of blood supply, causing acute pain and limping. Requires prompt X-ray and surgical femoral head osteotomy." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "💤 REM 수면 중 뇌파 발작 같은 경련 (Sleep Twitching)", desc: "깊이 잠들었을 때 다리를 마구 젓거나, 웅얼거리며 끙끙 소리를 내고 온몸을 파르르 떱니다. 뇌가 매우 활발하게 낮 동안의 정보를 처리하고 깊은 꿈을 꾸고 있다는 최고의 안전한 이완 신호입니다. 간질 발작과 오해하여 흔들어 깨우면 강아지가 놀라 반사적으로 물 수 있으니 그대로 두세요." },
            { title: "🎨 성장기 모색의 페이딩 현상 (Color Fading)", desc: "어릴 때 짙은 레드, 애프리, 실버 색상이었던 털이 성견(1.5~2세)이 되면서 크림색에 가깝게 밝아지거나 흰 털이 점차 섞여서 희끗해집니다. 이는 영양 결핍이나 노화성 질환이 아니며, 푸들이 가진 'Chinchilla' 페이딩 우성 유전자의 자연스러운 작용입니다." }
          ],
          en: [
            { title: "💤 REM Sleep Twitching", desc: "Twitching legs, lip movements, and whines during deep sleep. A normal manifestation of REM dream cycles. Unlike clinical seizures, the dog will easily wake up if called, though letting them sleep is best." },
            { title: "🎨 Natural Color Fading", desc: "Deep red, apricot, or silver puppy coats fading to lighter shades (cream, peach, or light grey) as they mature. This is controlled by benign fading genes and is not a sign of malnutrition or skin illness." }
          ]
        }
      },
      "chihuahua": {
        vetCheckpoints: {
          ko: [
            { title: "🧠 선천성 뇌수두증 및 천문 불완전 융합 (Hydrocephalus / open fontanelle)", desc: "치와와는 두개골 뼈가 완전히 닫히지 않고 자라는 '천문(Skull Soft Spot)' 비율이 매우 높습니다. 뇌 속에 뇌척수액이 가득 차올라 머리가 종 모양처럼 크게 부풀어 오르고 눈이 사시 방향으로 쏠리거나 걸을 때 뱅글뱅글 돈다면 즉각 MRI 진단을 받아 뇌압을 조절해 주어야 합니다. 머리에 강한 타격을 주지 마십시오." },
            { title: "🦷 치주염 및 조기 탈락 (Severe Periodontal Disease)", desc: "치와와의 턱 크기는 기네스 급으로 작은 반면, 이빨 개수는 일반 개들과 동일한 42개입니다. 좁은 공간에 영구치가 우겨지듯 겹쳐서 나오므로 틈새에 치석이 무자비하게 쌓여 2~3세 어린 나이에도 이빨이 썩고 흔들려 빠지는 일이 호발합니다. 치석 전용 껌보다는 매일 양치해 주는 훈련이 조기 탈락을 유발하지 않는 지름길입니다." },
            { title: "🩸 급성 저혈당증 (Hypoglycemia in Puppies)", desc: "초소형 치와와 자견(생후 2~5개월)은 체내 간에 당분을 비축하는 글리코겐 저장 용량이 매우 적습니다. 사료를 한두 끼만 굶어도 당수치가 수직 하강해 기운 없이 쓰러지거나 혼수 발작을 일으키게 됩니다. 쓰러졌을 땐 억지로 물을 삼키게 하지 마시고 잇몸에 설탕물이나 시럽을 발라 빠르게 응급 이송해야 합니다." }
          ],
          en: [
            { title: "🧠 Hydrocephalus & Open Fontanelles", desc: "Many Chihuahuas retain an open 'soft spot' on their skull. Excess cerebrospinal fluid pressure can cause dome-shaped heads, wall-eyed squinting, and seizures. Protect their heads from drop impact." },
            { title: "🦷 Crowded Teeth & Early Decay", desc: "Chihuahuas have 42 teeth crammed into an extremely tiny mouth cavity. Extremely high risk of tartar buildup and early tooth loss by age 3. Daily physical tooth-brushing starting in puppyhood is highly mandatory." },
            { title: "🩸 Juvenile Hypoglycemia", desc: "Toy puppies have minimal sugar storage capability. Skipping just one or two meals can cause sudden blood sugar drops, resulting in lethargy, seizures, or coma. Apply maple syrup or honey directly to gums during emergencies." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🥶 무의식적인 바들바들 떨림 (Emotional & Thermal Shivering)", desc: "공포, 추위뿐 아니라 기분 좋게 밥 먹을 때, 주인이 들어왔을 때 등 일상 모든 상황에서 바르르 몸을 떱니다. 체질량 대비 피부 면적비가 커 체온 손실을 잘 겪고, 성격이 극도로 예민해 뇌의 경계 전도가 빠르게 이루어지는 치와와만의 자연적 생리 반응입니다. 따뜻한 의류를 입히고 차분히 안아주시면 가라앉습니다." },
            { title: "🐽 연개구 경련으로 인한 역재치기", desc: "목덜미를 쭉 빼고 숨을 강하게 들이키며 거위 코골이 소리를 냅니다. 기도가 매우 협소한 치와와 특성상 비강 뒤쪽 점막이 먼지나 흥분으로 수축하여 생기는 일시적 호흡 발작이며, 수 분 뒤 자연 진정됩니다." }
          ],
          en: [
            { title: "🥶 Constant Shivering & Trembling", desc: "Chihuahuas shiver not just when cold, but during minor emotional shifts (joy, alarm, anticipation). Caused by high surface-area-to-mass ratio and sensitive nervous system. Keep them layered with sweaters and comfort them." },
            { title: "🐽 Soft Palate Spasm (Reverse Sneezes)", desc: "Sucking in air rapidly with a snorting sound due to narrow nasal passages. Simply plug their nostrils briefly or stroke their throat to stimulate a relaxing swallowing reflex." }
          ]
        }
      },
      "yorkshire-terrier": {
        vetCheckpoints: {
          ko: [
            { title: "🧪 간문맥 전신 우회술 (Portosystemic Shunt / PSS)", desc: "소화관에서 흡수된 혈액이 해독 기관인 간을 거치지 않고 직접 대정맥을 타고 온몸으로 순환하여 혼수를 일으키는 선천성 혈관 기형 질환입니다. 기운이 없거나 식사 후 멍하니 뇌 수막염 같은 발작을 한다면 간 기능 혈액 검사(Bile Acid) 및 혈관 초음파 정밀 진단을 필히 요구합니다." },
            { title: "🦷 치석 및 만성 잇몸 골 소실", desc: "이빨 사이가 좁아 프라그가 단단히 축적되어 만성 잇몸 질환을 유발하고, 잇몸뼈(치조골)가 염증으로 녹아 턱뼈가 내려앉을 수 있습니다. 어금니 틈새 치석 누적이 심각한 합병증을 유발하기 전에 정기 스케일링을 받아야 합니다." },
            { title: "🗣️ 기관 협착 및 마른 기침", desc: "요크셔 테리어 또한 나이가 들면서 맑은 콧물과 마른 거위 울음 소리 기침을 내는 협착증에 취약합니다. 실내 습도를 50% 이상 유지해 비강 건조를 막고 체중 감량으로 목 주위 압력을 최소화해야 합니다." }
          ],
          en: [
            { title: "🧪 Portosystemic Shunt (PSS)", desc: "A genetic vascular birth defect where toxic blood bypasses the liver for detoxification. Symptoms include stunt growth, post-meal head pressing, or ataxia. Diagnosed via blood bile acid testing and Doppler ultrasound." },
            { title: "🦷 Aggressive Tartar & Jaw Bone Bone Loss", desc: "High plaque vulnerability leads to severe periodontal decay, dissolving the thin lower jawbone. Frequent professional dental scale checkups under anesthesia are vital to prevent jaw fractures." },
            { title: "🗣️ Tracheal Collapse & Goose Cough", desc: "Prone to breathing issues due to weakening of tracheal rings as they age. Maintain high home humidity, use supportive chest harness belts, and prevent canine obesity." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "💨 콧구멍으로 쌕쌕 소리 내기 (Snorting Quirks)", desc: "냄새를 깊게 맡을 때나 주인을 환영할 때 코로 쌕쌕 소리를 내거나 코를 가볍게 골며 킁킁거립니다. 테리어 그룹 특유의 민감한 후각 비강 통로가 좁아 소리가 크게 울려 퍼지는 정상적인 행동입니다.",
              titleEn: "Snorting Quirks", descEn: "Making snorting or wheezing sounds while sniffing intensely or welcoming the owner. A normal physiological result of narrow nasal chambers in the terrier group." }
          ],
          en: [
            { title: "💨 Nasal Snorting Sound", desc: "Making loud snorting or wheezing sounds while sniffing or welcoming owners. Normal biological resonance of narrow nasal chambers in the toy terrier group." }
          ]
        }
      },
      "bichon-frise": {
        vetCheckpoints: {
          ko: [
            { title: "🧪 방광 결석 및 요도 폐색 (Urolithiasis / Urinary Stones)", desc: "칼슘옥살레이트나 스트루바이트 결석이 방광 내에 쉽게 생겨 소변 배출을 방해하는 질환입니다. 비숑이 혈뇨를 보거나, 오줌을 쌀 때 끙끙 앓고 조금씩만 눈다면 즉시 엑스레이 및 비뇨기 초음파 검사를 해야 하며, 치료가 늦어지면 신부전으로 이어질 수 있습니다. 평소 충분한 음수량 확보가 최고의 예방법입니다." },
            { title: "🧼 면역 매개성 알레르기 피부염 (Atopic Dermatitis)", desc: "털이 아주 굵고 풍성한 비숑은 피부 장벽의 수분 증발력이 높아 외부 먼지나 알레르기 물질에 과민 반응을 보입니다. 발을 강박적으로 핥아 털이 붉게 변하거나 배 주변이 빨개진다면 알레르기 인자 검사(IgE) 후 사료 교체 및 항알러지 케어가 병행되어야 합니다." },
            { title: "👁️ 유전성 소아/회춘 백내장 (Cataracts)", desc: "눈 안쪽 렌즈가 혼탁해져 빛이 투과하지 못하는 시력 손실 질환입니다. 비숑은 다른 견종에 비해 유전적 소인으로 인한 백내장 발병 연령이 2~4세로 매우 빠릅니다. 눈동자 중심부가 뿌옇게 변하는 지 모니터링하고 슬릿 램프 정밀 안구 검사를 주기적으로 실시해야 합니다." }
          ],
          en: [
            { title: "🧪 Urinary Bladder Stones", desc: "High genetic tendency to form calcium oxalate or struvite bladder stones. If you observe bloody urine or straining, seek veterinary radiology immediately. Keep them highly hydrated to naturally flush micro-crystals." },
            { title: "🧼 Atopic Allergic Dermatitis", desc: "Their dense double coat traps heat and allergens. Chronic paw-licking (causing saliva stains) and belly rashes require diagnostic allergy paneling and special hypoallergenic dieting." },
            { title: "👁️ Juvenile Inherited Cataracts", desc: "Clouding of the eye lens. High incidence of early-onset cataracts starting at 2-4 years of age. Get regular slit-lamp ophthalmic screenings to prevent full vision loss." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🏃 폭발적인 광란의 달리기 (Bichon Blitz / 비숑타임)", desc: "평화롭게 쉬다가 돌연 눈이 동그래지며 거실 구석구석을 미친 듯이 맹렬하게 우다다 뛰기 시작합니다. '비숑 프리제 블리츠(Blitz)'라 불리는 정상 행동으로, 체내의 남은 흥분과 에너지를 일시에 연소하여 스트레스를 즉각 해소하는 건강한 방전 행동입니다. 다치지 않게 미끄러운 통로 장애물만 치워주시고 귀엽게 봐주시면 됩니다." },
            { title: "🐾 발을 천장으로 뻗고 등 대고 눕기 (Splooting / 배까기)", desc: "네 다리를 등 뒤와 양옆으로 쭉 뻗고 배를 훤히 드러낸 채 뒤집어져서 잠을 잡니다. 척추 유연성이 우수한 비숑 특성 및 주변 공간과 가족에 대해 100% 안전함을 느끼고 긴장을 완전히 해제했을 때만 나오는 아주 평온하고 행복한 수면 자세입니다." }
          ],
          en: [
            { title: "🏃 The Bichon Blitz (Zoomies)", desc: "Suddenly sprinting around the house at warp speed with dilated eyes. A totally normal release of pent-up energy, known as the 'Bichon Blitz'. Let them complete this joy run; just clear slippery rugs from their path." },
            { title: "🐾 Flat-Back Sleeping (Splooting)", desc: "Sleeping completely upside down with paws pointing to the ceiling. Shows maximum spinal flexibility and complete emotional safety within their environment. An indicator of a highly relaxed dog." }
          ]
        }
      },
      "pembroke-welsh-corgi": {
        vetCheckpoints: {
          ko: [
            { title: "🦴 추간판 탈출증 / 허리 디스크 (IVDD)", desc: "다리는 극도로 짧은 반면 등허리가 길게 늘어진 체형적 특성 때문에 척추 뼈 사이의 완충제(디스크)가 눌려 탈출하고 척수 신경을 손상시키는 치명적인 질환입니다. 뒷다리 힘 빠짐, 꼬리 처짐, 배를 만질 때 통증 호소 시 즉각 MRI 촬영 후 수술해야 하며 쇼파 점프는 무조건 금지입니다." },
            { title: "🧪 퇴행성 골수병증 (Degenerative Myelopathy / DM)", desc: "웰시코기에게 빈발하는 유전자 돌연변이 질환으로, 척수 골수가 퇴행하여 나이 들면서 뒷다리 마비로 시작해 결국 호흡 마비에 이르게 되는 병입니다. 보통 8세 이상에 통증 없는 후지 부전이 온다면 유전자 키트 검사(SOD1)를 받아 물리 치료 계획을 조기에 수립해야 합니다." },
            { title: "⚖️ 비만으로 인한 디스크 과부하", desc: "코기는 식탐이 매우 강해 과식하기 쉽고, 몸무게가 1kg만 늘어나도 척추에 미치는 수직 하중이 5배 증가합니다. 허리선을 만졌을 때 갈비뼈가 안 만져진다면 다이어트 사료 전환 및 정밀 체질량 검사가 필요합니다." }
          ],
          en: [
            { title: "🦴 Intervertebral Disc Disease (IVDD)", desc: "Long backs and short legs yield heavy load on the spine. Severe risk of spinal disk herniation. If you note hind-leg weakness or pain when touched, get immediate veterinary neurological exams. Block all sofa jumping." },
            { title: "🧪 Degenerative Myelopathy (DM)", desc: "A progressive, painless spinal cord disease leading to paralysis of the rear limbs, caused by SOD1 genetic mutations. Genetic DNA screening is recommended starting from puppyhood to prepare early mobility therapies." },
            { title: "⚖️ Obesity Spine Strain", desc: "High appetite combined with weight gain exponentially multiplies the risk of IVDD. If ribs are not palpable under the dense coat, immediately limit calories and perform body condition scoring." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🐸 뒷다리를 개구리처럼 쭉 뻗기 (Frog Sploot)", desc: "바닥에 납작하게 엎드려 뒷다리 두 개를 닭다리처럼 뒤로 평평하게 펴고 쉽니다. 고관절 유연성이 높아 다리가 옆으로도 잘 젖혀지는 코기 고유의 가장 안락한 릴렉스 자세로, 배의 털이 얇아 여름철 차가운 대리석이나 타일 바닥에서 열을 식히는 영리한 생리 현상입니다." },
            { title: "❄️ 겨울철 겉잡을 수 없는 이중모 털갈이 (Blow Coat)", desc: "봄가을 환절기만 되면 손으로 잡는 족족 털이 구름처럼 뿜어져 나옵니다. 웰시코기는 방수성 겉털과 솜털 같은 이중모를 가져 기온 변화에 맞춰 속털을 통째로 밀어내는 생리 과정입니다. 피부가 빨갛지 않다면 탈모증이 절대 아니며 일주일에 3회 죽은 털 빗기 전용 빗으로 빗어내 주셔야 합니다." }
          ],
          en: [
            { title: "🐸 Frog Splooting", desc: "Lying down with both hind legs stretched straight back like a frog. Indicates loose, flexible hip joints. Helps their thin-haired belly absorb cool temperatures from marble or tile flooring." },
            { title: "❄️ Massive Seasonal Shedding (Blow Coat)", desc: "Extreme shedding during seasonal changes where undercoat falls out in dense clumps. Not alopecia or illness; Welsh Corgis possess heavy weather-resistant double coats that naturally cycle off." }
          ]
        }
      },
      "golden-retriever": {
        vetCheckpoints: {
          ko: [
            { title: "🦴 대형견 고관절 이형성증 (Hip Dysplasia)", desc: "엉덩이 관절을 구성하는 골반 비구와 대퇴골두가 딱 맞물리지 않고 어긋나 걸을 때 극심한 마찰과 염증을 유발하는 유전성 대형견 대표 질환입니다. 자라면서 뒷다리를 토끼처럼 동시에 모아 뛰거나 엉덩이를 좌우로 씰룩이며 걷는다면 반드시 펜힙(PennHIP) 관절 검사 및 방사선 정량 진단 후 적절한 약물이나 관절 수술을 결정해야 합니다." },
            { title: "🦠 종양 및 비만세포종/림프종 (High Cancer Susceptibility)", desc: "골든 리트리버는 유전 연구 상 60% 이상이 노령기에 암(특히 림프종, 혈관육종, 비만세포종)으로 사망할 만큼 암 발병률이 압도적으로 높습니다. 피부에 작고 단단한 멍울이나 혹이 만져진다면 단순 낭종으로 치부하지 마시고 즉각 병원 미세바늘흡인검사(FNA) 세포 검사로 악성 암 여부를 감별해야 합니다." },
            { title: "🧼 핫스팟 만성 지루성 피부염 (Pyotraumatic Dermatitis)", desc: "빽빽한 이중모를 가진 리트리버가 침을 흘리거나 물놀이를 한 뒤 귀 뒤, 등 부분을 제대로 말리지 않으면 몇 시간 만에 진물이 흐르고 피가 나는 화농성 급성 피부염(Hot Spot)이 발병합니다. 목욕 후 전용 송풍기로 가죽 끝까지 바짝 말리는 스킨 케어가 수의학적으로 아주 절실합니다." }
          ],
          en: [
            { title: "🦴 Canine Hip Dysplasia", desc: "Malformation of the hip socket joint leading to cartilage damage and painful osteoarthritis. Look for a 'bunny-hopping' gait or rear-end swaying. Perform early PennHIP diagnostic radiology to plan preventive medical options." },
            { title: "🦠 High Incidence of Cancer", desc: "Nearly 60% of Golden Retrievers are genetically vulnerable to cancers (lymphoma, hemangiosarcoma, mast cell tumors) as they age. Any skin lump or nodule should be immediately evaluated with Fine Needle Aspiration (FNA)." },
            { title: "🧼 Hot Spots (Acute Moist Dermatitis)", desc: "Trapped moisture in the thick water-resistant undercoat can trigger painful, oozing, bloody skin infections in hours. Ensuring full blow-drying down to the epidermis after baths or swimming is crucial." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🧦 양말, 인형 등 집안 물건 입에 물기 (Mouthy Retriever)", desc: "주인이 집에 오면 양말, 인형, 슬리퍼 등을 급하게 물어와 꼬리를 흔들며 끙끙 소리를 냅니다. 리트리버(Retriever)는 사냥꾼이 쏜 오리를 물어다 회수하던 본능이 강하게 남아있어, 입에 부드러운 물건을 물었을 때 뇌에서 정서적 안정 호르몬이 분비되기 때문입니다. 물어뜯어 삼키지 않는다면 빼앗지 말고 칭찬해 주세요." },
            { title: "😮‍💨 사람 같은 깊은 한숨 소리 (Contented Sighing)", desc: "소파나 침대에 털썩 엎드리며 턱을 바닥에 대고 '하아...' 하고 아주 길고 깊은 한숨을 크게 내쉽니다. 답답하거나 우울해서 내쉬는 것이 아니며, 부교감 신경이 활성화되면서 온몸의 근육을 완전히 이완시키고 '나 지금 너무 완벽하게 평화로워요'라고 말하는 최고조의 안락함 신호입니다." }
          ],
          en: [
            { title: "🧦 Mouthiness (Carrying Objects)", desc: "Grabbing socks, slippers, or plush toys to greet you. An expression of their genetic retriever instinct. Holding soft items in their mouth releases dopamine, calming them. Never scold; accept it as a friendly gift." },
            { title: "😮‍💨 Contented Heavy Sighs", desc: "Plop down on the rug and let out a dramatic, heavy sigh. Not a sign of depression or lung pain; it indicates the activation of the parasympathetic nervous system, expressing complete relaxation and safety." }
          ]
        }
      },
      "shih-tzu": {
        vetCheckpoints: {
          ko: [
            { title: "👁️ 안구건조증 및 각막 궤양 (Keratoconjunctivitis Sicca / Corneal Ulcer)", desc: "시츄는 안구가 돌출되어 바람에 쉽게 노출되고 누선 기능이 부족해 눈물이 마르는 안구건조증이 흔합니다. 눈이 건조하면 각막에 먼지 상처가 생겨 각막 궤양으로 발전해 실명할 수 있으므로, 눈을 자주 찌푸리거나 충혈되고 노란 눈곱이 낀다면 정기 눈물량 검사(Schirmer Tear Test) 및 인공눈물 주입 관리가 핵심입니다." },
            { title: "👃 단두종 호흡기 증후군 (Brachycephalic Airway Syndrome / BAS)", desc: "머리뼈 대비 코가 매우 납작해 콧구멍이 바늘구멍처럼 좁고(협착 비강), 연구개(입천장)가 비정상적으로 길어 기도를 가로막습니다. 더운 여름철에는 체온 조절 속도가 떨어져 열사병에 걸리기 쉬우며 호흡 시 쌕쌕거림이 강하다면 비강 확장 수술을 고려해야 합니다." },
            { title: "👂Floppy 귀 외이염", desc: "귀가 아래로 축 처지고 털이 안쪽까지 자라 공기가 안 통합니다. 목욕 후 물기가 남으면 즉시 균이 자라 귓병이 만성화되니 귀 청소 후 항상 완전히 통풍 건조하는 것이 의무적입니다." }
          ],
          en: [
            { title: "👁️ Dry Eye & Corneal Ulcers (KCS)", desc: "Prominent bulging eyes paired with low tear production cause dry eyes. Can lead to painful corneal scratching and ulcers. Frequent Schirmer Tear Testing (STT) and lubricating eye drops are mandatory." },
            { title: "👃 Brachycephalic Airway Syndrome", desc: "Narrowed nostrils and an elongated soft palate obstruct breathing. Extremely vulnerable to heat strokes in summer. Monitor breathing effort and avoid over-exhaustion on hot days." },
            { title: "👂 Otitis Externa (Chronic Floppy Ear Infection)", desc: "Droopy ears trap moisture inside the ear canal. Weekly ear cleaning and keeping the inside of ears dry are necessary to prevent deep fungal infections." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "💤 잠잘 때 내는 요란한 천둥 코골이 (Snoring & Snorting)", desc: "잘 때 사람 어른처럼 크게 드르렁거리며 코를 골거나 기뻐서 킁킁거립니다. 단두종 특유의 짧은 얼굴 구조로 인해 비강의 공기 통로가 매우 짧고 휘어있어 숨이 부딪히며 나는 기계적인 마찰음입니다. 자고 있을 때 호흡 곤란이나 청색증(혀가 파래짐)만 보이지 않는다면 지극히 정상적인 잠꼬대 소리입니다." },
            { title: "💩 똥을 먹는 행동 (Coprophagia / 식분증)", desc: "배변 직후 본인의 변을 급하게 물어 삼켜 주인을 경악하게 만듭니다. 시츄 견종에서 유독 빈발하는 영양 섭취 회귀 및 배설물을 청결히 치우려는 모성 본능에서 유래한 유전 행동 특징입니다. 큰 병이 아니며, 배변 즉시 간식과 교환하며 바로 치우는 훈련으로 교정 가능합니다." }
          ],
          en: [
            { title: "💤 Thunderous Snoring & Snorting", desc: "Loud snoring while asleep or snorting when active. An inevitable structural result of their short muzzle. As long as their tongue remains pink (no hypoxia) and they sleep peacefully, this is standard Shih Tzu white noise." },
            { title: "💩 Eating Feces (Coprophagia)", desc: "Eating their own stool immediately after defecation. Relatively high occurrence in Shih Tzus, stemming from ancestral behavior or cleaning instincts. Correct with immediate positive distraction training." }
          ]
        }
      },
      "shiba-inu": {
        vetCheckpoints: {
          ko: [
            { title: "🧼 유전성 만성 아토피 및 지루성 피부염 (Atopic Dermatitis)", desc: "시바견은 피부 지질 장벽이 불안정해 벼룩, 집먼지진드기 등 환경 알레르겐에 과민하게 염증 반응을 보입니다. 눈 주변, 사타구니, 발가락 사이가 붉어지고 하루 종일 긁어 털이 빠진다면 병원에 내원해 알러젠 검사 후 면역 억제 주사(사이토포인트)나 아토피 조절 처방 관리를 조기에 시작해야 합니다." },
            { title: "👁️ 안구 방수 배출 장애 녹내장 (Primary Glaucoma)", desc: "눈 내부 압력(안압)을 채우는 전방수가 빠져나가지 못해 안압이 상승하고 시신경을 압박해 24시간 내에 실명에 이르게 하는 응급 유전 질환입니다. 한쪽 눈을 찡그리며 충혈이 심해지고 각막이 푸르게 뿌옇게 변한다면 즉시 안압 강하 안약을 넣는 응급 치료를 받아야 합니다." },
            { title: "🦴 슬개골 탈구 및 고관절 이형성증", desc: "시바견은 소형과 중형 중간으로 다리 운동 범위가 매우 큽니다. 뒷다리 절뚝임 여부를 관찰하고, 무릎뼈 정렬 및 연골 관리가 중요합니다." }
          ],
          en: [
            { title: "🧼 Chronic Atopic Dermatitis", desc: "Shiba Inus have highly sensitive skin barrier lipids. Prone to severe itching, redness on paws/eyes, and hot spots. Treat with diagnostic allergy tests, specialized diets, or immunotherapy early." },
            { title: "👁️ Inherited Glaucoma", desc: "High intraocular pressure due to inadequate fluid drainage in the eye, which can lead to blindness in 24 hours. Treat red, cloudy, or squinting eyes as a veterinary emergency immediately." },
            { title: "🦴 Patellar Luxation & Hip Dysplasia", desc: "Due to their highly active nature and leaping style, maintain healthy muscle tone around joints. Check their joints annually during checkups." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "😱 고주파의 극적인 비명 소리 (Shiba Scream / 시바 스크림)", desc: "발톱을 깎으려 하거나, 목욕을 하거나, 동물병원 진료대에만 올리면 마치 도살당하는 듯한 날카롭고 찢어지는 듯한 고함 비명을 지릅니다. 예민하고 독립심이 강한 야생 스피츠 본성이 강해 신체 구속에 대해 엄청난 항의성 겁을 표출하는 독특한 울음소리입니다. 진짜 다치거나 아파서 지르는 소리가 아닙니다." },
            { title: "✈️ 귀를 뒤로 착 붙이고 눈 가늘게 뜨기 (Airplane Ears)", desc: "주인이 외출 후 돌아왔을 때나 정말 좋아하는 대상을 만났을 때 귀를 양옆과 뒤로 납작하게 밀착하고 꼬리를 흔들며 눈을 반달로 가늘게 뜹니다. 일명 '비행기 귀'로 불리는 최고조의 우호와 절대적인 복종성 기쁨을 표출하는 시바견 고유의 시각적 애정 행위입니다." }
          ],
          en: [
            { title: "😱 The Shiba Scream", desc: "Emitting a terrifying, high-pitched vocal scream during nail trims, baths, or vet exams. A dramatic vocal expression of protest against physical restraint. Not a cry of physical pain, but a sign of mental drama." },
            { title: "✈️ Airplane Ears & Squinting", desc: "Flattening their ears fully backward and squinting their eyes while wagging their tail upon greeting you. An expression of submission, absolute trust, and supreme happiness, unique to the Shiba breed." }
          ]
        }
      },
      "french-bulldog": {
        vetCheckpoints: {
          ko: [
            { title: "👃 단두종 기도 호흡 폐쇄 증후군 (Brachycephalic Syndrome)", desc: "구조적으로 콧구멍이 협소하고 연구개가 길어 기관지 입구를 상시 방해합니다. 산소 포화도가 쉽게 떨어지고 더운 날씨에는 호흡을 통한 열 배출이 안 되어 단 10분 만에 열사병사할 수 있으므로, 에어컨을 상시 켜고 여름 야외 산책은 절대 삼가야 합니다. 상태가 불량하면 콧구멍 확장 성형술을 해주는 것이 좋습니다." },
            { title: "🦴 반척추 척추 변형증 (Hemivertebrae)", desc: "선천적으로 척추뼈가 온전한 나비 모양이나 원통이 아닌 쐐기 모양으로 기형 변형되어 자랍니다. 이로 인해 척수가 휘어 압박되어 뒷다리 깽깽이 발이나 마비가 올 위험이 높습니다. 평소 디스크 예방 관리에 만전을 기해야 합니다." },
            { title: "🧼 피부 주름진 골 만성 염증 (Skin Fold Pyoderma)", desc: "얼굴 주름 사이에 눈물과 먼지가 뒤엉켜 습기가 차고 진균이 증식해 피부가 벗겨지고 피가 납니다. 주름 사이를 매일 소독 항균 패드로 깨끗이 닦아내 건조해야 지독한 만성 피부염을 차단할 수 있습니다." }
          ],
          en: [
            { title: "👃 Brachycephalic Airway Syndrome", desc: "Pinched nostrils and an elongated soft palate block oxygen flow. French Bulldogs are extremely vulnerable to heat stroke. Keep air conditioning on and avoid mid-day walks in summer." },
            { title: "🦴 Hemivertebrae (Spinal Malformation)", desc: "Congenital butterfly-shaped vertebrae deformation common in screw-tailed breeds. Can compress the spinal cord, causing hind limb ataxia. Minimize climbing stairs and physical impacts." },
            { title: "🧼 Deep Skin Fold Pyoderma", desc: "Moisture and bacteria build up in deep facial folds. Can cause painful, infected rashes. Wipe their wrinkles daily with hypoallergenic antiseptic wipes and keep them dry." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "💨 소리 없이 지독한 가스 방출 (Extreme Flatulence)", desc: "옆에 누워있다가 방안 전체를 지독한 냄새로 초토화시키는 무음 방귀를 수시로 뀝니다. 주둥이가 극도로 짧아 사료를 삼키듯 먹으면서 대량의 공기(산소)를 위장으로 흡입하고, 위장 운동 속도가 느려 가스가 차기 때문입니다. 소화 장애가 아니며 슬로우 식기를 주면 공기 흡입이 차단되어 방귀가 크게 줄어듭니다." },
            { title: "🐽 잘 때 코 골기 & 역재치기", desc: "평소 엎드려 쉴 때도 돼지처럼 킁킁대고 잘 때 우렁차게 코를 꼽니다. 단두 구조상 발생하는 자연스러운 기계적 마찰음으로, 호흡에 호흡 곤란 증세가 없다면 아픈 것이 아닙니다." }
          ],
          en: [
            { title: "💨 Extreme Flatulence", desc: "Releasing incredibly smelly, silent gas frequently. Caused by swallowing massive air during eating due to their flat muzzle. Not a disease; using a slow-feed bowl will drastically reduce swallowed air and gas." },
            { title: "🐽 Heavy Snorting & Sleeping Snore", desc: "Making loud snorting noises or heavy snoring. Natural byproduct of compressed nasal anatomy. Harmless as long as gums are pink and there is no gasping for air." }
          ]
        }
      },
      "jindo": {
        vetCheckpoints: {
          ko: [
            { title: "🩸 자가면역성 원반형 루푸스 (Discoid Lupus Erythematosus / DLE)", desc: "진도견에게 호발하는 면역 질환으로, 면역 체계가 코 끝의 검은 색소를 공격해 코가 점차 살구색으로 벗겨지고 딱지가 앉으며 궤양이 생깁니다. 자외선이 강력한 트리거가 되므로 여름철 산책 시 직사광선을 피하고 코에 선크림을 발라주거나 면역 조절제 연고를 도포해 주어야 합니다." },
            { title: "🧪 갑상선 기능 저하증 (Hypothyroidism)", desc: "갑상선 호르몬 분비가 저하되어 신진대사가 급격히 무너지는 병입니다. 진도견이 성견이 된 후 사료를 많이 안 주는데도 급격히 비만이 되거나, 만성 무기력증에 빠지고, 꼬리의 털이 다 빠져 쥐꼬리처럼 변한다면 갑상선 수치 혈액 검사(T4/TSH)를 요합니다." },
            { title: "🧼 조밀한 이중모 습진 관리", desc: "한국 토종견으로 빽빽한 이중모 털 구조를 갖고 있어 습한 한국 여름철에 피부 통풍이 차단되어 습진성 아토피에 걸리기 쉽습니다. 빗질로 죽은 털을 뽑아야 통풍이 살아납니다." }
          ],
          en: [
            { title: "🩸 Discoid Lupus Erythematosus (DLE)", desc: "An autoimmune disease prevalent in Jindos. It attacks the nose pigmentation, causing cracking, crusting, and color loss. Prevent triggers by limiting midday sun exposure and applying dog-safe sunscreens." },
            { title: "🧪 Hypothyroidism", desc: "Low thyroid hormone levels cause slow metabolism. Check if your Jindo gains weight without increased food, becomes extremely lethargic, or loses hair on their tail (rat tail). Managed with daily thyroid pills." },
            { title: "🧼 Dense Undercoat Eczema", desc: "Their thick undercoat traps sweat and moisture during hot, humid seasons. Daily shedding brushes are mandatory to allow complete epidermal ventilation and prevent hot spot eczema." }
          ]
        },
        notAnIllness: {
          ko: [
            { title: "🚽 절대적으로 집 안 배변을 거부하는 행동 (Extreme Cleanliness)", desc: "비가 오나 눈이 오나 절대 집 안이나 마당 구석에서도 오줌을 누지 않고, 하루 3번 밖으로 나가야만 배변을 해결합니다. 진도견 고유의 본능적인 강박적 청결성으로, 자신의 서식지 영역을 배설물로 오염시키지 않으려는 극도의 위생 본능입니다. 요로 질환이 아니므로 매일 2~3회 야외 산책 배변을 보장해 주어야 방광염을 막을 수 있습니다." },
            { title: "🍗 낯선 사람이 주는 간식 절대 거부하기 (Loyalty & Aloofness)", desc: "친척이나 외부인이 맛있는 고기 간식을 줘도 고개를 돌리고 입을 꼭 다물며 경계합니다. 낯선 사람의 호의나 보상에 쉽게 움직이지 않는 진도견 특유의 한 주인에 대한 충성심과 수천 년 수렵견으로서 다져진 경계 본능입니다. 사회성 결핍증이 아니며 자연스러운 유전적 기질입니다." }
          ],
          en: [
            { title: "🚽 Outdoor Evacuation Only", desc: "Absolutely refusing to urinate or defecate inside the house or yard. Jindos have an extreme instinct for cleanliness and refuse to soil their den. Not a bladder issue; you must walk them daily to prevent urinary retention." },
            { title: "🍗 Refusing Treats from Strangers", desc: "Snubbing delicious treats offered by strangers or guests. Normal aloofness and high fidelity toward their direct pack owner. Not a social anxiety disorder, but a natural inherited trait of loyalty." }
          ]
        }
      }
    },

    // Dynamic Matching & Fallback Engine
    getMedicalInfo: function(dog, lang) {
      if (!dog) return null;
      
      const isKo = lang === 'ko';
      let id = dog.id.toLowerCase();
      
      // Look for exact match in our custom clinical database
      let match = this.breeds[id];
      
      if (!match) {
        // Look for partial match
        for (let key in this.breeds) {
          if (id.includes(key) || key.includes(id)) {
            match = this.breeds[key];
            break;
          }
        }
      }

      if (match) {
        return {
          vetCheckpoints: match.vetCheckpoints[lang] || match.vetCheckpoints['ko'],
          notAnIllness: match.notAnIllness[lang] || match.notAnIllness['ko']
        };
      }

      // If no breed-specific advice, launch the Dynamic Veterinary Synthesizer Engine
      const vet = [];
      const quirks = [];

      // 1. Synthesize Vet Checkpoints based on physical Size
      if (dog.size === 'small' || dog.size === 'toy') {
        vet.push({
          title: isKo ? "🦴 소형견 전용 슬개골 탈구 예방" : "🦴 Small Breed Patellar Luxation",
          desc: isKo
            ? "체구가 작아 뼈 고랑이 얇기 때문에 무릎뼈가 빠지기 매우 쉽습니다. 소파나 침대에 반려견 전용 슬라이드 계단을 놓고, 발바닥 패드 사이 털을 밀어 미끄러짐을 방지해 퇴행성 관절염을 예방해 주세요."
            : "Small bones feature shallow knee grooves, causing kneecaps to slip out easily. Utilize pet stairs for sofas, trim hair between paw pads to prevent slipping, and get annual veterinary patellar checkups."
        });
        vet.push({
          title: isKo ? "🦷 조기 탈락 방지용 꼼꼼한 치석 관리" : "🦷 Dental Hygiene & Periodontal Check",
          desc: isKo
            ? "턱뼈 크기에 비해 이빨 42개가 모두 자라나서 배열이 매우 촘촘합니다. 치아 틈새에 낀 치석을 방치하면 만성 치주염과 심장판막 감염까지 유발되므로 일 1회 수동 양치질 및 1년 단위 스케일링이 필요합니다."
            : "Crowded tooth placement in small jaws leads to aggressive plaque accumulation. Unchecked tartar leads to periodontal decay and organ strain. Brush their teeth daily and get regular scaling."
        });
      } else if (dog.size === 'large' || dog.size === 'giant') {
        vet.push({
          title: isKo ? "🦴 대형견 골격 급성장과 고관절 이형성" : "🦴 Hip & Joint Dysplasia Screening",
          desc: isKo
            ? "생후 1년 이내에 30kg 이상 급성장하며 고관절 연골이 정상적으로 결합되지 않는 변형을 겪습니다. 성장 완료기 전 과도한 점프나 조기 구보 훈련을 피하고, 씰룩거리는 엉덩이 보행 시 방사선 촬영을 진행해야 합니다."
            : "Rapid skeletal growth in the first 12 months strains growing joints, potentially causing hip/elbow socket mismatch. Avoid high-impact jumps during puppyhood and have walking gaits radiologically analyzed."
        });
        vet.push({
          title: isKo ? "💨 생명을 위협하는 가스성 위확장-위염전" : "💨 Bloat & Gastric Torsion (GDV)",
          desc: isKo
            ? "가슴뼈가 깊고 넓은 대형견일수록 음식을 과식하거나 급하게 삼킨 직후 격렬하게 운동하면 위장 내 가스가 팽창하여 위가 꼬여 혈류가 즉시 차단됩니다. 식사 후 1시간 이상 침상 안정을 취하도록 하십시오."
            : "A fatal emergency where the stomach expands with gas and twists on its axis. Common in deep-chested large breeds. Restrict running or high excitement for 1.5 hours immediately following a meal."
        });
      }

      // 2. Synthesize advice based on Ear Structure & Name
      const earKeywords = ['spaniel', 'retriever', 'poodle', 'hound', 'collie', 'maltese', 'bichon', 'setter', 'terrier'];
      const isFloppyEars = earKeywords.some(k => id.includes(k)) || 
                           (dog.description && (dog.description.includes('귀가 처') || dog.description.includes('늘어진 귀')));
      
      if (isFloppyEars) {
        vet.push({
          title: isKo ? "👂 습한 귀 내부의 만성 외이염 관리" : "👂 Floppy Ears Ventilation & Otitis",
          desc: isKo
            ? "귀가 아래로 축 늘어져 귓구멍의 통풍이 상시 차단되어 곰팡이 및 지루성 세균성 귓병에 매우 노출되어 있습니다. 목욕 후 드라이기로 귀속 안까지 완전 건조해 주고 주 1회 귀 세정제로 겉귀를 닦아 청결을 지키세요."
            : "Folded ears block airflow, trapping sweat and triggering bacterial or yeast outer ear infections. Dry ear canals meticulously after water exposure and wipe clean with antiseptic solution weekly."
        });
      }

      // 3. Synthesize advice based on Double Coat nature
      const doubleKeywords = ['husky', 'samoyed', 'pomeranian', 'spitz', 'malamute', 'jindo', 'shiba', 'shepherd', 'pyrenees', 'collie', 'akita'];
      const isDoubleCoat = doubleKeywords.some(k => id.includes(k)) ||
                           (dog.description && (dog.description.includes('이중모') || dog.description.includes('속털')));

      if (isDoubleCoat) {
        vet.push({
          title: isKo ? "🧼 이중모 죽은 털 엉킴 및 습진 케어" : "🧼 Double Coat Skin Ventilation",
          desc: isKo
            ? "조밀하게 밀집한 속털이 죽은 채 피부 위에 엉켜서 얹혀있으면 피부 가죽의 땀샘 열 배출이 안 되어 습성 에크제마와 가려움증을 트리거합니다. 털갈이 철에 슬리커 브러시로 뭉친 털을 다 긁어 뽑아야 합니다."
            : "Thick dead undercoat forms a dense felt barrier, halting air from ventilating the skin. This triggers severe moist eczema. Daily combing to strip away trapped dead fur is a clinical necessity."
        });
      }

      // Default backup general check
      if (vet.length < 3) {
        vet.push({
          title: isKo ? "🩺 7세 이상 연 2회 노령기 호르몬 선별 검사" : "🩺 Senior Endocrine & Blood Paneling",
          desc: isKo
            ? "강아지 수명의 중반을 넘기는 7세 이후부터는 신장, 간 기능 쇠퇴와 당뇨, 갑상선 등 내분비 호르몬 비정상 수치가 발생하기 쉽습니다. 노령견은 6개월에 1회 종합 혈액 및 초음파 스크리닝이 이상적입니다."
            : "Beginning at age 7, checkups should double. Silent kidney failure, elevated liver enzymes, and hormonal imbalances (diabetes, thyroid) occur with no outward warning. Periodic profiling prevents acute failures."
        });
      }

      // 4. Synthesize quirks (Not an Illness)
      quirks.push({
        title: isKo ? "💤 수면 중 팔다리 경련 및 작은 흐느낌" : "💤 Sleep Twitching & Dream Whimpering",
        desc: isKo
          ? "수면 중 강아지가 발을 마구 달리기하듯 젓거나 얼굴 근육을 떨며 끙끙대는 소리를 내는 현상입니다. 얕고 활발한 REM 수면 상태에서 낮에 놀았던 기억을 뇌파로 리플레이 중인 정상 반응이니 안전하게 자게 두셔도 좋습니다."
          : "Repetitive paw paddling, muzzle quivering, and muffled vocalizations during deep sleep. Normal REM dreaming activity. Gums remain pink and they will instantly wake if called, unlike seizures."
      });

      if (dog.size === 'small' || dog.size === 'toy') {
        quirks.push({
          title: isKo ? "🤧 일시적인 역재치기 소리" : "🤧 Occasional Reverse Sneezes",
          desc: isKo
            ? "갑자기 고개를 쳐들고 공기를 세게 들이키며 켁켁 소리를 냅니다. 기도가 좁은 소형견들에게 생기는 단순 인후두 근육 긴장 경련으로, 목뼈 아래를 차분히 마사지해주면 호흡 진입각이 부드러워져 금방 정상화됩니다."
            : "Sudden backwards-sneezing honk triggered by dusty smells or sudden physical excitement. A safe, brief spasm of the soft palate. Gently massaging their neck helps relieve the sudden contraction."
        });
      } else {
        quirks.push({
          title: isKo ? "😮‍💨 긴장이 풀렸음을 뜻하는 무거운 한숨" : "😮‍💨 Deep Contented Long Sighing",
          desc: isKo
            ? "바닥에 턱을 내려놓으며 깊고 우렁찬 한숨 소리를 내쉬는 것은 피로하거나 슬픈 것이 절대 아닙니다. 주인의 곁에서 고도의 안전함과 완전무결한 심리적 안락함을 확보하여 온몸의 근력을 내려놓았다는 행복 신호입니다."
            : "Letting out a massive sigh while resting their chin on their paws. Not an indication of sorrow or respiratory pain. A profound sign of feeling fully protected, happy, and entirely relaxed."
        });
      }

      return {
        vetCheckpoints: vet.slice(0, 3),
        notAnIllness: quirks.slice(0, 2)
      };
    }
  };


  // Expose to window object
  window.DOG_MEDICAL_DATA = DOG_MEDICAL_DATA;
})();
