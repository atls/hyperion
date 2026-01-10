package com.atls.hyperion.ui.components.avatar.styles.shape

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.components.ImageSize
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius

@Composable
fun AvatarShape.Companion.smallCircle(): AvatarShape =
    AvatarShape(
        size = ImageSize.medium,
        cornerRadius = CornerRadius.full
    )

@Composable
fun AvatarShape.Companion.normalCircle(): AvatarShape =
    AvatarShape(
        size = ImageSize.large,
        cornerRadius = CornerRadius.full
    )

@Composable
fun AvatarShape.Companion.largeCircle(): AvatarShape =
    AvatarShape(
        size = ImageSize.huge,
        cornerRadius = CornerRadius.full
    )

@Composable
fun AvatarShape.Companion.smallSquare(): AvatarShape =
    AvatarShape(
        size = ImageSize.medium,
        cornerRadius = CornerRadius.xs3
    )

@Composable
fun AvatarShape.Companion.normalSquare(): AvatarShape =
    AvatarShape(
        size = ImageSize.large,
        cornerRadius = CornerRadius.xs3
    )

@Composable
fun AvatarShape.Companion.largeSquare(): AvatarShape =
    AvatarShape(
        size = ImageSize.huge,
        cornerRadius = CornerRadius.xs3
    )
