package com.atls.hyperion.ui.components.switch

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.switch.styles.shape.switchThumbHalfWidth
import com.atls.hyperion.ui.components.switch.styles.shape.switchThumbWidth

@Composable
internal fun SwitchContent(
    checked: Boolean,
    thumbSize: Dp,
    thumb: (@Composable () -> Unit)?,
) {
    BoxWithConstraints(
        modifier = Modifier.fillMaxWidth(),
        contentAlignment = Alignment.CenterStart
    ) {
        val hasCustomThumb = thumb != null
        val targetOffset = when {
            checked && hasCustomThumb -> maxWidth - thumbSize
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
                    .height(thumbSize)
                    .background(LocalContentColor.current, CircleShape)
            )
        } else {
            Box(
                modifier = thumbModifier.size(thumbSize),
                contentAlignment = Alignment.Center,
                content = { thumb() }
            )
        }
    }
}
