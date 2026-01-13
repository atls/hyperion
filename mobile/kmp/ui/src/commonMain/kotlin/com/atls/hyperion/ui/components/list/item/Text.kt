package com.atls.hyperion.ui.components.list.item

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.list.item.model.ListItemState
import com.atls.hyperion.ui.components.list.item.style.appearance.TextListItemAppearance
import com.atls.hyperion.ui.components.list.item.style.appearance.default
import com.atls.hyperion.ui.components.list.item.style.shape.TextListItemShape
import com.atls.hyperion.ui.components.list.item.style.shape.default
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.shared.addon.AddonPosition.After
import com.atls.hyperion.ui.shared.addon.AddonPosition.Before
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.theme.tokens.layout.Weight

@Composable
fun TextListItem(
    modifier: Modifier = Modifier,
    text: String,
    state: ListItemState,
    onClick: () -> Unit,
    addons: AddonSlotManager = AddonSlotManager(),
    appearance: TextListItemAppearance = TextListItemAppearance.default(),
    shape: TextListItemShape = TextListItemShape.default()
) {
    val colors = appearance.fromState(state)

    Row(
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .background(
                color = colors.backgroundColor,
                shape = RoundedCornerShape(shape.cornerRadius)
            )
            .padding(shape.paddings)
    ) {
        addons.get(Before).forEach {
            it.Content()
            it.Spacer()
        }

        Text(
            modifier = Modifier
                .weight(Weight.full)
                .padding(shape.textPaddings),
            text = text,
            textAlign = shape.textAlign,
            color = colors.textColor,
            typography = shape.typography
        )
        addons.get(After).forEach {
            it.Spacer()
            it.Content()
        }
    }
}
