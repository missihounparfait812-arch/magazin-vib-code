/* ==========================================================================
   SPORT VIBE MAGAZINE - APP LOGIC & REAL-TIME PUBLISHING SYSTEM
   ========================================================================== */

// Initial Sports Database with our high-definition local assets
const INITIAL_ARTICLES = [
  {
    id: "art-1",
    title: "Ligue des Champions : Fin de match d'anthologie et qualification héroïque sous le déluge",
    category: "football",
    categoryLabel: "Football",
    tag: "LDC - Choc Européen",
    image: "assets/images/football.jpg",
    excerpt: "Au terme d'un suspense insoutenable sous une pluie battante, une frappe téléguidée à la 94e minute envoie les siens vers le dernier carré européen dans une ambiance survoltée.",
    content: `Le stade en fusion n'avait d'yeux que pour cette ultime offensive. Dans les arrêts de jeu d'une rencontre d'une intensité physique rare, la délivrance est venue d'un exploit individuel magistral.\n\nContrôle orienté sous la pluie battante, élimination de deux défenseurs et frappe pure qui vient nettoyer la lucarne opposée : le gardien adverse est resté figé sur sa ligne.\n\n« Nous n'avons jamais cessé d'y croire. L'énergie du public nous a portés au-delà de la fatigue », confiait le capitaine au micro au coup de sifflet final.\n\nCette victoire propulse l'équipe en demi-finale après une confrontation qui restera gravée dans les annales du football moderne.`,
    author: "Marc Lefèvre",
    authorInitials: "ML",
    date: "Il y a 12 min",
    timestamp: Date.now() - 12 * 60 * 1000,
    likes: 342,
    isLiked: false,
    isBookmarked: false,
    comments: [
      { author: "Karim94", text: "Quel match extraordinaire ! Le meilleur de la saison sans aucun doute." },
      { author: "Sophie B.", text: "Cette frappe en lucarne est juste indéfendable, pure magie." }
    ]
  },
  {
    id: "art-2",
    title: "NBA Finals : Dunks stratosphériques et exploit historique au buzzer dans un Game 7 d'anthologie",
    category: "basketball",
    categoryLabel: "Basketball",
    tag: "NBA - Play-offs",
    image: "assets/images/basketball.jpg",
    excerpt: "Une performance légendaire à 48 points, ponctuée par un smash destructeur faisant trembler les arceaux dans une salle comble chauffée à blanc.",
    content: `L'intensité était palpable dès l'entre-deux initial. Devant plus de 20 000 spectateurs en transe, la franchise a décroché son sacre au terme d'une bataille tactique et physique sans précédent.\n\nLe numéro 8 a livré le match de sa carrière : 48 points, 14 rebonds et ce dunk monumental en haute altitude qui a fait rugir toute l'arène dans les dernières secondes.\n\nLes spécialistes s'accordent à dire qu'il s'agit de la plus grande performance individuelle observée lors d'un match décisif depuis plus d'une décennie.`,
    author: "Thomas Miller",
    authorInitials: "TM",
    date: "Il y a 45 min",
    timestamp: Date.now() - 45 * 60 * 1000,
    likes: 519,
    isLiked: false,
    isBookmarked: true,
    comments: [
      { author: "AirJordanFan", text: "Ce dunk restera dans l'histoire, quelle détente phénoménale !" }
    ]
  },
  {
    id: "art-3",
    title: "Grand Prix de Nuit : Pole position sous la pluie battante et étincelles à Tokyo",
    category: "f1",
    categoryLabel: "Formule 1",
    tag: "F1 - Grand Prix",
    image: "assets/images/formula1.jpg",
    excerpt: "Sous les néons futuristes de la piste détrempée, le champion en titre s'impose au millième de seconde près au volant d'un bolide crachant des gerbes d'étincelles.",
    content: `Les conditions d'adhérence étaient quasi-impossibles sur l'asphalte miroitant du circuit urbain. Pourtant, c'est bien à plus de 320 km/h que la bataille chronométrique a rendu son verdict.\n\nEn frôlant les rails de sécurité à chaque virage avec une précision chirurgicale, le pilote a fait rugir son moteur hybride pour décrocher une pole position stupéfiante.\n\n« Les sensations étaient extrêmes, la voiture flottait dans les lignes droites, mais nous avions le rythme », a déclaré l'ingénieur de piste à la radio.`,
    author: "Elena Rostova",
    authorInitials: "ER",
    date: "Il y a 2h",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    likes: 278,
    isLiked: false,
    isBookmarked: false,
    comments: [
      { author: "PitStopFan", text: "Le pilotage sous la pluie était magistral. Bravo à toute l'écurie." }
    ]
  },
  {
    id: "art-4",
    title: "Tennis sur terre battue : Duel de titans et glissade victorieuse sur le court central",
    category: "tennis",
    categoryLabel: "Tennis",
    tag: "Grand Chelem",
    image: "assets/images/tennis.jpg",
    excerpt: "Dans un nuage d'ocre et sous le soleil couchant, un coup droit supersonique en bout de course conclut un rallye épique de 38 échanges.",
    content: `Plus de 4 heures et 20 minutes de jeu n'auront pas suffi à entamer la rage de vaincre des deux prodiges. Sur la terre battue lourde et exigeante, chaque point fut une guerre d'usure.\n\nSur la balle de match, le jeune numéro un mondial a réalisé une glissade acrobatique pour catapulter un coup droit le long de la ligne, soulevant la clameur des tribunes.\n\nUne victoire de patron qui confirme son statut de maître incontesté de l'ocre pour les années à venir.`,
    author: "Julien Caron",
    authorInitials: "JC",
    date: "Il y a 3h",
    timestamp: Date.now() - 3 * 60 * 60 * 1000,
    likes: 412,
    isLiked: false,
    isBookmarked: false,
    comments: [
      { author: "ClayKing", text: "Ce point à 5-4 dans le 5ème set était juste venu d'une autre planète !" }
    ]
  },
  {
    id: "art-5",
    title: "UFC Championship : KO foudroyant au 3ème round et consécration dans l'Octogone",
    category: "mma",
    categoryLabel: "Combat / MMA",
    tag: "UFC Main Event",
    image: "assets/images/mma.jpg",
    excerpt: "Un crochet du gauche dévastateur met un terme au combat le plus violent et technique de l'année devant une arène en ébullition.",
    content: `Deux guerriers d'élite face à face dans la cage. Après deux reprises éprouvantes rythmées par des échanges en clinch et du striking d'une précision chirurgicale, l'issue s'est dessinée sur une feinte d'école.\n\nUn changement de niveau, une feinte de takedown et un crochet dévastateur ont terrassé l'adversaire avant même qu'il ne touche le sol.\n\nLa ceinture mondiale change de mains dans un vacarme assourdissant.`,
    author: "Alexandre Diaz",
    authorInitials: "AD",
    date: "Il y a 4h",
    timestamp: Date.now() - 4 * 60 * 60 * 1000,
    likes: 620,
    isLiked: false,
    isBookmarked: false,
    comments: [
      { author: "MMA_addict", text: "Le timing du contre était parfait. Nouvelle légende dans la catégorie !" }
    ]
  },
  {
    id: "art-6",
    title: "100m Olympique : Départ supersonique et nouveau record du monde battu",
    category: "athletisme",
    categoryLabel: "Athlétisme",
    tag: "Record du Monde",
    image: "assets/images/athletics.jpg",
    excerpt: "Jaillissant des starting-blocks avec une explosion musculaire sans égale, le sprinteur efface la marque planétaire en 9 secondes et 56 centièmes.",
    content: `Le stade olympique a retenu son souffle pendant moins de dix secondes magiques. Un coup de pistolet, une impulsion titanesque et une accélération phénoménale aux 60 mètres.\n\nEn franchissant la ligne d'arrivée avec deux mètres d'avance, le chronomètre officiel a affiché l'impossible : un nouveau record du monde est né.\n\n« J'ai travaillé toute ma vie pour cet instant précis. Merci au public pour cette vague d'adrénaline », déclarait le champion en larmes drapeaux sur les épaules.`,
    author: "Camille Vasseur",
    authorInitials: "CV",
    date: "Il y a 6h",
    timestamp: Date.now() - 6 * 60 * 60 * 1000,
    likes: 789,
    isLiked: false,
    isBookmarked: false,
    comments: [
      { author: "FastTrack", text: "9.56s ! Je n'arrive toujours pas à y croire. Une machine humaine !" }
    ]
  }
];

