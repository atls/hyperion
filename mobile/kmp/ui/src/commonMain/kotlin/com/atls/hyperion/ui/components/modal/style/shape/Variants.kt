package com.atls.hyperion.ui.components.modal.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.Elevation
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun ModalShape.Companion.popup(): ModalShape =
    ModalShape(
        shape = RoundedCornerShape(CornerRadius.zero),
        shadowElevation = Elevation.tiny,
        paddings = PaddingValues(Space.g20),
        spacers = PaddingValues(horizontal = Space.g24)
    )

@Composable
fun ModalShape.Companion.bottom(): ModalShape =
    ModalShape(
        shape = RoundedCornerShape(
            topStart = CornerRadius.xl4,
            topEnd = CornerRadius.xl4,
        ),
        shadowElevation = Elevation.zero,
        paddings = PaddingValues(
            top = Space.g4,
            bottom = Space.g20,
            start = Space.g20,
            end = Space.g20
        ),
        spacers = PaddingValues(horizontal = Space.zero)
    )
