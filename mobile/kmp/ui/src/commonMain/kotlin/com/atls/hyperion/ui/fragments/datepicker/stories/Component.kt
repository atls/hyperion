package com.atls.hyperion.ui.fragments.datepicker.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.fragments.datepicker.DatePicker
import com.atls.hyperion.ui.fragments.datepicker.model.DateSelection

class DatePickerStory(
    override val name: String = "Date picker"
) : ComponentExample {

    @Composable
    override fun Content() {
        var selection by remember {
            mutableStateOf<DateSelection>(DateSelection.Single(null))
        }

        Column(Modifier.padding(16.dp)) {
            Text(
                text = when (val s = selection) {
                    is DateSelection.Single -> "Selected: ${s.date ?: "null"}"
                    else -> "Unexpected state"
                }
            )

            DatePicker(
                selection = selection,
                onSelectionChange = { selection = it },
                onDismiss = {}
            )
        }
    }
}

class DateRangePickerStory(
    override val name: String = "Date range picker"
) : ComponentExample {

    @Composable
    override fun Content() {
        var selection by remember {
            mutableStateOf<DateSelection>(DateSelection.Range(null, null))
        }

        Column(Modifier.padding(16.dp)) {
            Text(
                text = when (val s = selection) {
                    is DateSelection.Range -> "From: ${s.start ?: "null"}  To: ${s.end ?: "null"}"
                    else -> "Unexpected state"
                }
            )

            DatePicker(
                selection = selection,
                onSelectionChange = { selection = it },
                onDismiss = {}
            )
        }
    }
}
