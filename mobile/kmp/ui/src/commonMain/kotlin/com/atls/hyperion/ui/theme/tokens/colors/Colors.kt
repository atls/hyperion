package com.atls.hyperion.ui.theme.tokens.colors

import androidx.compose.ui.graphics.Color

object Colors {
    object Palette {
        val blue = Color(0xFF416DDF)
        val blueProtective = Color(0xFF1890FF)
        val white = Color(0xFFFFFFFF)
        val red = Color(0xFFFF2F2F)
        val green = Color(0xFF34C51D)
        val gray = Color(0xFFF5F5F5)
        val black = Color(0xFF000000)
        val blackThreeQuarters = Color(0xBF000000)
        val lightPurple = Color(0xFFDADEED)
        val transparent = Color.Transparent
    }

    object Text {
        val white = Color(0xFFFFFFFF)
        val black = Color(0xFF252525)
        val almostBlack = Color(0xFF475467)
        val masala = Color(0xFF3E3E3E)
        val gray = Color(0xFF81869A)
        val regularGray = Color(0xFFB8B8B8)
        val normalGray = Color(0xFF85868A)
        val warmGray = Color(0xFF8A8A8A)
        val darkGray = Color(0xFFA0A0A0)
        val deepGray = Color(0xFF696969)
        val lightGray = Color(0xFFD4D4D4)
        val shadylady = Color(0xFFA7A7A7)
        val blue = Color(0xFF184DD7)
        val lightBlue = Color(0xCC184DD7)
        val softBlue = Color(0xFF416DDF)
        val red = Color(0xFFFF2F2F)
        val green = Color(0xFF34C51D)
    }

    object Button {
        object Blue {
            val Default = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF416DDF),
                border = Color(0x00000000)
            )
            val Pressed = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF0042EC),
                border = Color(0x00000000)
            )
            val Disabled = ColorSet(
                font = Color(0xFF8A8A8A),
                background = Color(0xFF2D2D2D),
                border = Color(0x00000000)
            )
        }

        object LightBlue {
            val Default = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF54A9EB),
                border = Color(0x00000000)
            )
            val Pressed = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF54A9EB),
                border = Color(0x00000000)
            )
            val Disabled = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFFDDDDDD),
                border = Color(0x00000000)
            )
        }
    }

    object Input {
        object Blue {
            val Default = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF416DDF),
                border = Color(0x00000000)
            )
            val Focus = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF0042EC),
                border = Color(0x00000000)
            )
            val Active = ColorSet(
                font = Color(0xFFFFFFFF),
                background = Color(0xFF0042EC),
                border = Color(0x00000000)
            )
            val Disabled = ColorSet(
                font = Color(0xFF8A8A8A),
                background = Color(0xFFD4D4D4),
                border = Color(0x00000000)
            )
        }

        object White {
            val Default = ColorSet(
                font = Color(0xFF000000),
                background = Color(0xFFD4D4D4),
                border = Color(0x00000000)
            )
            val Focus = ColorSet(
                font = Color(0xFF000000),
                background = Color(0xFFD4D4D4),
                border = Color(0xFF000000)
            )
            val Active = ColorSet(
                font = Color(0xFF000000),
                background = Color(0xFFD4D4D4),
                border = Color(0x00000000)
            )
            val Disabled = ColorSet(
                font = Color(0xFF000000),
                background = Color(0xFF475467),
                border = Color(0x00000000)
            )
        }
    }
}
