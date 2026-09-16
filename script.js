
const videoGallery = document.getElementById('video-gallery');
const thumbnailGallery = document.getElementById('thumbnail-gallery');
const tabVideos = document.getElementById('tab-videos');
const tabThumbnails = document.getElementById('tab-thumbnails');

// --- 1. LIGHTBOX (POPUP) LOGIC ---

const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxContent = document.getElementById('lightbox-content');

function openLightbox(item) {
    lightboxContent.innerHTML = '';

    if (item.type === 'video') {
        const vid = document.createElement('video');

        vid.src = item.file;
        vid.controls = true;
        vid.autoplay = true;

        lightboxContent.appendChild(vid);
    } else {
        const img = document.createElement('img');

        img.src = item.file;

        lightboxContent.appendChild(img);
    }

    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxContent.innerHTML = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxContent) {
        closeLightbox();
    }
});

// --- 2. DATA SOURCE ---

const portfolioItems = [
    // --- VIDEOS ---

    {
        type: 'video',
        name: 'Promo Edits',
        file: 'videos/23 Theme (From AA23) - Anirudh Ravichander.mp4'
    },

    {
        type: 'video',
        name: 'Motion Graphics',
        file: 'videos/SDW Particles(38)_2.mp4'
    },

    {
        type: 'video',
        name: 'Cinematic Intro',
        file: 'videos/Main Intro.mp4'
    },

    {
        type: 'video',
        name: 'Fast Cuts & Reels',
        file: 'videos/reel.mp4'
    },

    {
        type: 'video',
        name: 'Short-form Tech',
        file: 'videos/VN20260220_171705_1.mp4'
    },

    // --- THUMBNAILS ---

    {
        type: 'image',
        name: 'Maths Tricks',
        file: 'photos/18235.jpg.jpeg'
    },

    {
        type: 'image',
        name: 'NIT Cutoffs',
        file: 'photos/184303.jpg.jpeg'
    },

    {
        type: 'image',
        name: 'JEE Mistakes',
        file: 'photos/20251111_175102.png'
    },

    {
        type: 'image',
        name: 'JEE Expected Marks',
        file: 'photos/20251204_115509.png'
    },

    {
        type: 'image',
        name: 'Cheatcodes',
        file: 'photos/20260212_222838.jpg.jpeg'
    },

    {
        type: 'image',
        name: '10 Days Strategy',
        file: 'photos/20260212_222937.jpg.jpeg'
    },

    {
        type: 'image',
        name: 'Food Review',
        file: 'photos/20260214_150820.jpg.jpeg'
    },

    {
        type: 'image',
        name: 'Inorganic Chemistry',
        file: 'photos/77777777.png'
    },

    {
        type: 'image',
        name: 'HTML Course Video',
        file: 'photos/1760535017899.jpg.jpeg'
    },

    {
        type: 'image',
        name: 'Alternative Cutoff',
        file: 'photos/S184303.jpg.jpeg'
    }
];

// --- 3. BUILD GALLERIES ---

portfolioItems.forEach(item => {

    const card = document.createElement('div');

    card.classList.add('work-item');

    card.addEventListener('click', () => {
        openLightbox(item);
    });

    if (item.type === 'video') {

        const video = document.createElement('video');

        video.src = item.file;
        video.classList.add('work-media');
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;

        card.appendChild(video);

        const label = document.createElement('div');

        label.classList.add('work-label');
        label.innerText = item.name;

        card.appendChild(label);

        videoGallery.appendChild(card);

    } else {

        const img = document.createElement('img');

        img.src = item.file;
        img.classList.add('work-media');
        img.loading = 'lazy';

        card.appendChild(img);

        const label = document.createElement('div');

        label.classList.add('work-label');
        label.innerText = item.name;

        card.appendChild(label);

        thumbnailGallery.appendChild(card);
    }

});

// --- 4. TABS LOGIC ---

tabVideos.addEventListener('click', () => {

    tabVideos.classList.add('active');
    tabThumbnails.classList.remove('active');

    videoGallery.classList.remove('hidden');
    thumbnailGallery.classList.add('hidden');

});

tabThumbnails.addEventListener('click', () => {

    tabThumbnails.classList.add('active');
    tabVideos.classList.remove('active');

    thumbnailGallery.classList.remove('hidden');
    videoGallery.classList.add('hidden');

});

// --- 5. PREMIUM CUSTOM CURSOR ---

const customCursor = document.querySelector('.custom-cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';

});

function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';

    requestAnimationFrame(animateCursor);

}

animateCursor();

// --- 6. CURSOR HOVER EFFECTS ---

const clickableElements = document.querySelectorAll(
    'a, button, .work-item'
);

clickableElements.forEach(element => {

    element.addEventListener('mouseenter', () => {

        document.body.classList.add('cursor-hover');

    });

    element.addEventListener('mouseleave', () => {

        document.body.classList.remove('cursor-hover');

    });

});

const galleryItems = document.querySelectorAll('.work-item');

galleryItems.forEach(element => {

    element.addEventListener('mouseenter', () => {

        document.body.classList.add('cursor-gallery');

    });

    element.addEventListener('mouseleave', () => {

        document.body.classList.remove('cursor-gallery');

    });

});