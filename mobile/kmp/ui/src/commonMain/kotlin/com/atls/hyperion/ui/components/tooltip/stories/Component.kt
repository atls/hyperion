package com.atls.hyperion.ui.components.tooltip.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.tooltip.Tooltip
import com.atls.hyperion.ui.components.tooltip.style.appearance.TooltipAppearance
import com.atls.hyperion.ui.components.tooltip.style.appearance.default
import com.atls.hyperion.ui.components.tooltip.style.shape.TooltipShape
import com.atls.hyperion.ui.components.tooltip.style.shape.default
import com.atls.hyperion.ui.components.tooltip.ui.TextTooltipContent

class TextTooltipStories : ComponentExample {
    override val name: String = "Text Tooltip"

    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            ComponentVariants(
                name = "Text Tooltip",
                appearances = listOf(
                    "Default" to { TooltipAppearance.default() }
                ),
                shapes = listOf(
                    "Default" to { TooltipShape.default() }
                )
            ) { appearance: TooltipAppearance, shape: TooltipShape ->
                Tooltip(
                    appearance = appearance,
                    shape = shape,
                    tooltipContent = {
                        TextTooltipContent(
                            text = "This is a tooltip with ${shape::class.simpleName} shape",
                            onDismiss = {}
                        )
                    }
                ) {
                    Box(
                        modifier = Modifier
                            .padding(16.dp)
                            .fillMaxWidth()
                    ) {
                        Text("Click me")
                    }
                }
            }
        }
    }
}
