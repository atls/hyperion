package com.atls.hyperion.ui.components.switch

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.switch.state.SwitchState
import com.atls.hyperion.ui.components.switch.styles.appearance.SwitchAppearance
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape

@Composable
internal fun SwitchLayout(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier,
    enabled: Boolean,
    appearance: SwitchAppearance,
    shape: SwitchShape,
    interactionSource: MutableInteractionSource,
    thumb: (@Composable () -> Unit)?,
) {
    val isPressed by interactionSource.collectIsPressedAsState()
    val isFocused by interactionSource.collectIsFocusedAsState()
    val state = when {
        !enabled -> SwitchState.Disabled
        isPressed -> SwitchState.Pressed
        isFocused -> SwitchState.Focused
        else -> SwitchState.Default
    }
    val colors = appearance.fromState(checked, state)
    val animationSpec = tween<Color>(
        durationMillis = SWITCH_TRANSITION_DURATION_MILLIS
    )
    val background by animateColorAsState(
        targetValue = colors.background,
        animationSpec = animationSpec,
        label = "Switch background"
    )
    val border by animateColorAsState(
        targetValue = colors.border,
        animationSpec = animationSpec,
        label = "Switch border"
    )
    val thumbColor by animateColorAsState(
        targetValue = colors.thumb,
        animationSpec = animationSpec,
        label = "Switch thumb"
    )

    SwitchContainer(
        checked = checked,
        onCheckedChange = onCheckedChange,
        modifier = modifier,
        enabled = enabled,
        interactionSource = interactionSource,
        background = background,
        border = border,
        thumbColor = thumbColor,
        shape = shape
    ) {
        SwitchContent(
            checked = checked,
            thumbSize = shape.thumbSize,
            thumb = thumb
        )
    }
}
