package com.atls.hyperion.ui.components.input.typed.password

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.typed.actionAddon
import com.atls.hyperion.ui.components.input.typed.iconAddon
import com.atls.hyperion.ui.components.input.typed.withInputSlots
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.eye
import com.atls.hyperion.ui.generated.resources.eye_closed
import com.atls.hyperion.ui.generated.resources.lock
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
fun PasswordInput(
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
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = "Enter password",
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    error: @Composable (() -> Unit)? = null,
    defaultVisible: Boolean = false,
    visible: Boolean? = null,
    showLabel: String = "Show password",
    hideLabel: String = "Hide password",
    onVisibilityChange: ((Boolean) -> Unit)? = null
) {
    var internalVisible by remember { mutableStateOf(defaultVisible) }
    val resolvedVisible = visible ?: internalVisible
    val trailingAddons = if (value.text.isNotEmpty()) {
        listOf(
            actionAddon(
                resource = if (resolvedVisible) Res.drawable.eye_closed else Res.drawable.eye,
                label = if (resolvedVisible) hideLabel else showLabel,
                enabled = enabled,
                shape = shape
            ) {
                val nextVisible = !resolvedVisible

                if (visible == null) {
                    internalVisible = nextVisible
                }
                onVisibilityChange?.invoke(nextVisible)
            }
        )
    } else {
        emptyList()
    }

    Input(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        interactionSource = interactionSource,
        isError = isError,
        enabled = enabled,
        readOnly = readOnly,
        keyboardOptions = keyboardOptions.copy(keyboardType = KeyboardType.Password),
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = if (resolvedVisible) {
            VisualTransformation.None
        } else {
            PasswordVisualTransformation()
        },
        addons = AddonSlotManager().withInputSlots(
            before = listOf(iconAddon(Res.drawable.lock, shape)),
            after = trailingAddons
        ),
        placeholder = placeholder,
        helperText = helperText,
        error = error
    )
}
