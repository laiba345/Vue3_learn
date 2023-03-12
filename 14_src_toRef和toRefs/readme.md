toRef
    - 作用：创建一个ref对象，其value值指向另一个对象中的某个属性
    - 语法：const name = toRef(person, 'name')
    - 应用：要将响应式对象中的某个属性单独提供给外部使用时
    - 扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象
        - 语法toRefs(person)

实用小技巧
    - window中的alt或者Mac中的fn + option可以出现光标多处进行代码修改
