# RegExpRia
### Написати регулярку яка буде парсити ЧПУ. Формат урла наступний:

Доменне ім’я не парсим. Починається зі слеша

Мова ru або uk. В групу має попасти ru або uk. Номер групи  - 1.

/novostroyki/

Парматери локації:

Область. Опціональна, може не бути. Формат: vinnitskaya-oblast . В групу  має попасти  vinnitskaya . Номер групи - 2. Варіанти областей: 

'vinnitskaya'

'zhitomirskaya'

'ternopolskaya'

'khmelnitskaya'

'lvovskaya'

'chernigovskaya'

'kharkovskaya'

'sumskaya'

'rovenskaya'

'kiyevskaya'

'dnepropetrovskaya'

'odesskaya'

'zaporozhskaya'

'ivano-frankovskaya'

'kirovogradskaya'

'volynskaya'

'nikolayevskaya'

'poltavskaya'

'zakarpatskaya'

'khersonskaya'

'cherkasskaya'

'chernovitskaya'

'donetskaya'

'luganskaya'

місто(може не бути). Номер групи - 3. формат: -vinnitsa  -kiev і т. П.

Додаткові параметри геолокації до міста. Може бути лише один із перечислених. Опціональний. Варіанти:

Район. Номер групи - .4. Формат: -rayon-vishenka. В групу має попадати vishenka.

Метро. Номер групи - .5. Формат: -metro-vokzalna. В групу має попасти  vokzalna

Берег. Номер групи - .6. Формат: -levyy-bereg або -pravyy-bereg. В групу має попасти levyy-bereg або pravyy-bereg

Біля метро. Номер групи - .7. Формат: -vozle-metro . В групу має попасти vozle-metro

Вулиця. Номер групи - .8. Формат: -ulitsa-pushkina . В групу має поппасти pushkina.

Додаткові параметри. Всі опціональні. Може бути декілька. Всі починаються з “-” . Ця перша рисочка не має попадати в групи.

Здані в експлуатацію. Номер групи - 9. Формат: sdannyye

В процесі будівництва. Номер групи - 10. Формат: stroyashchiyesya

Тип об’єкта. Номер групи - 11. Один із:

kvartiry

kottedzhi

taunkhausy

pomeshcheniya

Клас об’єкта. Номер групи - 12. Один із:

ekonom-klassa

standart

biznes-klassa

elit-klassa

dachnyy

komfort-klassa

premium

Кімнатність. Номер групи - 13. Варіанти:

odnokomnatnyye

dvukhkomnatnyye

trekhkomnatnyye

chetyrekhkomnatnyye

Розтермінування виплат. Номер групи - 14. Формат: rassrochka

З ремонтом. Номер групи - 15. Формат: s-remontom


Якщо ваша нумерація груп буде відрізнятись - вкажіть це у вашому рішенні, щоб я міг зробити мапінг і прогнати тести. Тобто якщо у завданні тип об’єкта 13 група, а у вас 12, то треба написати мені, що у завданні вказано, що тип об’єкта 13 група, а в мене 12.


У вас має бути приблизно так: 

new RegExp(/* Ваша регулярка*/)

.exec(‘/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii’)

--> [

‘/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii’, 

‘ru’, 

‘kiyevskaya’,

‘kiev’,

‘goloseevskii’,

]


