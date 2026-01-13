package com.atls.hyperion.ui.components.toast.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors

fun ToastAppearance.Companion.default(): ToastAppearance =
    ToastAppearance(
        backgroundColor = Colors.Palette.white,
        textColor = Colors.Palette.black,
        borderColor = Colors.Palette.gray
    )
