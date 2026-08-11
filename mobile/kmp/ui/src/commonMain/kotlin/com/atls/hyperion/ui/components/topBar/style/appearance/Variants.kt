package com.atls.hyperion.ui.components.topBar.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun TopBarAppearance.Companion.default(): TopBarAppearance =
    TopBarAppearance(
        backgroundColor = LegacyColors.Palette.transparent,
        textColor = LegacyColors.Text.black
    )