Приклади урлів:

    /ru/novostroyki-ekonom-klassa

    /ru/novostroyki-biznes-klassa

    /ru/novostroyki-elit-klassa

    /ru/novostroyki-komfort-klassa

    /ru/novostroyki-sdannyye

    /ru/novostroyki-stroyashchiyesya

    /ru/novostroyki-kiyevskaya-oblast

    /ru/novostroyki-kiyevskaya-oblast-kiev

    /ru/novostroyki-kiyevskaya-oblast-ekonom-klassa

    /ru/novostroyki-kiyevskaya-oblast-biznes-klassa

    /ru/novostroyki-kiyevskaya-oblast-elit-klassa

    /ru/novostroyki-kiyevskaya-oblast-komfort-klassa

    /ru/novostroyki-kiyevskaya-oblast-sdannyye

    /ru/novostroyki-kiyevskaya-oblast-stroyashchiyesya

    /ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii

    /ru/novostroyki-kiyevskaya-oblast-kiev-metro-nivki

    /ru/novostroyki-kiev

    /ru/novostroyki-taunkhausy

    /ru/novostroyki-taunkhausy-ekonom-klassa

    /ru/novostroyki-kiev-taunkhausy

    /ru/novostroyki-kiev-kottedzhi

    /ru/novostroyki-kiev-pomeshcheniya

    /ru/novostroyki-kiev-pravyy-bereg

    /ru/novostroyki-kiev-levyy-bereg

    /ru/novostroyki-kiev-rayon-goloseevskii

    /ru/novostroyki-kiev-metro-nivki

    /ru/novostroyki-kiev-ulitsa-pushkina

    /ru/novostroyki-kiev-ulitsa-boiko

    /ru/novostroyki-kiev-odnokomnatnyye

    /ru/novostroyki-kvartiry-odnokomnatnyye

    /ru/novostroyki-kvartiry-dvukhkomnatnyye

    /ru/novostroyki-kvartiry-trekhkomnatnyye

    /ru/novostroyki-kvartiry-chetyrekhkomnatnyye

    /ru/novostroyki-kiev-kvartiry-odnokomnatnyye

    /ru/novostroyki-kiev-kvartiry-dvukhkomnatnyye

    /ru/novostroyki-kiev-kvartiry-trekhkomnatnyye

    /ru/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye

    /ru/novostroyki-odnokomnatnyye

    /ru/novostroyki-sdannyye-kvartiry

    /ru/novostroyki-kiev-sdannyye

    /ru/novostroyki-kiev-sdannyye-kvartiry

    /ru/novostroyki-kiev-stroyashchiyesya

    /ru/novostroyki-kiev-ekonom-klassa

    /ru/novostroyki-kiev-biznes-klassa

    /ru/novostroyki-kiev-elit-klassa

    /ru/novostroyki-kiev-komfort-klassa

    /ru/novostroyki-kvartiry

    /ru/novostroyki-kiev-kvartiry

    /ru/novostroyki-rassrochka

    /ru/novostroyki-kiev-rassrochka

    /ru/novostroyki-kiev-vozle-metro

    /ru/novostroyki-kiev-s-remontom

    /ru/novostroyki-s-remontom

    /ru/novostroyki-kvartiry-s-remontom

    /ru/novostroyki-kiev-kvartiry-s-remontom

    /ru/novostroyki-brovary

    /ru/novostroyki-brovary-vozle-metro-s-remontom

    /ru/novostroyki-kiyevskaya-oblast-taunkhausy

    /ru/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa

    /ru/novostroyki-kiyevskaya-oblast-kottedzhi

    /ru/novostroyki-kiev-rayon-goloseevskii-taunkhausy

    /ru/novostroyki-kiev-rayon-goloseevskii-kottedzhi

    /ru/novostroyki-kiev-rayon-goloseevskii-kvartiry

    /ru/novostroyki-kiev-ulitsa-boiko-kvartiry

    /ru/novostroyki-kiev-metro-nivki-kvartiry

    /uk/novostroyki-ekonom-klassa

    /uk/novostroyki-biznes-klassa

    /uk/novostroyki-elit-klassa

    /uk/novostroyki-komfort-klassa

    /uk/novostroyki-sdannyye

    /uk/novostroyki-stroyashchiyesya

    /uk/novostroyki-kiyevskaya-oblast

    /uk/novostroyki-kiyevskaya-oblast-kiev

    /uk/novostroyki-kiyevskaya-oblast-ekonom-klassa

    /uk/novostroyki-kiyevskaya-oblast-biznes-klassa

    /uk/novostroyki-kiyevskaya-oblast-elit-klassa

    /uk/novostroyki-kiyevskaya-oblast-komfort-klassa

    /uk/novostroyki-kiyevskaya-oblast-sdannyye

    /uk/novostroyki-kiyevskaya-oblast-stroyashchiyesya

    /uk/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii

    /uk/novostroyki-kiyevskaya-oblast-kiev-metro-nivki

    /uk/novostroyki-kiev

    /uk/novostroyki-taunkhausy

    /uk/novostroyki-taunkhausy-ekonom-klassa

    /uk/novostroyki-kiev-taunkhausy

    /uk/novostroyki-kiev-kottedzhi

    /uk/novostroyki-kiev-pomeshcheniya

    /uk/novostroyki-kiev-pravyy-bereg

    /uk/novostroyki-kiev-levyy-bereg

    /uk/novostroyki-kiev-rayon-goloseevskii

    /uk/novostroyki-kiev-metro-nivki

    /uk/novostroyki-kiev-ulitsa-pushkina

    /uk/novostroyki-kiev-ulitsa-boiko

    /uk/novostroyki-kiev-odnokomnatnyye

    /uk/novostroyki-kvartiry-odnokomnatnyye

    /uk/novostroyki-kvartiry-dvukhkomnatnyye

    /uk/novostroyki-kvartiry-trekhkomnatnyye

    /uk/novostroyki-kvartiry-chetyrekhkomnatnyye

    /uk/novostroyki-kiev-kvartiry-odnokomnatnyye

    /uk/novostroyki-kiev-kvartiry-dvukhkomnatnyye

    /uk/novostroyki-kiev-kvartiry-trekhkomnatnyye

    /uk/no
