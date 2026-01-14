package com.atls.hyperion.ui.fragment.datepicker.style.appearance

import androidx.compose.ui.graphics.Color

data class CellAppearance(
    val backgroundColor: Color,
    val textColor: Color,
    val activeBackgroundColor: Color,
    val activeTextColor: Color,
    val inRangeBackgroundColor: Color,
    val inRangeTextColor: Color,
    val borderColor: Color = Color.Transparent,
    val activeBorderColor: Color = Color.Transparent,
    val inRangeBorderColor: Color = Color.Transparent,
    val headerTextColor: Color
) {
    companion object
}
