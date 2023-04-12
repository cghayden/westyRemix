import { HSL_Color, SanityColor } from 'myTypes'

function darken(hex: string) {
  const hsl = hexToHSL(hex)
  const delta = hsl.l * 0.7
  const darkerL = hsl.l - delta
  hsl.l = darkerL
  const darkerHex = hslToHex(hsl.h, hsl.s, hsl.l)
  return darkerHex
}

function hslToHex(hue: number, saturation: number, lightness: number) {
  let s = saturation
  let l = lightness
  let h = hue

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }
  // Having obtained RGB, convert channels to hex
  let _r = Math.round((r + m) * 255).toString(16)
  let _g = Math.round((g + m) * 255).toString(16)
  let _b = Math.round((b + m) * 255).toString(16)

  // Prepend 0s, if necessary
  if (_r.length == 1) _r = '0' + _r
  if (_g.length == 1) _g = '0' + _g
  if (_b.length == 1) _b = '0' + _b

  return '#' + _r + _g + _b
}

function hexToHSL(H: string) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0
  if (H.length == 4) {
    r = '0x' + H[1] + H[1]
    g = '0x' + H[2] + H[2]
    b = '0x' + H[3] + H[3]
  } else if (H.length == 7) {
    r = '0x' + H[1] + H[2]
    g = '0x' + H[3] + H[4]
    b = '0x' + H[5] + H[6]
  }
  // Then to HSL
  r /= 255
  g /= 255
  b /= 255
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0

  if (delta == 0) h = 0
  else if (cmax == r) h = ((g - b) / delta) % 6
  else if (cmax == g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return {
    h,
    s,
    l,
    // hslString: 'hsl(' + h + ',' + s + '%,' + l + '%)',
  }
}

// takes lightness and contrast percentage, in decimal forms (.10 for 10%)
// returns color of same hue and saturation with proper lightness to obtain desired contrast

function getContrastColorLightness(lightness: number, contrast: number) {
  //  *100 to get from decimal to percent, then * 100 for proper contrast
  return lightness - contrast * -100
}

function getContrastHSLString(hslColor: HSL_Color, contrast: number) {
  const contrastingLightness = getContrastColorLightness(hslColor.l, contrast)
  const contrastHSL: HSL_Color = {
    h: hslColor.h,
    s: hslColor.s * 100,
    l: contrastingLightness,
  }
  return `hsl(${contrastHSL.h}, ${contrastHSL.s}%, ${contrastHSL.l}%)`
}

function getContrastColorHex(h: number, s: number, l: number) {
  const contrastingLightness = l / 10000
  return hslToHex(h, s, contrastingLightness)
}

function getComplement(hslColor: HSL_Color) {
  const complement_hue = hslColor.h + 180
  const complementHSL: HSL_Color = {
    h: complement_hue,
    s: hslColor.s,
    l: hslColor.l,
  }
  const complementHex = hslToHex(complement_hue, hslColor.s, hslColor.l)

  const complement: SanityColor = {
    alpha: 1,
    hsl: complementHSL,
    hex: complementHex,
  }
  return complement
}

export {
  darken,
  hslToHex,
  hexToHSL,
  getComplement,
  getContrastColorLightness,
  getContrastHSLString,
  getContrastColorHex,
}
