package com.atls.hyperion.ui.components.pagination.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun PaginationAppearance.Companion.default(): PaginationAppearance =
    PaginationAppearance(
        activeColor = Colors.Palette.blueProtective,
        disabledColor = Colors.Palette.gray
    )