// Realistic breaking news flash queue for automated / simulated updates
const BREAKING_NEWS_SIMULATION = [
  {
    title: "MERCATO FLASH : Accord total trouvé à 120M€ pour le jeune attaquant prodige !",
    category: "football",
    categoryLabel: "Football",
    tag: "Transfert Officiel",
    image: "assets/images/football.jpg",
    excerpt: "Visite médicale programmée ce soir et signature d'un contrat de 5 ans pour l'un des plus gros transferts de l'histoire du football européen.",
    content: "Le feuilleton de l'été touche à sa fin. Les deux clubs ont validé les clauses finales comprenant un montant fixe de 100M€ plus 20M€ de bonus faciles à atteindre. Le joueur passera sa visite médicale dans les prochaines heures.",
    author: "Fabrice Romano",
    authorInitials: "FR"
  },
  {
    title: "F1 : Incident dans la voie des stands, pénalité de 10 secondes pour le leader !",
    category: "f1",
    categoryLabel: "Formule 1",
    tag: "Flash Info F1",
    image: "assets/images/formula1.jpg",
    excerpt: "Relâchement dangereux lors du changement de gommes : la direction de course vient d'annoncer une pénalité qui redistribue toutes les cartes pour le podium.",
    content: "Coup de théâtre lors de l'arrêt au stand au 34e tour ! La roue avant gauche mal fixée a failli créer un accrochage majeur. Les commissaires de la FIA ont statué dans l'instant : 10 secondes de stop-and-go.",
    author: "Elena Rostova",
    authorInitials: "ER"
  },
  {
    title: "NBA : 60 points et tir de la victoire du milieu du terrain pour les Warriors !",
    category: "basketball",
    categoryLabel: "Basketball",
    tag: "Exploit NBA",
    image: "assets/images/basketball.jpg",
    excerpt: "Un shoot venu d'ailleurs à 0.8 seconde du terme offre la victoire dans un match qui rentre directement dans l'histoire de la ligue nord-américaine.",
    content: "Personne ne croyait le tir possible. Pris à deux défenseurs sur la ligne médiane, le meneur a déclenché une prière à une main qui est rentrée avec la planche. L'arène entière a explosé de joie.",
    author: "Thomas Miller",
    authorInitials: "TM"
  },
  {
    title: "Roland Garros : Balle de match sauvée après 5 heures de combat héroïque !",
    category: "tennis",
    categoryLabel: "Tennis",
    tag: "Flash Roland-Garros",
    image: "assets/images/tennis.jpg",
    excerpt: "Un lob rétro millimétré sur la ligne sauve le numéro 1 mondial à 6-5 dans le tie-break décisif.",
    content: "Le public s'est levé d'un seul bloc. Dos au mur face au tenant du titre, le coup de génie a retourné la situation psychologique pour conclure sur un ace dévastateur à 218 km/h.",
    author: "Julien Caron",
    authorInitials: "JC"
  }
];

