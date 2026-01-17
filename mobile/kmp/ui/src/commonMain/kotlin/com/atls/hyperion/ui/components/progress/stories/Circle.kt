package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.progress.CircleProgress
import com.atls.hyperion.ui.components.progress.model.GapPosition
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.appearance.primary
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default
import com.atls.hyperion.ui.components.progress.styles.shape.thick
import com.atls.hyperion.ui.primitives.layout.column.Column

@Composable
fun CircleProgressVariants(percent: Float) {
    ComponentVariants(
        name = "Circle Progress",
        appearances = listOf(
            "Primary" to { ProgressAppearance.primary() },
            "Gradient" to { ProgressAppearance.gradientExample() }
        ),
        shapes = listOf(
            "Default" to { ProgressShape.default() },
            "Thick" to { ProgressShape.thick() })
    ) { appearance, shape ->
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            CircleProgress(
                percent = percent,
                appearance = appearance,
                shape = shape,
                gapDegree = 60f,
                gapPosition = GapPosition.Top
            )
        }
    }
}
