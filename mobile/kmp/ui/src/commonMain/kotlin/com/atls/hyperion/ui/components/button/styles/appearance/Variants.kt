package com.atls.hyperion.ui.components.button.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors
import com.atls.hyperion.ui.components.button.styles.appearance.Colors as ButtonColors

fun ButtonAppearance.Companion.blue(): ButtonAppearance =
    ButtonAppearance(
        default = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.Blue.Default.background,
            textColor = LegacyColors.Button.Blue.Default.font,
            borderColor = LegacyColors.Button.Blue.Default.border
        ),
        pressed = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.Blue.Pressed.background,
            textColor = LegacyColors.Button.Blue.Pressed.font,
            borderColor = LegacyColors.Button.Blue.Pressed.border
        ),
        disabled = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.Blue.Disabled.background,
            textColor = LegacyColors.Button.Blue.Disabled.font,
            borderColor = LegacyColors.Button.Blue.Disabled.border
        )
    )

fun ButtonAppearance.Companion.lightBlue(): ButtonAppearance =
    ButtonAppearance(
        default = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.LightBlue.Default.background,
            textColor = LegacyColors.Button.LightBlue.Default.font,
            borderColor = LegacyColors.Button.LightBlue.Default.border
        ),
        pressed = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.LightBlue.Pressed.background,
            textColor = LegacyColors.Button.LightBlue.Pressed.font,
            borderColor = LegacyColors.Button.LightBlue.Pressed.border
        ),
        disabled = ButtonColors.Solid(
            backgroundColor = LegacyColors.Button.LightBlue.Disabled.background,
            textColor = LegacyColors.Button.LightBlue.Disabled.font,
            borderColor = LegacyColors.Button.LightBlue.Disabled.border
        )
    )
