package com.atls.hyperion.ui.fragment.datepicker.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import com.atls.hyperion.ui.components.divider.horizontal.HorizontalDivider
import com.atls.hyperion.ui.fragment.datepicker.model.CalendarDivider
import com.atls.hyperion.ui.fragment.datepicker.style.appearance.DatepickerAppearance
import com.atls.hyperion.ui.fragment.datepicker.style.shape.DatepickerShape
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.chevron_left
import com.atls.hyperion.ui.generated.resources.chevron_right
import com.atls.hyperion.ui.primitives.Icon
import org.jetbrains.compose.resources.painterResource


@Composable
fun CalendarHeader(
    monthName: String,
    appearance: DatepickerAppearance,
    shape: DatepickerShape,
    beforeIcon: Painter = painterResource(Res.drawable.chevron_left),
    afterIcon: Painter = painterResource(Res.drawable.chevron_right),
    arrangement: Arrangement.Horizontal = Arrangement.SpaceBetween,
    alignment: Alignment.Vertical = Alignment.CenterVertically,
    onPrevMonth: () -> Unit,
    onNextMonth: () -> Unit,
) {
    if (shape.divider == CalendarDivider.TOP) {
        HorizontalDivider(
            appearance = appearance.dividerAppearance,
            shape = shape.dividerShape
        )
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(shape.headerHorizontalPadding),
        horizontalArrangement = arrangement,
        verticalAlignment = alignment
    ) {
        Icon(
            icon = beforeIcon,
            size = shape.headerIconSize,
            modifier = Modifier.clickable { onPrevMonth() },
            color = appearance.colors.arrowColor
        )

        Text(
            text = monthName,
            style = shape.headerTypography,
            color = appearance.colors.headerTextColor
        )

        Icon(
            icon = afterIcon,
            size = shape.headerIconSize,
            modifier = Modifier.clickable { onNextMonth() },
            color = appearance.colors.arrowColor
        )
    }

    if (shape.divider == CalendarDivider.BOTTOM) {
        HorizontalDivider(
            appearance = appearance.dividerAppearance,
            shape = shape.dividerShape
        )
    }
}
