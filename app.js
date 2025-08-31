const duas = [
            {
                text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
                translation: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
                category: ["daily", "thankful"],
                reference: "Quran 2:201"
            },
            {
                text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
                translation: "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
                category: ["worried", "fearful"],
                reference: "Quran 9:129"
            },
            {
                text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ",
                translation: "O Allah, I take refuge in You from anxiety and sorrow.",
                category: ["sad", "worried"],
                reference: "Quran"
            },
            {
                text: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
                translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
                category: ["sad", "hopeless"],
                reference: "Quran 21:87"
            },
            {
                text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
                translation: "O Allah, I ask You for beneficial knowledge, good provision, and acceptable deeds.",
                category: ["daily"],
                reference: "Quran"
            }
        ];

        const supportMessages = {
            sad: {
                title: "Comfort for When You're Feeling Sad",
                message: "Allah says in the Quran: 'Indeed, with hardship [will be] ease.' (94:6). Remember that after difficulty comes relief, and Allah is with those who are patient."
            },
            anxious: {
                title: "Peace for When You're Feeling Anxious",
                message: "The Prophet Muhammad said: 'No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that."
            },
            grateful: {
                title: "Gratitude Increases Blessings",
                message: "Allah says: 'If you are grateful, I will surely increase you [in favor].' (14:7). Remembering Allah's blessings brings more blessings into our lives."
            },
            stressed: {
                title: "Relief from Stress",
                message: "Allah does not burden a soul beyond that it can bear. (2:286). Trust that Allah has chosen this test for you because He knows you have the strength to handle it."
            },
            hopeless: {
                title: "Hope in Allah's Mercy",
                message: "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful. (39:53)"
            },
            fearful: {
                title: "Protection from Fear",
                message: "Allah is the Protector of those who have faith: He leads them from the depths of darkness into the light. (2:257) Place your trust in Allah, the Best of Protectors."
            }
        };

        const refreshBtn = document.getElementById('refresh-dua');
        const randomDuaText = document.getElementById('random-dua-text');
        const randomDuaTranslation = document.getElementById('random-dua-translation');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const duasContainer = document.getElementById('duas-container');
        const feelingSelect = document.getElementById('feeling-select');
        const supportResult = document.getElementById('support-result');
        const resultTitle = document.getElementById('result-title');
        const resultDua = document.getElementById('result-dua');
        const resultTranslation = document.getElementById('result-translation');
        const resultMessage = document.getElementById('result-message');


document.addEventListener('DOMContentLoaded', function() {
            const storyCards = document.querySelectorAll('.story-card');
            
            storyCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.classList.toggle('expanded');
                    
                    const readMore = this.querySelector('.read-more');
                    if (this.classList.contains('expanded')) {
                        readMore.innerHTML = 'Read less <i class="fas fa-chevron-up"></i>';
                    } else {
                        readMore.innerHTML = 'Read more <i class="fas fa-chevron-down"></i>';
                    }
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
            const galleryItems = [
                {
                    title: "Masjid al-Haram, Mecca",
                    description: "“Standing before the Kaaba is a feeling words can’t capture. Twice Allah blessed me with this chance, and both times my heart felt peace, gratitude, and closeness to Him.",
                            image: "assets/makkah.jpeg"

                },
                {
                    title: "Masjid an-Nabawi",
                    description: "Visiting Madinah fills the heart with peace. In the Prophet’s ﷺ city, every step feels like mercy and every moment feels lighter.",
                            image: "assets/madina.jpeg"

                },
                {
                    title: "Masjid an-Nabawi",
                    description: "Madinah is not just a place, it’s a feeling of calmness and love that stays in the heart forever.",
                    image: "assets/3.jpeg"

                },
                {
                    title: "Mount Uhud",
                    description: "Uhud is more than a mountain; it is a symbol of love and sacrifice. Here, the Battle of Uhud took place, teaching us lessons of obedience and patience. The Prophet ﷺ said, ‘Uhud loves us, and we love it.’ It is also the resting place of the brave martyrs, including Hamza (RA), reminding us of faith and sacrifice.",
                    image: "assets/4.jpeg"

                },
                {
                    title: "Masjid Quba",
                    description: "Masjid Quba is the first mosque built in Islam, founded by the Prophet ﷺ in Madinah. It is a place of purity and blessing. The Prophet ﷺ said that whoever performs two rak’ahs here will have the reward of an accepted Umrah. A symbol of simplicity, faith, and sincerity.",
                  image: "assets/5.jpeg"

                },
                {
                    title: "Clock Towe in Makkah",
                    description: "The Makkah Clock Tower, part of the Abraj Al-Bait complex, is one of the tallest buildings in the world. Overlooking the Masjid al-Haram, it features the world’s largest clock face and serves as a symbol of modernity alongside Islam’s holiest site.",
                     image: "assets/6.jpeg"

                },

                

                {
                    title: "Masjid an-Nabawi",
                    description: "Masjid an-Nabawi is the resting place of our beloved Prophet ﷺ and the second holiest mosque in Islam. Its heart is Riyadh-ul-Jannah (a garden from Paradise). To pray here is a blessing beyond words, and its peace touches every soul that enters.",
                    image: "assets/7.jpeg"

                }


            ];
            
            const galleryItemsElements = document.querySelectorAll('.gallery-item');
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            const closeModal = document.getElementById('closeModal');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            let currentIndex = 0;
            
            galleryItemsElements.forEach((item, index) => {
                item.addEventListener('click', () => {
                    currentIndex = index;
                    updateModal();
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden'; 
                });
            });
            
            closeModal.addEventListener('click', () => {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto'; 
            });
            
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                updateModal();
            });
            
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % galleryItems.length;
                updateModal();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            });
            
            function updateModal() {
                const item = galleryItems[currentIndex];
                modalCaption.textContent = item.title + " - " + item.description;
                
                modalImage.src = item.image;
                modalImage.alt = item.title;
                modalImage.style.background = "none";
    modalImage.style.width = "600px";
    modalImage.style.height = "auto"; 
                const colors = [
                    'linear-gradient(135deg, #1a3a4a 0%, #2a6e50 100%)',
                    'linear-gradient(135deg, #d9b44a 0%, #2a6e50 100%)',
                    'linear-gradient(135deg, #8e7d5b 0%, #1a3a4a 100%)',
                    'linear-gradient(135deg, #4a9e79 0%, #1a3a4a 100%)',
                    'linear-gradient(135deg, #2a6e50 0%, #d9b44a 100%)',
                    'linear-gradient(135deg, #d9b44a 0%, #8e7d5b 100%)'
                ];
                
                modalImage.style.background = colors[currentIndex];
                modalImage.style.display = 'flex';
                modalImage.style.justifyContent = 'center';
                modalImage.style.alignItems = 'center';
                modalImage.style.color = 'white';
                modalImage.style.fontSize = '24px';
                modalImage.innerHTML = `<div style="text-align:center;"><i class="fas fa-image" style="font-size:48px;display:block;margin-bottom:15px;"></i>${item.title}</div>`;
                modalImage.style.width = '600px';
                modalImage.style.height = '400px';
            }
            
            document.addEventListener('keydown', (e) => {
                if (modal.classList.contains('show')) {
                    if (e.key === 'ArrowLeft') {
                        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                        updateModal();
                    } else if (e.key === 'ArrowRight') {
                        currentIndex = (currentIndex + 1) % galleryItems.length;
                        updateModal();
                    } else if (e.key === 'Escape') {
                        modal.classList.remove('show');
                        document.body.style.overflow = 'auto';
                    }
                }
            });
        });


        function getRandomDua() {
            const randomIndex = Math.floor(Math.random() * duas.length);
            const randomDua = duas[randomIndex];
            
            randomDuaText.textContent = randomDua.text;
            randomDuaTranslation.textContent = `"${randomDua.translation}" (${randomDua.reference})`;
        }

        function displayDuas(category = 'all') {
            duasContainer.innerHTML = '';
            
            const filteredDuas = category === 'all' 
                ? duas 
                : duas.filter(dua => dua.category.includes(category));
            
            filteredDuas.forEach(dua => {
                const duaCard = document.createElement('div');
                duaCard.className = 'dua-card';
                duaCard.innerHTML = `
                    <h4>${dua.reference}</h4>
                    <p class="dua-text">${dua.text}</p>
                    <p class="dua-translation">${dua.translation}</p>
                `;
                duasContainer.appendChild(duaCard);
            });
        }

        function handleFeelingSelect() {
            const feeling = feelingSelect.value;
            
            if (!feeling) {
                supportResult.style.display = 'none';
                return;
            }
            
            const relevantDua = duas.find(dua => dua.category.includes(feeling)) || duas[0];
            const message = supportMessages[feeling];
            
            resultTitle.textContent = message.title;
            resultDua.textContent = relevantDua.text;
            resultTranslation.textContent = `"${relevantDua.translation}" (${relevantDua.reference})`;
            resultMessage.textContent = message.message;
            
            supportResult.style.display = 'block';
        }

        refreshBtn.addEventListener('click', getRandomDua);
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displayDuas(button.dataset.category);
            });
        });
        
        feelingSelect.addEventListener('change', handleFeelingSelect);

        document.addEventListener('DOMContentLoaded', () => {
            getRandomDua();
            displayDuas();
            
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(section);
            });
        });





