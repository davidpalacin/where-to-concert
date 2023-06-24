export const fakeData = {
  users: [
    {
      id: 1,
      name: "John",
      password: "password",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Ryan",
      password: "password",
      email: "ryan@example.com",
    },
    {
      id: 3,
      name: "David",
      password: "password",
      email: "david@example.com",
    },
    {
      id: 4,
      name: "Jimmy",
      password: "password",
      email: "jimmy@example.com",
    },
    {
      id: 5,
      name: "admin",
      password: "admin",
      email: "admin",
    },
  ],
  posts: [
    {
      id: 1,
      author: "jimmy@example.com",
      title: "Metallica in Barcelona next month!",
      content: "There's a concert here, will you come?",
      artist: "Metallica",
      genre: "Metal",
      willGo: 0,
      comments: [
        { content: "sounds nice", user: 2 },
        { content: "Lorem ipsum dolor sit amet", user: 4 },
        { content: "Lorem ipsum dolor sit amet", user: 2 },
        { content: "Lorem ipsum dolor sit amet", user: 3 },
      ],
    },
    {
      id: 2,
      author: "john@example.com",
      title: "Rock Festival Announcement",
      content:
        "Exciting news! A rock festival is coming to town. Get ready for a weekend of epic performances!",
      artist: "Various Rock Bands",
      genre: "Rock",
      willGo: 0,
      comments: [
        {
          content:
            "I've been waiting for a rock festival like this! Can't wait!",
          user: 3,
        },
      ],
    },
    {
      id: 3,
      author: "ryan@example.com",
      title: "Indie Band Showcase",
      content:
        "Discover the best indie bands in town at this exclusive showcase event. Don't miss out!",
      artist: "Various Indie Bands",
      genre: "Indie",
      willGo: 0,
      comments: [
        {
          content:
            "I love discovering new indie bands. I'll definitely be there!",
          user: 4,
        },
      ],
    },
  ],
};
