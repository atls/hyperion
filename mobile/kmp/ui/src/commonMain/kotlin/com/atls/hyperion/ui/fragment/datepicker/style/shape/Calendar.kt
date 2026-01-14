package com.atls.hyperion.ui.fragment.datepicker.style.shape

import androidx.compose.foundation.layout.PaddingValues
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.fragment.datepicker.model.DividerPosition

data class CalendarShape(
    val padding: PaddingValues,
    val divider: DividerPosition = DividerPosition.NONE,
    val dividerShape: DividerShape,
    val modalShape: ModalShape
) {
    companion object
}
