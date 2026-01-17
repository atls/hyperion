package com.atls.hyperion.ui.components.list.stories

import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.list.VerticalList
import com.atls.hyperion.ui.components.list.item.TextListItem
import com.atls.hyperion.ui.components.list.item.model.ListItemState
import com.atls.hyperion.ui.components.list.item.style.appearance.TextListItemAppearance
import com.atls.hyperion.ui.components.list.item.style.appearance.default
import com.atls.hyperion.ui.components.list.item.style.shape.TextListItemShape
import com.atls.hyperion.ui.components.list.item.style.shape.default
import com.atls.hyperion.ui.components.list.style.appearance.ListAppearance
import com.atls.hyperion.ui.components.list.style.appearance.default
import com.atls.hyperion.ui.components.list.style.shape.ListShape
import com.atls.hyperion.ui.components.list.style.shape.flowRow
import com.atls.hyperion.ui.primitives.VerticalSpacer

@Composable
fun VerticalListVariants() {
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
}
