package com.atls.hyperion.ui.components.input.typed

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.input_placeholder
import com.atls.hyperion.ui.generated.resources.search
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.shared.addon.IconAddon
import org.jetbrains.compose.resources.stringResource

@Composable
fun SearchInput(
    modifier: Modifier = Modifier,
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    isError: Boolean = false,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    appearance: InputAppearance = InputAppearance.primary(),
    shape: InputShape = InputShape.md(),
    visualTransformation: VisualTransformation = VisualTransformation.None,
    addons: AddonSlotManager = searchAddons,
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = stringResource(Res.string.input_placeholder),
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    errorText: @Composable (() -> Unit)? = null
) {
    Input(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        interactionSource = interactionSource,
        isError = isError,
        enabled = enabled,
        readOnly = readOnly,
        keyboardOptions = keyboardOptions.copy(imeAction = ImeAction.Search),
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = visualTransformation,
        addons = addons,
        placeholder = placeholder,
        helperText = helperText,
        errorText = errorText
    )
}

private val searchAddons = AddonSlotManager(
    addons = mapOf(
        AddonPosition.Before to listOf(
            IconAddon(Res.drawable.search)
        )
    )
)
