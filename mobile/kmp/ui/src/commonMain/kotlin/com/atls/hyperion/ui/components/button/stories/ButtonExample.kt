package com.atls.hyperion.ui.components.button.stories

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.style.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.style.appearance.ButtonAppearanceColors
import com.atls.hyperion.ui.components.button.style.shape.ButtonShape
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.theme.tokens.colors.Colors

class ButtonExample : ComponentExample {
    override val name: String = "Button"

    @Composable
    override fun Content() {
        ComponentVariants(
            name = "Button",
            appearances = listOf(
                "Primary Blue" to { primaryAppearance() },
                "Light Blue" to { lightBlueAppearance() }
            ),
            shapes = listOf(
                "Large" to { largeShape() },
                "Medium" to { mediumShape() }
            )
        ) { appearance: ButtonAppearance, shape: ButtonShape ->
            Button(
                text = "Button",
                appearance = appearance,
                shape = shape,
                onClick = {}
            )
        }
    }
}

@Composable
private fun primaryAppearance() = ButtonAppearance(
    default = ButtonAppearanceColors(
        backgroundColor = Colors.Button.Blue.Default.background,
        textColor = Colors.Button.Blue.Default.font,
        borderColor = Colors.Button.Blue.Default.border
    ),
    pressed = ButtonAppearanceColors(
        backgroundColor = Colors.Button.Blue.Pressed.background,
        textColor = Colors.Button.Blue.Pressed.font,
        borderColor = Colors.Button.Blue.Pressed.border
    ),
    disabled = ButtonAppearanceColors(
        backgroundColor = Colors.Button.Blue.Disabled.background,
        textColor = Colors.Button.Blue.Disabled.font,
        borderColor = Colors.Button.Blue.Disabled.border
    )
)

@Composable
private fun lightBlueAppearance() = ButtonAppearance(
    default = ButtonAppearanceColors(
        backgroundColor = Colors.Button.LightBlue.Default.background,
        textColor = Colors.Button.LightBlue.Default.font,
        borderColor = Colors.Button.LightBlue.Default.border
    ),
    pressed = ButtonAppearanceColors(
        backgroundColor = Colors.Button.LightBlue.Pressed.background,
        textColor = Colors.Button.LightBlue.Pressed.font,
        borderColor = Colors.Button.LightBlue.Pressed.border
    ),
    disabled = ButtonAppearanceColors(
        backgroundColor = Colors.Button.LightBlue.Disabled.background,
        textColor = Colors.Button.LightBlue.Disabled.font,
        borderColor = Colors.Button.LightBlue.Disabled.border
    )
)

@Composable
private fun largeShape() = ButtonShape(
    cornerRadius = 8.dp,
    paddings = PaddingValues(16.dp, 12.dp),
    typography = TextStyle(),
    borderStroke = 1.dp
)

@Composable
private fun mediumShape() = ButtonShape(
    cornerRadius = 4.dp,
    paddings = PaddingValues(12.dp, 8.dp),
    typography = TextStyle(),
    borderStroke = 1.dp
)
