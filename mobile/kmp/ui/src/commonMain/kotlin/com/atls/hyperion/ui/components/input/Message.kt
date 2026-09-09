package com.atls.hyperion.ui.components.input

import androidx.compose.material.LocalContentColor
import androidx.compose.material.ProvideTextStyle
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

    VerticalSpacer(Spacing.component.xs)
    CompositionLocalProvider(
        LocalContentColor provides if (isError) colors.status.error else colors.text.secondary
    ) {
        ProvideTextStyle(
            value = LocalHyperionTypography.current.overline,
            content = content
        )
    }
}
