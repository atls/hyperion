package com.atls.hyperion.ui.components.avatar.stories

import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.avatar.Avatar
import com.atls.hyperion.ui.components.avatar.styles.appearance.AvatarAppearance
import com.atls.hyperion.ui.components.avatar.styles.appearance.default
import com.atls.hyperion.ui.components.avatar.styles.shape.AvatarShape
import com.atls.hyperion.ui.components.avatar.styles.shape.largeCircle
import com.atls.hyperion.ui.components.avatar.styles.shape.largeSquare
import com.atls.hyperion.ui.components.avatar.styles.shape.normalCircle
import com.atls.hyperion.ui.components.avatar.styles.shape.normalSquare
import com.atls.hyperion.ui.components.avatar.styles.shape.smallCircle
import com.atls.hyperion.ui.components.avatar.styles.shape.smallSquare

class AvatarStory : ComponentExample {
    override val name: String = "Avatar"

    @Composable
    override fun Content() {
        ComponentVariants(
            name = "Avatar",
            appearances = listOf(
                "Default" to { AvatarAppearance.default() }
            ),
            shapes = listOf(
                "Small Circle" to { AvatarShape.smallCircle() },
                "Normal Circle" to { AvatarShape.normalCircle() },
                "Large Circle" to { AvatarShape.largeCircle() },
                "Small Square" to { AvatarShape.smallSquare() },
                "Normal Square" to { AvatarShape.normalSquare() },
                "Large Square" to { AvatarShape.largeSquare() }
            )
        ) { appearance: AvatarAppearance, shape: AvatarShape ->
            Avatar(
                appearance = appearance,
                shape = shape,
                imageUrl = "https://media.istockphoto.com/id/1224772234/ru/фото/портрет-полосатой-кошки-с-зелеными-глазами-на-сером-фоне-кошка-смотрит-прямо-в-камеру.jpg?s=612x612&w=0&k=20&c=W5q6PFsJhSNgDuyHwi-xSSUaftlrfToSFix31JJ2eVU="
            )
        }
    }
}