// State Management
let articles = [];
let currentCategory = "all";
let searchQuery = "";
let currentSort = "recent";
let isLiveModeActive = true;
let liveIntervalId = null;
let simulationIndex = 0;

// Initialize App
function initApp() {
  loadArticles();
  setupEventListeners();
  updateCategoryCounts();
  renderArticles();
  renderTicker();
  startLiveFeedTimer();
}

// Load articles from localStorage or fallback
function loadArticles() {
  const saved = localStorage.getItem("sportvibe_articles");
  if (saved) {
    try {
      articles = JSON.parse(saved);
    } catch (e) {
      articles = [...INITIAL_ARTICLES];
    }
  } else {
    articles = [...INITIAL_ARTICLES];
    saveArticles();
  }
}

function saveArticles() {
  localStorage.setItem("sportvibe_articles", JSON.stringify(articles));
}

// Render dynamic Flash Info Ticker
function renderTicker() {
  const tickerContainer = document.getElementById("tickerItems");
  if (!tickerContainer) return;

  const topNews = articles.slice(0, 8);
  tickerContainer.innerHTML = topNews.map(item => `
    <span class="ticker-item" onclick="openReaderModal('${item.id}')">
      <strong>[${item.categoryLabel.toUpperCase()}]</strong> ${item.title}
      <span class="ticker-sep">●</span>
    </span>
  `).join("");
}

// Update badges counts in category tab list
function updateCategoryCounts() {
  const categories = ["all", "football", "basketball", "f1", "tennis", "mma", "athletisme", "bookmarks"];
  categories.forEach(cat => {
    const badge = document.getElementById(`count-${cat}`);
    if (badge) {
      if (cat === "all") {
        badge.textContent = articles.length;
      } else if (cat === "bookmarks") {
        badge.textContent = articles.filter(a => a.isBookmarked).length;
      } else {
        badge.textContent = articles.filter(a => a.category === cat).length;
      }
    }
  });
}

