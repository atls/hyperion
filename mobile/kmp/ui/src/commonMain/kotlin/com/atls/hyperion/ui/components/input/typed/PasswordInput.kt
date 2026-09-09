package com.atls.hyperion.ui.components.input.typed

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
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.eye
import com.atls.hyperion.ui.generated.resources.eye_closed
import com.atls.hyperion.ui.generated.resources.input_password_hide
import com.atls.hyperion.ui.generated.resources.input_password_placeholder
import com.atls.hyperion.ui.generated.resources.input_password_show
import com.atls.hyperion.ui.generated.resources.lock
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.shared.addon.ActionAddon
import com.atls.hyperion.ui.shared.addon.IconAddon
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.stringResource

@Composable
fun PasswordInput(
    modifier: Modifier = Modifier,
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    isError: Boolean = false,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    appearance: InputAppearance = InputAppearance.primary(),
    shape: InputShape = InputShape.md(),
    addons: AddonSlotManager = passwordAddons,
    showPasswordIcon: DrawableResource = Res.drawable.eye,
    hidePasswordIcon: DrawableResource = Res.drawable.eye_closed,
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = stringResource(Res.string.input_password_placeholder),
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    errorText: @Composable (() -> Unit)? = null,
    defaultVisible: Boolean = false,
    visible: Boolean? = null,
    onVisibilityChange: ((Boolean) -> Unit)? = null
) {
    var internalVisible by remember { mutableStateOf(defaultVisible) }
    val resolvedVisible = visible ?: internalVisible
    val visibilityLabel = stringResource(
        if (resolvedVisible) {
            Res.string.input_password_hide
        } else {
            Res.string.input_password_show
        }
    )
    val visibilityIcon = if (resolvedVisible) {
        hidePasswordIcon
    } else {
        showPasswordIcon
    }
    val afterAddons = addons.get(AddonPosition.After) + if (value.text.isNotEmpty()) {
        listOf(
            ActionAddon(
                addon = IconAddon(visibilityIcon),
                contentDescription = visibilityLabel,
                enabled = enabled
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
        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = if (resolvedVisible) {
            VisualTransformation.None
        } else {
            PasswordVisualTransformation()
        },
        addons = AddonSlotManager(
            addons = addons.addons + (AddonPosition.After to afterAddons)
        ),
        placeholder = placeholder,
        helperText = helperText,
        errorText = errorText
    )
}

private val passwordAddons = AddonSlotManager(
    addons = mapOf(
        AddonPosition.Before to listOf(
            IconAddon(Res.drawable.lock)
        )
    )
)
