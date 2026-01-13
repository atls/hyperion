package com.atls.hyperion.ui.components.toast.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.toast.Toast
import com.atls.hyperion.ui.components.toast.styles.appearance.ToastAppearance
import com.atls.hyperion.ui.components.toast.styles.appearance.default
import com.atls.hyperion.ui.components.toast.styles.shape.ToastShape
import com.atls.hyperion.ui.components.toast.styles.shape.default
import com.atls.hyperion.ui.components.toast.styles.shape.rounded
import com.atls.hyperion.ui.components.toast.styles.shape.square
import kotlinx.coroutines.launch

class ToastStories : ComponentExample {
    override val name: String = "Toast"

    @Composable
    override fun Content() {
        val snackbarHostState = remember { SnackbarHostState() }
        val scope = rememberCoroutineScope()

        var isVisible by remember { mutableStateOf(false) }
        var toastText by remember { mutableStateOf("This is a toast message") }

        Column {

            ComponentVariants(
                name = "Toast",
                appearances = listOf(
                    "Default" to { ToastAppearance.default() }
                ),
                shapes = listOf(
                    "Default" to { ToastShape.default() },
                    "Rounded" to { ToastShape.rounded() },
                    "Square" to { ToastShape.square() }
                )
            ) { appearance: ToastAppearance, shape: ToastShape ->
                Button(
                    onClick = {
                        scope.launch {
                            snackbarHostState.showSnackbar("toast")
                        }
                    }
                ) {
                    Text("Show Toast")
                }
                Toast(
                    hostState = snackbarHostState,
                    shape = shape,
                    appearance = appearance
                )
            }
        }
    }
}
