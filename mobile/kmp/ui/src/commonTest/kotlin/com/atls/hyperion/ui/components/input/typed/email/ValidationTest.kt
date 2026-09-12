package com.atls.hyperion.ui.components.input.typed.email

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ValidationTest {
    @Test
    fun acceptsEmptyAndValidEmail() {
        assertTrue(isValidEmail(""))
        assertTrue(isValidEmail("arina@example.com"))
    }

    @Test
    fun rejectsInvalidEmail() {
        assertFalse(isValidEmail("arina"))
        assertFalse(isValidEmail("arina@example"))
        assertFalse(isValidEmail("arina @example.com"))
    }
}
