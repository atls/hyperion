package com.atls.hyperion.storybook.fragments.storybook.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Divider
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import com.atls.hyperion.storybook.config.sidebarWidth
import com.atls.hyperion.storybook.generated.resources.Res
import com.atls.hyperion.storybook.generated.resources.components
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.theme.FontSize
import com.atls.hyperion.storybook.shared.ui.theme.Padding
import org.jetbrains.compose.resources.stringResource

@Composable
fun Sidebar(
    components: List<ComponentExample>,
    selectedComponent: ComponentExample?,
    onComponentClick: (ComponentExample) -> Unit,
    onClose: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .clickable { onClose() }
    ) {
        Surface(
            modifier = Modifier
                .fillMaxHeight()
                .width(sidebarWidth),
            color = MaterialTheme.colors.surface
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(Padding.medium)
            ) {
                Text(
                    text = stringResource(Res.string.components),
                    fontSize = FontSize.large,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.padding(vertical = Padding.large)
                )
                LazyColumn {
                    items(components) { component ->
                        Text(
                            text = component.name,
                            modifier = Modifier
                                .fillMaxWidth()
                                .clickable { onComponentClick(component) }
                                .padding(vertical = Padding.small),
                            fontWeight = if (component == selectedComponent) FontWeight.Bold else FontWeight.Normal,
                            fontSize = FontSize.small
                        )
                        Divider()
                    }
                }
            }
        }
    }
}
