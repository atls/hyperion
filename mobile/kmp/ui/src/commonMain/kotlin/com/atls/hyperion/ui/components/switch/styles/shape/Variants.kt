package com.atls.hyperion.ui.components.switch.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.LocalHyperionElevations
import com.atls.hyperion.ui.theme.tokens.borders.BorderWidth
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.layout.Radii
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

@Composable
fun SwitchShape.Companion.sm(): SwitchShape =
    createSwitchShape(
        size = SwitchShapeSizes.sm,
        elevation = LocalHyperionElevations.current.sm.pressed
    )

@Composable
fun SwitchShape.Companion.md(): SwitchShape =
    createSwitchShape(
        size = SwitchShapeSizes.md,
        elevation = LocalHyperionElevations.current.md.pressed
    )

@Composable
fun SwitchShape.Companion.lg(): SwitchShape =
    createSwitchShape(
        size = SwitchShapeSizes.lg,
        elevation = LocalHyperionElevations.current.lg.pressed
    )

private fun createSwitchShape(
    size: SwitchShapeSizes.Size,
    elevation: Elevation,
): SwitchShape =
    SwitchShape(
        width = size.width,
        thumbSize = size.thumbSize,
        paddings = PaddingValues(Spacing.component.xs2),
        cornerRadius = Radii.xs3,
        borderWidth = BorderWidth.sm,
        elevation = elevation
    )
