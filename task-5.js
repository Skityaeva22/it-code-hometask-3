// 5. Фильтрация не анаграмм
// Реализуйте функцию removeAnagrams, которая принимает массив строк и удаляет из данного массива строки, являющиеся анаграммами.

// Ошибки, которые должны быть обработаны:

// Переданный аргумент не массив. Код ошибки INVALID_ARGUMENT.
// В переданном массиве хотя бы один элемент не типа string. Код ошибки INVALID_ELEMENT_IN_ARRAY.
// Примеры использования:

// removeAnagrams(['cat', 'act', 'arc']);  // ['arc']
// removeAnagrams(['car', 'arc']);         // []
// removeAnagrams('str');                  // ошибка с кодом INVALID_ARGUMENT
// removeAnagrams(['str', 5]);             // ошибка с кодом INVALID_ELEMENT_IN_ARRAY
