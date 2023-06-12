export const headerData = {
  actions: [{ type: 'button', text: 'My GitHub', href: 'https://github.com/JonatasMSantos' }],
};

export const footerData = {
  links: [
    {
      title: 'Meus Sites',
      links: [
        { text: 'jonatas.works', href: 'https://jonatas.works' },
        { text: 'reporte.me', href: 'https://reporte.me' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'bi:linkedin', href: '' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/JonatasMSantos' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://avatars.githubusercontent.com/u/8548419?s=96&v=4)]"></span>
    Jônatas Santos | 2023.
  `,
};
