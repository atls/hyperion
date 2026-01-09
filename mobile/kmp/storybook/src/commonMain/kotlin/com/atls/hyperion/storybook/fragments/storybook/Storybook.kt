package com.atls.hyperion.storybook.fragments.storybook

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.fragments.storybook.ui.Sidebar
import com.atls.hyperion.storybook.generated.resources.Res
import com.atls.hyperion.storybook.generated.resources.menu
import com.atls.hyperion.storybook.generated.resources.select_component_from_sidebar
import com.atls.hyperion.storybook.generated.resources.toggle_sidebar
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.theme.Padding
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource

@Composable
fun Storybook(
    components: List<ComponentExample>
) {
    var isSidebarVisible by remember { mutableStateOf(false) }
    var selectedComponent by remember(components) {
        mutableStateOf(components.firstOrNull())
    }

    Box {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .safeDrawingPadding()
        ) {
            IconButton(
                onClick = { isSidebarVisible = !isSidebarVisible },
                modifier = Modifier
                    .padding(Padding.small)
            ) {
                Icon(
                    painter = painterResource(Res.drawable.menu),
                    contentDescription = stringResource(Res.string.toggle_sidebar),
                    tint = MaterialTheme.colors.onSurface
                )
            }
            Box(
                modifier = Modifier
                    .fillMaxSize()
            ) {
                if (selectedComponent != null) {
                    selectedComponent?.Content()
                } else {
                    Text(
                        text = stringResource(Res.string.select_component_from_sidebar),
                        modifier = Modifier
                            .align(Alignment.Center),
                    )
                }
            }
        }

        AnimatedVisibility(
            visible = isSidebarVisible,
            enter = slideInHorizontally(),
            exit = slideOutHorizontally()
        ) {
            Sidebar(
                components = components,
                selectedComponent = selectedComponent,
                onComponentClick = { component ->
                    selectedComponent = component
                    isSidebarVisible = false
                },
                onClose = { isSidebarVisible = false }
            )
        }
    }
}
