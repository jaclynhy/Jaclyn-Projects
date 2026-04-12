// Sample cat profiles
const sampleCats = [
    {
        id: 1,
        name: "Whiskers",
        description: "An adorable orange tabby with a playful personality. Whiskers loves chasing toys and cuddles. Great with children and other pets. 3 years old.",
        favorite: false
    },
    {
        id: 2,
        name: "Luna",
        description: "A beautiful black and white tuxedo cat. Luna is calm, affectionate, and loves sitting on laps. Perfect for a quiet household. 5 years old.",
        favorite: false
    },
    {
        id: 3,
        name: "Mittens",
        description: "A fluffy gray Persian with the sweetest temperament. Mittens enjoys indoor play and gentle handling. Needs regular grooming. 4 years old.",
        favorite: false
    },
    {
        id: 4,
        name: "Shadow",
        description: "A sleek black cat with curious eyes. Shadow is energetic, intelligent, and loves interactive play. Very vocal and loves attention! 2 years old.",
        favorite: false
    }
];

// Initialize cats from localStorage or use samples
let cats = JSON.parse(localStorage.getItem('cats')) || sampleCats;
let nextId = Math.max(...cats.map(c => c.id), 0) + 1;

// Get DOM elements
const catForm = document.getElementById('catForm');
const catNameInput = document.getElementById('catName');
const catDescriptionInput = document.getElementById('catDescription');
const catsList = document.getElementById('catsList');

// Event listeners
catForm.addEventListener('submit', handleAddCat);

// Initialize the app
function init() {
    renderCats();
}

// Add a new cat
function handleAddCat(e) {
    e.preventDefault();

    const name = catNameInput.value.trim();
    const description = catDescriptionInput.value.trim();

    if (name && description) {
        const newCat = {
            id: nextId++,
            name: name,
            description: description
        };

        cats.push(newCat);
        saveCats();
        renderCats();

        // Reset form
        catForm.reset();
        catNameInput.focus();
    }
}

// Delete a cat
function deleteCat(id) {
    cats = cats.filter(cat => cat.id !== id);
    saveCats();
    renderCats();
}

// Toggle favorite status
function toggleFavorite(id) {
    const cat = cats.find(c => c.id === id);
    if (cat) {
        cat.favorite = !cat.favorite;
        saveCats();
        renderCats();
    }
}

// Render all cats
function renderCats() {
    catsList.innerHTML = '';

    if (cats.length === 0) {
        catsList.innerHTML = '<div class="empty-state"><p>No cats available at the moment. Add one to get started!</p></div>';
        return;
    }

    // Sort cats with favorites first
    const sortedCats = [...cats].sort((a, b) => {
        if (a.favorite && !b.favorite) return -1;
        if (!a.favorite && b.favorite) return 1;
        return 0;
    });

    sortedCats.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        const favoriteClass = cat.favorite ? 'active' : '';
        const favoriteBadge = cat.favorite ? '<span class="favorite-badge">★ Favorite</span>' : '';
        catCard.innerHTML = `
            <div class="cat-card-header">
                <div>
                    <h3>${escapeHtml(cat.name)}${favoriteBadge}</h3>
                </div>
                <button class="btn-favorite ${favoriteClass}" onclick="toggleFavorite(${cat.id})" title="Mark as favorite">★</button>
            </div>
            <p>${escapeHtml(cat.description)}</p>
            <button class="btn btn-danger" onclick="deleteCat(${cat.id})">Delete Profile</button>
        `;
        catsList.appendChild(catCard);
    });
}

// Save cats to localStorage
function saveCats() {
    localStorage.setItem('cats', JSON.stringify(cats));
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Start the app
init();
