package com.atls.hyperion.ui.theme.tokens.borders

import com.atls.hyperion.ui.theme.tokens.colors.Colors

class Borders(colors: Colors) {
    val neutral: PressableBorderStates = Neutral(colors)
    val action: PressableBorderStates = Action(colors)
    val danger: PressableBorderStates = Danger(colors)
    val dropzone: BorderStates = Dropzone(colors)

    private class Neutral(colors: Colors) : PressableBorderStates {
        override val default = Border(BorderWidth.sm, BorderStyle.Solid, colors.surface.subtle)
        override val pressed = Border(BorderWidth.sm, BorderStyle.Solid, colors.surface.base)
        override val focused = Border(BorderWidth.sm, BorderStyle.Solid, colors.action.base)
        override val disabled = Border(BorderWidth.sm, BorderStyle.Solid, colors.surface.soft)
    }

    private class Action(colors: Colors) : PressableBorderStates {
        override val default = Border(BorderWidth.sm, BorderStyle.Solid, colors.action.base)
        override val pressed = Border(BorderWidth.sm, BorderStyle.Solid, colors.action.pressed)
        override val focused = Border(BorderWidth.md, BorderStyle.Solid, colors.action.base)
        override val disabled = Border(BorderWidth.sm, BorderStyle.Solid, colors.action.disabled)
    }

    private class Danger(colors: Colors) : PressableBorderStates {
        override val default = Border(BorderWidth.sm, BorderStyle.Solid, colors.status.error)
        override val pressed = Border(BorderWidth.sm, BorderStyle.Solid, colors.status.error)
        override val focused = Border(BorderWidth.md, BorderStyle.Solid, colors.status.error)
        override val disabled = Border(BorderWidth.sm, BorderStyle.Solid, colors.surface.soft)
    }

    private class Dropzone(colors: Colors) : BorderStates {
        override val default = Border(BorderWidth.sm, BorderStyle.Dashed, colors.surface.muted)
        override val focused = Border(BorderWidth.md, BorderStyle.Dashed, colors.action.base)
        override val disabled = Border(BorderWidth.sm, BorderStyle.Dashed, colors.surface.soft)
    }
}
