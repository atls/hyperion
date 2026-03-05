package com.atls.hyperion.ui.components.toast.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.components.toast.Toast
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.chevron_left
import com.atls.hyperion.ui.primitives.icon.Icon
import com.atls.hyperion.ui.primitives.icon.IconSize
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import kotlinx.coroutines.launch
import org.jetbrains.compose.resources.painterResource

class ToastStories : ComponentExample {
    override val name: String = "Toast"

    @Composable
    override fun Content() {
        val scope = rememberCoroutineScope()

        val hostEmpty = remember { SnackbarHostState() }
        val hostLeading = remember { SnackbarHostState() }
        val hostTrailing = remember { SnackbarHostState() }
        val hostBoth = remember { SnackbarHostState() }

        Column {

            Text("Empty Toast")
            Button(onClick = { scope.launch { hostEmpty.showSnackbar("Empty toast") } }) {
                Text("Show Empty Toast")
            }
            Toast(hostState = hostEmpty)

            Text("Leading Icon Toast")
            Button(onClick = { scope.launch { hostLeading.showSnackbar("Leading icon") } }) {
                Text("Show Leading Toast")
            }
            Toast(
                hostState = hostLeading,
                leadingContent = {
                    Icon(
                        icon = painterResource(Res.drawable.chevron_left),
                        color = Colors.Text.red,
                        size = IconSize.medium
                    )
                }
            )

            Text("Trailing Icon Toast")
            Button(onClick = { scope.launch { hostTrailing.showSnackbar("Trailing icon") } }) {
                Text("Show Trailing Toast")
            }
            Toast(
                hostState = hostTrailing,
                trailingContent = {
                    Icon(
                        icon = painterResource(Res.drawable.chevron_left),
                        color = Colors.Text.red,
                        size = IconSize.medium
                    )
                }
            )

            Text("Both Icons Toast")
            Button(onClick = { scope.launch { hostBoth.showSnackbar("Both icons") } }) {
                Text("Show Both Toast")
            }
            Toast(
                hostState = hostBoth,
                leadingContent = {
                    Icon(
                        icon = painterResource(Res.drawable.chevron_left),
                        color = Colors.Text.red,
                        size = IconSize.medium
                    )
                },
                trailingContent = {
                    Icon(
                        icon = painterResource(Res.drawable.chevron_left),
                        color = Colors.Text.red,
                        size = IconSize.medium
                    )
                }
            )
        }
    }
}
