package com.atls.hyperion.ui.components.tooltip.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.unit.DpSize
import com.atls.hyperion.ui.components.tooltip.style.CaretSize
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space

fun TooltipShape.Companion.default() =
    TooltipShape(
        cornerRadius = CornerRadius.xl2,
        caretSize = DpSize(
            height = CaretSize.caretHeight,
            width = CaretSize.caretWidth
        ),
        padding = PaddingValues(
            vertical = Space.xs2
        )
    )
