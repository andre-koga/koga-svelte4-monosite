type PageLink = {
	href: string;
	text: string;
};

export const homePageLinks: PageLink[] = [
	{ href: '/about', text: 'About' },
	{ href: '/contact', text: 'Contact' }
];

type ProjectLink = {
	href: string;
	text: string;
	gradient: string[];
	pages?: PageLink[];
};

export const projectLinks: ProjectLink[] = [
	{
		href: '/thoughts',
		text: 'Thoughts',
		gradient: ['#FFB085', '#FF75A7', '#FF54D0'],
		pages: [
			{ href: '/tech', text: 'Tech' },
			{ href: '/philosophy', text: 'Philosophy' }
		]
	},
	{
		href: '/numerus',
		text: 'Numerus',
		gradient: ['#EFB32D', '#5b98de'],
		pages: [
			{ href: '/algebra', text: 'Algebra' },
			{ href: '/geometry', text: 'Geometry' },
			{ href: '/calculus', text: 'Calculus' },
			{ href: '/statistics', text: 'Statistics' },
			{ href: '/combinatorics', text: 'Combinatorics' },
			{ href: '/number-theory', text: 'Number Theory' },
		]
	}
];
