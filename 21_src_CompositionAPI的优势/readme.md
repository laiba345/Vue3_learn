在 Vue3 中，除了传统的 `Options API` 之外，还引入了一个新的 `Composition API`，**它提供了一种全新的组件组织形式，可以更好地组织代码、复用逻辑、提高代码可读性和可维护性等**。

相比于传统的 `Options API`，`Composition API` 的优势主要有以下几个方面：

1. 更好的逻辑复用：传统的 `Options API` 中，逻辑的复用主要依赖于 Mixins，但是 **Mixins 会带来命名冲突、命名污染等问题**。而 `Composition API` 中，逻辑复用依赖于函数，通过函数封装来提高代码复用性。

2. 更好的代码组织：传统的 `Options API` 中，不同的组件选项（data、computed、watch、methods 等）散落在不同的选项中，使得代码逻辑不够清晰，难以维护。而 `Composition API` 中，组件内的逻辑可以按照功能划分为不同的函数，从而更好地组织代码。

3. 更好的类型推导：在 `Options API` 中，由于组件选项都是对象属性，因此在 IDE 中很难获得完整的类型提示，而在 `Composition API` 中，可以使用 Typescript 对函数的类型进行推导，从而获得更好的类型提示。

4. 更好的响应式处理：在 `Options API` 中，响应式数据的处理主要依赖于 Vue 自身的响应式系统，使得代码逻辑较为复杂。而 `Composition API` 中，响应式数据的处理可以通过 `reactive`、`ref` 等函数来实现，使得代码逻辑更加简洁明了。

综上所述，`Composition API` 相比于 `Options API` 在代码组织、逻辑复用、类型推导和响应式处理等方面具有更好的优势，因此在开发大型项目时，更推荐使用 `Composition API` 来组织代码。