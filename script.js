// ========================================
// OZSNAP - Modern Photography Website
// JavaScript - Navigation, Blog & Interactions
// ========================================

// ---------- Blog Post Data ----------
const blogPosts = {
    'post-1': {
        title: 'Welcome to the Reimagined OZSNAP',
        category: 'The New Era',
        date: 'March 14, 2026',
        breadcrumb: 'The Reimagined OZSNAP',
        content: `
            <p class="blog-post-lead">After years of capturing the stories of others, I realized it was time to refine my own digital home. The new OZSNAP isn't just a website update; it's a reflection of my growth as both a photographer and a graphic designer. I wanted a space that feels as clean, professional, and emotive as the photos I take.</p>

            <h2>Minimalist Interface</h2>
            <p>Removing the noise to let the visual portfolios breathe. Every element on this new site has been carefully considered — from the typography to the spacing, from the color palette to the micro-animations. The goal was simple: let the work speak for itself without competing with excessive design flourishes.</p>

            <h2>Enhanced User Experience</h2>
            <p>A smoother way for clients to browse my design services and snap packages. Navigation is intuitive, pages load seamlessly, and finding the right information takes seconds, not minutes. Whether you're a potential client looking for wedding photography or a business seeking design services, the journey through this site should feel effortless.</p>

            <h2>The Vision</h2>
            <p>Bridging the gap between timeless photography and modern digital aesthetics. This site represents where I am today — a creator who respects the craft of traditional photography while embracing the tools of tomorrow. It's a digital gallery, a business card, and a creative journal all rolled into one.</p>

            <blockquote>The new OZSNAP isn't just a website update; it's a reflection of my growth as both a photographer and a graphic designer.</blockquote>

            <p>I'm excited to share this new chapter with you. Whether you've been following my work for years or you're discovering OZSNAP for the first time, welcome. I hope this space inspires you as much as building it has inspired me.</p>
        `
    },
    'post-2': {
        title: 'The Golden Hour in Brisbane: Capturing Magic in the Sun State',
        category: 'Photography',
        date: 'March 12, 2026',
        breadcrumb: 'Golden Hour in Brisbane',
        content: `
            <p class="blog-post-lead">Brisbane offers some of the most unique light in Australia, especially in the North Lakes area. As a local photographer, I've spent countless hours tracking how the sun hits the Eucalyptus trees and the waterfront. This post dives into why timing is everything.</p>

            <h2>The Science of Light</h2>
            <p>Why 30 minutes before sunset is the "sweet spot" for family portraits. During this window, the sun sits low on the horizon, casting a warm, golden glow that flatters every skin tone and creates a natural backlight that adds depth and dimension to portraits. The harsh midday shadows disappear, replaced by soft, directional light that wraps around your subjects beautifully.</p>
            <p>Understanding this science isn't just academic — it's practical. When I schedule shoots, I work backwards from sunset, ensuring we're in position during those precious minutes when the light transforms from ordinary to extraordinary.</p>

            <h2>Location Spotlight</h2>
            <p>Why North Lakes and Redcliffe offer the perfect mix of urban and natural backdrops. North Lakes has this wonderful blend of manicured parklands, modern architecture, and natural bushland that provides incredible variety within a short distance. Redcliffe's waterfront, with its pier stretching out over Moreton Bay, offers dramatic backgrounds that catch the golden light reflecting off the water.</p>
            <p>I've personally scouted dozens of locations across these areas, noting how the light changes with the seasons, the direction of the sun, and even which spots offer wind protection for those perfect hair-in-place shots.</p>

            <h2>Preparation Tips</h2>
            <p>What colors to wear to complement the warm, Queensland golden tones. I always advise my clients to lean into earthy, neutral palettes — think creams, tans, soft whites, and muted greens. These colors harmonize with the warm light rather than competing with it. Avoid bright whites (they blow out in golden light) and neon colors (they cast unflattering reflected light onto skin).</p>
            <p>The key is to let the natural beauty of the light do the heavy lifting. When your wardrobe works with the environment rather than against it, the results are consistently stunning.</p>
        `
    },
    'post-3': {
        title: 'Photography in the Age of AI: The Human Touch Remains',
        category: 'Technology',
        date: 'March 10, 2026',
        breadcrumb: 'Photography & AI',
        content: `
            <p class="blog-post-lead">As a graphic designer who embraces AI tools like Antigravity, I often get asked: "Is traditional photography still relevant?" My answer is always a resounding yes. While AI can generate an image, it cannot capture a memory.</p>

            <h2>Authenticity vs. Generation</h2>
            <p>The value of a real smile, a genuine tear, and a split-second embrace. These are moments that exist in a single heartbeat — they cannot be predicted, prompted, or generated. When I press the shutter during a wedding ceremony, I'm preserving a microsecond of genuine human emotion that will never occur again in exactly that way.</p>
            <p>AI-generated images, no matter how photorealistic, lack this fundamental quality: truth. A family portrait captures who you were at that exact moment in time — the way your child held your hand, the pattern of your grandmother's favourite dress, the way the light fell on that particular afternoon. No algorithm can replicate this.</p>

            <h2>AI as a Partner</h2>
            <p>How I use modern technology to enhance the editing process without losing the "soul" of the photo. AI has become an incredible ally in my workflow. From intelligent noise reduction to smart colour grading suggestions, these tools allow me to spend less time on technical corrections and more time on the creative decisions that truly matter.</p>
            <p>But here's my line in the sand: AI assists the process; it never replaces the photographer's eye. The decision of when to shoot, what to include in the frame, how to connect with a nervous subject — these remain profoundly human skills.</p>

            <h2>Future-Proofing Memories</h2>
            <p>Why high-quality, professional snaps are becoming even more precious in a world of filtered, disposable content. In an era where billions of images are generated daily — many of them artificially created — the authentic photograph becomes a rare and valuable artifact. When your grandchildren look at your wedding photos, they'll want to know that the moment was real.</p>

            <blockquote>While AI can generate an image, it cannot capture a memory. The human touch in photography isn't just relevant — it's irreplaceable.</blockquote>

            <p>Investing in professional photography today is investing in genuine memories that will appreciate in significance as the digital landscape becomes increasingly artificial.</p>
        `
    },
    'post-4': {
        title: 'Designing for Impact: Why Visual Identity is Your Best Salesman',
        category: 'Design',
        date: 'March 8, 2026',
        breadcrumb: 'Designing for Impact',
        content: `
            <p class="blog-post-lead">Graphic design is more than just a logo; it's the silent ambassador of your brand. Drawing from my dual background, I look at design through a lens—focusing on composition, balance, and focus.</p>

            <h2>The First Impression</h2>
            <p>You have less than 3 seconds to capture a customer's attention online. In those critical moments, your visual identity does all the talking. Before anyone reads your tagline, reviews your services, or checks your pricing, they've already formed a gut reaction based on how your brand looks.</p>
            <p>This is where my photography background gives me an edge as a designer. I understand the power of visual hierarchy — the way your eye naturally moves through an image, drawn first to the brightest point, then flowing through the composition. I apply these same principles to every design project, ensuring the most important message hits first.</p>

            <h2>Consistency is Key</h2>
            <p>How a unified color palette and typography build trust over time. Think of the brands you trust most — they're instantly recognizable because every touchpoint feels cohesive. Your business card matches your website, which matches your social media, which matches your storefront signage.</p>
            <p>This consistency doesn't happen by accident. It's built through a deliberate brand system — a carefully chosen set of colors, typefaces, spacing rules, and graphic elements that work together to create a unified visual language.</p>

            <h2>Strategy First</h2>
            <p>Why I start every design project by asking about the "feeling" rather than the "look." When a client comes to me saying "I want a blue logo," my first question is always: "Why? What feeling are you trying to create?" Sometimes blue is the right answer. Often, it isn't.</p>
            <p>Great design starts with strategy. Before a single pixel is placed, we need to understand your audience, your competitive landscape, your values, and the emotional response you want to evoke. Only then can we make design decisions that truly serve your business goals.</p>
        `
    },
    'post-5': {
        title: 'Overcoming "Camera Shyness": A Guide to Natural Portraits',
        category: 'Tips',
        date: 'March 6, 2026',
        breadcrumb: 'Overcoming Camera Shyness',
        content: `
            <p class="blog-post-lead">Most people hate being in front of a camera. I've heard "I'm not photogenic" more times than I can count. My job as your photographer isn't just to press a button; it's to create an environment where you feel safe enough to be yourself.</p>

            <h2>The "Candid" Secret</h2>
            <p>How I use movement and conversation to distract you from the lens. The best portraits happen when people forget they're being photographed. That's why I never start a session by pointing a camera at someone's face and saying "smile." Instead, I start with conversation.</p>
            <p>I'll ask about your weekend plans, your favorite restaurant, what your kids did this morning. While you're talking and laughing, I'm shooting. These are the moments that produce the most genuine expressions — the ones where you look like yourself.</p>
            <p>Movement is another powerful tool. Walking together, spinning your partner, throwing your child in the air, adjusting a necklace — all of these create natural, dynamic poses that feel authentic rather than staged.</p>

            <h2>Comfort First</h2>
            <p>Why wearing something you feel confident in is more important than wearing something "fancy." I've seen it happen dozens of times: someone buys a brand-new outfit specifically for their photoshoot, and they spend the entire session tugging at uncomfortable seams and feeling unlike themselves.</p>
            <p>My advice is always the same — wear something you've worn before and felt great in. Confidence is the most photogenic quality anyone can have, and it comes from feeling comfortable in your own skin (and clothes).</p>

            <h2>The Result</h2>
            <p>Portraits that look like you, not a stiff version of you. When I deliver a final gallery, my favorite compliment isn't "these are beautiful" — it's "you really captured us." Because that's the goal. Not to create a fashion editorial, but to create a window into who you are at this moment in your life.</p>

            <blockquote>"I'm not photogenic" is never true. You just haven't had a photographer who knows how to make you feel at ease.</blockquote>

            <p>If you've been putting off family portraits because you dread the experience, I promise: it doesn't have to feel that way. Let's make it fun.</p>
        `
    },
    'post-6': {
        title: 'North Lakes: A Creative\'s Perspective on Our Community',
        category: 'Community',
        date: 'March 4, 2026',
        breadcrumb: 'North Lakes Community',
        content: `
            <p class="blog-post-lead">Living in North Lakes for years has deeply influenced my creative style. The suburban tranquility mixed with the vibrant growth of Brisbane creates a unique rhythm. This post is a tribute to the community that supports local artists.</p>

            <h2>Local Inspiration</h2>
            <p>How the landscape and architecture of our suburb find their way into my design work. North Lakes is a fascinating study in contrasts — modern shopping centres sit alongside pristine nature reserves, and manicured parks border wild bushland. This juxtaposition of the orderly and the organic has profoundly shaped my aesthetic sensibility.</p>
            <p>When I design, I often find myself reaching for that same balance: clean, modern structure paired with natural, organic elements. The color palette of our environment — the deep greens of the eucalyptus, the warm sandstone tones, the brilliant blue Queensland sky — consistently shows up in my work.</p>

            <h2>Supporting Local</h2>
            <p>The importance of choosing local creators for family milestones and business branding. When you hire a local photographer or designer, you're doing more than purchasing a service — you're investing in your community. That money circulates locally, supporting the cafes where we meet for consultations, the print shops where we produce materials, and the families who call North Lakes home.</p>
            <p>But beyond economics, there's a creative advantage too. A local creator understands your environment intuitively. I know which parks have the best light at 4 PM, which walls make perfect backdrops, and which spots offer privacy for intimate family sessions. This local knowledge translates directly into better results.</p>

            <h2>Personal Connection</h2>
            <p>Why I love meeting clients at local cafes to discuss their vision before a shoot. There's something about sitting across from someone over a flat white at a familiar cafe that breaks down barriers. It's not a formal consultation — it's a conversation between neighbors. These casual meetings are where the best ideas emerge, where I learn what truly matters to my clients, and where trust is built.</p>
            <p>North Lakes isn't just where I work — it's where I belong. And that sense of belonging infuses every project with a warmth and authenticity that you can't fake.</p>
        `
    },
    'post-7': {
        title: 'The Architecture of a Design Project: From Concept to Completion',
        category: 'Process',
        date: 'March 2, 2026',
        breadcrumb: 'Design Process',
        content: `
            <p class="blog-post-lead">Ever wonder what happens after our first meeting? Behind every "simple" logo or "clean" layout is a rigorous process of research, sketching, and refinement. I'm pulling back the curtain on my design studio.</p>

            <h2>Phase 1: Discovery</h2>
            <p>Understanding your goals and audience. This is where the real work begins — not at the computer, but in conversation. During the discovery phase, I ask the questions that most clients don't expect: Who is your ideal customer? What do your competitors do well (and poorly)? What's the one feeling you want someone to have when they see your brand?</p>
            <p>I also conduct independent research — analyzing your market, studying design trends in your industry, and identifying opportunities for differentiation. This phase typically takes a week, and it's the most important investment in the entire project.</p>

            <h2>Phase 2: Iteration</h2>
            <p>Why the first idea is rarely the final one. Armed with discovery insights, I begin exploring — sketching by hand, creating mood boards, testing color combinations, experimenting with typography. I typically develop three distinct creative directions, each solving the design brief in a different way.</p>
            <p>This is the phase where we collaborate most closely. I present concepts, you provide feedback, and together we push and pull until we land on something that feels right. Great design is never a solo endeavour — it's a dialogue.</p>

            <h2>Phase 3: Refinement</h2>
            <p>Obsessing over the pixels and the kerning to ensure professional delivery. Once we've chosen a direction, I zoom in — adjusting letter spacing by fractions of a point, ensuring color values are optimised for both screen and print, testing the design across every possible application.</p>
            <p>This is where my training as a photographer serves me well. Just as I wait for the perfect moment to press the shutter, I wait until every detail is precisely right before delivering the final design. You deserve nothing less.</p>

            <blockquote>Behind every "simple" logo is a rigorous process of research, sketching, and refinement. Simplicity is the ultimate sophistication.</blockquote>

            <p>The final deliverable isn't just a set of files — it's a comprehensive brand toolkit that empowers you to maintain consistency across every touchpoint, from business cards to billboards.</p>
        `
    },
    'post-8': {
        title: 'Creative Longevity: Evolving as a Creator at 40 and Beyond',
        category: 'Personal',
        date: 'February 28, 2026',
        breadcrumb: 'Creative Longevity',
        content: `
            <p class="blog-post-lead">Starting new ventures like "Insight Lab" or "Fixness" at this stage of life has taught me that experience is a superpower. In this post, I share my journey of staying curious and constantly learning new skills.</p>

            <h2>Growth Mindset</h2>
            <p>Why I'm not afraid to dive into AI, video generation, and new business models. At 40, some people start winding down their ambitions. I've found the opposite to be true — the combination of decades of experience with fresh, emerging technologies creates a creative sweet spot that simply wasn't available to me at 25.</p>
            <p>When I explore a tool like AI image generation, I don't approach it as a beginner — I bring 15+ years of understanding composition, colour theory, and visual storytelling. This foundation allows me to use new tools more effectively and more purposefully than someone who's never developed an eye for design.</p>
            <p>New business ventures like Insight Lab and Fixness aren't distractions from my core creative work — they're extensions of it. Each new project teaches me something that feeds back into everything else I do.</p>

            <h2>Health & Creativity</h2>
            <p>How physical mobility and wellness (the core of my Fixness project) fuel my ability to work long hours on design. Here's something nobody talks about in the creative industry: the physical toll of our work. Hours spent hunched over a screen, the mental fatigue of deadline pressure, the isolation of freelance life — these things compound over time.</p>
            <p>Fixness was born from personal necessity. I discovered that when I prioritize physical movement and wellness, my creative output improves dramatically. A 30-minute walk before a design session generates better ideas than three hours of staring at a blank screen. Proper sleep, regular exercise, and mindful breaks aren't luxuries — they're essential creative tools.</p>

            <h2>Advice for Peers</h2>
            <p>It's never too late to pivot or expand your creative horizon. If you're a fellow creator in your 40s feeling the pull to try something new — whether that's adopting AI tools, launching a side project, or completely reinventing your creative practice — here's what I've learned:</p>
            <ul>
                <li><strong>Your experience is not a limitation — it's your unfair advantage.</strong> You've developed instincts that can't be taught.</li>
                <li><strong>Start before you're ready.</strong> Perfectionism is the enemy of progress, and at this stage, you know enough to figure things out along the way.</li>
                <li><strong>Connect with younger creators.</strong> Their fresh perspectives combined with your depth of experience creates magic.</li>
                <li><strong>Invest in your health.</strong> Your body is the vehicle for your creativity. Maintain it.</li>
            </ul>

            <blockquote>Experience is a superpower. At 40, you're not slowing down — you're just getting started with better tools and deeper wisdom.</blockquote>

            <p>The best creative work of your life might still be ahead of you. Mine certainly is.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Page Navigation ----------
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('[data-page]');

    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active', 'fade-in');
        });

        // Show target page
        const target = document.getElementById(`page-${pageId}`);
        if (target) {
            target.classList.add('active');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    target.classList.add('fade-in');
                });
            });
        }

        // Update nav active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu
        const navLinksContainer = document.getElementById('nav-links');
        const menuToggle = document.getElementById('menu-toggle');
        navLinksContainer.classList.remove('open');
        menuToggle.classList.remove('active');

        // Re-trigger scroll animations
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }

    // Attach click handlers to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // ---------- Blog Post Navigation ----------
    function showBlogPost(postId) {
        const post = blogPosts[postId];
        if (!post) return;

        // Populate the blog post page
        document.getElementById('blog-post-title').textContent = post.title;
        document.getElementById('blog-post-breadcrumb').textContent = post.breadcrumb;
        document.getElementById('blog-post-category').textContent = post.category;
        document.getElementById('blog-post-date').textContent = post.date;
        document.getElementById('blog-post-body').innerHTML = post.content;

        // Populate related posts (all posts except current)
        const relatedList = document.getElementById('blog-post-related');
        relatedList.innerHTML = '';
        Object.keys(blogPosts).forEach(key => {
            if (key !== postId) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = blogPosts[key].title;
                a.setAttribute('data-blog', key);
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    showBlogPost(key);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                li.appendChild(a);
                relatedList.appendChild(li);
            }
        });

        // Show blog-post page
        pages.forEach(page => {
            page.classList.remove('active', 'fade-in');
        });
        const target = document.getElementById('page-blog-post');
        target.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                target.classList.add('fade-in');
            });
        });

        // Update nav: highlight Blog link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'blog') {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu
        document.getElementById('nav-links').classList.remove('open');
        document.getElementById('menu-toggle').classList.remove('active');
    }

    // Attach blog post click handlers
    function attachBlogPostLinks() {
        document.querySelectorAll('[data-blog]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = link.getAttribute('data-blog');
                showBlogPost(postId);
            });
        });
    }
    attachBlogPostLinks();

    // ---------- Mobile Menu Toggle ----------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ---------- Scroll Animations ----------
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-aos]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            el.classList.remove('visible');
            observer.observe(el);
        });
    }

    initScrollAnimations();

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #00cec9, #55efc4)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ---------- Filter Buttons ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ---------- Initialize home page ----------
    const homePage = document.getElementById('page-home');
    if (homePage) {
        homePage.classList.add('fade-in');
    }
});