const tasbeehData = [
            {
                name: "SubhanAllah",
                meaning: "Glory be to Allah",
                benefit: "Brings peace, light in the heart, and forgiveness",
                when: "Anytime, especially after prayer",
                category: "Daily Dhikr",
                count: 0
            },
            {
                name: "Alhamdulillah",
                meaning: "All praise is for Allah",
                benefit: "Increases blessings and gratitude in life",
                when: "Anytime, especially after eating or when pleased",
                category: "Daily Dhikr",
                count: 0
            },
            {
                name: "Allahu Akbar",
                meaning: "Allah is the Greatest",
                benefit: "Reminds us of Allah's greatness and reduces worldly worries",
                when: "Anytime, especially during prayer and difficulties",
                category: "Daily Dhikr",
                count: 0
            },
            {
                name: "Astaghfirullah",
                meaning: "I seek forgiveness from Allah",
                benefit: "Wipes away sins, brings barakah in life",
                when: "Anytime, especially after sin",
                category: "Forgiveness",
                count: 0
            },
            {
                name: "Ya Tawwab",
                meaning: "O Acceptor of Repentance",
                benefit: "Helps in seeking sincere repentance and turning back to Allah",
                when: "After committing sins or mistakes",
                category: "Forgiveness",
                count: 0
            },
            {
                name: "Ya Ghaffar",
                meaning: "O Forgiver",
                benefit: "Seeks Allah's forgiveness and mercy",
                when: "When seeking pardon for sins",
                category: "Forgiveness",
                count: 0
            },
            {
                name: "Ya Shafi",
                meaning: "O Healer",
                benefit: "Seeks healing from illnesses and diseases",
                when: "During illness or visiting the sick",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Salaam",
                meaning: "O Source of Peace",
                benefit: "Brings peace to the heart and protection from worries",
                when: "During times of stress and anxiety",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Latif",
                meaning: "The Subtle, The Kind",
                benefit: "Resolves problems in gentle ways and eases difficulties",
                when: "When facing difficult situations",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Hafiz",
                meaning: "The Protector",
                benefit: "Seeks Allah's protection from all harm",
                when: "When feeling fearful or in danger",
                category: "Protection",
                count: 0
            },
            {
                name: "Ya Qawiyy",
                meaning: "The All-Strong",
                benefit: "Seeks strength and steadfastness in faith",
                when: "When feeling weak or facing challenges",
                category: "Protection",
                count: 0
            },
            {
                name: "Ya Matin",
                meaning: "The Firm, The Steadfast",
                benefit: "Provides firmness and determination",
                when: "When needing perseverance",
                category: "Protection",
                count: 0
            },
            
            
            {
                name: "La ilaha illallah",
                meaning: "There is no god but Allah",
                benefit: "Foundation of faith, great reward",
                when: "Anytime, especially morning and evening",
                category: "Daily Dhikr",
                count: 0
            },
            {
                name: "SubhanAllahi wa bihamdihi",
                meaning: "Glory be to Allah and all praise is for Him",
                benefit: "Heavy on scale, loved by Allah",
                when: "Morning and evening",
                category: "Daily Dhikr",
                count: 0
            },
            {
                name: "Ya Razzaq",
                meaning: "The Provider",
                benefit: "Seeks sustenance and provision",
                when: "When in need of provision",
                category: "Special Occasions",
                count: 0
            },
            {
                name: "Ya Wahhab",
                meaning: "The Bestower",
                benefit: "Seeks gifts and blessings from Allah",
                when: "When asking for Allah's gifts",
                category: "Special Occasions",
                count: 0
            },
            {
                name: "Hasbunallah wa ni'mal Wakeel",
                meaning: "Allah is sufficient for us and He is the best Disposer of affairs",
                benefit: "Relieves worries and anxieties",
                when: "During times of difficulty",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "La hawla wa la quwwata illa billah",
                meaning: "There is no power nor strength except by Allah",
                benefit: "Admission of weakness and reliance on Allah",
                when: "When facing difficulties",
                category: "Protection",
                count: 0
            },
            {
                name: "Ya Karim",
                meaning: "The Generous",
                benefit: "Seeks generosity and blessings",
                when: "When asking for Allah's bounty",
                category: "Special Occasions",
                count: 0
            },
            {
                name: "Ya Mughni",
                meaning: "The Enricher",
                benefit: "Seeks enrichment from Allah",
                when: "When in need",
                category: "Special Occasions",
                count: 0
            },
            {
                name: "Ya Wadud",
                meaning: "The Loving",
                benefit: "Seeks Allah's love and to love for His sake",
                when: "When seeking love and harmony",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Hakim",
                meaning: "The Wise",
                benefit: "Seeks wisdom in affairs",
                when: "When needing guidance in decisions",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Sabur",
                meaning: "The Patient",
                benefit: "Seeks patience in difficulties",
                when: "During trials and tribulations",
                category: "Healing & Peace",
                count: 0
            },
            {
                name: "Ya Fattah",
                meaning: "The Opener",
                benefit: "Seeks opening of doors and solutions",
                when: "When facing closed doors",
                category: "Special Occasions",
                count: 0
            },
            {
                name: "Ya Basir",
                meaning: "The All-Seeing",
                benefit: "Reminds us Allah sees all our actions",
                when: "When needing mindfulness",
                category: "Protection",
                count: 0
            },
            {
                name: "Ya Aliym",
                meaning: "The All-Knowing",
                benefit: "Reminds us Allah knows everything",
                when: "When seeking knowledge",
                category: "Protection",
                count: 0
            },
            
            
        ];

        let currentPage = 1;
        const itemsPerPage = 6;
        let filteredTasbeehs = [...tasbeehData];

        function renderTasbeehs() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const tasbeehsToRender = filteredTasbeehs.slice(0, endIndex);
            
            const tasbeehGrid = document.getElementById('tasbeehGrid');
            tasbeehGrid.innerHTML = '';
            
            tasbeehsToRender.forEach(tasbeeh => {
                const card = document.createElement('div');
                card.className = 'tasbeeh-card';
                card.innerHTML = `
                    <div class="card-header">
                        <h3>${tasbeeh.name}</h3>
                    </div>
                    <div class="card-body">
                        <div class="meaning">${tasbeeh.meaning}</div>
                        <div class="benefit">${tasbeeh.benefit}</div>
                        <div class="when"><strong>When:</strong> ${tasbeeh.when}</div>
                    </div>
                    <div class="card-footer">
                        <div class="counter">
                            <button class="count-btn" onclick="decrementCount('${tasbeeh.name}')">-</button>
                            <span class="count-display" id="count-${tasbeeh.name}">${tasbeeh.count}</span>
                            <button class="count-btn" onclick="incrementCount('${tasbeeh.name}')">+</button>
                        </div>
                        <button class="reset-btn" onclick="resetCount('${tasbeeh.name}')">Reset</button>
                    </div>
                `;
                tasbeehGrid.appendChild(card);
            });
            
            const loadMoreBtn = document.getElementById('loadMore');
            if (endIndex >= filteredTasbeehs.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        function incrementCount(name) {
            const tasbeeh = tasbeehData.find(t => t.name === name);
            if (tasbeeh) {
                tasbeeh.count++;
                document.getElementById(`count-${name}`).textContent = tasbeeh.count;
            }
        }

        function decrementCount(name) {
            const tasbeeh = tasbeehData.find(t => t.name === name);
            if (tasbeeh && tasbeeh.count > 0) {
                tasbeeh.count--;
                document.getElementById(`count-${name}`).textContent = tasbeeh.count;
            }
        }

        function resetCount(name) {
            const tasbeeh = tasbeehData.find(t => t.name === name);
            if (tasbeeh) {
                tasbeeh.count = 0;
                document.getElementById(`count-${name}`).textContent = tasbeeh.count;
            }
        }

        function loadMore() {
            currentPage++;
            renderTasbeehs();
        }

        function filterByCategory(category) {
            if (category === 'All') {
                filteredTasbeehs = [...tasbeehData];
            } else {
                filteredTasbeehs = tasbeehData.filter(t => t.category === category);
            }
            currentPage = 1;
            renderTasbeehs();
            
            document.querySelectorAll('.category-btn').forEach(btn => {
                if (btn.textContent === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            renderTasbeehs();
            
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    filterByCategory(this.textContent);
                });
            });
            
            document.getElementById('loadMore').addEventListener('click', loadMore);
        });




        const allahNames = [
            { arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", meaning: "The Beneficent" },
            { arabic: "الرَّحِيمُ", transliteration: "Ar-Rahim", meaning: "The Merciful" },
            { arabic: "الْمَلِكُ", transliteration: "Al-Malik", meaning: "The Eternal Lord" },
            { arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "The Most Sacred" },
            { arabic: "السَّلَامُ", transliteration: "As-Salam", meaning: "The Source of Peace" },
            { arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "The Infuser of Faith" },
            { arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Preserver of Safety" },
            { arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaning: "The Mighty" },
            { arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller" },
            { arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "The Supreme" },
            { arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator" },
            { arabic: "الْبَارِئُ", transliteration: "Al-Bari", meaning: "The Evolver" },
            { arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner" },
            { arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The Great Forgiver" },
            { arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The All-Prevailing" },
            { arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Bestower" },
            { arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider" },
            { arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Supreme Solver" },
            { arabic: "اَلْعَلِيْمُ", transliteration: "Al-Alim", meaning: "The All-Knowing" },
            { arabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Withholder" },
            { arabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Extender" },
            { arabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Reducer" },
            { arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaning: "The Exalter" },
            { arabic: "المُعِزُّ", transliteration: "Al-Mu'izz", meaning: "The Honourer" },
            { arabic: "المُذِلُّ", transliteration: "Al-Mudhill", meaning: "The Dishonourer" },
            { arabic: "السَّمِيعُ", transliteration: "As-Sami", meaning: "The All-Hearing" },
            { arabic: "الْبَصِيرُ", transliteration: "Al-Basir", meaning: "The All-Seeing" },
            { arabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Impartial Judge" },
            { arabic: "الْعَدْلُ", transliteration: "Al-Adl", meaning: "The Utterly Just" },
            { arabic: "اللَّطِيفُ", transliteration: "Al-Latif", meaning: "The Subtle One" },
            { arabic: "الْخَبِيرُ", transliteration: "Al-Khabir", meaning: "The All-Aware" },
            { arabic: "الْحَلِيمُ", transliteration: "Al-Halim", meaning: "The Forbearing" },
            { arabic: "الْعَظِيمُ", transliteration: "Al-Azim", meaning: "The Magnificent" },
            { arabic: "الْغَفُورُ", transliteration: "Al-Ghafur", meaning: "The All-Forgiving" },
            { arabic: "الشَّكُورُ", transliteration: "Ash-Shakur", meaning: "The Grateful" },
            { arabic: "الْعَلِيُّ", transliteration: "Al-Ali", meaning: "The Most High" },
            { arabic: "الْكَبِيرُ", transliteration: "Al-Kabir", meaning: "The Greatest" },
            { arabic: "الْحَفِيظُ", transliteration: "Al-Hafiz", meaning: "The Preserver" },
            { arabic: "المُقِيتُ", transliteration: "Al-Muqit", meaning: "The Nourisher" },
            { arabic: "الْحَسِيبُ", transliteration: "Al-Hasib", meaning: "The Reckoner" },
            { arabic: "الْجَلِيلُ", transliteration: "Al-Jalil", meaning: "The Majestic" },
            { arabic: "الْكَرِيمُ", transliteration: "Al-Karim", meaning: "The Most Generous" },
            { arabic: "الرَّقِيبُ", transliteration: "Ar-Raqib", meaning: "The Watchful" },
            { arabic: "الْمُجِيبُ", transliteration: "Al-Mujib", meaning: "The Responsive" },
            { arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", meaning: "The All-Encompassing" },
            { arabic: "الْحَكِيمُ", transliteration: "Al-Hakim", meaning: "The Wise" },
            { arabic: "الْوَدُودُ", transliteration: "Al-Wadud", meaning: "The Most Loving" },
            { arabic: "الْمَجِيدُ", transliteration: "Al-Majid", meaning: "The Glorious" },
            { arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "The Resurrector" },
            { arabic: "الشَّهِيدُ", transliteration: "Ash-Shahid", meaning: "The Witness" },
            { arabic: "الْحَقُّ", transliteration: "Al-Haqq", meaning: "The Truth" },
            { arabic: "الْوَكِيلُ", transliteration: "Al-Wakil", meaning: "The Trustee" },
            { arabic: "الْقَوِيُّ", transliteration: "Al-Qawiyy", meaning: "The Strong" },
            { arabic: "الْمَتِينُ", transliteration: "Al-Matin", meaning: "The Firm" },
            { arabic: "الْوَلِيُّ", transliteration: "Al-Wali", meaning: "The Protector" },
            { arabic: "الْحَمِيدُ", transliteration: "Al-Hamid", meaning: "The Praiseworthy" },
            { arabic: "الْمُحْصِي", transliteration: "Al-Muhsi", meaning: "The All-Enumerating" },
            { arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", meaning: "The Originator" },
            { arabic: "الْمُعِيدُ", transliteration: "Al-Muid", meaning: "The Restorer" },
            { arabic: "الْمُحْيِي", transliteration: "Al-Muhyi", meaning: "The Giver of Life" },
            { arabic: "الْمُمِيتُ", transliteration: "Al-Mumit", meaning: "The Bringer of Death" },
            { arabic: "الْحَيُّ", transliteration: "Al-Hayy", meaning: "The Ever-Living" },
            { arabic: "الْقَيُّومُ", transliteration: "Al-Qayyum", meaning: "The Sustainer" },
            { arabic: "الْوَاجِدُ", transliteration: "Al-Wajid", meaning: "The Perceiver" },
            { arabic: "الْمَاجِدُ", transliteration: "Al-Majid", meaning: "The Illustrious" },
            { arabic: "الْوَاحِدُ", transliteration: "Al-Wahid", meaning: "The One" },
            { arabic: "الْأَحَد", transliteration: "Al-Ahad", meaning: "The Unique" },
            { arabic: "الصَّمَدُ", transliteration: "As-Samad", meaning: "The Eternal" },
            { arabic: "الْقَادِرُ", transliteration: "Al-Qadir", meaning: "The Omnipotent" },
            { arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "The Powerful" },
            { arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "The Expediter" },
            { arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", meaning: "The Delayer" },
            { arabic: "الْأَوَّلُ", transliteration: "Al-Awwal", meaning: "The First" },
            { arabic: "الْآخِرُ", transliteration: "Al-Akhir", meaning: "The Last" },
            { arabic: "الظَّاهِرُ", transliteration: "Az-Zahir", meaning: "The Manifest" },
            { arabic: "الْبَاطِنُ", transliteration: "Al-Batin", meaning: "The Hidden" },
            { arabic: "الْوَالِي", transliteration: "Al-Wali", meaning: "The Governor" },
            { arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'ali", meaning: "The Most Exalted" },
            { arabic: "الْبَرُّ", transliteration: "Al-Barr", meaning: "The Source of Goodness" },
            { arabic: "التَّوَابُ", transliteration: "At-Tawwab", meaning: "The Acceptor of Repentance" },
            { arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "The Avenger" },
            { arabic: "العَفُوُ", transliteration: "Al-Afu", meaning: "The Pardoner" },
            { arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'uf", meaning: "The Most Kind" },
            { arabic: "مَالِكُ الْمُلْكِ", transliteration: "Malik-ul-Mulk", meaning: "Master of the Kingdom" },
            { arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ", transliteration: "Dhu-al-Jalal wa-al-Ikram", meaning: "Possessor of Glory and Honour" },
            { arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "The Equitable" },
            { arabic: "الْجَامِعُ", transliteration: "Al-Jami", meaning: "The Gatherer" },
            { arabic: "الْغَنِيُّ", transliteration: "Al-Ghani", meaning: "The Self-Sufficient" },
            { arabic: "المُغْنِي", transliteration: "Al-Mughni", meaning: "The Enricher" },
            { arabic: "اَلْمَانِعُ", transliteration: "Al-Mani", meaning: "The Withholder" },
            { arabic: "الضَّارُ", transliteration: "Ad-Darr", meaning: "The Distresser" },
            { arabic: "النَّافِعُ", transliteration: "An-Nafi", meaning: "The Propitious" },
            { arabic: "النُّورُ", transliteration: "An-Nur", meaning: "The Light" },
            { arabic: "الْهَادِي", transliteration: "Al-Hadi", meaning: "The Guide" },
            { arabic: "الْبَدِيعُ", transliteration: "Al-Badi", meaning: "The Incomparable" },
            { arabic: "الْبَاقِي", transliteration: "Al-Baqi", meaning: "The Everlasting" },
            { arabic: "الْوَارِثُ", transliteration: "Al-Warith", meaning: "The Inheritor" },
            { arabic: "الرَّشِيدُ", transliteration: "Ar-Rashid", meaning: "The Guide to Right Path" },
            { arabic: "الصَّبُورُ", transliteration: "As-Sabur", meaning: "The Patient" }
        ];

        // DOM Elements
        const namesContainer = document.getElementById('names-container');
        const showMoreBtn = document.getElementById('show-more-btn');
        
        function displayNames(limit = 8) {
            namesContainer.innerHTML = '';
            
            const namesToShow = limit === 'all' ? allahNames : allahNames.slice(0, limit);
            
            namesToShow.forEach(name => {
                const nameCard = document.createElement('div');
                nameCard.className = 'name-card';
                nameCard.innerHTML = `
                    <div class="name-arabic">${name.arabic}</div>
                    <div class="name-transliteration">${name.transliteration}</div>
                    <div class="name-meaning">${name.meaning}</div>
                `;
                namesContainer.appendChild(nameCard);
            });
            
            if (limit === 'all') {
                showMoreBtn.textContent = 'Show Less';
            } else {
                showMoreBtn.textContent = 'Show All Names';
            }
        }
        
        function toggleNamesDisplay() {
            const currentlyShowingAll = showMoreBtn.textContent === 'Show Less';
            
            if (currentlyShowingAll) {
                displayNames(8);
                document.getElementById('names-of-allah').scrollIntoView({ behavior: 'smooth' });
            } else {
                displayNames('all');
            }
        }
        
        showMoreBtn.addEventListener('click', toggleNamesDisplay);
        
        document.addEventListener('DOMContentLoaded', () => {
            displayNames(8);
            
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(section);
            });
        });



        const prophets = [
            {
                number: 1,
                name: "Adam (Adam)",
                arabic: "آدم عليه السلام",
                description: "The first human and the first Prophet. Taught people about Allah as the Creator."
            },
            {
                number: 2,
                name: "Nuh (Noah)",
                arabic: "نوح عليه السلام",
                description: "Called people to worship only Allah. Built the Ark during the great flood."
            },
            {
                number: 3,
                name: "Ibrahim (Abraham)",
                arabic: "إبراهيم عليه السلام",
                description: "Known as Khalilullah (Friend of Allah). Tested with fire, but Allah saved him. Built the Kaaba with his son Ismail."
            },
            {
                number: 4,
                name: "Ismail",
                arabic: "إسماعيل عليه السلام",
                description: "Son of Ibrahim. Showed patience when his father was tested to sacrifice him."
            },
            {
                number: 5,
                name: "Ishaq (Isaac)",
                arabic: "إسحاق عليه السلام",
                description: "Son of Ibrahim. Continued teaching about Tawheed (oneness of Allah)."
            },
            {
                number: 6,
                name: "Yaqub ",
                arabic: "يعقوب عليه السلام",
                description: "Father of the twelve tribes of Bani Isra'il. Remembered for his deep patience (Sabr)."
            },
            {
                number: 7,
                name: "Yusuf",
                arabic: "يوسف عليه السلام",
                description: "Known for his beauty and honesty. Became a ruler in Egypt after many hardships."
            },
            {
                number: 8,
                name: "Musa ",
                arabic: "موسى عليه السلام",
                description: "Freed Bani Isra'il from Fir'awn (Pharaoh). Received the Torah from Allah."
            },
            {
                number: 9,
                name: "Harun ",
                arabic: "هارون عليه السلام",
                description: "Brother of Musa. Helped him in guiding people."
            },
            {
                number: 10,
                name: "Dawud ",
                arabic: "داوود عليه السلام",
                description: "Given Zabur (Psalms). Known for wisdom and beautiful voice."
            },
            {
                number: 11,
                name: "Sulaiman ",
                arabic: "سليمان عليه السلام",
                description: "Son of Dawud. Ruled with justice. Allah gave him control over winds, birds, and jinn."
            },
            {
                number: 12,
                name: "Yunus ",
                arabic: "يونس عليه السلام",
                description: "Swallowed by a big fish. Prayed: 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin.'"
            },
            {
                number: 13,
                name: "Ayyub",
                arabic: "أيوب عليه السلام",
                description: "Known for patience during illness. Allah rewarded him for his Sabr."
            },
            {
                number: 14,
                name: "Zakariya (Zechariah)",
                arabic: "زكريا عليه السلام",
                description: "Made dua for a child. Father of Yahya."
            },
            {
                number: 15,
                name: "Yahya ",
                arabic: "يحيى عليه السلام",
                description: "Prophet known for purity and courage. Martyred while calling people to Allah."
            },
            {
                number: 16,
                name: "Isa (Jesus)",
                arabic: "عيسى عليه السلام",
                description: "Born miraculously to Maryam (Mary). Performed miracles by Allah's permission. Brought the Injil (Gospel)."
            },
            {
                number: 17,
                name: "Muhammad",
                arabic: "مُحَمَّد ﷺ",
                description: "The final Prophet and Messenger. Sent with the Qur'an for all mankind. Known as Rahmatan lil-'Alameen (Mercy to the worlds)."
            }
        ];

        function createProphetCards() {
            const timeline = document.querySelector('.timeline');
            
            prophets.forEach(prophet => {
                const card = document.createElement('div');
                card.className = 'prophet-card';
                
                card.innerHTML = `
                    <div class="number">${prophet.number}</div>
                    <div class="name-arabic">${prophet.arabic}</div>
                    <div class="name">${prophet.name}</div>
                    <div class="description">${prophet.description}</div>
                `;
                
                timeline.appendChild(card);
            });
        }

        function setupScrollButtons() {
            const timelineContainer = document.querySelector('.timeline-container');
            const scrollLeftButton = document.getElementById('scrollLeft');
            const scrollRightButton = document.getElementById('scrollRight');
            
            scrollLeftButton.addEventListener('click', () => {
                timelineContainer.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            });
            
            scrollRightButton.addEventListener('click', () => {
                timelineContainer.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            createProphetCards();
            setupScrollButtons();
        });


         document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculateBtn');
            const wealthInput = document.getElementById('wealth');
            const resultsDiv = document.getElementById('results');
            const totalWealthSpan = document.getElementById('totalWealth');
            const zakatAmountSpan = document.getElementById('zakatAmount');
            
            calculateBtn.addEventListener('click', function() {
                const wealth = parseFloat(wealthInput.value);
                
                if (isNaN(wealth) || wealth < 0) {
                    alert('Please enter a valid wealth amount');
                    return;
                }
                
                const zakat = wealth * 0.025;
                
                totalWealthSpan.textContent = formatCurrency(wealth);
                zakatAmountSpan.textContent = formatCurrency(zakat);
                
                resultsDiv.classList.add('visible');
            });
            
            function formatCurrency(amount) {
                return amount.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }
            
            wealthInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    calculateBtn.click();
                }
            });
        });