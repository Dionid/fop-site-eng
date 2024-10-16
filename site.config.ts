import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e75a8a6c2cb74196b40077d9e637939a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Функционально Ориентированное Программирование (ФОП)',
  domain: 'fop.davidshekunts.ru',
  author: '👨🏻 David Shekunts 👴🏿',

  // open graph metadata (optional)
  description:
    'Функционально Ориентированное Программирование (ФОП) – функциональная альтернатива ООП.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  telegram: 'it_kachalka',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/': 'e75a8a6c2cb74196b40077d9e637939a',

    '/origins/you-dont-know-oop': 'eca471eb866f44f49bdc6d41982a5f40',
    '/origins/you-have-never-used-oop': 'b67c730b3fab4d5cb272b48f05eee0a9',
    '/origins/main-problem-of-oop': 'e5a9cbd25bc7435eb34162e0cec440c1',
    '/origins/why-fp-and-pp-is-not-a-solution':
      '01ce5abb272e406496b60c1132c54739',
    '/origins/fop-birth': '73fadd0dd75a460589726da052c3e8ff',

    '/flexibility-is-must': 'cc975187f3c14fba99caa5c807301c4a',
    '/process-first-design': '5148460642b647ae871375cc7a2b5575',
    '/data-oriented-architecture': '1a5dfe8836e94022a2e6e2e87d677982',
    '/wynwyn': '38ec934805074a75bdcc89cfd2711d09',
    '/explicit-better-implicit': 'de28216783954051ade93a6a5ae1bee2',
    '/occams-chainsaw': '7c4a4ea6eb90499b93e7e09cea3abc40'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
