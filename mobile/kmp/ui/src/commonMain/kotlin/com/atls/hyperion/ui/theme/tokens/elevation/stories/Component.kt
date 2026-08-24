package com.atls.hyperion.ui.theme.tokens.elevation.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Switch
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.elevation
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.LocalHyperionElevations
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.PressableElevationStates
import com.atls.hyperion.ui.theme.tokens.layout.Radii
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

class ElevationStory : ComponentExample {
    override val name: String = "Elevation"

    @Composable
    override fun Content() {
        var darkTheme by remember { mutableStateOf(false) }
        var focused by remember { mutableStateOf(false) }
        var enabled by remember { mutableStateOf(true) }

        Theme(darkTheme = darkTheme) {
            val colors = LocalHyperionColors.current
            val elevations = LocalHyperionElevations.current
            val pressableElevations = listOf(
                "xs" to elevations.xs,
                "sm" to elevations.sm,
                "md" to elevations.md,
                "lg" to elevations.lg
            )

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .background(colors.surface.subtle)
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
                Toggle(
                    label = "Focused",
                    checked = focused,
                    textColor = colors.text.primary,
                    onCheckedChange = { focused = it }
                )
                Toggle(
                    label = "Enabled",
                    checked = enabled,
                    textColor = colors.text.primary,
                    onCheckedChange = { enabled = it }
                )

                pressableElevations.forEach { (label, states) ->
                    ElevationCard(
                        label = label,
                        states = states,
                        focused = focused,
                        enabled = enabled,
                        backgroundColor = colors.surface.base,
                        textColor = colors.text.primary
                    )
                }

                StaticElevationCard(
                    label = "modal · default",
                    elevation = elevations.modal.default,
                    backgroundColor = colors.surface.base,
                    textColor = colors.text.primary
                )
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
        Text(label, color = textColor)
        Switch(checked = checked, onCheckedChange = onCheckedChange)
    }
}

@Composable
private fun ElevationCard(
    label: String,
    states: PressableElevationStates,
    focused: Boolean,
    enabled: Boolean,
    backgroundColor: Color,
    textColor: Color
) {
    val interactionSource = remember { MutableInteractionSource() }
    val pressed by interactionSource.collectIsPressedAsState()
    val state = when {
        !enabled -> "disabled" to states.disabled
        pressed -> "pressed" to states.pressed
        focused -> "focused" to states.focused
        else -> "default" to states.default
    }

    StaticElevationCard(
        label = "$label · ${state.first}",
        elevation = state.second,
        backgroundColor = backgroundColor,
        textColor = textColor,
        modifier = Modifier.clickable(
            interactionSource = interactionSource,
            indication = null,
            enabled = enabled,
            onClick = {}
        )
    )
}

@Composable
private fun StaticElevationCard(
    label: String,
    elevation: Elevation,
    backgroundColor: Color,
    textColor: Color,
    modifier: Modifier = Modifier,
    shape: Shape = RoundedCornerShape(Radii.md)
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(Spacing.layout.lg)
            .elevation(
                elevation = elevation,
                backgroundColor = backgroundColor,
                shape = shape
            )
            .then(modifier),
        contentAlignment = Alignment.Center
    ) {
        Text(label, color = textColor)
    }
}
