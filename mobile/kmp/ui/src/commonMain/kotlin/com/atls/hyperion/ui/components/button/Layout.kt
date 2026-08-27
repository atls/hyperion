package com.atls.hyperion.ui.components.button

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.button.locals.LocalState
import com.atls.hyperion.ui.components.button.state.ButtonState
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

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
    val isFocused = interactionSource.collectIsFocusedAsState().value

    val state = when {
        !enabled -> ButtonState.Disabled
        isPressed -> ButtonState.Pressed
        isFocused -> ButtonState.Focused
        else -> ButtonState.Default
    }
    val elevation = when (state) {
        ButtonState.Default -> shape.elevations.default
        ButtonState.Pressed -> shape.elevations.pressed
        ButtonState.Disabled -> shape.elevations.disabled
        ButtonState.Focused -> shape.elevations.disabled
    }

    CompositionLocalProvider(LocalState provides state) {
        ButtonContainer(
            modifier = modifier,
            enabled = enabled,
            interactionSource = interactionSource,
            colors = appearance.fromState(state),
            elevation = elevation,
            shape = shape,
            onClick = onClick
        ) {
            ButtonContent(
                addons = addons,
                shape = shape,
                content = content
            )
        }
    }
}
