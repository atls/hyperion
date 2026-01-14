package com.atls.hyperion.ui.components.modal.bottom.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.rememberModalBottomSheetState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.blue
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.components.button.styles.shape.normal
import com.atls.hyperion.ui.components.modal.bottom.BottomDialog
import com.atls.hyperion.ui.theme.tokens.layout.Space
import kotlinx.coroutines.launch

class BottomDialogStory : ComponentExample {
    override val name: String = "BottomDialog"

    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    override fun Content() {
        var showDialog by remember { mutableStateOf(false) }
        val sheetState = rememberModalBottomSheetState()
        val scope = rememberCoroutineScope()

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(Space.g12)
        ) {
            Button(
                text = "Show Bottom Dialog",
                appearance = ButtonAppearance.blue(),
                shape = ButtonShape.normal(),
                onClick = { showDialog = true }
            )

            if (showDialog) {
                BottomDialog(
                    sheetState = sheetState,
                    onDismissRequest = { showDialog = false }
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(Space.g16)
                    ) {
                        Text(text = "This is a Bottom Dialog")
                        Button(
                            modifier = Modifier.padding(top = Space.g12),
                            text = "Close",
                            appearance = ButtonAppearance.blue(),
                            shape = ButtonShape.normal(),
                            onClick = {
                                scope.launch { sheetState.hide() }.invokeOnCompletion {
                                    if (!sheetState.isVisible) {
                                        showDialog = false
                                    }
                                }
                            }
                        )
                    }
                }
            }
        }
    }
}
