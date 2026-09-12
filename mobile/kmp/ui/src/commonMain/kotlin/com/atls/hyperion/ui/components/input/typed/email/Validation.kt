package com.atls.hyperion.ui.components.input.typed.email

fun isValidEmail(value: String): Boolean =
    value.isEmpty() || emailPattern.matches(value)
