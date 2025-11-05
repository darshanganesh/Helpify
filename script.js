// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item=>{
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', ()=>{
        item.classList.toggle('active');
    });
});

// Floating Symbols Random Position & Motion
document.querySelectorAll('.symbol').forEach(sym=>{
    sym.style.left = Math.random() * 90 + '%';
    sym.style.top = Math.random() * 100 + 'vh';
    sym.style.fontSize = (Math.random()*1.5 + 1)+'rem';
    const speed = Math.random()*0.5 + 0.2;
    let pos = parseFloat(sym.style.top);
    function float(){ pos-=speed; if(pos<-10) pos=100; sym.style.top = pos+'vh'; requestAnimationFrame(float); }
    float();
});

// Testimonials Rotation
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;
function showTestimonial() {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[testimonialIndex].classList.add('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
showTestimonial();
setInterval(showTestimonial,4000);
