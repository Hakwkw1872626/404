
        const portfolioData = [
    {
        id: 1,
        title: 'Apple iPhone 15',
        description: 'Новейший iPhone с улучшенной камерой, чипом A17 и стильным дизайном.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouynk1Nu-ii7w8AWS8GuYYkiWx3hSkVfTnQ&s',
        tech: ['Apple', 'iOS', 'Мобильные устройства']
    },
    {
        id: 2,
        title: 'Samsung Galaxy Z Fold 5',
        description: 'Складной смартфон с инновационным экраном и многозадачностью.',
        image: 'https://static.rozetked.me/imager/main/images/uploads/9e8HlcWxdD6Z.webp',
        tech: ['Samsung', 'Android', 'Мобильные устройства']
    },
    {
        id: 3,
        title: 'Amazon Echo Studio',
        description: 'Умная колонка с объемным звучанием, голосовым помощником Alexa и интеграцией со смарт-домом.',
        image: 'https://www.notebookcheck-ru.com/fileadmin/_processed_/6/6/csm_Amazon_Echo_Studio2_b6fac7b280.jpg',
        tech: ['Amazon', 'Alexa', 'IoT']
    },
    {
        id: 4,
        title: 'Tesla Model S Plaid',
        description: 'Электромобиль с высокой производительностью, автопилотом и современным интерьером.',
        image: 'https://ev-database.org/img/auto/Tesla_Model_S_2021/Tesla_Model_S_2021-01@2x.jpg',
        tech: ['Tesla', 'Электромобиль', 'Автопилот']
    },
    {
        id: 5,
        title: 'Nike Air Max 2025',
        description: 'Инновационные кроссовки с комфортной амортизацией и современным дизайном.',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68fdb594-8d1f-46c2-a7f8-83a3f3aa3a6f/air-max-2025-mens-shoes-1k3SPl.png',
        tech: ['Nike', 'Обувь', 'Спорт']
    },
    {
        id: 6,
        title: 'Sony WH-1000XM5',
        description: 'Беспроводные наушники с шумоподавлением и отличным качеством звука.',
        image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg',
        tech: ['Sony', 'Аудио', 'Беспроводные']
    },
    {
        id: 7,
        title: 'Airbnb Роскошная Вилла',
        description: 'Эксклюзивная вилла для отдыха с премиальными удобствами и индивидуальным сервисом.',
        image: 'https://a0.muscache.com/im/pictures/1fc28506-d659-4588-a787-4dd290a7c230.jpg', 
        tech: ['Airbnb', 'Путешествия', 'Размещение']
    }
];


            const skillsData = [
                { name: 'Apple', icon: '🔗', level: 95, category: 'frontend' },
                { name: 'Amazon', icon: '🟢', level: 90, category: 'frontend' },
                { name: 'Google', icon: '📘', level: 88, category: 'frontend' },
                { name: 'Spotifay', icon: '☁️', level: 92, category: 'backend' },
                { name: 'Microsoft', icon: '🐳', level: 85, category: 'frontend' },
                { name: 'Facebook', icon: '🐍', level: 93, category: 'frontend' },
                { name: 'Instagram', icon: '🔗', level: 82, category: 'backend' },
                { name: 'Netflix', icon: '◈', level: 87, category: 'backend' },
                { name: 'Tesla', icon: '🤖', level: 78, category: 'frontend' },
                { name: 'Samsung', icon: '🔗', level: 75, category: 'frontend' },
                { name: 'Meta', icon: '💚', level: 85, category: 'frontend' },
                { name: 'NVIDIA', icon: '🍃', level: 90, category: 'frontend' }
            ];

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                particle.style.left = Math.random() * 100 + '%';
                
                particle.style.top = Math.random() * 100 + '%';
                
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        function createCarouselItem(data, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = index;
            
            const techBadges = data.tech.map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('');
            
            item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;
            
            return item;
        }

        function initCarousel() {
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                let offset = index - currentIndex;
                
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;  
                    spacing2 = 420;  
                    spacing3 = 550;  
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
                filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">${skill.icon}</div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;
                    
                    skillsGrid.appendChild(hexagon);
                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        setInterval(nextSlide, 5000);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        initCarousel();
        initSkillsGrid();
        initParticles();

        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            alert(`Thank you ${data.name}! szni`);
            
            contactForm.reset();
        });

        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });