package com.atls.hyperion.ui.components.input

import androidx.compose.material.LocalContentColor
import androidx.compose.material.LocalTextStyle
import androidx.compose.material3.LocalContentColor as Material3ContentColor
import androidx.compose.material3.LocalTextStyle as Material3TextStyle
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.LocalHyperionColors
import com.atls.hyperion.ui.theme.LocalHyperionTypography
import com.atls.hyperion.ui.theme.tokens.layout.Spacing

@Composable
internal fun InputMessage(
    isError: Boolean,
    content: @Composable () -> Unit
) {
    val colors = LocalHyperionColors.current
    val color = if (isError) colors.status.error else colors.text.secondary
    val textStyle = LocalHyperionTypography.current.overline

    VerticalSpacer(Spacing.component.xs)
    CompositionLocalProvider(
        LocalContentColor provides color,
        LocalTextStyle provides textStyle,
        Material3ContentColor provides color,
        Material3TextStyle provides textStyle
    ) {
        content()
    }
}
