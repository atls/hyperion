package com.atls.hyperion.ui.components.tooltip.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun TooltipAppearance.Companion.default() =
    TooltipAppearance(
        backgroundColor = Colors.Palette.white
    )
