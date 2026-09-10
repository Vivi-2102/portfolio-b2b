// ===================================================
// TESTIMONIALS - API FETCH & CENTERED CAROUSEL
// ===================================================

const avatarImages = [
'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
];

// ===================================================
// FUNÇÃO PRINCIPAL
// ===================================================

export async function initTestimonials() {
const cardsContainer = document.getElementById('testimonials-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (!cardsContainer) {
    return;
}

await loadTestimonials(cardsContainer);

if (prevBtn) {
    prevBtn.addEventListener('click', function () {
        scrollPreviousCard(cardsContainer);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        scrollNextCard(cardsContainer);
    });
}

}

// ===================================================
// BUSCAR DEPOIMENTOS NA API
// ===================================================

async function loadTestimonials(cardsContainer) {
try {
const response = await fetch(
'https://jsonplaceholder.typicode.com/users'
);

    if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
    }

    const users = await response.json();
    const firstFiveUsers = users.slice(0, 5);

    cardsContainer.innerHTML = '';

    firstFiveUsers.forEach(function (user, index) {
        cardsContainer.insertAdjacentHTML(
            'beforeend',
            createCardHTML(user, index)
        );
    });

    initCarouselFocus(cardsContainer);

} catch (error) {
    console.error(
        'Erro na seção de depoimentos:',
        error
    );

    cardsContainer.innerHTML = `
        <p class="testimonials-error">
            Não foi possível carregar os depoimentos.
        </p>
    `;
}

}

// ===================================================
// CRIAR CARD
// ===================================================

function createCardHTML(user, index) {
const avatarUrl =
avatarImages[index] ||
'https://ui-avatars.com/api/?name=' +
encodeURIComponent(user.name);

return `
    <article class="testimonial-card">

        <div class="card-company">
            <span class="company-name">
                ${user.company.name}
            </span>
        </div>

        <p class="card-text">
            "${user.company.catchPhrase}. ${user.company.bs}."
        </p>

        <div class="card-author">

            <img
                src="${avatarUrl}"
                alt="Foto de ${user.name}"
                class="author-avatar"
                loading="lazy"
            >

            <div class="author-info">

                <h3 class="author-name">
                    ${user.name}
                </h3>

                <span class="author-role">
                    Co-founder / ${user.address.city}
                </span>

            </div>

        </div>

    </article>
`;

}

// ===================================================
// CARD ATIVO
// ===================================================

function updateActiveCard(cardsContainer) {
const cards =
cardsContainer.querySelectorAll('.testimonial-card');

if (!cards.length) {
    return;
}

const containerRect =
    cardsContainer.getBoundingClientRect();

const containerCenter =
    containerRect.left + containerRect.width / 2;

let closestCard = null;
let smallestDistance = Infinity;

cards.forEach(function (card) {
    const cardRect = card.getBoundingClientRect();

    const cardCenter =
        cardRect.left + cardRect.width / 2;

    const distance =
        Math.abs(containerCenter - cardCenter);

    if (distance < smallestDistance) {
        smallestDistance = distance;
        closestCard = card;
    }
});

cards.forEach(function (card) {
    card.classList.remove('active');
});

if (closestCard) {
    closestCard.classList.add('active');
}

}

// ===================================================
// CENTRALIZAR CARD
// ===================================================

function centerCard(cardsContainer, card) {
if (!card) {
return;
}

const containerCenter =
    cardsContainer.clientWidth / 2;

const cardCenter =
    card.offsetLeft + card.offsetWidth / 2;

const scrollPosition =
    cardCenter - containerCenter;

cardsContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
});

}

// ===================================================
// PRÓXIMO CARD
// ===================================================

function scrollNextCard(cardsContainer) {
const cards =
cardsContainer.querySelectorAll('.testimonial-card');

if (!cards.length) {
    return;
}

const activeCard =
    cardsContainer.querySelector('.testimonial-card.active');

let currentIndex = 0;

if (activeCard) {
    currentIndex =
        Array.from(cards).indexOf(activeCard);
}

const nextIndex =
    Math.min(
        currentIndex + 1,
        cards.length - 1
    );

centerCard(
    cardsContainer,
    cards[nextIndex]
);

}

// ===================================================
// CARD ANTERIOR
// ===================================================

function scrollPreviousCard(cardsContainer) {
const cards =
cardsContainer.querySelectorAll('.testimonial-card');

if (!cards.length) {
    return;
}

const activeCard =
    cardsContainer.querySelector('.testimonial-card.active');

let currentIndex = 0;

if (activeCard) {
    currentIndex =
        Array.from(cards).indexOf(activeCard);
}

const previousIndex =
    Math.max(currentIndex - 1, 0);

centerCard(
    cardsContainer,
    cards[previousIndex]
);

}

// ===================================================
// INICIALIZAR CARROSSEL
// ===================================================

function initCarouselFocus(cardsContainer) {
const cards =
cardsContainer.querySelectorAll('.testimonial-card');

if (!cards.length) {
    return;
}

let initialIndex = 0;

if (cards.length >= 3) {
    initialIndex = 2;
}

centerCard(
    cardsContainer,
    cards[initialIndex]
);

updateActiveCard(cardsContainer);

cardsContainer.addEventListener(
    'scroll',
    function () {
        updateActiveCard(cardsContainer);
    },
    {
        passive: true
    }
);

}