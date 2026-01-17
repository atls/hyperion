package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.progress.LineProgress
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.appearance.primary
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default
import com.atls.hyperion.ui.components.progress.styles.shape.thick

@Composable
fun LineProgressVariants(percent: Float) {
    ComponentVariants(
        name = "Line Progress",
        appearances = listOf(
            "Primary" to { ProgressAppearance.primary() },
            "Gradient" to { ProgressAppearance.gradientExample() }
        ),
        shapes = listOf(
            "Default" to { ProgressShape.default() },
            "Thick" to { ProgressShape.thick() }
        )
    ) { appearance, shape ->
        LineProgress(
            percent = percent,
            appearance = appearance,
            shape = shape,
            modifier = Modifier.fillMaxWidth()
        )
    }
}