// Filter and Sort Articles
function getFilteredArticles() {
  let list = [...articles];

  // Category filter
  if (currentCategory === "bookmarks") {
    list = list.filter(a => a.isBookmarked);
  } else if (currentCategory !== "all") {
    list = list.filter(a => a.category === currentCategory);
  }

  // Search filter
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tag.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q)
    );
  }

  // Sort
  if (currentSort === "recent") {
    list.sort((a, b) => b.timestamp - a.timestamp);
  } else if (currentSort === "popular") {
    list.sort((a, b) => b.likes - a.likes);
  } else if (currentSort === "comments") {
    list.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
  }

  return list;
}

// Render articles grid
function renderArticles() {
  const grid = document.getElementById("articlesGrid");
  if (!grid) return;

  const filtered = getFilteredArticles();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-feed">
        <div class="empty-feed-icon">⚡</div>
        <h3>Aucune actualité trouvée</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">Essayez de modifier votre recherche ou publiez le tout premier flash dans cette catégorie !</p>
        <button class="btn btn-primary" onclick="openPublishModal()" style="margin-top: 20px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Publier un flash sportif
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(article => `
    <article class="article-card ${article.isNew ? 'newly-published' : ''}" id="card-${article.id}">
      <div class="card-media" onclick="openReaderModal('${article.id}')">
        <img src="${article.image}" alt="${article.title}" loading="lazy" onerror="this.src='assets/images/football.jpg'">
        <div class="card-badge-floating">
          <span class="tag-badge ${article.category}">
            ${article.tag || article.categoryLabel}
          </span>
        </div>
        <button class="card-bookmark-btn ${article.isBookmarked ? 'active' : ''}" 
                title="${article.isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}" 
                onclick="event.stopPropagation(); toggleBookmark('${article.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${article.isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      <div class="card-body">
        <div class="article-meta" style="margin-bottom: 10px;">
          <span class="meta-author">
            <span class="author-avatar">${article.authorInitials || 'SV'}</span>
            ${article.author}
          </span>
          <span class="meta-dot">●</span>
          <span>${article.date}</span>
        </div>

        <h3 class="card-title" onclick="openReaderModal('${article.id}')">${article.title}</h3>
        <p class="card-excerpt">${article.excerpt}</p>

        <div class="card-footer">
          <div class="card-actions">
            <button class="action-btn ${article.isLiked ? 'liked' : ''}" onclick="toggleLike('${article.id}')" title="Aimer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${article.isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>${article.likes}</span>
            </button>

            <button class="action-btn" onclick="openReaderModal('${article.id}')" title="Commentaires">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>${article.comments ? article.comments.length : 0}</span>
            </button>

            <button class="action-btn" onclick="shareArticle('${article.id}')" title="Partager">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>

          <span class="read-more-btn" onclick="openReaderModal('${article.id}')">
            Lire l'article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </span>
        </div>
      </div>
    </article>
  `).join("");
}

// Like functionality
function toggleLike(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  if (article.isLiked) {
    article.likes = Math.max(0, article.likes - 1);
    article.isLiked = false;
  } else {
    article.likes += 1;
    article.isLiked = true;
    playChime(660);
  }

  saveArticles();
  renderArticles();
}

// Bookmark functionality
function toggleBookmark(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  article.isBookmarked = !article.isBookmarked;
  saveArticles();
  updateCategoryCounts();
  renderArticles();

  showToast(
    article.isBookmarked ? "Enregistré dans vos favoris" : "Retiré de vos favoris",
    article.title,
    false
  );
}

// Share functionality
function shareArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#article-${id}`);
  }
  showToast("Lien copié dans le presse-papier !", article.title, false);
}

