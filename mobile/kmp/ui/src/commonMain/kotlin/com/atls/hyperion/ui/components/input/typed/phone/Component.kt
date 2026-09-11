package com.atls.hyperion.ui.components.input.typed.phone

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.input_phone_placeholder
import com.atls.hyperion.ui.generated.resources.phone
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.shared.addon.IconAddon
import org.jetbrains.compose.resources.stringResource

@Composable
fun PhoneInput(
    modifier: Modifier = Modifier,
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    region: String,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    isError: Boolean = false,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    appearance: InputAppearance = InputAppearance.primary(),
    shape: InputShape = InputShape.md(),
    visualTransformation: VisualTransformation = rememberPhoneNumberVisualTransformation(region),
    addons: AddonSlotManager = phoneAddons,
    validator: ((String) -> Boolean)? = { isValidPhoneNumber(it, region) },
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = stringResource(Res.string.input_phone_placeholder),
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    errorText: @Composable (() -> Unit)? = null
) {
    val hasError = isError || validator?.invoke(value.text) == false

    Input(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        interactionSource = interactionSource,
        isError = hasError,
        enabled = enabled,
        readOnly = readOnly,
        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Phone),
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = visualTransformation,
        addons = addons,
        placeholder = placeholder,
        helperText = helperText.takeUnless { hasError },
        errorText = (errorText ?: helperText).takeIf { hasError }
    )
}

private val phoneAddons = AddonSlotManager(
    addons = mapOf(
        AddonPosition.Before to listOf(
            IconAddon(Res.drawable.phone)
        )
    )
)
