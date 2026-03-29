# Серия промптов для реализации DataLock Landing Page

Используй эти промпты по порядку. Каждый следующий промпт продолжает работу предыдущего.

---

## Промпт 1: Инициализация проекта и базовая структура

```
Создай Next.js проект (App Router) с TypeScript и Tailwind CSS для лендинга DataLock.

Настрой:
- next.js с app router
- tailwind css v4
- шрифт Inter (через next/font/google)
- базовый layout.tsx с тёмной темой: background #030303, text white
- globals.css с reset и base styles для тёмной темы
- структуру папок: components/, sections/, lib/

В globals.css добавь CSS-переменные:
--color-bg: #030303;
--color-card: rgba(255,255,255,0.03);
--color-border: rgba(255,255,255,0.1);
--color-accent: #10B981 (emerald);
--color-accent-secondary: #14B8A6 (teal);

Создай базовый page.tsx, который рендерит placeholder текст "DataLock Landing".
Убедись что проект запускается без ошибок.
```

---

## Промпт 2: Навигация

```
Создай компонент навигации (components/Navbar.tsx) для лендинга DataLock в стиле Vercel.com:

Требования:
- Фиксированная верхняя панель (sticky top-0) с backdrop-blur и полупрозрачным фоном
- Слева: логотип — текст "DataLock" жирным шрифтом, белым цветом, с зелёной точкой-индикатором слева (как dot/pulse)
- По центру/справа: навигационные ссылки — Возможности, Технологии, Безопасность, О нас (серый текст, hover → белый)
- Справа: кнопка "Запросить демо" — emerald (#10B981) фон, белый текст, rounded-full, hover-эффект (glow/brightness)
- Тонкая нижняя граница 1px rgba(255,255,255,0.1)
- На мобильных: бургер-меню с выезжающим drawer
- Плавная анимация появления при скролле (opacity transition)

Ссылки должны быть anchor-links с плавным скроллом к секциям (#features, #technology, #security, #about).
Подключи навигацию в layout.tsx.
```

---

## Промпт 3: Hero секция с анимированными формами

```
Создай Hero секцию (sections/Hero.tsx) для лендинга DataLock.

Визуальный стиль: комбинация Vercel.com hero + 21st.dev shape-landing-hero.

Структура:
1. Фоновый слой:
   - Сетка из тонких линий (grid pattern) с opacity 0.05, как на Vercel
   - Радиальный gradient glow по центру: от emerald/10 к transparent
   - 5 анимированных floating shapes — скруглённые прямоугольники разных размеров с:
     - Полупрозрачные (opacity 0.08-0.15)
     - Цвета: emerald, teal, cyan варианты
     - backdrop-blur-xl
     - Тонкие полупрозрачные borders
     - Анимация: fade-in + rotate при загрузке, затем бесконечное вертикальное покачивание (12s cycle, ease-in-out)
     - Разные стартовые позиции и задержки анимации

2. Контент (поверх, z-10, по центру):
   - Badge: маленький pill/chip сверху — "Система контроля и аналитики нового поколения" — с border rgba(255,255,255,0.1), маленький зелёный dot слева
   - Headline: крупный (text-5xl md:text-7xl), font-bold, max-w-4xl, text-center
     - Первая строка "Полный контроль." — gradient от white к white/80
     - Вторая строка "Абсолютная прозрачность." — gradient от emerald-400 к teal-400
   - Subtitle: text-lg, white/40 opacity, max-w-2xl, text-center, letter-spacing wide
     - "Единая платформа для мониторинга сотрудников, защиты данных и аналитики эффективности бизнеса в реальном времени."
   - Две кнопки:
     - "Запросить демо" — bg emerald-500, text-white, rounded-full, px-8 py-3, hover:brightness, с иконкой ArrowRight
     - "Узнать больше" — border white/20, text-white, rounded-full, px-8 py-3, hover:bg-white/5

Все текстовые элементы с fade-up анимацией при загрузке (staggered, через CSS @keyframes или framer-motion).

Высота секции — min-h-screen, flex items-center justify-center.
```

---

## Промпт 4: Секция со статистикой

