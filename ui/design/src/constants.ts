const IS_DEVELOPMENT = process.env.IS_DEVELOPMENT === 'true'

const UI_ADMIN_URL_FALLBACK = IS_DEVELOPMENT
  ? 'http://localhost:3002/'
  : 'https://ui-admin.ui.atls.design'

const UI_PARTS_URL_FALLBACK = IS_DEVELOPMENT
  ? 'http://localhost:3001/'
  : 'https://ui-parts.ui.atls.design'

export const UI_ADMIN_URL = process.env.UI_ADMIN_URL || UI_ADMIN_URL_FALLBACK
export const UI_PARTS_URL = process.env.UI_PARTS_URL || UI_PARTS_URL_FALLBACK
