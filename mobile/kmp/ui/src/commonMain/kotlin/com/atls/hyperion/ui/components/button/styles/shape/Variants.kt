package com.atls.hyperion.ui.components.button.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.LocalHyperionElevations
import com.atls.hyperion.ui.theme.LocalHyperionTypography
import com.atls.hyperion.ui.theme.tokens.borders.BorderWidth
import com.atls.hyperion.ui.theme.tokens.layout.Radii
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

@Composable
fun ButtonShape.Companion.xs(): ButtonShape =
    ButtonShape(
        minHeight = MinHeight.xs,
        cornerRadius = Radii.xs2,
        paddings = PaddingValues(
            horizontal = Spacing.component.sm,
            vertical = Spacing.component.xs
        ),
        typography = LocalHyperionTypography.current.label.sm,
        borderWidth = BorderWidth.sm,
        gap = Spacing.component.xs,
        addonSize = Spacing.component.lg,
        elevations = LocalHyperionElevations.current.xs
    )

@Composable
fun ButtonShape.Companion.sm(): ButtonShape =
    ButtonShape(
        minHeight = MinHeight.sm,
        cornerRadius = Radii.xs2,
        paddings = PaddingValues(
            horizontal = Spacing.component.md,
            vertical = Spacing.component.sm
        ),
        typography = LocalHyperionTypography.current.body.md,
        borderWidth = BorderWidth.sm,
        gap = Spacing.component.md,
        addonSize = Spacing.component.xl,
        elevations = LocalHyperionElevations.current.sm
    )

@Composable
fun ButtonShape.Companion.md(): ButtonShape =
    ButtonShape(
        minHeight = MinHeight.md,
        cornerRadius = Radii.xs2,
        paddings = PaddingValues(
            horizontal = Spacing.component.lg,
            vertical = Spacing.component.md
        ),
        typography = LocalHyperionTypography.current.label.md,
        borderWidth = BorderWidth.sm,
        gap = Spacing.component.lg,
        addonSize = Spacing.component.xl2,
        elevations = LocalHyperionElevations.current.md
    )

@Composable
fun ButtonShape.Companion.lg(): ButtonShape =
    ButtonShape(
        minHeight = MinHeight.lg,
        cornerRadius = Radii.xs2,
        paddings = PaddingValues(
            horizontal = Spacing.component.xl,
            vertical = Spacing.component.sm
        ),
        typography = LocalHyperionTypography.current.label.lg,
        borderWidth = BorderWidth.sm,
        gap = Spacing.component.xl,
        addonSize = Spacing.component.xl2,
        elevations = LocalHyperionElevations.current.lg
    )
