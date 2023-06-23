export const fakeData = {
	users: [
		{
			name: "John",
			password: "password",
			email: "john@example.com",
		},
		{
			name: "Ryan",
			password: "password",
			email: "ryan@example.com",
		},
		{
			name: "David",
			password: "password",
			email: "david@example.com",
		},
		{
			name: "Jimmy",
			password: "password",
			email: "jimmy@example.com",
		},
		{
			name: "admin",
			password: "admin",
			email: "admin",
		},
	],
	posts: [
		{
			id: 1,
			user: "jimmy@example.com",
			title: "Metallica in Barcelona next month!",
			content: "There's a concert here, will you come?",
			artist: "Metallica",
			genre: "Metal",
			willGo: 0,
			comments: [{content: "sound nice"}]
		}
	]
};
