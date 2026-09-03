package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.RowScope
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import com.atls.hyperion.ui.components.input.locals.LocalState
import com.atls.hyperion.ui.components.input.state.InputState
import com.atls.hyperion.ui.components.input.styles.appearance.Colors
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.tokens.borders.BorderWidth

@Composable
fun InputLayout(
    modifier: Modifier = Modifier,
    value: TextFieldValue,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    isError: Boolean = false,
    enabled: Boolean = true,
    appearance: InputAppearance,
    shape: InputShape,
    addons: AddonSlotManager = AddonSlotManager(),
    content: @Composable RowScope.(colors: Colors) -> Unit
) {
    val isFocused = interactionSource.collectIsFocusedAsState().value
    val isPressed = interactionSource.collectIsPressedAsState().value
    val state = when {
        !enabled -> InputState.Disabled
        isError -> InputState.Error
        isPressed -> InputState.Active
        isFocused -> InputState.Focused
        value.text.isNotEmpty() -> InputState.Filled
        else -> InputState.Default
    }
    val elevation = if (appearance.elevated) {
        when (state) {
            InputState.Filled -> shape.elevations.pressed
            InputState.Active,
            InputState.Error,
            InputState.Focused -> shape.elevations.default

            InputState.Default,
            InputState.Disabled -> null
        }
    } else {
        null
    }
    val colors = appearance.getColorsFromState(state)
    val borderWidth = if (state == InputState.Focused) {
        BorderWidth.md
    } else {
        shape.borderWidth
    }

    CompositionLocalProvider(
        LocalState provides state,
        LocalContentColor provides colors.textColor
    ) {
        InputContainer(
            modifier = modifier,
            colors = colors,
            elevation = elevation,
            borderWidth = borderWidth,
            shape = shape
        ) {
            InputContent(
                addons = addons,
                shape = shape
            ) {
                content(colors)
            }
        }
    }
}
