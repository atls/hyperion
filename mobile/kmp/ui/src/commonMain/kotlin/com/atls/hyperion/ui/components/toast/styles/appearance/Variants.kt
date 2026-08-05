package com.atls.hyperion.ui.components.toast.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

fun ToastAppearance.Companion.default(): ToastAppearance =
    ToastAppearance(
        backgroundColor = LegacyColors.Palette.white,
        textColor = LegacyColors.Palette.black,
        borderColor = LegacyColors.Palette.gray
    )
