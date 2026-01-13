package com.atls.hyperion.ui.components.placeholder.styles.shape

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.primitives.icon.IconSize
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight
import com.atls.hyperion.ui.theme.typography.NunitoSansFontFamily

@Composable
fun PlaceholderShape.Companion.imageBox(): PlaceholderShape =
    PlaceholderShape(
        iconSize = IconSize.large,
        typography = TextStyle(
            fontFamily = NunitoSansFontFamily(),
            fontWeight = FontWeight.bold,
            fontSize = FontSize.xl
        ),
        spacing = Space.xs2
    )

@Composable
fun PlaceholderShape.Companion.logo(): PlaceholderShape =
    PlaceholderShape(
        iconSize = IconSize.large,
        typography = TextStyle(
            fontFamily = NunitoSansFontFamily(),
            fontWeight = FontWeight.bold,
            fontSize = FontSize.xl
        ),
        spacing = Space.xs2
    )
