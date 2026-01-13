package com.atls.hyperion.ui.components.switch.styles.shape

import com.atls.hyperion.ui.theme.tokens.components.SwitchSize
import com.atls.hyperion.ui.theme.tokens.layout.Space

fun SwitchShape.Companion.medium(): SwitchShape =
    SwitchShape(
        trackWidth = SwitchSize.defaultWidth,
        trackHeight = SwitchSize.defaultHeight,
        thumbSize = SwitchSize.defaultTrackSize,
        thumbPadding = Space.xs5
    )
