export const hexToRgba = (hex, opacity = 1) => {
	const [r, g, b] = hex.slice(1).match(hex.length > 4 ? /.{1,2}/g : /.{1}/g)

	return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(
		b,
		16
	)}, ${opacity})`
}

export const rgba = (color, opacity = 1) => color.replace(')', `, ${opacity})`).replace('rgb', 'rgba')