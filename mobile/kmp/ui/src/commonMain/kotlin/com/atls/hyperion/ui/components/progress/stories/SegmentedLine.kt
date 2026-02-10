package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.progress.LineProgress
import com.atls.hyperion.ui.components.progress.styles.appearance.Colors
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.appearance.primary
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default
import com.atls.hyperion.ui.components.progress.styles.shape.thick
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

@Composable
fun SegmentedLineProgressVariants(percent: Float) {
    val segments = List(3) { percent / 3 }
    val multiColors = Colors.Multiple.Solid(
        strokeColors = listOf(
            ThemeColors.Palette.red,
            ThemeColors.Palette.blueProtective,
            ThemeColors.Palette.green
        ),
        trailColor = ThemeColors.Palette.gray
    )
    ComponentVariants<ProgressAppearance, ProgressShape>(
        name = "Segmented Line Progress",
        appearances = listOf("Multi-color" to {
            ProgressAppearance.primary().copy(colors = multiColors)
        }),
        shapes = listOf(
            "Default" to { ProgressShape.default() },
            "Thick" to { ProgressShape.thick() })
    ) { appearance, shape ->
        LineProgress(
            percents = segments,
            appearance = appearance,
            shape = shape,
            modifier = Modifier.fillMaxWidth()
        )
    }
}
