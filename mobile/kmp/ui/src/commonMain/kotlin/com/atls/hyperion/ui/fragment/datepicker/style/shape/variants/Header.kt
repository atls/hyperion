package com.atls.hyperion.ui.fragment.datepicker.style.shape.variants

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.fragment.datepicker.style.shape.HeaderShape
import com.atls.hyperion.ui.primitives.icon.IconSize
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight

@Composable
fun HeaderShape.Companion.default(): HeaderShape =
    HeaderShape(
        typography = TextStyle(
            fontSize = FontSize.md,
            fontWeight = FontWeight.bold,
        ),
        spacing = Space.g12,
        iconSize = IconSize.medium,
        horizontalPadding = Space.g12
    )
