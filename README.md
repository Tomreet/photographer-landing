```markdown
# 📸 MrKrabsArt — лендинг фотографа

Современный лендинг для фотографа с кинематографичными анимациями, плавным скроллом и уникальным UI/UX. Построен на React + TypeScript с использованием Framer Motion, Tailwind CSS.

![Превью лендинга](./public/og-image.png)

## ✨ Ключевые особенности

- 🎥 **Героическая секция** с параллакс-эффектом и анимированным текстом
- 🖼 **Чередующееся портфолио** — фотографии выезжают слева и справа при скролле
- 🧑‍🎨 **Обо мне** с плавным смещением изображения
- 🛠️ **Услуги** — сетка с появлением карточек
- 💬 **Отзывы** в виде карусели (Swiper)
- 📬 **Контактная форма** с отправкой через Formspree (без бекенда)
- 🌗 **Тёмная тема** с медными акцентами (`#D4A574`)
- 📱 Полная адаптивность (mobile-first)

## 🛠️ Стек технологий

| Категория        | Библиотека                              |
| ---------------- | ----------------------------------------|
| Фреймворк        | React 18 + TypeScript                   |
| Сборка           | Vite                                    |
| Стили            | Tailwind CSS v3                         |
| Анимации         | Framer Motion                           |
| Карусель         | Swiper                                  |
| Иконки           | Lucide / Heroicons                      |
| Шрифты           | Inter + Playfair Display (Google Fonts) |

## 🚀 Быстрый старт

### 1. Клонируй репозиторий
```bash
git clone https://github.com/your-username/MrKrabsArt.git
cd MrKrabsArt/photographer-landing
```

### 2. Установи зависимости
```bash
npm install
```

### 3. Добавь изображения
Помести свои фотографии в папку `public/`:

```
public/
  hero-bg.jpg          # фон для первой секции
  about.jpg            # фото в секции «Обо мне»
  og-image.jpg         # превью для соцсетей
  favicon.svg          # иконка сайта
  portfolio/
    01.jpg
    02.jpg
    03.jpg
    04.jpg
    05.jpg             # работы для портфолио
```

### 4. Настрой форму отправки
1. Зарегистрируйся на [Formspree](https://formspree.io)
2. Создай форму и скопируй её ID
3. Открой `src/components/sections/Contact.tsx`
4. Замени `ТВОЙ_ID` в строке `fetch('https://formspree.io/f/ТВОЙ_ID', ...)`

### 5. Запусти локально
```bash
npm run dev
```
Открой [http://localhost:5173](http://localhost:5173) в браузере.

## 📁 Структура проекта

```
src/
  components/
    layout/
      Header.tsx          # навигация (десктоп + мобильное меню)
      Footer.tsx          # копирайт
    sections/
      Hero.tsx            # первый экран
      Portfolio.tsx       # портфолио с чередованием сторон
      About.tsx           # обо мне
      Services.tsx        # услуги
      Testimonials.tsx    # отзывы (Swiper)
      Contact.tsx         # контактная форма
    ui/                   # переиспользуемые UI-элементы
  hooks/                  # кастомные хуки
  data/
    portfolio.ts          # список работ
    services.ts           # список услуг
  App.tsx                 # главный компонент
  main.tsx                # точка входа (инициализация Lenis)
  index.css               # глобальные стили и директивы Tailwind
```

## 🎨 Кастомизация

### Цвета
Основные цвета заданы в `tailwind.config.js`:
- `dark` — фон (`#0A0A0A`)
- `copper` — акцент (`#D4A574`)

Можно изменить в файле конфигурации Tailwind.

### Шрифты
Подключаются в `index.html` и используются через классы Tailwind:
- `font-serif` — Playfair Display (заголовки)
- `font-sans` — Inter (основной текст)

### Данные
Контент (услуги, работы) хранится в папке `src/data/`. Просто отредактируй массивы.

## 📦 Деплой

Проект можно развернуть на любой платформе, поддерживающей статические сайты:
- **Vercel** — `npm run build` → импорт папки `dist`
- **Netlify** — перетащи папку `dist` в интерфейс
- **GitHub Pages** — используй экшн `vite build` и деплой ветки `gh-pages`

Команда для продакшен-сборки:
```bash
npm run build
```
Готовые файлы будут в папке `dist/`.


## 🤝 Благодарности

Спасибо сообществам Tailwind CSS и Framer Motion за отличные инструменты.

---

**Автор:** [MrKrabsArt]  
**Лицензия:** MIT
```
