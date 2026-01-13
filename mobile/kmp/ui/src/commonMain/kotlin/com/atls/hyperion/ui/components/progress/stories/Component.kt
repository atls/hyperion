package com.atls.hyperion.ui.components.progress.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.progress.CircleProgress
import com.atls.hyperion.ui.components.progress.LineProgress
import com.atls.hyperion.ui.components.progress.model.GapPosition
import com.atls.hyperion.ui.components.progress.styles.appearance.Colors
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.appearance.primary
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default
import com.atls.hyperion.ui.components.progress.styles.shape.thick
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

class ProgressStory : ComponentExample {
    override val name: String = "Progress"

    @Composable
    override fun Content() {
        var percent by remember { mutableStateOf(40f) }

        Column(
            modifier = Modifier
                .fillMaxSize()
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Text("Percent: ${percent.toInt()}%")
                Slider(
                    value = percent,
                    onValueChange = { percent = it },
                    valueRange = 0f..100f
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(rememberScrollState())
                    .padding(horizontal = 16.dp)
            ) {
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

                Spacer(modifier = Modifier.height(16.dp))
                val lineSegment1 = percent / 3
                val lineSegment2 = percent / 3
                val lineSegment3 = percent / 3
                val linePercents = listOf(lineSegment1, lineSegment2, lineSegment3)
                val colors = listOf(
                    ThemeColors.Palette.red,
                    ThemeColors.Palette.blueProtective,
                    ThemeColors.Palette.green
                )
                val multiColors =
                    Colors.Multiple.Solid(strokeColors = colors, trailColor = ThemeColors.Palette.gray)

                ComponentVariants<ProgressAppearance, ProgressShape>(
                    name = "Segmented Line Progress",
                    appearances = listOf(
                        "Multi-color" to { ProgressAppearance.primary().copy(colors = multiColors) }
                    ),
                    shapes = listOf(
                        "Default" to { ProgressShape.default() },
                        "Thick" to { ProgressShape.thick() }
                    )
                ) { appearance, shape ->
                    LineProgress(
                        percents = linePercents,
                        appearance = appearance,
                        shape = shape,
                        modifier = Modifier.fillMaxWidth()
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))

                ComponentVariants(
                    name = "Circle Progress",
                    appearances = listOf(
                        "Primary" to { ProgressAppearance.primary() },
                        "Gradient" to { ProgressAppearance.gradientExample() }
                    ),
                    shapes = listOf(
                        "Default" to { ProgressShape.default() },
                        "Thick" to { ProgressShape.thick() }
                    )
                ) { appearance, shape ->
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        CircleProgress(
                            percent = percent,
                            appearance = appearance,
                            shape = shape,
                            gapDegree = 60f,
                            gapPosition = GapPosition.Top
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))
                val segment1 = percent / 3
                val segment2 = percent / 3
                val segment3 = percent / 3
                val circlePercents = listOf(segment1, segment2, segment3)
                val circleColors = listOf(
                    ThemeColors.Palette.red,
                    ThemeColors.Palette.blueProtective,
                    ThemeColors.Palette.green
                )
                val circleMultiColors =
                    Colors.Multiple.Solid(strokeColors = circleColors, trailColor = ThemeColors.Palette.gray)

                ComponentVariants<ProgressAppearance, ProgressShape>(
                    name = "Segmented Circle Progress",
                    appearances = listOf(
                        "Multi-color" to { ProgressAppearance.primary().copy(colors = circleMultiColors) }
                    ),
                    shapes = listOf(
                        "Default" to { ProgressShape.default() },
                        "Thick" to { ProgressShape.thick() }
                    )
                ) { appearance, shape ->
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        CircleProgress(
                            percents = circlePercents,
                            appearance = appearance,
                            shape = shape
                        )
                    }
                }

                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}

fun ProgressAppearance.Companion.gradientExample(): ProgressAppearance =
    ProgressAppearance(
        colors = Colors.Single.Gradient(
            strokeBrush = Brush.horizontalGradient(
                colors = listOf(Color.Magenta, Color.Cyan)
            ),
            trailColor = ThemeColors.Palette.gray
        )
    )
