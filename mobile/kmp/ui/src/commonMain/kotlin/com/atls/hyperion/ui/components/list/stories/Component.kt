package com.atls.hyperion.ui.components.list.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.list.FlowSelectableList
import com.atls.hyperion.ui.components.list.SelectableList
import com.atls.hyperion.ui.components.list.VerticalList
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
import com.atls.hyperion.ui.primitives.VerticalSpacer

class ListStories : ComponentExample {
    override val name: String = "Lists"

    @Composable
    override fun Content() {
        Column {
            val simpleItems = listOf("Item A", "Item B", "Item C")
            ComponentVariants(
                name = "VerticalList",
                appearances = listOf("Default" to { ListAppearance.default() }),
                shapes = listOf("Default" to { ListShape.flowRow() })
            ) { appearance, shape ->
                VerticalList(items = simpleItems) { item ->
                    TextListItem(
                        text = item,
                        state = ListItemState.Unselected,
                        onClick = {},
                        appearance = TextListItemAppearance.default(),
                        shape = TextListItemShape.default()
                    )
                    VerticalSpacer(shape.spacing)
                }
            }

            Spacer(Modifier.height(16.dp))

            val selectableItems = listOf("Item 1", "Item 2")
            var selectionState by remember {
                mutableStateOf<SelectionState<String>>(
                    SelectionState.Multiple(
                        emptySet()
                    )
                )
            }
            ComponentVariants(
                name = "SelectableList",
                appearances = listOf("Default" to { ListAppearance.default() }),
                shapes = listOf("FlowRow" to { ListShape.flowRow() })
            ) { appearance, shape ->
                SelectableList(
                    items = selectableItems.map { id ->
                        id to @Composable { onClick: () -> Unit, isSelected: Boolean ->
                            TextListItem(
                                text = id,
                                state = if (isSelected) ListItemState.Selected else ListItemState.Unselected,
                                onClick = onClick,
                                appearance = TextListItemAppearance.default(),
                                shape = TextListItemShape.default()
                            )
                        }
                    },
                    selectionState = selectionState,
                    onItemClick = { id ->
                        val current =
                            (selectionState as SelectionState.Multiple).selectedItems.toMutableSet()
                        if (current.contains(id)) current.remove(id) else current.add(id)
                        selectionState = SelectionState.Multiple(current)
                    },
                    appearance = appearance,
                    shape = shape
                )
            }

            Spacer(Modifier.height(16.dp))

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

            Spacer(Modifier.height(32.dp))
        }
    }
}
