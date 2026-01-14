package com.atls.hyperion.ui.components.button.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.LineHeights

@Composable
fun ButtonShape.Companion.huge(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g24, vertical = Space.g16),
        typography = TextStyle(fontSize = FontSize.xl3, lineHeight = LineHeights.xl4),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.large(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g24, vertical = Space.g14),
        typography = TextStyle(fontSize = FontSize.xl2, lineHeight = LineHeights.xl3),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.semiMedium(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g20, vertical = Space.g12),
        typography = TextStyle(fontSize = FontSize.lg, lineHeight = LineHeights.xl),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.medium(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g10),
        typography = TextStyle(fontSize = FontSize.md, lineHeight = LineHeights.md),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.normal(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g24, vertical = Space.g8),
        typography = TextStyle(fontSize = FontSize.xs, lineHeight = LineHeights.sm),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.small(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g6),
        typography = TextStyle(fontSize = FontSize.xs, lineHeight = LineHeights.xs),
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.smallSizeMediumRadii(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.xl2_5,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g6),
        typography = TextStyle(fontSize = FontSize.xs, lineHeight = LineHeights.xs),
        borderStroke = BorderStroke.none
    )
