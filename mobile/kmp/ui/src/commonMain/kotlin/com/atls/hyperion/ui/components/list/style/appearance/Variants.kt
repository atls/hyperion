package com.atls.hyperion.ui.components.list.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun ListAppearance.Companion.default(): ListAppearance =
    ListAppearance(
        backgroundColor = Colors.Palette.transparent
    )
