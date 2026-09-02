package com.atls.hyperion.ui.components.input.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.LocalHyperionElevations
import com.atls.hyperion.ui.theme.LocalHyperionTypography
import com.atls.hyperion.ui.theme.tokens.borders.BorderWidth
import com.atls.hyperion.ui.theme.tokens.layout.Radii
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

@Composable
fun InputShape.Companion.sm(): InputShape =
    InputShape(
        minWidth = MinWidth.sm,
        minHeight = MinHeight.sm,
        cornerRadius = Radii.xs,
        borderWidth = BorderWidth.sm,
        paddings = PaddingValues(
            horizontal = Spacing.component.md,
            vertical = Spacing.component.sm
        ),
        typography = LocalHyperionTypography.current.body.md,
        elevations = LocalHyperionElevations.current.xs
    )

@Composable
fun InputShape.Companion.md(): InputShape =
    InputShape(
        minWidth = MinWidth.md,
        minHeight = MinHeight.md,
        cornerRadius = Radii.xs,
        borderWidth = BorderWidth.sm,
        paddings = PaddingValues(
            horizontal = Spacing.component.lg,
            vertical = Spacing.component.md
        ),
        typography = LocalHyperionTypography.current.body.lg,
        elevations = LocalHyperionElevations.current.sm
    )

@Composable
fun InputShape.Companion.lg(): InputShape =
    InputShape(
        minWidth = MinWidth.lg,
        minHeight = MinHeight.lg,
        cornerRadius = Radii.xs,
        borderWidth = BorderWidth.sm,
        paddings = PaddingValues(
            horizontal = Spacing.component.xl,
            vertical = Spacing.component.lg
        ),
        typography = LocalHyperionTypography.current.body.lg,
        elevations = LocalHyperionElevations.current.md
    )
