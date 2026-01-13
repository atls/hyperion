package com.atls.hyperion.ui.fragment.datepicker.style.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance

data class DatePickerAppearance(
    val cellBackgroundColor: Color,
    val cellTextColor: Color,
    val cellActiveBackgroundColor: Color,
    val cellActiveTextColor: Color,
    val cellInRangeBackgroundColor: Color,
    val cellInRangeTextColor: Color,
    val cellBorderColor: Color = Color.Transparent,
    val cellActiveBorderColor: Color = Color.Transparent,
    val cellInRangeBorderColor: Color = Color.Transparent,
    val cellHeaderTextColor: Color,
    val backgroundColor: Color,
    val headerTextColor: Color,
    val weekDaysTextColor: Color = headerTextColor,
    val arrowColor: Color,
    val dividerColor: Color,
    val dividerAppearance: DividerAppearance,
    val modalAppearance: ModalAppearance
) {
    companion object Companion
}
