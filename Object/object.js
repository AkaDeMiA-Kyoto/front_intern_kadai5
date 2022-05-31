const data = ["JavaScript", "Kotlin", "Python", "Ruby", "Swift", "Elixir", "Fortran", "C++", "C#", "Go",
        "Objective-C", "PHP", "Perl", "COBOL", "Scratch", "TypeScript", "Visual Basic", "Dart", "Java", "Rust"];

// Swift を削除
data.splice(4, 1);
console.log(data);

// 「通し番号(1から):言語」のフォーマットでconsole表示
data.forEach((value, index) => {
    console.log(`${index + 1}:${value}`)
});

// P で始まる要素でできた配列
const dataStartP = data.filter((value) => {
    return value.startsWith('P')
});
console.log(dataStartP)

// すべての文字を大文字に変換した配列を出力
const dataUpper = data.map((value) => {
    return value.toUpperCase()
});
console.log(dataUpper)

const emailAddress = ["example444@example.com", "9a-fg@example.com", "a--a-a@ppp.com", "-a@example.com", "a@example.com", "p+ppp@example.com",
                        "example@a..jp", "admin@example.com", "P-admin@example.com", "enmene@aDmin.jp", "eA@aaa.jp", "e-a@co.jp", "a.aa.aaa"]

// 条件を満たすメールアドレスの正規表現
const SEARCH_EMAIL = /^([A-Za-z0-9]+(-?[A-Za-z0-9]+)+)@([A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]+.)+[A-Za-z]{2,}$/;
// admin(大文字小文字問わず)の文字列
const ADMIN_EMAIL = /admin/i
const result = emailAddress.filter((value) => {
    // admin に関しては文字列を含まないものが欲しいので「!」で bool 値を反転
    return SEARCH_EMAIL.test(value) && !ADMIN_EMAIL.test(value)
})
console.log(result)