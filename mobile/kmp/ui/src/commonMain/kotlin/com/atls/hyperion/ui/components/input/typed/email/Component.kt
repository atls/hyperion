package com.atls.hyperion.ui.components.input.typed.email

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.typed.iconAddon
import com.atls.hyperion.ui.components.input.typed.withInputSlots
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.email
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
fun EmailInput(
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
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = "Enter email",
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    error: @Composable (() -> Unit)? = null
) {
    Input(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        interactionSource = interactionSource,
        isError = isError,
        enabled = enabled,
        readOnly = readOnly,
        keyboardOptions = keyboardOptions.copy(
            capitalization = KeyboardCapitalization.None,
            autoCorrectEnabled = false,
            keyboardType = KeyboardType.Email
        ),
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = visualTransformation,
        addons = addons.withInputSlots(
            before = listOf(iconAddon(Res.drawable.email, shape))
        ),
        placeholder = placeholder,
        helperText = helperText,
        error = error
    )
}
