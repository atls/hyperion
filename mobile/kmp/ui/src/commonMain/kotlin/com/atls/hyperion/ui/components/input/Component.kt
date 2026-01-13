package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.container.InputContainer
import com.atls.hyperion.ui.components.input.state.InputState
import com.atls.hyperion.ui.components.input.style.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.style.shape.InputShape
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.tokens.layout.Weight
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

@Composable
fun Input(
    modifier: Modifier = Modifier,
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    isError: Boolean = false,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    appearance: InputAppearance,
    shape: InputShape,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    addons: AddonSlotManager = AddonSlotManager(),
    placeholder: @Composable (() -> Unit)? = null,
) {
    val isFocused = interactionSource.collectIsFocusedAsState().value
    val isPressed = interactionSource.collectIsPressedAsState().value

    val currentState = when {
        !enabled -> InputState.Disabled
        isError -> InputState.Error
        isPressed -> InputState.Active
        isFocused -> InputState.Focused
        value.text.isNotEmpty() -> InputState.Filled
        else -> InputState.Default
    }

    val colors = appearance.getColorsFromState(currentState)

    InputContainer(
        modifier = modifier,
        appearance = appearance,
        shape = shape,
        state = currentState,
        addons = addons
    ) {
        BasicTextField(
            value = value,
            onValueChange = onValueChange,
            enabled = enabled,
            readOnly = readOnly,
            interactionSource = interactionSource,
            keyboardOptions = keyboardOptions,
            keyboardActions = keyboardActions,
            cursorBrush = SolidColor(colors.cursorColor),
            textStyle = shape.typography.copy(color = colors.textColor),
            visualTransformation = visualTransformation,
            decorationBox = { innerTextField ->
                if (value.text.isEmpty() && placeholder != null) {
                    placeholder()
                }
                innerTextField()
            },
            modifier = Modifier
                .background(ThemeColors.Palette.transparent)
                .padding(shape.textPaddings)
                .weight(Weight.full)
        )
    }
}
