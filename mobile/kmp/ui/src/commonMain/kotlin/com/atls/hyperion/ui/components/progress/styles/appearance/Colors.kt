package com.atls.hyperion.ui.components.progress.styles.appearance

import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

sealed class Colors {
    abstract val trailColor: Color

    sealed class Single : Colors() {
        data class Solid(
            val strokeColor: Color,
            override val trailColor: Color
        ) : Single()

        data class Gradient(
            val strokeBrush: Brush,
            override val trailColor: Color
        ) : Single()
    }

    sealed class Multiple : Colors() {
        data class Solid(
            val strokeColors: List<Color>,
            override val trailColor: Color
        ) : Multiple()

        data class Gradient(
            val strokeBrushes: List<Brush>,
            override val trailColor: Color
        ) : Multiple()
    }
}
