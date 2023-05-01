数据代理
- 通过一个对象代理对另一个对象中属性的操作(读/写)

在 Vue3 中，`Reflect.get(target, key, receiver)` 是 ES6 中引入的一个新方法，它是用来获取对象属性值的。

**在 Vue3 中，由于数据劫持使用了 Proxy 对象来实现，因此在获取数据时，Vue3 会默认调用 `Reflect.get()` 方法来获取数据**；Vue3 使用 `Reflect.get()` 方法是为了确保在数据对象不存在时，不会抛出异常，而是会返回 undefined。

`Reflect.get()` 方法接受三个参数：

1. `target`：要获取属性值的对象。

2. `key`：要获取的属性名。

3. `receiver`：可选参数，用来设置属性值的上下文对象，如果不传递，则默认为 `target` 对象。

在 Vue3 中，我们可以使用 `Reflect.get()` 方法来获取响应式数据对象的属性值，例如：

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0
})

console.log(Reflect.get(state, 'count')) // 输出 0
```

需要注意的是，在使用 `Reflect.get()` 方法时，如果 `target` 对象不是一个对象，则会抛出 TypeError 异常。