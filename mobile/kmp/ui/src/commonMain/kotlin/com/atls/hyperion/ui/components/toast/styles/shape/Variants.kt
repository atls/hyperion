package com.atls.hyperion.ui.components.toast.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.LineHeights

@Composable
fun ToastShape.Companion.default(): ToastShape =
    ToastShape(
        cornerRadius = CornerRadius.xl2,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g12),
        typography = TextStyle(fontSize = FontSize.md, lineHeight = LineHeights.md),
        borderStroke = BorderStroke.tiny
    )

@Composable
fun ToastShape.Companion.rounded(): ToastShape =
    ToastShape(
        cornerRadius = CornerRadius.xl4,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g12),
        typography = TextStyle(fontSize = FontSize.md, lineHeight = LineHeights.md),
        borderStroke = BorderStroke.tiny
    )

@Composable
fun ToastShape.Companion.square(): ToastShape =
    ToastShape(
        cornerRadius = CornerRadius.zero,
        paddings = PaddingValues(horizontal = Space.g16, vertical = Space.g12),
        typography = TextStyle(fontSize = FontSize.md, lineHeight = LineHeights.md),
        borderStroke = BorderStroke.tiny
    )
