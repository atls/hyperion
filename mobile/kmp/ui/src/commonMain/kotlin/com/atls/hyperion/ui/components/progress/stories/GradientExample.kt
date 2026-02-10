package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.progress.styles.appearance.Colors
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun ProgressAppearance.Companion.gradientExample(): ProgressAppearance =
    ProgressAppearance(
        colors = Colors.Single.Gradient(
            strokeBrush = Brush.horizontalGradient(colors = listOf(Color.Magenta, Color.Cyan)),
            trailColor = ThemeColors.Palette.gray
        )
    )
