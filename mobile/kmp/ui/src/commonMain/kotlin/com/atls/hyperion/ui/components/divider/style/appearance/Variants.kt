package com.atls.hyperion.ui.components.divider.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun DividerAppearance.Companion.default(): DividerAppearance =
    DividerAppearance(
        color = Colors.Palette.lightPurple
    )
