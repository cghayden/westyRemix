import { createContext } from 'react'
import { getComplement, getContrastHSLString } from '~/lib/colorFuncs'
import { UserColors } from 'myTypes'

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
  siteSettings: UserColors
  children: React.ReactNode
}) => {
  const bgComplement = getComplement(siteSettings.backgroundColor.hsl)
  const bgContrast = getContrastHSLString(siteSettings.backgroundColor.hsl, 0.2)
  const tileContrast = getContrastHSLString(
    siteSettings.productTileBackgroundColor.hsl,
    0.7
  )
  siteSettings.bgComplement = bgComplement
  siteSettings.bgContrast = bgContrast
  siteSettings.tileContrast = tileContrast

  return (
    <ThemeContext.Provider value={siteSettings}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