// Modal Publishing Controls
function openPublishModal() {
  const modal = document.getElementById("publishModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closePublishModal() {
  const modal = document.getElementById("publishModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Preset Image Picker in Publish Form
function selectPresetImage(element, imagePath) {
  document.querySelectorAll(".preset-img-option").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
  const input = document.getElementById("pubImageInput");
  if (input) input.value = imagePath;
}

// Publish New Article Form Handler
function handlePublishSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("pubTitle").value.trim();
  const category = document.getElementById("pubCategory").value;
  const tag = document.getElementById("pubTag").value.trim() || "Flash Info";
  let image = document.getElementById("pubImageInput").value.trim();
  const excerpt = document.getElementById("pubExcerpt").value.trim();
  const content = document.getElementById("pubContent").value.trim();
  const author = document.getElementById("pubAuthor").value.trim() || "Rédaction SportVibe";

  if (!title || !excerpt || !content) {
    alert("Veuillez remplir tous les champs obligatoires (Titre, Résumé, Contenu complet).");
    return;
  }

  // Fallback image if empty
  if (!image) {
    const categoryDefaultImgs = {
      football: "assets/images/football.jpg",
      basketball: "assets/images/basketball.jpg",
      f1: "assets/images/formula1.jpg",
      tennis: "assets/images/tennis.jpg",
      mma: "assets/images/mma.jpg",
      athletisme: "assets/images/athletics.jpg"
    };
    image = categoryDefaultImgs[category] || "assets/images/football.jpg";
  }

  // Category display label
  const categoryLabels = {
    football: "Football",
    basketball: "Basketball",
    f1: "Formule 1",
    tennis: "Tennis",
    mma: "Combat / MMA",
    athletisme: "Athlétisme"
  };

  // Generate Initials
  const initials = author.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2) || "SV";

  const newArticle = {
    id: "art-" + Date.now(),
    title: title,
    category: category,
    categoryLabel: categoryLabels[category] || "Sport",
    tag: tag,
    image: image,
    excerpt: excerpt,
    content: content,
    author: author,
    authorInitials: initials,
    date: "À l'instant",
    timestamp: Date.now(),
    likes: 1,
    isLiked: false,
    isBookmarked: false,
    isNew: true,
    comments: []
  };

  // Insert at top of newsfeed
  articles.unshift(newArticle);
  saveArticles();

  // Audio effect + Toast notification
  playChime(880);
  showToast("⚡ NOUVELLE ACTUALITÉ PUBLIÉE !", title, true);

  // Update UI
  updateCategoryCounts();
  renderArticles();
  renderTicker();
  closePublishModal();

  // Reset form
  document.getElementById("publishForm").reset();

  // Scroll to article smoothly
  const firstCard = document.querySelector(".article-card");
  if (firstCard) {
    firstCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Reader Modal
function openReaderModal(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  const readerModal = document.getElementById("readerModal");
  const readerContent = document.getElementById("readerContent");

  if (!readerModal || !readerContent) return;

  readerContent.innerHTML = `
    <div class="reader-hero">
      <img src="${article.image}" alt="${article.title}">
      <div class="reader-hero-overlay"></div>
    </div>
    <div class="reader-body">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
        <span class="tag-badge ${article.category}">
          ${article.tag || article.categoryLabel}
        </span>
        <div class="article-meta">
          <span class="meta-author">
            <span class="author-avatar">${article.authorInitials || 'SV'}</span>
            ${article.author}
          </span>
          <span class="meta-dot">●</span>
          <span>${article.date}</span>
        </div>
      </div>

      <h1 class="reader-title">${article.title}</h1>
      
      <div class="reader-text">
        ${article.content.replace(/\n\n/g, '<br><br>')}
      </div>

      <!-- Action Row in Reader -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 18px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); margin-top: 24px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <button class="btn btn-outline ${article.isLiked ? 'liked' : ''}" onclick="toggleLike('${article.id}'); openReaderModal('${article.id}');">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${article.isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            ${article.likes} J'aime
          </button>
          <button class="btn btn-outline" onclick="shareArticle('${article.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            Partager
          </button>
        </div>
        <button class="btn btn-outline ${article.isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${article.id}'); openReaderModal('${article.id}');">
          ${article.isBookmarked ? '★ Dans vos favoris' : '☆ Sauvegarder'}
        </button>
      </div>

      <!-- Comments Section -->
      <div class="reader-comments-section">
        <h3 style="font-family: var(--font-headline); font-size: 1.15rem; color: #fff;">
          Commentaires (${article.comments ? article.comments.length : 0})
        </h3>
        
        <form onsubmit="handleAddComment(event, '${article.id}')" style="margin-top: 14px; display: flex; gap: 10px;">
          <input type="text" id="commentInput-${article.id}" class="form-input" placeholder="Ajoutez votre réaction ou analyse sportive..." required style="flex: 1;">
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>

        <div class="comments-list">
          ${(article.comments && article.comments.length > 0) ? article.comments.map(c => `
            <div class="comment-card">
              <div class="comment-author">${c.author}</div>
              <div class="comment-text">${c.text}</div>
            </div>
          `).join("") : '<p style="color: var(--text-dim); font-size: 0.85rem; padding: 10px 0;">Soyez le premier à commenter cette actualité !</p>'}
        </div>
      </div>
    </div>
  `;

  readerModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeReaderModal() {
  const modal = document.getElementById("readerModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Add comment to article
function handleAddComment(e, articleId) {
  e.preventDefault();
  const input = document.getElementById(`commentInput-${articleId}`);
  if (!input || !input.value.trim()) return;

  const article = articles.find(a => a.id === articleId);
  if (!article) return;

  if (!article.comments) article.comments = [];
  article.comments.unshift({
    author: "Supporter Anonyme",
    text: input.value.trim()
  });

  saveArticles();
  openReaderModal(articleId);
  renderArticles();
  showToast("Commentaire publié !", "Merci pour votre participation aux débats.", false);
}

// Toast System
function showToast(title, message, isUrgent = false) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${isUrgent ? 'urgent' : ''}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${isUrgent ? '⚡' : '✓'}
    </div>
    <div class="toast-content">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Sound Synthesis for live alert
function playChime(freq = 660) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// Trigger simulated breaking news
function triggerSimulatedFlash() {
  const item = BREAKING_NEWS_SIMULATION[simulationIndex % BREAKING_NEWS_SIMULATION.length];
  simulationIndex++;

  const newFlash = {
    id: "art-sim-" + Date.now(),
    title: item.title,
    category: item.category,
    categoryLabel: item.categoryLabel,
    tag: item.tag,
    image: item.image,
    excerpt: item.excerpt,
    content: item.content,
    author: item.author,
    authorInitials: item.authorInitials,
    date: "À l'instant",
    timestamp: Date.now(),
    likes: Math.floor(Math.random() * 40) + 12,
    isLiked: false,
    isBookmarked: false,
    isNew: true,
    comments: []
  };

  articles.unshift(newFlash);
  saveArticles();

  playChime(950);
  showToast("🔴 FLASH INFO EN DIRECT !", newFlash.title, true);

  updateCategoryCounts();
  renderArticles();
  renderTicker();
}

// Live Feed Timer
function startLiveFeedTimer() {
  if (liveIntervalId) clearInterval(liveIntervalId);
  if (!isLiveModeActive) return;

  // Auto trigger breaking news every 45s if mode active
  liveIntervalId = setInterval(() => {
    if (isLiveModeActive) {
      triggerSimulatedFlash();
    }
  }, 45000);
}

function toggleLiveMode() {
  isLiveModeActive = !isLiveModeActive;
  const toggleBtn = document.getElementById("liveModeToggle");
  if (toggleBtn) {
    if (isLiveModeActive) {
      toggleBtn.classList.add("active");
      toggleBtn.innerHTML = `
        <span class="live-pulse"></span>
        Direct Actif (Auto)
      `;
      startLiveFeedTimer();
      showToast("Mode Direct activé", "Les alertes sportives s'afficheront en temps réel.", false);
    } else {
      toggleBtn.classList.remove("active");
      toggleBtn.innerHTML = `
        <span style="width: 8px; height: 8px; background: #64748b; border-radius: 50%; display: inline-block;"></span>
        Direct en pause
      `;
      if (liveIntervalId) clearInterval(liveIntervalId);
      showToast("Mode Direct en pause", "Mises à jour automatiques désactivées.", false);
    }
  }
}

// Newsletter Subscription handler
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input || !input.value.trim()) return;

  showToast("Inscription validée !", `Vous recevrez les alertes sportives sur ${input.value}.`, false);
  input.value = "";
}

// Setup Event Listeners
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderArticles();
    });
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderArticles();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderArticles();
    });
  }

  // Publish Form
  const publishForm = document.getElementById("publishForm");
  if (publishForm) {
    publishForm.addEventListener("submit", handlePublishSubmit);
  }

  // Close modals on outside click
  window.addEventListener("click", (e) => {
    const pubModal = document.getElementById("publishModal");
    const readerModal = document.getElementById("readerModal");

    if (e.target === pubModal) closePublishModal();
    if (e.target === readerModal) closeReaderModal();
  });

  // Close modal on Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePublishModal();
      closeReaderModal();
    }
  });
}

// Run on DOM load
document.addEventListener("DOMContentLoaded", initApp);
