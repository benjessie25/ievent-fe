// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

// Util Imports
import { getServerMode, getSettingsFromCookie } from '@core/utils/serverHelpers'


const NotFoundPage = () => {
  // Vars
  const direction = 'ltr'
  const mode = getServerMode()
  const settingsCookie = getSettingsFromCookie();

  return (
    <Providers direction={direction} settingsCookie={settingsCookie}>
      <BlankLayout>
        <NotFound mode={mode} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
