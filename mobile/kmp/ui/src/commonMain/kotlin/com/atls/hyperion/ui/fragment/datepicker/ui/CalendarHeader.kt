package com.atls.hyperion.ui.fragment.datepicker.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import com.atls.hyperion.ui.components.divider.horizontal.HorizontalDivider
import com.atls.hyperion.ui.fragment.datepicker.model.DividerPosition
import com.atls.hyperion.ui.fragment.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragment.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.chevron_left
import com.atls.hyperion.ui.generated.resources.chevron_right
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.primitives.icon.Icon
import org.jetbrains.compose.resources.painterResource

@Composable
fun CalendarHeader(
    monthName: String,
    appearance: DatePickerAppearance,
    shape: DatePickerShape,
    beforeIcon: Painter = painterResource(Res.drawable.chevron_left),
    afterIcon: Painter = painterResource(Res.drawable.chevron_right),
    arrangement: Arrangement.Horizontal = Arrangement.SpaceBetween,
    alignment: Alignment.Vertical = Alignment.CenterVertically,
    onPrevMonth: () -> Unit,
    onNextMonth: () -> Unit,
) {
    if (shape.calendarShape.divider == DividerPosition.TOP) {
        HorizontalDivider(
            appearance = appearance.dividerAppearance,
            shape = shape.calendarShape.dividerShape
        )
        VerticalSpacer(shape.headerShape.spacing)
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = shape.headerShape.horizontalPadding),
        horizontalArrangement = arrangement,
        verticalAlignment = alignment
    ) {
        Icon(
            icon = beforeIcon,
            size = shape.headerShape.iconSize,
            modifier = Modifier.clickable { onPrevMonth() },
            color = appearance.headerAppearance.arrowColor
        )

        Text(
            text = monthName,
            typography = shape.headerShape.typography,
            color = appearance.headerAppearance.textColor
        )

        Icon(
            icon = afterIcon,
            size = shape.headerShape.iconSize,
            modifier = Modifier.clickable { onNextMonth() },
            color = appearance.headerAppearance.arrowColor
        )
    }

    if (shape.calendarShape.divider == DividerPosition.BOTTOM) {
        VerticalSpacer(shape.headerShape.spacing)
        HorizontalDivider(
            appearance = appearance.dividerAppearance,
            shape = shape.calendarShape.dividerShape
        )
    }
}
