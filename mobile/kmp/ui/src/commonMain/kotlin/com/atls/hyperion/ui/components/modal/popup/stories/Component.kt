package com.atls.hyperion.ui.components.modal.popup.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.primary
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.components.button.styles.shape.md
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
                .padding(Space.sm)
        ) {
            Button(
                text = "Show Popup",
                appearance = ButtonAppearance.primary(),
                shape = ButtonShape.md(),
                onClick = { showDialog = true }
            )

            if (showDialog) {
                Popup(
                    onDismissRequest = { showDialog = false }
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(Space.lg)
                    ) {
                        Text(text = "This is a Popup Dialog")
                        Button(
                            modifier = Modifier.padding(top = Space.sm),
                            text = "Close",
                            appearance = ButtonAppearance.primary(),
                            shape = ButtonShape.md(),
                            onClick = { showDialog = false }
                        )
                    }
                }
            }
        }
    }
}
