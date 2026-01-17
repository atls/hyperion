package com.atls.hyperion.ui.components.list

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.list.model.SelectionState
import com.atls.hyperion.ui.components.list.style.appearance.ListAppearance
import com.atls.hyperion.ui.components.list.style.appearance.default
import com.atls.hyperion.ui.components.list.style.shape.ListShape
import com.atls.hyperion.ui.components.list.style.shape.flowRow

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun <ID> FlowSelectableList(
    modifier: Modifier = Modifier,
    items: List<Pair<ID, @Composable (onClick: () -> Unit, isSelected: Boolean) -> Unit>>,
    selectionState: SelectionState<ID>,
    onItemClick: (ID) -> Unit,
    appearance: ListAppearance = ListAppearance.default(),
    shape: ListShape = ListShape.flowRow()
) {
    FlowRow(
        modifier = modifier
            .fillMaxWidth()
            .background(appearance.backgroundColor)
            .padding(shape.paddings),
        verticalArrangement = Arrangement.spacedBy(shape.spacing),
        horizontalArrangement = Arrangement.spacedBy(shape.spacing)
    ) {
        items.forEach { (id, itemContent) ->
            val isSelected = selectionState.isSelected(id)
            itemContent(
                { onItemClick(id) },
                isSelected
            )
        }
    }
}
