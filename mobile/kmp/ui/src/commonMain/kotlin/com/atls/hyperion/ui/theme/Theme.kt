package com.atls.hyperion.ui.theme

import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.text.font.FontFamily
import com.atls.hyperion.ui.theme.tokens.borders.Borders
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.theme.tokens.colors.darkColors
import com.atls.hyperion.ui.theme.tokens.colors.lightColors
import com.atls.hyperion.ui.theme.tokens.elevation.Elevations
import com.atls.hyperion.ui.theme.typography.TextStyles
import com.atls.hyperion.ui.theme.typography.fontFamilies.ScienceGothicFontFamily

val LocalHyperionColors = staticCompositionLocalOf { lightColors }
val LocalHyperionBorders = staticCompositionLocalOf { Borders(lightColors) }
val LocalHyperionElevations = staticCompositionLocalOf { Elevations(lightColors.elevation) }
val LocalHyperionTypography = staticCompositionLocalOf { TextStyles(fontFamily = FontFamily.Default) }

@Composable
fun Theme(
    darkTheme: Boolean = false,
    colors: Colors = if (darkTheme) darkColors else lightColors,
    content: @Composable () -> Unit
) {
    val borders = Borders(colors)
    val elevations = Elevations(colors.elevation)
    val typography = TextStyles(fontFamily = ScienceGothicFontFamily())

    CompositionLocalProvider(
        LocalHyperionColors provides colors,
        LocalHyperionBorders provides borders,
        LocalHyperionElevations provides elevations,
        LocalHyperionTypography provides typography
    ) {
        content()
    }
}
