import config.FileNames
import config.Keys
import java.util.Properties
import java.io.File

object VersionProvider {

    fun load(rootDir: File): String {
        val file = File(rootDir, FileNames.VERSION)
        require(file.exists()) { "version.properties not found" }
        val props = Properties().apply {
            file.inputStream().use { load(it) }
        }

        return props.getProperty(Keys.VERSION)
            ?: error("VERSION not defined in version.properties")
    }
}
