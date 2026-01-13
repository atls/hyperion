package com.atls.hyperion.ui.components.bottomBar

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.bottomBar.model.BottomBarItem
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.BottomBarAppearance
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.primary
import com.atls.hyperion.ui.components.bottomBar.styles.shape.BottomBarShape

@Composable
fun BottomBar(
    modifier: Modifier = Modifier,
    appearance: BottomBarAppearance = BottomBarAppearance.primary(),
    shape: BottomBarShape,
    tabArrangement: Arrangement.Horizontal,
    content: @Composable RowScope.() -> Unit
) {
    Surface(
        modifier = modifier.fillMaxWidth(),
        elevation = shape.elevation,
        shape = shape.shape
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .background(appearance.colors.backgroundColor)
                .height(shape.height)
                .padding(horizontal = shape.tabSpacing),
            horizontalArrangement = tabArrangement,
            verticalAlignment = Alignment.CenterVertically
        ) {
            content()
        }
    }
}

@Composable
fun BottomBar(
    items: List<BottomBarItem>,
    selectedItemIndex: Int,
    onItemClick: (Int) -> Unit,
    modifier: Modifier = Modifier,
    appearance: BottomBarAppearance = BottomBarAppearance.primary(),
    shape: BottomBarShape,
    tabArrangement: Arrangement.Horizontal
) {
    BottomBar(
        modifier = modifier,
        appearance = appearance,
        shape = shape,
        tabArrangement = tabArrangement
    ) {
        items.forEachIndexed { index, item ->
            BottomBarTab(
                icon = item.icon,
                label = item.label,
                selected = index == selectedItemIndex,
                onClick = { onItemClick(index) },
                appearance = appearance,
                shape = shape
            )
        }
    }
}
