package com.atls.hyperion.ui.components.bottomBar.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.bottomBar.BottomBar
import com.atls.hyperion.ui.components.bottomBar.model.BottomBarItem
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.BottomBarAppearance
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.dark
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.darkWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.primary
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.primaryWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.secondary
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.secondaryWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.BottomBarShape.WithLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.BottomBarShape.WithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.default
import com.atls.hyperion.ui.components.bottomBar.styles.shape.elevated
import com.atls.hyperion.ui.components.bottomBar.styles.shape.rounded
import kotlin.math.PI

class BottomBarStory : ComponentExample {
    override val name: String = "BottomBar"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .verticalScroll(rememberScrollState())
                .padding(bottom = 80.dp)
        ) {
            val homePainter = object : Painter() {
                override val intrinsicSize = Size(24f, 24f)
                override fun DrawScope.onDraw() {
                    drawRect(
                        color = Color.Black,
                        topLeft = Offset(size.width * 0.2f, size.height * 0.3f),
                        size = Size(size.width * 0.6f, size.height * 0.6f)
                    )
                    drawLine(
                        color = Color.Black,
                        start = Offset(size.width * 0.2f, size.height * 0.3f),
                        end = Offset(size.width * 0.5f, size.height * 0.1f)
                    )
                    drawLine(
                        color = Color.Black,
                        start = Offset(size.width * 0.5f, size.height * 0.1f),
                        end = Offset(size.width * 0.8f, size.height * 0.3f)
                    )
                }
            }

            val favoritePainter = object : Painter() {
                override val intrinsicSize = Size(24f, 24f)
                override fun DrawScope.onDraw() {
                    val cx = size.width / 2
                    val cy = size.height / 2
                    val r = size.width / 3
                    drawCircle(
                        color = Color.Black,
                        center = Offset(cx, cy),
                        radius = r,
                        style = Stroke(2f)
                    )
                    drawCircle(color = Color.Black, center = Offset(cx, cy), radius = r / 2)
                }
            }

            val profilePainter = object : Painter() {
                override val intrinsicSize = Size(24f, 24f)
                override fun DrawScope.onDraw() {
                    drawCircle(
                        color = Color.Black,
                        center = Offset(size.width / 2, size.height * 0.35f),
                        radius = size.width * 0.2f
                    )
                    drawRect(
                        color = Color.Black,
                        topLeft = Offset(size.width * 0.3f, size.height * 0.5f),
                        size = Size(size.width * 0.4f, size.height * 0.4f)
                    )
                }
            }

            val settingsPainter = object : Painter() {
                override val intrinsicSize = Size(24f, 24f)
                override fun DrawScope.onDraw() {
                    drawCircle(
                        color = Color.Black,
                        center = Offset(size.width / 2, size.height / 2),
                        radius = size.width * 0.3f,
                        style = Stroke(2f)
                    )
                    for (i in 0 until 8) {
                        val angle = PI * i / 4
                        val sx =
                            size.width / 2 + (size.width * 0.35f * kotlin.math.cos(angle)).toFloat()
                        val sy =
                            size.height / 2 + (size.height * 0.35f * kotlin.math.sin(angle)).toFloat()
                        val ex =
                            size.width / 2 + (size.width * 0.45f * kotlin.math.cos(angle)).toFloat()
                        val ey =
                            size.height / 2 + (size.height * 0.45f * kotlin.math.sin(angle)).toFloat()
                        drawLine(
                            color = Color.Black,
                            start = Offset(sx, sy),
                            end = Offset(ex, ey),
                            strokeWidth = 2f
                        )
                    }
                }
            }

            val itemsWithLabels = listOf(
                BottomBarItem(homePainter, "Home"),
                BottomBarItem(favoritePainter, "Favorites"),
                BottomBarItem(profilePainter, "Profile"),
                BottomBarItem(settingsPainter, "Settings")
            )

            val itemsWithoutLabels = itemsWithLabels.map { it.copy(label = null) }

            var tabPosition by remember { mutableStateOf<Arrangement.Horizontal>(Arrangement.Center) }

            Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
                Text("Tab Position:")
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(vertical = 8.dp)
                ) {
                    RadioButton(
                        selected = tabPosition == Arrangement.Start,
                        onClick = { tabPosition = Arrangement.Start })
                    Text("Start", modifier = Modifier.padding(start = 4.dp, end = 8.dp))

                    RadioButton(
                        selected = tabPosition == Arrangement.Center,
                        onClick = { tabPosition = Arrangement.Center })
                    Text("Center", modifier = Modifier.padding(start = 4.dp, end = 8.dp))

                    RadioButton(
                        selected = tabPosition == Arrangement.End,
                        onClick = { tabPosition = Arrangement.End })
                    Text("End", modifier = Modifier.padding(start = 4.dp))
                }
            }

            ComponentVariants(
                name = "BottomBar (With Labels)",
                appearances = listOf(
                    "Primary" to { BottomBarAppearance.primary() },
                    "Secondary" to { BottomBarAppearance.secondary() },
                    "Dark" to { BottomBarAppearance.dark() }
                ),
                shapes = listOf(
                    "Default" to { WithLabel.default() },
                    "Elevated" to { WithLabel.elevated() },
                    "Rounded" to { WithLabel.rounded() }
                )
            ) { appearance, shape ->
                val selectedIndex = remember { mutableStateOf(0) }
                BottomBar(
                    itemsWithLabels,
                    selectedIndex.value,
                    { selectedIndex.value = it },
                    appearance = appearance,
                    shape = shape,
                    tabArrangement = tabPosition
                )
            }

            Spacer(Modifier.height(32.dp))

            ComponentVariants(
                name = "BottomBar (Without Labels)",
                appearances = listOf(
                    "Primary" to { BottomBarAppearance.primaryWithoutLabel() },
                    "Secondary" to { BottomBarAppearance.secondaryWithoutLabel() },
                    "Dark" to { BottomBarAppearance.darkWithoutLabel() }
                ),
                shapes = listOf(
                    "Default" to { WithoutLabel.default() },
                    "Rounded" to { WithoutLabel.rounded() },
                    "Elevated" to { WithoutLabel.elevated() }
                )
            ) { appearance, shape ->
                val selectedIndex = remember { mutableStateOf(0) }
                BottomBar(
                    itemsWithoutLabels,
                    selectedIndex.value,
                    { selectedIndex.value = it },
                    appearance = appearance,
                    shape = shape,
                    tabArrangement = tabPosition
                )
            }
        }
    }
}
