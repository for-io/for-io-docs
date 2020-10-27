module.exports = {
  title: 'For.io Docs',
  tagline: '',
  url: 'https://for-io.github.io',
  baseUrl: '/for-io-docs/',
  onBrokenLinks: 'throw',
  favicon: '/img/favicon.png',
  organizationName: 'for-io',
  projectName: 'for-io-docs',
  themeConfig: {
    navbar: {
      title: 'For.io',
      logo: {
        alt: 'For.io logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/for-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© For.io ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/for-io/for-io-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/for-io/for-io-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
