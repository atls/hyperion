package com.atls.hyperion.ui.theme

import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.theme.tokens.colors.darkColors
import com.atls.hyperion.ui.theme.tokens.colors.lightColors

val LocalHyperionColors = staticCompositionLocalOf { lightColors }

@Composable
fun Theme(
    darkTheme: Boolean = false,
    colors: Colors = if (darkTheme) darkColors else lightColors,
    content: @Composable () -> Unit
) {
    CompositionLocalProvider(LocalHyperionColors provides colors) {
        content()
    }
}
