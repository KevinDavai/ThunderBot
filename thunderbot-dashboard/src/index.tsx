import {createRoot} from 'react-dom/client'

import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'

import './app/scss/main.scss'

import {AppRoutes} from './app/routing/AppRoutes'
import {ThemeModeProvider} from './_metronic/partials/layout/theme-mode/ThemeModeProvider'

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <ThemeModeProvider>
      <AppRoutes />
    </ThemeModeProvider>
  )
}
