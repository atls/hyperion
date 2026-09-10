package com.atls.hyperion.ui.components.switch.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.LocalContentColor
import androidx.compose.material.Switch as MaterialSwitch
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.switch.Switch
import com.atls.hyperion.ui.components.switch.styles.appearance.SwitchAppearance
import com.atls.hyperion.ui.components.switch.styles.appearance.default
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape
import com.atls.hyperion.ui.components.switch.styles.shape.lg
import com.atls.hyperion.ui.components.switch.styles.shape.md
import com.atls.hyperion.ui.components.switch.styles.shape.sm
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.chevron_right
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.primitives.icon.Icon
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.tokens.layout.Weight
import com.atls.hyperion.ui.theme.tokens.layout.Spacing
import org.jetbrains.compose.resources.painterResource

class SwitchStory : ComponentExample {
    override val name: String = "Switch"

    @Composable
    override fun Content() {
        var darkTheme by remember { mutableStateOf(false) }
        var checked by remember { mutableStateOf(false) }
        var focused by remember { mutableStateOf(false) }
        var customThumb by remember { mutableStateOf(false) }
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
                        label = "Checked",
                        checked = checked,
                        onCheckedChange = { checked = it }
                    )
                    Toggle(
                        label = "Focused preview",
                        checked = focused,
                        onCheckedChange = { focused = it }
                    )
                    Toggle(
                        label = "Custom thumb",
                        checked = customThumb,
                        onCheckedChange = { customThumb = it }
                    )
                    Toggle(
                        label = "Enabled",
                        checked = enabled,
                        onCheckedChange = { enabled = it }
                    )
                    VerticalSpacer(Spacing.component.sm)

                    ComponentVariants(
                        name = "Switch",
                        appearances = listOf(
                            "Default" to { SwitchAppearance.default() }
                        ),
                        shapes = listOf(
                            "Sm" to { SwitchShape.sm() },
                            "Md" to { SwitchShape.md() },
                            "Lg" to { SwitchShape.lg() }
                        )
                    ) { appearance: SwitchAppearance, shape: SwitchShape ->
                        val previewAppearance = if (focused) {
                            appearance.copy(
                                off = appearance.off.copy(default = appearance.off.focused),
                                on = appearance.on.copy(default = appearance.on.focused)
                            )
                        } else {
                            appearance
                        }
                        val thumb: (@Composable () -> Unit)? = if (customThumb) {
                            {
                                Icon(
                                    icon = painterResource(Res.drawable.chevron_right),
                                    color = LocalContentColor.current,
                                    size = shape.thumbSize
                                )
                            }
                        } else {
                            null
                        }

                        Switch(
                            checked = checked,
                            onCheckedChange = { checked = it },
                            enabled = enabled,
                            appearance = previewAppearance,
                            shape = shape,
                            thumb = thumb
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
    onCheckedChange: (Boolean) -> Unit,
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
        HorizontalSpacer(Spacing.component.sm)
        MaterialSwitch(
            checked = checked,
            onCheckedChange = onCheckedChange
        )
    }
}
