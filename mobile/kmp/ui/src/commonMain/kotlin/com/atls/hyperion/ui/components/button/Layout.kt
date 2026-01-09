package com.atls.hyperion.ui.components.button

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.LocalMinimumInteractiveComponentEnforcement
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.button.locals.LocalState
import com.atls.hyperion.ui.components.button.state.ButtonState
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.Colors
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.tokens.Elevation

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun ButtonLayout(
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    appearance: ButtonAppearance,
    shape: ButtonShape,
    addons: AddonSlotManager = AddonSlotManager(),
    onClick: () -> Unit,
    content: @Composable () -> Unit
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isPressed = interactionSource.collectIsPressedAsState().value

    val state = when {
        !enabled -> ButtonState.Disabled
        isPressed -> ButtonState.Pressed
        else -> ButtonState.Default
    }
    val colors = appearance.fromState(state)

    CompositionLocalProvider(
        LocalState provides state,
        LocalMinimumInteractiveComponentEnforcement provides false
    ) {
        Button(
            onClick = onClick,
            shape = RoundedCornerShape(shape.cornerRadius),
            colors = ButtonDefaults.buttonColors(
                backgroundColor = when (colors) {
                    is Colors.Solid -> colors.backgroundColor
                    is Colors.Gradient -> Color.Transparent
                },
                contentColor = colors.textColor,
                disabledBackgroundColor = when (colors) {
                    is Colors.Solid -> colors.backgroundColor
                    is Colors.Gradient -> Color.Transparent
                },
                disabledContentColor = colors.textColor
            ),
            border = BorderStroke(shape.borderStroke, colors.borderColor),
            contentPadding = shape.paddings,
            enabled = enabled,
            elevation = ButtonDefaults.elevation(
                defaultElevation = Elevation.zero,
                pressedElevation = Elevation.zero,
                disabledElevation = Elevation.zero
            ),
            interactionSource = interactionSource,
            modifier = modifier
                .shadow(
                    elevation = appearance.shadowElevation,
                    shape = RoundedCornerShape(shape.cornerRadius),
                    clip = false
                )
                .then(
                    if (colors is Colors.Gradient) {
                        Modifier.background(
                            colors.backgroundBrush,
                            RoundedCornerShape(shape.cornerRadius)
                        )
                    } else Modifier
                )
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                addons.get(AddonPosition.Before).forEach {
                    it.Content()
                    it.Spacer()
                }

                content()

                addons.get(AddonPosition.After).forEach {
                    it.Spacer()
                    it.Content()
                }
            }
        }
    }
}
