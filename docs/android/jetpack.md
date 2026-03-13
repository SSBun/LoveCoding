# Jetpack

Jetpack 是 Google 推出的一套 Android 开发组件库，旨在帮助开发者更高效地构建优质应用。

## Jetpack 组件

### Jetpack Compose

现代声明式 UI 工具包。

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}
```

### ViewModel

管理 UI 相关数据的生命周期。

```kotlin
class MyViewModel : ViewModel() {
    private val _data = MutableLiveData<String>()
    val data: LiveData<String> = _data
    
    fun loadData() {
        _data.value = "Loaded Data"
    }
}
```

### Room

本地数据库。

```kotlin
@Entity
data class User(
    @PrimaryKey val id: Int,
    val name: String,
    val email: String
)

@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    fun getAll(): List<User>
}
```

### Navigation

导航组件。

```kotlin
// nav_graph.xml
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/nav_graph"
    app:startDestination="@id/firstFragment">

    <fragment
        android:id="@+id/firstFragment"
        android:name="com.example.FirstFragment"
        android:label="First" />
</navigation>
```

### Hilt

依赖注入。

```kotlin
@HiltAndroidApp
class MyApplication : Application()

@AndroidEntryPoint
class MyActivity : AppCompatActivity()
```

### WorkManager

后台任务调度。

```kotlin
class MyWorker(context: Context, workerParams: WorkerParameters) :
    Worker(context, workerParams) {
    
    override fun doWork(): Result {
        return Result.success()
    }
}
```

## 更多资源

- [Jetpack 官方文档](https://developer.android.com/jetpack)
