// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.getElementsByClassName('close')[0];
const form = document.getElementById('pendaftaran-form');

// Function to open form modal
function bukaForm(tipe) {
    modal.style.display = 'block';
    if (tipe === 'magang') {
        modalTitle.textContent = 'Pendaftaran Magang';
    } else {
        modalTitle.textContent = 'Pendaftaran Kegiatan Akhir';
    }
}

// Function to check status
function cekStatus(tipe) {
    const nim = prompt('Masukkan NIM Anda:');
    if (nim) {
        // Simulasi pengecekan status
        const status = ['Belum Terdaftar', 'Diterima', 'Ditolak'];
        const randomStatus = status[Math.floor(Math.random() * status.length)];
        alert(`Status ${tipe === 'magang' ? 'magang' : 'kegiatan akhir'} Anda: ${randomStatus}`);
    }
}

// Function to check progress
function cekProgress() {
    const nim = prompt('Masukkan NIM Anda:');
    if (nim) {
        // Simulasi progress
        const progress = Math.floor(Math.random() * 100);
        alert(`Progress kegiatan akhir Anda: ${progress}%`);
    }
}

// Close modal when clicking (x)
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form submission handler
form.onsubmit = function(e) {
    e.preventDefault();
    
    // Get form values
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    
    // Simulate form submission
    alert('Pendaftaran berhasil!\n\nNIM: ' + nim + '\nNama: ' + nama + '\nEmail: ' + email);
    
    // Clear form and close modal
    form.reset();
    modal.style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});