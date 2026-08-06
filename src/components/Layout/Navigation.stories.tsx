import NavigationAstroComponent from "./Navigation.astro";

export default {
  title: 'Layout/Header/Elements',
  component: NavigationAstroComponent,
  argTypes: {
    navItems: {
      control: { type: 'object' }
    }
  }
};

export const Navigation = {
  args: {
    navItems: [
      { label: 'Home', url: '#' },
      { label: 'About', url: '#', active: true },
      { label: 'Work', url: '#' },
      { label: 'Case Studies', url: '#' },
      { label: 'Contact', url: '#' },
    ]
  }
};