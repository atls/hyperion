package com.atls.hyperion.ui.components.button.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.properties.BorderStroke
import com.atls.hyperion.ui.theme.properties.CornerRadius
import com.atls.hyperion.ui.theme.properties.Padding

@Composable
fun ButtonShape.Companion.large(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.regular,
        paddings = PaddingValues(
            horizontal = Padding.semiLarge,
            vertical = Padding.small
        ),
        typography = Theme.typography.body.regular.large,
        borderStroke = BorderStroke.tiny
    )

@Composable
fun ButtonShape.Companion.default(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.small,
        paddings = PaddingValues(
            horizontal = Padding.medium,
            vertical = Padding.xsmall
        ),
        typography = Theme.typography.caption.regular.large,
        borderStroke = BorderStroke.tiny
    )

@Composable
fun ButtonShape.Companion.rounded(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.full,
        paddings = PaddingValues(Padding.xsmall),
        typography = Theme.typography.caption.regular.large,
        borderStroke = BorderStroke.none
    )

@Composable
fun ButtonShape.Companion.activity(): ButtonShape =
    ButtonShape(
        cornerRadius = CornerRadius.medium,
        paddings = PaddingValues(Padding.medium),
        typography = Theme.typography.body.regular.medium,
        borderStroke = BorderStroke.none
    )
