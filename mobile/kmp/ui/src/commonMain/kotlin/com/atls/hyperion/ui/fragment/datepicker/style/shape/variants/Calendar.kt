package com.atls.hyperion.ui.fragment.datepicker.style.shape.variants

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.divider.style.shape.default
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.components.modal.style.shape.popup
import com.atls.hyperion.ui.fragment.datepicker.model.DividerPosition
import com.atls.hyperion.ui.fragment.datepicker.style.shape.CalendarShape
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun CalendarShape.Companion.default(): CalendarShape =
    CalendarShape(
        padding = PaddingValues(Space.g12),
        divider = DividerPosition.BOTTOM,
        dividerShape = DividerShape.default(),
        modalShape = ModalShape.popup()
    )
