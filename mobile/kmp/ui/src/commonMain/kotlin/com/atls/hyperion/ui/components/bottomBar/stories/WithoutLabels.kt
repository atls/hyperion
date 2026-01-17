package com.atls.hyperion.ui.components.bottomBar.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.bottomBar.BottomBar
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.BottomBarAppearance
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.darkWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.primaryWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.appearance.secondaryWithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.BottomBarShape.WithoutLabel
import com.atls.hyperion.ui.components.bottomBar.styles.shape.default
import com.atls.hyperion.ui.components.bottomBar.styles.shape.elevated
import com.atls.hyperion.ui.components.bottomBar.styles.shape.rounded

@Composable
fun BottomBarWithoutLabelsVariants(items: List<com.atls.hyperion.ui.components.bottomBar.model.BottomBarItem>, tabPosition: Arrangement.Horizontal) {
    ComponentVariants(
        name = "BottomBar (Without Labels)",
        appearances = listOf(
            "Primary" to { BottomBarAppearance.primaryWithoutLabel() },
            "Secondary" to { BottomBarAppearance.secondaryWithoutLabel() },
            "Dark" to { BottomBarAppearance.darkWithoutLabel() }
        ),
        shapes = listOf(
            "Default" to { WithoutLabel.default() },
            "Rounded" to { WithoutLabel.rounded() },
            "Elevated" to { WithoutLabel.elevated() }
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
