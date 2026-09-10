package com.atls.hyperion.ui.components.switch

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.switch.styles.appearance.SwitchAppearance
import com.atls.hyperion.ui.components.switch.styles.appearance.default
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape
import com.atls.hyperion.ui.components.switch.styles.shape.sm

@Composable
fun Switch(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    appearance: SwitchAppearance = SwitchAppearance.default(),
    shape: SwitchShape = SwitchShape.sm(),
    interactionSource: MutableInteractionSource? = null,
    thumb: (@Composable () -> Unit)? = null,
) {
    SwitchLayout(
        checked = checked,
        onCheckedChange = onCheckedChange,
        modifier = modifier,
        enabled = enabled,
        appearance = appearance,
        shape = shape,
        interactionSource = interactionSource ?: remember { MutableInteractionSource() },
        thumb = thumb
    )
}
