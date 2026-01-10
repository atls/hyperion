package com.atls.hyperion.ui.components.avatar.styles.appearance

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

@Composable
fun AvatarAppearance.Companion.default(): AvatarAppearance =
    AvatarAppearance(
        backgroundColor = Color.Transparent,
        borderColor = Color.Transparent
    )
