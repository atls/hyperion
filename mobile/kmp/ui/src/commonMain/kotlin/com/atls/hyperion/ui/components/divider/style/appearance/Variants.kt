package com.atls.hyperion.ui.components.divider.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun DividerAppearance.Companion.default(): DividerAppearance =
    DividerAppearance(
        color = LegacyColors.Palette.lightPurple
    )
