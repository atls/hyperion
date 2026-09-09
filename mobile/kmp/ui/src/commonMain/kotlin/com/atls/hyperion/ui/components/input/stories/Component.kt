package com.atls.hyperion.ui.components.input.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.LocalContentColor
import androidx.compose.material.Switch
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.appearance.secondary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.lg
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.components.input.styles.shape.sm
import com.atls.hyperion.ui.components.input.typed.ClearableInput
import com.atls.hyperion.ui.components.input.typed.email.EmailInput
import com.atls.hyperion.ui.components.input.typed.PasswordInput
import com.atls.hyperion.ui.components.input.typed.phone.PhoneInput
import com.atls.hyperion.ui.components.input.typed.SearchInput
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Spacing
import com.atls.hyperion.ui.theme.tokens.layout.Weight

class InputStory : ComponentExample {
    override val name: String = "Input"

    @Composable
    override fun Content() {
        var darkTheme by remember { mutableStateOf(false) }
        var enabled by remember { mutableStateOf(true) }
        var isError by remember { mutableStateOf(false) }

        Theme(darkTheme = darkTheme) {
            val colors = LocalHyperionColors.current

            CompositionLocalProvider(LocalContentColor provides colors.text.primary) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(colors.surface.subtle)
                        .verticalScroll(rememberScrollState())
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = Space.sm),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(modifier = Modifier.weight(Weight.full), text = "Dark theme")
                        HorizontalSpacer(Space.sm)
                        Switch(checked = darkTheme, onCheckedChange = { darkTheme = it })
                    }
                    VerticalSpacer(Space.xs2)
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = Space.sm),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(modifier = Modifier.weight(Weight.full), text = "Enabled")
                        HorizontalSpacer(Space.sm)
                        Switch(checked = enabled, onCheckedChange = { enabled = it })
                    }
                    VerticalSpacer(Space.xs2)
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = Space.sm),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(modifier = Modifier.weight(Weight.full), text = "Error")
                        HorizontalSpacer(Space.sm)
                        Switch(checked = isError, onCheckedChange = { isError = it })
                    }
                    VerticalSpacer(Space.sm)

                    ComponentVariants(
                        name = "Input",
                        appearances = listOf(
                            "Primary" to { InputAppearance.primary() },
                            "Secondary" to { InputAppearance.secondary() }
                        ),
                        shapes = listOf(
                            "Sm" to { InputShape.sm() },
                            "Md" to { InputShape.md() },
                            "Lg" to { InputShape.lg() }
                        )
                    ) { appearance: InputAppearance, shape: InputShape ->
                        InputVariant(
                            appearance = appearance,
                            shape = shape,
                            enabled = enabled,
                            isError = isError
                        )
                    }

                    ComponentVariants(
                        name = "Typed inputs",
                        appearances = listOf(
                            "Primary" to { InputAppearance.primary() }
                        ),
                        shapes = listOf(
                            "Md" to { InputShape.md() }
                        )
                    ) { appearance: InputAppearance, shape: InputShape ->
                        TypedInputVariants(
                            appearance = appearance,
                            shape = shape,
                            enabled = enabled,
                            isError = isError
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun InputVariant(
    appearance: InputAppearance,
    shape: InputShape,
    enabled: Boolean,
    isError: Boolean
) {
    var value by remember { mutableStateOf(TextFieldValue("")) }

    Input(
        value = value,
        onValueChange = { value = it },
        appearance = appearance,
        shape = shape,
        enabled = enabled,
        placeholder = {
            InputPlaceholder(
                text = "Placeholder",
                appearance = appearance,
                shape = shape
            )
        },
        helperText = { Text("Helper text") },
        errorText = if (isError) {
            { Text("Error text") }
        } else {
            null
        }
    )
}

@Composable
private fun TypedInputVariants(
    appearance: InputAppearance,
    shape: InputShape,
    enabled: Boolean,
    isError: Boolean
) {
    var clearableValue by remember { mutableStateOf(TextFieldValue("Clear me")) }
    var emailValue by remember { mutableStateOf(TextFieldValue("invalid-email")) }
    var passwordValue by remember { mutableStateOf(TextFieldValue("password")) }
    var phoneValue by remember { mutableStateOf(TextFieldValue("+7 123")) }
    var searchValue by remember { mutableStateOf(TextFieldValue("")) }
    var numericValue by remember { mutableStateOf(TextFieldValue("123")) }
    val errorContent: (@Composable () -> Unit)? = if (isError) {
        { Text("Invalid value") }
    } else {
        null
    }

    Column(verticalArrangement = Arrangement.spacedBy(Spacing.component.md)) {
        ClearableInput(
            value = clearableValue,
            onValueChange = { clearableValue = it },
            modifier = Modifier.fillMaxWidth(),
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Clearable") },
            errorText = errorContent
        )
        EmailInput(
            value = emailValue,
            onValueChange = { emailValue = it },
            modifier = Modifier.fillMaxWidth(),
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Email") },
            errorText = errorContent
        )
        PasswordInput(
            value = passwordValue,
            onValueChange = { passwordValue = it },
            modifier = Modifier.fillMaxWidth(),
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Password") },
            errorText = errorContent
        )
        PhoneInput(
            value = phoneValue,
            onValueChange = { phoneValue = it },
            modifier = Modifier.fillMaxWidth(),
            region = "RU",
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Phone") },
            errorText = errorContent
        )
        SearchInput(
            value = searchValue,
            onValueChange = { searchValue = it },
            modifier = Modifier.fillMaxWidth(),
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Search") },
            errorText = errorContent
        )
        Input(
            value = numericValue,
            onValueChange = { numericValue = it },
            modifier = Modifier.fillMaxWidth(),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
            appearance = appearance,
            shape = shape,
            enabled = enabled,
            helperText = { Text("Numeric") },
            errorText = errorContent
        )
    }
}
