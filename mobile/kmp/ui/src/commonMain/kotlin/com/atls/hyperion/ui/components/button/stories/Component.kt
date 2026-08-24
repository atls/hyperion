package com.atls.hyperion.ui.components.button.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.LocalContentColor
import androidx.compose.material.Switch
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.ghost
import com.atls.hyperion.ui.components.button.styles.appearance.primary
import com.atls.hyperion.ui.components.button.styles.appearance.secondary
import com.atls.hyperion.ui.components.button.styles.shape.*
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.chevron_right
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.primitives.icon.Icon
import com.atls.hyperion.ui.shared.addon.Addon
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.tokens.elevation.PressableElevationStates
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Spacing
import com.atls.hyperion.ui.theme.tokens.layout.Weight
import org.jetbrains.compose.resources.painterResource

class ButtonStory : ComponentExample {
    override val name: String = "Button"

    @Composable
    override fun Content() {
        var darkTheme by remember { mutableStateOf(false) }
        var focused by remember { mutableStateOf(false) }
        var showIcons by remember { mutableStateOf(false) }
        var enabled by remember { mutableStateOf(true) }

        Theme(darkTheme = darkTheme) {
            val colors = LocalHyperionColors.current

            CompositionLocalProvider(LocalContentColor provides colors.text.primary) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(colors.surface.subtle)
                        .verticalScroll(rememberScrollState())
                ) {
                    Toggle(
                        label = "Dark theme",
                        checked = darkTheme,
                        onCheckedChange = { darkTheme = it }
                    )
                    Toggle(
                        label = "Focused",
                        checked = focused,
                        onCheckedChange = { focused = it }
                    )
                    Toggle(
                        label = "Icons",
                        checked = showIcons,
                        onCheckedChange = { showIcons = it }
                    )
                    Toggle(
                        label = "Enabled",
                        checked = enabled,
                        onCheckedChange = { enabled = it }
                    )
                    VerticalSpacer(Space.sm)

                    ComponentVariants(
                        name = "Button",
                        appearances = listOf(
                            "Primary" to { ButtonAppearance.primary() },
                            "Secondary" to { ButtonAppearance.secondary() },
                            "Ghost" to { ButtonAppearance.ghost() }
                        ),
                        shapes = listOf(
                            "Xs" to { ButtonShape.xs() },
                            "Sm" to { ButtonShape.sm() },
                            "Md" to { ButtonShape.md() },
                            "Lg" to { ButtonShape.lg() }
                        )
                    ) { appearance: ButtonAppearance, shape: ButtonShape ->
                        val icon = object : Addon {
                            @Composable
                            override fun Content() {
                                Icon(
                                    icon = painterResource(Res.drawable.chevron_right),
                                    color = LocalContentColor.current,
                                    size = shape.addonSize
                                )
                            }

                            @Composable
                            override fun Spacer() = Unit
                        }
                        val previewAppearance = if (focused) {
                            appearance.copy(default = appearance.focused)
                        } else {
                            appearance
                        }
                        val previewShape = if (focused) {
                            shape.copy(
                                elevations = object : PressableElevationStates by shape.elevations {
                                    override val default = shape.elevations.disabled
                                }
                            )
                        } else {
                            shape
                        }
                        val previewAddons = if (showIcons) {
                            AddonSlotManager(
                                mapOf(
                                    AddonPosition.Before to listOf(icon),
                                    AddonPosition.After to listOf(icon)
                                )
                            )
                        } else {
                            AddonSlotManager()
                        }

                        Button(
                            text = "Button",
                            appearance = previewAppearance,
                            shape = previewShape,
                            enabled = enabled,
                            addons = previewAddons,
                            onClick = {}
                        )
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
    onCheckedChange: (Boolean) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = Spacing.component.md),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            modifier = Modifier.weight(Weight.full),
            text = label
        )
        HorizontalSpacer(Space.sm)
        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange
        )
    }
}