```
Создай секцию Stats (sections/Stats.tsx) для лендинга DataLock.

Стиль: горизонтальная полоса с разделителями, как social proof у Vercel.

Требования:
- Полная ширина, border сверху и снизу (rgba(255,255,255,0.1))
- Padding вертикальный py-16
- Три колонки в ряд (grid cols-1 md:cols-3) с вертикальными разделителями между ними
- Каждый элемент:
  - Крупное число (text-5xl font-bold) — белое, с лёгким gradient
  - Единица/знак (например "%") — emerald цвет
  - Подпись (text-sm, white/50) под числом
- Данные:
  1. "45%" — "рабочего времени сотрудники тратят не на задачи"
  2. "48%" — "утечек данных происходят изнутри компании"
  3. "40+" — "проектов реализовано нашей командой"

- Числа должны анимироваться (count-up) при появлении секции во viewport (Intersection Observer)
- Fade-in анимация всей секции при скролле
```

---

## Промпт 5: Секция проблем

```
Создай секцию Problems (sections/Problems.tsx) для лендинга DataLock.

Стиль: тёмные карточки на тёмном фоне, как секция features на Vercel.

Структура:
- id="problems"
- Overline: текст "Проблемы" — emerald цвет, text-sm, uppercase, tracking-widest, font-medium
- Headline: "Бизнес теряет деньги каждый день." (первая строка белая) + "И вот почему." (вторая строка, white/50)
  - text-4xl md:text-5xl, font-bold, text-center, max-w-3xl mx-auto
- Grid 2x3 (grid cols-1 md:cols-2 lg:cols-3, gap-4)

Каждая карточка:
- bg rgba(255,255,255,0.03)
- border 1px rgba(255,255,255,0.06)
- rounded-xl, p-6
- Hover: border rgba(255,255,255,0.12) transition
- Иконка сверху (lucide-react): красно-оранжевый цвет (#EF4444)
- Заголовок (text-lg font-semibold белый)
- Описание (text-sm white/50)

Карточки:
1. Icon: Clock — "Потери продуктивности" — "Сотрудники тратят до 45% рабочего времени на личные задачи, соцсети и отвлечения. Это напрямую снижает прибыль."
2. Icon: EyeOff — "Нет прозрачности" — "Руководители не видят реальную загрузку и оценивают людей субъективно. Сильные недооценены, слабые незамечены."
3. Icon: ShieldAlert — "Внутренние утечки данных" — "Основной риск исходит не извне, а от самих сотрудников. Компании теряют деньги, клиентов и репутацию."
4. Icon: CircleHelp — "Решения вслепую" — "Отсутствие точных данных приводит к ошибочным управленческим решениям. Это тормозит рост."
5. Icon: Wifi — "Удалёнка без контроля" — "Компания не понимает, чем реально занят удалённый сотрудник в рабочее время."
6. Icon: UserX — "Инсайдерские угрозы" — "Без систем контроля сложно выявить мошенничество и саботаж на ранней стадии."

Карточки появляются с fade-in + slide-up анимацией при скролле (staggered).
```

---

## Промпт 6: Секция возможностей (Features)

```
Создай секцию Features (sections/Features.tsx) для лендинга DataLock.

Стиль: крупные карточки как на Vercel.com (секция "Your product, Agents, AI Apps").

Структура:
- id="features"
- Overline: "Возможности" — emerald, uppercase, tracking-widest
- Headline: "Всё, что нужно для контроля бизнеса." (белый) + "В одной системе." (white/50)
  - text-4xl md:text-5xl, font-bold, text-center
- Subtitle: "DataLock собирает данные о сотрудниках, процессах и рисках в одном месте." — text-lg white/40, text-center

Три крупных карточки (grid cols-1 lg:cols-3, gap-4):

Каждая карточка:
- bg rgba(255,255,255,0.02)
- border 1px rgba(255,255,255,0.06)
- rounded-2xl, overflow-hidden
- Верхняя часть: визуальная зона (h-48) — абстрактный декоративный элемент:
  - Карточка 1: анимированные горизонтальные линии (потоки данных) — emerald/teal цвета, с градиентным затуханием
  - Карточка 2: анимированные столбики графика (bar chart стилизованный) — emerald цвета
  - Карточка 3: пульсирующий shield/lock иконка с glow эффектом — emerald цвет
- Нижняя часть (p-6):
  - Заголовок (text-xl font-semibold)
  - Стрелка "→" справа от заголовка
  - Описание (text-sm white/50)

Данные:
1. "Контроль действий в реальном времени" — "Система фиксирует, чем занимается сотрудник: программы, сайты, операции с данными. Выявляет неэффективность автоматически."
2. "Объективная оценка продуктивности" — "Автоматическая оценка продуктивности сотрудников и отделов. Руководитель получает объективную картину — только данные."
3. "Предотвращение утечек данных" — "Отслеживание подозрительных действий с файлами и информацией. Снижение риска утечек и защита от внутренних угроз."

Hover эффект: border становится ярче, subtle translateY(-2px).
```

