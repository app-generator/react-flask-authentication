// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconDownload } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome: IconBrandChrome,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconDownload: IconDownload
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons['IconBrandChrome'],
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Source Code',
            type: 'item',
            url: 'https://github.com/app-generator/react-flask-authentication',
            icon: icons['IconDownload'],
            external: true,
            target: true
        }
    ]
};
