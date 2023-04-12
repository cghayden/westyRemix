import { createContext } from 'react'
import { getComplement, getContrastHSLString } from '~/lib/colorFuncs'
import { UserColors } from 'myTypes'
import { SiteSettings } from 'sanityTypes'

const initialCtx: UserColors = {
  _id: '0',
  backgroundColor: { alpha: 1, hex: '#eeeee', hsl: { h: 180, s: 50, l: 100 } },
  pageTextColor: { alpha: 1, hex: '#000', hsl: { h: 360, s: 50, l: 1 } },
  productTileBackgroundColor: {
    alpha: 1,
    hex: '#eeeee',
    hsl: { h: 180, s: 50, l: 100 },
  },
  productTileTextColor: { alpha: 1, hex: '#000', hsl: { h: 360, s: 50, l: 1 } },
  bgComplement: { alpha: 1, hex: '#bb1111', hsl: { h: 180, s: 50, l: 1 } },
  bgContrast: '#000',
  tileContrast: '#000',
}

const ThemeContext = createContext(initialCtx)

const ThemeProvider = ({
  siteSettings,
  children,
}: {
  siteSettings: SiteSettings
  children: React.ReactNode
}) => {
  function calcColors(siteSettings: SiteSettings) {
    const bgComplement = siteSettings?.backgroundColor?.hsl
      ? getComplement(siteSettings.backgroundColor.hsl)
      : null
    const bgContrast = siteSettings.backgroundColor?.hsl
      ? getContrastHSLString(siteSettings.backgroundColor.hsl, 0.2)
      : null
    const tileContrast = siteSettings.productTileBackgroundColor?.hsl
      ? getContrastHSLString(siteSettings.productTileBackgroundColor.hsl, 0.7)
      : null
    return { bgComplement, bgContrast, tileContrast }
  }
  const { bgComplement, bgContrast, tileContrast } = calcColors(siteSettings)

  const userColors: UserColors = { ...siteSettings }
  userColors.bgComplement = bgComplement
  userColors.bgContrast = bgContrast
  userColors.tileContrast = tileContrast

  return (
    <ThemeContext.Provider value={siteSettings}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
