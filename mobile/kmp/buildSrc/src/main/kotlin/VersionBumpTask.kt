import config.FileNames
import config.Keys
import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction
import java.util.Properties

abstract class VersionBumpTask : DefaultTask() {

    @TaskAction
    fun run() {
        val file = project.rootProject.file(FileNames.VERSION)
        require(file.exists()) { "version.properties not found" }

        val props = Properties().apply {
            file.inputStream().use { load(it) }
        }

        val current = props.getProperty(Keys.VERSION)
            ?: error("VERSION not defined")

        val (major, minor, patch) = current.split(".").map { it.toInt() }

        val next = "$major.${minor + 1}.0"

        props.setProperty(Keys.VERSION, next)
        file.outputStream().use { props.store(it, null) }

        println("VERSION=$next")
    }
}
