package com.atls.hyperion.ui.components.tooltip.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun TooltipAppearance.Companion.default() =
    TooltipAppearance(
        backgroundColor = LegacyColors.Palette.white
    )
