package com.atls.hyperion.ui.components.switch

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.switch.state.SwitchState
import com.atls.hyperion.ui.components.switch.styles.appearance.SwitchAppearance
import com.atls.hyperion.ui.components.switch.styles.appearance.default
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape
import com.atls.hyperion.ui.components.switch.styles.shape.medium

@Composable
fun Switch(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
    disabled: Boolean = false,
    appearance: SwitchAppearance = SwitchAppearance.default(),
    shape: SwitchShape = SwitchShape.medium(),
) {
    val state = remember(checked, disabled) {
        if (disabled) {
            SwitchState.Disabled
        } else {
            if (checked) SwitchState.Checked else SwitchState.Default
        }
    }

    val colors = appearance.fromState(state)

    val thumbOffset by animateDpAsState(
        targetValue = if (checked) shape.trackWidth - shape.thumbSize - shape.thumbPadding else shape.thumbPadding
    )

    Box(
        modifier = modifier
            .size(width = shape.trackWidth, height = shape.trackHeight)
            .clip(RoundedCornerShape(shape.trackHeight / 2))
            .background(colors.trackColor)
            .border(
                width = 1.dp,
                color = colors.trackBorderColor,
                shape = RoundedCornerShape(shape.trackHeight / 2)
            )
            .clickable(
                interactionSource = remember { MutableInteractionSource() },
                indication = null,
                enabled = !disabled
            ) {
                onCheckedChange(!checked)
            },
        contentAlignment = Alignment.CenterStart
    ) {
        Box(
            modifier = Modifier
                .offset(x = thumbOffset)
                .size(shape.thumbSize)
                .clip(RoundedCornerShape(shape.thumbSize / 2))
                .background(colors.thumbColor)
                .border(
                    width = 1.dp,
                    color = colors.thumbBorderColor,
                    shape = RoundedCornerShape(shape.thumbSize / 2)
                )
        )
    }
}
