package com.atls.hyperion.ui.components.bottomBar.styles.shape

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.theme.tokens.Elevation
import com.atls.hyperion.ui.theme.tokens.components.BottomBarSize
import com.atls.hyperion.ui.theme.tokens.components.IconSize
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight
import com.atls.hyperion.ui.theme.typography.NunitoSansFontFamily

@Composable
fun BottomBarShape.WithLabel.Companion.default() =
    BottomBarShape.WithLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.zero,
        cornerRadius = CornerRadius.zero,
        dividerWidth = BorderStroke.tiny,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium,
        labelPadding = Space.xs4,
        labelTypography = TextStyle(
            fontSize = FontSize.xs3,
            fontWeight = FontWeight.medium,
            fontFamily = NunitoSansFontFamily()
        )
    )

@Composable
fun BottomBarShape.WithLabel.Companion.elevated() =
    BottomBarShape.WithLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.medium,
        cornerRadius = CornerRadius.zero,
        dividerWidth = BorderStroke.none,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium,
        labelPadding = Space.xs4,
        labelTypography = TextStyle(
            fontSize = FontSize.xs3,
            fontWeight = FontWeight.medium,
            fontFamily = NunitoSansFontFamily()
        )
    )

@Composable
fun BottomBarShape.WithLabel.Companion.rounded() =
    BottomBarShape.WithLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.tiny,
        cornerRadius = CornerRadius.xl2_5,
        dividerWidth = BorderStroke.none,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium,
        labelPadding = Space.xs4,
        labelTypography = TextStyle(
            fontSize = FontSize.xs3,
            fontWeight = FontWeight.medium,
            fontFamily = NunitoSansFontFamily()
        )
    )

fun BottomBarShape.WithoutLabel.Companion.default() =
    BottomBarShape.WithoutLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.zero,
        cornerRadius = CornerRadius.zero,
        dividerWidth = 1.dp,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium
    )

fun BottomBarShape.WithoutLabel.Companion.elevated() =
    BottomBarShape.WithoutLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.medium,
        cornerRadius = CornerRadius.zero,
        dividerWidth = BorderStroke.none,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium
    )

fun BottomBarShape.WithoutLabel.Companion.rounded() =
    BottomBarShape.WithoutLabel(
        height = BottomBarSize.defaultHeight,
        elevation = Elevation.tiny,
        cornerRadius = CornerRadius.xl2_5,
        dividerWidth = BorderStroke.none,
        tabSpacing = Space.xs2,
        iconSize = IconSize.medium
    )