---

## Промпт 7: Секция технологий (How it works)

```
Создай секцию Technology (sections/Technology.tsx) для лендинга DataLock.

Стиль: как "From code to infrastructure in one git push" на Vercel — горизонтальный pipeline/flow.

Структура:
- id="technology"
- Overline: "Технологии" — emerald, uppercase, tracking-widest
- Headline: "От данных к решениям" (белый) + "за секунды." (gradient emerald → teal)
  - text-4xl md:text-5xl font-bold text-center

Горизонтальный flow (4 шага в ряд на десктопе, вертикально на мобильных):
- Между шагами — соединительные линии/стрелки (dashed или gradient line, emerald цвет)
- Каждый шаг:
  - Иконка в круге (border emerald, bg transparent)
  - Номер шага (маленький, emerald)
  - Название (font-semibold, белый)
  - Описание (text-sm, white/40)

Шаги:
1. Icon: Database — "Сбор данных" — "Агент на устройстве фиксирует все действия сотрудника"
2. Icon: BrainCircuit — "Умная аналитика" — "Алгоритмы находят отклонения и сигнализируют о рисках"
3. Icon: BarChart3 — "Визуализация" — "Понятные графики и дашборды в реальном времени"
4. Icon: Target — "Действия" — "Руководитель принимает решения на основе данных"

Под flow — две карточки (grid cols-2, gap-4):
1. "Интеграция с инфраструктурой" — "Легко подключается к существующим системам без перестройки IT." — Icon: Puzzle
2. "Удалённый доступ" — "Управление и мониторинг из любой точки мира." — Icon: Globe

Карточки: bg card, border subtle, p-6, rounded-xl. Иконка emerald.
```

---

## Промпт 8: Секция результатов и безопасности

```
Создай две секции: Metrics и Security для лендинга DataLock.

### Секция Metrics (sections/Metrics.tsx):
Стиль: бегущая строка или горизонтальный marquee с метриками (как у Vercel testimonials).

- Фон: subtle gradient (очень тёмный, от transparent к rgba(16,185,129,0.03) и обратно)
- Headline: "Результаты, которые говорят сами за себя." — text-3xl md:text-4xl, font-bold, text-center, белый
- 4 метрики в ряд (grid cols-2 md:cols-4):
  - "до 60%" — "снижение непродуктивного времени" — число emerald, текст white/50
  - "до 95%" — "предотвращение внутренних утечек" — число emerald
  - "100%" — "прозрачность по всем отделам" — число emerald
  - "3 мес." — "окупаемость системы" — число emerald

### Секция Security (sections/Security.tsx):
- id="security"
- Overline: "Безопасность" — emerald
- Headline: "Ваши данные под надёжной защитой." — text-4xl md:text-5xl font-bold text-center белый
- Описание: "DataLock обеспечивает полную безопасность собранных данных и соответствует современным стандартам информационной безопасности." — text-lg white/40, text-center

Три карточки в ряд (grid cols-3):
1. Icon: Lock — "Шифрование данных" — "Все данные шифруются при передаче и хранении."
2. Icon: KeyRound — "Контроль доступа" — "Гибкая система прав и ролей для разных уровней."
3. Icon: ShieldCheck — "Оценка рисков" — "Автоматическое выявление опасного поведения до убытков."

Стиль карточек: как в секции Problems, но с emerald иконками вместо красных.
```

