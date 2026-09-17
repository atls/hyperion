package com.atls.hyperion.ui.components.input.typed

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.cross
import com.atls.hyperion.ui.generated.resources.input_clear
import com.atls.hyperion.ui.generated.resources.input_placeholder
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.shared.addon.ActionAddon
import com.atls.hyperion.ui.shared.addon.IconAddon
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.stringResource

@Composable
fun ClearableInput(
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
    addons: AddonSlotManager = AddonSlotManager(),
    clearIcon: DrawableResource = Res.drawable.cross,
    placeholder: @Composable (() -> Unit)? = {
        InputPlaceholder(
            text = stringResource(Res.string.input_placeholder),
            appearance = appearance,
            shape = shape
        )
    },
    helperText: @Composable (() -> Unit)? = null,
    errorText: @Composable (() -> Unit)? = null,
    onClear: (() -> Unit)? = null
) {
    val clearLabel = stringResource(Res.string.input_clear)
    val trailingAddons = addons.get(AddonPosition.After) + if (
        value.text.isNotEmpty()
    ) {
        listOf(
            ActionAddon(
                addon = IconAddon(clearIcon),
                contentDescription = clearLabel,
                enabled = enabled && !readOnly
            ) {
                onValueChange(TextFieldValue())
                onClear?.invoke()
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
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        appearance = appearance,
        shape = shape,
        visualTransformation = visualTransformation,
        addons = AddonSlotManager(
            addons = addons.addons + (AddonPosition.After to trailingAddons)
        ),
        placeholder = placeholder,
        helperText = helperText,
        errorText = errorText
    )
}
