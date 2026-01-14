package com.atls.hyperion.ui.components.modal.popup.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.blue
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.components.button.styles.shape.normal
import com.atls.hyperion.ui.components.modal.popup.Popup
import com.atls.hyperion.ui.theme.tokens.layout.Space

class PopupStory : ComponentExample {
    override val name: String = "Popup"

    @Composable
    override fun Content() {
        var showDialog by remember { mutableStateOf(false) }

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(Space.g12)
        ) {
            Button(
                text = "Show Popup",
                appearance = ButtonAppearance.blue(),
                shape = ButtonShape.normal(),
                onClick = { showDialog = true }
            )

            if (showDialog) {
                Popup(
                    onDismissRequest = { showDialog = false }
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(Space.g16)
                    ) {
                        Text(text = "This is a Popup Dialog")
                        Button(
                            modifier = Modifier.padding(top = Space.g12),
                            text = "Close",
                            appearance = ButtonAppearance.blue(),
                            shape = ButtonShape.normal(),
                            onClick = { showDialog = false }
                        )
                    }
                }
            }
        }
    }
}
