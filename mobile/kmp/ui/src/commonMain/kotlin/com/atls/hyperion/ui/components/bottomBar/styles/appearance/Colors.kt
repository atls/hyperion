package com.atls.hyperion.ui.components.bottomBar.styles.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.tokens.colors.Alpha

sealed class Colors {
    abstract val backgroundColor: Color
    abstract val dividerColor: Color
    abstract val tabColors: TabColors

    sealed class TabColors {
        abstract val activeColor: Color
        abstract val inactiveColor: Color
        abstract val rippleColor: Color

        data class WithLabel(
            override val activeColor: Color,
            override val inactiveColor: Color,
            val activeLabelColor: Color,
            val inactiveLabelColor: Color,
            override val rippleColor: Color = activeColor.copy(alpha = Alpha.micro)
        ) : TabColors()

        data class WithoutLabel(
            override val activeColor: Color,
            override val inactiveColor: Color,
            override val rippleColor: Color = activeColor.copy(alpha = Alpha.micro)
        ) : TabColors()
    }

    data class Default(
        override val backgroundColor: Color,
        override val dividerColor: Color,
        override val tabColors: TabColors
    ) : Colors()
}
