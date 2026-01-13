package com.atls.hyperion.ui.components.modal.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun ModalAppearance.Companion.default(): ModalAppearance =
    ModalAppearance(
        backgroundColor = Colors.Palette.white
    )
