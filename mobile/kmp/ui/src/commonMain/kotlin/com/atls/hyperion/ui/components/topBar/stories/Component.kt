package com.atls.hyperion.ui.components.topBar.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.topBar.TopBar
import com.atls.hyperion.ui.components.topBar.style.appearance.TopBarAppearance
import com.atls.hyperion.ui.components.topBar.style.appearance.default
import com.atls.hyperion.ui.components.topBar.style.shape.TopBarShape
import com.atls.hyperion.ui.components.topBar.style.shape.default

class TopBarStory : ComponentExample {
    override val name: String = "TopBar"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .verticalScroll(rememberScrollState())
                .padding(bottom = 80.dp)
        ) {
            var text by remember { mutableStateOf("TopBar Title") }

            ComponentVariants(
                name = "TopBar Variants",
                appearances = listOf(
                    "Default" to { TopBarAppearance.default() }
                ),
                shapes = listOf(
                    "Default" to { TopBarShape.default() }
                )
            ) { appearance, shape ->
                TopBar(
                    text = text,
                    appearance = appearance,
                    shape = shape
                )
            }

            Spacer(Modifier.height(24.dp))
        }
    }
}
