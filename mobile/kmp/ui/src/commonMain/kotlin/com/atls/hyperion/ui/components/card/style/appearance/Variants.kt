package com.atls.hyperion.ui.components.card.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun CardAppearance.Companion.white(): CardAppearance =
    CardAppearance(
        backgroundColor = LegacyColors.Palette.white,
        borderColor = LegacyColors.Palette.gray
    )
