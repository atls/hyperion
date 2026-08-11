package com.atls.hyperion.ui.components.pagination.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun PaginationAppearance.Companion.default(): PaginationAppearance =
    PaginationAppearance(
        activeColor = LegacyColors.Palette.blueProtective,
        disabledColor = LegacyColors.Palette.gray
    )
