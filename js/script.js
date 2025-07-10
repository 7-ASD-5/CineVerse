document.addEventListener('DOMContentLoaded', function() {
    // Datos de películas (simulando una base de datos)
    const movies = [
        {
            id: 1,
            title: "Lilo & Stitch",
            image: "img/001.jpg",
            year: 2023,
            rating: 4.5,
            genre: "Animación",
            duration: "1h 45m",
            director: "Chris Sanders",
            cast: "Daveigh Chase, Chris Sanders, Tia Carrere",
            synopsis: "La historia de una niña hawaiana y su extraño pero adorable amigo alienígena que se parece a un perro.",
            link: "pelis/liloystitch.html",
            trending: true,
            top: false,
            upcoming: false
        },
        {
            id: 2,
            title: "M3gan 2.0",
            image: "img/002.jpg",
            year: 2024,
            rating: 3.8,
            genre: "Terror",
            duration: "1h 52m",
            director: "Gerard Johnstone",
            cast: "Allison Williams, Violet McGraw, Amie Donald",
            synopsis: "La secuela de la exitosa película de terror sobre una muñeca robot con inteligencia artificial que se vuelve violenta.",
            link: "pelis/megan.html",
            trending: true,
            top: true,
            upcoming: false
        },
        {
            id: 3,
            title: "F1: La película",
            image: "img/003.jpg",
            year: 2024,
            rating: 4.2,
            genre: "Acción",
            duration: "2h 15m",
            director: "Joseph Kosinski",
            cast: "Brad Pitt, Damson Idris, Javier Bardem",
            synopsis: "Una emocionante película sobre el mundo de la Fórmula 1, llena de acción y drama.",
            link: "pelis/formula.html",
            trending: true,
            top: true,
            upcoming: false
        },
        {
            id: 4,
            title: "Cómo entrenar a tu dragón",
            image: "img/004.jpg",
            year: 2025,
            rating: 4.7,
            genre: "Animación",
            duration: "1h 38m",
            director: "Dean DeBlois",
            cast: "Jay Baruchel, Gerard Butler, America Ferrera",
            synopsis: "Nueva entrega de la popular saga sobre vikingos y dragones.",
            link: "pelis/dragon.html",
            trending: true,
            top: false,
            upcoming: true
        },
        {
            id: 5,
            title: "Destino Final",
            image: "img/0005.jpg",
            year: 2023,
            rating: 3.5,
            genre: "Terror",
            duration: "1h 48m",
            director: "Jeffrey Reddick",
            cast: "Devon Sawa, Ali Larter, Kerr Smith",
            synopsis: "Un grupo de adolescentes escapa milagrosamente de un accidente, pero la muerte viene a cobrar su deuda.",
            link: "pelis/destinofinal.html",
            trending: true,
            top: false,
            upcoming: false
        },
        {
            id: 6,
            title: "Misión Imposible",
            image: "img/0006.jpg",
            year: 2024,
            rating: 4.8,
            genre: "Acción",
            duration: "2h 28m",
            director: "Christopher McQuarrie",
            cast: "Tom Cruise, Hayley Atwell, Simon Pegg",
            synopsis: "Ethan Hunt y su equipo enfrentan su misión más peligrosa hasta ahora.",
            link: "pelis/mision.html",
            trending: true,
            top: true,
            upcoming: false
        },
        {
            id: 7,
            title: "Exterminio",
            image: "img/007.jpg",
            year: 2025,
            rating: 4.1,
            genre: "Terror",
            duration: "1h 56m",
            director: "Alex Garland",
            cast: "Natalie Portman, Oscar Isaac, Jennifer Jason Leigh",
            synopsis: "Un grupo de científicas se adentra en una zona misteriosa donde las leyes de la naturaleza no aplican.",
            link: "pelis/exterminio.html",
            trending: true,
            top: false,
            upcoming: true
        },
        {
            id: 8,
            title: "Jurassic World",
            image: "img/008.jpg",
            year: 2025,
            rating: 4.3,
            genre: "Terror",
            duration: "1h 50m",
            director: "Parker Finn",
            cast: "Sosie Bacon, Kyle Gallner, Jessie T. Usher",
            synopsis: "Secuela del exitoso thriller psicológico sobre una maldición que se transmite a través de sonrisas.",
            link: "pelis/jurassic.html",
            trending: true,
            top: false,
            upcoming: true
        },
        {
            id: 9,
            title: "Flow, un mundo que salvar",
            image: "img/flow-min.jpg",
            year: 2024,
            rating: 4.6,
            genre: "Drama",
            duration: "2h 05m",
            director: "Darren Aronofsky",
            cast: "Joaquin Phoenix, Jennifer Lawrence, Michelle Pfeiffer",
            synopsis: "Un drama ambiental sobre la lucha por salvar el planeta de la contaminación.",
            link: "pelis/flow.html",
            trending: false,
            top: true,
            upcoming: false
        },
        {
            id: 10,
            title: "The Brutalist",
            image: "img/brutalist-min.jpg",
            year: 2023,
            rating: 4.0,
            genre: "Drama",
            duration: "1h 58m",
            director: "Brady Corbet",
            cast: "Joel Edgerton, Marion Cotillard, Sebastian Stan",
            synopsis: "Historia de un arquitecto que emigra a Estados Unidos después de la Segunda Guerra Mundial.",
            link: "pelis/brutalist.html",
            trending: false,
            top: true,
            upcoming: false
        },
        {
            id: 11,
            title: "La semilla de la higuera sagrada",
            image: "img/semilladelahiguera-min.jpg",
            year: 2024,
            rating: 4.4,
            genre: "Drama",
            duration: "2h 12m",
            director: "Pablo Larraín",
            cast: "Natalie Portman, Julianne Moore, Charles Melton",
            synopsis: "Drama histórico sobre una figura controvertida de la política estadounidense.",
            link: "pelis/lasemilla.html",
            trending: false,
            top: true,
            upcoming: false
        },
        {
            id: 12,
            title: "A Real Pain",
            image: "img/a_real_pain-min.jpg",
            year: 2024,
            rating: 4.2,
            genre: "Drama",
            duration: "1h 45m",
            director: "Jesse Eisenberg",
            cast: "Jesse Eisenberg, Kieran Culkin, Jennifer Grey",
            synopsis: "Dos primos viajan a Polonia para honrar a su abuela y terminan en un viaje de autodescubrimiento.",
            link: "pelis/realdolor.html",
            trending: false,
            top: true,
            upcoming: false
        }
    ];

    // Elementos del DOM
    const filterBtn = document.getElementById('filterBtn');
    const closeFilter = document.getElementById('closeFilter');
    const filterSidebar = document.getElementById('filterSidebar');
    const applyFilters = document.getElementById('applyFilters');
    const resetFilters = document.getElementById('resetFilters');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const loadMoreBtn = document.getElementById('loadMore');
    const trendingMoviesContainer = document.getElementById('trendingMovies');
    const topMoviesContainer = document.getElementById('topMovies');
    const upcomingMoviesContainer = document.getElementById('upcomingMovies');
    const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
    const movieModalTitle = document.getElementById('movieModalTitle');
    const movieModalImage = document.getElementById('movieModalImage');
    const movieModalRating = document.getElementById('movieModalRating');
    const movieModalYear = document.getElementById('movieModalYear');
    const movieModalSynopsis = document.getElementById('movieModalSynopsis');
    const movieModalGenre = document.getElementById('movieModalGenre');
    const movieModalDuration = document.getElementById('movieModalDuration');
    const movieModalDirector = document.getElementById('movieModalDirector');
    const movieModalCast = document.getElementById('movieModalCast');
    const movieModalLink = document.getElementById('movieModalLink');

    // Variables de estado
    let visibleMovies = 8;
    let currentFilters = {
        genres: [],
        year: 'all',
        rating: 'all'
    };
    let currentSort = 'popular';

    // Inicializar la página
    function init() {
        renderMovies();
        setupEventListeners();
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Filtros
        filterBtn.addEventListener('click', toggleFilterSidebar);
        closeFilter.addEventListener('click', toggleFilterSidebar);
        applyFilters.addEventListener('click', applyFiltersHandler);
        resetFilters.addEventListener('click', resetFiltersHandler);

        // Búsqueda
        searchInput.addEventListener('input', debounce(searchMovies, 300));

        // Ordenar
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderMovies();
        });

        // Cargar más
        loadMoreBtn.addEventListener('click', () => {
            visibleMovies += 8;
            renderMovies();
        });

        // Quick view
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-view')) {
                const movieId = parseInt(e.target.dataset.movieId);
                showMovieModal(movieId);
            }
        });
    }

    // Mostrar/ocultar sidebar de filtros
    function toggleFilterSidebar() {
        filterSidebar.classList.toggle('show');
    }

    // Aplicar filtros
    function applyFiltersHandler() {
        const genreCheckboxes = document.querySelectorAll('.genre-filter:checked');
        currentFilters.genres = Array.from(genreCheckboxes).map(cb => cb.value);
        currentFilters.year = document.getElementById('yearFilter').value;
        currentFilters.rating = document.querySelector('input[name="ratingFilter"]:checked').value;
        
        renderMovies();
        toggleFilterSidebar();
    }

    // Restablecer filtros
    function resetFiltersHandler() {
        document.querySelectorAll('.genre-filter').forEach(cb => cb.checked = false);
        document.getElementById('yearFilter').value = 'all';
        document.getElementById('ratingAll').checked = true;
        
        currentFilters = {
            genres: [],
            year: 'all',
            rating: 'all'
        };
        
        renderMovies();
    }

    // Buscar películas
    function searchMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        renderMovies(searchTerm);
    }

    // Función debounce para la búsqueda
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    // Ordenar películas
    function sortMovies(moviesToSort) {
        switch(currentSort) {
            case 'recent':
                return [...moviesToSort].sort((a, b) => b.year - a.year);
            case 'rating':
                return [...moviesToSort].sort((a, b) => b.rating - a.rating);
            case 'alpha':
                return [...moviesToSort].sort((a, b) => a.title.localeCompare(b.title));
            case 'popular':
            default:
                return [...moviesToSort].sort((a, b) => {
                    // Ordenar por trending, luego top, luego rating
                    if (a.trending !== b.trending) return b.trending - a.trending;
                    if (a.top !== b.top) return b.top - a.top;
                    return b.rating - a.rating;
                });
        }
    }

    // Filtrar películas
    function filterMovies(searchTerm = '') {
        return movies.filter(movie => {
            // Filtro de búsqueda
            if (searchTerm && !movie.title.toLowerCase().includes(searchTerm)) {
                return false;
            }
            
            // Filtro de géneros
            if (currentFilters.genres.length > 0 && !currentFilters.genres.some(genre => 
                movie.genre.toLowerCase().includes(genre))) {
                return false;
            }
            
            // Filtro de año
            if (currentFilters.year !== 'all' && movie.year !== parseInt(currentFilters.year)) {
                return false;
            }
            
            // Filtro de rating
            if (currentFilters.rating !== 'all' && movie.rating < parseInt(currentFilters.rating)) {
                return false;
            }

            return true;
        });
    }

    // Renderizar películas en sus respectivas secciones
    function renderMovies(searchTerm = '') {
        const filteredMovies = sortMovies(filterMovies(searchTerm));
        const visible = filteredMovies.slice(0, visibleMovies);

        // Limpiar contenedores
        trendingMoviesContainer.innerHTML = '';
        topMoviesContainer.innerHTML = '';
        upcomingMoviesContainer.innerHTML = '';

        visible.forEach(movie => {
            const movieCard = createMovieCard(movie);
            if (movie.trending) trendingMoviesContainer.appendChild(movieCard.cloneNode(true));
            if (movie.top) topMoviesContainer.appendChild(movieCard.cloneNode(true));
            if (movie.upcoming) upcomingMoviesContainer.appendChild(movieCard.cloneNode(true));
        });

        // Ocultar botón si ya se mostraron todas
        if (visible.length >= filteredMovies.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    // Crear tarjeta de película
    function createMovieCard(movie) {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="card h-100 shadow movie-card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text text-muted">${movie.genre} · ${movie.year}</p>
                    <div class="mb-2">
                        <i class="fas fa-star text-warning me-1"></i> ${movie.rating}
                    </div>
                    <div class="mt-auto">
                        <a href="${movie.link}" class="btn btn-sm btn-outline-primary w-100 mb-2">Ver más</a>
                        <button class="btn btn-sm btn-primary w-100 quick-view" data-movie-id="${movie.id}">Vista rápida</button>
                    </div>
                </div>
            </div>
        `;
        return col;
    }

    // Mostrar modal con detalles de película
    function showMovieModal(movieId) {
        const movie = movies.find(m => m.id === movieId);
        if (!movie) return;

        movieModalTitle.textContent = movie.title;
        movieModalImage.src = movie.image;
        movieModalRating.textContent = movie.rating;
        movieModalYear.textContent = movie.year;
        movieModalSynopsis.textContent = movie.synopsis;
        movieModalGenre.textContent = movie.genre;
        movieModalDuration.textContent = movie.duration;
        movieModalDirector.textContent = movie.director;
        movieModalCast.textContent = movie.cast;
        movieModalLink.href = movie.link;

        movieModal.show();
    }

    // Ejecutar inicialización
    init();
});


//criticas html

// Datos de las críticas
const criticas = [
    {
        id: 1,
        titulo: "'COMO ENTRENAR A TU DRAGÓN' Y LAS LECCIONES QUE DISNEY DEBE APRENDER Y APLICAR EN SUS PRÓXIMOS REMAKES LIVE-ACTION",
        imagen: "img/live-action.webp",
        resumen: "Disney ha intentando replicar la animación con mayor realismo, pero sin preguntarse por qué la historia conectó originalmente",
        autor: "Arturo Lopez",
        fecha: "21 junio, 2025",
        contenido: "<p>Los remakes live-action de Disney han sido un tema controvertido en los últimos años. Mientras algunos han sido éxitos comerciales, otros han dejado mucho que desear en términos de calidad y originalidad. 'Cómo entrenar a tu dragón' nos muestra el camino que Disney debería seguir: respetar el espíritu original mientras añade valor con nuevas perspectivas.</p><p>La clave está en entender qué hizo especial a la película original y cómo trasladar esa esencia a un formato diferente, no simplemente en replicar visualmente la animación con actores reales.</p>"
    },
    {
        id: 2,
        titulo: "¿POR QUÉ 'BAILARINA' NO HA SIDO UN ÉXITO DE TAQUILLA A PESAR DE QUE PERTENECE A LA FRANQUICIA DE 'JOHN WICK'?",
        imagen: "img/Ballerina-John-Wick.webp",
        resumen: "Con un presupuesto estimado de entre 80 y 90 millones de dólares, 'Bailarina' apenas logró recuperar su inversión en sus primeras semanas",
        autor: "Arturo Lopez",
        fecha: "21 junio, 2025",
        contenido: "<p>Aunque 'Bailarina' se desarrolla en el mismo universo que 'John Wick', parece haber fallado en capturar la magia que hizo exitosa a la franquicia principal. La película carece del estilo visual distintivo y la coreografía de peleas innovadora que caracterizaron a las películas de Keanu Reeves.</p><p>Además, el personaje principal no logra generar la misma conexión emocional con la audiencia, demostrando que no basta con pertenecer a un universo exitoso si no se tiene una historia convincente y personajes bien desarrollados.</p>"
    },
    {
        id: 3,
        titulo: "JAMES GUNN EXPLICA POR QUÉ TRAJO A JASON MAMOA COMO LOBO AL DCU: 'ES EL MAYOR PERSONAJE DE CÓMICS SIN UNA PELÍCULA'",
        imagen: "img/lobo-DCU.webp",
        resumen: "Jason Momoa no es ajeno al mundo de los antihéroes, y el personaje de Lobo parece encajar perfectamente con su perfil actoral",
        autor: "Arturo Lopez",
        fecha: "21 junio, 2025",
        contenido: "<p>James Gunn ha revelado sus planes para Lobo en el nuevo DCU, confirmando que Jason Momoa será quien dé vida al icónico cazarrecompensas intergaláctico. Según Gunn, 'Lobo es uno de los personajes más queridos de DC que nunca ha tenido su propia película, y Jason es el actor perfecto para traerlo a la vida'.</p><p>Momoa, quien anteriormente interpretó a Aquaman, parece estar emocionado por este nuevo desafío, prometiendo una interpretación fiel al cómic pero con su toque personal. Los fans ya especulan sobre posibles cameos en otras películas del DCU.</p>"
    },
    {
        id: 4,
        titulo: "'ELIO', LA NUEVA PELÍCULA DE PIXAR, SE CONVIERTE EN EL PEOR ESTRENO EN LA HISTORIA DEL ESTUDIO",
        imagen: "img/elio-critica.webp",
        resumen: "Malas noticias para Disney. La nueva película de Pixar, 'Elio', ya tiene el peor estreno en toda la historia del estudio",
        autor: "Sofia Torres",
        fecha: "22 junio, 2025",
        contenido: "<p>'Elio', la última producción de Pixar, ha marcado un récord negativo para el estudio de animación, convirtiéndose en su peor estreno de todos los tiempos. Con solo $18 millones recaudados en su primer fin de semana en Norteamérica, la película no ha logrado conectar con el público.</p><p>Los analistas señalan varios factores: una campaña de marketing poco efectiva, la falta de un concepto claro que atraiga a la audiencia, y la competencia de otras películas familiares en cartelera. Esto plantea serias preguntas sobre la dirección creativa de Pixar en los últimos años.</p>"
    }
];

// Función para renderizar las críticas
function renderCriticas(criticasToRender) {
    const container = document.getElementById('criticas-container');
    
    criticasToRender.forEach(critica => {
        const criticaElement = document.createElement('div');
        criticaElement.className = 'critica';
        criticaElement.innerHTML = `
            <div class="imagen">
                <a href="#" onclick="showCriticaModal(${critica.id})">
                    <img src="${critica.imagen}" alt="${critica.titulo}">
                </a>
            </div>
            <div class="contenido">
                <a href="#" onclick="showCriticaModal(${critica.id})">
                    <h2>${critica.titulo}</h2>
                </a>
                <p>${critica.resumen}</p>
                <p>Por <span>${critica.autor}</span> el ${critica.fecha}</p>
                <button class="btn btn-outline-primary mt-2" onclick="showCriticaModal(${critica.id})">Leer crítica completa</button>
            </div>
        `;
        container.appendChild(criticaElement);
    });
}

// Función para mostrar el modal con la crítica completa
function showCriticaModal(id) {
    const critica = criticas.find(c => c.id === id);
    
    const modalHTML = `
        <div class="modal fade" id="criticaModal" tabindex="-1" aria-labelledby="criticaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="criticaModalLabel">${critica.titulo}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${critica.imagen}" alt="${critica.titulo}" class="img-fluid mb-3">
                        <p><strong>Por ${critica.autor} - ${critica.fecha}</strong></p>
                        <div>${critica.contenido}</div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="shareCritica(${critica.id})">
                            <i class="fas fa-share-alt"></i> Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Crear e insertar el modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('criticaModal'));
    modal.show();
    
    // Eliminar el modal cuando se cierre
    document.getElementById('criticaModal').addEventListener('hidden.bs.modal', function() {
        modalContainer.remove();
    });
}

// Función para compartir crítica
function shareCritica(id) {
    const critica = criticas.find(c => c.id === id);
    const shareText = `Lee esta crítica en CineVerse: "${critica.titulo}"`;
    
    if (navigator.share) {
        navigator.share({
            title: critica.titulo,
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('Error al compartir:', err);
            copyToClipboard(shareText + ' ' + window.location.href);
        });
    } else {
        copyToClipboard(shareText + ' ' + window.location.href);
    }
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Enlace copiado al portapapeles!');
    }).catch(err => {
        console.log('Error al copiar:', err);
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('¡Enlace copiado al portapapeles!');
    });
}

