type PageLink = {
	href: string;
	text: string;
};

export const pageLinks: PageLink[] = [
	{ href: '/about', text: 'About' },
	{ href: '/contact', text: 'Contact' }
];

//

type ProjectLink = {
	href: string;
	text: string;
	hoverText: string;
	gradient: string[];
};

export const projectLinks: ProjectLink[] = [
	{
		href: '/thoughts',
		text: 'TH',
		hoverText: 'Thoughts',
		gradient: ['#FFB085', '#FF75A7', '#FF54D0']
	},
	{
		href: '/numerus',
		text: 'NU',
		hoverText: 'Numerus',
		gradient: ['#ea580c', '#EF8E2C', '#fcd34d']
	}
];
