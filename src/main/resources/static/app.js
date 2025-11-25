const API_BASE = '/api/apod';

async function fetchApod() {
    const dateInput = document.getElementById('datePicker').value;
    let url = API_BASE;
    if (dateInput) {
        url += `?date=${dateInput}`;
    }

    showLoading(true);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        
        renderMainView(data);
    } catch (error) {
        console.error("Fetch error:", error);
        // Don't show an alert, show a nice error in the UI
        document.getElementById('media-container').innerHTML = 
            `<div style="padding:4rem; text-align:center; color: #fc3d21;">
                <h2>Transmission Failed</h2>
                <p>Unable to retrieve cosmic data. Please check your connection or API limit.</p>
            </div>`;
    } finally {
        showLoading(false);
    }
}

async function loadGallery() {
    try {
        const response = await fetch(`${API_BASE}/recent`);
        if (!response.ok) return; // Silent fail for gallery
        const data = await response.json();
        
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = ''; 

        data.reverse().forEach(item => {
            if(item.media_type === 'image') {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.onclick = () => loadFromGallery(item.date);
                
                div.innerHTML = `
                    <img src="${item.url}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <strong>${item.date}</strong><br>
                        ${item.title.substring(0, 20)}...
                    </div>
                `;
                gallery.appendChild(div);
            }
        });
    } catch (error) {
        console.log("Gallery could not load", error);
    }
}

function renderMainView(data) {
    document.getElementById('title').innerText = data.title;
    document.getElementById('date').innerText = data.date;
    document.getElementById('explanation').innerText = data.explanation;
    
    const copyrightText = data.copyright ? `Image Credit & Copyright: ${data.copyright}` : 'Public Domain';
    document.getElementById('copyright').innerText = copyrightText;

    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';

    if (data.media_type === 'image') {
        // Create an image object to pre-load before showing
        const img = new Image();
        img.src = data.url;
        img.alt = data.title;
        img.onload = () => {
             mediaContainer.appendChild(img);
        };
    } else if (data.media_type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.src = data.url;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
    }

    document.getElementById('content').classList.remove('hidden');
}

function loadFromGallery(date) {
    document.getElementById('datePicker').value = date;
    fetchApod();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToDetails() {
    document.getElementById('details-section').scrollIntoView({ behavior: 'smooth' });
}

function showLoading(isLoading) {
    const loader = document.getElementById('loading');
    const content = document.getElementById('content');
    
    if (isLoading) {
        loader.classList.remove('hidden');
        content.classList.add('hidden');
    } else {
        loader.classList.add('hidden');
        // We let the content remove hidden in renderMainView for smoother transition
    }
}

// Initialize
window.onload = function() {
    // Set date picker max to today
    document.getElementById('datePicker').max = new Date().toISOString().split("T")[0];
    
    fetchApod();
    loadGallery();
};