// Función para cargar más críticas
let currentIndex = 0;
const batchSize = 2;

function loadMoreCriticas() {
    const nextBatch = criticas.slice(currentIndex, currentIndex + batchSize);
    renderCriticas(nextBatch);
    currentIndex += batchSize;
    
    if (currentIndex >= criticas.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

// Event listeners
document.getElementById('load-more').addEventListener('click', loadMoreCriticas);

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    loadMoreCriticas();
    
    // Agregar funcionalidad de búsqueda
    const searchForm = document.querySelector('form.d-flex');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input').value.toLowerCase();
            const filteredCriticas = criticas.filter(critica => 
                critica.titulo.toLowerCase().includes(searchTerm) || 
                critica.resumen.toLowerCase().includes(searchTerm) ||
                critica.autor.toLowerCase().includes(searchTerm)
            );
            
            document.getElementById('criticas-container').innerHTML = '';
            renderCriticas(filteredCriticas);
            document.getElementById('load-more').style.display = 'none';
        });
    }
});

// contacto 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    // Funciones de validación
    function isEmailValid(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isPhoneValid(phone) {
        const re = /^[0-9]{9}$/;
        return re.test(phone);
    }
    
    function validateField(fieldId, validationFn, errorMessage) {
        const field = document.getElementById(fieldId);
        const isValid = validationFn(field.value);
        
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            
            const feedback = field.nextElementSibling;
            if (feedback && feedback.classList.contains('invalid-feedback')) {
                feedback.textContent = errorMessage;
            }
        }
        
        return isValid;
    }
    
    // Evento de submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Validar campos
        validateField('nombre', value => value.trim() !== '', 'Por favor ingresa tu nombre completo');
        validateField('email', isEmailValid, 'Por favor ingresa un correo electrónico válido');
        validateField('telefono', value => value === '' || isPhoneValid(value), 'Por favor ingresa un número de teléfono válido (9 dígitos)');
        validateField('asunto', value => value !== '', 'Por favor selecciona un asunto');
        validateField('mensaje', value => value.trim() !== '', 'Por favor escribe tu mensaje');
        
        const privacyCheck = document.getElementById('privacidad');
        if (!privacyCheck.checked) {
            privacyCheck.classList.add('is-invalid');
        } else {
            privacyCheck.classList.remove('is-invalid');
        }
        
        if (form.checkValidity() && privacyCheck.checked) {
            // Simular envío del formulario
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
            
            // Simular tiempo de envío
            setTimeout(() => {
                // Mostrar mensaje de éxito
                alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.');
                
                // Restaurar botón
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Resetear formulario
                form.reset();
                form.classList.remove('was-validated');
                
                // Remover clases de validación
                document.querySelectorAll('.is-valid').forEach(el => {
                    el.classList.remove('is-valid');
                });
            }, 1500);
        } else {
            form.classList.add('was-validated');
        }
    }, false);
    
    // Validación en tiempo real
    document.getElementById('email').addEventListener('input', function() {
        validateField('email', isEmailValid, 'Por favor ingresa un correo electrónico válido');
    });
    
    document.getElementById('telefono').addEventListener('input', function() {
        validateField('telefono', value => value === '' || isPhoneValid(value), 'Por favor ingresa un número de teléfono válido (9 dígitos)');
    });
    
    document.getElementById('privacidad').addEventListener('change', function() {
        if (this.checked) {
            this.classList.remove('is-invalid');
        }
    });
});

document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert('click derecho deshabilitado');
});

// Deshabilitar teclas de desarrollador
document.addEventListener('keydown', function(e) {
 if (e.ctrlKey && e.key === 'c'){
    e.preventDefault
    alert('Copiar deshabilitado');
         }
});

// script para bloquear teclas de mi teclado
document.addEventListener('keydown', function(event) {
    if(event.key === 'F12' || event.keyCode === 123 ){
        event.preventDefault();
        alert('F12 deshabilitado');
    }
});