---

## Промпт 9: О нас + CTA + Footer

```
Создай три финальных секции для лендинга DataLock: About, CTA, Footer.

### Секция About (sections/About.tsx):
- id="about"
- Overline: "О нас" — emerald
- Headline: "Разработано командой Perfect System Solution." — text-3xl md:text-4xl font-bold, text-center
- Описание: "Мы работаем на рынке с 2020 года и реализовали более 40 проектов. Команда из 15 специалистов гарантирует высокое качество и стабильную работу DataLock." — text-lg white/40, text-center, max-w-2xl

3 stat-карточки в ряд:
- "2020" + "на рынке с"
- "40+" + "проектов"
- "15" + "специалистов"
Стиль: крупное число белое, подпись white/50, разделены вертикальными линиями.

### Секция CTA (sections/CTA.tsx):
- Фон: gradient радиальный от emerald/10 к transparent, по центру
- Headline (gradient text, text-4xl md:text-6xl, font-bold):
  "Возьмите бизнес" (белый) + "под контроль." (gradient emerald → teal)
- Subtitle: "Запросите демонстрацию и узнайте, как DataLock поможет вашей компании." — white/40
- Две кнопки:
  - "Запросить демо" — bg emerald-500, large, rounded-full
  - "Связаться с нами" — outline, white border

### Footer (components/Footer.tsx):
- Тёмный фон, border-top 1px rgba(255,255,255,0.1)
- Grid из 3 колонок:
  1. Логотип DataLock + краткое описание "Единая система контроля и аналитики бизнеса"
  2. Навигация: Возможности, Технологии, Безопасность, О нас
  3. Контакты: mr.ubaydullaev@gmail.com, +998 (90) 904-39-93, @karim_pss (Telegram), datalock.uz
- Нижняя строка: "© 2025 DataLock by Perfect System Solution. Все права защищены."

Подключи Footer в layout.tsx.
```

---

## Промпт 10: Финальная сборка, анимации и полировка

```
Проведи финальную сборку и полировку лендинга DataLock.

1. Собери все секции в page.tsx в правильном порядке:
   Hero → Stats → Problems → Features → Technology → Metrics → Security → About → CTA

2. Добавь scroll-анимации для всех секций (если ещё не добавлены):
   - Используй Intersection Observer или CSS-only approach
   - Каждая секция fade-in + translateY(20px → 0) при появлении
   - Карточки внутри секций — staggered delay (каждая следующая +100ms)

3. Плавный scroll при клике на навигационные ссылки (scroll-behavior: smooth или JS).

4. Добавь в head мета-теги:
   - title: "DataLock — Контроль и аналитика бизнеса"
   - description: "Единая платформа для мониторинга сотрудников, защиты данных и аналитики эффективности."
   - og:image, theme-color

5. Проверь и исправь:
   - Респонсивность на всех размерах экранов (mobile, tablet, desktop)
   - Навигация на мобильных (бургер-меню)
   - Контрастность текста
   - Все анимации плавные (GPU-accelerated: transform, opacity)
   - Нет ошибок в консоли

6. Добавь favicon (можно inline SVG с замком — emerald цвет).

Убедись что проект запускается без ошибок: npm run build && npm run start.
```

---

## Опциональный промпт 11: Дополнительные детали

```
Добавь дополнительные визуальные детали к лендингу DataLock:

1. Cursor glow effect: при движении мыши на hero секции — subtle radial gradient следует за курсором (emerald glow, очень тонкий).

2. Grain texture overlay: очень тонкий noise/grain поверх всего лендинга (opacity 0.03, через CSS pseudo-element + SVG filter).

3. Gradient border на CTA кнопках: animated gradient border (emerald → teal → emerald loop) на основной "Запросить демо" кнопке.

4. Секция hero shapes: при hover на любую shape — она слегка увеличивается и glow усиливается.

5. Scroll progress indicator: тонкая emerald полоска вверху страницы, показывающая прогресс скролла.

Все эффекты должны быть subtle и не влиять на производительность.
```
