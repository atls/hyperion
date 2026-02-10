package com.atls.hyperion.ui.components.switch.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
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
import com.atls.hyperion.ui.components.switch.styles.shape.medium
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Weight

class SwitchStory : ComponentExample {
    override val name: String = "Switch"

    @Composable
    override fun Content() {
        var checked by remember { mutableStateOf(false) }
        var enabled by remember { mutableStateOf(true) }

        Column {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = Space.sm),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(modifier = Modifier.weight(Weight.full), text = "Enabled")
                HorizontalSpacer(Space.sm)
                androidx.compose.material.Switch(
                    checked = enabled,
                    onCheckedChange = { enabled = it }
                )
            }
            VerticalSpacer(Space.xs2)
            ComponentVariants(
                name = "Switch",
                appearances = listOf(
                    "Primary" to { SwitchAppearance.default() }
                ),
                shapes = listOf(
                    "Medium" to { SwitchShape.medium() }
                )
            ) { appearance: SwitchAppearance, shape: SwitchShape ->
                Switch(
                    checked = checked,
                    disabled = !enabled,
                    appearance = appearance,
                    shape = shape,
                    onCheckedChange = { checked = it }
                )
            }
        }
    }
}
