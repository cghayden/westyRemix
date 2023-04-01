import { HSL_Color, SanityColor } from 'myTypes'
import { createContext } from 'react'
import { hslToHex } from '~/lib/colorFuncs'
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
}

const ThemeContext = createContext(initialCtx)

const ThemeProvider = ({
  siteSettings,
  children,
}: {
  siteSettings: UserColors
  children: React.ReactNode
}) => {
  //adjust hue to comp
  // calc compHex
  // create comp SanityColor
  const complement_hue = siteSettings.backgroundColor.hsl.h + 180
  const complementHSL: HSL_Color = {
    h: complement_hue,
    s: siteSettings.backgroundColor?.hsl.s,
    l: siteSettings.backgroundColor?.hsl.l,
  }
  const complementHex = hslToHex(
    complement_hue,
    siteSettings.backgroundColor.hsl.s,
    siteSettings.backgroundColor.hsl.l
  )
  const bgComplement: SanityColor = {
    alpha: 1,
    hsl: complementHSL,
    hex: complementHex,
  }
  console.log('bgComplement', bgComplement)
  siteSettings.bgComplement = bgComplement

  return (
    <ThemeContext.Provider value={siteSettings}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
