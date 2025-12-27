// Comic Book Data
const comicsData = [
  {
    id: "001",
    title: "Spider-Man: Web of Shadows",
    publisher: "Marvel",
    character: "Spider-Man",
    genre: "Superhero",
    price: 4.99,
    rating: 4.8,
    releaseDate: "2024-01-15",
    cover:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    synopsis:
      "When darkness falls over New York City, Spider-Man must confront his greatest fears and make an impossible choice that will determine the fate of millions.",
    creators: "Writer: Dan Slott | Artist: Mark Bagley",
    featured: true,
  },
  {
    id: "002",
    title: "Batman: Dark Knight Returns",
    publisher: "DC",
    character: "Batman",
    genre: "Superhero",
    price: 5.99,
    rating: 4.9,
    releaseDate: "2024-01-20",
    cover:
      "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
    synopsis:
      "In a dystopian future, an aging Batman comes out of retirement to save Gotham City one last time from a new generation of criminals.",
    creators: "Writer: Frank Miller | Artist: Klaus Janson",
    featured: true,
  },
  {
    id: "003",
    title: "The Walking Dead: New Beginning",
    publisher: "Image",
    character: "Rick Grimes",
    genre: "Horror",
    price: 3.99,
    rating: 4.6,
    releaseDate: "2024-02-01",
    cover:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    synopsis:
      "Years after the outbreak, survivors attempt to rebuild civilization while facing threats both living and dead.",
    creators: "Writer: Robert Kirkman | Artist: Charlie Adlard",
    featured: true,
  },
  {
    id: "004",
    title: "Wonder Woman: Warrior Princess",
    publisher: "DC",
    character: "Wonder Woman",
    genre: "Superhero",
    price: 4.99,
    rating: 4.7,
    releaseDate: "2024-02-05",
    cover:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    synopsis:
      "Diana must return to Themyscira to face an ancient evil that threatens both the mortal world and the realm of the gods.",
    creators: "Writer: Greg Rucka | Artist: Nicola Scott",
  },
  {
    id: "005",
    title: "X-Men: Days of Future Past",
    publisher: "Marvel",
    character: "X-Men",
    genre: "Superhero",
    price: 4.99,
    rating: 4.8,
    releaseDate: "2024-02-10",
    cover:
      "https://images.unsplash.com/photo-1543599153-47bdd3f93e84?w=400&h=600&fit=crop",
    synopsis:
      "In a dark future where mutants are hunted to extinction, Kitty Pryde must travel back in time to prevent a catastrophic event.",
    creators: "Writer: Chris Claremont | Artist: John Byrne",
  },
  {
    id: "006",
    title: "Saga: The Beginning",
    publisher: "Image",
    character: "Alana & Marko",
    genre: "Sci-Fi",
    price: 3.99,
    rating: 4.9,
    releaseDate: "2024-02-15",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    synopsis:
      "Two soldiers from opposite sides of a never-ending galactic war fall in love and risk everything to raise their child.",
    creators: "Writer: Brian K. Vaughan | Artist: Fiona Staples",
  },
  {
    id: "007",
    title: "The Flash: Speed Force",
    publisher: "DC",
    character: "The Flash",
    genre: "Superhero",
    price: 4.99,
    rating: 4.5,
    releaseDate: "2024-02-20",
    cover:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    synopsis:
      "Barry Allen discovers a mysterious disturbance in the Speed Force that could unravel the very fabric of reality.",
    creators: "Writer: Joshua Williamson | Artist: Carmine Di Giandomenico",
  },
  {
    id: "008",
    title: "Iron Man: Armor Wars",
    publisher: "Marvel",
    character: "Iron Man",
    genre: "Superhero",
    price: 5.99,
    rating: 4.6,
    releaseDate: "2024-02-25",
    cover:
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
    synopsis:
      "When Stark technology falls into the wrong hands, Tony Stark must retrieve every piece of his armor tech from villains worldwide.",
    creators: "Writer: David Michelinie | Artist: Bob Layton",
  },
  {
    id: "009",
    title: "Aquaman: King of Atlantis",
    publisher: "DC",
    character: "Aquaman",
    genre: "Superhero",
    price: 4.99,
    rating: 4.4,
    releaseDate: "2024-03-01",
    cover:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    synopsis:
      "Arthur Curry must unite the seven underwater kingdoms to prevent an ancient war from destroying the surface world.",
    creators: "Writer: Geoff Johns | Artist: Ivan Reis",
  },
  {
    id: "010",
    title: "The Avengers: Infinity",
    publisher: "Marvel",
    character: "Avengers",
    genre: "Superhero",
    price: 5.99,
    rating: 4.9,
    releaseDate: "2024-03-05",
    cover:
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
    synopsis:
      "Earth's mightiest heroes face their greatest challenge yet as an cosmic threat emerges to destroy all of reality.",
    creators: "Writer: Jonathan Hickman | Artist: Jim Cheung",
  },
  {
    id: "011",
    title: "Spawn: Origins",
    publisher: "Image",
    character: "Spawn",
    genre: "Horror",
    price: 4.99,
    rating: 4.7,
    releaseDate: "2024-03-10",
    cover:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    synopsis:
      "Al Simmons returns from hell as a Hellspawn to seek revenge on those who betrayed him, caught between heaven and hell.",
    creators: "Writer: Todd McFarlane | Artist: Greg Capullo",
  },
  {
    id: "012",
    title: "Green Lantern: Brightest Day",
    publisher: "DC",
    character: "Green Lantern",
    genre: "Superhero",
    price: 4.99,
    rating: 4.6,
    releaseDate: "2024-03-15",
    cover:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    synopsis:
      "Hal Jordan faces a new threat as the Guardians of the Universe reveal a dark secret that could destroy the Green Lantern Corps.",
    creators: "Writer: Geoff Johns | Artist: Doug Mahnke",
  },
];
