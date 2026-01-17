package com.atls.hyperion.ui.fragments.datepicker.style.shape.variants

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.fragments.datepicker.style.shape.HeaderShape
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
        spacing = com.atls.hyperion.ui.theme.tokens.layout.Space.sm,
        iconSize = IconSize.medium,
        horizontalPadding = com.atls.hyperion.ui.theme.tokens.layout.Space.sm
    )
