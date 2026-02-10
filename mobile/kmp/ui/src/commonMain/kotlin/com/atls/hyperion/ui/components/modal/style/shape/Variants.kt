package com.atls.hyperion.ui.components.modal.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Elevation
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun ModalShape.Companion.popup(): ModalShape =
    ModalShape(
        shape = RoundedCornerShape(CornerRadius.zero),
        shadowElevation = Elevation.tiny,
        paddings = PaddingValues(Space.xl),
        spacers = PaddingValues(horizontal = Space.xl3)
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
            top = Space.xs4,
            bottom = Space.xl,
            start = Space.xl,
            end = Space.xl
        ),
        spacers = PaddingValues(horizontal = Space.zero)
    )
