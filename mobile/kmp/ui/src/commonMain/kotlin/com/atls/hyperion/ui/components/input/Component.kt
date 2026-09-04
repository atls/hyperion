package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.tokens.layout.Weight

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
    InputLayout(
        modifier = modifier,
        value = value,
        interactionSource = interactionSource,
        isError = isError,
        enabled = enabled,
        appearance = appearance,
        shape = shape,
        addons = addons
    ) { colors ->
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
                .background(Color.Transparent)
                .weight(Weight.full)
        )
    }
}
