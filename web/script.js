document.addEventListener('DOMContentLoaded', () => {

    // ─── Mobile Menu ───────────────────────────────────────────────
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.add('translate-x-0');
                mobileMenu.classList.remove('translate-x-full');
                menuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
                document.body.style.overflow = 'hidden';
            }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                document.body.style.overflow = '';
            });
        });
    }

    // ─── Scroll Animations ─────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // ─── Smooth Scroll ─────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ─── Stripe Checkout ───────────────────────────────────────────
    // ⚠️ استبدل STRIPE_PUBLISHABLE_KEY بمفتاحك من dashboard.stripe.com
    const STRIPE_KEY = 'pk_live_YOUR_PUBLISHABLE_KEY_HERE';

    // خطط الاشتراك - استبدل price_IDs بـ IDs من Stripe Dashboard
    const PLANS = {
        starter: {
            name: 'Starter Bot',
            price: '$1.99/mo',
            // priceId: 'price_XXXXXXXXXXXXXXXXXXXXXXXX', // ← هنا تحط الـ Price ID من Stripe
        },
        pro: {
            name: 'Developer Pro',
            price: '$4.99/mo',
            // priceId: 'price_XXXXXXXXXXXXXXXXXXXXXXXX', // ← هنا تحط الـ Price ID من Stripe
        }
    };

    // Deploy buttons
    document.querySelectorAll('[data-plan]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const planKey = btn.getAttribute('data-plan');
            const plan = PLANS[planKey];

            if (!plan) return;

            // Check if Stripe key is configured
            if (STRIPE_KEY.includes('YOUR_PUBLISHABLE_KEY')) {
                showStripeModal(plan);
                return;
            }

            // Real Stripe checkout
            try {
                btn.disabled = true;
                btn.textContent = 'Loading...';

                const stripe = Stripe(STRIPE_KEY);
                await stripe.redirectToCheckout({
                    lineItems: [{ price: plan.priceId, quantity: 1 }],
                    mode: 'subscription',
                    successUrl: window.location.origin + '/success',
                    cancelUrl: window.location.origin + '/prices',
                });
            } catch (err) {
                console.error('Stripe error:', err);
                btn.disabled = false;
                btn.textContent = 'Deploy Now';
            }
        });
    });

    function showStripeModal(plan) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[999] flex items-center justify-center p-6';
        modal.style.background = 'rgba(0,0,0,0.85)';
        modal.style.backdropFilter = 'blur(10px)';
        modal.innerHTML = `
            <div style="background:#0a0a0a; border:1px solid rgba(59,130,246,0.3); border-radius:24px; padding:40px; max-width:480px; width:100%; position:relative;">
                <button onclick="this.closest('.fixed').remove()" style="position:absolute;top:20px;right:20px;background:none;border:none;color:#666;font-size:20px;cursor:pointer;">
                    <i class="fas fa-times"></i>
                </button>
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
                    <div style="width:48px;height:48px;background:rgba(99,91,255,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                        <i class="fab fa-stripe-s" style="color:#635bff;font-size:24px;"></i>
                    </div>
                    <div>
                        <h3 style="color:white;font-weight:800;font-size:18px;">${plan.name}</h3>
                        <p style="color:#3b82f6;font-size:14px;font-weight:600;">${plan.price}</p>
                    </div>
                </div>
                <div style="background:rgba(99,91,255,0.08);border:1px solid rgba(99,91,255,0.2);border-radius:16px;padding:20px;margin-bottom:24px;">
                    <p style="color:#94a3b8;font-size:13px;line-height:1.6;">
                        <i class="fas fa-info-circle" style="color:#635bff;margin-right:8px;"></i>
                        لإتمام الدفع، يحتاج المؤسس إلى إعداد Stripe. 
                        تواصل معنا عبر Discord لإتمام الاشتراك يدوياً الآن.
                    </p>
                </div>
                <div style="display:grid;gap:12px;">
                    <a href="https://discord.gg/9q9jbGsDzA" target="_blank" 
                       style="display:flex;align-items:center;justify-content:center;gap:10px;background:#5865f2;color:white;padding:14px;border-radius:12px;font-weight:700;text-decoration:none;">
                        <i class="fab fa-discord"></i> اشترك عبر Discord
                    </a>
                    <a href="mailto:acehost@acehost.us.ci?subject=Subscription: ${plan.name}" 
                       style="display:flex;align-items:center;justify-content:center;gap:10px;background:rgba(255,255,255,0.05);color:white;padding:14px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid rgba(255,255,255,0.1);">
                        <i class="fas fa-envelope"></i> اشترك عبر Email
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    console.log("%c ACE HOST %c Secured by Alexander & Jef ",
        "background: #2563eb; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
        "background: #1e293b; color: #3b82f6; padding: 4px 8px; border-radius: 4px;");
});
