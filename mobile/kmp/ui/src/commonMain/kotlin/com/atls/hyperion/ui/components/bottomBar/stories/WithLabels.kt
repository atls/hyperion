package com.atls.hyperion.ui.components.bottomBar.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.bottomBar.BottomBar
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.BottomBarAppearance
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.dark
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.primary
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.secondary
import com.atls.hyperion.ui.components.bottomBar.styles.shape.BottomBarShape.WithLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.default
import com.atls.hyperion.ui.components.bottomBar.styles.shape.elevated
import com.atls.hyperion.ui.components.bottomBar.styles.shape.rounded

@Composable
fun BottomBarWithLabelsVariants(items: List<com.atls.hyperion.ui.components.bottomBar.model.BottomBarItem>, tabPosition: Arrangement.Horizontal) {
    ComponentVariants(
        name = "BottomBar (With Labels)",
        appearances = listOf(
            "Primary" to { BottomBarAppearance.primary() },
            "Secondary" to { BottomBarAppearance.secondary() },
            "Dark" to { BottomBarAppearance.dark() }
        ),
        shapes = listOf(
            "Default" to { WithLabel.default() },
            "Elevated" to { WithLabel.elevated() },
            "Rounded" to { WithLabel.rounded() }
        )
    ) { appearance, shape ->
        val selectedIndex = remember { mutableStateOf(0) }
        BottomBar(
            items,
            selectedIndex.value,
            { selectedIndex.value = it },
            appearance = appearance,
            shape = shape,
            tabArrangement = tabPosition
        )
    }
}
