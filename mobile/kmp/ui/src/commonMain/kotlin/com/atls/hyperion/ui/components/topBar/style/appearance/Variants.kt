package com.atls.hyperion.ui.components.topBar.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun TopBarAppearance.Companion.default(): TopBarAppearance =
    TopBarAppearance(
        backgroundColor = Colors.Palette.transparent,
        textColor = Colors.Text.black
    )
