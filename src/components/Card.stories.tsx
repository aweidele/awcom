import Card, { type Props as CardProps } from './Card.astro';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		highlight: { control: 'boolean' },
	},
};

export const Default = {
	args: {
		title: 'Card title',
		description: 'A short description of what this card shows.',
	} satisfies CardProps,
};

export const Highlighted = {
	args: {
		title: 'Featured card',
		description: 'The highlight prop swaps in the indigo treatment.',
		highlight: true,
	} satisfies CardProps,
};
