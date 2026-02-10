package com.atls.hyperion.ui.components.bottomBar.stories

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.painter.Painter
import kotlin.math.PI

val homePainter: Painter = object : Painter() {
    override val intrinsicSize = Size(24f, 24f)
    override fun DrawScope.onDraw() {
        drawRect(
            color = Color.Black,
            topLeft = Offset(size.width * 0.2f, size.height * 0.3f),
            size = Size(size.width * 0.6f, size.height * 0.6f)
        )
        drawLine(
            color = Color.Black,
            start = Offset(size.width * 0.2f, size.height * 0.3f),
            end = Offset(size.width * 0.5f, size.height * 0.1f)
        )
        drawLine(
            color = Color.Black,
            start = Offset(size.width * 0.5f, size.height * 0.1f),
            end = Offset(size.width * 0.8f, size.height * 0.3f)
        )
    }
}

val favoritePainter: Painter = object : Painter() {
    override val intrinsicSize = Size(24f, 24f)
    override fun DrawScope.onDraw() {
        val cx = size.width / 2
        val cy = size.height / 2
        val r = size.width / 3
        drawCircle(
            color = Color.Black,
            center = Offset(cx, cy),
            radius = r,
            style = Stroke(2f)
        )
        drawCircle(color = Color.Black, center = Offset(cx, cy), radius = r / 2)
    }
}

val profilePainter: Painter = object : Painter() {
    override val intrinsicSize = Size(24f, 24f)
    override fun DrawScope.onDraw() {
        drawCircle(
            color = Color.Black,
            center = Offset(size.width / 2, size.height * 0.35f),
            radius = size.width * 0.2f
        )
        drawRect(
            color = Color.Black,
            topLeft = Offset(size.width * 0.3f, size.height * 0.5f),
            size = Size(size.width * 0.4f, size.height * 0.4f)
        )
    }
}

val settingsPainter: Painter = object : Painter() {
    override val intrinsicSize = Size(24f, 24f)
    override fun DrawScope.onDraw() {
        drawCircle(
            color = Color.Black,
            center = Offset(size.width / 2, size.height / 2),
            radius = size.width * 0.3f,
            style = Stroke(2f)
        )
        for (i in 0 until 8) {
            val angle = PI * i / 4
            val sx =
                size.width / 2 + (size.width * 0.35f * kotlin.math.cos(angle)).toFloat()
            val sy =
                size.height / 2 + (size.height * 0.35f * kotlin.math.sin(angle)).toFloat()
            val ex =
                size.width / 2 + (size.width * 0.45f * kotlin.math.cos(angle)).toFloat()
            val ey =
                size.height / 2 + (size.height * 0.45f * kotlin.math.sin(angle)).toFloat()
            drawLine(
                color = Color.Black,
                start = Offset(sx, sy),
                end = Offset(ex, ey),
                strokeWidth = 2f
            )
        }
    }
}
