package com.atls.hyperion.ui.fragments.datepicker.style.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance

data class DatePickerAppearance(
    val cellAppearance: CellAppearance,
    val headerAppearance: HeaderAppearance,
    val weekDaysAppearance: WeekDaysAppearance,
    val backgroundColor: Color,
    val dividerColor: Color,
    val dividerAppearance: DividerAppearance,
    val modalAppearance: ModalAppearance
) {
    companion object
}
