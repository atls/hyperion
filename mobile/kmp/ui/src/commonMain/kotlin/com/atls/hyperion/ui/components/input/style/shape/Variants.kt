package com.atls.hyperion.ui.components.input.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize

@Composable
fun InputShape.Companion.large(): InputShape =
    InputShape(
        cornerRadius = CornerRadius.md,
        borderStroke = BorderStroke.tiny,
        paddings = PaddingValues(
            vertical = Space.sm,
            horizontal = Space.lg
        ),
        textPaddings = PaddingValues(Space.zero),
        typography = TextStyle(fontSize = FontSize.md)
    )

@Composable
fun InputShape.Companion.normal(): InputShape =
    InputShape(
        cornerRadius = CornerRadius.xs3,
        borderStroke = BorderStroke.tiny,
        paddings = PaddingValues(
            vertical = Space.xs2,
            horizontal = Space.sm
        ),
        textPaddings = PaddingValues(
            vertical = Space.xs4,
            horizontal = Space.zero
        ),
        typography = TextStyle(fontSize = FontSize.sm)
    )
