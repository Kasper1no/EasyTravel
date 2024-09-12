import { Tour } from './tour';

// Список турів
export const TOURS: Tour[] = [
    // Тури для готелю з id_hotel = 1 (Hotel Athens)
    new Tour(
        1,
        'Athens City Break',
        'Explore the ancient wonders of Athens with our city break tour. Discover the Acropolis, stroll through Plaka, and indulge in delicious Greek cuisine.',
        1,
        1,
        1,
        2,
        'Flight',
        500,
        '2024-06-01',
        '2024-06-15', // Різниця 14 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'athens_tour.jpg',
        ["athens_room1.jpg"]
    ),

    // Тури для готелю з id_hotel = 2 (Hotel Thessaloniki)
    new Tour(
        2,
        'Thessaloniki Weekend Getaway',
        'Spend a relaxing weekend in Thessaloniki, exploring its historic sites, vibrant markets, and charming waterfront. Perfect for a quick escape.',
        1,
        2,
        2,
        2,
        'Flight',
        350,
        '2024-07-10',
        '2024-07-20', // Різниця 10 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'thessaloniki_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 3 (Hotel Patras)
    new Tour(
        3,
        'Patras Beach Retreat',
        'Relax and unwind on the beautiful beaches of Patras. Enjoy sun, sea, and sand while staying in our cozy hotel near the port.',
        1,
        3,
        3,
        2,
        'Bus',
        400,
        '2024-08-20',
        '2024-09-10', // Різниця 21 день
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'patras_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 4 (Hotel Heraklion)
    new Tour(
        4,
        'Heraklion Cultural Experience',
        'Immerse yourself in the rich history and culture of Heraklion with our cultural experience tour. Visit archaeological sites, museums, and more.',
        1,
        4,
        4,
        2,
        'Flight',
        600,
        '2024-09-15',
        '2024-09-25', // Різниця 10 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'heraklion_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 5 (Hotel Rome)
    new Tour(
        5,
        'Rome Sightseeing Tour',
        'Discover the wonders of Rome with our comprehensive sightseeing tour. Explore the Colosseum, Vatican City, and Trevi Fountain with expert guides.',
        2,
        5,
        5,
        2,
        'Flight',
        700,
        '2024-10-05',
        '2024-10-20', // Різниця 15 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'rome_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 6 (Hotel Naples)
    new Tour(
        6,
        'Naples Culinary Adventure',
        'Embark on a culinary adventure in Naples, sampling authentic Italian cuisine and exploring local markets, pizzerias, and gelaterias.',
        2,
        6,
        6,
        2,
        'Train',
        450,
        '2024-11-15',
        '2024-12-05', // Різниця 20 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'naples_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 7 (Hotel Milan)
    new Tour(
        7,
        'Milan Fashion Experience',
        'Indulge in the world of fashion with our Milan fashion experience tour. Discover luxury boutiques, designer shops, and trendy neighborhoods.',
        2,
        7,
        7,
        2,
        'Flight',
        800,
        '2024-12-01',
        '2025-01-01', // Різниця 31 день
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'milan_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 8 (Hotel Venice)
    new Tour(
        8,
        'Venice Romantic Getaway',
        'Experience the romance of Venice with our special getaway tour. Enjoy gondola rides, candlelit dinners, and stunning views of the Grand Canal.',
        2,
        8,
        8,
        2,
        'Flight',
        900,
        '2025-01-10',
        '2025-02-05', // Різниця 26 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'venice_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 9 (Hotel Paris)
    new Tour(
        9,
        'Parisian Adventure',
        'Embark on a Parisian adventure and explore the city of lights. Visit iconic landmarks, enjoy French cuisine, and experience the magic of Paris.',
        3,
        9,
        9,
        2,
        'Flight',
        1000,
        '2025-02-20',
        '2025-03-15', // Різниця 23 дні
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'paris_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 10 (Hotel Madrid)
    new Tour(
        10,
        'Madrid Cultural Tour',
        'Explore the vibrant culture and history of Madrid with our guided tour. Visit museums, art galleries, and iconic landmarks in Spain\'s capital city.',
        4,
        13,
        13,
        2,
        'Flight',
        850,
        '2025-03-01',
        '2025-03-18', // Різниця 17 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'madrid_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 11 (Hotel Barcelona)
    new Tour(
        11,
        'Barcelona Beach Vacation',
        'Relax on the sunny beaches of Barcelona and soak up the Mediterranean sun. Explore the city\'s vibrant neighborhoods, delicious cuisine, and lively nightlife.',
        4,
        14,
        14,
        2,
        'Flight',
        950,
        '2025-04-10',
        '2025-04-28', // Різниця 18 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'barcelona_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 12 (Hotel Valencia)
    new Tour(
        12,
        'Valencia Family Adventure',
        'Experience a family-friendly adventure in Valencia with our exciting tour. Visit amusement parks, beaches, and cultural attractions for all ages.',
        4,
        15,
        15,
        2,
        'Bus',
        700,
        '2025-05-05',
        '2025-05-25', // Різниця 20 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'valencia_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 13 (Hotel Seville)
    new Tour(
        13,
        'Seville Flamenco Experience',
        'Immerse yourself in the passionate world of flamenco in Seville. Enjoy live performances, dance classes, and cultural insights into this iconic Spanish art form.',
        4,
        16,
        16,
        2,
        'Flight',
        750,
        '2025-06-01',
        '2025-06-25', // Різниця 24 дні
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'seville_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 14 (Hotel London)
    new Tour(
        14,
        'London Theater Getaway',
        'Experience the magic of London\'s West End with our theater getaway tour. Enjoy top productions, behind-the-scenes tours, and exclusive access to London\'s theater scene.',
        5,
        17,
        17,
        2,
        'Flight',
        1100,
        '2025-07-10',
        '2025-08-05', // Різниця 26 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'london_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 15 (Hotel Manchester)
    new Tour(
        15,
        'Manchester Football Tour',
        'Immerse yourself in the world of English football with our Manchester football tour. Visit iconic stadiums, meet legendary players, and watch live matches.',
        5,
        18,
        18,
        2,
        'Flight',
        900,
        '2025-08-15',
        '2025-09-05', // Різниця 21 день
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'manchester_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 16 (Hotel Liverpool)
    new Tour(
        16,
        'Liverpool Music Tour',
        'Discover the musical heritage of Liverpool with our music tour. Visit iconic venues, learn about famous bands, and experience the vibrant music scene of the Beatles\' hometown.',
        5,
        19,
        19,
        2,
        'Flight',
        950,
        '2025-10-01',
        '2025-10-21', // Різниця 20 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'liverpool_tour.jpg',
        []
    ),

    // Тури для готелю з id_hotel = 17 (Hotel Birmingham)
    new Tour(
        17,
        'Birmingham Adventure Tour',
        'Embark on an adventure in Birmingham and explore the city\'s diverse attractions. From historic landmarks to modern museums, there\'s something for everyone.',
        5,
        20,
        20,
        2,
        'Train',
        800,
        '2025-11-01',
        '2025-11-18', // Різниця 17 днів
        { 'Visa': true, 'Insurance': true, 'Transfer': true },
        'birmingham_tour.jpg',
        []
    ),
        // Тури для готелю з id_hotel = 18 (Hotel Liverpool)
        new Tour(
            18,
            'Liverpool City Break',
            'Explore the vibrant city of Liverpool with our city break tour. Visit iconic landmarks, stroll along the waterfront, and immerse yourself in the Beatles\' legacy.',
            5,
            19,
            19,
            2,
            'Flight',
            750,
            '2025-12-01',
            '2025-12-15', // Різниця 14 днів
            { 'Visa': true, 'Insurance': true, 'Transfer': true },
            'liverpool_tour2.jpg',
            []
        ),
    
        // Тури для готелю з id_hotel = 19 (Hotel Manchester)
        new Tour(
            19,
            'Manchester Cultural Tour',
            'Discover the cultural richness of Manchester with our guided tour. Explore museums, art galleries, and historic sites, and experience the city\'s vibrant arts scene.',
            5,
            18,
            18,
            2,
            'Flight',
            850,
            '2026-01-05',
            '2026-01-25', // Різниця 20 днів
            { 'Visa': true, 'Insurance': true, 'Transfer': true },
            'manchester_tour2.jpg',
            []
        ),
    
        // Тури для готелю з id_hotel = 20 (Hotel Birmingham)
        new Tour(
            20,
            'Birmingham Shopping Spree',
            'Indulge in a shopping spree in Birmingham with our exclusive tour. Explore the city\'s best shopping districts, boutiques, and malls for a memorable retail therapy experience.',
            5,
            20,
            20,
            2,
            'Train',
            700,
            '2026-02-10',
            '2026-02-28', // Різниця 18 днів
            { 'Visa': true, 'Insurance': true, 'Transfer': true },
            'birmingham_tour2.jpg',
            []
        )
    
];
