package com.atls.hyperion.ui.fragments.datepicker.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.fragments.datepicker.model.DividerPosition
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke

data class DatePickerShape(
    val cellSpacing: Dp,
    val cellPadding: Dp,
    val cellBorderWidth: Dp = BorderStroke.none,
    val cellBorderColor: Color = Color.Transparent,
    val cellShape: Shape,
    val cellActiveShape: Shape = cellShape,
    val cellRangeShape: Shape = RectangleShape,
    val cellTypography: TextStyle,
    val headerTypography: TextStyle,
    val headerSpacing: Dp,
    val calendarPadding: PaddingValues,
    val dayHeaderTypography: TextStyle,
    val headerIconSize: Dp,
    val headerHorizontalPadding: Dp,
    val divider: DividerPosition = DividerPosition.NONE,
    val dividerShape: DividerShape,
    val modalShape: ModalShape
) {
    companion object Companion
}
