package com.atls.hyperion.ui.fragments.datepicker

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.modal.popup.Popup
import com.atls.hyperion.ui.fragments.datepicker.model.DateSelection
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.default
import com.atls.hyperion.ui.fragments.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.fragments.datepicker.style.shape.default
import com.atls.hyperion.ui.fragments.datepicker.ui.DatePickerContent

@Composable
fun DatePicker(
    modifier: Modifier = Modifier,
    selection: DateSelection,
    onSelectionChange: (DateSelection) -> Unit,
    onDismiss: () -> Unit,
    appearance: DatePickerAppearance = DatePickerAppearance.default(),
    shape: DatePickerShape = DatePickerShape.default()
) {
    Popup(
        modifier = modifier,
        onDismissRequest = onDismiss
    ) {
        DatePickerContent(
            selection = selection,
            onSelectionChange = onSelectionChange,
            appearance = appearance,
            shape = shape
        )
    }
}
