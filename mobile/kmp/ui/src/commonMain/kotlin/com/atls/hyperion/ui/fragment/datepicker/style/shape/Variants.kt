package com.atls.hyperion.ui.fragment.datepicker.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.divider.style.shape.default
import com.atls.hyperion.ui.components.modal.style.shape.ModalShape
import com.atls.hyperion.ui.components.modal.style.shape.popup
import com.atls.hyperion.ui.fragment.datepicker.model.DividerPosition
import com.atls.hyperion.ui.primitives.icon.IconSize
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight

@Composable
fun DatePickerShape.Companion.default(): DatePickerShape =
    DatePickerShape(
        cellTypography = TextStyle(
            fontSize = FontSize.xs,
            fontWeight = FontWeight.regular,
        ),
        headerTypography = TextStyle(
            fontSize = FontSize.md,
            fontWeight = FontWeight.bold,
        ),
        dayHeaderTypography = TextStyle(
            fontSize = FontSize.xs2,
            fontWeight = FontWeight.medium,
        ),
        cellSpacing = Space.zero,
        cellPadding = Space.g8,
        cellShape = RoundedCornerShape(CornerRadius.xs2),
        calendarPadding = PaddingValues(Space.g12),
        headerIconSize = IconSize.medium,
        headerSpacing = Space.g12,
        headerHorizontalPadding = Space.g12,
        divider = DividerPosition.BOTTOM,
        dividerShape = DividerShape.default(),
        modalShape = ModalShape.popup()
    )
