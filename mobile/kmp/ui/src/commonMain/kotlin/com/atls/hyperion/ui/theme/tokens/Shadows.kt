package com.atls.hyperion.ui.theme.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

data class Shadow(
    val offsetX: Dp,
    val offsetY: Dp,
    val blur: Dp,
    val color: Color,
    val spread: Dp = 0.dp
)

object Shadows {
    val gunsmoke = Shadow(0.dp, 0.dp, 1.dp, Color(0x1A878787))
    val gray = Shadow(0.dp, 1.dp, 1.dp, Color(0x17878787))
    val grey = Shadow((-1).dp, 2.dp, 2.dp, Color(0x0D878787))
    val suvagray = Shadow((-1).dp, 4.dp, 2.dp, Color(0x03878787))
    val oslogray = Shadow((-2).dp, 7.dp, 2.dp, Color(0x03878787))
    val black = Shadow((-1).dp, 1.dp, 2.dp, Color(0x1A000000))
    val codgray = Shadow((-2).dp, 3.dp, 3.dp, Color(0x17000000))
    val woodsmoke = Shadow((-5).dp, 6.dp, 5.dp, Color(0x0D000000))
    val asphalt = Shadow((-8).dp, 11.dp, 6.dp, Color(0x03000000))
    val marshland = Shadow((-13).dp, 17.dp, 6.dp, Color(0x00000000))
    val bunker = Shadow(1.dp, 1.dp, 1.dp, Color(0x0A0A0A0A))
    val nero = Shadow(0.dp, 2.dp, 6.dp, Color(0x14000000))
    val diesel = Shadow(0.dp, 2.dp, 32.dp, Color(0x0D000000))
    val gordonsgreen = Shadow(0.dp, 2.dp, 24.3.dp, Color(0x26000000))
    val jaguar = Shadow(0.dp, 6.dp, 48.dp, Color(0x14000000))
    val midnightmoss = Shadow(0.dp, 0.dp, 80.dp, Color(0x14000000))
    val cinder = Shadow((-1).dp, 4.dp, 20.dp, Color(0x26000000))
    val darkgray = Shadow((-7).dp, 0.dp, 20.dp, Color(0x1AA9A9A9))
    val portage = Shadow(10.dp, 0.dp, 20.dp, Color(0x6686A1EB))
    val blackforest = Shadow(0.dp, 4.dp, 20.dp, Color(0x26000000))
    val greenwaterloo = Shadow(0.dp, 2.5.dp, 2.dp, Color(0x05000000))
    val crowshead = Shadow(0.dp, 3.dp, 5.dp, Color(0x0A000000))
    val bluecharcoal = Shadow(0.dp, 8.dp, 10.dp, Color(0x14000000))
    val vulcan = Shadow(0.dp, 1.dp, 24.dp, Color(0x1F000000))
    val nightrider = Shadow(0.dp, 0.dp, 16.dp, Color(0x0F000000))
    val transparentGray = Shadow((-78).dp, 127.dp, 59.dp, Color(0x03A3A3A3))
    val lightTransparentGray = Shadow((-44).dp, 71.dp, 50.dp, Color(0x08A3A3A3))
    val mediumTransparentGray = Shadow((-19).dp, 32.dp, 37.dp, Color(0x0DA3A3A3))
    val normalTransparentGray = Shadow((-5).dp, 8.dp, 20.dp, Color(0x0FA3A3A3))
    val regularTransparentGray = Shadow(0.dp, 4.dp, 6.dp, Color(0x08101828), spread = (-2).dp)
    val regularGray = Shadow(0.dp, 12.dp, 16.dp, Color(0x14101828), spread = (-4).dp)
}
