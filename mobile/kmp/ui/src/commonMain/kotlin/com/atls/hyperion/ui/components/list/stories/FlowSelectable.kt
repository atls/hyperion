package com.atls.hyperion.ui.components.list.stories

import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.list.FlowSelectableList
import com.atls.hyperion.ui.components.list.item.TextListItem
import com.atls.hyperion.ui.components.list.item.model.ListItemState
import com.atls.hyperion.ui.components.list.item.style.appearance.TextListItemAppearance
import com.atls.hyperion.ui.components.list.item.style.appearance.default
import com.atls.hyperion.ui.components.list.item.style.shape.TextListItemShape
import com.atls.hyperion.ui.components.list.item.style.shape.default
import com.atls.hyperion.ui.components.list.model.SelectionState
import com.atls.hyperion.ui.components.list.style.appearance.ListAppearance
import com.atls.hyperion.ui.components.list.style.appearance.default
import com.atls.hyperion.ui.components.list.style.shape.ListShape
import com.atls.hyperion.ui.components.list.style.shape.flowRow

@Composable
fun FlowSelectableListVariants() {
    val flowItems = listOf("Apple", "Banana", "Orange", "Mango", "Peach", "Grapes")
    var flowSelectionState by remember {
        mutableStateOf<SelectionState<String>>(
            SelectionState.Multiple(emptySet())
        )
    }

    ComponentVariants(
        name = "FlowSelectableList",
        appearances = listOf("Default" to { ListAppearance.default() }),
        shapes = listOf("FlowRow" to { ListShape.flowRow() })
    ) { appearance, shape ->
        FlowSelectableList(
            items = flowItems.map { id ->
                id to @Composable { onClick: () -> Unit, isSelected: Boolean ->
                    TextListItem(
                        modifier = Modifier.width(IntrinsicSize.Min),
                        text = id,
                        state = if (isSelected) ListItemState.Selected else ListItemState.Unselected,
                        onClick = onClick,
                        appearance = TextListItemAppearance.default(),
                        shape = TextListItemShape.default()
                    )
                }
            },
            selectionState = flowSelectionState,
            onItemClick = { id ->
                val current =
                    (flowSelectionState as SelectionState.Multiple).selectedItems.toMutableSet()
                if (current.contains(id)) current.remove(id) else current.add(id)
                flowSelectionState = SelectionState.Multiple(current)
            },
            appearance = appearance,
            shape = shape
        )
    }
}
