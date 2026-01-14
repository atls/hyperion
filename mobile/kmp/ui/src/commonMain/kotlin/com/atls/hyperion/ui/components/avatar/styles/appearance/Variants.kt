package com.atls.hyperion.ui.components.avatar.styles.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

@Composable
fun AvatarAppearance.Companion.default(): AvatarAppearance =
    AvatarAppearance(
        backgroundColor = ThemeColors.Palette.transparent,
        borderColor = ThemeColors.Palette.transparent
    )
