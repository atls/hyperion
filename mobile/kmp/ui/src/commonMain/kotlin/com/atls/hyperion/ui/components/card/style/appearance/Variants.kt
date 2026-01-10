package com.atls.hyperion.ui.components.card.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun CardAppearance.Companion.white(): CardAppearance =
    CardAppearance(
        backgroundColor = Colors.Palette.white,
        borderColor = Colors.Palette.gray
    )
