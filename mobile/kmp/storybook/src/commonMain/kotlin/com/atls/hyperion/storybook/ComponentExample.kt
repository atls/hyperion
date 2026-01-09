<<<<<<<< HEAD:mobile/kmp/storybook/src/commonMain/kotlin/com/atls/hyperion/storybook/shared/model/ComponentExample.kt
package com.atls.hyperion.storybook.shared.model
========
package com.atls.hyperion.storybook
>>>>>>>> c54afd81 (refactor(common): extract storybook to separate module):mobile/kmp/storybook/src/commonMain/kotlin/com/atls/hyperion/storybook/ComponentExample.kt

import androidx.compose.runtime.Composable

interface ComponentExample {
    val name: String
    @Composable
    fun Content()
}
