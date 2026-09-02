// Mobile Menu Toggle & Auto Close on Link Click
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Fitur Download CV
function handleDownloadCV() {
    alert('Fitur download CV akan segera tersedia!');
}

// Info Organisasi
function showOrgInfo(orgName, desc) {
    alert(`${orgName}: ${desc}`);
}

// Filter Project
function filterProjects(category, btn) {
    document.querySelectorAll('.project-filter-btn').forEach(b => {
        b.classList.remove('active', 'btn-gradient', 'shadow-neon-pink');
        b.classList.add('btn-pill-outline');
    });
    
    btn.classList.add('active', 'btn-gradient', 'shadow-neon-pink');
    btn.classList.remove('btn-pill-outline');

    document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden-card');
        } else {
            card.classList.add('hidden-card');
        }
    });
}

// Modal Detail Project
function openModal(title, desc) {
    alert(title + '\n\n' + desc);
}

// Kirim Pesan / Kontak Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('sender-name').value;
    const email = document.getElementById('sender-email').value;
    const message = document.getElementById('sender-message').value;

    const mailtoLink = `mailto:laurasriwijayanst@gmail.com?subject=Pesan dari ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
    
    alert('Terima kasih ' + name + '! Aplikasi email kamu akan segera terbuka untuk mengirim pesan ke Laura.');
}