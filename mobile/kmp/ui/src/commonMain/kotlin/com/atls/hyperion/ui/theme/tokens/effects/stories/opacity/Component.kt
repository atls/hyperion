package com.atls.hyperion.ui.theme.tokens.effects.stories.opacity

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Switch
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

class OpacityStory : ComponentExample {
    override val name: String = "Opacity"

    @Composable
    override fun Content() {
        var darkTheme by remember { mutableStateOf(false) }

        Theme(darkTheme = darkTheme) {
            val colors = LocalHyperionColors.current

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .background(colors.surface.base)
                    .verticalScroll(rememberScrollState())
                    .padding(Spacing.component.xl3),
                verticalArrangement = Arrangement.spacedBy(Spacing.component.xl3)
            ) {
                Toggle(
                    label = "Dark theme",
                    checked = darkTheme,
                    textColor = colors.text.primary,
                    onCheckedChange = { darkTheme = it }
                )

                opacityValues.forEach { (name, value) ->
                    Column(verticalArrangement = Arrangement.spacedBy(Spacing.component.md)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text(text = name, color = colors.text.primary)
                            Text(
                                text = "${(value * 100).toInt()}%",
                                color = colors.text.secondary
                            )
                        }
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(Spacing.layout.xs)
                                .background(colors.surface.muted)
                        ) {
                            Box(
                                modifier = Modifier
                                    .fillMaxSize()
                                    .alpha(value)
                                    .background(colors.action.base)
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun Toggle(
    label: String,
    checked: Boolean,
    textColor: Color,
    onCheckedChange: (Boolean) -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(text = label, color = textColor)
        Switch(checked = checked, onCheckedChange = onCheckedChange)
    }
}
