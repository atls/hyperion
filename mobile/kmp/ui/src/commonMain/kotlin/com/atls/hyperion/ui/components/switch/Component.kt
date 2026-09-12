package com.atls.hyperion.ui.components.switch

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.selection.toggleable
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.LocalContentAlpha
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.switch.styles.appearance.SwitchAppearance
import com.atls.hyperion.ui.components.switch.styles.appearance.default
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape
import com.atls.hyperion.ui.components.switch.styles.shape.sm
import com.atls.hyperion.ui.components.switch.styles.shape.switchThumbHalfWidth
import com.atls.hyperion.ui.components.switch.styles.shape.switchThumbWidth
import com.atls.hyperion.ui.primitives.elevation

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
    val source = interactionSource ?: remember { MutableInteractionSource() }
    val isPressed by source.collectIsPressedAsState()
    val isFocused by source.collectIsFocusedAsState()
    val states = if (checked) appearance.on else appearance.off
    val colors = when {
        !enabled -> states.disabled
        isPressed -> states.pressed
        isFocused -> states.focused
        else -> states.default
    }
    val colorAnimationSpec = tween<Color>(
        durationMillis = SWITCH_TRANSITION_DURATION_MILLIS
    )
    val background by animateColorAsState(
        targetValue = colors.background,
        animationSpec = colorAnimationSpec,
        label = "Switch background"
    )
    val border by animateColorAsState(
        targetValue = colors.border,
        animationSpec = colorAnimationSpec,
        label = "Switch border"
    )
    val thumbColor by animateColorAsState(
        targetValue = colors.thumb,
        animationSpec = colorAnimationSpec,
        label = "Switch thumb"
    )
    val trackShape = RoundedCornerShape(shape.cornerRadius)

    Box(
        modifier = modifier
            .width(shape.width)
            .elevation(
                elevation = shape.elevation,
                backgroundColor = background,
                shape = trackShape
            )
            .border(
                width = shape.borderWidth,
                color = border,
                shape = trackShape
            )
            .toggleable(
                value = checked,
                enabled = enabled,
                role = Role.Switch,
                interactionSource = source,
                indication = null,
                onValueChange = onCheckedChange
            )
            .padding(shape.borderWidth)
            .padding(shape.paddings),
        contentAlignment = Alignment.CenterStart
    ) {
        CompositionLocalProvider(
            LocalContentColor provides thumbColor,
            LocalContentAlpha provides 1f
        ) {
            BoxWithConstraints(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.CenterStart
            ) {
                val hasCustomThumb = thumb != null
                val targetOffset = when {
                    checked && hasCustomThumb -> maxWidth - shape.thumbSize
                    checked -> maxWidth - switchThumbHalfWidth
                    hasCustomThumb -> 0.dp
                    else -> -switchThumbHalfWidth
                }
                val offset by animateDpAsState(
                    targetValue = targetOffset,
                    animationSpec = tween(durationMillis = SWITCH_TRANSITION_DURATION_MILLIS),
                    label = "Switch thumb offset"
                )
                val rotation by animateFloatAsState(
                    targetValue = if (checked) {
                        SWITCH_CHECKED_ROTATION_DEGREES
                    } else {
                        SWITCH_UNCHECKED_ROTATION_DEGREES
                    },
                    animationSpec = tween(durationMillis = SWITCH_TRANSITION_DURATION_MILLIS),
                    label = "Switch thumb rotation"
                )
                val thumbModifier = Modifier
                    .offset(x = offset)
                    .graphicsLayer { rotationZ = rotation }
                    .clearAndSetSemantics { }

                if (thumb == null) {
                    Box(
                        modifier = thumbModifier
                            .width(switchThumbWidth)
                            .height(shape.thumbSize)
                            .background(LocalContentColor.current, CircleShape)
                    )
                } else {
                    Box(
                        modifier = thumbModifier.size(shape.thumbSize),
                        contentAlignment = Alignment.Center,
                        content = { thumb() }
                    )
                }
            }
        }
    }
}
