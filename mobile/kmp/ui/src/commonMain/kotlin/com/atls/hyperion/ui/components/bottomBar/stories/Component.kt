package com.atls.hyperion.ui.components.bottomBar.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.components.bottomBar.model.BottomBarItem
import com.atls.hyperion.ui.theme.tokens.layout.Space

class BottomBarStory : ComponentExample {
    override val name: String = "BottomBar"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .verticalScroll(rememberScrollState())
                .padding(bottom = Space.xl3)
        ) {

            val itemsWithLabels = listOf(
                BottomBarItem(homePainter, "Home"),
                BottomBarItem(favoritePainter, "Favorites"),
                BottomBarItem(profilePainter, "Profile"),
                BottomBarItem(settingsPainter, "Settings")
            )

            val itemsWithoutLabels = itemsWithLabels.map { it.copy(label = null) }

            var tabPosition by remember { mutableStateOf<Arrangement.Horizontal>(Arrangement.Center) }

            Column(modifier = Modifier.fillMaxWidth().padding(Space.md)) {
                Text("Tab Position:")
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(vertical = Space.sm)
                ) {
                    RadioButton(
                        selected = tabPosition == Arrangement.SpaceAround,
                        onClick = { tabPosition = Arrangement.SpaceAround })
                    Text("Space around", modifier = Modifier.padding(start = Space.xs, end = Space.sm))

                    RadioButton(
                        selected = tabPosition == Arrangement.Center,
                        onClick = { tabPosition = Arrangement.Center })
                    Text("Center", modifier = Modifier.padding(start = Space.xs, end = Space.sm))

                    RadioButton(
                        selected = tabPosition == Arrangement.SpaceBetween,
                        onClick = { tabPosition = Arrangement.SpaceBetween })
                    Text("Space between", modifier = Modifier.padding(start = Space.xs))
                }
            }

            BottomBarWithLabelsVariants(itemsWithLabels, tabPosition)

            Spacer(Modifier.height(Space.xl2))

            BottomBarWithoutLabelsVariants(itemsWithoutLabels, tabPosition)
        }
    }
}
