package com.atls.hyperion.ui.components.list

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.list.model.SelectionState
import com.atls.hyperion.ui.components.list.style.appearance.ListAppearance
import com.atls.hyperion.ui.components.list.style.appearance.default
import com.atls.hyperion.ui.components.list.style.shape.ListShape
import com.atls.hyperion.ui.components.list.style.shape.flowRow
import com.atls.hyperion.ui.primitives.VerticalSpacer

@Composable
fun <ID> SelectableList(
    modifier: Modifier = Modifier,
    items: List<Pair<ID, @Composable (onClick: () -> Unit, isSelected: Boolean) -> Unit>>,
    selectionState: SelectionState<ID>,
    onItemClick: (ID) -> Unit,
    appearance: ListAppearance = ListAppearance.default(),
    shape: ListShape = ListShape.flowRow()
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(color = appearance.backgroundColor)
            .padding(shape.paddings)
    ) {
        items.forEach { (id, itemContent) ->
            val isSelected = selectionState.isSelected(id)
            itemContent({ onItemClick(id) }, isSelected)
            VerticalSpacer(shape.spacing)
        }
    }
}
