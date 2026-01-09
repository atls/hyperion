package com.atls.hyperion.ui.components.button.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.components.button.styles.appearance.Colors as ButtonColors

fun ButtonAppearance.Companion.blue(): ButtonAppearance =
    ButtonAppearance(
        default = ButtonColors.Solid(
            backgroundColor = Colors.Button.Blue.Default.background,
            textColor = Colors.Button.Blue.Default.font,
            borderColor = Colors.Button.Blue.Default.border
        ),
        pressed = ButtonColors.Solid(
            backgroundColor = Colors.Button.Blue.Pressed.background,
            textColor = Colors.Button.Blue.Pressed.font,
            borderColor = Colors.Button.Blue.Pressed.border
        ),
        disabled = ButtonColors.Solid(
            backgroundColor = Colors.Button.Blue.Disabled.background,
            textColor = Colors.Button.Blue.Disabled.font,
            borderColor = Colors.Button.Blue.Disabled.border
        )
    )

fun ButtonAppearance.Companion.lightBlue(): ButtonAppearance =
    ButtonAppearance(
        default = ButtonColors.Solid(
            backgroundColor = Colors.Button.LightBlue.Default.background,
            textColor = Colors.Button.LightBlue.Default.font,
            borderColor = Colors.Button.LightBlue.Default.border
        ),
        pressed = ButtonColors.Solid(
            backgroundColor = Colors.Button.LightBlue.Pressed.background,
            textColor = Colors.Button.LightBlue.Pressed.font,
            borderColor = Colors.Button.LightBlue.Pressed.border
        ),
        disabled = ButtonColors.Solid(
            backgroundColor = Colors.Button.LightBlue.Disabled.background,
            textColor = Colors.Button.LightBlue.Disabled.font,
            borderColor = Colors.Button.LightBlue.Disabled.border
        )
    )
